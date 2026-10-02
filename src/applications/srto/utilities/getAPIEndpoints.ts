import { SimRailDataTypes } from "../types/simrail-api";

type API_ENDPOINT = 'server' | 'trains' | 'stations' | 'steamuser' | 'delays' | 'playerCount' | 'getAllTimetables' | 'getAllTimetables_train' | 'getEDRTimetables'
const API_URL = (param1: string, param2: number): Record<API_ENDPOINT, string> => ({
    'server': 'https://panel.simrail.eu:8084/servers-open',
    'trains': `https://panel.simrail.eu:8084/trains-open?serverCode=${param1}`,
    'stations': `https://panel.simrail.eu:8084/stations-open?serverCode=${param1}`,
    'steamuser': `https://simrail-edr.emeraldnetwork.xyz/steam/${param1}`,
    //? this is own api endpoint at api.simrail-expert.de
    'delays': `https://api.simrail-expert.de/api/srto/trainDelays/${param1}-delays.json`,
    'playerCount': `https://api.simrail-expert.de/api/srto/playerCount/player-count.json`,
    //! LOCAL ENDPOINT - ONLY FOR TESTING
    'getAllTimetables': `http://25.41.92.247:8080/api/getAllTimetables?serverCode=${param1}`,
    'getAllTimetables_train': `http://25.41.92.247:8080/api/getAllTimetables?serverCode=${param1}&train=${param2}`,
    'getEDRTimetables': `http://25.41.92.247:8080/api/getEDRTimetables?serverCode=${param1}`,
});

export async function getAPIEndpoint(endpoint: API_ENDPOINT, signal?: AbortSignal, param1?: string, param2?: number) {
    try {
        if(endpoint === 'getAllTimetables_train' && !param2) {
            throw new Error('ERROR on getApiEndpoint: missing train number for endpoint "getAllTimetables_train"');
        }
        const URL = API_URL(param1 ?? '', param2 ?? 0)[endpoint]
        const response = await fetch(URL, { signal });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const DATA = await response.json();

        if (!DATA || DATA === undefined || DATA === null) {
            return null;
        }

        return DATA;
    } catch (e) {
        // Abort on unmount or timeout is expected and should not be logged as an error.
        if ((e instanceof DOMException && e.name === "AbortError") || signal?.aborted) {
            return null;
        }
        console.error(e);
        return null;
    }
}

export async function getAPIEndpointWithLastModified(endpoint: API_ENDPOINT, signal?: AbortSignal, param1?: string, param2?: number) {
    try {
        const URL = API_URL(param1 ?? '', param2 ?? 0)[endpoint]
        const response = await fetch(URL, { signal });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const lastModified = response.headers.get('last-modified');
        const DATA = await response.json();

        if (!DATA) return { data: null, lastModified };

        return { data: DATA, lastModified };
    } catch (e) {
        if ((e instanceof DOMException && e.name === "AbortError") || signal?.aborted) {
            return null;
        }
        console.error(e);
        return null;
    }
}