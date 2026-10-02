import { useEffect, useState, useRef } from 'react'
import { SimRailDataTypes } from '../types/simrail-api'
import { getAPIEndpoint, getAPIEndpointWithLastModified } from '../utilities/getAPIEndpoints';
import { UserOptions } from '../types/types';
import { getNextSignalPredictive } from '../data/signalPrediction';
import { serverListOnAbortOrEmpty, DEV_TRAIN } from '../data/customData';

export function useSimRailDataUpdater(userOptions: UserOptions) {

    const [serverData, setServerData] = useState<SimRailDataTypes.ServerData[]>(serverListOnAbortOrEmpty);
    const [stationData, setStationData] = useState<SimRailDataTypes.StationData[]>([])
    const [trainData, setTrainData] = useState<SimRailDataTypes.FilteredTrainData[]>([]);
    const [delayData, setDelayData] = useState<SimRailDataTypes.Delays[]>([])
    const [playerCount, setPlayerCount] = useState<SimRailDataTypes.PlayerCount>({});

    const lastSignalMapRef = useRef<Map<string, string>>(new Map())
    const steamUserMapRef = useRef<Map<string, SimRailDataTypes.SteamUser>>(new Map());
    const [statusInformation, setStatusInformation] = useState<string>('');

    //* ============================
    //*      UPDATE SERVER DATA
    //* ============================
    useEffect(() => {
        let isFetching = false
        let cancelled = false;
        let activeController: AbortController | null = null;

        async function getSimRailServerList() {
            if (isFetching) return;
            isFetching = true;

            const controller = new AbortController();
            activeController = controller;
            const FETCH_TIMEOUTID = window.setTimeout(() => controller.abort(), 4000)

            try {
                const DATA = await getAPIEndpoint('server', controller.signal) as SimRailDataTypes.RAW_SERVER;

                if (cancelled || controller.signal.aborted) return;

                const serverDataFromResponse = DATA.data as SimRailDataTypes.ServerData[]

                setServerData(serverDataFromResponse ?? serverListOnAbortOrEmpty);
            } catch (e) {
                if (cancelled) return;

                // Optional: ignore expected abort logs
                if (e instanceof DOMException && e.name === "AbortError") {
                    setServerData(serverListOnAbortOrEmpty);
                    return;
                }

                console.error(e);
                setServerData(serverListOnAbortOrEmpty);
            } finally {
                window.clearTimeout(FETCH_TIMEOUTID);
                if (activeController === controller) activeController = null;
                isFetching = false;
            }
        }

        const intervalID = setInterval(getSimRailServerList, 5000);
        getSimRailServerList();

        return () => {
            cancelled = true;
            clearInterval(intervalID);
            activeController?.abort();
        }
    }, []);

    //* =======================================================
    //*      UPDATE TRAIN & STATION DATA + BUILD USER LIST
    //* =======================================================
    useEffect(() => {
        let isFetching = false
        let cancelled = false;
        let activeController: AbortController | null = null;

        function mapTrainData(raw: SimRailDataTypes.TrainData[]): SimRailDataTypes.FilteredTrainData[] {
            return raw.map((train) => ({
                TrainNoLocal: train.TrainNoLocal,
                Type: train.TrainName,
                StartStation: train.StartStation,
                EndStation: train.EndStation,
                Vehicles: train.Vehicles,
                TrainData: {
                    ControlledBySteamID: train.TrainData.ControlledBySteamID,
                    ControlledByXboxID: train.TrainData.ControlledByXboxID,
                    Velocity: train.TrainData.Velocity,
                    SignalInFront: train.TrainData.SignalInFront?.split('@')[0] ?? null,
                    SignalInFrontPredictive: train.TrainData.SignalInFront ?? getNextSignalPredictive(lastSignalMapRef.current.get(train.TrainNoLocal)) ?? null,
                    SignalInFrontSpeed: train.TrainData.SignalInFrontSpeed,
                    DistanceToSignalInFront: train.TrainData.SignalInFront ? train.TrainData.DistanceToSignalInFront : 99999
                },
                ControlledBy: train.Type
            }))
                .sort((a, b) => parseFloat(a.TrainNoLocal) - parseFloat(b.TrainNoLocal))
                ;
        }
        function collectSteamIDs(trainData: SimRailDataTypes.FilteredTrainData[], stationData: SimRailDataTypes.StationData[]) {
            const ids = new Set<string>();

            for (const station of stationData) {
                const steamid = station.DispatchedBy?.[0]?.SteamId ?? null
                if (steamid) ids.add(steamid)
            }

            for (const train of trainData) {
                const steamid = train.TrainData.ControlledBySteamID ?? null
                if (steamid) ids.add(steamid)
            }

            return Array.from(ids);
        }

        async function getSimRailUserData(steamIDSet: string[], signal: AbortSignal) {
            if (!Array.isArray(steamIDSet)) return;

            for (const steamid of steamIDSet) {
                try {
                    if (steamUserMapRef.current.has(steamid)) continue;

                    const USER_DATA = await getAPIEndpoint('steamuser', signal, steamid);
                    if (USER_DATA) steamUserMapRef.current.set(steamid, USER_DATA);
                } catch (e) {
                    if (e instanceof DOMException && e.name === "AbortError") break;
                    console.error(e);
                    continue;
                }
            }
        }

        function updateLatestSignal(trainData: SimRailDataTypes.FilteredTrainData[]) {
            for (const train of trainData) {
                const key = train.TrainNoLocal
                const signal = train.TrainData.SignalInFront ?? null

                if (signal) {
                    lastSignalMapRef.current.set(key, signal)
                }
            }
        }

        async function getSimRailStationAndTrainData() {
            if (!userOptions.selectedServer) return;
            if (isFetching || cancelled) return;
            isFetching = true;

            const controller = new AbortController();
            activeController = controller;
            const FETCH_TIMEOUTID = window.setTimeout(() => controller.abort(), 5000);

            try {
                const [stationResult, trainResult] = await Promise.allSettled([
                    getAPIEndpoint('stations', controller.signal, userOptions.selectedServer),
                    getAPIEndpoint('trains', controller.signal, userOptions.selectedServer),
                ]);

                if (cancelled || controller.signal.aborted) return;

                const STATIONDATA = stationResult.status === "fulfilled" ? (stationResult.value.data as SimRailDataTypes.StationData[] ?? []) : [];
                const TRAINDATA_RAW = trainResult.status === "fulfilled" ? trainResult.value.data as SimRailDataTypes.TrainData[] : null;

                const TRAINDATA = TRAINDATA_RAW ? mapTrainData(TRAINDATA_RAW) : []

                const steamIDSet = collectSteamIDs(TRAINDATA, STATIONDATA);

                if (steamUserMapRef.current.size === 0) setStatusInformation('Loading user data...');
                await getSimRailUserData(steamIDSet, controller.signal);
                updateLatestSignal(TRAINDATA)
                setStationData(STATIONDATA);
                setTrainData(TRAINDATA);
            } catch (e) {
                if (
                    cancelled ||
                    controller.signal.aborted ||
                    (e instanceof DOMException && e.name === "AbortError")
                ) {
                    return;
                }

                console.error(e);
                setStatusInformation('Error on loading data!');
                setStationData([]);
                setTrainData([]);
            } finally {
                window.clearTimeout(FETCH_TIMEOUTID);
                if (activeController === controller) activeController = null;
                isFetching = false;
                setStatusInformation('');
            }
        }

        const intervalID = setInterval(getSimRailStationAndTrainData, 2000);
        setStationData([]);
        setTrainData([]);
        steamUserMapRef.current.clear();
        lastSignalMapRef.current.clear();
        getSimRailStationAndTrainData();

        return () => {
            cancelled = true;
            window.clearInterval(intervalID);
            activeController?.abort();
        };
    }, [userOptions.selectedServer]);


    //* ==========================
    //*     UPDATE DELAY DATA
    //* ==========================
    useEffect(() => {
        let isFetching = false;
        let cancelled = false;
        let activeController: AbortController | null = null;
        let timeoutId: number | null = null;
        let lastKnownModified: string | null = null;

        const CYCLE_MS = 60000;
        const BUFFER_MS = 4000;
        const FALLBACK_MS = 2500;

        async function getDelayData() {
            if (!userOptions.selectedServer) return;
            if (isFetching || cancelled) return;
            isFetching = true;

            const controller = new AbortController();
            activeController = controller;
            const FETCH_TIMEOUTID = window.setTimeout(() => controller.abort(), 5000);

            let nextDelay = CYCLE_MS + BUFFER_MS;

            try {
                const result = await getAPIEndpointWithLastModified('delays', controller.signal, userOptions.selectedServer);
                if (!result || controller.signal.aborted || cancelled) return;

                const { data, lastModified } = result;
                const delays = (data as SimRailDataTypes.DelayData)?.delays;
                if (delays) setDelayData(delays);

                if (lastModified && lastModified === lastKnownModified) {
                    // Datei hat sich seit letztem Fetch noch nicht geändert -> bald erneut prüfen
                    nextDelay = FALLBACK_MS;
                } else if (lastModified) {
                    lastKnownModified = lastModified;
                    const age = Date.now() - new Date(lastModified).getTime();
                    nextDelay = Math.max(FALLBACK_MS, CYCLE_MS + BUFFER_MS - age);
                }
            } catch (e) {
                if (cancelled || controller.signal.aborted || (e instanceof DOMException && e.name === "AbortError")) return;
                console.error(e);
                setDelayData([]);
            } finally {
                window.clearTimeout(FETCH_TIMEOUTID);
                if (activeController === controller) activeController = null;
                isFetching = false;
                if (!cancelled) timeoutId = window.setTimeout(getDelayData, nextDelay);
            }
        }

        getDelayData();
        return () => {
            cancelled = true;
            if (timeoutId) window.clearTimeout(timeoutId);
            activeController?.abort();
        };
    }, [userOptions.selectedServer]);

    //* ==================================
    //*      UPDATE PLAYER COUNT DATA
    //* ==================================
    useEffect(() => {
        let isFetching = false;
        let cancelled = false;
        let activeController: AbortController | null = null;
        let timeoutId: number | null = null;
        let lastKnownModified: string | null = null;

        const CYCLE_MS = 30000;
        const BUFFER_MS = 3000;
        const FALLBACK_MS = 2500;

        async function getPlayerCounts() {
            if (isFetching || cancelled) return;
            isFetching = true;

            const controller = new AbortController();
            activeController = controller;
            const FETCH_TIMEOUTID = window.setTimeout(() => controller.abort(), 8000);

            let nextDelay = CYCLE_MS + BUFFER_MS;

            try {
                const result = await getAPIEndpointWithLastModified('playerCount', controller.signal);
                if (!result || controller.signal.aborted || cancelled) return;

                const { data, lastModified } = result;
                if (data) setPlayerCount(data as SimRailDataTypes.PlayerCount);

                if (lastModified && lastModified === lastKnownModified) {
                    // Datei hat sich seit letztem Fetch noch nicht geändert -> bald erneut prüfen
                    nextDelay = FALLBACK_MS;
                } else if (lastModified) {
                    lastKnownModified = lastModified;
                    const age = Date.now() - new Date(lastModified).getTime();
                    nextDelay = Math.max(FALLBACK_MS, CYCLE_MS + BUFFER_MS - age);
                }
            } catch (e) {
                if (cancelled || controller.signal.aborted || (e instanceof DOMException && e.name === "AbortError")) return;
                console.error(e);
                setPlayerCount({});
            } finally {
                window.clearTimeout(FETCH_TIMEOUTID);
                if (activeController === controller) activeController = null;
                isFetching = false;
                if (!cancelled) timeoutId = window.setTimeout(getPlayerCounts, nextDelay);
            }
        }

        getPlayerCounts();
        return () => {
            cancelled = true;
            if (timeoutId) window.clearTimeout(timeoutId);
            activeController?.abort();
        };
    }, [])


    return {
        serverData,
        stationData,
        trainData,
        delayData,
        playerCount,
        steamUserMapRef
    }
}