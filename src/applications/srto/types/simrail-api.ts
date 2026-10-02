export namespace SimRailDataTypes {

    export interface RAW_SERVER {
        result: string
        data: ServerData[]
    }

    export interface ServerData {
        ServerCode: string,
        ServerName: string,
        ServerRegion: string,
        IsActive: boolean,
        id?: string
    }

    export interface RAW_STATIONS {
        result: string,
        data: StationData[]
    }

    export interface StationData {
        Name: string,
        Prefix: string,
        DifficultyLevel: number,
        Latititude: number,
        Longitude: number,
        MainImageURL: string,
        AdditionalImage1URL: string,
        AdditionalImage2URL: string,
        DispatchedBy: [
            {
                ServerCode: string,
                SteamId: string | null,
                XboxId: string | null
            }
        ] | []
        id: string
    }

    export interface RAW_TRAINS {
        result: string,
        data: TrainData[];
    }

    export interface TrainData {
        TrainNoLocal: string,
        TrainName: string,
        StartStation: string,
        EndStation: string,
        Vehicles: string[],
        ServerCode: string,
        TrainData: {
            ControlledBySteamID: string | null,
            ControlledByXboxID: string | null,
            InBorderStationArea: boolean,
            Latititute: number,
            Longitute: number,
            Velocity: number,
            SignalInFront: string | null,
            DistanceToSignalInFront: number,
            SignalInFrontSpeed: number,
            VDDelayedTimetableIndex: number,
            RequiredMapDLCs: string[] | null
        }
        RunId: string,
        id: string,
        Type: "bot" | "user";
    }

    export interface FilteredTrainData {
        TrainNoLocal: string
        Type: string //TrainName
        StartStation: string
        EndStation: string
        Vehicles: string[]
        TrainData: {
            ControlledBySteamID: string | null,
            ControlledByXboxID: string | null,
            Velocity: number
            SignalInFront: string | null
            SignalInFrontPredictive?: string | null
            SignalInFrontSpeed: number
            DistanceToSignalInFront: number
        }
        ControlledBy: 'bot' | 'user'
    }

    export interface SteamUser {
        steamid: string,
        communityvisibilitystate: number
        profilestate: number
        personaname: string
        profileurl: string
        avatar: string
        avatarmedium: string
        avatarfull: string
        avatarhash: string
        personastate: number
        realname: string
        primaryclanid: string
        timecreated: number
        personastateflags: number
        gameserverip: string
        gameserversteamid: string
        gameextrainfo: string
        gameid: string
        loccountrycode: string
        locstatecode: string
    }

    export interface GetAllTimetables {
        trainNoLocal: string
        trainNoInternational: string
        trainName: string
        startStation: string
        startsAt: string
        endStation: string
        endsAt: string
        locoType: string
        trainLength: number
        trainWeight: number
        continuesAs: string
        runId: string
        timetable: {
            nameOfPoint: string
            nameForPerson: string
            pointId: string
            supervisedBy: string
            radioChanels: string
            displayedTrainNumber: string
            arrivalTime: string
            departureTime: string
            stopType: "CommercialStop" | "NoncommercialStop" | "NoStopOver"
            line: number
            platform: string | null
            track: number | null
            trainType: string
            mileage: number
            maxSpeed: number
            stationCategory: string
        }[]
    }

    export interface GetEDRTimetables {
        trainNoLocal: string
        trainName: string
        startStation: string
        endStation: string
        usageNotes: string | null
        ownNotes: string | null
        isQualityTracked: boolean
        isOverGauge: boolean
        isOverWeight: any | null
        isOtherExceptional: boolean
        isHighRiskCargo: boolean
        isDangerousCargo: boolean
        carrierName: string
        timetable: {
            indexOfPoint: number
            nameForPerson: string
            pointId: string
            displayedTrainNumber: string
            arrivalTime: string
            actualArrivalTime: string | null
            departureTime: string
            actualDepartureTime: string | null
            isStoped: boolean
            stopDuration: number
            isActive: boolean
            isConfirmed: boolean
            confirmedBy: number
            plannedStop: number
            timetableType: number
            stopTypeNumber: number
            leftTrack: boolean
            line: number
            platform: string | null
            track: number | null
            trainType: string
            mileage: number
            maxSpeed: number
        }[]
    }

    export interface DelayData {
        timestamp: string
        serverCode: string
        delays: Delays[]
    }
    export interface Delays {
        trainNoLocal: string
        delayInfo: {
            delay: number
            type: string
            station: string
            nextStation: string
        }
    }

    export interface PlayerCount {
        [serverCode: string]: {
            stations: {
                byPlayer: number,
                total: number
            },
            trains: {
                byPlayer: number,
                total: number
            },
            percentFilled: number
        }
    }
}