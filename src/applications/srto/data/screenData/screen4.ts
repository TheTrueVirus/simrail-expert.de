import { ScreenData } from '../../types/mapdata-types'

const OLD_TRACK_COLOR = 'rgb(255, 100, 100, 0.1)'
const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'

/* ================================================================================
    SCREEN 4 = ROZPRZA - PIOTRKOW TRYBUNALSKI - KOLUSZKI - SKIERNIEWICE - ZYRARDOW
   ================================================================================ */

export const SCREEN4_DATA: ScreenData.ScreenDataProps = {
    "ADDITIONAL_ELEMENTS": {
        "TRACKS": [
            {
                color: '',
                commands: []
            },
        ],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1840, y: 792 },
                text: 'LK25 - Dębica'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 15, y: 1210 },
                text: 'LK11 - Łowicz Główny'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2325, y: 1565 },
                text: 'LK1 - Warszawa Zachodnia'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2305, y: 1725 },
                text: 'LK447 - Warszawa Zachodnia'
            },
            {
                annotationType: 'trackBreakMarker',
                breakLetters: [
                    { first: { x: 2330, y: 80 }, second: { x: 30, y: 275 } },         // [A] Piotrkow Trybunalski <-> Baby
                    { first: { x: 2530, y: 280 }, second: { x: 820, y: 620 } },       // [B] Rokiciny <-> Koluszki
                    { first: { x: 1070, y: 520 }, second: { x: 500, y: 855 } },       // [C] Galkowek <-> Zakowice Poludniowe
                    { first: { x: 2540, y: 540 }, second: { x: 20, y: 975 } },       // [D] Koluszki <-> Rogow
                    { first: { x: 2540, y: 980 }, second: { x: 220, y: 1285 } },       // [E] Plycwia <-> Skierniewice
                    { first: { x: 2430, y: 1260 }, second: { x: 20, y: 1425 } },       // [F] Skierniewice <-> Zyrardow
                    { first: { x: 2150, y: 1430 }, second: { x: 20, y: 1565 } },       // [G] Zyrardow <-> Grodzisk Mazowiecki
                ]
            }
        ]
    },

    "3617_Ro_ROZPRZA": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M10,100 DOT5-5-2 SPR15 LR100 SPR10 LR70',
                    'M10,120 DOT5-5-3 SPR5 LR100 SPR10 LR70',
                    'M10,140 DOT5-5-2 SPR15 LR100 SPR10 LR25 SWUP20',
                    'M10,160 DOT5-5-2 SPR15 LR100 SPR10 LR10 SWUP20',
                    'M160,100 SWDN20 LR30 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3617_Ro_J',
                signalPos: { x: '27.5', y: '100' },
                trainPos: { x: '45', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_H',
                signalPos: { x: '27.5', y: '140' },
                trainPos: { x: '45', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_G',
                signalPos: { x: '27.5', y: '160' },
                trainPos: { x: '45', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_E',
                signalPos: { x: '150', y: '100' },
                trainPos: { x: '135', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_B',
                signalPos: { x: '150', y: '120' },
                trainPos: { x: '135', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_C',
                signalPos: { x: '150', y: '140' },
                trainPos: { x: '135', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_D',
                signalPos: { x: '150', y: '160' },
                trainPos: { x: '135', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_A',
                signalPos: { x: '220', y: '100' },
                trainPos: { x: '235', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3617_Ro_F',
                signalPos: { x: '220', y: '120' },
                trainPos: { x: '235', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Rozprza',
                    prefix: 'Ro',
                    pos: { x: 120, y: 70 },
                    posFlipped: { x: 120, y: 190 }
                },
                platforms: [
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 40, y: 105 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 90, y: 100 } },
                    { text: '2', pos: { x: 90, y: 120 } },
                    { text: '4', pos: { x: 90, y: 140 } },
                    { text: '6', pos: { x: 90, y: 160 } },
                ]
            }
        ]
    },
    "ROZPRZA_PIOTRKOWTRYBUNALSKI": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M230,100 ABS100-20-6',
                    'M230,120 ABS100-20-6'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1541N',
                signalPos: { x: '340', y: '100' },
                trainPos: { x: '325', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1540',
                signalPos: { x: '340', y: '120' },
                trainPos: { x: '325', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1541',
                signalPos: { x: '340', y: '100' },
                trainPos: { x: '355', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1540N',
                signalPos: { x: '340', y: '120' },
                trainPos: { x: '355', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_1525N',
                signalPos: { x: '460', y: '100' },
                trainPos: { x: '445', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1524',
                signalPos: { x: '460', y: '120' },
                trainPos: { x: '445', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1525',
                signalPos: { x: '460', y: '100' },
                trainPos: { x: '475', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1524N',
                signalPos: { x: '460', y: '120' },
                trainPos: { x: '475', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1509N',
                signalPos: { x: '580', y: '100' },
                trainPos: { x: '565', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1510',
                signalPos: { x: '580', y: '120' },
                trainPos: { x: '565', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1509',
                signalPos: { x: '580', y: '100' },
                trainPos: { x: '595', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1510N',
                signalPos: { x: '580', y: '120' },
                trainPos: { x: '595', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1497N',
                signalPos: { x: '700', y: '100' },
                trainPos: { x: '685', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1496',
                signalPos: { x: '700', y: '120' },
                trainPos: { x: '685', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1497',
                signalPos: { x: '700', y: '100' },
                trainPos: { x: '715', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1496N',
                signalPos: { x: '700', y: '120' },
                trainPos: { x: '715', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1481N',
                signalPos: { x: '820', y: '100' },
                trainPos: { x: '805', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1480',
                signalPos: { x: '820', y: '120' },
                trainPos: { x: '805', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1481',
                signalPos: { x: '820', y: '100' },
                trainPos: { x: '835', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1480N',
                signalPos: { x: '820', y: '120' },
                trainPos: { x: '835', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1541', pos: { x: 280, y: 100 } },
                    { text: '1556', pos: { x: 280, y: 120 } },

                    { text: '1525', pos: { x: 400, y: 100 } },
                    { text: '1540', pos: { x: 400, y: 120 } },

                    { text: '1509', pos: { x: 520, y: 100 } },
                    { text: '1524', pos: { x: 520, y: 120 } },

                    { text: '1497', pos: { x: 640, y: 100 } },
                    { text: '1510', pos: { x: 640, y: 120 } },

                    { text: '1481', pos: { x: 760, y: 100 } },
                    { text: '1496', pos: { x: 760, y: 120 } },

                    { text: '1467', pos: { x: 880, y: 100 } },
                    { text: '1480', pos: { x: 880, y: 120 } },
                ]
            }
        ]
    },
    "3223_PT_PIOTRKOWTRYBUNALSKI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ main tracks 1/2/3
                    // main tracks 21/1
                    'M950,100 LR100 SPR10 LR340 SPR10 LR190',
                    // main tracks 22/2
                    'M950,120 LR260 SPR10 LR310 SPR10 LR60',
                    // main tracks 23/3
                    'M1005,100 SWUP20 LR40 SPR10 LR100 SPR10 LR100 SPR10 LR90 SWUP20 LR25 SPR10 LR100 SPR10 LR20 SWDN40 LR10 SWDN20 LR20 SWUP20',

                    // TRACK 29
                    'M1035,40 SWUP20 LR20 SPR10 LR100 SPR10 LR30 SWDN60 LR40 SWDN20 LR20 SWDN20',
                    // TRACK 27
                    'M1020,80 SWUP40 LR25 SPR10 LR100 SPR10 LR10 SWDN20',
                    // TRACK 25
                    'M1035,80 SWUP20 LR10 SPR10 LR100 SPR10 LR25 SWDN20',



                    // TRACK 26
                    'M970,120 SWUP20 LR20 SWDN20 LR10 SWDN40 LR175 SPR10 LR125 SWUP40 LR10 SWUP20 LR10 SWUP20',
                    // TRACK 28
                    'M1025,160 SWDN20 LR140 SPR10 LR25 SWUP20',
                    // TRACK 30
                    'M1040,180 SWDN20 LR125 SPR10 LR10 SWUP20',
                    // TRACK 32
                    'M1055,200 SWDN20 LR30 SPR10 LR100 SPR10 LR10 SWUP60 LR30 SWUP40',
                    // TRACK 34
                    'M1075,220 SWDN20 LR10 SPR10 LR110 SPR10 LR15 SWUP80 LR70 SWUP40',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3223_PT_U',
                signalPos: { x: '940', y: '100' },
                trainPos: { x: '925', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_W',
                signalPos: { x: '940', y: '120' },
                trainPos: { x: '925', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_Z1',
                signalPos: { x: '940', y: '100' },
                trainPos: { x: '955', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_Z2',
                signalPos: { x: '940', y: '120' },
                trainPos: { x: '955', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '3223_PT_R29',
                signalPos: { x: '1060', y: '20' },
                trainPos: { x: '1075', y: '20' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_R27',
                signalPos: { x: '1050', y: '40' },
                trainPos: { x: '1065', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_R25',
                signalPos: { x: '1050', y: '60' },
                trainPos: { x: '1065', y: '60' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_R23',
                signalPos: { x: '1050', y: '80' },
                trainPos: { x: '1065', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_R21',
                signalPos: { x: '1050', y: '100' },
                trainPos: { x: '1065', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '3223_PT_L32',
                signalPos: { x: '1090', y: '220' },
                trainPos: { x: '1105', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_L34',
                signalPos: { x: '1090', y: '240' },
                trainPos: { x: '1105', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //? GT RIGHT SIDE
            {
                signalName: '3223_PT_H29',
                signalPos: { x: '1180', y: '20' },
                trainPos: { x: '1165', y: '20' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_H27',
                signalPos: { x: '1170', y: '40' },
                trainPos: { x: '1155', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_H25',
                signalPos: { x: '1170', y: '60' },
                trainPos: { x: '1155', y: '60' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_H23',
                signalPos: { x: '1170', y: '80' },
                trainPos: { x: '1155', y: '80' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_J22',
                signalPos: { x: '1220', y: '120' },
                trainPos: { x: '1205', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_J26',
                signalPos: { x: '1200', y: '160' },
                trainPos: { x: '1185', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_J28',
                signalPos: { x: '1180', y: '180' },
                trainPos: { x: '1165', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_J30',
                signalPos: { x: '1180', y: '200' },
                trainPos: { x: '1165', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_J32',
                signalPos: { x: '1210', y: '220' },
                trainPos: { x: '1195', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_J34',
                signalPos: { x: '1220', y: '240' },
                trainPos: { x: '1205', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '3223_PT_G',
                signalPos: { x: '1270', y: '80' },
                trainPos: { x: '1282.5', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '3223_PT_F',
                signalPos: { x: '1400', y: '60' },
                trainPos: { x: '1415', y: '60' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_E',
                signalPos: { x: '1400', y: '100' },
                trainPos: { x: '1415', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '3223_PT_C',
                signalPos: { x: '1520', y: '60' },
                trainPos: { x: '1505', y: '60' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_D',
                signalPos: { x: '1540', y: '120' },
                trainPos: { x: '1510', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '3223_PT_A',
                signalPos: { x: '1600', y: '100' },
                trainPos: { x: '1615', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3223_PT_B',
                signalPos: { x: '1600', y: '120' },
                trainPos: { x: '1615', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Piotrków Trybunalski',
                    prefix: 'PT',
                    pos: { x: 1360, y: 30 },
                    posFlipped: { x: 1360, y: 190 }
                },
                platforms: [
                    { label: 'Peron II', width: 95, height: 30, pos: { x: 1412.5, y: 65 } },
                    { label: 'Peron I', width: 115, height: 10, pos: { x: 1400, y: 125 } },
                ],
                trackLabels: [
                    { text: '29', pos: { x: 1120, y: 20 } },
                    { text: '27', pos: { x: 1110, y: 40 } },
                    { text: '25', pos: { x: 1110, y: 60 } },
                    { text: '23', pos: { x: 1110, y: 80 } },
                    { text: '21', pos: { x: 1135, y: 100 } },
                    { text: '22', pos: { x: 1135, y: 120 } },
                    { text: '26', pos: { x: 1110, y: 160 } },
                    { text: '28', pos: { x: 1120, y: 180 } },
                    { text: '30', pos: { x: 1120, y: 200 } },
                    { text: '32', pos: { x: 1150, y: 220 } },
                    { text: '34', pos: { x: 1155, y: 240 } },
                    { text: '5a', pos: { x: 1320, y: 80 } },
                    { text: '1a', pos: { x: 1315, y: 100 } },
                    { text: '2a', pos: { x: 1300, y: 120 } },
                    { text: '12', pos: { x: 1285, y: 160 } },
                    { text: '3', pos: { x: 1460, y: 60 } },
                    { text: '1', pos: { x: 1460, y: 100 } },
                    { text: '2', pos: { x: 1460, y: 120 } },
                ]
            }
        ]
    },
    "PIOTRKOWTRYBUNALSKI_BABY_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1610,100 ABS100-20-6 SPR10 LR10 TEND',
                    'M1610,120 ABS100-20-6 SPR10 LR10 TEND'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1423N',
                signalPos: { x: '1720', y: '100' },
                trainPos: { x: '1705', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1424P',
                signalPos: { x: '1720', y: '120' },
                trainPos: { x: '1705', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1423P',
                signalPos: { x: '1720', y: '100' },
                trainPos: { x: '1735', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1424N',
                signalPos: { x: '1720', y: '120' },
                trainPos: { x: '1735', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_1413N',
                signalPos: { x: '1840', y: '100' },
                trainPos: { x: '1825', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1412P',
                signalPos: { x: '1840', y: '120' },
                trainPos: { x: '1825', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1413P',
                signalPos: { x: '1840', y: '100' },
                trainPos: { x: '1855', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1412N',
                signalPos: { x: '1840', y: '120' },
                trainPos: { x: '1855', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1399N',
                signalPos: { x: '1960', y: '100' },
                trainPos: { x: '1945', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1400P',
                signalPos: { x: '1960', y: '120' },
                trainPos: { x: '1945', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1399P',
                signalPos: { x: '1960', y: '100' },
                trainPos: { x: '1975', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1400N',
                signalPos: { x: '1960', y: '120' },
                trainPos: { x: '1975', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1385N',
                signalPos: { x: '2080', y: '100' },
                trainPos: { x: '2065', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1386P',
                signalPos: { x: '2080', y: '120' },
                trainPos: { x: '2065', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1385P',
                signalPos: { x: '2080', y: '100' },
                trainPos: { x: '2095', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1386N',
                signalPos: { x: '2080', y: '120' },
                trainPos: { x: '2095', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1373N',
                signalPos: { x: '2200', y: '100' },
                trainPos: { x: '2185', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1372P',
                signalPos: { x: '2200', y: '120' },
                trainPos: { x: '2185', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1373P',
                signalPos: { x: '2200', y: '100' },
                trainPos: { x: '2215', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1372N',
                signalPos: { x: '2200', y: '120' },
                trainPos: { x: '2215', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1357N',
                signalPos: { x: '2320', y: '100' },
                trainPos: { x: '2305', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1358P',
                signalPos: { x: '2320', y: '120' },
                trainPos: { x: '2305', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1423', pos: { x: 1660, y: 100 } },
                    { text: '1434', pos: { x: 1660, y: 120 } },

                    { text: '1413', pos: { x: 1780, y: 100 } },
                    { text: '1424', pos: { x: 1780, y: 120 } },

                    { text: '1399', pos: { x: 1900, y: 100 } },
                    { text: '1412', pos: { x: 1900, y: 120 } },

                    { text: '1385', pos: { x: 2020, y: 100 } },
                    { text: '1400', pos: { x: 2020, y: 120 } },

                    { text: '1373', pos: { x: 2140, y: 100 } },
                    { text: '1386', pos: { x: 2140, y: 120 } },

                    { text: '1357', pos: { x: 2260, y: 100 } },
                    { text: '1372', pos: { x: 2260, y: 120 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Jarosty',
                    pos: { x: 2080, y: 70 },
                    posFlipped: { x: 2080, y: 150 },
                    platforms: [
                        { pos: { x: 2018, y: 125 }, width: 50, height: 7.5 },
                        { pos: { x: 2092, y: 87.5 }, width: 50, height: 7.5 },
                    ]
                }
            }
        ]
    },



    "PIOTRKOWTRYBUNALSKI_BABY_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M20,290 TSTART LR10 SPR10 ABS100-20-4',
                    'M20,310 TSTART LR10 SPR10 ABS100-20-4'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1357P',
                signalPos: { x: '40', y: '300' },
                trainPos: { x: '55', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1358N',
                signalPos: { x: '40', y: '320' },
                trainPos: { x: '55', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1343N',
                signalPos: { x: '160', y: '300' },
                trainPos: { x: '145', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1342P',
                signalPos: { x: '160', y: '320' },
                trainPos: { x: '145', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1343P',
                signalPos: { x: '160', y: '300' },
                trainPos: { x: '175', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1342N',
                signalPos: { x: '160', y: '320' },
                trainPos: { x: '175', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1329N',
                signalPos: { x: '280', y: '300' },
                trainPos: { x: '265', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1328P',
                signalPos: { x: '280', y: '320' },
                trainPos: { x: '265', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1329P',
                signalPos: { x: '280', y: '300' },
                trainPos: { x: '295', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1328N',
                signalPos: { x: '280', y: '320' },
                trainPos: { x: '295', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1315N',
                signalPos: { x: '400', y: '300' },
                trainPos: { x: '385', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1314P',
                signalPos: { x: '400', y: '320' },
                trainPos: { x: '385', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1315P',
                signalPos: { x: '400', y: '300' },
                trainPos: { x: '415', y: '300' },
                trainPosDistance: [
                    { distanceToSignal: 1280, x: 555, y: 300 }
                ],
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1314N',
                signalPos: { x: '400', y: '320' },
                trainPos: { x: '415', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [

                    { text: '1343', pos: { x: 100, y: 300 } },
                    { text: '1358', pos: { x: 100, y: 320 } },

                    { text: '1329', pos: { x: 220, y: 300 } },
                    { text: '1342', pos: { x: 220, y: 320 } },

                    { text: '1315', pos: { x: 340, y: 300 } },
                    { text: '1328', pos: { x: 340, y: 320 } },

                    { text: '1305', pos: { x: 460, y: 300 } },
                    { text: '1314', pos: { x: 460, y: 320 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Moszczenica',
                    pos: { x: 195, y: 270 },
                    posFlipped: { x: 195, y: 350 },
                    platforms: [
                        { pos: { x: 172, y: 287.5 }, width: 50, height: 7.5 },
                        { pos: { x: 172, y: 325 }, width: 50, height: 7.5 },
                    ]
                }
            }
        ]
    },
    "60_Ba_BABY": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M520,300 LR140 SPR10 LR100 SPR10 LR110',
                    'M520,320 LR160 SPR10 LR100 SPR10 LR90',

                    'M645,300 SWUP20 LR10 SPR10 LR100 SPR10 LR10 SWDN20',

                    'M630,300 SWDN20 LR10 SWDN20 LR30 SPR10 LR100 SPR10 LR25 SWUP20 LR10 SWUP20 LR20 SWDN20',
                    'M660,340 SWDN20 LR15 SPR10 LR100 SPR10 LR10 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '60_Ba_S',
                signalPos: { x: '520', y: '300' },
                trainPos: { x: '505', y: '300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_T',
                signalPos: { x: '520', y: '320' },
                trainPos: { x: '505', y: '320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '60_Ba_O',
                signalPos: { x: '660', y: '280' },
                trainPos: { x: '675', y: '280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_N',
                signalPos: { x: '660', y: '300' },
                trainPos: { x: '675', y: '300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_M',
                signalPos: { x: '680', y: '320' },
                trainPos: { x: '695', y: '320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_L',
                signalPos: { x: '680', y: '340' },
                trainPos: { x: '695', y: '340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_K',
                signalPos: { x: '680', y: '360' },
                trainPos: { x: '695', y: '360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '60_Ba_D',
                signalPos: { x: '780', y: '280' },
                trainPos: { x: '765', y: '280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_E',
                signalPos: { x: '780', y: '300' },
                trainPos: { x: '765', y: '300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_F',
                signalPos: { x: '800', y: '320' },
                trainPos: { x: '785', y: '320' },
                trainPosDistance: [
                    { distanceToSignal: 1000, x: 625, y: 320 }
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_G',
                signalPos: { x: '800', y: '340' },
                trainPos: { x: '785', y: '340' },
                trainPosDistance: [
                    { distanceToSignal: 980, x: 625, y: 320 }
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '60_Ba_H',
                signalPos: { x: '800', y: '360' },
                trainPos: { x: '785', y: '360' },
                trainPosDistance: [
                    { distanceToSignal: 990, x: 625, y: 320 }
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '60_Ba_B',
                signalPos: { x: '890', y: '300' },
                trainPos: { x: '905', y: '300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '60_Ba_A',
                signalPos: { x: '890', y: '320' },
                trainPos: { x: '905', y: '320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Baby',
                    prefix: 'Ba',
                    pos: { x: 700, y: 250 },
                    posFlipped: { x: 700, y: 390 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 610, y: 255 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 70, height: 10, pos: { x: 555, y: 285 } },
                    { label: 'Peron II', width: 70, height: 10, pos: { x: 555, y: 325 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 720, y: 280 } },
                    { text: '1', pos: { x: 720, y: 300 } },
                    { text: '2', pos: { x: 740, y: 320 } },
                    { text: '4', pos: { x: 740, y: 340 } },
                    { text: '6', pos: { x: 740, y: 360 } },
                ]
            }
        ]
    },
    "BABY_ROKICINY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M900,300 ABS100-20-10',
                    'M900,320 ABS100-20-10',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1273N',
                signalPos: { x: '1010', y: '300' },
                trainPos: { x: '995', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1274',
                signalPos: { x: '1010', y: '320' },
                trainPos: { x: '995', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1273',
                signalPos: { x: '1010', y: '300' },
                trainPos: { x: '1025', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1274N',
                signalPos: { x: '1010', y: '320' },
                trainPos: { x: '1025', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_1259N',
                signalPos: { x: '1130', y: '300' },
                trainPos: { x: '1115', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1258',
                signalPos: { x: '1130', y: '320' },
                trainPos: { x: '1115', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1259',
                signalPos: { x: '1130', y: '300' },
                trainPos: { x: '1145', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1258N',
                signalPos: { x: '1130', y: '320' },
                trainPos: { x: '1145', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1243N',
                signalPos: { x: '1250', y: '300' },
                trainPos: { x: '1235', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1242',
                signalPos: { x: '1250', y: '320' },
                trainPos: { x: '1235', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1243',
                signalPos: { x: '1250', y: '300' },
                trainPos: { x: '1265', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1242N',
                signalPos: { x: '1250', y: '320' },
                trainPos: { x: '1265', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1227N',
                signalPos: { x: '1370', y: '300' },
                trainPos: { x: '1355', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1226',
                signalPos: { x: '1370', y: '320' },
                trainPos: { x: '1355', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1227',
                signalPos: { x: '1370', y: '300' },
                trainPos: { x: '1385', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1226N',
                signalPos: { x: '1370', y: '320' },
                trainPos: { x: '1385', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1213N',
                signalPos: { x: '1490', y: '300' },
                trainPos: { x: '1475', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1212',
                signalPos: { x: '1490', y: '320' },
                trainPos: { x: '1475', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1213',
                signalPos: { x: '1490', y: '300' },
                trainPos: { x: '1505', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1212N',
                signalPos: { x: '1490', y: '320' },
                trainPos: { x: '1505', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1199N',
                signalPos: { x: '1610', y: '300' },
                trainPos: { x: '1595', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1198',
                signalPos: { x: '1610', y: '320' },
                trainPos: { x: '1595', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1199',
                signalPos: { x: '1610', y: '300' },
                trainPos: { x: '1625', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1198N',
                signalPos: { x: '1610', y: '320' },
                trainPos: { x: '1625', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1185N',
                signalPos: { x: '1730', y: '300' },
                trainPos: { x: '1715', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1186',
                signalPos: { x: '1730', y: '320' },
                trainPos: { x: '1715', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1185',
                signalPos: { x: '1730', y: '300' },
                trainPos: { x: '1745', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1186N',
                signalPos: { x: '1730', y: '320' },
                trainPos: { x: '1745', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1169N',
                signalPos: { x: '1850', y: '300' },
                trainPos: { x: '1835', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1170',
                signalPos: { x: '1850', y: '320' },
                trainPos: { x: '1835', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1169',
                signalPos: { x: '1850', y: '300' },
                trainPos: { x: '1865', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1170N',
                signalPos: { x: '1850', y: '320' },
                trainPos: { x: '1865', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_1155N',
                signalPos: { x: '1970', y: '300' },
                trainPos: { x: '1955', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1156',
                signalPos: { x: '1970', y: '320' },
                trainPos: { x: '1955', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1155',
                signalPos: { x: '1970', y: '300' },
                trainPos: { x: '1985', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1156N',
                signalPos: { x: '1970', y: '320' },
                trainPos: { x: '1985', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1273', pos: { x: 950, y: 300 } },
                    { text: '1284', pos: { x: 950, y: 320 } },

                    { text: '1259', pos: { x: 1070, y: 300 } },
                    { text: '1274', pos: { x: 1070, y: 320 } },

                    { text: '1243', pos: { x: 1190, y: 300 } },
                    { text: '1258', pos: { x: 1190, y: 320 } },

                    { text: '1227', pos: { x: 1310, y: 300 } },
                    { text: '1242', pos: { x: 1310, y: 320 } },

                    { text: '1213', pos: { x: 1430, y: 300 } },
                    { text: '1226', pos: { x: 1430, y: 320 } },

                    { text: '1199', pos: { x: 1550, y: 300 } },
                    { text: '1212', pos: { x: 1550, y: 320 } },

                    { text: '1185', pos: { x: 1670, y: 300 } },
                    { text: '1198', pos: { x: 1670, y: 320 } },

                    { text: '1169', pos: { x: 1790, y: 300 } },
                    { text: '1186', pos: { x: 1790, y: 320 } },

                    { text: '1155', pos: { x: 1910, y: 300 } },
                    { text: '1170', pos: { x: 1910, y: 320 } },

                    { text: '1145', pos: { x: 2030, y: 300 } },
                    { text: '1156', pos: { x: 2030, y: 320 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Wolbórka',
                    pos: { x: 1310, y: 280 },
                    posFlipped: { x: 1310, y: 340 },
                    platforms: [
                        { pos: { x: 1285, y: 305 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łaznów',
                    pos: { x: 1692.5, y: 270 },
                    posFlipped: { x: 1692.5, y: 350 },
                    platforms: [
                        { pos: { x: 1667.5, y: 287.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1667.5, y: 325 }, width: 50, height: 7.5 },
                    ]
                }
            }
        ]
    },
    "3594_Ro_ROKICINY": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M2090,300 LR140 SPR10 LR100 SPR10 LR50',
                    'M2090,320 LR140 SPR10 LR100 SPR10 LR50',

                    'M2200,320 SWUP20 LR10 SWUP20 LR10 SPR10 LR100 SPR10 LR15 SWDN20 LR10 SWDN20',
                    'M2215,320 SWDN20 LR10 SPR10 LR100 SPR10 LR10 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3594_Ro_N',
                signalPos: { x: '2090', y: '300' },
                trainPos: { x: '2075', y: '300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3594_Ro_O',
                signalPos: { x: '2090', y: '320' },
                trainPos: { x: '2075', y: '320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3594_Ro_L',
                signalPos: { x: '2230', y: '280' },
                trainPos: { x: '2245', y: '280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3594_Ro_K',
                signalPos: { x: '2230', y: '300' },
                trainPos: { x: '2245', y: '300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3594_Ro_J',
                signalPos: { x: '2230', y: '320' },
                trainPos: { x: '2245', y: '320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3594_Ro_H',
                signalPos: { x: '2230', y: '340' },
                trainPos: { x: '2245', y: '340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '3594_Ro_D',
                signalPos: { x: '2350', y: '280' },
                trainPos: { x: '2335', y: '280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3594_Ro_E',
                signalPos: { x: '2350', y: '300' },
                trainPos: { x: '2335', y: '300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3594_Ro_F',
                signalPos: { x: '2350', y: '320' },
                trainPos: { x: '2335', y: '320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3594_Ro_G',
                signalPos: { x: '2350', y: '340' },
                trainPos: { x: '2335', y: '340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3594_Ro_B',
                signalPos: { x: '2400', y: '300' },
                trainPos: { x: '2415', y: '300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3594_Ro_A',
                signalPos: { x: '2400', y: '320' },
                trainPos: { x: '2415', y: '320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Rokiciny',
                    prefix: 'Ro',
                    pos: { x: 2290, y: 250 },
                    posFlipped: { x: 2290, y: 370 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 2180, y: 255 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron II', width: 70, height: 10, pos: { x: 2125, y: 285 } },
                    { label: 'Peron I', width: 70, height: 10, pos: { x: 2125, y: 325 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 2290, y: 280 } },
                    { text: '1', pos: { x: 2290, y: 300 } },
                    { text: '2', pos: { x: 2290, y: 320 } },
                    { text: '4', pos: { x: 2290, y: 340 } },
                ]
            }
        ]
    },
    "ROKICINY_KOLUSZKI_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2410,300 LR100 SPR10 LR10 TEND',
                    'M2410,320 LR100 SPR10 LR10 TEND',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1115N',
                signalPos: { x: '2520', y: '300' },
                trainPos: { x: '2505', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1116',
                signalPos: { x: '2520', y: '320' },
                trainPos: { x: '2505', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            }
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1115', pos: { x: 2460, y: 300 } },
                    { text: '1126', pos: { x: 2460, y: 320 } },
                ]
            }
        ]
    },



    "LODZWIDZEW_LODZOLECHOW_GALKOWEG": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M40,440 ABS100-20-5',
                    'M40,460 ABS100-20-5',

                    'M400,500 LR220',
                    'M400,520 LR220',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '2422_LA_H',
                signalPos: { x: '30', y: '440' },
                trainPos: { x: '45', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2422_LA_G',
                signalPos: { x: '30', y: '460' },
                trainPos: { x: '45', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_Z2',
                signalPos: { x: '390', y: '500' },
                trainPos: { x: '405', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_Z1',
                signalPos: { x: '390', y: '520' },
                trainPos: { x: '405', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            // after LODZ ANDRZEJOW
            //
            {
                signalName: 'L17_124N',
                signalPos: { x: '150', y: '440' },
                trainPos: { x: '135', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_121',
                signalPos: { x: '150', y: '460' },
                trainPos: { x: '135', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_124',
                signalPos: { x: '150', y: '440' },
                trainPos: { x: '165', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_121N',
                signalPos: { x: '150', y: '460' },
                trainPos: { x: '165', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //
            {
                signalName: 'L17_138N',
                signalPos: { x: '270', y: '440' },
                trainPos: { x: '255', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_137',
                signalPos: { x: '270', y: '460' },
                trainPos: { x: '255', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_138',
                signalPos: { x: '270', y: '440' },
                trainPos: { x: '285', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_137N',
                signalPos: { x: '270', y: '460' },
                trainPos: { x: '285', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            //
            {
                signalName: 'L17_152N',
                signalPos: { x: '390', y: '440' },
                trainPos: { x: '375', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_151',
                signalPos: { x: '390', y: '460' },
                trainPos: { x: '375', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_152',
                signalPos: { x: '390', y: '440' },
                trainPos: { x: '405', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_151N',
                signalPos: { x: '390', y: '460' },
                trainPos: { x: '405', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            //
            {
                signalName: 'L17_166N',
                signalPos: { x: '510', y: '440' },
                trainPos: { x: '495', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_167',
                signalPos: { x: '510', y: '460' },
                trainPos: { x: '495', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_166',
                signalPos: { x: '510', y: '440' },
                trainPos: { x: '525', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_167N',
                signalPos: { x: '510', y: '460' },
                trainPos: { x: '525', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Bedoń',
                    pos: { x: 210, y: 410 },
                    posFlipped: { x: 210, y: 490 },
                    platforms: [
                        { pos: { x: 185, y: 427.5 }, width: 50, height: 7.5 },
                        { pos: { x: 185, y: 465 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Justynów',
                    pos: { x: 450, y: 410 },
                    posFlipped: { x: 450, y: 490 },
                    platforms: [
                        { pos: { x: 425, y: 427.6 }, width: 50, height: 7.5 },
                        { pos: { x: 425, y: 465 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '124', pos: { x: 90, y: 440 } },
                    { text: '107', pos: { x: 90, y: 460 } },
                    { text: '138', pos: { x: 210, y: 440 } },
                    { text: '121', pos: { x: 210, y: 460 } },
                    { text: '152', pos: { x: 330, y: 440 } },
                    { text: '137', pos: { x: 330, y: 460 } },
                    { text: '166', pos: { x: 450, y: 440 } },
                    { text: '151', pos: { x: 450, y: 460 } },
                    { text: '180', pos: { x: 570, y: 440 } },
                    { text: '167', pos: { x: 570, y: 460 } },
                ]
            },
        ]
    },
    "924_G_GALKOWEK": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M630,440 LR80 SPR10 LR100 SPR10 LR100',
                    'M630,460 LR80 SPR10 LR100 SPR10 LR100',

                    'M650,440 SWDN20 LR30 SWUP20',
                    'M662.5,500 SWUP40',
                    'M692.5,500 SWUP40',
                    'M650,500 SWDN20 LR15 SWUP20',

                    'M680,520 SWDN20 LR25 SPR10 LR100 SPR10 LR10 SWUP20',

                    'M630,500 LR80 SPR10 LR100 SPR10 LR100',
                    'M630,520 LR80 SPR10 LR100 SPR10 LR100',

                    'M865,440 SWDN20 LR30 SWUP20',
                    'M850,460 SWDN20 LR10 SWDN20',
                    'M885,460 SWDN20 LR10 SWDN20',
                    'M855,520 SWUP20 LR30 SWDN20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '924_G_A',
                signalPos: { x: '630', y: '440' },
                trainPos: { x: '615', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_B',
                signalPos: { x: '630', y: '460' },
                trainPos: { x: '615', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_C',
                signalPos: { x: '630', y: '500' },
                trainPos: { x: '615', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_D',
                signalPos: { x: '630', y: '520' },
                trainPos: { x: '615', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_J',
                signalPos: { x: '710', y: '440' },
                trainPos: { x: '725', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_H',
                signalPos: { x: '710', y: '460' },
                trainPos: { x: '725', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_G',
                signalPos: { x: '710', y: '500' },
                trainPos: { x: '725', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_F',
                signalPos: { x: '710', y: '520' },
                trainPos: { x: '725', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_E',
                signalPos: { x: '710', y: '540' },
                trainPos: { x: '725', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_K',
                signalPos: { x: '830', y: '440' },
                trainPos: { x: '815', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_L',
                signalPos: { x: '830', y: '460' },
                trainPos: { x: '815', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_M',
                signalPos: { x: '830', y: '500' },
                trainPos: { x: '815', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_N',
                signalPos: { x: '830', y: '520' },
                trainPos: { x: '815', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_O',
                signalPos: { x: '830', y: '540' },
                trainPos: { x: '815', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_T',
                signalPos: { x: '930', y: '440' },
                trainPos: { x: '945', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_S',
                signalPos: { x: '930', y: '460' },
                trainPos: { x: '945', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_R',
                signalPos: { x: '930', y: '500' },
                trainPos: { x: '945', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_P',
                signalPos: { x: '930', y: '520' },
                trainPos: { x: '945', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Gałkówek',
                    prefix: 'G',
                    pos: { x: 770, y: 405 },
                    posFlipped: { x: 770, y: 560 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 880, y: 405 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 768, y: 425 } },
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 768, y: 465 } },
                ],
                trackLabels: [
                    { text: '2', pos: { x: 770, y: 440 } },
                    { text: '1', pos: { x: 770, y: 460 } },
                    { text: '3', pos: { x: 770, y: 500 } },
                    { text: '5', pos: { x: 770, y: 520 } },
                    { text: '7', pos: { x: 770, y: 540 } },
                ]
            }
        ]
    },
    "GALKOWEG_KOLUSZKI": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M940,440 LR100 SPR10 LR10 SWDN20 LR5 SPR10 LR100',
                    'M940,460 LR100 SPR10 LR5 SWDN20 LR10 SPR10 LR100',

                    'M940,500 LR100 TEND',
                    'M940,520 LR100 TEND',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L17_222N',
                signalPos: { x: '1050', y: '440' },
                trainPos: { x: '1035', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_219',
                signalPos: { x: '1050', y: '460' },
                trainPos: { x: '1035', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_222',
                signalPos: { x: '1070', y: '460' },
                trainPos: { x: '1085', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_219N',
                signalPos: { x: '1070', y: '480' },
                trainPos: { x: '1085', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '222', pos: { x: 990, y: 440 } },
                    { text: '203', pos: { x: 990, y: 460 } },

                    { text: '242', pos: { x: 1130, y: 460 } },
                    { text: '219', pos: { x: 1130, y: 480 } },
                ]
            },
        ]
    },

    "ROKICINY_KOLUSZKI_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M810,570 TSTART LR10 SPR10 ABS100-20-3',
                    'M810,590 TSTART LR10 SPR10 ABS100-20-3',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1115',
                signalPos: { x: '830', y: '580' },
                trainPos: { x: '845', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1116N',
                signalPos: { x: '830', y: '600' },
                trainPos: { x: '845', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            {
                signalName: 'L1_1103N',
                signalPos: { x: '950', y: '580' },
                trainPos: { x: '935', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1102',
                signalPos: { x: '950', y: '600' },
                trainPos: { x: '935', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1103',
                signalPos: { x: '950', y: '580' },
                trainPos: { x: '965', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1102N',
                signalPos: { x: '950', y: '600' },
                trainPos: { x: '965', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            {
                signalName: 'L1_1089N',
                signalPos: { x: '1070', y: '580' },
                trainPos: { x: '1055', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1090',
                signalPos: { x: '1070', y: '600' },
                trainPos: { x: '1055', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_1089',
                signalPos: { x: '1070', y: '580' },
                trainPos: { x: '1085', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_1090N',
                signalPos: { x: '1070', y: '600' },
                trainPos: { x: '1085', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1103', pos: { x: 890, y: 580 } },
                    { text: '1116', pos: { x: 890, y: 600 } },

                    { text: '1089', pos: { x: 1010, y: 580 } },
                    { text: '1102', pos: { x: 1010, y: 600 } },

                    { text: '1077', pos: { x: 1130, y: 580 } },
                    { text: '1090', pos: { x: 1130, y: 600 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Chrusty Nowe',
                    pos: { x: 890, y: 550 },
                    posFlipped: { x: 890, y: 630 },
                    platforms: [
                        { pos: { x: 865, y: 567.5 }, width: 50, height: 7.5 },
                        { pos: { x: 865, y: 605 }, width: 50, height: 7.5 },
                    ]
                }
            }
        ]
    },
    "1803_KO_KOLUSZKI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //* SW129/120a
                    'M1560,580 SWUP20 LR95 SWUP40',
                    //* SW120b/120a/118 - SW111 - T7
                    'M1645,540 SWUP20 LR20 SWUP20 LR10 SWUP20 LR20 SPR10 LR100 SPR10 LR110 SWDN20 LR45 SPR10 LR100 SPR10 LR75 SWDN30 LR10 SWDN30',
                    //& TOR 2G - T5b - T5 - T105
                    'M1190,460 LR80 SPR10 LR145 SWDN40 LR100 SPR10 LR170 SPR10 LR100 SPR10 LR15 SWDN20 LR140 SPR10 LR120 SPR10 LR40 SWDN20 LR10 SWDN20',
                    //& TOR 1G - T3b - T3 - T103
                    'M1190,480 LR80 SPR10 LR130 SWDN60 LR115 SPR10 LR170 SPR10 LR100 SPR10 LR160 SPR10 LR120 SPR10 LR20 SWDN20 LR15 SWDN40 LR45 SWUP40 LR45 SWDN40',
                    //?* inner curve T3s
                    'M1210,480 SWDN40 LR55 SPR10 LR100 UTLD20 LL100 SPL10 LL35 M1230,580 SWUP40 LR5',
                    //?* outer curve T4s
                    'M1220,460 SWDN20 LR20 SWDN20 LR20 SPR10 LR115 UTLD60 LL115 SPL10 LL20 M1245,600 SWUP40 LR5',
                    //& TOR 1R - T1c - T1 - T101 - TOR 1R
                    'M1190,580 LR80 SPR10 LR250 SPR10 LR130 SWUP20 LR35 SPR10 LR100 SPR10 LR160 SPR10 LR120 SPR10 LR160',
                    //& TOR 2R - T2c - T2 - T102 - TOR 2R
                    'M1190,600 LR80 SPR10 LR250 SPR10 LR170 SPR10 LR100 SPR10 LR160 SPR10 LR120 SPR10 LR160',
                    //~ TOR 2S - lower curve to LK1
                    'M1210,580 SWDN20 LR15 SWDN20 LR35 UTLD30 LL80',
                    //~  TOR 1Z - T4
                    'M1190,670 LR380 SWUP50 LR135 SPR10 LR100 SPR10 LR90',
                    //~ TOR 1S - T6 - T104
                    'M1190,690 LR395 SWUP50 LR120 SPR10 LR100 SPR10 LR140 SPR10 LR120 SPR10 LR45 SWUP40',
                    //* SW112cd - T8 - T108
                    'M1670,640 SWDN40 LR35 SPR10 LR100 SPR10 LR140 SPR10 LR120 SPR10 LR15 SWUP20',
                    //* SW104 - T10
                    'M1685,680 SWDN20 LR20 SPR10 LR100 SPR10 LR15 SWUP20',
                    //* SW78/76ab - 76cd/74ab - T106
                    'M1840,620 SWDN20 LR10 SWDN20 LR110 SPR10 LR120 SPR10 LR30 SWUP20',
                    //* SW72/67a - 64b/63ab - T109
                    'M1882.5,540 SWUP40 LR15 SWUP40 LR42.5 SWDN20 LR35 SPR10 LR100 SPR10 LR15 SWDN20',
                    //* SW63cd - T111
                    'M1915,460 SWUP20 LR40 SWDN20 LR25 SPR10 LR100 SPR10 LR30 SWDN40',
                    //~~~~~~~~~~~~~~~~~~~~~~~\\
                    //~ ADDITIONAL SWITCHES ~\\
                    //~~~~~~~~~~~~~~~~~~~~~~~\\
                    // 127/125 - 126/123 - 115/112ab
                    'M1570,580 SWDN20 LR10 SWDN20 LR60 SWDN20',
                    // 124/122ab - 122cd/121
                    'M1600,640 SWUP20 LR10 SWUP20',
                    // 119/114
                    'M1660,600 SWUP20',
                    // 116/113ab - 113cd/109ab
                    'M1670,600 SWDN20 LR10 SWDN20',
                    // CROSS SWITCH TRACK3/1
                    'M1680,540 CROSS',
                    // CROSS SWITCH TRACK 106/108
                    'M1870,660 CROSS',
                    // 68cd/65ab - 65cd/61
                    'M1900,660 SWUP20 LR10 SWUP20 LR10 SWUP20 LR15 SWUP40 LR20 SWDN40',
                    // 67b/67a/64a
                    'M1870,520 SWUP20 LR40 SWUP20',
                    // 62/59
                    'M1935,540 SWDN20',
                ]
            }
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: '1803_KO_R2',
                signalPos: { x: '1190', y: '460' },
                trainPos: { x: '1175', y: '460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_R1',
                signalPos: { x: '1190', y: '480' },
                trainPos: { x: '1175', y: '480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '1803_KO_U1',
                signalPos: { x: '1190', y: '580' },
                trainPos: { x: '1175', y: '580' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_U2',
                signalPos: { x: '1190', y: '600' },
                trainPos: { x: '1175', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '1803_KO_T',
                signalPos: { x: '1190', y: '650' },
                trainPos: { x: '1175', y: '650' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_M',
                signalPos: { x: '1190', y: '670' },
                trainPos: { x: '1175', y: '670' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_N',
                signalPos: { x: '1190', y: '690' },
                trainPos: { x: '1175', y: '690' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: '1803_KO_O2',
                signalPos: { x: '1270', y: '460' },
                trainPos: { x: '1285', y: '460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_O1',
                signalPos: { x: '1270', y: '480' },
                trainPos: { x: '1285', y: '480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_P2',
                signalPos: { x: '1270', y: '500' },
                trainPos: { x: '1285', y: '500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_P1',
                signalPos: { x: '1270', y: '520' },
                trainPos: { x: '1285', y: '520' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_S3',
                signalPos: { x: '1270', y: '540' },
                trainPos: { x: '1285', y: '540' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_S4',
                signalPos: { x: '1270', y: '560' },
                trainPos: { x: '1285', y: '560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_S1',
                signalPos: { x: '1270', y: '580' },
                trainPos: { x: '1285', y: '580' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_S2',
                signalPos: { x: '1270', y: '600' },
                trainPos: { x: '1285', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ INTERMEDIATE SIGNALS LEFT TO RIGHT
            {
                signalName: '1803_KO_K2',
                signalPos: { x: '1540', y: '500' },
                trainPos: { x: '1525', y: '500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_K1',
                signalPos: { x: '1540', y: '540' },
                trainPos: { x: '1525', y: '540' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_L1',
                signalPos: { x: '1540', y: '580' },
                trainPos: { x: '1525', y: '580' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_L2',
                signalPos: { x: '1540', y: '600' },
                trainPos: { x: '1525', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ TRACK SIGNALS LEFT SIDE
            {
                signalName: '1803_KO_J7',
                signalPos: { x: '1710', y: '480' },
                trainPos: { x: '1725', y: '480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J5',
                signalPos: { x: '1710', y: '500' },
                trainPos: { x: '1725', y: '500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J3',
                signalPos: { x: '1710', y: '540' },
                trainPos: { x: '1725', y: '540' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J1',
                signalPos: { x: '1710', y: '560' },
                trainPos: { x: '1725', y: '560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J2',
                signalPos: { x: '1710', y: '600' },
                trainPos: { x: '1725', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J4',
                signalPos: { x: '1710', y: '620' },
                trainPos: { x: '1725', y: '620' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J6',
                signalPos: { x: '1710', y: '640' },
                trainPos: { x: '1725', y: '640' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J8',
                signalPos: { x: '1710', y: '680' },
                trainPos: { x: '1725', y: '680' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_J10',
                signalPos: { x: '1710', y: '700' },
                trainPos: { x: '1725', y: '700' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ TRACK SIGNALS RIGHT SIDE
            {
                signalName: '1803_KO_G7',
                signalPos: { x: '1830', y: '480' },
                trainPos: { x: '1815', y: '480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G5',
                signalPos: { x: '1830', y: '500' },
                trainPos: { x: '1815', y: '500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G3',
                signalPos: { x: '1830', y: '540' },
                trainPos: { x: '1815', y: '540' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G1',
                signalPos: { x: '1830', y: '560' },
                trainPos: { x: '1815', y: '560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G2',
                signalPos: { x: '1830', y: '600' },
                trainPos: { x: '1815', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G4',
                signalPos: { x: '1830', y: '620' },
                trainPos: { x: '1815', y: '620' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G6',
                signalPos: { x: '1830', y: '640' },
                trainPos: { x: '1815', y: '640' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G8',
                signalPos: { x: '1830', y: '680' },
                trainPos: { x: '1815', y: '680' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_G10',
                signalPos: { x: '1830', y: '700' },
                trainPos: { x: '1815', y: '700' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ GT TRACK SIGNALS LEFT SIDE
            {
                signalName: '1803_KO_E111',
                signalPos: { x: '1990', y: '460' },
                trainPos: { x: '2005', y: '460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E109',
                signalPos: { x: '1990', y: '480' },
                trainPos: { x: '2005', y: '480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E107',
                signalPos: { x: '1990', y: '500' },
                trainPos: { x: '2005', y: '500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E105',
                signalPos: { x: '1990', y: '520' },
                trainPos: { x: '2005', y: '520' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E103',
                signalPos: { x: '1990', y: '540' },
                trainPos: { x: '2005', y: '540' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E101',
                signalPos: { x: '1990', y: '560' },
                trainPos: { x: '2005', y: '560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E102',
                signalPos: { x: '1990', y: '600' },
                trainPos: { x: '2005', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E104',
                signalPos: { x: '1970', y: '640' },
                trainPos: { x: '1985', y: '640' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E106',
                signalPos: { x: '1970', y: '660' },
                trainPos: { x: '1985', y: '660' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_E108',
                signalPos: { x: '1970', y: '680' },
                trainPos: { x: '1985', y: '680' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ GT TRACK SIGNALS RIGHT SIDE
            {
                signalName: '1803_KO_C111',
                signalPos: { x: '2110', y: '460' },
                trainPos: { x: '2095', y: '460' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C109',
                signalPos: { x: '2110', y: '480' },
                trainPos: { x: '2095', y: '480' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C107',
                signalPos: { x: '2110', y: '500' },
                trainPos: { x: '2095', y: '500' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C105',
                signalPos: { x: '2130', y: '520' },
                trainPos: { x: '2115', y: '520' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C103',
                signalPos: { x: '2130', y: '540' },
                trainPos: { x: '2115', y: '540' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C101',
                signalPos: { x: '2130', y: '560' },
                trainPos: { x: '2115', y: '560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C102',
                signalPos: { x: '2130', y: '600' },
                trainPos: { x: '2115', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C104',
                signalPos: { x: '2110', y: '640' },
                trainPos: { x: '2095', y: '640' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C106',
                signalPos: { x: '2110', y: '660' },
                trainPos: { x: '2095', y: '660' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1803_KO_C108',
                signalPos: { x: '2110', y: '680' },
                trainPos: { x: '2095', y: '680' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //* ENTRY SIGNALS FROM ROGOW (RIGHT SIDE)
            {
                signalName: '1803_KO_B',
                signalPos: { x: '2290', y: '560' },
                trainPos: { x: '2305', y: '560' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1803_KO_A',
                signalPos: { x: '2290', y: '600' },
                trainPos: { x: '2305', y: '600' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Koluszki',
                    prefix: 'Ko',
                    pos: { x: 1770, y: 445 },
                    posFlipped: { x: 1770, y: 725 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1880, y: 570 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 95, height: 30, pos: { x: 1722.5, y: 505 } },
                    { label: 'Peron II', width: 95, height: 30, pos: { x: 1722.5, y: 565 } },
                    { label: 'Peron III', width: 95, height: 30, pos: { x: 1722.5, y: 645 } },
                ],
                trackLabels: [
                    { text: '5b', pos: { x: 1350, y: 460 } },
                    { text: '3b', pos: { x: 1350, y: 480 } },
                    { text: '4s', pos: { x: 1335, y: 500 } },
                    { text: '3s', pos: { x: 1335, y: 540 } },
                    { text: '1c', pos: { x: 1405, y: 580 } },
                    { text: '2c', pos: { x: 1405, y: 600 } },
                    { text: '7', pos: { x: 1770, y: 480 } },
                    { text: '5', pos: { x: 1770, y: 500 } },
                    { text: '3', pos: { x: 1770, y: 540 } },
                    { text: '1', pos: { x: 1770, y: 560 } },
                    { text: '2', pos: { x: 1770, y: 600 } },
                    { text: '4', pos: { x: 1770, y: 620 } },
                    { text: '6', pos: { x: 1770, y: 640 } },
                    { text: '8', pos: { x: 1770, y: 680 } },
                    { text: '10', pos: { x: 1770, y: 700 } },
                    { text: '111', pos: { x: 2050, y: 460 } },
                    { text: '109', pos: { x: 2050, y: 480 } },
                    { text: '107', pos: { x: 2050, y: 500 } },
                    { text: '105', pos: { x: 2060, y: 520 } },
                    { text: '103', pos: { x: 2060, y: 540 } },
                    { text: '101', pos: { x: 2060, y: 560 } },
                    { text: '102', pos: { x: 2060, y: 600 } },
                    { text: '104', pos: { x: 2040, y: 640 } },
                    { text: '106', pos: { x: 2040, y: 660 } },
                    { text: '108', pos: { x: 2040, y: 680 } },
                ]
            }
        ]
    },
    "ZAKOWICE--KOLUSZKI--SLOTWINY--MIKOLAJOW": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    // Galkowek - Zakowice
                    'M490,870 TSTART LR100',
                    'M490,890 TSTART LR100',

                    // Zakowice - Koluszki
                    'M930,800 LR102.5 SWUP130 LR142.5',
                    // Zakowice - Slotwiny
                    'M930,820 LR250',
                    // Zakowice - Mikolajow
                    'M930,880 LR670',
                    'M930,900 LR670',

                    // Slotwiny - Koluszki Station
                    'M1180,690 LL102.5 UTRD110 LR102.5',
                    // Slotwiny - Koluszki to LK1
                    'M1180,650 LL122.5 LINE1055,655 LD10 SPD10 LD140 SPD10 LD10 LINE1057.5,840 LR122.5',

                    // Slotwiny - Mikolajow
                    'M1500,780 LR100',
                    'M1500,800 LR100'
                ]
            }
        ],
        "SIGNALS": [], //~ NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [] //~ NO ANNOTATIONS IN THIS CLUSTER
    },
    "5377_ZP_ZAKOWICEPOLUDNIOWE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M610,880 LR310',
                    'M610,900 LR310',
                    'M710,880 SWDN20 LR20 SWUP20 LR10 SWUP60 LR15 SPR10 LR100 SPR10 LR30',
                    'M900,820 SWUP20 LR15'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '5377_ZP_A',
                signalPos: { x: '610', y: '880' },
                trainPos: { x: '595', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_B',
                signalPos: { x: '610', y: '900' },
                trainPos: { x: '595', y: '900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5377_ZP_E',
                signalPos: { x: '770', y: '820' },
                trainPos: { x: '785', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_T',
                signalPos: { x: '890', y: '820' },
                trainPos: { x: '875', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5377_ZP_W',
                signalPos: { x: '920', y: '800' },
                trainPos: { x: '935', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_U',
                signalPos: { x: '920', y: '820' },
                trainPos: { x: '935', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_D',
                signalPos: { x: '920', y: '880' },
                trainPos: { x: '935', y: '880' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5377_ZP_C',
                signalPos: { x: '920', y: '900' },
                trainPos: { x: '935', y: '900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Żakowice Południowe',
                    prefix: 'ZP',
                    pos: { x: 765, y: 790 },
                    posFlipped: { x: 765, y: 935 }
                },
                platforms: [
                    { label: 'Peron II', width: 70, height: 10, pos: { x: 625, y: 865 } },
                    { label: 'Peron I', width: 70, height: 10, pos: { x: 625, y: 905 } },
                ],
                trackLabels: [
                    { text: '11', pos: { x: 830, y: 820 } },
                ]
            }
        ]
    },
    "3928_Sl_SLOTWINY": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M1190,800 LR100 SPR10 LR100 SPR10 LR80',

                    // T2
                    'M1190,840 LR20 SWUP20 M1190,820 LR65 SWUP20 LR15 SWUP20 LR10 SPR10 LR100 SPR10 LR80',
                    // T7
                    'M1225,800 SWDN20 LR10 SWDN20 LR45 SPR10 LR100 SPR10 LR20 SWUP20',
                    // T5
                    'M1265,840 SWUP20 LR20 SPR10 LR100 SPR10 LR35 SWUP20',
                    // T9
                    'M1275,840 SWDN20 LR10 SPR10 LR100 SPR10 LR5 SWUP20',

                    // SW42/43 - 38/39
                    'M1430,780 SWDN20 LR30 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3928_Sl_A',
                signalPos: { x: '1190', y: '800' },
                trainPos: { x: '1175', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_B',
                signalPos: { x: '1190', y: '820' },
                trainPos: { x: '1175', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_C',
                signalPos: { x: '1190', y: '840' },
                trainPos: { x: '1175', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3928_Sl_F',
                signalPos: { x: '1290', y: '780' },
                trainPos: { x: '1305', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_G',
                signalPos: { x: '1290', y: '800' },
                trainPos: { x: '1305', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_D5',
                signalPos: { x: '1290', y: '820' },
                trainPos: { x: '1305', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_D7',
                signalPos: { x: '1290', y: '840' },
                trainPos: { x: '1305', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_D9',
                signalPos: { x: '1290', y: '860' },
                trainPos: { x: '1305', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '3928_Sl_H',
                signalPos: { x: '1410', y: '780' },
                trainPos: { x: '1395', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_J',
                signalPos: { x: '1410', y: '800' },
                trainPos: { x: '1395', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_K5',
                signalPos: { x: '1410', y: '820' },
                trainPos: { x: '1395', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_K7',
                signalPos: { x: '1410', y: '840' },
                trainPos: { x: '1395', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_K9',
                signalPos: { x: '1410', y: '860' },
                trainPos: { x: '1395', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3928_Sl_M',
                signalPos: { x: '1490', y: '780' },
                trainPos: { x: '1505', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3928_Sl_N',
                signalPos: { x: '1490', y: '800' },
                trainPos: { x: '1505', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Słotwiny',
                    prefix: 'Sł',
                    lcsControlledBy: 'Żakowice Południowe',
                    pos: { x: 1350, y: 740 },
                    posFlipped: { x: 1350, y: 940 }
                },
                platforms: [
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 1325, y: 765 } },
                    { label: 'Peron II', width: 50, height: 7.5, pos: { x: 1325, y: 805 } },
                ],
                trackLabels: [
                    { text: '2', pos: { x: 1350, y: 780 } },
                    { text: '1', pos: { x: 1350, y: 800 } },
                    { text: '5', pos: { x: 1350, y: 820 } },
                    { text: '7', pos: { x: 1350, y: 840 } },
                    { text: '9', pos: { x: 1350, y: 860 } },
                ]
            }
        ]
    },
    "2628_Mi_MIKOLAJOW": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1610,880 LR20 SWUP100 LR30 SWUP20 LR10 SPR10 LR100 SPR10 DOT5-5-3',
                    'M1610,780 LR70 SPR10 LR100 SPR10 DOT5-5-3',
                    'M1610,800 LR70 SPR10 LR100 SPR10 DOT5-5-3',
                    'M1610,900 LR35 SWUP100 LR15 SWDN20 LR10 SPR10 LR100 SPR10 DOT5-5-3',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '2628_Mi_A',
                signalPos: { x: '1610', y: '780' },
                trainPos: { x: '1595', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_B',
                signalPos: { x: '1610', y: '800' },
                trainPos: { x: '1595', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_C',
                signalPos: { x: '1610', y: '880' },
                trainPos: { x: '1595', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_D',
                signalPos: { x: '1610', y: '900' },
                trainPos: { x: '1595', y: '900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2628_Mi_J',
                signalPos: { x: '1680', y: '760' },
                trainPos: { x: '1695', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_H',
                signalPos: { x: '1680', y: '780' },
                trainPos: { x: '1695', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_G',
                signalPos: { x: '1680', y: '800' },
                trainPos: { x: '1695', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_F',
                signalPos: { x: '1680', y: '820' },
                trainPos: { x: '1695', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2628_Mi_M',
                signalPos: { x: '1800', y: '760' },
                trainPos: { x: '1785', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_N',
                signalPos: { x: '1800', y: '780' },
                trainPos: { x: '1785', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_O',
                signalPos: { x: '1800', y: '800' },
                trainPos: { x: '1785', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2628_Mi_P',
                signalPos: { x: '1800', y: '820' },
                trainPos: { x: '1785', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Mikołajów',
                    prefix: 'Mi',
                    pos: { x: 1740, y: 740 },
                    posFlipped: { x: 1740, y: 850 }
                },
                trackLabels: [
                    { text: '2', pos: { x: 1740, y: 760 } },
                    { text: '1', pos: { x: 1740, y: 780 } },
                    { text: '3', pos: { x: 1740, y: 800 } },
                    { text: '5', pos: { x: 1740, y: 820 } },
                ]
            }
        ]
    },
    "KOLUSZKI_ROGOW_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2300,560 ABS100-20-2 SPR10 LR10 TEND',
                    'M2300,600 ABS100-20-2 SPR10 LR10 TEND',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1021N',
                signalPos: { x: '2410', y: '560' },
                trainPos: { x: '2395', y: '560' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1020',
                signalPos: { x: '2410', y: '600' },
                trainPos: { x: '2395', y: '600' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1021',
                signalPos: { x: '2410', y: '560' },
                trainPos: { x: '2425', y: '560' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_1020N',
                signalPos: { x: '2410', y: '600' },
                trainPos: { x: '2425', y: '600' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_1013N',
                signalPos: { x: '2530', y: '560' },
                trainPos: { x: '2515', y: '560' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1014',
                signalPos: { x: '2530', y: '600' },
                trainPos: { x: '2515', y: '600' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1021', pos: { x: 2350, y: 560 } },
                    { text: '1036', pos: { x: 2350, y: 600 } },

                    { text: '1013', pos: { x: 2470, y: 560 } },
                    { text: '1028', pos: { x: 2470, y: 600 } },
                ]
            }
        ]
    },



    "KOLUSZKI_ROGOW_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,990 TSTART LR10 SPR10 ABS100-20-4',
                    'M10,1010 TSTART LR10 SPR10 ABS100-20-4',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_1013',
                signalPos: { x: '30', y: '1000' },
                trainPos: { x: '45', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_1014N',
                signalPos: { x: '30', y: '1020' },
                trainPos: { x: '45', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_1003N',
                signalPos: { x: '150', y: '1000' },
                trainPos: { x: '135', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1002',
                signalPos: { x: '150', y: '1020' },
                trainPos: { x: '135', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_1003',
                signalPos: { x: '150', y: '1000' },
                trainPos: { x: '165', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_1002N',
                signalPos: { x: '150', y: '1020' },
                trainPos: { x: '165', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_987N',
                signalPos: { x: '270', y: '1000' },
                trainPos: { x: '255', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_988',
                signalPos: { x: '270', y: '1020' },
                trainPos: { x: '255', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_987',
                signalPos: { x: '270', y: '1000' },
                trainPos: { x: '285', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_988N',
                signalPos: { x: '270', y: '1020' },
                trainPos: { x: '285', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_979N',
                signalPos: { x: '390', y: '1000' },
                trainPos: { x: '375', y: '1000' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_978',
                signalPos: { x: '390', y: '1020' },
                trainPos: { x: '375', y: '1020' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_979',
                signalPos: { x: '390', y: '1000' },
                trainPos: { x: '405', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_978N',
                signalPos: { x: '390', y: '1020' },
                trainPos: { x: '405', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1003', pos: { x: 90, y: 1000 } },
                    { text: '1014', pos: { x: 90, y: 1020 } },

                    { text: '987', pos: { x: 210, y: 1000 } },
                    { text: '1002', pos: { x: 210, y: 1020 } },

                    { text: '979', pos: { x: 330, y: 1000 } },
                    { text: '988', pos: { x: 330, y: 1020 } },

                    { text: '965', pos: { x: 450, y: 1000 } },
                    { text: '978', pos: { x: 450, y: 1020 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Wągry',
                    pos: { x: 210, y: 970 },
                    posFlipped: { x: 210, y: 1050 },
                    platforms: [
                        { pos: { x: 185, y: 987.5 }, width: 50, height: 7.5 },
                        { pos: { x: 185, y: 1025 }, width: 50, height: 7.5 },
                    ]
                },
            }
        ]
    },
    "3590_Rg_ROGOW": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M510,1000 LR50 SPR10 LR100 SPR10 LR110',
                    'M510,1020 LR90 SPR10 LR100 SPR10 LR70',

                    'M530,1020 SWUP20 LR10 SWUP20 LR10 SPR10 LR100 SPR10 LR15 SWDN20 LR50 SWDN20 LR10 SWUP20',
                    'M580,1020 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3590_Rg_L',
                signalPos: { x: '510', y: '1000' },
                trainPos: { x: '495', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3590_Rg_M',
                signalPos: { x: '510', y: '1020' },
                trainPos: { x: '495', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3590_Rg_K',
                signalPos: { x: '560', y: '980' },
                trainPos: { x: '575', y: '980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3590_Rg_J',
                signalPos: { x: '560', y: '1000' },
                trainPos: { x: '575', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3590_Rg_H',
                signalPos: { x: '600', y: '1020' },
                trainPos: { x: '615', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3590_Rg_G',
                signalPos: { x: '600', y: '1040' },
                trainPos: { x: '615', y: '1040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~
            {
                signalName: '3590_Rg_C',
                signalPos: { x: '680', y: '980' },
                trainPos: { x: '665', y: '980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3590_Rg_D',
                signalPos: { x: '680', y: '1000' },
                trainPos: { x: '665', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3590_Rg_E',
                signalPos: { x: '720', y: '1020' },
                trainPos: { x: '705', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3590_Rg_F',
                signalPos: { x: '720', y: '1040' },
                trainPos: { x: '705', y: '1040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3590_Rg_B',
                signalPos: { x: '790', y: '1000' },
                trainPos: { x: '805', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3590_Rg_A',
                signalPos: { x: '790', y: '1020' },
                trainPos: { x: '805', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Rogów',
                    prefix: 'Rg',
                    pos: { x: 670, y: 950 },
                    posFlipped: { x: 640, y: 1070 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 680, y: 1055 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 56, height: 10, pos: { x: 612, y: 1005 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 620, y: 980 } },
                    { text: '1', pos: { x: 620, y: 1000 } },
                    { text: '2', pos: { x: 660, y: 1020 } },
                    { text: '4', pos: { x: 660, y: 1040 } },
                ]
            }
        ]
    },
    "ROGOW_PLYCWIA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M800,1000 ABS100-20-9',
                    'M800,1020 ABS100-20-9'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_931N',
                signalPos: { x: '910', y: '1000' },
                trainPos: { x: '895', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_932',
                signalPos: { x: '910', y: '1020' },
                trainPos: { x: '895', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_931',
                signalPos: { x: '910', y: '1000' },
                trainPos: { x: '925', y: '1000' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_932N',
                signalPos: { x: '910', y: '1020' },
                trainPos: { x: '925', y: '1020' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_925N',
                signalPos: { x: '1030', y: '1000' },
                trainPos: { x: '1015', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_922',
                signalPos: { x: '1030', y: '1020' },
                trainPos: { x: '1015', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_925',
                signalPos: { x: '1030', y: '1000' },
                trainPos: { x: '1045', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_922N',
                signalPos: { x: '1030', y: '1020' },
                trainPos: { x: '1045', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_909N',
                signalPos: { x: '1150', y: '1000' },
                trainPos: { x: '1135', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_910',
                signalPos: { x: '1150', y: '1020' },
                trainPos: { x: '1135', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_909',
                signalPos: { x: '1150', y: '1000' },
                trainPos: { x: '1165', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_910N',
                signalPos: { x: '1150', y: '1020' },
                trainPos: { x: '1165', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_893N',
                signalPos: { x: '1270', y: '1000' },
                trainPos: { x: '1255', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_894',
                signalPos: { x: '1270', y: '1020' },
                trainPos: { x: '1255', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_893',
                signalPos: { x: '1270', y: '1000' },
                trainPos: { x: '1285', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_894N',
                signalPos: { x: '1270', y: '1020' },
                trainPos: { x: '1285', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_879N',
                signalPos: { x: '1390', y: '1000' },
                trainPos: { x: '1375', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_878',
                signalPos: { x: '1390', y: '1020' },
                trainPos: { x: '1375', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_879',
                signalPos: { x: '1390', y: '1000' },
                trainPos: { x: '1405', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_878N',
                signalPos: { x: '1390', y: '1020' },
                trainPos: { x: '1405', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_863N',
                signalPos: { x: '1510', y: '1000' },
                trainPos: { x: '1495', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_864',
                signalPos: { x: '1510', y: '1020' },
                trainPos: { x: '1495', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_863',
                signalPos: { x: '1510', y: '1000' },
                trainPos: { x: '1525', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_864N',
                signalPos: { x: '1510', y: '1020' },
                trainPos: { x: '1525', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_851N',
                signalPos: { x: '1630', y: '1000' },
                trainPos: { x: '1615', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_850',
                signalPos: { x: '1630', y: '1020' },
                trainPos: { x: '1615', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_851',
                signalPos: { x: '1630', y: '1000' },
                trainPos: { x: '1645', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_850N',
                signalPos: { x: '1630', y: '1020' },
                trainPos: { x: '1645', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_833N',
                signalPos: { x: '1750', y: '1000' },
                trainPos: { x: '1735', y: '1000' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_834',
                signalPos: { x: '1750', y: '1020' },
                trainPos: { x: '1735', y: '1020' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_833',
                signalPos: { x: '1750', y: '1000' },
                trainPos: { x: '1765', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_834N',
                signalPos: { x: '1750', y: '1020' },
                trainPos: { x: '1765', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '931', pos: { x: 850, y: 1000 } },
                    { text: '946', pos: { x: 850, y: 1020 } },

                    { text: '925', pos: { x: 970, y: 1000 } },
                    { text: '932', pos: { x: 970, y: 1020 } },

                    { text: '909', pos: { x: 1090, y: 1000 } },
                    { text: '922', pos: { x: 1090, y: 1020 } },

                    { text: '893', pos: { x: 1210, y: 1000 } },
                    { text: '910', pos: { x: 1210, y: 1020 } },

                    { text: '879', pos: { x: 1330, y: 1000 } },
                    { text: '894', pos: { x: 1330, y: 1020 } },

                    { text: '863', pos: { x: 1450, y: 1000 } },
                    { text: '878', pos: { x: 1450, y: 1020 } },

                    { text: '851', pos: { x: 1570, y: 1000 } },
                    { text: '864', pos: { x: 1570, y: 1020 } },

                    { text: '833', pos: { x: 1690, y: 1000 } },
                    { text: '850', pos: { x: 1690, y: 1020 } },

                    { text: '817', pos: { x: 1810, y: 1000 } },
                    { text: '834', pos: { x: 1810, y: 1020 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Przyłęk Duży',
                    pos: { x: 1030, y: 970 },
                    posFlipped: { x: 1030, y: 1050 },
                    platforms: [
                        { pos: { x: 968, y: 1025 }, width: 50, height: 7.5 },
                        { pos: { x: 1042, y: 987.5 }, width: 50, height: 7.5 },
                    ]
                },
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Krosnowa',
                    pos: { x: 1233, y: 970 },
                    posFlipped: { x: 1233, y: 1050 },
                    platforms: [
                        { pos: { x: 1208, y: 987.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1208, y: 1025 }, width: 50, height: 7.5 },
                    ]
                },
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Lipce Reymontowskie',
                    pos: { x: 1668, y: 970 },
                    posFlipped: { x: 1668, y: 1050 },
                    platforms: [
                        { pos: { x: 1642, y: 987.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1642, y: 1025 }, width: 50, height: 7.5 },
                    ]
                },
            },
        ]
    },
    "3251_Pl_PLYCWIA": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1870,1000 LR70 SPR10 LR110 SPR10 LR30 SPR10 LR100 SPR10 LR70',
                    'M1870,1020 LR70 SPR10 LR100 SPR10 LR30 SPR10 LR110 SPR10 LR70',

                    'M1890,1000 SWDN20 LR15 SWUP20 LR10 SWUP20 LR10 SPR10 LR110 SPR10 LR10 SWDN20',
                    'M2075,1020 SWDN20 LR10 SPR10 LR110 SPR10 LR20 SWUP20',
                    'M2230,1000 SWDN20 LR30 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3251_Pl_T',
                signalPos: { x: '1870', y: '1000' },
                trainPos: { x: '1855', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_U',
                signalPos: { x: '1870', y: '1020' },
                trainPos: { x: '1855', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3251_Pl_R',
                signalPos: { x: '1940', y: '980' },
                trainPos: { x: '1955', y: '980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_P',
                signalPos: { x: '1940', y: '1000' },
                trainPos: { x: '1955', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_O',
                signalPos: { x: '1940', y: '1020' },
                trainPos: { x: '1955', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~
            {
                signalName: '3251_Pl_H',
                signalPos: { x: '2070', y: '980' },
                trainPos: { x: '2055', y: '980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_J',
                signalPos: { x: '2070', y: '1000' },
                trainPos: { x: '2055', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_M',
                signalPos: { x: '2060', y: '1020' },
                trainPos: { x: '2045', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3251_Pl_G',
                signalPos: { x: '2100', y: '1000' },
                trainPos: { x: '2115', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_L',
                signalPos: { x: '2090', y: '1020' },
                trainPos: { x: '2105', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_K',
                signalPos: { x: '2090', y: '1040' },
                trainPos: { x: '2105', y: '1040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~
            {
                signalName: '3251_Pl_D',
                signalPos: { x: '2220', y: '1000' },
                trainPos: { x: '2205', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_E',
                signalPos: { x: '2220', y: '1020' },
                trainPos: { x: '2205', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3251_Pl_F',
                signalPos: { x: '2220', y: '1040' },
                trainPos: { x: '2205', y: '1040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~
            {
                signalName: '3251_Pl_B',
                signalPos: { x: '2290', y: '1000' },
                trainPos: { x: '2305', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3251_Pl_A',
                signalPos: { x: '2290', y: '1020' },
                trainPos: { x: '2305', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Płyćwia',
                    prefix: 'Pł',
                    pos: { x: 2085, y: 950 },
                    posFlipped: { x: 2085, y: 1070 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 2090, y: 970 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 2130, y: 985 } },
                    { label: 'Peron I', width: 60, height: 7.5, pos: { x: 2130, y: 1023.5 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 2005, y: 980 } },
                    { text: '1a', pos: { x: 2005, y: 1000 } },
                    { text: '2a', pos: { x: 2000, y: 1020 } },
                    { text: '1', pos: { x: 2160, y: 1000 } },
                    { text: '2', pos: { x: 2155, y: 1020 } },
                    { text: '4', pos: { x: 2155, y: 1040 } },
                ]
            }
        ]
    },
    "PLYCWIA_SKIERNIEWICE_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2300,1000 ABS100-20-2 SPR10 LR10 TEND',
                    'M2300,1020 ABS100-20-2 SPR10 LR10 TEND',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_779N',
                signalPos: { x: '2410', y: '1000' },
                trainPos: { x: '2395', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_780',
                signalPos: { x: '2410', y: '1020' },
                trainPos: { x: '2395', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_779',
                signalPos: { x: '2410', y: '1000' },
                trainPos: { x: '2425', y: '1000' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_780N',
                signalPos: { x: '2410', y: '1020' },
                trainPos: { x: '2425', y: '1020' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_767N',
                signalPos: { x: '2530', y: '1000' },
                trainPos: { x: '2515', y: '1000' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_766',
                signalPos: { x: '2530', y: '1020' },
                trainPos: { x: '2515', y: '1020' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            }
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '779', pos: { x: 2350, y: 1000 } },
                    { text: '792', pos: { x: 2350, y: 1020 } },

                    { text: '767', pos: { x: 2470, y: 1000 } },
                    { text: '780', pos: { x: 2470, y: 1020 } },
                ]
            }
        ]
    },



    "PLYCWIA_SKIERNIEWICE_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M210,1300 TSTART LR10 SPR10 ABS100-20-6',
                    'M210,1330 TSTART LR10 SPR10 ABS100-20-6',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_767',
                signalPos: { x: '230', y: '1310' },
                trainPos: { x: '245', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_766N',
                signalPos: { x: '230', y: '1340' },
                trainPos: { x: '245', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_755N',
                signalPos: { x: '350', y: '1310' },
                trainPos: { x: '335', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_748',
                signalPos: { x: '350', y: '1340' },
                trainPos: { x: '335', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_755',
                signalPos: { x: '350', y: '1310' },
                trainPos: { x: '365', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_748N',
                signalPos: { x: '350', y: '1340' },
                trainPos: { x: '365', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_737N',
                signalPos: { x: '470', y: '1310' },
                trainPos: { x: '455', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_738',
                signalPos: { x: '470', y: '1340' },
                trainPos: { x: '455', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_737',
                signalPos: { x: '470', y: '1310' },
                trainPos: { x: '485', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_738N',
                signalPos: { x: '470', y: '1340' },
                trainPos: { x: '485', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_723N',
                signalPos: { x: '590', y: '1310' },
                trainPos: { x: '575', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_722',
                signalPos: { x: '590', y: '1340' },
                trainPos: { x: '575', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_723',
                signalPos: { x: '590', y: '1310' },
                trainPos: { x: '605', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_722N',
                signalPos: { x: '590', y: '1340' },
                trainPos: { x: '605', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_707N',
                signalPos: { x: '710', y: '1310' },
                trainPos: { x: '695', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_708',
                signalPos: { x: '710', y: '1340' },
                trainPos: { x: '695', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_707',
                signalPos: { x: '710', y: '1310' },
                trainPos: { x: '725', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_708N',
                signalPos: { x: '710', y: '1340' },
                trainPos: { x: '725', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L1_693N',
                signalPos: { x: '830', y: '1310' },
                trainPos: { x: '815', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_692',
                signalPos: { x: '830', y: '1340' },
                trainPos: { x: '815', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_693',
                signalPos: { x: '830', y: '1310' },
                trainPos: { x: '845', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_692N',
                signalPos: { x: '830', y: '1340' },
                trainPos: { x: '845', y: '1340' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '755', pos: { x: 290, y: 1310 } },
                    { text: '766', pos: { x: 290, y: 1340 } },

                    { text: '737', pos: { x: 410, y: 1310 } },
                    { text: '748', pos: { x: 410, y: 1340 } },

                    { text: '723', pos: { x: 530, y: 1310 } },
                    { text: '738', pos: { x: 530, y: 1340 } },

                    { text: '707', pos: { x: 650, y: 1310 } },
                    { text: '722', pos: { x: 650, y: 1340 } },

                    { text: '693', pos: { x: 770, y: 1310 } },
                    { text: '708', pos: { x: 770, y: 1340 } },

                    { text: '679', pos: { x: 890, y: 1310 } },
                    { text: '692', pos: { x: 890, y: 1340 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Maków',
                    pos: { x: 350, y: 1280 },
                    posFlipped: { x: 350, y: 1370 },
                    platforms: [
                        { pos: { x: 288, y: 1345 }, width: 50, height: 7.5 },
                        { pos: { x: 362, y: 1297.5 }, width: 50, height: 7.5 },
                    ]
                },
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Dąbrowice Skierniewickie',
                    pos: { x: 650, y: 1280 },
                    posFlipped: { x: 650, y: 1370 },
                    platforms: [
                        { pos: { x: 625, y: 1297.5 }, width: 50, height: 7.5 },
                        { pos: { x: 625, y: 1345 }, width: 50, height: 7.5 },
                    ]
                },
            },
        ]
    },
    "113_Be_BELCHOW": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M15,1090 DOT5-5-3 SPR10 LR100 SPR10 LR10 SWDN20',
                    'M15,1110 DOT5-5-3 SPR10 LR100 SPR10 LR25 SWDN20 LR10 SWDN30 LR15 SWUP30',
                    'M15,1130 DOT5-5-3 SPR10 LR100 SPR10 LR80',
                    'M15,1160 DOT5-5-3 SPR10 LR100 SPR10 LR80',
                    'M15,1180 DOT5-5-3 SPR10 LR100 SPR10 LR20 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '113_Be_N',
                signalPos: { x: '40', y: '1090' },
                trainPos: { x: '55', y: '1090' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_M',
                signalPos: { x: '40', y: '1110' },
                trainPos: { x: '55', y: '1110' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_L',
                signalPos: { x: '40', y: '1130' },
                trainPos: { x: '55', y: '1130' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_K',
                signalPos: { x: '40', y: '1160' },
                trainPos: { x: '55', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_J',
                signalPos: { x: '40', y: '1180' },
                trainPos: { x: '55', y: '1180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '113_Be_C',
                signalPos: { x: '160', y: '1090' },
                trainPos: { x: '145', y: '1090' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_D',
                signalPos: { x: '160', y: '1110' },
                trainPos: { x: '145', y: '1110' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_E',
                signalPos: { x: '160', y: '1130' },
                trainPos: { x: '145', y: '1130' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_F',
                signalPos: { x: '160', y: '1160' },
                trainPos: { x: '145', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_G',
                signalPos: { x: '160', y: '1180' },
                trainPos: { x: '145', y: '1180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '113_Be_B',
                signalPos: { x: '240', y: '1130' },
                trainPos: { x: '255', y: '1130' },
                trainPosDistance: [
                    { distanceToSignal: 1115, x: 365, y: 1130 },
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_A',
                signalPos: { x: '240', y: '1160' },
                trainPos: { x: '255', y: '1160' },
                trainPosDistance: [
                    { distanceToSignal: 1115, x: 365, y: 1160 },
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Bełchów',
                    prefix: 'Be',
                    pos: { x: 100, y: 1060 },
                    posFlipped: { x: 100, y: 1210 }
                },
                platforms: [
                    { label: 'Peron I', width: 70, height: 20, pos: { x: 52, y: 1135 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 100, y: 1090 } },
                    { text: '3', pos: { x: 100, y: 1110 } },
                    { text: '1', pos: { x: 100, y: 1130 } },
                    { text: '2b', pos: { x: 75, y: 1160 } },
                    { text: '2', pos: { x: 125, y: 1160 } },
                    { text: '4b', pos: { x: 75, y: 1180 } },
                    { text: '4', pos: { x: 125, y: 1180 } },
                ]
            }
        ]
    },
    "BELCHOW_SKIERNIEWICE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M250,1130 LR100 SPR10 LR100 SPR10 ABS100-20-4',
                    'M250,1160 LR100 SPR10 LR100 SPR10 ABS100-20-4',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L11_93N',
                signalPos: { x: '360', y: '1130' },
                trainPos: { x: '345', y: '1130' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_94',
                signalPos: { x: '360', y: '1160' },
                trainPos: { x: '345', y: '1160' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: 'L11_83',
                signalPos: { x: '460', y: '1130' },
                trainPos: { x: '475', y: '1130' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_82N',
                signalPos: { x: '460', y: '1160' },
                trainPos: { x: '475', y: '1160' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L11_69N',
                signalPos: { x: '580', y: '1130' },
                trainPos: { x: '565', y: '1130' },
                trainPosDistance: [
                    { distanceToSignal: 1295, x: 455, y: 1130 },
                ],
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_70',
                signalPos: { x: '580', y: '1160' },
                trainPos: { x: '565', y: '1160' },
                trainPosDistance: [
                    { distanceToSignal: 1295, x: 455, y: 1160 },
                ],
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_69',
                signalPos: { x: '580', y: '1130' },
                trainPos: { x: '595', y: '1130' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_70N',
                signalPos: { x: '580', y: '1160' },
                trainPos: { x: '595', y: '1160' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L11_53N',
                signalPos: { x: '700', y: '1130' },
                trainPos: { x: '685', y: '1130' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_52',
                signalPos: { x: '700', y: '1160' },
                trainPos: { x: '685', y: '1160' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_53',
                signalPos: { x: '700', y: '1130' },
                trainPos: { x: '715', y: '1130' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_52N',
                signalPos: { x: '700', y: '1160' },
                trainPos: { x: '715', y: '1160' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L11_37N',
                signalPos: { x: '820', y: '1130' },
                trainPos: { x: '805', y: '1130' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_36',
                signalPos: { x: '820', y: '1160' },
                trainPos: { x: '805', y: '1160' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L11_37',
                signalPos: { x: '820', y: '1130' },
                trainPos: { x: '835', y: '1130' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_36N',
                signalPos: { x: '820', y: '1160' },
                trainPos: { x: '835', y: '1160' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '93', pos: { x: 300, y: 1130 } },
                    { text: '102', pos: { x: 300, y: 1160 } },

                    { text: '83', pos: { x: 410, y: 1130 } },
                    { text: '94', pos: { x: 410, y: 1160 } },

                    { text: '69', pos: { x: 520, y: 1130 } },
                    { text: '82', pos: { x: 520, y: 1160 } },

                    { text: '53', pos: { x: 640, y: 1130 } },
                    { text: '68', pos: { x: 640, y: 1160 } },

                    { text: '37', pos: { x: 760, y: 1130 } },
                    { text: '52', pos: { x: 760, y: 1160 } },

                    { text: '23', pos: { x: 880, y: 1130 } },
                    { text: '36', pos: { x: 880, y: 1160 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Sierakowice Skierniewickie',
                    pos: { x: 520, y: 1100 },
                    posFlipped: { x: 520, y: 1190 },
                    platforms: [
                        { pos: { x: 495, y: 1117.5 }, width: 50, height: 7.5 },
                        { pos: { x: 495, y: 1165 }, width: 50, height: 7.5 },
                    ]
                },
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Mokra',
                    pos: { x: 775, y: 1100 },
                    posFlipped: { x: 775, y: 1190 },
                    platforms: [
                        { pos: { x: 750, y: 1117.5 }, width: 50, height: 7.5 },
                        { pos: { x: 750, y: 1165 }, width: 50, height: 7.5 },
                    ]
                },
            }
        ]
    },
    "3877_Sk_SKIERNIEWICE": {
        "TRACKS": [
            //? NON PLAYABLE TRACKS
            // {
            //     color: NON_PLAYABLE_TRACKS_COLOR,
            //     isNPT: true,
            //     commands: [
            //         // BUFFER U502/V502/U501
            //         'M960,1220 BUFF-L LR15',
            //         'M960,1250 BUFF-L LR15',
            //         'M985,1190 BUFF-L LR15',

            //         // TRACK 104a (SS-52)
            //         'M1305,1140 DOT5-2-7 SSR LR5 DERAILER LR20',

            //         // RIGHT OF TRACK 104a
            //         'M1535,1140 SWUP20 LR5 DERAILER LR30 SSL DOT5-2-4 BUFF-R',
            //         'M1575,1120 SWUP20 LR5 SSL DOT5-2-4 BUFF-R',
            //         'M1560,1120 SWUP40 LR20 SSL LR30 SWDN40 LR30 SSR LR180',

            //         'M1634,1080 BUFF-L DOT5-2-4 SSR LR20 SWDN40 LR10 SWDN20',
            //         'M1634,1100 BUFF-L DOT5-2-4 SSR LR5 SWDN20',
            //         'M1765,1120 SWUP40 LR5 SSL DOT5-2-7',

            //         // SW33 / Wk32
            //         'M1620,1280 SWUP40 LR15 DERAILER LR30 SSL DOT5-2-7 BUFF-R',
            //         'M1665,1240 SWUP20 LR10 SSL DOT5-2-7 BUFF-R',
            //         'M1655,1240 SWDN20 LR20 SSL DOT5-2-7 BUFF-R',

            //         // SW51/54cd [ T14 / T16 / T18 ]
            //         'M1370,1360 SWUP20',
            //         'M1275,1360 BUFF-L LR45 SSR LR55 BUFF-R',
            //         'M1275,1375 BUFF-L LR45 SSR LR20 SWUP15',
            //         'M1275,1390 BUFF-L LR45 SSR LR5 SWUP15',

            //         // BUFFER TRACK 203
            //         'M1770,1210 BUFF-L LR15',
            //         'M2030,1210 LR15 BUFF-R',
            //         // Wk220 / SS124
            //         'M1815,1230 SWDN20 LR15 DERAILER LR25 SSL DOT5-2-5',

            //         // SW313 / Wk313 / SS311 / T312
            //         'M2095,1140 SWUP20 LR5 DERAILER LR10 SSL DOT5-2-7 BUFF-R',

            //         // BUFFER T304
            //         'M2235,1260 LR20 BUFF-R',

            //         // BUFFER T4a1
            //         'M2095,1370 SWDN15 LR25 BUFF-R',

            //         // TRACK 4b (SW18/15)
            //         'M1725,1375 DOT5-2-5 SSR LR25 SSL DOT5-2-5',
            //         'M1785,1375 SWUP15'
            //     ],
            // },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ TOR 1B - T401 - T102 - T202 - T302 - TOR 2M (Puszcza Marianska)
                    'M940,1130 LR80 SPR10 LR132.5 SWDN30 LR102.5 SPR10 LR160 SPR10 LR180 SPR10 LR230 SPR10 LR100 SPR10 LR130 SPR10 LR107.5 UTLD70 LL130 UTRD100 LR112.5 SWDN20 LR35',
                    //^ TOR 2B - T402 - T101b - T201 - T301b - SW402
                    'M940,1160 LR80 SPR10 LR122.5 SWDN30 LR112.5 SPR10 LR160 SPR10 LR180 SPR10 LR230 SPR10 LR100 SPR10 LR130 SPR10 LR97.5 UTLD30 LL130 UTRD130 LR92.5 SPR10 LR10 SWDN20',
                    //^ SW63/60 - SW56/50 - SW44/41 - T104a - T104b - T204 - T304 - SW4/3
                    'M1335,1160 SWDN30 LR25 SWUP30 LR20 SWUP20 LR15 SPR10 LR100 SPR10 LR100 SPR10 LR230 SPR10 LR100 SPR10 LR130 SPR10 LR117.5 UTLD100 LL130 UTRD20 LR92.5 SPR10 LR15 SWDN20',

                    //? SW88/87 - SW85/83
                    'M955,1160 SWUP30 LR20 SWDN30',
                    //? SWITCHES: 201/202 - 203/207
                    'M1660,1190 SWUP30 LR20 SWUP20',
                    //? SWITCHES: 209/211 - 212/213
                    'M1730,1140 SWDN20 LR20 SWDN30',

                    //^ SW219 - T208
                    'M1855,1120 SWUP20 LR10 SPR10 LR100 SPR10 LR10 SWDN20',
                    //^ SW215/217 - T206 - SW305/308 - SW311/314
                    'M1840,1140 SWUP20 LR25 SPR10 LR100 SPR10 LR25 SWDN20 LR10 SWDN20 LR60 SWDN30',
                    //^ SW214/216 - T203 - SW307/309 - SW310/312
                    'M1780,1190 SWDN20 LR85 SPR10 LR100 SPR10 LR40 SWUP20 LR10 SWUP30 LR30 SWUP20',
                    //^ SW218 - T205
                    'M1805,1210 SWDN20 LR60 SPR10 LR100 SPR10 LR25 SWUP20',


                    //& Inner Curve (T502)
                    'M970,1160 SWDN60 LR45 SPR10 LR92.5 UTLD30 LL102.5 SPL10 LL35 M970,1310 SWUP60 LR5',
                    //& Outer Curve (T501) - SW91/93/94
                    'M995,1160 SWDN30 LR20 SPR10 LR107.5 UTLD90 LL117.5 SPL10 LL10 M980,1340 SWUP30 LR10 SWUP30 LR5',


                    //~ 1l/1k - T1g - T1e - T1d3 - T1d1 - TOR 1R (Zyrardow)
                    'M950,1310 LR60 SPR10 LR230 SPR10 LR180 SPR10 LR150 SPR10 LR50 SPR10 LR100 SPR10 LR90 SPR10 LR97.5 SWUP30 LR107.5 SPR20 LR10 SPR10 LR140 SPR10 LR20',
                    //~ 2m/2l - T2h - T2f - T2d3 - T2d1 - TOR 2R (Zyrardow)
                    'M950,1340 LR60 SPR10 LR230 SPR10 LR180 SPR10 LR150 SPR10 LR50 SPR10 LR100 SPR10 LR90 SPR10 LR107.5 SWUP30 LR97.5 SPR20 LR10 SPR10 LR140 SPR10 LR20',
                    //? SWITCHES: 69/67 - 65/61 - 58/55 - 53/49 - 46/43
                    'M1300,1190 SWDN120 SPR20 SWUP120 SPR20 SWDN120 SPR20 SWUP120 SPR20 SWDN60 LR15 SWDN30',
                    //? SWITCHES: 66/64 - 62/59 // 52/47 - 45/42
                    'M1315,1310 SWDN30 LR15 SWUP30 LR50 SWDN30 LR20 SWUP30',
                    //? SW6/5 - SW2/1
                    'M2140,1310 SWUP30 LR110 SWDN30',

                    //^ SW48 - T3c - T3a
                    'M1405,1310 SWUP30 LR30 SPR10 LR150 SPR10 LR50 SPR10 LR100 SPR10 LR15 SWDN30',
                    //~ SW24/21 - T4b - T4a3/4a1 - TOR1M (Puszcza Marianska)
                    'M1645,1340 SWDN20 LR10 SPR10 LR100 SPR10 LR65 SWDN10 LR20 SPR10 LR190 SPR10 LR180',

                    //? SW23/22
                    'M1645,1310 SWUP30',
                    //? SW14/12
                    'M1810,1360 SWUP20',
                    //? SW13/11
                    'M1830,1310 SWDN30',
                ]
            },
        ],
        "SIGNALS": [
            //? ENTRY SIGNALS BELCHOW
            {
                signalName: '3877_Sk_Y',
                signalPos: { x: '940', y: '1130' },
                trainPos: { x: '925', y: '1130' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_Z',
                signalPos: { x: '940', y: '1160' },
                trainPos: { x: '925', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //? ENTRY SIGNALS PLYCWIA
            {
                signalName: '3877_Sk_W',
                signalPos: { x: '950', y: '1310' },
                trainPos: { x: '935', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_X',
                signalPos: { x: '950', y: '1340' },
                trainPos: { x: '935', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //? EXIT SIGNALS LEFT SIDE
            {
                signalName: '3877_Sk_U401',
                signalPos: { x: '1020', y: '1130' },
                trainPos: { x: '1035', y: '1130' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_U402',
                signalPos: { x: '1020', y: '1160' },
                trainPos: { x: '1035', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_U501',
                signalPos: { x: '1020', y: '1190' },
                trainPos: { x: '1035', y: '1190' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_U502',
                signalPos: { x: '1020', y: '1220' },
                trainPos: { x: '1035', y: '1220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_V502',
                signalPos: { x: '1010', y: '1250' },
                trainPos: { x: '1025', y: '1250' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_V501',
                signalPos: { x: '1010', y: '1280' },
                trainPos: { x: '1025', y: '1280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_V1',
                signalPos: { x: '1010', y: '1310' },
                trainPos: { x: '1025', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_V2',
                signalPos: { x: '1010', y: '1340' },
                trainPos: { x: '1025', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //? Intermediate Signals LEFT SIDE TO RIGHT
            {
                signalName: '3877_Sk_S401',
                signalPos: { x: '1280', y: '1160' },
                trainPos: { x: '1265', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_S402',
                signalPos: { x: '1280', y: '1190' },
                trainPos: { x: '1265', y: '1190' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_S1',
                signalPos: { x: '1260', y: '1310' },
                trainPos: { x: '1245', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_S2',
                signalPos: { x: '1260', y: '1340' },
                trainPos: { x: '1245', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ Intermediate Signals LEFT SIDE TO LEFT (TRACK SIGNALS)
            {
                signalName: '3877_Sk_R104',
                signalPos: { x: '1410', y: '1140' },
                trainPos: { x: '1425', y: '1140' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R102',
                signalPos: { x: '1440', y: '1160' },
                trainPos: { x: '1455', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R101',
                signalPos: { x: '1440', y: '1190' },
                trainPos: { x: '1455', y: '1190' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R3',
                signalPos: { x: '1440', y: '1280' },
                trainPos: { x: '1455', y: '1280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R1',
                signalPos: { x: '1440', y: '1310' },
                trainPos: { x: '1455', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_R2',
                signalPos: { x: '1440', y: '1340' },
                trainPos: { x: '1455', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //^ RIGHT SIDE SIGNAL TRACK 104
            {
                signalName: '3877_Sk_P104',
                signalPos: { x: '1530', y: '1140' },
                trainPos: { x: '1515', y: '1140' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ MIDDLE SIGNALS TO THE RIGHT
            {
                signalName: '3877_Sk_N104',
                signalPos: { x: '1640', y: '1140' },
                trainPos: { x: '1625', y: '1140' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_N102',
                signalPos: { x: '1640', y: '1160' },
                trainPos: { x: '1625', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_N101',
                signalPos: { x: '1640', y: '1190' },
                trainPos: { x: '1625', y: '1190' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_P3',
                signalPos: { x: '1610', y: '1280' },
                trainPos: { x: '1595', y: '1280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_P1',
                signalPos: { x: '1610', y: '1310' },
                trainPos: { x: '1595', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_P2',
                signalPos: { x: '1610', y: '1340' },
                trainPos: { x: '1595', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ SIGNALS LOWER TRACK
            {
                signalName: '3877_Sk_M3',
                signalPos: { x: '1660', y: '1280' },
                trainPos: { x: '1675', y: '1280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_M1',
                signalPos: { x: '1660', y: '1310' },
                trainPos: { x: '1675', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_M2',
                signalPos: { x: '1660', y: '1340' },
                trainPos: { x: '1675', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_M4',
                signalPos: { x: '1660', y: '1360' },
                trainPos: { x: '1675', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //////
            {
                signalName: '3877_Sk_L3',
                signalPos: { x: '1780', y: '1280' },
                trainPos: { x: '1765', y: '1280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_L1',
                signalPos: { x: '1780', y: '1310' },
                trainPos: { x: '1765', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_L2',
                signalPos: { x: '1780', y: '1340' },
                trainPos: { x: '1765', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_L4',
                signalPos: { x: '1780', y: '1360' },
                trainPos: { x: '1765', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            // //~ Intermediate Signals RIGHT SIDE TO LEFT
            {
                signalName: '3877_Sk_K208',
                signalPos: { x: '1870', y: '1100' },
                trainPos: { x: '1885', y: '1100' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K206',
                signalPos: { x: '1870', y: '1120' },
                trainPos: { x: '1885', y: '1120' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K204',
                signalPos: { x: '1870', y: '1140' },
                trainPos: { x: '1885', y: '1140' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K202',
                signalPos: { x: '1870', y: '1160' },
                trainPos: { x: '1885', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K201',
                signalPos: { x: '1870', y: '1190' },
                trainPos: { x: '1885', y: '1190' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K203',
                signalPos: { x: '1870', y: '1210' },
                trainPos: { x: '1885', y: '1210' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_K205',
                signalPos: { x: '1870', y: '1230' },
                trainPos: { x: '1885', y: '1230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //^
            {
                signalName: '3877_Sk_J1',
                signalPos: { x: '1870', y: '1310' },
                trainPos: { x: '1885', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_J2',
                signalPos: { x: '1870', y: '1340' },
                trainPos: { x: '1885', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_J4',
                signalPos: { x: '1870', y: '1370' },
                trainPos: { x: '1885', y: '1370' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //^ EXIT SIGNAL TRACK 4 TO PM
            {
                signalName: '3877_Sk_E4',
                signalPos: { x: '2080', y: '1370' },
                trainPos: { x: '2065', y: '1370' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ INTERMEDIATE SIGNALS RIGHT SIDE TO RIGHT
            {
                signalName: '3877_Sk_H208',
                signalPos: { x: '1990', y: '1100' },
                trainPos: { x: '1975', y: '1100' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H206',
                signalPos: { x: '1990', y: '1120' },
                trainPos: { x: '1975', y: '1120' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H204',
                signalPos: { x: '1990', y: '1140' },
                trainPos: { x: '1975', y: '1140' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H202',
                signalPos: { x: '1990', y: '1160' },
                trainPos: { x: '1975', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H201',
                signalPos: { x: '1990', y: '1190' },
                trainPos: { x: '1975', y: '1190' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H203',
                signalPos: { x: '1990', y: '1210' },
                trainPos: { x: '1975', y: '1210' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_H205',
                signalPos: { x: '1990', y: '1230' },
                trainPos: { x: '1975', y: '1230' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //^ ZSIG RIGHT TO LEFT FROM CONNECTOR
            {
                signalName: '3877_Sk_G304',
                signalPos: { x: '2120', y: '1140' },
                trainPos: { x: '2135', y: '1140' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_G302',
                signalPos: { x: '2120', y: '1160' },
                trainPos: { x: '2135', y: '1160' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_G301',
                signalPos: { x: '2120', y: '1190' },
                trainPos: { x: '2135', y: '1190' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~ ZSIG RIGHT TO RIGHT LOWER PART
            {
                signalName: '3877_Sk_F304',
                signalPos: { x: '2220', y: '1260' },
                trainPos: { x: '2207.5', y: '1260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_F1',
                signalPos: { x: '2130', y: '1280' },
                trainPos: { x: '2085', y: '1280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_F2',
                signalPos: { x: '2130', y: '1310' },
                trainPos: { x: '2085', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_E301',
                signalPos: { x: '2200', y: '1350' },
                trainPos: { x: '2187.5', y: '1350' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ FINAL EXIT SIGNALS TO ZYRARDOW
            {
                signalName: '3877_Sk_B11',
                signalPos: { x: '2280', y: '1280' },
                trainPos: { x: '2265', y: '1280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3877_Sk_A21',
                signalPos: { x: '2280', y: '1310' },
                trainPos: { x: '2265', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: '3877_Sk_B',
                signalPos: { x: '2300', y: '1280' },
                trainPos: { x: '2315', y: '1280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_A',
                signalPos: { x: '2300', y: '1310' },
                trainPos: { x: '2315', y: '1310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_D',
                signalPos: { x: '2260', y: '1350' },
                trainPos: { x: '2275', y: '1350' },
                trainPosDistance: [
                    { distanceToSignal: 3000, x: 2245, y: 1410 }
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3877_Sk_C',
                signalPos: { x: '2260', y: '1370' },
                trainPos: { x: '2275', y: '1370' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Skierniewice',
                    prefix: 'Sk',
                    pos: { x: 1465, y: 1100 },
                    posFlipped: { x: 1465, y: 1380 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1365, y: 1375 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron III', width: 70, height: 10, pos: { x: 1422, y: 1125 } },
                    { label: 'Peron II', width: 145, height: 20, pos: { x: 1452, y: 1285 } },
                    { label: 'Peron I', width: 165, height: 12.5, pos: { x: 1432, y: 1347 } },
                ],
                trackLabels: [
                    { text: '401', pos: { x: 1095, y: 1130 } },
                    { text: '401', pos: { x: 1220, y: 1160 } },
                    { text: '402', pos: { x: 1095, y: 1160 } },
                    { text: '402', pos: { x: 1220, y: 1190 } },
                    { text: '501', pos: { x: 1090, y: 1190 } },
                    { text: '502', pos: { x: 1080, y: 1220 } },
                    { text: '1l', pos: { x: 1075, y: 1310 } },
                    { text: '2m', pos: { x: 1075, y: 1340 } },
                    { text: '1k', pos: { x: 1205, y: 1310 } },
                    { text: '2l', pos: { x: 1205, y: 1340 } },

                    // UPPER LABELS
                    { text: '104a', pos: { x: 1470, y: 1140 } },
                    { text: '104b', pos: { x: 1580, y: 1140 } },
                    { text: '102', pos: { x: 1540, y: 1160 } },
                    { text: '101b', pos: { x: 1540, y: 1190 } },
                    { text: '208', pos: { x: 1930, y: 1100 } },
                    { text: '206', pos: { x: 1930, y: 1120 } },
                    { text: '204', pos: { x: 1930, y: 1140 } },
                    { text: '202', pos: { x: 1930, y: 1160 } },
                    { text: '201', pos: { x: 1930, y: 1190 } },
                    { text: '203', pos: { x: 1930, y: 1210 } },
                    { text: '205', pos: { x: 1930, y: 1230 } },

                    // CONNECTOR TRACKS
                    { text: '304', pos: { x: 2190, y: 1140 } },
                    { text: '302', pos: { x: 2190, y: 1160 } },
                    { text: '301', pos: { x: 2180, y: 1190 } },
                    { text: '304', pos: { x: 2165, y: 1260 } },
                    { text: '301b', pos: { x: 2150, y: 1350 } },

                    // LOWER LABELS
                    { text: '3c', pos: { x: 1525, y: 1280 } },
                    { text: '1g', pos: { x: 1525, y: 1310 } },
                    { text: '2h', pos: { x: 1525, y: 1340 } },
                    { text: '3a', pos: { x: 1720, y: 1280 } },
                    { text: '1e', pos: { x: 1720, y: 1310 } },
                    { text: '2f', pos: { x: 1720, y: 1340 } },
                    { text: '4b', pos: { x: 1720, y: 1360 } },

                    { text: '1d3', pos: { x: 1930, y: 1310 } },
                    { text: '2d3', pos: { x: 1930, y: 1340 } },
                    { text: '4a3', pos: { x: 1930, y: 1370 } },
                    { text: '1d1', pos: { x: 2040, y: 1280 } },
                    { text: '2d1', pos: { x: 2040, y: 1310 } },
                    { text: '4a1', pos: { x: 2020, y: 1370 } },
                ]
            }
        ]
    },
    "SKIERNIEWICE_ZYRARDOW_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2310,1280 LR100 SPR10 LR10 TEND',
                    'M2310,1310 LR100 SPR10 LR10 TEND',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_595N',
                signalPos: { x: '2420', y: '1280' },
                trainPos: { x: '2405', y: '1280' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_596',
                signalPos: { x: '2420', y: '1310' },
                trainPos: { x: '2405', y: '1310' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            }
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '595', pos: { x: 2360, y: 1280 } },
                    { text: '610', pos: { x: 2360, y: 1310 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Skierniewice Rawka',
                    pos: { x: 2338, y: 1250 },
                    posFlipped: { x: 2338, y: 1335 },
                    platforms: [
                        { pos: { x: 2312, y: 1267.5 }, width: 50, height: 7.5 },
                        { pos: { x: 2312, y: 1315 }, width: 50, height: 7.5 },
                    ]
                },
            },
        ]
    },
    "3459_PM_PUSZCZAMARIANSKA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2270,1350 LR100 TEND',
                    'M2270,1370 LR100 TEND',

                    'M2230,1400 TSTART LR100',
                    'M2230,1420 TSTART LR100',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M2405,1390 SWUP20 LR10 SPR10 LR85 SPR5 DOT5-5-3',
                    'M2360,1410 SWDN20 LR10 SWUP20 LR10 SWUP20 LR25 SPR10 LR85 SPR5 DOT5-5-3',
                    'M2350,1410 LR70 SPR10 LR85 SPR5 DOT5-5-3',
                    'M2350,1430 LR70 SPR10 LR85 SPR5 DOT5-5-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '3459_PM_A',
                signalPos: { x: '2350', y: '1410' },
                trainPos: { x: '2335', y: '1410' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3459_PM_B',
                signalPos: { x: '2350', y: '1430' },
                trainPos: { x: '2335', y: '1430' },
                trainPosDistance: [
                    { distanceToSignal: 3000, x: 2365, y: 1370 }
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3459_PM_F',
                signalPos: { x: '2420', y: '1370' },
                trainPos: { x: '2435', y: '1370' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3459_PM_E',
                signalPos: { x: '2420', y: '1390' },
                trainPos: { x: '2435', y: '1390' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3459_PM_D',
                signalPos: { x: '2420', y: '1410' },
                trainPos: { x: '2435', y: '1410' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3459_PM_C',
                signalPos: { x: '2420', y: '1430' },
                trainPos: { x: '2435', y: '1430' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '3459_PM_L',
                invisibleSignal: true,
                signalPos: { x: '2530', y: '1370' },
                trainPos: { x: '2522.5', y: '1370' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3459_PM_M',
                invisibleSignal: true,
                signalPos: { x: '2530', y: '1390' },
                trainPos: { x: '2522.5', y: '1390' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3459_PM_N',
                invisibleSignal: true,
                signalPos: { x: '2530', y: '1410' },
                trainPos: { x: '2522.5', y: '1410' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3459_PM_O',
                invisibleSignal: true,
                signalPos: { x: '2530', y: '1430' },
                trainPos: { x: '2522.5', y: '1430' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Puszcza Mariańska',
                    prefix: 'PM',
                    pos: { x: 2465, y: 1340 },
                    posFlipped: { x: 2440, y: 1460 }
                },
                trackLabels: [
                    { text: '6', pos: { x: 2470, y: 1370 } },
                    { text: '4', pos: { x: 2470, y: 1390 } },
                    { text: '2', pos: { x: 2470, y: 1410 } },
                    { text: '1', pos: { x: 2470, y: 1430 } },
                ]
            },
        ]
    },



    "SKIERNIEWICE_ZYRARDOW_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,1440 TSTART LR10 SPR10 ABS100-20-3 SPR90 ABS100-20-7',
                    'M10,1460 TSTART LR10 SPR10 ABS100-20-3 SPR90 ABS100-20-7',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_595',
                signalPos: { x: '30', y: '1450' },
                trainPos: { x: '45', y: '1450' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_596N',
                signalPos: { x: '30', y: '1470' },
                trainPos: { x: '45', y: '1470' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_581N',
                signalPos: { x: '150', y: '1450' },
                trainPos: { x: '135', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_580',
                signalPos: { x: '150', y: '1470' },
                trainPos: { x: '135', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_581',
                signalPos: { x: '150', y: '1450' },
                trainPos: { x: '165', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_580N',
                signalPos: { x: '150', y: '1470' },
                trainPos: { x: '165', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_565N',
                signalPos: { x: '270', y: '1450' },
                trainPos: { x: '255', y: '1450' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_566',
                signalPos: { x: '270', y: '1470' },
                trainPos: { x: '255', y: '1470' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_565',
                signalPos: { x: '270', y: '1450' },
                trainPos: { x: '285', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_566N',
                signalPos: { x: '270', y: '1470' },
                trainPos: { x: '285', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            // after RADZIWILLOW MAZOWIECKIE
            {
                signalName: 'L1_533N',
                signalPos: { x: '580', y: '1450' },
                trainPos: { x: '565', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_532',
                signalPos: { x: '580', y: '1470' },
                trainPos: { x: '565', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_533',
                signalPos: { x: '580', y: '1450' },
                trainPos: { x: '595', y: '1450' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_532N',
                signalPos: { x: '580', y: '1470' },
                trainPos: { x: '595', y: '1470' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_517N',
                signalPos: { x: '700', y: '1450' },
                trainPos: { x: '685', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_518',
                signalPos: { x: '700', y: '1470' },
                trainPos: { x: '685', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_517',
                signalPos: { x: '700', y: '1450' },
                trainPos: { x: '715', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_518N',
                signalPos: { x: '700', y: '1470' },
                trainPos: { x: '715', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_499N',
                signalPos: { x: '820', y: '1450' },
                trainPos: { x: '805', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_502',
                signalPos: { x: '820', y: '1470' },
                trainPos: { x: '805', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_499',
                signalPos: { x: '820', y: '1450' },
                trainPos: { x: '835', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_502N',
                signalPos: { x: '820', y: '1470' },
                trainPos: { x: '835', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_483N',
                signalPos: { x: '940', y: '1450' },
                trainPos: { x: '925', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_484',
                signalPos: { x: '940', y: '1470' },
                trainPos: { x: '925', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_483',
                signalPos: { x: '940', y: '1450' },
                trainPos: { x: '955', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_484N',
                signalPos: { x: '940', y: '1470' },
                trainPos: { x: '955', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_467N',
                signalPos: { x: '1060', y: '1450' },
                trainPos: { x: '1045', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_466',
                signalPos: { x: '1060', y: '1470' },
                trainPos: { x: '1045', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_467',
                signalPos: { x: '1060', y: '1450' },
                trainPos: { x: '1075', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_466N',
                signalPos: { x: '1060', y: '1470' },
                trainPos: { x: '1075', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_451N',
                signalPos: { x: '1180', y: '1450' },
                trainPos: { x: '1165', y: '1450' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_452',
                signalPos: { x: '1180', y: '1470' },
                trainPos: { x: '1165', y: '1470' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_451',
                signalPos: { x: '1180', y: '1450' },
                trainPos: { x: '1195', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_452N',
                signalPos: { x: '1180', y: '1470' },
                trainPos: { x: '1195', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '581', pos: { x: 90, y: 1450 } },
                    { text: '596', pos: { x: 90, y: 1470 } },

                    { text: '565', pos: { x: 210, y: 1450 } },
                    { text: '580', pos: { x: 210, y: 1470 } },

                    { text: '551', pos: { x: 330, y: 1450 } },
                    { text: '566', pos: { x: 330, y: 1470 } },

                    { text: '533', pos: { x: 520, y: 1450 } },
                    { text: '546', pos: { x: 520, y: 1470 } },

                    { text: '517', pos: { x: 640, y: 1450 } },
                    { text: '532', pos: { x: 640, y: 1470 } },

                    { text: '499', pos: { x: 760, y: 1450 } },
                    { text: '518', pos: { x: 760, y: 1470 } },

                    { text: '483', pos: { x: 880, y: 1450 } },
                    { text: '502', pos: { x: 880, y: 1470 } },

                    { text: '467', pos: { x: 1000, y: 1450 } },
                    { text: '484', pos: { x: 1000, y: 1470 } },

                    { text: '451', pos: { x: 1120, y: 1450 } },
                    { text: '466', pos: { x: 1120, y: 1470 } },

                    { text: '439', pos: { x: 1240, y: 1450 } },
                    { text: '452', pos: { x: 1240, y: 1470 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Jesionka',
                    pos: { x: 665, y: 1420 },
                    posFlipped: { x: 665, y: 1500 },
                    platforms: [
                        { pos: { x: 638, y: 1437.5 }, width: 50, height: 7.5 },
                        { pos: { x: 638, y: 1475 }, width: 50, height: 7.5 },
                    ]
                },
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Sucha Żyrardowska',
                    pos: { x: 820, y: 1420 },
                    posFlipped: { x: 820, y: 1500 },
                    platforms: [
                        { pos: { x: 758, y: 1437.5 }, width: 50, height: 7.5 },
                        { pos: { x: 832, y: 1475 }, width: 50, height: 7.5 },
                    ]
                },
            }
        ]
    },
    "3531_RM_RADZIWILLOWMAZOWIECKI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M390,1450 LR70',
                    'M390,1470 LR70',
                    'M410,1470 SWUP20 LR20 SWDN20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3531_RM_C',
                signalPos: { x: '390', y: '1450' },
                trainPos: { x: '375', y: '1450' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3531_RM_D',
                signalPos: { x: '390', y: '1470' },
                trainPos: { x: '375', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3531_RM_B',
                signalPos: { x: '460', y: '1450' },
                trainPos: { x: '475', y: '1450' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3531_RM_A',
                signalPos: { x: '460', y: '1470' },
                trainPos: { x: '475', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Radziwiłłów Mazowiecki',
                    prefix: 'RM',
                    lcsControlledBy: 'Żyrardów',
                    pos: { x: 425, y: 1415 },
                    posFlipped: { x: 425, y: 1505 }
                },
                platforms: [
                    { label: '', width: 50, height: 7.5, pos: { x: 328, y: 1437.5 } },
                    { label: '', width: 50, height: 7.5, pos: { x: 328, y: 1475 } },
                ]
            }
        ]
    },
    //TODO: Train Distance Positions for Exit Signals RIGHT side
    "5431_Zy_ZYRARDOW": {
        "TRACKS": [
            // {
            //     color: NON_PLAYABLE_TRACKS_COLOR,
            //     isNPT: true,
            //     commands: [

            //     ]
            // },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ T1
                    'M1300,1450 LR60 SPR10 LR200 SPR10 LR80',
                    //~ T2
                    'M1300,1470 LR80 SPR10 LR180 SPR10 LR80',

                    //^ SW22/21 - T3 - SW9/6
                    'M1450,1450 SWUP25 LR5 SPR10 LR100 SPR10 LR25 SWDN25 LR10 SWDN20 LR10 SWUP20',
                    //^ SW34/32 - T4 - SW7/4
                    'M1365,1470 SWDN20 LR30 SPR10 LR160 SPR10 LR25 SWUP20',
                    //^ SW31 - SW23 - T8 - SW8
                    'M1385,1490 SWDN40 LR45 SWUP20 LR10 SPR10 LR110 SPR10 LR10 SWUP20',

                    //? 40/39 - 35/33
                    'M1320,1450 SWDN20 LR20 SWUP20',

                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '5431_Zy_G',
                signalPos: { x: '1300', y: '1450' },
                trainPos: { x: '1285', y: '1450' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_H',
                signalPos: { x: '1300', y: '1470' },
                trainPos: { x: '1285', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '5431_Zy_E3',
                signalPos: { x: '1460', y: '1425' },
                trainPos: { x: '1475', y: '1425' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F1',
                signalPos: { x: '1360', y: '1450' },
                trainPos: { x: '1375', y: '1450' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F2',
                signalPos: { x: '1380', y: '1470' },
                trainPos: { x: '1410', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F4',
                signalPos: { x: '1400', y: '1490' },
                trainPos: { x: '1415', y: '1490' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F8',
                signalPos: { x: '1450', y: '1510' },
                trainPos: { x: '1470', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '5431_Zy_D3',
                signalPos: { x: '1580', y: '1425' },
                trainPos: { x: '1565', y: '1425' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D1',
                signalPos: { x: '1580', y: '1450' },
                trainPos: { x: '1460', y: '1450' },
                // trainPosDistance: [
                //     { distanceToSignal: 0, x: 1460, y: 1450 }
                // ],
                // trainAnchor: left
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D2',
                signalPos: { x: '1580', y: '1470' },
                trainPos: { x: '1485', y: '1470' },
                // trainPosDistance: [
                //     { distanceToSignal: 0, x: 1485, y: 1470 }
                // ],
                // trainAnchor: left
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D4',
                signalPos: { x: '1580', y: '1490' },
                trainPos: { x: '1500', y: '1490' },
                // trainPosDistance: [
                //     { distanceToSignal: 0, x: 1515, y: 1490 }
                // ],
                // trainAnchor: left
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D8',
                signalPos: { x: '1580', y: '1510' },
                trainPos: { x: '1565', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '5431_Zy_B',
                signalPos: { x: '1660', y: '1450' },
                trainPos: { x: '1675', y: '1450' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_A',
                signalPos: { x: '1660', y: '1470' },
                trainPos: { x: '1675', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Żyrardów',
                    prefix: 'Zy',
                    pos: { x: 1475, y: 1400 },
                    posFlipped: { x: 1510, y: 1545 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1370, y: 1540 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 75, height: 10, pos: { x: 1372, y: 1435 } },
                    { label: 'Peron II', width: 75, height: 10, pos: { x: 1412, y: 1475 } },
                ],
                trackLabels: [
                    { text: '1a', pos: { x: 1410, y: 1450 } },
                    { text: '10a', pos: { x: 1407.5, y: 1530 } },
                    { text: '3', pos: { x: 1520, y: 1425 } },
                    { text: '1', pos: { x: 1520, y: 1450 } },
                    { text: '2', pos: { x: 1480, y: 1470 } },
                    { text: '4', pos: { x: 1490, y: 1490 } },
                    { text: '8', pos: { x: 1520, y: 1510 } },
                ]
            }
        ]
    },
    "ZYRARDOW_GRODZISKMAZOWIECKI_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1670,1450 ABS100-20-4 SPR10 LR10 TEND',
                    'M1670,1470 ABS100-20-4 SPR10 LR10 TEND',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_397N',
                signalPos: { x: '1780', y: '1450' },
                trainPos: { x: '1765', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_398',
                signalPos: { x: '1780', y: '1470' },
                trainPos: { x: '1765', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_397',
                signalPos: { x: '1780', y: '1450' },
                trainPos: { x: '1795', y: '1450' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_398N',
                signalPos: { x: '1780', y: '1470' },
                trainPos: { x: '1795', y: '1470' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_383N',
                signalPos: { x: '1900', y: '1450' },
                trainPos: { x: '1885', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_382',
                signalPos: { x: '1900', y: '1470' },
                trainPos: { x: '1885', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_383',
                signalPos: { x: '1900', y: '1450' },
                trainPos: { x: '1915', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_382N',
                signalPos: { x: '1900', y: '1470' },
                trainPos: { x: '1915', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_367N',
                signalPos: { x: '2020', y: '1450' },
                trainPos: { x: '2005', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_368',
                signalPos: { x: '2020', y: '1470' },
                trainPos: { x: '2005', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_367',
                signalPos: { x: '2020', y: '1450' },
                trainPos: { x: '2035', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_368N',
                signalPos: { x: '2020', y: '1470' },
                trainPos: { x: '2035', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_355N',
                signalPos: { x: '2140', y: '1450' },
                trainPos: { x: '2125', y: '1450' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_354',
                signalPos: { x: '2140', y: '1470' },
                trainPos: { x: '2125', y: '1470' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '397', pos: { x: 1720, y: 1450 } },
                    { text: '412', pos: { x: 1720, y: 1470 } },

                    { text: '383', pos: { x: 1840, y: 1450 } },
                    { text: '398', pos: { x: 1840, y: 1470 } },

                    { text: '367', pos: { x: 1960, y: 1450 } },
                    { text: '382', pos: { x: 1960, y: 1470 } },

                    { text: '355', pos: { x: 2080, y: 1450 } },
                    { text: '368', pos: { x: 2080, y: 1470 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Międzyborów',
                    pos: { x: 1720, y: 1420 },
                    posFlipped: { x: 1720, y: 1500 },
                    platforms: [
                        { pos: { x: 1695, y: 1437.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1695, y: 1475 }, width: 50, height: 7.5 },
                    ]
                },
            }
        ]
    },


    "KORYTOW_GRODZISKMAZOWIECKI": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,1580 TSTART LR10 SPR10 ABS100-20-3',
                    'M10,1600 TSTART LR10 SPR10 ABS100-20-3'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_73',
                signalPos: { x: '30', y: '1590' },
                trainPos: { x: '45', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_74N',
                signalPos: { x: '30', y: '1610' },
                trainPos: { x: '45', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_51N',
                signalPos: { x: '150', y: '1590' },
                trainPos: { x: '135', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_50',
                signalPos: { x: '150', y: '1610' },
                trainPos: { x: '135', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_51',
                signalPos: { x: '150', y: '1590' },
                trainPos: { x: '165', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_50N',
                signalPos: { x: '150', y: '1610' },
                trainPos: { x: '165', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_31N',
                signalPos: { x: '270', y: '1590' },
                trainPos: { x: '255', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_32',
                signalPos: { x: '270', y: '1610' },
                trainPos: { x: '255', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_31',
                signalPos: { x: '270', y: '1590' },
                trainPos: { x: '285', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_32N',
                signalPos: { x: '270', y: '1610' },
                trainPos: { x: '285', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '51', pos: { x: 90, y: 1590 } },
                    { text: '74', pos: { x: 90, y: 1610 } },
                    { text: '31', pos: { x: 210, y: 1590 } },
                    { text: '50', pos: { x: 210, y: 1610 } },
                    { text: '17', pos: { x: 330, y: 1590 } },
                    { text: '32', pos: { x: 330, y: 1610 } },
                ]
            },
        ]
    },
    "ZYRARDOW_GRODZISKMAZOWIECKI_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,1660 TSTART LR10 SPR10 ABS100-20-3',
                    'M10,1680 TSTART LR10 SPR10 ABS100-20-3'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_355',
                signalPos: { x: '30', y: '1670' },
                trainPos: { x: '45', y: '1670' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_354N',
                signalPos: { x: '30', y: '1690' },
                trainPos: { x: '45', y: '1690' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_341N',
                signalPos: { x: '150', y: '1670' },
                trainPos: { x: '135', y: '1670' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_340',
                signalPos: { x: '150', y: '1690' },
                trainPos: { x: '135', y: '1690' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_341',
                signalPos: { x: '150', y: '1670' },
                trainPos: { x: '165', y: '1670' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_340N',
                signalPos: { x: '150', y: '1690' },
                trainPos: { x: '165', y: '1690' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_327N',
                signalPos: { x: '270', y: '1670' },
                trainPos: { x: '255', y: '1670' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_328',
                signalPos: { x: '270', y: '1690' },
                trainPos: { x: '255', y: '1690' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_327',
                signalPos: { x: '270', y: '1670' },
                trainPos: { x: '285', y: '1670' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_328N',
                signalPos: { x: '270', y: '1690' },
                trainPos: { x: '285', y: '1690' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '341', pos: { x: 90, y: 1670 } },
                    { text: '354', pos: { x: 90, y: 1690 } },

                    { text: '327', pos: { x: 210, y: 1670 } },
                    { text: '340', pos: { x: 210, y: 1690 } },

                    { text: '315', pos: { x: 330, y: 1670 } },
                    { text: '328', pos: { x: 330, y: 1690 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Jaktorów',
                    pos: { x: 90, y: 1647.5 },
                    posFlipped: { x: 90, y: 1720 },
                    platforms: [
                        { pos: { x: 65, y: 1657.5 }, width: 50, height: 7.5 },
                        { pos: { x: 65, y: 1695 }, width: 50, height: 7.5 },
                    ]
                },
            },
        ]
    },
    "1251_GM_GRODZISKMAZOWIECKI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //& TOR 1K - T1 - TOR1P
                    'M400,1590 LR250 SPR10 LR140 SPR10 LR130',
                    //& TOR 2K - T2 - TOR2P
                    'M400,1610 LR250 SPR10 LR140 SPR10 LR130',

                    //& TOR 1Z - T3c - T3 - T3a - TOR 3P
                    'M400,1670 LR110 SPR10 LR100 SPR10 LR40 SPR10 LR100 SPR10 LR100 SPR10 LR40',
                    //& TOR 2Z - T4b - T4 - T4a - TOR 4P
                    'M400,1690 LR110 SPR10 LR10 SWDN40 LR95 SPR10 LR20 SWUP40 LR5 SPR10 LR100 SPR10 LR110 SPR10 LR30',


                    //^ SW53/51 - SW43/36 - T11
                    'M595,1610 SWUP20 LR30 SWUP20 LR15 SPR10 LR140 SPR10 LR10 SWDN20',
                    //^ SW 42/38 - T14 - SW11/8
                    'M625,1610 SWDN40 LR20 SPR10 LR140 SPR10 LR40 SWDN20',


                    //? SW66/63 + SW60/58
                    'M410,1590 SWDN20 LR40 SWUP20',
                    //? SW65/62
                    'M415,1670 SWUP30 LR10 SWUP30',
                    //? SW64/61 - SW59/57
                    'M425,1690 SWUP20 LR15 SWUP30 LR15 SWUP30',
                    //? SW56/55 - 54/52
                    'M480,1610 SWDN60 LR10 SWDN20',
                    //? SW44/31
                    'M640,1670 SWUP20',

                    //? SWITCHES: 22/19 - 17/14 - 13/9
                    'M800,1690 SWUP20 LR10 SWUP20 LR17.5 SWUP40',
                    //? SW10/7 - 5/2
                    'M870,1590 SWDN20 LR40 SWUP20',
                    //? SW6/4 - 3/1
                    'M905,1610 SWDN60 LR10 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Gr_W',
                signalPos: { x: '390', y: '1590' },
                trainPos: { x: '375', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_X',
                signalPos: { x: '390', y: '1610' },
                trainPos: { x: '375', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_Y',
                signalPos: { x: '390', y: '1670' },
                trainPos: { x: '375', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_Z',
                signalPos: { x: '390', y: '1690' },
                trainPos: { x: '375', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Gr_P1',
                signalPos: { x: '390', y: '1590' },
                trainPos: { x: '405', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P2',
                signalPos: { x: '390', y: '1610' },
                trainPos: { x: '405', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P3',
                signalPos: { x: '390', y: '1670' },
                trainPos: { x: '405', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P4',
                signalPos: { x: '390', y: '1690' },
                trainPos: { x: '405', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS LEFT SIDE
            {
                signalName: 'Gr_O3',
                signalPos: { x: '510', y: '1670' },
                trainPos: { x: '525', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_O4',
                signalPos: { x: '510', y: '1690' },
                trainPos: { x: '537.5', y: '1730' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_N3',
                signalPos: { x: '630', y: '1670' },
                trainPos: { x: '615', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_N4',
                signalPos: { x: '640', y: '1730' },
                trainPos: { x: '625', y: '1730' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Gr_M11',
                signalPos: { x: '650', y: '1570' },
                trainPos: { x: '665', y: '1570' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M1',
                signalPos: { x: '650', y: '1590' },
                trainPos: { x: '665', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M2',
                signalPos: { x: '650', y: '1610' },
                trainPos: { x: '665', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M14',
                signalPos: { x: '650', y: '1650' },
                trainPos: { x: '680', y: '1650' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M3',
                signalPos: { x: '670', y: '1670' },
                trainPos: { x: '685', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M4',
                signalPos: { x: '670', y: '1690' },
                trainPos: { x: '685', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            //~ SIGNALS RIGHT SIDE
            {
                signalName: 'Gr_H11',
                signalPos: { x: '810', y: '1570' },
                trainPos: { x: '795', y: '1570' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H1',
                signalPos: { x: '810', y: '1590' },
                trainPos: { x: '795', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H2',
                signalPos: { x: '810', y: '1610' },
                trainPos: { x: '795', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H14',
                signalPos: { x: '810', y: '1650' },
                trainPos: { x: '760', y: '1650' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H3',
                signalPos: { x: '790', y: '1670' },
                trainPos: { x: '775', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H4',
                signalPos: { x: '790', y: '1690' },
                trainPos: { x: '775', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_G3',
                signalPos: { x: '900', y: '1670' },
                trainPos: { x: '885', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_G4',
                signalPos: { x: '910', y: '1690' },
                trainPos: { x: '895', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Gr_D',
                signalPos: { x: '940', y: '1590' },
                trainPos: { x: '955', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_C',
                signalPos: { x: '940', y: '1610' },
                trainPos: { x: '955', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_B',
                signalPos: { x: '940', y: '1670' },
                trainPos: { x: '955', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_A',
                signalPos: { x: '940', y: '1690' },
                trainPos: { x: '955', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Grodzisk Mazowiecki',
                    prefix: 'Gr',
                    pos: { x: 565, y: 1540 },
                    posFlipped: { x: 795, y: 1730 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 685, y: 1532 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron II', width: 75, height: 10, pos: { x: 682, y: 1655 } },
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 682, y: 1675 } },
                ],
                trackLabels: [
                    { text: '11', pos: { x: 730, y: 1570 } },
                    { text: '1', pos: { x: 730, y: 1590 } },
                    { text: '2', pos: { x: 730, y: 1610 } },
                    { text: '14', pos: { x: 730, y: 1650 } },
                    { text: '3c', pos: { x: 570, y: 1670 } },
                    { text: '3', pos: { x: 730, y: 1670 } },
                    { text: '3a', pos: { x: 870, y: 1670 } },
                    { text: '4b', pos: { x: 585, y: 1730 } },
                    { text: '4', pos: { x: 730, y: 1690 } },
                    { text: '4a', pos: { x: 855, y: 1690 } },
                ]
            },
        ]
    },


    "GRODZISKMAZOWIECKI_PRUSZKOW_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M950,1590 ABS100-20-7',
                    'M950,1610 ABS100-20-7',
                    'M950,1670 ABS100-20-7',
                    'M950,1690 ABS100-20-7',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_267N',
                signalPos: { x: '1060', y: '1590' },
                trainPos: { x: '1045', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_266',
                signalPos: { x: '1060', y: '1610' },
                trainPos: { x: '1045', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_267',
                signalPos: { x: '1060', y: '1590' },
                trainPos: { x: '1075', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_266N',
                signalPos: { x: '1060', y: '1610' },
                trainPos: { x: '1075', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            //
            {
                signalName: 'L447_271N',
                signalPos: { x: '1060', y: '1670' },
                trainPos: { x: '1045', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_270',
                signalPos: { x: '1060', y: '1690' },
                trainPos: { x: '1045', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_271',
                signalPos: { x: '1060', y: '1670' },
                trainPos: { x: '1075', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_270N',
                signalPos: { x: '1060', y: '1690' },
                trainPos: { x: '1075', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_253SN',
                signalPos: { x: '1180', y: '1590' },
                trainPos: { x: '1165', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_252S',
                signalPos: { x: '1180', y: '1610' },
                trainPos: { x: '1165', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_253S',
                signalPos: { x: '1180', y: '1590' },
                trainPos: { x: '1195', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_252SN',
                signalPos: { x: '1180', y: '1610' },
                trainPos: { x: '1195', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_253N',
                signalPos: { x: '1180', y: '1670' },
                trainPos: { x: '1165', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_252',
                signalPos: { x: '1180', y: '1690' },
                trainPos: { x: '1165', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_253',
                signalPos: { x: '1180', y: '1670' },
                trainPos: { x: '1195', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_252N',
                signalPos: { x: '1180', y: '1690' },
                trainPos: { x: '1195', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_237SN',
                signalPos: { x: '1300', y: '1590' },
                trainPos: { x: '1285', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_238S',
                signalPos: { x: '1300', y: '1610' },
                trainPos: { x: '1285', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_237S',
                signalPos: { x: '1300', y: '1590' },
                trainPos: { x: '1315', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_238SN',
                signalPos: { x: '1300', y: '1610' },
                trainPos: { x: '1315', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_237N',
                signalPos: { x: '1300', y: '1670' },
                trainPos: { x: '1285', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_238',
                signalPos: { x: '1300', y: '1690' },
                trainPos: { x: '1285', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_237',
                signalPos: { x: '1300', y: '1670' },
                trainPos: { x: '1315', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_238N',
                signalPos: { x: '1300', y: '1690' },
                trainPos: { x: '1315', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_223SN',
                signalPos: { x: '1420', y: '1590' },
                trainPos: { x: '1405', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_222S',
                signalPos: { x: '1420', y: '1610' },
                trainPos: { x: '1405', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L447_223N',
                signalPos: { x: '1420', y: '1670' },
                trainPos: { x: '1405', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_228',
                signalPos: { x: '1420', y: '1690' },
                trainPos: { x: '1405', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_223S',
                signalPos: { x: '1420', y: '1590' },
                trainPos: { x: '1435', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_222SN',
                signalPos: { x: '1420', y: '1610' },
                trainPos: { x: '1435', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L447_223',
                signalPos: { x: '1420', y: '1670' },
                trainPos: { x: '1435', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_228N',
                signalPos: { x: '1420', y: '1690' },
                trainPos: { x: '1435', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_207SN',
                signalPos: { x: '1540', y: '1590' },
                trainPos: { x: '1525', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_208S',
                signalPos: { x: '1540', y: '1610' },
                trainPos: { x: '1525', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_207S',
                signalPos: { x: '1540', y: '1590' },
                trainPos: { x: '1555', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_208SN',
                signalPos: { x: '1540', y: '1610' },
                trainPos: { x: '1555', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_207N',
                signalPos: { x: '1540', y: '1670' },
                trainPos: { x: '1525', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_208',
                signalPos: { x: '1540', y: '1690' },
                trainPos: { x: '1525', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_207',
                signalPos: { x: '1540', y: '1670' },
                trainPos: { x: '1555', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_208N',
                signalPos: { x: '1540', y: '1690' },
                trainPos: { x: '1555', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_193SN',
                signalPos: { x: '1660', y: '1590' },
                trainPos: { x: '1645', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_194S',
                signalPos: { x: '1660', y: '1610' },
                trainPos: { x: '1645', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_193S',
                signalPos: { x: '1660', y: '1590' },
                trainPos: { x: '1675', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_194SN',
                signalPos: { x: '1660', y: '1610' },
                trainPos: { x: '1675', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_193N',
                signalPos: { x: '1660', y: '1670' },
                trainPos: { x: '1645', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_194',
                signalPos: { x: '1660', y: '1690' },
                trainPos: { x: '1645', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_193',
                signalPos: { x: '1660', y: '1670' },
                trainPos: { x: '1675', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_194N',
                signalPos: { x: '1660', y: '1690' },
                trainPos: { x: '1675', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Milanówek',
                    pos: { x: 1120, y: 1650 },
                    posFlipped: { x: 1120, y: 1720 },
                    platforms: [
                        { pos: { x: 1095, y: 1675 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Brwinów',
                    pos: { x: 1457.5, y: 1650 },
                    posFlipped: { x: 1457.5, y: 1720 },
                    platforms: [
                        { pos: { x: 1432.5, y: 1675 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Parzniew',
                    pos: { x: 1720, y: 1650 },
                    posFlipped: { x: 1720, y: 1720 },
                    platforms: [
                        { pos: { x: 1695, y: 1675 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '267S', pos: { x: 1000, y: 1590 } },
                    { text: '280S', pos: { x: 1000, y: 1610 } },
                    { text: '271', pos: { x: 1000, y: 1670 } },
                    { text: '280', pos: { x: 1000, y: 1690 } },
                    { text: '253S', pos: { x: 1120, y: 1590 } },
                    { text: '266S', pos: { x: 1120, y: 1610 } },
                    { text: '253', pos: { x: 1120, y: 1670 } },
                    { text: '270', pos: { x: 1120, y: 1690 } },
                    { text: '237S', pos: { x: 1240, y: 1590 } },
                    { text: '252S', pos: { x: 1240, y: 1610 } },
                    { text: '237', pos: { x: 1240, y: 1670 } },
                    { text: '252', pos: { x: 1240, y: 1690 } },
                    { text: '221S', pos: { x: 1360, y: 1590 } },
                    { text: '238S', pos: { x: 1360, y: 1610 } },
                    { text: '221', pos: { x: 1360, y: 1670 } },
                    { text: '238', pos: { x: 1360, y: 1690 } },
                    { text: '207S', pos: { x: 1480, y: 1590 } },
                    { text: '222S', pos: { x: 1480, y: 1610 } },
                    { text: '207', pos: { x: 1480, y: 1670 } },
                    { text: '228', pos: { x: 1480, y: 1690 } },
                    { text: '193S', pos: { x: 1600, y: 1590 } },
                    { text: '208S', pos: { x: 1600, y: 1610 } },
                    { text: '193', pos: { x: 1600, y: 1670 } },
                    { text: '208', pos: { x: 1600, y: 1690 } },
                    { text: '181S', pos: { x: 1720, y: 1590 } },
                    { text: '194S', pos: { x: 1720, y: 1610 } },
                    { text: '181', pos: { x: 1720, y: 1670 } },
                    { text: '194', pos: { x: 1720, y: 1690 } },
                ]
            },
        ]
    },
    "3384_Pr_PRUSZKOW": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ TOR 1G - T1 - T1b - T1J 
                    'M1780,1590 LR100 SPR10 LR150 SPR10 LR170 SPR10 LR100',
                    //~ TOR2G - T2 - T2b - T2J
                    'M1780,1610 LR100 SPR10 LR150 SPR10 LR40 SPR10 LR100 SPR10 LR120',

                    //~ TOR 3G - T3 - T3c - TOR 3W
                    'M1780,1670 LR95 SPR10 LR97.5 SWUP20 LR202.5 SPR10 LR30 SWDN20 LR95',
                    //~ TOR 4G - T3 - T4b - TOR 4W
                    'M1780,1690 LR95 SPR10 LR97.5 SWDN10 LR222.5 SPR10 LR40 SWUP10 LR65',


                    //^ SW53/52ab - T13 - T34cd/33ab
                    'M1905,1550 SWUP20 LR20 SPR10 LR100 SPR10 LR25 SWDN20',
                    //^ SW54/53 - T11 - T33cd/30
                    'M1890,1570 SWUP20 LR35 SPR10 LR100 SPR10 LR40 SWDN20',
                    //^ SW58/56 - T7 - SW28/27
                    'M1870,1590 SWUP20 LR55 SPR10 LR100 SPR10 LR55 SWDN20',
                    //^ SW69 - T5 - SW36
                    'M1815,1610 SWDN20 LR60 SPR10 LR150 SPR10 LR20 SWUP20',

                    //? SWITCHES: 71/70 - 66/61
                    'M1800,1590 SWDN20 LR40 SWUP20',
                    //? SW65/60
                    'M1830,1630 SWDN40',
                    //? SW68/63 - SW59/57
                    'M1800,1690 SWUP20 LR50 SWDN20',

                    //? SWITCHES: 12/9 - 6/4 - 3/1
                    'M2245,1590 SWDN20 LR45 SWDN60 LR10 SWDN20',
                    //? SWITCHES: 13/11 - 10/7 - 5/2
                    'M2240,1700 SWUP30 LR10 SWUP60 LR50 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Pr_W',
                signalPos: { x: '1780', y: '1590' },
                trainPos: { x: '1765', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_X',
                signalPos: { x: '1780', y: '1610' },
                trainPos: { x: '1765', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_Y',
                signalPos: { x: '1780', y: '1670' },
                trainPos: { x: '1765', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_Z',
                signalPos: { x: '1780', y: '1690' },
                trainPos: { x: '1765', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Pr_L1',
                signalPos: { x: '1880', y: '1590' },
                trainPos: { x: '1895', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L2',
                signalPos: { x: '1880', y: '1610' },
                trainPos: { x: '1895', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L5',
                signalPos: { x: '1880', y: '1630' },
                trainPos: { x: '1895', y: '1630' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L3',
                signalPos: { x: '1875', y: '1670' },
                trainPos: { x: '1890', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L4',
                signalPos: { x: '1875', y: '1690' },
                trainPos: { x: '1890', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_L13',
                signalPos: { x: '1930', y: '1530' },
                trainPos: { x: '1945', y: '1530' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L11',
                signalPos: { x: '1930', y: '1550' },
                trainPos: { x: '1945', y: '1550' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L7',
                signalPos: { x: '1930', y: '1570' },
                trainPos: { x: '1945', y: '1570' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS RIGHT SIDE
            {
                signalName: 'Pr_H13',
                signalPos: { x: '2050', y: '1530' },
                trainPos: { x: '2035', y: '1530' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H11',
                signalPos: { x: '2050', y: '1550' },
                trainPos: { x: '2035', y: '1550' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H7',
                signalPos: { x: '2050', y: '1570' },
                trainPos: { x: '2035', y: '1570' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H1',
                signalPos: { x: '2050', y: '1590' },
                trainPos: { x: '2035', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_K2',
                signalPos: { x: '2050', y: '1610' },
                trainPos: { x: '2035', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_K5',
                signalPos: { x: '2050', y: '1630' },
                trainPos: { x: '2035', y: '1630' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_J2',
                signalPos: { x: '2090', y: '1610' },
                trainPos: { x: '2105', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_G1',
                signalPos: { x: '2230', y: '1590' },
                trainPos: { x: '2215', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G2',
                signalPos: { x: '2210', y: '1610' },
                trainPos: { x: '2195', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G3',
                signalPos: { x: '2200', y: '1650' },
                trainPos: { x: '2185', y: '1650' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G4',
                signalPos: { x: '2220', y: '1700' },
                trainPos: { x: '2205', y: '1700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Pr_D',
                signalPos: { x: '2330', y: '1590' },
                trainPos: { x: '2345', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_C',
                signalPos: { x: '2330', y: '1610' },
                trainPos: { x: '2345', y: '1610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_B',
                signalPos: { x: '2330', y: '1670' },
                trainPos: { x: '2345', y: '1670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_A',
                signalPos: { x: '2330', y: '1690' },
                trainPos: { x: '2345', y: '1690' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Pruszków',
                    prefix: 'Pr',
                    pos: { x: 2180, y: 1540 },
                    posFlipped: { x: 2110, y: 1730 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 2015, y: 1718 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 70, height: 35, pos: { x: 2130, y: 1657.5 } },
                ],
                trackLabels: [
                    { text: '13', pos: { x: 1990, y: 1530 } },
                    { text: '11', pos: { x: 1990, y: 1550 } },
                    { text: '7', pos: { x: 1990, y: 1570 } },
                    { text: '1', pos: { x: 1965, y: 1590 } },
                    { text: '2', pos: { x: 1965, y: 1610 } },
                    { text: '5', pos: { x: 1965, y: 1630 } },
                    { text: '3', pos: { x: 1935, y: 1670 } },
                    { text: '4', pos: { x: 1935, y: 1690 } },
                    { text: '1b', pos: { x: 2170, y: 1590 } },
                    { text: '2b', pos: { x: 2150, y: 1610 } },
                    { text: '3c', pos: { x: 2155, y: 1650 } },
                    { text: '4b', pos: { x: 2165, y: 1700 } },
                ]
            },
        ]
    },
    "PRUSZKOW_ENDING_SCREEN": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2340,1590 LR70 SPR5 DOT5-5-3',
                    'M2340,1610 LR70 SPR5 DOT5-5-3',
                    'M2340,1670 LR70 SPR5 DOT5-5-3',
                    'M2340,1690 LR70 SPR5 DOT5-5-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_135SN',
                invisibleSignal: true,
                signalPos: { x: '2450', y: '1590' },
                trainPos: { x: '2435', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_140S',
                invisibleSignal: true,
                signalPos: { x: '2450', y: '1610' },
                trainPos: { x: '2435', y: '1610' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },

            {
                signalName: 'L447_139N',
                invisibleSignal: true,
                signalPos: { x: '2450', y: '1670' },
                trainPos: { x: '2435', y: '1670' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_140',
                invisibleSignal: true,
                signalPos: { x: '2450', y: '1690' },
                trainPos: { x: '2435', y: '1690' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": []
    },
}