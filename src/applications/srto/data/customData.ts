import { SimRailDataTypes } from "../types/simrail-api";
import { Screen } from '../types/types';

export const DEV_TRAIN: SimRailDataTypes.FilteredTrainData[] = [
  // {
  //   TrainNoLocal: 'TR1L',
  //   Type: 'O-II-A-I',
  //   StartStation: 'Katowice',
  //   EndStation: 'Warszawa',
  //   Vehicles: ["Impuls/36wed-007"],
  //   TrainData: {
  //     ControlledBySteamID: '76561198147577290',
  //     ControlledByXboxID: null,
  //     Velocity: 5,
  //     SignalInFront: '2426_LCH_M',
  //     DistanceToSignalInFront: 20,
  //     SignalInFrontSpeed: 40,
  //   },
  //   ControlledBy: 'user'
  // },
  // {
  //   TrainNoLocal: 'TR1R',
  //   Type: 'O-II-A-I',
  //   StartStation: 'Katowice',
  //   EndStation: 'Warszawa',
  //   Vehicles: ["Impuls/36wed-007"],
  //   TrainData: {
  //     ControlledBySteamID: null,
  //     ControlledByXboxID: null,
  //     Velocity: 5,
  //     SignalInFront: '2432_LK_G1',
  //     DistanceToSignalInFront: 20,
  //     SignalInFrontSpeed: 0,
  //   },
  //   ControlledBy: 'user'
  // },
  // {
  //   TrainNoLocal: 'TR2L',
  //   Type: 'O-II-A-I',
  //   StartStation: 'Katowice',
  //   EndStation: 'Warszawa',
  //   Vehicles: ["Impuls/36wed-007"],
  //   TrainData: {
  //     ControlledBySteamID: null,
  //     ControlledByXboxID: null,
  //     Velocity: 50,
  //     SignalInFront: '2432_LK_K2',
  //     DistanceToSignalInFront: 20,
  //     SignalInFrontSpeed: 0,
  //   },
  //   ControlledBy: 'user'
  // },
  // {
  //   TrainNoLocal: 'TR2R',
  //   Type: 'O-II-A-I',
  //   StartStation: 'Katowice',
  //   EndStation: 'Warszawa',
  //   Vehicles: ["Impuls/36wed-007"],
  //   TrainData: {
  //     ControlledBySteamID: null,
  //     ControlledByXboxID: null,
  //     Velocity: 50,
  //     SignalInFront: '2432_LK_G4',
  //     DistanceToSignalInFront: 20,
  //     SignalInFrontSpeed: 0,
  //   },
  //   ControlledBy: 'user'
  // },
  // {
  //   TrainNoLocal: 'TR3L',
  //   Type: 'O-II-A-I',
  //   StartStation: 'Katowice',
  //   EndStation: 'Warszawa',
  //   Vehicles: ["Impuls/36wed-007"],
  //   TrainData: {
  //     ControlledBySteamID: null,
  //     ControlledByXboxID: null,
  //     Velocity: 250,
  //     SignalInFront: '2432_LK_K6',
  //     DistanceToSignalInFront: 20,
  //     SignalInFrontSpeed: 0,
  //   },
  //   ControlledBy: 'user'
  // },
  // {
  //   TrainNoLocal: 'TR3R',
  //   Type: 'O-II-A-I',
  //   StartStation: 'Katowice',
  //   EndStation: 'Warszawa',
  //   Vehicles: ["Impuls/36wed-007"],
  //   TrainData: {
  //     ControlledBySteamID: null,
  //     ControlledByXboxID: null,
  //     Velocity: 2500,
  //     SignalInFront: '2432_LK_G8',
  //     DistanceToSignalInFront: 20,
  //     SignalInFrontSpeed: 0,
  //   },
  //   ControlledBy: 'user'
  // },
]

export const serverListOnAbortOrEmpty: SimRailDataTypes.ServerData[] = [
  {
    "ServerCode": "cz1",
    "ServerName": "CZ1 (Česky)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "de1",
    "ServerName": "DE1 (Deutsch) [KEINE EVENTS]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "de2",
    "ServerName": "DE2 (Deutsch)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "de3",
    "ServerName": "DE3 (Deutsch)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "fr1",
    "ServerName": "FR1 (Français)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int1",
    "ServerName": "INT1 (International, Europe) [NO EVENTS]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int2",
    "ServerName": "INT2 (International, Europe)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int3",
    "ServerName": "INT3 (International, North America)",
    "ServerRegion": "North_America",
    "IsActive": false,
  },
  {
    "ServerCode": "int4",
    "ServerName": "INT4 (International, Europe)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int5",
    "ServerName": "INT5 (International, Europe) [PROVISIONAL TIMETABLE]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "int6-off",
    "ServerRegion": "Asia",
    "ServerName": "INT6 (International, Asia)",
    "IsActive": false,
  },
  {
    "ServerCode": "int9",
    "ServerName": "INT9 (TESTING & TRAINING SERVER) [No moderation]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "pl1",
    "ServerName": "PL1 (Polski)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "pl2",
    "ServerName": "PL2 (Polski)",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "pl3",
    "ServerName": "PL3 (Polski) [BEZ WYDARZEŃ]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "pl5",
    "ServerName": "PL5 (Polski) [TYMCZASOWY ROZKŁAD JAZDY]",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "xbx1",
    "ServerName": "Xbox Polski 1",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "xbx2",
    "ServerName": "Xbox International 1",
    "ServerRegion": "Europe",
    "IsActive": false,
  },
  {
    "ServerCode": "xbx3",
    "ServerName": "Xbox International 2",
    "ServerRegion": "Europe",
    "IsActive": false,
  }
]

export const screenList: Screen[] = [
  {
    screenid: 'screen1',
    screenTitle: 'S1 | Katowice - Dąbrowa Górnicza - Łazy - Zawiercie - Myszków / Góra Włodowska - Psary - Włoszczowa Północ',
  },
  {
    screenid: 'screen2',
    screenTitle: 'S2 | Włoszczowa Północ - Opoczno Południe - Grodzisk Mazowiecki - Warszawa',
  },
  {
    screenid: 'screen3',
    screenTitle: 'S3 | Sędzice - Łódź Kaliska - Zgierz -> Łódź North - Łódź Widzew - Łódź Olechów - Gałkówek',
  },
  {
    screenid: 'screen4',
    screenTitle: 'S4 | Rozprza - Rokiciny - Koluszki - Skierniewice - Żyrardów - Pruszków',
  },
  {
    screenid: 'screen5',
    screenTitle: 'S5 | Kraków Główny - Zastów - Niedźwiedź - Słomniki - Tunel - Kozłów - Sędziszów / Psary',
  },
  {
    screenid: 'screen6',
    screenTitle: 'S6 | Staszic - Sosn. Dańdówka - Juliusz - Dorota - Dąb. Górn. Wschodnia - Sławków - Tunel - Sędziszów',
  },
]

export const serverTimeOffset = {
    "cz1": +2,
    "de1": +2,
    "de2": -5,
    "de3": -2,
    "fr1": +2,
    "int1": +1,
    "int2": +2,
    "int3": -8,
    "int4": +12,
    "int5": +2,
    "int9": -3,
    "pl1": -9,
    "pl2": +2,
    "pl3": +2,
    "pl5": -4,
}