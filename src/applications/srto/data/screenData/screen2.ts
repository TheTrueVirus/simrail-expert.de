import { ScreenData } from "../../types/mapdata-types";

const OLD_TRACK_COLOR = 'rgb(255, 100, 100, 0.1)'
const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'

/* ===============================================================
    SCREEN 2 = PSARY - IDZIKOWICE - GROZISK MAZOWIECKI - WARSZAWA
   =============================================================== */

export const SCREEN2_DATA: ScreenData.ScreenDataProps = {
    "ADDITIONAL_ELEMENTS": {
        "TRACKS": [],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 5, y: 170 },
                text: 'LK4 - Zawiercie'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 50, y: 30 },
                text: 'LK572 - Żelisławice'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 480, y: 190 },
                text: 'LK571 - Czarnca'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2000, y: 400 },
                text: 'Tomaszów Mazowiecki'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2000, y: 530 },
                text: 'Radom Główny'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2420, y: 765 },
                text: 'LK12 - Łuków'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 10, y: 930 },
                text: 'LK1 - Łódź Voivodeship'
            },
            {
                annotationType: 'trackBreakMarker',
                breakLetters: [
                    { first: { x: 2500, y: 100 }, second: { x: 20, y: 255 } },       // [A] Wloszczowa Polnoc <-> Olszamowice
                    { first: { x: 2430, y: 260 }, second: { x: 20, y: 435 } },       // [B] Pilichowice [Olszamowice] <-> Opoczno Poludnie
                    { first: { x: 2490, y: 440 }, second: { x: 20, y: 555 } },       // [C] Idzikowice <-> Strzalki
                    { first: { x: 1260, y: 560 }, second: { x: 20, y: 675 } },       // [D] Strzalki <-> Biala Rawska [Szeligi]
                    { first: { x: 2460, y: 680 }, second: { x: 120, y: 815 } },      // [E] Szeligi <-> Korytow
                    { first: { x: 2400, y: 820 }, second: { x: 20, y: 1095 } },      // [F] Grodzisk Mazowiecki <-> Pruszkow
                    { first: { x: 2460, y: 1100 }, second: { x: 20, y: 1335 } },      // [G] Warszawa Wlochy <-> Warszawa Zachodnia
                ]
            }
        ]
    },

    "PSARY_KNAPOWKA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,120 DOT5-5-3 SPR5 LR100',
                    'M10,140 DOT5-5-3 SPR5 LR100',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1625',
                invisibleSignal: true,
                signalPos: { x: '30', y: '120' },
                trainPos: { x: '45', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1624N',
                invisibleSignal: true,
                signalPos: { x: '30', y: '140' },
                trainPos: { x: '45', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1611', pos: { x: 90, y: 120 } },
                    { text: '1624', pos: { x: 90, y: 140 } },
                ]
            },
        ]
    },
    "1772_Kn_KNAPOWKA": { //^ Knapowka
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M150,120 LR110',
                    'M150,140 LR110',
                    'M170,140 SWUP20 LR20 SWDN20 LR20 SWDN20 LR35'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Kn_E',
                signalPos: { x: '150', y: '120' },
                trainPos: { x: '135', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_F',
                signalPos: { x: '150', y: '140' },
                trainPos: { x: '135', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: 'Kn_C',
                signalPos: { x: '260', y: '120' },
                trainPos: { x: '275', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_B',
                signalPos: { x: '260', y: '140' },
                trainPos: { x: '275', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_A',
                signalPos: { x: '260', y: '160' },
                trainPos: { x: '275', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_A',
                signalPos: { x: '260', y: '160' },
                trainPos: { x: '275', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Knapówka',
                    prefix: 'Kn',
                    pos: { x: 205, y: 90 },
                    posFlipped: { x: 205, y: 195 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 180, y: 150 },
                    rotation: 0,
                }
            },
        ]
    },
    "KNAPOWKA_WLOSZCZOWAPOLNOC": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    // Zelislawice
                    'M55,50 DOT5-5-7 SPR20 ABS100-20-2 SPR10 LR2.5 SWDN40 LR2.5 SPR10 ABS100-20-2',

                    // Knapowka
                    'M270,120 ABS100-20-3',
                    'M270,140 ABS100-20-3',

                    // Czarnca
                    'M270,160 ABS100-20-2 SPR20 DOT5-5-10',
                ]
            }
        ],
        "SIGNALS": [
            //~ SIGNALS TOWARDS AND FROM CZARNZA TO KNAPOWKA
            {
                signalName: 'L571_19N',
                signalPos: { x: '380', y: '160' },
                trainPos: { x: '365', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L571_19',
                signalPos: { x: '380', y: '160' },
                trainPos: { x: '395', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'Cz_Z',
                signalPos: { x: '500', y: '160' },
                trainPos: { x: '485', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Cz_O',
                signalPos: { x: '500', y: '160' },
                trainPos: { x: '515', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS TOWARDS AND FROM ZELISLAWICE TO WLOSZCZOWA POLNOC
            {
                signalName: 'Zes_B',
                signalPos: { x: '130', y: '50' },
                trainPos: { x: '115', y: '50' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zes_A',
                signalPos: { x: '130', y: '50' },
                trainPos: { x: '145', y: '50' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'L572_59N',
                signalPos: { x: '250', y: '50' },
                trainPos: { x: '235', y: '50' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_59',
                signalPos: { x: '250', y: '50' },
                trainPos: { x: '265', y: '50' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L572_41N',
                signalPos: { x: '370', y: '50' },
                trainPos: { x: '355', y: '50' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_41',
                signalPos: { x: '380', y: '90' },
                trainPos: { x: '395', y: '90' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_25N',
                signalPos: { x: '500', y: '90' },
                trainPos: { x: '485', y: '90' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L572_25',
                signalPos: { x: '500', y: '90' },
                trainPos: { x: '515', y: '90' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            //~ ABS SIGNALS KNAPOWKA <-> WLOSZCZOWA POLNOC
            {
                signalName: 'L4_1587N',
                signalPos: { x: '380', y: '120' },
                trainPos: { x: '365', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1586',
                signalPos: { x: '380', y: '140' },
                trainPos: { x: '365', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1587',
                signalPos: { x: '380', y: '120' },
                trainPos: { x: '395', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1586N',
                signalPos: { x: '380', y: '140' },
                trainPos: { x: '395', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },


            {
                signalName: 'L4_1565N',
                signalPos: { x: '500', y: '120' },
                trainPos: { x: '485', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1564',
                signalPos: { x: '500', y: '140' },
                trainPos: { x: '485', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1565',
                signalPos: { x: '500', y: '120' },
                trainPos: { x: '515', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1564N',
                signalPos: { x: '500', y: '140' },
                trainPos: { x: '515', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    // Czarnca <-> Knapowka
                    { text: '19', pos: { x: 320, y: 160 } },
                    { text: '21', pos: { x: 440, y: 160 } },
                    // Knapowka <-> Wloszczowa Polnoc 1
                    { text: '1587', pos: { x: 320, y: 120 } },
                    { text: '1600', pos: { x: 320, y: 140 } },
                    { text: '1565', pos: { x: 440, y: 120 } },
                    { text: '1586', pos: { x: 440, y: 140 } },
                    { text: '1551', pos: { x: 560, y: 120 } },
                    { text: '1564', pos: { x: 560, y: 140 } },
                    // Wloszczowa Polnoc <-> Zelislawice
                    { text: '59', pos: { x: 190, y: 50 } },
                    { text: '41', pos: { x: 310, y: 50 } },
                    { text: '25', pos: { x: 440, y: 90 } },
                    { text: '11', pos: { x: 560, y: 90 } },
                ]
            },
        ]
    },
    "4987_WP_WLOSZCZOWAPOLNOC": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //^ T5
                    'M710,90 SWUP20 LR15 SPR10 LR100 SPR10 LR10 SWDN20',
                    //^ T3
                    'M630,90 LR100 SPR10 LR100 SPR10 LR25 SWDN30',

                    //~ T1
                    'M620,120 LR90 SPR10 LR110 SPR10 LR90',
                    //~ T2
                    'M620,140 LR90 SPR10 LR110 SPR10 LR90',

                    //~ T4
                    'M695,140 SWDN20 LR10 SPR10 LR100 SPR10 LR25 SWUP20',

                    //? SWITCHES: 35/33 - 31/30 - 28/26
                    'M650,90 SWDN30 LR10 SWDN20 LR10 SWUP20 LR10 SWUP30',
                    //? SWTICHES: 4/3 - 2/1
                    'M890,140 SWUP20 LR10 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'WP_S',
                signalPos: { x: '620', y: '90' },
                trainPos: { x: '605', y: '90' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_T',
                signalPos: { x: '620', y: '120' },
                trainPos: { x: '605', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_U',
                signalPos: { x: '620', y: '140' },
                trainPos: { x: '605', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNAL TO ZELISLAWICE
            {
                signalName: 'WP_R',
                signalPos: { x: '620', y: '90' },
                trainPos: { x: '635', y: '90' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'WP_P',
                signalPos: { x: '730', y: '70' },
                trainPos: { x: '745', y: '70' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_N',
                signalPos: { x: '730', y: '90' },
                trainPos: { x: '745', y: '90' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_M',
                signalPos: { x: '710', y: '120' },
                trainPos: { x: '725', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_L',
                signalPos: { x: '710', y: '140' },
                trainPos: { x: '725', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_K',
                signalPos: { x: '710', y: '160' },
                trainPos: { x: '725', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'WP_E',
                signalPos: { x: '850', y: '70' },
                trainPos: { x: '835', y: '70' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_F',
                signalPos: { x: '850', y: '90' },
                trainPos: { x: '835', y: '90' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_G',
                signalPos: { x: '840', y: '120' },
                trainPos: { x: '825', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_H',
                signalPos: { x: '840', y: '140' },
                trainPos: { x: '825', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_J',
                signalPos: { x: '830', y: '160' },
                trainPos: { x: '815', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'WP_B',
                signalPos: { x: '930', y: '120' },
                trainPos: { x: '945', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_A',
                signalPos: { x: '930', y: '140' },
                trainPos: { x: '945', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Włoszczowa Północ',
                    prefix: 'WP',
                    pos: { x: 775, y: 40 },
                    posFlipped: { x: 805, y: 200 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 660, y: 170 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 60, height: 10, pos: { x: 742, y: 75 } },
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 742, y: 165 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 790, y: 70 } },
                    { text: '3', pos: { x: 790, y: 90 } },
                    { text: '1', pos: { x: 775, y: 120 } },
                    { text: '2', pos: { x: 775, y: 140 } },
                    { text: '4', pos: { x: 770, y: 160 } },
                ]
            },
        ]
    },
    "WLOSZCZOWAPOLNOC_OLSZAMOWICE_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M940,120 ABS100-20-13 SPR10 LR10 TEND',
                    'M940,140 ABS100-20-13 SPR10 LR10 TEND',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1511N',
                signalPos: { x: '1050', y: '120' },
                trainPos: { x: '1035', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1510',
                signalPos: { x: '1050', y: '140' },
                trainPos: { x: '1035', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1511',
                signalPos: { x: '1050', y: '120' },
                trainPos: { x: '1065', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1510N',
                signalPos: { x: '1050', y: '140' },
                trainPos: { x: '1065', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_1489N',
                signalPos: { x: '1170', y: '120' },
                trainPos: { x: '1155', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1490',
                signalPos: { x: '1170', y: '140' },
                trainPos: { x: '1155', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1489',
                signalPos: { x: '1170', y: '120' },
                trainPos: { x: '1185', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1490N',
                signalPos: { x: '1170', y: '140' },
                trainPos: { x: '1185', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1469N',
                signalPos: { x: '1290', y: '120' },
                trainPos: { x: '1275', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1470',
                signalPos: { x: '1290', y: '140' },
                trainPos: { x: '1275', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1469',
                signalPos: { x: '1290', y: '120' },
                trainPos: { x: '1305', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1470N',
                signalPos: { x: '1290', y: '140' },
                trainPos: { x: '1305', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1455N',
                signalPos: { x: '1410', y: '120' },
                trainPos: { x: '1395', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1454',
                signalPos: { x: '1410', y: '140' },
                trainPos: { x: '1395', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1455',
                signalPos: { x: '1410', y: '120' },
                trainPos: { x: '1425', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1454N',
                signalPos: { x: '1410', y: '140' },
                trainPos: { x: '1425', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1433N',
                signalPos: { x: '1530', y: '120' },
                trainPos: { x: '1515', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1432',
                signalPos: { x: '1530', y: '140' },
                trainPos: { x: '1515', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1433',
                signalPos: { x: '1530', y: '120' },
                trainPos: { x: '1545', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1432N',
                signalPos: { x: '1530', y: '140' },
                trainPos: { x: '1545', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1413N',
                signalPos: { x: '1650', y: '120' },
                trainPos: { x: '1635', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1412',
                signalPos: { x: '1650', y: '140' },
                trainPos: { x: '1635', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1413',
                signalPos: { x: '1650', y: '120' },
                trainPos: { x: '1665', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1412N',
                signalPos: { x: '1650', y: '140' },
                trainPos: { x: '1665', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1393N',
                signalPos: { x: '1770', y: '120' },
                trainPos: { x: '1755', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1392',
                signalPos: { x: '1770', y: '140' },
                trainPos: { x: '1755', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1393',
                signalPos: { x: '1770', y: '120' },
                trainPos: { x: '1785', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1392N',
                signalPos: { x: '1770', y: '140' },
                trainPos: { x: '1785', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1369N',
                signalPos: { x: '1890', y: '120' },
                trainPos: { x: '1875', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1370',
                signalPos: { x: '1890', y: '140' },
                trainPos: { x: '1875', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1369',
                signalPos: { x: '1890', y: '120' },
                trainPos: { x: '1905', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1370N',
                signalPos: { x: '1890', y: '140' },
                trainPos: { x: '1905', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1355N',
                signalPos: { x: '2010', y: '120' },
                trainPos: { x: '1995', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1354',
                signalPos: { x: '2010', y: '140' },
                trainPos: { x: '1995', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1355',
                signalPos: { x: '2010', y: '120' },
                trainPos: { x: '2025', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1354N',
                signalPos: { x: '2010', y: '140' },
                trainPos: { x: '2025', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1333N',
                signalPos: { x: '2130', y: '120' },
                trainPos: { x: '2115', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1332',
                signalPos: { x: '2130', y: '140' },
                trainPos: { x: '2115', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1333',
                signalPos: { x: '2130', y: '120' },
                trainPos: { x: '2145', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1332N',
                signalPos: { x: '2130', y: '140' },
                trainPos: { x: '2145', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1309N',
                signalPos: { x: '2250', y: '120' },
                trainPos: { x: '2235', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1310',
                signalPos: { x: '2250', y: '140' },
                trainPos: { x: '2235', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1309',
                signalPos: { x: '2250', y: '120' },
                trainPos: { x: '2265', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1310N',
                signalPos: { x: '2250', y: '140' },
                trainPos: { x: '2265', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1295N',
                signalPos: { x: '2370', y: '120' },
                trainPos: { x: '2355', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1296',
                signalPos: { x: '2370', y: '140' },
                trainPos: { x: '2355', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1295',
                signalPos: { x: '2370', y: '120' },
                trainPos: { x: '2385', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1296N',
                signalPos: { x: '2370', y: '140' },
                trainPos: { x: '2385', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1281N',
                signalPos: { x: '2490', y: '120' },
                trainPos: { x: '2475', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1280',
                signalPos: { x: '2490', y: '140' },
                trainPos: { x: '2475', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1511', pos: { x: 990, y: 120 } },
                    { text: '1526', pos: { x: 990, y: 140 } },
                    { text: '1489', pos: { x: 1110, y: 120 } },
                    { text: '1510', pos: { x: 1110, y: 140 } },
                    { text: '1469', pos: { x: 1230, y: 120 } },
                    { text: '1490', pos: { x: 1230, y: 140 } },
                    { text: '1455', pos: { x: 1350, y: 120 } },
                    { text: '1470', pos: { x: 1350, y: 140 } },
                    { text: '1433', pos: { x: 1470, y: 120 } },
                    { text: '1454', pos: { x: 1470, y: 140 } },
                    { text: '1413', pos: { x: 1590, y: 120 } },
                    { text: '1432', pos: { x: 1590, y: 140 } },
                    { text: '1393', pos: { x: 1710, y: 120 } },
                    { text: '1412', pos: { x: 1710, y: 140 } },
                    { text: '1369', pos: { x: 1830, y: 120 } },
                    { text: '1392', pos: { x: 1830, y: 140 } },
                    { text: '1355', pos: { x: 1950, y: 120 } },
                    { text: '1370', pos: { x: 1950, y: 140 } },
                    { text: '1333', pos: { x: 2070, y: 120 } },
                    { text: '1354', pos: { x: 2070, y: 140 } },
                    { text: '1309', pos: { x: 2190, y: 120 } },
                    { text: '1332', pos: { x: 2190, y: 140 } },
                    { text: '1295', pos: { x: 2310, y: 120 } },
                    { text: '1310', pos: { x: 2310, y: 140 } },
                    { text: '1281', pos: { x: 2430, y: 120 } },
                    { text: '1296', pos: { x: 2430, y: 140 } },
                ]
            },
        ]
    },



    "WLOSZCZOWAPOLNOC_OLSZAMOWICE_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,270 TSTART LR10 SPR10 ABS100-20-2',
                    'M10,290 TSTART LR10 SPR10 ABS100-20-2'
                ]
            },
        ],
        "SIGNALS": [

            {
                signalName: 'L4_1281',
                signalPos: { x: '30', y: '280' },
                trainPos: { x: '45', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1280N',
                signalPos: { x: '30', y: '300' },
                trainPos: { x: '45', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1267N',
                signalPos: { x: '150', y: '280' },
                trainPos: { x: '135', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1266',
                signalPos: { x: '150', y: '300' },
                trainPos: { x: '135', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1267',
                signalPos: { x: '150', y: '280' },
                trainPos: { x: '165', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1266N',
                signalPos: { x: '150', y: '300' },
                trainPos: { x: '165', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [

                    { text: '1267', pos: { x: 90, y: 280 } },
                    { text: '1280', pos: { x: 90, y: 300 } },
                    { text: '1257', pos: { x: 210, y: 280 } },
                    { text: '1266', pos: { x: 210, y: 300 } },
                ]
            },
        ]
    },
    "2969_Ol_OLSZAMOWICE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M270,280 LR80 SPR10 LR100 SPR10 LR80',
                    'M270,300 LR80 SPR10 LR100 SPR10 LR80',

                    'M290,280 SWDN20 LR20 SWUP20 LR10 SWUP20 LR15 SPR10 LR100 SPR10 LR15 SWDN20',
                    'M330,300 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20 LR10 SWUP20 LR20 SWDN20'
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Ol_T',
                signalPos: { x: '270', y: '280' },
                trainPos: { x: '255', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_W',
                signalPos: { x: '270', y: '300' },
                trainPos: { x: '255', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Ol_O',
                signalPos: { x: '350', y: '260' },
                trainPos: { x: '365', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_N',
                signalPos: { x: '350', y: '280' },
                trainPos: { x: '365', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_M',
                signalPos: { x: '350', y: '300' },
                trainPos: { x: '365', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_L',
                signalPos: { x: '350', y: '320' },
                trainPos: { x: '365', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Ol_E',
                signalPos: { x: '470', y: '260' },
                trainPos: { x: '455', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_F',
                signalPos: { x: '470', y: '280' },
                trainPos: { x: '455', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_G',
                signalPos: { x: '470', y: '300' },
                trainPos: { x: '455', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_H',
                signalPos: { x: '470', y: '320' },
                trainPos: { x: '455', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Ol_B',
                signalPos: { x: '550', y: '280' },
                trainPos: { x: '565', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ol_A',
                signalPos: { x: '550', y: '300' },
                trainPos: { x: '565', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Olszamowice',
                    prefix: 'Ol',
                    pos: { x: 410, y: 230 },
                    posFlipped: { x: 410, y: 350 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 290, y: 250 },
                    rotation: 180,
                },
                platforms: [],
                trackLabels: [
                    { text: '3', pos: { x: 410, y: 260 } },
                    { text: '1', pos: { x: 410, y: 280 } },
                    { text: '2', pos: { x: 410, y: 300 } },
                    { text: '4', pos: { x: 410, y: 320 } },
                ]
            },
        ]
    },
    "OLSZAMOWICE_OPOCZNOPOLUDNIE_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M560,280 ABS100-20-9',
                    'M560,300 ABS100-20-9'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1217N',
                signalPos: { x: '670', y: '280' },
                trainPos: { x: '655', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1216',
                signalPos: { x: '670', y: '300' },
                trainPos: { x: '655', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1217',
                signalPos: { x: '670', y: '280' },
                trainPos: { x: '685', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1216N',
                signalPos: { x: '670', y: '300' },
                trainPos: { x: '685', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_1197N',
                signalPos: { x: '790', y: '280' },
                trainPos: { x: '775', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1196',
                signalPos: { x: '790', y: '300' },
                trainPos: { x: '775', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1997',
                signalPos: { x: '790', y: '280' },
                trainPos: { x: '805', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1196N',
                signalPos: { x: '790', y: '300' },
                trainPos: { x: '805', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1181N',
                signalPos: { x: '910', y: '280' },
                trainPos: { x: '895', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1180',
                signalPos: { x: '910', y: '300' },
                trainPos: { x: '895', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1181',
                signalPos: { x: '910', y: '280' },
                trainPos: { x: '925', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1180N',
                signalPos: { x: '910', y: '300' },
                trainPos: { x: '925', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1163N',
                signalPos: { x: '1030', y: '280' },
                trainPos: { x: '1015', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1162',
                signalPos: { x: '1030', y: '300' },
                trainPos: { x: '1015', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1163',
                signalPos: { x: '1030', y: '280' },
                trainPos: { x: '1045', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1162N',
                signalPos: { x: '1030', y: '300' },
                trainPos: { x: '1045', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1145N',
                signalPos: { x: '1150', y: '280' },
                trainPos: { x: '1135', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1146',
                signalPos: { x: '1150', y: '300' },
                trainPos: { x: '1135', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1145',
                signalPos: { x: '1150', y: '280' },
                trainPos: { x: '1165', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1146N',
                signalPos: { x: '1150', y: '300' },
                trainPos: { x: '1165', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1131N',
                signalPos: { x: '1270', y: '280' },
                trainPos: { x: '1255', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1130',
                signalPos: { x: '1270', y: '300' },
                trainPos: { x: '1255', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1131',
                signalPos: { x: '1270', y: '280' },
                trainPos: { x: '1285', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1130N',
                signalPos: { x: '1270', y: '300' },
                trainPos: { x: '1285', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1109N',
                signalPos: { x: '1390', y: '280' },
                trainPos: { x: '1375', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1108',
                signalPos: { x: '1390', y: '300' },
                trainPos: { x: '1375', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1109',
                signalPos: { x: '1390', y: '280' },
                trainPos: { x: '1405', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1108N',
                signalPos: { x: '1390', y: '300' },
                trainPos: { x: '1405', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1087N',
                signalPos: { x: '1510', y: '280' },
                trainPos: { x: '1495', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1088',
                signalPos: { x: '1510', y: '300' },
                trainPos: { x: '1495', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1087',
                signalPos: { x: '1510', y: '280' },
                trainPos: { x: '1525', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1088N',
                signalPos: { x: '1510', y: '300' },
                trainPos: { x: '1525', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1217', pos: { x: 610, y: 280 } },
                    { text: '1230', pos: { x: 610, y: 300 } },
                    { text: '1197', pos: { x: 730, y: 280 } },
                    { text: '1216', pos: { x: 730, y: 300 } },
                    { text: '1181', pos: { x: 850, y: 280 } },
                    { text: '1196', pos: { x: 850, y: 300 } },
                    { text: '1163', pos: { x: 970, y: 280 } },
                    { text: '1180', pos: { x: 970, y: 300 } },
                    { text: '1145', pos: { x: 1090, y: 280 } },
                    { text: '1162', pos: { x: 1090, y: 300 } },
                    { text: '1131', pos: { x: 1210, y: 280 } },
                    { text: '1146', pos: { x: 1210, y: 300 } },
                    { text: '1109', pos: { x: 1330, y: 280 } },
                    { text: '1130', pos: { x: 1330, y: 300 } },
                    { text: '1087', pos: { x: 1450, y: 280 } },
                    { text: '1108', pos: { x: 1450, y: 300 } },
                    { text: '1069', pos: { x: 1570, y: 280 } },
                    { text: '1088', pos: { x: 1570, y: 300 } },
                ]
            },
        ]
    },
    "3200_Pl_PILICHOWICE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1630,280 LR70',
                    'M1630,300 LR70',
                    'M1650,300 SWUP20 LR20 SWDN20'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'Pl_C',
                signalPos: { x: '1630', y: '280' },
                trainPos: { x: '1615', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pl_D',
                signalPos: { x: '1630', y: '300' },
                trainPos: { x: '1615', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pl_B',
                signalPos: { x: '1700', y: '280' },
                trainPos: { x: '1715', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pl_A',
                signalPos: { x: '1700', y: '300' },
                trainPos: { x: '1715', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Pilichowice',
                    prefix: 'Pl',
                    lcsControlledBy: 'Olszamowice',
                    pos: { x: 1665, y: 245 },
                    posFlipped: { x: 1665, y: 335 }
                },
            },
        ]
    },
    "OLSZAMOWICE_OPOCZNOPOLUDNIE_2-1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1710,280 ABS100-20-6 SPR10 LR10 TEND',
                    'M1710,300 ABS100-20-6 SPR10 LR10 TEND'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1041N',
                signalPos: { x: '1820', y: '280' },
                trainPos: { x: '1805', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1040',
                signalPos: { x: '1820', y: '300' },
                trainPos: { x: '1805', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1041',
                signalPos: { x: '1820', y: '280' },
                trainPos: { x: '1835', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1040N',
                signalPos: { x: '1820', y: '300' },
                trainPos: { x: '1835', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1019N',
                signalPos: { x: '1940', y: '280' },
                trainPos: { x: '1925', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1018',
                signalPos: { x: '1940', y: '300' },
                trainPos: { x: '1925', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1019',
                signalPos: { x: '1940', y: '280' },
                trainPos: { x: '1955', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1018N',
                signalPos: { x: '1940', y: '300' },
                trainPos: { x: '1955', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1001N',
                signalPos: { x: '2060', y: '280' },
                trainPos: { x: '2045', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1000',
                signalPos: { x: '2060', y: '300' },
                trainPos: { x: '2045', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1001',
                signalPos: { x: '2060', y: '280' },
                trainPos: { x: '2075', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1000N',
                signalPos: { x: '2060', y: '300' },
                trainPos: { x: '2075', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_983N',
                signalPos: { x: '2180', y: '280' },
                trainPos: { x: '2165', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_982',
                signalPos: { x: '2180', y: '300' },
                trainPos: { x: '2165', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_983',
                signalPos: { x: '2180', y: '280' },
                trainPos: { x: '2195', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_982N',
                signalPos: { x: '2180', y: '300' },
                trainPos: { x: '2195', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_967N',
                signalPos: { x: '2300', y: '280' },
                trainPos: { x: '2285', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_968',
                signalPos: { x: '2300', y: '300' },
                trainPos: { x: '2285', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_967',
                signalPos: { x: '2300', y: '280' },
                trainPos: { x: '2315', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_968N',
                signalPos: { x: '2300', y: '300' },
                trainPos: { x: '2315', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_953N',
                signalPos: { x: '2420', y: '280' },
                trainPos: { x: '2405', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_952',
                signalPos: { x: '2420', y: '300' },
                trainPos: { x: '2405', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1041', pos: { x: 1760, y: 280 } },
                    { text: '1056', pos: { x: 1760, y: 300 } },
                    { text: '1019', pos: { x: 1880, y: 280 } },
                    { text: '1040', pos: { x: 1880, y: 300 } },
                    { text: '1001', pos: { x: 2000, y: 280 } },
                    { text: '1018', pos: { x: 2000, y: 300 } },
                    { text: '983', pos: { x: 2120, y: 280 } },
                    { text: '1000', pos: { x: 2120, y: 300 } },
                    { text: '967', pos: { x: 2240, y: 280 } },
                    { text: '982', pos: { x: 2240, y: 300 } },
                    { text: '953', pos: { x: 2360, y: 280 } },
                    { text: '968', pos: { x: 2360, y: 300 } },
                ]
            },
        ]
    },



    "OLSZAMOWICE_OPOCZNOPOLUDNIE_2-2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,450 TSTART LR10 SPR10 LR100',
                    'M10,470 TSTART LR10 SPR10 LR100'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_953',
                signalPos: { x: '30', y: '460' },
                trainPos: { x: '45', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_952N',
                signalPos: { x: '30', y: '480' },
                trainPos: { x: '45', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [

                    { text: '939', pos: { x: 90, y: 460 } },
                    { text: '952', pos: { x: 90, y: 480 } },
                ]
            },
        ]
    },
    "2993_OP_OPOCZNOPOLUDNIE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M150,460 LR90 SPR10 LR130 SPR10 LR90',
                    'M150,480 LR110 SPR10 LR120 SPR10 LR80',

                    'M170,460 SWDN20 LR20 SWUP20 LR10 SWUP20 LR25 SPR10 LR130 SPR10 LR15 SWDN20 LR20 SWDN20 LR20 SWUP20',
                    'M240,480 SWDN20 LR15 SPR10 LR100 SPR10 LR35 SWUP20'

                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'OP_T',
                signalPos: { x: '150', y: '460' },
                trainPos: { x: '135', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_W',
                signalPos: { x: '150', y: '480' },
                trainPos: { x: '135', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'OP_O',
                signalPos: { x: '240', y: '440' },
                trainPos: { x: '255', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_N',
                signalPos: { x: '240', y: '460' },
                trainPos: { x: '255', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_M',
                signalPos: { x: '260', y: '480' },
                trainPos: { x: '275', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_L',
                signalPos: { x: '260', y: '500' },
                trainPos: { x: '275', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'OP_E',
                signalPos: { x: '390', y: '440' },
                trainPos: { x: '375', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_F',
                signalPos: { x: '390', y: '460' },
                trainPos: { x: '375', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_G',
                signalPos: { x: '400', y: '480' },
                trainPos: { x: '385', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_H',
                signalPos: { x: '380', y: '500' },
                trainPos: { x: '365', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'OP_B',
                signalPos: { x: '480', y: '460' },
                trainPos: { x: '505', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'OP_A',
                signalPos: { x: '480', y: '480' },
                trainPos: { x: '505', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Opoczno Południe',
                    prefix: 'Op',
                    pos: { x: 325, y: 410 },
                    posFlipped: { x: 290, y: 535 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 395, y: 510 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 300, y: 505 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 315, y: 440 } },
                    { text: '1', pos: { x: 315, y: 460 } },
                    { text: '2', pos: { x: 330, y: 480 } },
                    { text: '4', pos: { x: 320, y: 500 } },
                ]
            },
        ]
    },
    "OPOCZNOPOLUDNIE_IDZIKOWICE_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M490,460 ABS100-20-6',
                    'M490,480 ABS100-20-6'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_901N',
                signalPos: { x: '600', y: '460' },
                trainPos: { x: '585', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_900',
                signalPos: { x: '600', y: '480' },
                trainPos: { x: '585', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_901',
                signalPos: { x: '600', y: '460' },
                trainPos: { x: '615', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_900N',
                signalPos: { x: '600', y: '480' },
                trainPos: { x: '615', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_885N',
                signalPos: { x: '720', y: '460' },
                trainPos: { x: '705', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_886',
                signalPos: { x: '720', y: '480' },
                trainPos: { x: '705', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_885',
                signalPos: { x: '720', y: '460' },
                trainPos: { x: '735', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_886N',
                signalPos: { x: '720', y: '480' },
                trainPos: { x: '735', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_869N',
                signalPos: { x: '840', y: '460' },
                trainPos: { x: '825', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_868',
                signalPos: { x: '840', y: '480' },
                trainPos: { x: '825', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_869',
                signalPos: { x: '840', y: '460' },
                trainPos: { x: '855', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_868N',
                signalPos: { x: '840', y: '480' },
                trainPos: { x: '855', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_855N',
                signalPos: { x: '960', y: '460' },
                trainPos: { x: '945', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_854',
                signalPos: { x: '960', y: '480' },
                trainPos: { x: '945', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_855',
                signalPos: { x: '960', y: '460' },
                trainPos: { x: '975', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_854N',
                signalPos: { x: '960', y: '480' },
                trainPos: { x: '975', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_839N',
                signalPos: { x: '1080', y: '460' },
                trainPos: { x: '1065', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_840',
                signalPos: { x: '1080', y: '480' },
                trainPos: { x: '1065', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_839',
                signalPos: { x: '1080', y: '460' },
                trainPos: { x: '1095', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_840N',
                signalPos: { x: '1080', y: '480' },
                trainPos: { x: '1095', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '901', pos: { x: 540, y: 460 } },
                    { text: '916', pos: { x: 540, y: 480 } },
                    { text: '885', pos: { x: 660, y: 460 } },
                    { text: '900', pos: { x: 660, y: 480 } },
                    { text: '869', pos: { x: 780, y: 460 } },
                    { text: '886', pos: { x: 780, y: 480 } },
                    { text: '855', pos: { x: 900, y: 460 } },
                    { text: '868', pos: { x: 900, y: 480 } },
                    { text: '839', pos: { x: 1020, y: 460 } },
                    { text: '854', pos: { x: 1020, y: 480 } },
                    { text: '827', pos: { x: 1140, y: 460 } },
                    { text: '840', pos: { x: 1140, y: 480 } },
                ]
            },
        ]
    },
    "1349_Id_IDZIKOWICE": { //^ Idzikowice
        "TRACKS": [
            {
                trackID: '1349_IDZIKOWICE',
                /*
                T1
                T2
                T4
                
                ?LEFT UPPER SWITCHES
                SW142/141ab
                SW126/125 + SW124/123ab
                SW123cd/121 + T7/9
                SW118/117ab + SW117cd + T5/3
                
                ?LEFT LOWER SWITCHES
                SW153/152
                SW145/143
                SW107/104 + T14
                SW103 + T12/10
                SW114/112ab + SW112cd/T8
                SWSW113/111ab + SW111cd/T6
                
                ?TRACKS
                
                ?RIGHT UPPER SWITCHES
                T9/7 TO SW57 TO SW54 + T5a/E
                T5 + SW54 + T3/SW52 + SW51
                
                ?RIGHT LOWER SWITCHES
                T14/12 + SW36 + SW22/21
                SW35cd/34
                T10/8 + SW37/33ab + T6/SW33ab + SW33cd/32ab + SW32cd/31
                SW20/19 + 18/16
                SW17/15 + SW12/9
                */
                trackSVG: `
                M1200,460 1340,460 M1350,460 1450,460 M1460,460 1640,460
                M1200,480 1340,480 M1350,480 1450,480 M1460,480 1640,480
                M1245,500 1340,500 M1350,500 1450,500 M1460,500 1640,500
                
                M1260,460 1262.5,455 1262.5,445 1265,440 1310,440
                M1270,480 1272.5,475 1272.5,465 1275,460 M1285,460 1287.5,455 1287.5,445 1290,440
                M1300,440 1302.5,435 1302.5,385 1305,380 1340,380 M1315,380 1317.5,375 1317.5,365 1320,360 1340,360
                M1305,460 1307.5,455 1307.5,445 1310,440 1340,440 M1320,440 1322.5,435 1322.5,425 1325,420 1340,420
                
                M1220,460 1222.5,465 1222.5,475 1225,480
                M1240,480 1242.5,485 1242.5,495 1245,500 1250,500
                M1280,500 1282.5,505 1282.5,575 1285,580 1295,580 1297.5,585 1297.5,615 1300,620 1340,620
                M1310,580 1312.5,585 1312.5,595 1315,600 1340,600 M1290,580 1340,580
                M1285,480 1287.5,485 1287.5,495 1290,500 M1300,500 1302.5,505 1302.5,555 1305,560 1340,560
                M1305,480 1307.5,485 1307.5,495 1310,500 M1320,500 1322.5,505 1322.5,515 1325,520 1340,520
                
                M1350,360 1450,360
                M1350,380 1450,380
                M1350,420 1450,420
                M1350,440 1450,440
                M1350,500 1450,500
                M1350,520 1450,520
                M1350,560 1450,560
                M1350,580 1450,580
                M1350,600 1450,600
                M1350,620 1450,620
                
                M1460,360 1470,360 1472.5,365 1472.5,375 1475,380 M1460,380 1485,380 1487.5,385 1487.5,415 1490,420 1640,420
                M1460,420 1500,420 1502.5,425 1502.5,435 1505,440 M1460,440 1515,440 1517.5,445 1517.5,455 1520,460
                
                M1460,620 1470,620 1472.5,615 1472.5,605 1475,600 M1460,600 1485,600 1525,600 1527.5,595 1527.5,525 1530,520 M1510,520 1540,520 1542.5,515 1542.5,505 1545,500
                M1480,600 1485,600 1487.5,595 1487.5,565 1490,560
                M1460,580 1470,580 1472.5,575 1472.5,565 1475,560 M1460,560 1500,560 1502.5,555 1502.5,525 1505,520 M1460,520 1515,520 1517.5,515 1517.5,505 1520,500 M1530,500 1532.5,495 1532.5,485 1535,480
                M1550,460 1552.5,465 1552.5,475 1555,480 1570,480 1572.5,485 1572.5,495 1575,500
                M1580,480 1582.5,475 1582.5,465 1585,460 M1595,460 1597.5,455 1597.5,445 1600,440 1620,440 1622.5,435 1622.5,425 1625,420`,
                trackColor: 'white'
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Id_W',
                signalPos: { x: '1200', y: '460' },
                trainPos: { x: '1185', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_Z',
                signalPos: { x: '1200', y: '480' },
                trainPos: { x: '1185', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Id_T9',
                signalPos: { x: '1340', y: '360' },
                trainPos: { x: '1355', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_T7',
                signalPos: { x: '1340', y: '380' },
                trainPos: { x: '1355', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_T5',
                signalPos: { x: '1340', y: '420' },
                trainPos: { x: '1355', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_S',
                signalPos: { x: '1340', y: '440' },
                trainPos: { x: '1355', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_R',
                signalPos: { x: '1340', y: '460' },
                trainPos: { x: '1355', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_P',
                signalPos: { x: '1340', y: '480' },
                trainPos: { x: '1355', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_O',
                signalPos: { x: '1340', y: '500' },
                trainPos: { x: '1355', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N6',
                signalPos: { x: '1340', y: '520' },
                trainPos: { x: '1355', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N8',
                signalPos: { x: '1340', y: '560' },
                trainPos: { x: '1355', y: '560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N10',
                signalPos: { x: '1340', y: '580' },
                trainPos: { x: '1355', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N12',
                signalPos: { x: '1340', y: '600' },
                trainPos: { x: '1355', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_N14',
                signalPos: { x: '1340', y: '620' },
                trainPos: { x: '1355', y: '620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Id_F9',
                signalPos: { x: '1460', y: '360' },
                trainPos: { x: '1445', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_F7',
                signalPos: { x: '1460', y: '380' },
                trainPos: { x: '1445', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_G',
                signalPos: { x: '1460', y: '420' },
                trainPos: { x: '1445', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_H',
                signalPos: { x: '1460', y: '440' },
                trainPos: { x: '1445', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_J',
                signalPos: { x: '1460', y: '460' },
                trainPos: { x: '1445', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_K',
                signalPos: { x: '1460', y: '480' },
                trainPos: { x: '1445', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_L',
                signalPos: { x: '1460', y: '500' },
                trainPos: { x: '1445', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M6',
                signalPos: { x: '1460', y: '520' },
                trainPos: { x: '1445', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M8',
                signalPos: { x: '1460', y: '560' },
                trainPos: { x: '1445', y: '560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M10',
                signalPos: { x: '1460', y: '580' },
                trainPos: { x: '1445', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M12',
                signalPos: { x: '1460', y: '600' },
                trainPos: { x: '1445', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_M14',
                signalPos: { x: '1460', y: '620' },
                trainPos: { x: '1445', y: '620' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Id_E',
                signalPos: { x: '1640', y: '420' },
                trainPos: { x: '1655', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_C',
                signalPos: { x: '1640', y: '460' },
                trainPos: { x: '1655', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_B',
                signalPos: { x: '1640', y: '480' },
                trainPos: { x: '1655', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Id_A',
                signalPos: { x: '1640', y: '500' },
                trainPos: { x: '1655', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Idzikowice',
                    prefix: 'Id',
                    pos: { x: 1570, y: 380 },
                    posFlipped: { x: 1400, y: 650 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1550, y: 550 },
                    rotation: 0,
                },
                platforms: [],
                trackLabels: [
                    { text: '9', pos: { x: 1400, y: 360 } },
                    { text: '7', pos: { x: 1400, y: 380 } },
                    { text: '5', pos: { x: 1400, y: 420 } },
                    { text: '3', pos: { x: 1400, y: 440 } },
                    { text: '1', pos: { x: 1400, y: 460 } },
                    { text: '2', pos: { x: 1400, y: 480 } },
                    { text: '4', pos: { x: 1400, y: 500 } },
                    { text: '6', pos: { x: 1400, y: 520 } },
                    { text: '8', pos: { x: 1400, y: 560 } },
                    { text: '10', pos: { x: 1400, y: 580 } },
                    { text: '12', pos: { x: 1400, y: 600 } },
                    { text: '14', pos: { x: 1400, y: 620 } },
                ]
            },
        ]
    },
    "IDZIKOWICE_RADZICE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1650,420 ABS100-20-3 SPR20 DOT5-5-10',
                    'M1650,500 ABS100-20-3 SPR20 DOT5-5-10',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L574_27',
                signalPos: { x: '1760', y: '420' },
                trainPos: { x: '1745', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L574_27N',
                signalPos: { x: '1760', y: '420' },
                trainPos: { x: '1775', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L573_21',
                signalPos: { x: '1760', y: '500' },
                trainPos: { x: '1745', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L573_21N',
                signalPos: { x: '1760', y: '500' },
                trainPos: { x: '1775', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L574_15N',
                signalPos: { x: '1880', y: '420' },
                trainPos: { x: '1865', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L574_15',
                signalPos: { x: '1880', y: '420' },
                trainPos: { x: '1895', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L573_33',
                signalPos: { x: '1880', y: '500' },
                trainPos: { x: '1865', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L573_33N',
                signalPos: { x: '1880', y: '500' },
                trainPos: { x: '1895', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'Rd1_K',
                signalPos: { x: '2000', y: '420' },
                trainPos: { x: '1985', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Rd_J',
                signalPos: { x: '2000', y: '420' },
                trainPos: { x: '2015', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: 'Rd_N',
                signalPos: { x: '2000', y: '500' },
                trainPos: { x: '1985', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Rd_A',
                signalPos: { x: '2000', y: '500' },
                trainPos: { x: '2015', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '27', pos: { x: 1700, y: 420 } },
                    { text: '07', pos: { x: 1700, y: 500 } },
                    { text: '13', pos: { x: 1820, y: 420 } },
                    { text: '21', pos: { x: 1820, y: 500 } },
                    { text: '05', pos: { x: 1940, y: 420 } },
                    { text: '33', pos: { x: 1940, y: 500 } },
                ]
            },
        ]
    },
    "IDZIKOWICE_STRZALKI_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1650,460 ABS100-20-7 SPR10 LR10 TEND',
                    'M1650,480 ABS100-20-7 SPR10 LR10 TEND',
                ]
            },
        ],
        "SIGNALS": [
            // Idzikowice <-> Strzalki [R6]
            {
                signalName: 'L4_785N',
                signalPos: { x: '1760', y: '460' },
                trainPos: { x: '1745', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_784',
                signalPos: { x: '1760', y: '480' },
                trainPos: { x: '1745', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_785',
                signalPos: { x: '1760', y: '460' },
                trainPos: { x: '1775', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_784N',
                signalPos: { x: '1760', y: '480' },
                trainPos: { x: '1775', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_765N',
                signalPos: { x: '1880', y: '460' },
                trainPos: { x: '1865', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_766',
                signalPos: { x: '1880', y: '480' },
                trainPos: { x: '1865', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_765',
                signalPos: { x: '1880', y: '460' },
                trainPos: { x: '1895', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_766N',
                signalPos: { x: '1880', y: '480' },
                trainPos: { x: '1895', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_751N',
                signalPos: { x: '2000', y: '460' },
                trainPos: { x: '1985', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_750',
                signalPos: { x: '2000', y: '480' },
                trainPos: { x: '1985', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_751',
                signalPos: { x: '2000', y: '460' },
                trainPos: { x: '2015', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_750N',
                signalPos: { x: '2000', y: '480' },
                trainPos: { x: '2015', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_731N',
                signalPos: { x: '2120', y: '460' },
                trainPos: { x: '2105', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_732',
                signalPos: { x: '2120', y: '480' },
                trainPos: { x: '2105', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_731',
                signalPos: { x: '2120', y: '460' },
                trainPos: { x: '2135', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_732N',
                signalPos: { x: '2120', y: '480' },
                trainPos: { x: '2135', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_711N',
                signalPos: { x: '2240', y: '460' },
                trainPos: { x: '2225', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_712',
                signalPos: { x: '2240', y: '480' },
                trainPos: { x: '2225', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_711',
                signalPos: { x: '2240', y: '460' },
                trainPos: { x: '2255', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_712N',
                signalPos: { x: '2240', y: '480' },
                trainPos: { x: '2255', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_691N',
                signalPos: { x: '2360', y: '460' },
                trainPos: { x: '2345', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_692',
                signalPos: { x: '2360', y: '480' },
                trainPos: { x: '2345', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_691',
                signalPos: { x: '2360', y: '460' },
                trainPos: { x: '2375', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_692N',
                signalPos: { x: '2360', y: '480' },
                trainPos: { x: '2375', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_667N',
                signalPos: { x: '2480', y: '460' },
                trainPos: { x: '2465', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_668',
                signalPos: { x: '2480', y: '480' },
                trainPos: { x: '2465', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '785', pos: { x: 1700, y: 460 } },
                    { text: '798', pos: { x: 1700, y: 480 } },
                    { text: '765', pos: { x: 1820, y: 460 } },
                    { text: '784', pos: { x: 1820, y: 480 } },
                    { text: '751', pos: { x: 1940, y: 460 } },
                    { text: '766', pos: { x: 1940, y: 480 } },
                    { text: '731', pos: { x: 2060, y: 460 } },
                    { text: '750', pos: { x: 2060, y: 480 } },
                    { text: '711', pos: { x: 2180, y: 460 } },
                    { text: '732', pos: { x: 2180, y: 480 } },
                    { text: '691', pos: { x: 2300, y: 460 } },
                    { text: '712', pos: { x: 2300, y: 480 } },
                    { text: '667', pos: { x: 2420, y: 460 } },
                    { text: '692', pos: { x: 2420, y: 480 } },
                ]
            },
        ]
    },




    "IDZIKOWICE_STRZALKI_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,570 TSTART LR10 SPR10 ABS100-20-5',
                    'M10,590 TSTART LR10 SPR10 ABS100-20-5',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_667',
                signalPos: { x: '30', y: '580' },
                trainPos: { x: '45', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_668N',
                signalPos: { x: '30', y: '600' },
                trainPos: { x: '45', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_653N',
                signalPos: { x: '150', y: '580' },
                trainPos: { x: '135', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_654',
                signalPos: { x: '150', y: '600' },
                trainPos: { x: '135', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_653',
                signalPos: { x: '150', y: '580' },
                trainPos: { x: '165', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_654N',
                signalPos: { x: '150', y: '600' },
                trainPos: { x: '165', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_633N',
                signalPos: { x: '270', y: '580' },
                trainPos: { x: '255', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_634',
                signalPos: { x: '270', y: '600' },
                trainPos: { x: '255', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_633',
                signalPos: { x: '270', y: '580' },
                trainPos: { x: '285', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_634N',
                signalPos: { x: '270', y: '600' },
                trainPos: { x: '285', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_611N',
                signalPos: { x: '390', y: '580' },
                trainPos: { x: '375', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_610',
                signalPos: { x: '390', y: '600' },
                trainPos: { x: '375', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_611',
                signalPos: { x: '390', y: '580' },
                trainPos: { x: '405', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_610N',
                signalPos: { x: '390', y: '600' },
                trainPos: { x: '405', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_595N',
                signalPos: { x: '510', y: '580' },
                trainPos: { x: '495', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_596',
                signalPos: { x: '510', y: '600' },
                trainPos: { x: '495', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_595',
                signalPos: { x: '510', y: '580' },
                trainPos: { x: '525', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_596N',
                signalPos: { x: '510', y: '600' },
                trainPos: { x: '525', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '653', pos: { x: 90, y: 580 } },
                    { text: '668', pos: { x: 90, y: 600 } },
                    { text: '633', pos: { x: 210, y: 580 } },
                    { text: '654', pos: { x: 210, y: 600 } },
                    { text: '611', pos: { x: 330, y: 580 } },
                    { text: '634', pos: { x: 330, y: 600 } },
                    { text: '595', pos: { x: 450, y: 580 } },
                    { text: '610', pos: { x: 450, y: 600 } },
                    { text: '581', pos: { x: 570, y: 580 } },
                    { text: '596', pos: { x: 570, y: 600 } },
                ]
            },
        ]
    },
    "4147_St_STRZALKI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M630,580 LR70 SPR10 LR110 SPR10 LR60',
                    'M630,600 LR80 SPR10 LR100 SPR10 LR60',

                    'M665,580 SWUP20 LR10 SPR10 LR130 SPR10 LR10 SWDN20 LR10 SWDN20 LR10 SWUP20',
                    'M650,600 SWUP20 LR20 SWDN20 LR10 SWDN20 LR15 SPR10 LR100 SPR10 LR10 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'St_W',
                signalPos: { x: '630', y: '580' },
                trainPos: { x: '615', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_Z',
                signalPos: { x: '630', y: '600' },
                trainPos: { x: '615', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'St_P',
                signalPos: { x: '680', y: '560' },
                trainPos: { x: '695', y: '560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_O',
                signalPos: { x: '700', y: '580' },
                trainPos: { x: '715', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_N',
                signalPos: { x: '710', y: '600' },
                trainPos: { x: '725', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_M',
                signalPos: { x: '710', y: '620' },
                trainPos: { x: '725', y: '620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'St_F',
                signalPos: { x: '830', y: '560' },
                trainPos: { x: '815', y: '560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_G',
                signalPos: { x: '830', y: '580' },
                trainPos: { x: '815', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_H',
                signalPos: { x: '830', y: '600' },
                trainPos: { x: '815', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_J',
                signalPos: { x: '830', y: '620' },
                trainPos: { x: '815', y: '620' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'St_B',
                signalPos: { x: '890', y: '580' },
                trainPos: { x: '905', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'St_A',
                signalPos: { x: '890', y: '600' },
                trainPos: { x: '905', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Strzałki',
                    prefix: 'St',
                    pos: { x: 770, y: 530 },
                    posFlipped: { x: 770, y: 650 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 650, y: 610 },
                    rotation: 0,
                },
                platforms: [],
                trackLabels: [
                    { text: '3', pos: { x: 755, y: 560 } },
                    { text: '1', pos: { x: 765, y: 580 } },
                    { text: '2', pos: { x: 770, y: 600 } },
                    { text: '4', pos: { x: 770, y: 620 } },
                ]
            },
        ]

    },
    "STRZALKI_SZELIGI_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M900,580 ABS100-20-3 SPR10 LR10 TEND',
                    'M900,600 ABS100-20-3 SPR10 LR10 TEND'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_543N',
                signalPos: { x: '1010', y: '580' },
                trainPos: { x: '995', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_544',
                signalPos: { x: '1010', y: '600' },
                trainPos: { x: '995', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_543',
                signalPos: { x: '1010', y: '580' },
                trainPos: { x: '1025', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_544N',
                signalPos: { x: '1010', y: '600' },
                trainPos: { x: '1025', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_529N',
                signalPos: { x: '1130', y: '580' },
                trainPos: { x: '1115', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_530',
                signalPos: { x: '1130', y: '600' },
                trainPos: { x: '1115', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_529',
                signalPos: { x: '1130', y: '580' },
                trainPos: { x: '1145', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_530N',
                signalPos: { x: '1130', y: '600' },
                trainPos: { x: '1145', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_515N',
                signalPos: { x: '1250', y: '580' },
                trainPos: { x: '1235', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_516',
                signalPos: { x: '1250', y: '600' },
                trainPos: { x: '1235', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '543', pos: { x: 950, y: 580 } },
                    { text: '556', pos: { x: 950, y: 600 } },
                    { text: '529', pos: { x: 1070, y: 580 } },
                    { text: '544', pos: { x: 1070, y: 600 } },
                    { text: '515', pos: { x: 1190, y: 580 } },
                    { text: '530', pos: { x: 1190, y: 600 } },
                ]
            },
        ]
    },



    "STRZALKI_SZELIGI_2-1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,690 TSTART LR10 SPR10 ABS100-20-6',
                    'M10,710 TSTART LR10 SPR10 ABS100-20-6',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_515',
                signalPos: { x: '30', y: '700' },
                trainPos: { x: '45', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_516N',
                signalPos: { x: '30', y: '720' },
                trainPos: { x: '45', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_499N',
                signalPos: { x: '150', y: '700' },
                trainPos: { x: '135', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_500',
                signalPos: { x: '150', y: '720' },
                trainPos: { x: '135', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_499',
                signalPos: { x: '150', y: '700' },
                trainPos: { x: '165', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_500N',
                signalPos: { x: '150', y: '720' },
                trainPos: { x: '165', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_477N',
                signalPos: { x: '270', y: '700' },
                trainPos: { x: '255', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_476',
                signalPos: { x: '270', y: '720' },
                trainPos: { x: '255', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_477',
                signalPos: { x: '270', y: '700' },
                trainPos: { x: '285', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_476N',
                signalPos: { x: '270', y: '720' },
                trainPos: { x: '285', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_455N',
                signalPos: { x: '390', y: '700' },
                trainPos: { x: '375', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_456',
                signalPos: { x: '390', y: '720' },
                trainPos: { x: '375', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_455',
                signalPos: { x: '390', y: '700' },
                trainPos: { x: '405', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_456N',
                signalPos: { x: '390', y: '720' },
                trainPos: { x: '405', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_439N',
                signalPos: { x: '510', y: '700' },
                trainPos: { x: '495', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_438',
                signalPos: { x: '510', y: '720' },
                trainPos: { x: '495', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_439',
                signalPos: { x: '510', y: '700' },
                trainPos: { x: '525', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_438N',
                signalPos: { x: '510', y: '720' },
                trainPos: { x: '525', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_421N',
                signalPos: { x: '630', y: '700' },
                trainPos: { x: '615', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_422',
                signalPos: { x: '630', y: '720' },
                trainPos: { x: '615', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_421',
                signalPos: { x: '630', y: '700' },
                trainPos: { x: '645', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_422N',
                signalPos: { x: '630', y: '720' },
                trainPos: { x: '645', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '499', pos: { x: 90, y: 700 } },
                    { text: '516', pos: { x: 90, y: 720 } },
                    { text: '477', pos: { x: 210, y: 700 } },
                    { text: '500', pos: { x: 210, y: 720 } },
                    { text: '455', pos: { x: 330, y: 700 } },
                    { text: '476', pos: { x: 330, y: 720 } },
                    { text: '439', pos: { x: 450, y: 700 } },
                    { text: '456', pos: { x: 450, y: 720 } },
                    { text: '421', pos: { x: 570, y: 700 } },
                    { text: '438', pos: { x: 570, y: 720 } },
                    { text: '407', pos: { x: 690, y: 700 } },
                    { text: '422', pos: { x: 690, y: 720 } },
                ]
            },
        ]
    },
    "139_BR_BIALARAWSKA": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M750,700 LR70',
                    'M750,720 LR70',
                    'M770,720 SWUP20 LR20 SWDN20'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'BR_C',
                signalPos: { x: '750', y: '700' },
                trainPos: { x: '735', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'BR_D',
                signalPos: { x: '750', y: '720' },
                trainPos: { x: '735', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'BR_B',
                signalPos: { x: '820', y: '700' },
                trainPos: { x: '835', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'BR_A',
                signalPos: { x: '820', y: '720' },
                trainPos: { x: '835', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Biała Rawska',
                    prefix: 'BR',
                    lcsControlledBy: 'Strzałki',
                    pos: { x: 785, y: 665 },
                    posFlipped: { x: 785, y: 755 }
                },
            },
        ]
    },
    "STRZALKI_SZELIGI_2-2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M830,700 ABS100-20-9',
                    'M830,720 ABS100-20-9',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_383N',
                signalPos: { x: '940', y: '700' },
                trainPos: { x: '925', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_384',
                signalPos: { x: '940', y: '720' },
                trainPos: { x: '925', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_383',
                signalPos: { x: '940', y: '700' },
                trainPos: { x: '955', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_384N',
                signalPos: { x: '940', y: '720' },
                trainPos: { x: '955', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_361N',
                signalPos: { x: '1060', y: '700' },
                trainPos: { x: '1045', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_360',
                signalPos: { x: '1060', y: '720' },
                trainPos: { x: '1045', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_361',
                signalPos: { x: '1060', y: '700' },
                trainPos: { x: '1075', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_360N',
                signalPos: { x: '1060', y: '720' },
                trainPos: { x: '1075', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_345N',
                signalPos: { x: '1180', y: '700' },
                trainPos: { x: '1165', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_346',
                signalPos: { x: '1180', y: '720' },
                trainPos: { x: '1165', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_345',
                signalPos: { x: '1180', y: '700' },
                trainPos: { x: '1195', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_346N',
                signalPos: { x: '1180', y: '720' },
                trainPos: { x: '1195', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_331N',
                signalPos: { x: '1300', y: '700' },
                trainPos: { x: '1285', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_332',
                signalPos: { x: '1300', y: '720' },
                trainPos: { x: '1285', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_331',
                signalPos: { x: '1300', y: '700' },
                trainPos: { x: '1315', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_332N',
                signalPos: { x: '1300', y: '720' },
                trainPos: { x: '1315', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_307N',
                signalPos: { x: '1420', y: '700' },
                trainPos: { x: '1405', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_308',
                signalPos: { x: '1420', y: '720' },
                trainPos: { x: '1405', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_307',
                signalPos: { x: '1420', y: '700' },
                trainPos: { x: '1435', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_308N',
                signalPos: { x: '1420', y: '720' },
                trainPos: { x: '1435', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_291N',
                signalPos: { x: '1540', y: '700' },
                trainPos: { x: '1525', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_292',
                signalPos: { x: '1540', y: '720' },
                trainPos: { x: '1525', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_291',
                signalPos: { x: '1540', y: '700' },
                trainPos: { x: '1555', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_292N',
                signalPos: { x: '1540', y: '720' },
                trainPos: { x: '1555', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_277N',
                signalPos: { x: '1660', y: '700' },
                trainPos: { x: '1645', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_276',
                signalPos: { x: '1660', y: '720' },
                trainPos: { x: '1645', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_277',
                signalPos: { x: '1660', y: '700' },
                trainPos: { x: '1675', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_276N',
                signalPos: { x: '1660', y: '720' },
                trainPos: { x: '1675', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_261N',
                signalPos: { x: '1780', y: '700' },
                trainPos: { x: '1765', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_262',
                signalPos: { x: '1780', y: '720' },
                trainPos: { x: '1765', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_261',
                signalPos: { x: '1780', y: '700' },
                trainPos: { x: '1795', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_262N',
                signalPos: { x: '1780', y: '720' },
                trainPos: { x: '1795', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '383', pos: { x: 880, y: 700 } },
                    { text: '398', pos: { x: 880, y: 720 } },
                    { text: '361', pos: { x: 1000, y: 700 } },
                    { text: '384', pos: { x: 1000, y: 720 } },
                    { text: '345', pos: { x: 1120, y: 700 } },
                    { text: '360', pos: { x: 1120, y: 720 } },
                    { text: '331', pos: { x: 1240, y: 700 } },
                    { text: '346', pos: { x: 1240, y: 720 } },
                    { text: '307', pos: { x: 1360, y: 700 } },
                    { text: '332', pos: { x: 1360, y: 720 } },
                    { text: '291', pos: { x: 1480, y: 700 } },
                    { text: '308', pos: { x: 1480, y: 720 } },
                    { text: '277', pos: { x: 1600, y: 700 } },
                    { text: '292', pos: { x: 1600, y: 720 } },
                    { text: '261', pos: { x: 1720, y: 700 } },
                    { text: '276', pos: { x: 1720, y: 720 } },
                    { text: '243', pos: { x: 1840, y: 700 } },
                    { text: '262', pos: { x: 1840, y: 720 } },
                ]
            },
        ]
    },
    "4338_Sz_SZELIGI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //& T1
                    'M1900,700 LR80 SPR10 LR120 SPR10 LR90',
                    //& T2
                    'M1900,720 LR80 SPR10 LR120 SPR10 LR90',

                    //? left tub
                    'M1920,700 SWDN20 LR20 SWUP20',

                    //^ T1
                    'M1960,700 SWUP20 LR15 SPR10 LR120 SPR10 LR15 SWDN20 LR10 SWDN20 LR20 SWUP20',
                    //^ T4 - TOR 1M
                    'M1960,720 SWDN20 LR25 SPR10 LR100 SPR10 LR100',
                    //^ T6
                    'M1975,740 SWDN20 LR10 SPR10 LR100 SPR10 LR10 SWUP20 LR10 SWUP20 LR50 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Se_W',
                signalPos: { x: '1900', y: '700' },
                trainPos: { x: '1885', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_Z',
                signalPos: { x: '1900', y: '720' },
                trainPos: { x: '1885', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Se_S',
                signalPos: { x: '1980', y: '680' },
                trainPos: { x: '1995', y: '680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_R',
                signalPos: { x: '1980', y: '700' },
                trainPos: { x: '1995', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_P',
                signalPos: { x: '1980', y: '720' },
                trainPos: { x: '1995', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_O',
                signalPos: { x: '1990', y: '740' },
                trainPos: { x: '2005', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_N',
                signalPos: { x: '1990', y: '760' },
                trainPos: { x: '2005', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Se_F',
                signalPos: { x: '2120', y: '680' },
                trainPos: { x: '2105', y: '680' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_G',
                signalPos: { x: '2120', y: '700' },
                trainPos: { x: '2105', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_H',
                signalPos: { x: '2120', y: '720' },
                trainPos: { x: '2105', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_J',
                signalPos: { x: '2110', y: '740' },
                trainPos: { x: '2095', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_K',
                signalPos: { x: '2110', y: '760' },
                trainPos: { x: '2095', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Se_C',
                signalPos: { x: '2210', y: '700' },
                trainPos: { x: '2225', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_B',
                signalPos: { x: '2210', y: '720' },
                trainPos: { x: '2225', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Se_A',
                signalPos: { x: '2210', y: '740' },
                trainPos: { x: '2225', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Szeligi',
                    prefix: 'Se',
                    pos: { x: 2050, y: 650 },
                    posFlipped: { x: 2050, y: 790 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1930, y: 750 },
                    rotation: 0,
                },
                trackLabels: [
                    { text: '3', pos: { x: 2050, y: 680 } },
                    { text: '1', pos: { x: 2050, y: 700 } },
                    { text: '2', pos: { x: 2050, y: 720 } },
                    { text: '4', pos: { x: 2050, y: 740 } },
                    { text: '6', pos: { x: 2050, y: 760 } },
                ]
            },
        ]
    },
    "SZELIGI_MARKOW": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2220,740 ABS100-20-2 SPR20 LR65 SPR5 DOT5-5-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L575_25',
                signalPos: { x: '2330', y: '740' },
                trainPos: { x: '2315', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L575_25N',
                signalPos: { x: '2330', y: '740' },
                trainPos: { x: '2345', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'Mr_C',
                signalPos: { x: '2450', y: '740' },
                trainPos: { x: '2435', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Mr_E',
                signalPos: { x: '2450', y: '740' },
                trainPos: { x: '2465', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '01', pos: { x: 2270, y: 740 } },
                    { text: '15', pos: { x: 2390, y: 740 } },
                ]
            },
        ]
    },
    "SZELIGI_KORYTOW_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2220,700 ABS100-20-2 SPR10 LR10 TEND',
                    'M2220,720 ABS100-20-2 SPR10 LR10 TEND'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_197N',
                signalPos: { x: '2330', y: '700' },
                trainPos: { x: '2315', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_198',
                signalPos: { x: '2330', y: '720' },
                trainPos: { x: '2315', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_197',
                signalPos: { x: '2330', y: '700' },
                trainPos: { x: '2345', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_198N',
                signalPos: { x: '2330', y: '720' },
                trainPos: { x: '2345', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_185N',
                signalPos: { x: '2450', y: '700' },
                trainPos: { x: '2435', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_184',
                signalPos: { x: '2450', y: '720' },
                trainPos: { x: '2435', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '197', pos: { x: 2270, y: 700 } },
                    { text: '214', pos: { x: 2270, y: 720 } },
                    { text: '185', pos: { x: 2390, y: 700 } },
                    { text: '198', pos: { x: 2390, y: 720 } },
                ]
            },
        ]
    },



    "SZELIGI_KORYTOW_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M110,830 TSTART LR10 SPR10 ABS100-20-2',
                    'M110,850 TSTART LR10 SPR10 ABS100-20-2'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_185',
                signalPos: { x: '130', y: '840' },
                trainPos: { x: '145', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_184N',
                signalPos: { x: '130', y: '860' },
                trainPos: { x: '145', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L4_167N',
                signalPos: { x: '250', y: '840' },
                trainPos: { x: '235', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_168',
                signalPos: { x: '250', y: '860' },
                trainPos: { x: '235', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_167',
                signalPos: { x: '250', y: '840' },
                trainPos: { x: '265', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_168N',
                signalPos: { x: '250', y: '860' },
                trainPos: { x: '265', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '167', pos: { x: 190, y: 840 } },
                    { text: '184', pos: { x: 190, y: 860 } },
                    { text: '155', pos: { x: 310, y: 840 } },
                    { text: '168', pos: { x: 310, y: 860 } },
                ]
            },
        ]
    },
    "1852_Kr_KORYTOW": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M370,840 LR70 SPR10 LR100 SPR10 LR80',
                    'M370,860 LR70 SPR10 LR100 SPR10 LR80',

                    'M390,860 SWUP20 LR20 SWUP20 LR20 SPR10 LR100 SPR10 LR15 SWDN20',
                    'M415,860 SWDN20 LR20 SPR10 LR100 SPR10 LR15 SWUP20 LR10 SWUP20 LR20 SWDN20'
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Kr_W',
                signalPos: { x: '370', y: '840' },
                trainPos: { x: '355', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_Z',
                signalPos: { x: '370', y: '860' },
                trainPos: { x: '355', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Kr_S',
                signalPos: { x: '440', y: '820' },
                trainPos: { x: '455', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_R',
                signalPos: { x: '440', y: '840' },
                trainPos: { x: '455', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_P',
                signalPos: { x: '440', y: '860' },
                trainPos: { x: '455', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_O',
                signalPos: { x: '440', y: '880' },
                trainPos: { x: '455', y: '880' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Kr_F',
                signalPos: { x: '560', y: '820' },
                trainPos: { x: '545', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_G',
                signalPos: { x: '560', y: '840' },
                trainPos: { x: '545', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_H',
                signalPos: { x: '560', y: '860' },
                trainPos: { x: '545', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kr_J',
                signalPos: { x: '560', y: '880' },
                trainPos: { x: '545', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Kr_C',
                signalPos: { x: '640', y: '840' },
                trainPos: { x: '655', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'Kr_B',
                signalPos: { x: '640', y: '860' },
                trainPos: { x: '655', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Korytów',
                    prefix: 'Kr',
                    pos: { x: 500, y: 790 },
                    posFlipped: { x: 500, y: 910 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 375, y: 870 },
                    rotation: 0,
                },
                trackLabels: [
                    { text: '3', pos: { x: 500, y: 820 } },
                    { text: '1', pos: { x: 500, y: 840 } },
                    { text: '2', pos: { x: 500, y: 860 } },
                    { text: '4', pos: { x: 500, y: 880 } },
                ]
            },
        ]
    },
    "5431_Zy_ZYRARDOW": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,960 DOT5-5-3 SPR5 LR70',
                    'M10,980 DOT5-5-3 SPR5 LR70'
                ]
            },
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                isNPT: true,
                commands: [

                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ T1
                    'M120,960 LR60 SPR10 LR200 SPR10 LR80',
                    //~ T2
                    'M120,980 LR80 SPR10 LR180 SPR10 LR80',

                    //^ SW22/21 - T3 - SW9/6
                    'M270,960 SWUP25 LR5 SPR10 LR100 SPR10 LR25 SWDN25 LR10 SWDN20 LR10 SWUP20',
                    //^ SW34/32 - T4 - SW7/4
                    'M185,980 SWDN20 LR30 SPR10 LR160 SPR10 LR25 SWUP20',
                    //^ SW31 - SW23 - T8 - SW8
                    'M205,1000 SWDN40 LR45 SWUP20 LR10 SPR10 LR110 SPR10 LR10 SWUP20',

                    //? 40/39 - 35/33
                    'M140,960 SWDN20 LR20 SWUP20',

                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_451',
                invisibleSignal: true,
                signalPos: { x: '0', y: '960' },
                trainPos: { x: '15', y: '960' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_452N',
                invisibleSignal: true,
                signalPos: { x: '0', y: '980' },
                trainPos: { x: '15', y: '980' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '5431_Zy_G',
                signalPos: { x: '120', y: '960' },
                trainPos: { x: '105', y: '960' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_H',
                signalPos: { x: '120', y: '980' },
                trainPos: { x: '105', y: '980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '5431_Zy_E3',
                signalPos: { x: '280', y: '935' },
                trainPos: { x: '295', y: '935' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F1',
                signalPos: { x: '180', y: '960' },
                trainPos: { x: '195', y: '960' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F2',
                signalPos: { x: '200', y: '980' },
                trainPos: { x: '230', y: '980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F4',
                signalPos: { x: '220', y: '1000' },
                trainPos: { x: '235', y: '1000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_F8',
                signalPos: { x: '270', y: '1020' },
                trainPos: { x: '290', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '5431_Zy_D3',
                signalPos: { x: '400', y: '935' },
                trainPos: { x: '385', y: '935' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D1',
                signalPos: { x: '400', y: '960' },
                trainPos: { x: '385', y: '960' },
                // trainPosDistance: [
                //     { distanceToSignal: 0, x: 280, y: 960 }
                // ],
                // trainAnchor: left
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D2',
                signalPos: { x: '400', y: '980' },
                trainPos: { x: '385', y: '980' },
                // trainPosDistance: [
                //     { distanceToSignal: 0, x: 305, y: 980 }
                // ],
                // trainAnchor: left
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D4',
                signalPos: { x: '400', y: '1000' },
                trainPos: { x: '385', y: '1000' },
                // trainPosDistance: [
                //     { distanceToSignal: 0, x: 335, y: 1000 }
                // ],
                // trainAnchor: left
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '5431_Zy_D8',
                signalPos: { x: '400', y: '1020' },
                trainPos: { x: '385', y: '1020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '5431_Zy_B',
                signalPos: { x: '480', y: '960' },
                trainPos: { x: '495', y: '960' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '5431_Zy_A',
                signalPos: { x: '480', y: '980' },
                trainPos: { x: '495', y: '980' },
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
                    pos: { x: 295, y: 910 },
                    posFlipped: { x: 330, y: 1060 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 190, y: 1050 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 75, height: 10, pos: { x: 192, y: 945 } },
                    { label: 'Peron II', width: 75, height: 10, pos: { x: 232, y: 985 } },
                ],
                trackLabels: [
                    { text: '1a', pos: { x: 230, y: 960 } },
                    { text: '10a', pos: { x: 227.5, y: 1040 } },
                    { text: '3', pos: { x: 340, y: 935 } },
                    { text: '1', pos: { x: 340, y: 960 } },
                    { text: '2', pos: { x: 300, y: 980 } },
                    { text: '4', pos: { x: 310, y: 1000 } },
                    { text: '8', pos: { x: 340, y: 1020 } },
                ]
            }
        ]
    },
    "KORYTOW_GRODZISKMAZOWIECKI": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M650,840 ABS100-20-6',
                    'M650,860 ABS100-20-6'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_109N',
                signalPos: { x: '760', y: '840' },
                trainPos: { x: '745', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_108',
                signalPos: { x: '760', y: '860' },
                trainPos: { x: '745', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_109',
                signalPos: { x: '760', y: '840' },
                trainPos: { x: '775', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_108N',
                signalPos: { x: '760', y: '860' },
                trainPos: { x: '775', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_91N',
                signalPos: { x: '880', y: '840' },
                trainPos: { x: '865', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_90',
                signalPos: { x: '880', y: '860' },
                trainPos: { x: '865', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_91',
                signalPos: { x: '880', y: '840' },
                trainPos: { x: '895', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_90N',
                signalPos: { x: '880', y: '860' },
                trainPos: { x: '895', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_73N',
                signalPos: { x: '1000', y: '840' },
                trainPos: { x: '985', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_74',
                signalPos: { x: '1000', y: '860' },
                trainPos: { x: '985', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_73',
                signalPos: { x: '1000', y: '840' },
                trainPos: { x: '1015', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_74N',
                signalPos: { x: '1000', y: '860' },
                trainPos: { x: '1015', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_51N',
                signalPos: { x: '1120', y: '840' },
                trainPos: { x: '1105', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_50',
                signalPos: { x: '1120', y: '860' },
                trainPos: { x: '1105', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_51',
                signalPos: { x: '1120', y: '840' },
                trainPos: { x: '1135', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_50N',
                signalPos: { x: '1120', y: '860' },
                trainPos: { x: '1135', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_31N',
                signalPos: { x: '1240', y: '840' },
                trainPos: { x: '1225', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_32',
                signalPos: { x: '1240', y: '860' },
                trainPos: { x: '1225', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_31',
                signalPos: { x: '1240', y: '840' },
                trainPos: { x: '1255', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_32N',
                signalPos: { x: '1240', y: '860' },
                trainPos: { x: '1255', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '109', pos: { x: 700, y: 840 } },
                    { text: '122', pos: { x: 700, y: 860 } },
                    { text: '91', pos: { x: 820, y: 840 } },
                    { text: '108', pos: { x: 820, y: 860 } },
                    { text: '73', pos: { x: 940, y: 840 } },
                    { text: '90', pos: { x: 940, y: 860 } },
                    { text: '51', pos: { x: 1060, y: 840 } },
                    { text: '74', pos: { x: 1060, y: 860 } },
                    { text: '31', pos: { x: 1180, y: 840 } },
                    { text: '50', pos: { x: 1180, y: 860 } },
                    { text: '17', pos: { x: 1300, y: 840 } },
                    { text: '32', pos: { x: 1300, y: 860 } },
                ]
            },
        ]
    },
    "ZYRARDOW_GRODZISKMAZOWIECKI": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M490,960 ABS100-20-4 SPR10 LR7.5 SWUP40 LR17.5 SPR10 LR110 SPR20 ABS100-20-2',
                    'M490,980 ABS100-20-3 SPR20 LR110 SPR10 LR17.5 SWUP40 LR7.5 SPR10 ABS100-20-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_397N',
                signalPos: { x: '600', y: '960' },
                trainPos: { x: '585', y: '960' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_398',
                signalPos: { x: '600', y: '980' },
                trainPos: { x: '585', y: '980' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_397',
                signalPos: { x: '600', y: '960' },
                trainPos: { x: '615', y: '960' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_398N',
                signalPos: { x: '600', y: '980' },
                trainPos: { x: '615', y: '980' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_383N',
                signalPos: { x: '720', y: '960' },
                trainPos: { x: '705', y: '960' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_382',
                signalPos: { x: '720', y: '980' },
                trainPos: { x: '705', y: '980' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_383',
                signalPos: { x: '720', y: '960' },
                trainPos: { x: '735', y: '960' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_382N',
                signalPos: { x: '720', y: '980' },
                trainPos: { x: '735', y: '980' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_367N',
                signalPos: { x: '840', y: '960' },
                trainPos: { x: '825', y: '960' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_368',
                signalPos: { x: '840', y: '980' },
                trainPos: { x: '825', y: '980' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_367',
                signalPos: { x: '840', y: '960' },
                trainPos: { x: '855', y: '960' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_368N',
                signalPos: { x: '840', y: '980' },
                trainPos: { x: '855', y: '980' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_355N',
                signalPos: { x: '960', y: '960' },
                trainPos: { x: '945', y: '960' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_354',
                signalPos: { x: '970', y: '980' },
                trainPos: { x: '955', y: '980' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_355',
                signalPos: { x: '990', y: '920' },
                trainPos: { x: '1005', y: '920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_354N',
                signalPos: { x: '1000', y: '940' },
                trainPos: { x: '1015', y: '940' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_341N',
                signalPos: { x: '1120', y: '920' },
                trainPos: { x: '1105', y: '920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_340',
                signalPos: { x: '1120', y: '940' },
                trainPos: { x: '1105', y: '940' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_341',
                signalPos: { x: '1120', y: '920' },
                trainPos: { x: '1135', y: '920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_340N',
                signalPos: { x: '1120', y: '940' },
                trainPos: { x: '1135', y: '940' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            //
            {
                signalName: 'L1_327N',
                signalPos: { x: '1240', y: '920' },
                trainPos: { x: '1225', y: '920' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_328',
                signalPos: { x: '1240', y: '940' },
                trainPos: { x: '1225', y: '940' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L1_327',
                signalPos: { x: '1240', y: '920' },
                trainPos: { x: '1255', y: '920' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L1_328N',
                signalPos: { x: '1240', y: '940' },
                trainPos: { x: '1255', y: '940' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '397', pos: { x: 540, y: 960 } },
                    { text: '412', pos: { x: 540, y: 980 } },

                    { text: '383', pos: { x: 660, y: 960 } },
                    { text: '398', pos: { x: 660, y: 980 } },

                    { text: '367', pos: { x: 780, y: 960 } },
                    { text: '382', pos: { x: 780, y: 980 } },

                    { text: '355', pos: { x: 900, y: 960 } },
                    { text: '368', pos: { x: 905, y: 980 } },

                    { text: '341', pos: { x: 1055, y: 920 } },
                    { text: '354', pos: { x: 1060, y: 940 } },

                    { text: '327', pos: { x: 1180, y: 920 } },
                    { text: '340', pos: { x: 1180, y: 940 } },

                    { text: '315', pos: { x: 1300, y: 920 } },
                    { text: '328', pos: { x: 1300, y: 940 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Międzyborów',
                    pos: { x: 540, y: 930 },
                    posFlipped: { x: 540, y: 1010 },
                    platforms: [
                        { pos: { x: 515, y: 947.5 }, width: 50, height: 7.5 },
                        { pos: { x: 515, y: 985 }, width: 50, height: 7.5 },
                    ]
                },
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Jaktorów',
                    pos: { x: 1057.5, y: 895 },
                    posFlipped: { x: 1057.5, y: 970 },
                    platforms: [
                        { pos: { x: 1030, y: 907.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1035, y: 945 }, width: 50, height: 7.5 },
                    ]
                },
            }
        ]
    },
    "1251_GM_GRODZISKMAZOWIECKI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //& TOR 1K - T1 - TOR1P
                    'M1370,840 LR250 SPR10 LR140 SPR10 LR130',
                    //& TOR 2K - T2 - TOR2P
                    'M1370,860 LR250 SPR10 LR140 SPR10 LR130',

                    //& TOR 1Z - T3c - T3 - T3a - TOR 3P
                    'M1370,920 LR110 SPR10 LR100 SPR10 LR40 SPR10 LR100 SPR10 LR100 SPR10 LR40',
                    //& TOR 2Z - T4b - T4 - T4a - TOR 4P
                    'M1370,940 LR110 SPR10 LR10 SWDN40 LR95 SPR10 LR20 SWUP40 LR5 SPR10 LR100 SPR10 LR110 SPR10 LR30',


                    //^ SW53/51 - SW43/36 - T11
                    'M1565,860 SWUP20 LR30 SWUP20 LR15 SPR10 LR140 SPR10 LR10 SWDN20',
                    //^ SW 42/38 - T14 - SW11/8
                    'M1595,860 SWDN40 LR20 SPR10 LR140 SPR10 LR40 SWDN20',


                    //? SW66/63 + SW60/58
                    'M1380,840 SWDN20 LR40 SWUP20',
                    //? SW65/62
                    'M1385,920 SWUP30 LR10 SWUP30',
                    //? SW64/61 - SW59/57
                    'M1395,940 SWUP20 LR15 SWUP30 LR15 SWUP30',
                    //? SW56/55 - 54/52
                    'M1450,860 SWDN60 LR10 SWDN20',
                    //? SW44/31
                    'M1610,920 SWUP20',

                    //? SWITCHES: 22/19 - 17/14 - 13/9
                    'M1770,940 SWUP20 LR10 SWUP20 LR17.5 SWUP40',
                    //? SW10/7 - 5/2
                    'M1840,840 SWDN20 LR40 SWUP20',
                    //? SW6/4 - 3/1
                    'M1875,860 SWDN60 LR10 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Gr_W',
                signalPos: { x: '1360', y: '840' },
                trainPos: { x: '1345', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_X',
                signalPos: { x: '1360', y: '860' },
                trainPos: { x: '1345', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_Y',
                signalPos: { x: '1360', y: '920' },
                trainPos: { x: '1345', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_Z',
                signalPos: { x: '1360', y: '940' },
                trainPos: { x: '1345', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Gr_P1',
                signalPos: { x: '1360', y: '840' },
                trainPos: { x: '1375', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P2',
                signalPos: { x: '1360', y: '860' },
                trainPos: { x: '1375', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P3',
                signalPos: { x: '1360', y: '920' },
                trainPos: { x: '1375', y: '920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_P4',
                signalPos: { x: '1360', y: '940' },
                trainPos: { x: '1375', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS LEFT SIDE
            {
                signalName: 'Gr_O3',
                signalPos: { x: '1480', y: '920' },
                trainPos: { x: '1495', y: '920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_O4',
                signalPos: { x: '1480', y: '940' },
                trainPos: { x: '1507.5', y: '980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_N3',
                signalPos: { x: '1600', y: '920' },
                trainPos: { x: '1585', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_N4',
                signalPos: { x: '1610', y: '980' },
                trainPos: { x: '1595', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Gr_M11',
                signalPos: { x: '1620', y: '820' },
                trainPos: { x: '1635', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M1',
                signalPos: { x: '1620', y: '840' },
                trainPos: { x: '1635', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M2',
                signalPos: { x: '1620', y: '860' },
                trainPos: { x: '1635', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M14',
                signalPos: { x: '1620', y: '900' },
                trainPos: { x: '1650', y: '900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M3',
                signalPos: { x: '1640', y: '920' },
                trainPos: { x: '1655', y: '920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_M4',
                signalPos: { x: '1640', y: '940' },
                trainPos: { x: '1655', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            //~ SIGNALS RIGHT SIDE
            {
                signalName: 'Gr_H11',
                signalPos: { x: '1780', y: '820' },
                trainPos: { x: '1765', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H1',
                signalPos: { x: '1780', y: '840' },
                trainPos: { x: '1765', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H2',
                signalPos: { x: '1780', y: '860' },
                trainPos: { x: '1765', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H14',
                signalPos: { x: '1780', y: '900' },
                trainPos: { x: '1730', y: '900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H3',
                signalPos: { x: '1760', y: '920' },
                trainPos: { x: '1745', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_H4',
                signalPos: { x: '1760', y: '940' },
                trainPos: { x: '1745', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_G3',
                signalPos: { x: '1870', y: '920' },
                trainPos: { x: '1855', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_G4',
                signalPos: { x: '1880', y: '940' },
                trainPos: { x: '1865', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Gr_D',
                signalPos: { x: '1910', y: '840' },
                trainPos: { x: '1925', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_C',
                signalPos: { x: '1910', y: '860' },
                trainPos: { x: '1925', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_B',
                signalPos: { x: '1910', y: '920' },
                trainPos: { x: '1925', y: '920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gr_A',
                signalPos: { x: '1910', y: '940' },
                trainPos: { x: '1925', y: '940' },
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
                    pos: { x: 1535, y: 790 },
                    posFlipped: { x: 1765, y: 980 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1655, y: 782 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron II', width: 75, height: 10, pos: { x: 1652, y: 905 } },
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 1652, y: 925 } },
                ],
                trackLabels: [
                    { text: '11', pos: { x: 1700, y: 820 } },
                    { text: '1', pos: { x: 1700, y: 840 } },
                    { text: '2', pos: { x: 1700, y: 860 } },
                    { text: '14', pos: { x: 1700, y: 900 } },
                    { text: '3c', pos: { x: 1540, y: 920 } },
                    { text: '3', pos: { x: 1700, y: 920 } },
                    { text: '3a', pos: { x: 1840, y: 920 } },
                    { text: '4b', pos: { x: 1555, y: 980 } },
                    { text: '4', pos: { x: 1700, y: 940 } },
                    { text: '4a', pos: { x: 1825, y: 940 } },
                ]
            },
        ]
    },
    "GRODZISKMAZOWIECKI_PRUSZKOW_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1920,840 ABS100-20-4 SPR10 LR10 TEND',
                    'M1920,860 ABS100-20-4 SPR10 LR10 TEND',
                    'M1920,920 ABS100-20-4 SPR10 LR10 TEND',
                    'M1920,940 ABS100-20-4 SPR10 LR10 TEND',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_267N',
                signalPos: { x: '2030', y: '840' },
                trainPos: { x: '2015', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_266',
                signalPos: { x: '2030', y: '860' },
                trainPos: { x: '2015', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_267',
                signalPos: { x: '2030', y: '840' },
                trainPos: { x: '2045', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_266N',
                signalPos: { x: '2030', y: '860' },
                trainPos: { x: '2045', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            //
            {
                signalName: 'L447_271N',
                signalPos: { x: '2030', y: '920' },
                trainPos: { x: '2015', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_270',
                signalPos: { x: '2030', y: '940' },
                trainPos: { x: '2015', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_271',
                signalPos: { x: '2030', y: '920' },
                trainPos: { x: '2045', y: '920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_270N',
                signalPos: { x: '2030', y: '940' },
                trainPos: { x: '2045', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_253SN',
                signalPos: { x: '2150', y: '840' },
                trainPos: { x: '2135', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_252S',
                signalPos: { x: '2150', y: '860' },
                trainPos: { x: '2135', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_253S',
                signalPos: { x: '2150', y: '840' },
                trainPos: { x: '2165', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_252SN',
                signalPos: { x: '2150', y: '860' },
                trainPos: { x: '2165', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_253N',
                signalPos: { x: '2150', y: '920' },
                trainPos: { x: '2135', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_252',
                signalPos: { x: '2150', y: '940' },
                trainPos: { x: '2135', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_253',
                signalPos: { x: '2150', y: '920' },
                trainPos: { x: '2165', y: '920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_252N',
                signalPos: { x: '2150', y: '940' },
                trainPos: { x: '2165', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_237SN',
                signalPos: { x: '2270', y: '840' },
                trainPos: { x: '2255', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_238S',
                signalPos: { x: '2270', y: '860' },
                trainPos: { x: '2255', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_237S',
                signalPos: { x: '2270', y: '840' },
                trainPos: { x: '2285', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_238SN',
                signalPos: { x: '2270', y: '860' },
                trainPos: { x: '2285', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_237N',
                signalPos: { x: '2270', y: '920' },
                trainPos: { x: '2255', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_238',
                signalPos: { x: '2270', y: '940' },
                trainPos: { x: '2255', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_237',
                signalPos: { x: '2270', y: '920' },
                trainPos: { x: '2285', y: '920' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_238N',
                signalPos: { x: '2270', y: '940' },
                trainPos: { x: '2285', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_223SN',
                signalPos: { x: '2390', y: '840' },
                trainPos: { x: '2375', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_222S',
                signalPos: { x: '2390', y: '860' },
                trainPos: { x: '2375', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L447_223N',
                signalPos: { x: '2390', y: '920' },
                trainPos: { x: '2375', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_228',
                signalPos: { x: '2390', y: '940' },
                trainPos: { x: '2375', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Milanówek',
                    pos: { x: 2090, y: 900 },
                    posFlipped: { x: 2090, y: 970 },
                    platforms: [
                        { pos: { x: 2065, y: 925 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '267S', pos: { x: 1970, y: 840 } },
                    { text: '280S', pos: { x: 1970, y: 860 } },
                    { text: '271', pos: { x: 1970, y: 920 } },
                    { text: '280', pos: { x: 1970, y: 940 } },
                    { text: '253S', pos: { x: 2090, y: 840 } },
                    { text: '266S', pos: { x: 2090, y: 860 } },
                    { text: '253', pos: { x: 2090, y: 920 } },
                    { text: '270', pos: { x: 2090, y: 940 } },
                    { text: '237S', pos: { x: 2210, y: 840 } },
                    { text: '252S', pos: { x: 2210, y: 860 } },
                    { text: '237', pos: { x: 2210, y: 920 } },
                    { text: '252', pos: { x: 2210, y: 940 } },
                    { text: '221S', pos: { x: 2330, y: 840 } },
                    { text: '238S', pos: { x: 2330, y: 860 } },
                    { text: '221', pos: { x: 2330, y: 920 } },
                    { text: '238', pos: { x: 2330, y: 940 } },
                ]
            },
        ]
    },



    "GRODZISKMAZOWIECKI_PRUSZKOW_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,1110 TSTART LR10 SPR10 ABS100-20-3',
                    'M10,1130 TSTART LR10 SPR10 ABS100-20-3',

                    'M10,1190 TSTART LR10 SPR10 ABS100-20-3',
                    'M10,1210 TSTART LR10 SPR10 ABS100-20-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_223S',
                signalPos: { x: '30', y: '1120' },
                trainPos: { x: '45', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_222SN',
                signalPos: { x: '30', y: '1140' },
                trainPos: { x: '45', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L447_223',
                signalPos: { x: '30', y: '1200' },
                trainPos: { x: '45', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_228N',
                signalPos: { x: '30', y: '1220' },
                trainPos: { x: '45', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_207SN',
                signalPos: { x: '150', y: '1120' },
                trainPos: { x: '135', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_208S',
                signalPos: { x: '150', y: '1140' },
                trainPos: { x: '135', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_207S',
                signalPos: { x: '150', y: '1120' },
                trainPos: { x: '165', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_208SN',
                signalPos: { x: '150', y: '1140' },
                trainPos: { x: '165', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_207N',
                signalPos: { x: '150', y: '1200' },
                trainPos: { x: '135', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_208',
                signalPos: { x: '150', y: '1220' },
                trainPos: { x: '135', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_207',
                signalPos: { x: '150', y: '1200' },
                trainPos: { x: '165', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_208N',
                signalPos: { x: '150', y: '1220' },
                trainPos: { x: '165', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////
            {
                signalName: 'L1_193SN',
                signalPos: { x: '270', y: '1120' },
                trainPos: { x: '255', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_194S',
                signalPos: { x: '270', y: '1140' },
                trainPos: { x: '255', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_193S',
                signalPos: { x: '270', y: '1120' },
                trainPos: { x: '285', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_194SN',
                signalPos: { x: '270', y: '1140' },
                trainPos: { x: '285', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_193N',
                signalPos: { x: '270', y: '1200' },
                trainPos: { x: '255', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_194',
                signalPos: { x: '270', y: '1220' },
                trainPos: { x: '255', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_193',
                signalPos: { x: '270', y: '1200' },
                trainPos: { x: '285', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_194N',
                signalPos: { x: '270', y: '1220' },
                trainPos: { x: '285', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Brwinów',
                    pos: { x: 67.5, y: 1180 },
                    posFlipped: { x: 67.5, y: 1250 },
                    platforms: [
                        { pos: { x: 42.5, y: 1205 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Parzniew',
                    pos: { x: 330, y: 1180 },
                    posFlipped: { x: 330, y: 1250 },
                    platforms: [
                        { pos: { x: 305, y: 1205 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '207S', pos: { x: 90, y: 1120 } },
                    { text: '222S', pos: { x: 90, y: 1140 } },
                    { text: '207', pos: { x: 90, y: 1200 } },
                    { text: '228', pos: { x: 90, y: 1220 } },
                    { text: '193S', pos: { x: 210, y: 1120 } },
                    { text: '208S', pos: { x: 210, y: 1140 } },
                    { text: '193', pos: { x: 210, y: 1200 } },
                    { text: '208', pos: { x: 210, y: 1220 } },
                    { text: '181S', pos: { x: 330, y: 1120 } },
                    { text: '194S', pos: { x: 330, y: 1140 } },
                    { text: '181', pos: { x: 330, y: 1200 } },
                    { text: '194', pos: { x: 330, y: 1220 } },
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
                    'M390,1120 LR100 SPR10 LR150 SPR10 LR170 SPR10 LR100',
                    //~ TOR2G - T2 - T2b - T2J
                    'M390,1140 LR100 SPR10 LR150 SPR10 LR40 SPR10 LR100 SPR10 LR120',

                    //~ TOR 3G - T3 - T3c - TOR 3W
                    'M390,1200 LR95 SPR10 LR97.5 SWUP20 LR202.5 SPR10 LR30 SWDN20 LR95',
                    //~ TOR 4G - T3 - T4b - TOR 4W
                    'M390,1220 LR95 SPR10 LR97.5 SWDN10 LR222.5 SPR10 LR40 SWUP10 LR65',


                    //^ SW53/52ab - T13 - T34cd/33ab
                    'M515,1080 SWUP20 LR20 SPR10 LR100 SPR10 LR25 SWDN20',
                    //^ SW54/53 - T11 - T33cd/30
                    'M500,1100 SWUP20 LR35 SPR10 LR100 SPR10 LR40 SWDN20',
                    //^ SW58/56 - T7 - SW28/27
                    'M480,1120 SWUP20 LR55 SPR10 LR100 SPR10 LR55 SWDN20',
                    //^ SW69 - T5 - SW36
                    'M425,1140 SWDN20 LR60 SPR10 LR150 SPR10 LR20 SWUP20',

                    //? SWITCHES: 71/70 - 66/61
                    'M410,1120 SWDN20 LR40 SWUP20',
                    //? SW65/60
                    'M440,1160 SWDN40',
                    //? SW68/63 - SW59/57
                    'M410,1220 SWUP20 LR50 SWDN20',

                    //? SWITCHES: 12/9 - 6/4 - 3/1
                    'M855,1120 SWDN20 LR45 SWDN60 LR10 SWDN20',
                    //? SWITCHES: 13/11 - 10/7 - 5/2
                    'M850,1230 SWUP30 LR10 SWUP60 LR50 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Pr_W',
                signalPos: { x: '390', y: '1120' },
                trainPos: { x: '375', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_X',
                signalPos: { x: '390', y: '1140' },
                trainPos: { x: '375', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_Y',
                signalPos: { x: '390', y: '1200' },
                trainPos: { x: '375', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_Z',
                signalPos: { x: '390', y: '1220' },
                trainPos: { x: '375', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Pr_L1',
                signalPos: { x: '490', y: '1120' },
                trainPos: { x: '505', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L2',
                signalPos: { x: '490', y: '1140' },
                trainPos: { x: '505', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L5',
                signalPos: { x: '490', y: '1160' },
                trainPos: { x: '505', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L3',
                signalPos: { x: '485', y: '1200' },
                trainPos: { x: '500', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L4',
                signalPos: { x: '485', y: '1220' },
                trainPos: { x: '500', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_L13',
                signalPos: { x: '540', y: '1060' },
                trainPos: { x: '555', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L11',
                signalPos: { x: '540', y: '1080' },
                trainPos: { x: '555', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_L7',
                signalPos: { x: '540', y: '1100' },
                trainPos: { x: '555', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS RIGHT SIDE
            {
                signalName: 'Pr_H13',
                signalPos: { x: '660', y: '1060' },
                trainPos: { x: '645', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H11',
                signalPos: { x: '660', y: '1080' },
                trainPos: { x: '645', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H7',
                signalPos: { x: '660', y: '1100' },
                trainPos: { x: '645', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_H1',
                signalPos: { x: '660', y: '1120' },
                trainPos: { x: '645', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_K2',
                signalPos: { x: '660', y: '1140' },
                trainPos: { x: '645', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_K5',
                signalPos: { x: '660', y: '1160' },
                trainPos: { x: '645', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_J2',
                signalPos: { x: '700', y: '1140' },
                trainPos: { x: '715', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Pr_G1',
                signalPos: { x: '840', y: '1120' },
                trainPos: { x: '825', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G2',
                signalPos: { x: '820', y: '1140' },
                trainPos: { x: '805', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G3',
                signalPos: { x: '810', y: '1180' },
                trainPos: { x: '795', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_G4',
                signalPos: { x: '830', y: '1230' },
                trainPos: { x: '815', y: '1230' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Pr_D',
                signalPos: { x: '940', y: '1120' },
                trainPos: { x: '955', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_C',
                signalPos: { x: '940', y: '1140' },
                trainPos: { x: '955', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_B',
                signalPos: { x: '940', y: '1200' },
                trainPos: { x: '955', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pr_A',
                signalPos: { x: '940', y: '1220' },
                trainPos: { x: '955', y: '1220' },
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
                    pos: { x: 790, y: 1070 },
                    posFlipped: { x: 720, y: 1260 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 625, y: 1248 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 70, height: 35, pos: { x: 740, y: 1187.5 } },
                ],
                trackLabels: [
                    { text: '13', pos: { x: 600, y: 1060 } },
                    { text: '11', pos: { x: 600, y: 1080 } },
                    { text: '7', pos: { x: 600, y: 1100 } },
                    { text: '1', pos: { x: 575, y: 1120 } },
                    { text: '2', pos: { x: 575, y: 1140 } },
                    { text: '5', pos: { x: 575, y: 1160 } },
                    { text: '3', pos: { x: 545, y: 1200 } },
                    { text: '4', pos: { x: 545, y: 1220 } },
                    { text: '1b', pos: { x: 780, y: 1120 } },
                    { text: '2b', pos: { x: 760, y: 1140 } },
                    { text: '3c', pos: { x: 765, y: 1180 } },
                    { text: '4b', pos: { x: 775, y: 1230 } },
                ]
            },
        ]
    },
    "PRUSZKOW_JOZEFINOW": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M950,1120 ABS100-20-2',
                    'M950,1140 ABS100-20-2',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_135SN',
                signalPos: { x: '1060', y: '1120' },
                trainPos: { x: '1045', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_140S',
                signalPos: { x: '1060', y: '1140' },
                trainPos: { x: '1045', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_135S',
                signalPos: { x: '1060', y: '1120' },
                trainPos: { x: '1075', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_140SN',
                signalPos: { x: '1060', y: '1140' },
                trainPos: { x: '1075', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '135S', pos: { x: 1000, y: 1120 } },
                    { text: '148S', pos: { x: 1000, y: 1140 } },
                    { text: '127S', pos: { x: 1120, y: 1120 } },
                    { text: '140S', pos: { x: 1120, y: 1140 } },
                ]
            },
        ]
    },
    "1539_Jz_JOZEFINOW": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1180,1120 LR40 SWUP20 LR35',
                    'M1200,1120 SWUP40 LR55',

                    'M1230,1140 SWUP20 LR25',
                    'M1180,1140 LR80',
                ]
            },
            {
                //? TRACKS TO WARSZAWA GLOWNA TOWAROWA
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1270,1100 LR97.5 LINE1370,1095 LU7.5 SPU15 LU57.5 LINE1372.5,1010 LR107.5 SPR20 DOT5-5-10',
                    'M1270,1120 LR112.5 LINE1385,1115 LU27.5 SPU15 LU37.5 LINE1387.5,1030 LR92.5 SPR20 DOT5-5-10'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'Jz_E',
                signalPos: { x: '1180', y: '1120' },
                trainPos: { x: '1165', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_F',
                signalPos: { x: '1180', y: '1140' },
                trainPos: { x: '1165', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_C',
                signalPos: { x: '1260', y: '1080' },
                trainPos: { x: '1275', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_D',
                signalPos: { x: '1260', y: '1100' },
                trainPos: { x: '1275', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_B',
                signalPos: { x: '1260', y: '1120' },
                trainPos: { x: '1275', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Jz_A',
                signalPos: { x: '1260', y: '1140' },
                trainPos: { x: '1275', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //*
            //* WGT SIGNALS
            //*
            {
                signalName: 'WGT_B',
                signalPos: { x: '1490', y: '1010' },
                trainPos: { x: '1475', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WGT_A',
                signalPos: { x: '1490', y: '1030' },
                trainPos: { x: '1475', y: '1030' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WGT_D',
                signalPos: { x: '1490', y: '1010' },
                trainPos: { x: '1505', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //? fake signal
            {
                signalName: 'WGT_C',
                signalPos: { x: '1490', y: '1030' },
                trainPos: { x: '1505', y: '1030' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //? fake signal to let trains exit the map properly
            {
                signalName: 'WGT_Z',
                invisibleSignal: true,
                signalPos: { x: '1605', y: '1030' },
                trainPos: { x: '1595', y: '1030' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Józefinów',
                    prefix: 'Jz',
                    lcsControlledBy: 'Pruszków',
                    pos: { x: 1222.5, y: 1045 },
                    posFlipped: { x: 1222.5, y: 1045 }
                },
            },
        ]
    },
    "JOZEFINOW_WARSZAWAWLOCHY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1270,1080 LR127.5 SWDN40 LR97.5 SPR20 LR100 SPR20 LR17.5 SPR25 LR97.5',
                    'M1270,1140 LR230 SPR20 LR100 SPR20 LR17.5 SPR25 LR97.5'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_101SN',
                signalPos: { x: '1510', y: '1120' },
                trainPos: { x: '1495', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_102S',
                signalPos: { x: '1510', y: '1140' },
                trainPos: { x: '1495', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_101S',
                signalPos: { x: '1510', y: '1120' },
                trainPos: { x: '1525', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_102SN',
                signalPos: { x: '1510', y: '1140' },
                trainPos: { x: '1525', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_87SN',
                signalPos: { x: '1630', y: '1120' },
                trainPos: { x: '1615', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_86S',
                signalPos: { x: '1630', y: '1140' },
                trainPos: { x: '1615', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_87S',
                signalPos: { x: '1630', y: '1120' },
                trainPos: { x: '1687.5', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_86SN',
                signalPos: { x: '1630', y: '1140' },
                trainPos: { x: '1687.5', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1T', pos: { x: 1320, y: 1100 } },
                    { text: '2T', pos: { x: 1320, y: 1120 } },
                    { text: '101S', pos: { x: 1330, y: 1080 } },
                    { text: '101S', pos: { x: 1455, y: 1120 } },
                    { text: '116S', pos: { x: 1392.5, y: 1140 } },
                    { text: '87S', pos: { x: 1570, y: 1120 } },
                    { text: '102S', pos: { x: 1570, y: 1140 } },
                    { text: '73S', pos: { x: 1730, y: 1120 } },
                    { text: '86S', pos: { x: 1730, y: 1140 } },
                ]
            },
        ]
    },
    "PRUSZKOW_WARSZAWAWLOCHY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M950,1200 ABS100-20-5 SPR20 LR107.5 SPR25 LR97.5',
                    'M950,1220 ABS100-20-5 SPR20 LR102.5 SWDN40 LR122.5',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L447_139N',
                signalPos: { x: '1060', y: '1200' },
                trainPos: { x: '1045', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_140',
                signalPos: { x: '1060', y: '1220' },
                trainPos: { x: '1045', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_139',
                signalPos: { x: '1060', y: '1200' },
                trainPos: { x: '1075', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_140N',
                signalPos: { x: '1060', y: '1220' },
                trainPos: { x: '1075', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L447_127N',
                signalPos: { x: '1180', y: '1200' },
                trainPos: { x: '1165', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_128',
                signalPos: { x: '1180', y: '1220' },
                trainPos: { x: '1165', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_127',
                signalPos: { x: '1180', y: '1200' },
                trainPos: { x: '1195', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_128N',
                signalPos: { x: '1180', y: '1220' },
                trainPos: { x: '1195', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L447_117N',
                signalPos: { x: '1300', y: '1200' },
                trainPos: { x: '1285', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_116',
                signalPos: { x: '1300', y: '1220' },
                trainPos: { x: '1285', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_117',
                signalPos: { x: '1300', y: '1200' },
                trainPos: { x: '1315', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_116N',
                signalPos: { x: '1300', y: '1220' },
                trainPos: { x: '1315', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L447_101N',
                signalPos: { x: '1420', y: '1200' },
                trainPos: { x: '1405', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_102',
                signalPos: { x: '1420', y: '1220' },
                trainPos: { x: '1405', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_101',
                signalPos: { x: '1420', y: '1200' },
                trainPos: { x: '1435', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_102N',
                signalPos: { x: '1420', y: '1220' },
                trainPos: { x: '1435', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L447_87N',
                signalPos: { x: '1540', y: '1200' },
                trainPos: { x: '1525', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_86',
                signalPos: { x: '1540', y: '1220' },
                trainPos: { x: '1525', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_87',
                signalPos: { x: '1540', y: '1200' },
                trainPos: { x: '1555', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_86N',
                signalPos: { x: '1540', y: '1220' },
                trainPos: { x: '1555', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Piastów',
                    pos: { x: 1217.5, y: 1180 },
                    posFlipped: { x: 1217.5, y: 1250 },
                    platforms: [
                        { pos: { x: 1192.5, y: 1205 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'W. Ursus Niedźwiadek',
                    pos: { x: 1382.5, y: 1180 },
                    posFlipped: { x: 1382.5, y: 1250 },
                    platforms: [
                        { pos: { x: 1357.5, y: 1205 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Warszawa Ursus',
                    pos: { x: 1502.5, y: 1180 },
                    posFlipped: { x: 1502.5, y: 1250 },
                    platforms: [
                        { pos: { x: 1477.5, y: 1205 }, width: 50, height: 10 },
                        { pos: { x: 1477.5, y: 1225 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '139', pos: { x: 1000, y: 1200 } },
                    { text: '148', pos: { x: 1000, y: 1220 } },
                    { text: '127', pos: { x: 1120, y: 1200 } },
                    { text: '140', pos: { x: 1120, y: 1220 } },
                    { text: '117', pos: { x: 1240, y: 1200 } },
                    { text: '128', pos: { x: 1240, y: 1220 } },
                    { text: '101', pos: { x: 1360, y: 1200 } },
                    { text: '116', pos: { x: 1360, y: 1220 } },
                    { text: '87', pos: { x: 1480, y: 1200 } },
                    { text: '102', pos: { x: 1480, y: 1220 } },
                    { text: '73', pos: { x: 1600, y: 1200 } },
                    { text: '73', pos: { x: 1730, y: 1200 } },
                    { text: '86', pos: { x: 1600, y: 1220 } },
                    { text: '86', pos: { x: 1720, y: 1260 } },
                ]
            },
        ]
    },

    "4811_Wl_WARSZAWAWLOCHY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1425,1060 DOT5-5-8 SPR20 LR100',
                    'M1425,1080 DOT5-5-8 SPR20 LR100',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ TOR 1P - T1 - TOR 1W
                    'M1790,1120 LR50 SPR10 LR240',
                    //~ TOR 2P - TOR 2W
                    'M1790,1140 LR300',
                    //~ TOR 3P - T3 - TOR 3W
                    'M1790,1200 LR50 SPR10 LR100 SPR10 LR120',
                    //~ TOR 1G - T3a - SW22
                    'M1630,1060 LR42.5 SWDN160 LR12.5 SPR10 LR100 SPR10 LR15 SWUP20',
                    //~ TOR 2G - T2 - TOR 4W
                    'M1630,1080 LR32.5 SWDN160 LR132.5 SPR10 LR140 SPR10 LR120',
                    //~ TOR 4P - T4 - TORR 5W
                    'M1800,1260 LR150 SPR10 LR120',

                    //^ T1a
                    'M1670,1060 LR20 SPR10 LR100 SPR10 LR15 SWDN60',

                    //? SWITCHES: 10/9ab - 9cd/7ab - 5cd/2ab - 2cd/1
                    'M1975,1120 SWDN20 LR10 SWDN60 LR60 SWUP60 LR10 SWUP20',
                    //? SWITCHES: 12/11 - 8/6ab - 4cd/3
                    'M1970,1240 SWDN20 LR15 SWUP20 LR60 SWDN20',
                    //? CROSS SWITCH 7cd/5ab/4ab/6cd
                    'M2005,1200 LINE2045,1240 M2005,1240 LINE2045,1200',
                ]
            },
        ],
        "SIGNALS": [
            //*
            //* SIGNALS Warszawa Golabki
            //*
            {
                signalName: 'Gl_D',
                signalPos: { x: '1510', y: '1060' },
                trainPos: { x: '1495', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gl_C',
                signalPos: { x: '1510', y: '1080' },
                trainPos: { x: '1495', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gl_A',
                signalPos: { x: '1510', y: '1060' },
                trainPos: { x: '1525', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Gl_B',
                signalPos: { x: '1510', y: '1080' },
                trainPos: { x: '1525', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS UPPER LEFT SIDE
            {
                signalName: 'Wl_Z',
                signalPos: { x: '1630', y: '1060' },
                trainPos: { x: '1615', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_V',
                signalPos: { x: '1630', y: '1080' },
                trainPos: { x: '1615', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_Y',
                signalPos: { x: '1690', y: '1060' },
                trainPos: { x: '1705', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_P',
                signalPos: { x: '1810', y: '1060' },
                trainPos: { x: '1795', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Wl_R',
                signalPos: { x: '1790', y: '1120' },
                trainPos: { x: '1775', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_S',
                signalPos: { x: '1790', y: '1140' },
                trainPos: { x: '1775', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_T',
                signalPos: { x: '1790', y: '1200' },
                trainPos: { x: '1775', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_X',
                signalPos: { x: '1690', y: '1220' },
                trainPos: { x: '1705', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_U',
                signalPos: { x: '1810', y: '1220' },
                trainPos: { x: '1795', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_L',
                signalPos: { x: '1800', y: '1240' },
                trainPos: { x: '1855', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_W',
                signalPos: { x: '1790', y: '1260' },
                trainPos: { x: '1775', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_K',
                signalPos: { x: '1790', y: '1260' },
                trainPos: { x: '1855', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Wl_N',
                signalPos: { x: '1840', y: '1120' },
                trainPos: { x: '1855', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_M',
                signalPos: { x: '1840', y: '1200' },
                trainPos: { x: '1855', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            //
            {
                signalName: 'Wl_G',
                signalPos: { x: '1960', y: '1200' },
                trainPos: { x: '1945', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_H',
                signalPos: { x: '1960', y: '1240' },
                trainPos: { x: '1945', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_J',
                signalPos: { x: '1960', y: '1260' },
                trainPos: { x: '1945', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNAL RIGHT SIDE
            {
                signalName: 'Wl_E',
                signalPos: { x: '2090', y: '1120' },
                trainPos: { x: '2105', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_D',
                signalPos: { x: '2090', y: '1140' },
                trainPos: { x: '2105', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_C',
                signalPos: { x: '2090', y: '1200' },
                trainPos: { x: '2105', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_B',
                signalPos: { x: '2090', y: '1240' },
                trainPos: { x: '2105', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Wl_A',
                signalPos: { x: '2090', y: '1260' },
                trainPos: { x: '2105', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Warszawa Włochy',
                    prefix: 'Wł',
                    pos: { x: 1975, y: 1080 },
                    posFlipped: { x: 1860, y: 1300 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1975, y: 1270 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 95, height: 30, pos: { x: 1852.5, y: 1205 } },
                    { label: 'Peron I', width: 95, height: 12.5, pos: { x: 1852.5, y: 1265 } },
                ],
                trackLabels: [
                    { text: '1G', pos: { x: 1570, y: 1060 } },
                    { text: '2G', pos: { x: 1570, y: 1080 } },
                    { text: '1a', pos: { x: 1750, y: 1060 } },
                    { text: '3a', pos: { x: 1755, y: 1220 } },
                    { text: '1', pos: { x: 1910, y: 1120 } },
                    { text: '3', pos: { x: 1900, y: 1200 } },
                    { text: '2', pos: { x: 1885, y: 1240 } },
                    { text: '4', pos: { x: 1875, y: 1260 } },
                ]
            },
        ]
    },
    "WARSZAWAWLOCHY_WARSZAWAZACHODNIA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2100,1120 ABS160-20-2 SPR10 LR10 TEND',
                    'M2100,1140 ABS160-20-2 SPR10 LR10 TEND',

                    'M2100,1200 ABS100-20-3 SPR10 LR10 TEND',
                    'M2100,1240 ABS100-20-3 SPR10 LR10 TEND',
                    'M2100,1260 ABS100-20-3 SPR10 LR10 TEND',

                    'M10,1350 TSTART LR10 SPR10 LR100',
                    'M10,1370 TSTART LR10 SPR10 LR100',

                    'M10,1410 TSTART LR10 SPR10 LR100',
                    'M10,1450 TSTART LR10 SPR10 LR100',
                    'M10,1470 TSTART LR10 SPR10 LR100',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L447_63N',
                signalPos: { x: '2090', y: '1200' },
                trainPos: { x: '2075', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_62L',
                signalPos: { x: '2090', y: '1240' },
                trainPos: { x: '2075', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_62',
                signalPos: { x: '2090', y: '1260' },
                trainPos: { x: '2075', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L1_55SN',
                signalPos: { x: '2270', y: '1120' },
                trainPos: { x: '2255', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_60S',
                signalPos: { x: '2270', y: '1140' },
                trainPos: { x: '2255', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_57N',
                signalPos: { x: '2210', y: '1200' },
                trainPos: { x: '2195', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_56L',
                signalPos: { x: '2210', y: '1240' },
                trainPos: { x: '2195', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_56',
                signalPos: { x: '2210', y: '1260' },
                trainPos: { x: '2195', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L1_55S',
                signalPos: { x: '2270', y: '1120' },
                trainPos: { x: '2285', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_60SN',
                signalPos: { x: '2270', y: '1140' },
                trainPos: { x: '2285', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_57',
                signalPos: { x: '2210', y: '1200' },
                trainPos: { x: '2225', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L3_56LN',
                signalPos: { x: '2210', y: '1240' },
                trainPos: { x: '2225', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_56N',
                signalPos: { x: '2210', y: '1260' },
                trainPos: { x: '2225', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            //
            {
                signalName: 'L1_45SN',
                signalPos: { x: '2450', y: '1120' },
                trainPos: { x: '2435', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_46S',
                signalPos: { x: '2450', y: '1140' },
                trainPos: { x: '2435', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_49N',
                signalPos: { x: '2330', y: '1200' },
                trainPos: { x: '2315', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_52',
                signalPos: { x: '2330', y: '1240' },
                trainPos: { x: '2315', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_52',
                signalPos: { x: '2330', y: '1260' },
                trainPos: { x: '2315', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            // Warszawa Wlochy <-> Warszawa Zachodnia [R10]
            {
                signalName: 'L1_45S',
                signalPos: { x: '30', y: '1360' },
                trainPos: { x: '45', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_46SN',
                signalPos: { x: '30', y: '1380' },
                trainPos: { x: '45', y: '1380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_49',
                signalPos: { x: '2330', y: '1200' },
                trainPos: { x: '2345', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_52N',
                signalPos: { x: '2330', y: '1240' },
                trainPos: { x: '2345', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_52N',
                signalPos: { x: '2330', y: '1260' },
                trainPos: { x: '2345', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            //
            {
                signalName: 'L447_43N',
                signalPos: { x: '2450', y: '1200' },
                trainPos: { x: '2435', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L3_46L',
                signalPos: { x: '2450', y: '1240' },
                trainPos: { x: '2435', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L447_42',
                signalPos: { x: '2450', y: '1260' },
                trainPos: { x: '2435', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            //
            {
                signalName: 'L447_43',
                signalPos: { x: '30', y: '1420' },
                trainPos: { x: '45', y: '1420' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_46LN',
                signalPos: { x: '30', y: '1460' },
                trainPos: { x: '45', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_42N',
                signalPos: { x: '30', y: '1480' },
                trainPos: { x: '45', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //
            {
                signalName: 'L447_37',
                signalPos: { x: '150', y: '1420' },
                trainPos: { x: '165', y: '1420' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L3_38LN',
                signalPos: { x: '150', y: '1460' },
                trainPos: { x: '165', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L447_36N',
                signalPos: { x: '150', y: '1480' },
                trainPos: { x: '165', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '55S', pos: { x: 2180, y: 1120 } },
                    { text: '62S', pos: { x: 2180, y: 1140 } },
                    { text: '57', pos: { x: 2150, y: 1200 } },
                    { text: '62L', pos: { x: 2150, y: 1240 } },
                    { text: '62', pos: { x: 2150, y: 1260 } },

                    { text: '45S', pos: { x: 2360, y: 1120 } },
                    { text: '60S', pos: { x: 2360, y: 1140 } },
                    { text: '49', pos: { x: 2270, y: 1200 } },
                    { text: '56L', pos: { x: 2270, y: 1240 } },
                    { text: '56', pos: { x: 2270, y: 1260 } },

                    { text: '43', pos: { x: 2390, y: 1200 } },
                    { text: '52L', pos: { x: 2390, y: 1240 } },
                    { text: '50', pos: { x: 2390, y: 1260 } },

                    { text: '39S', pos: { x: 90, y: 1360 } },
                    { text: '46S', pos: { x: 90, y: 1380 } },
                    { text: '37', pos: { x: 90, y: 1420 } },
                    { text: '46L', pos: { x: 90, y: 1460 } },
                    { text: '42', pos: { x: 90, y: 1480 } },
                ]
            },
        ]
    },
    "4837_WZD_WARSZAWAZACHODNIA": { //^ Warszawa Zachodnia
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M160,1360 LR70 SPR5 DOT5-5-3',
                    'M160,1380 LR70 SPR5 DOT5-5-3',
                    'M160,1420 LR70 SPR5 DOT5-5-3',
                    'M160,1460 LR70 SPR5 DOT5-5-3',
                    'M160,1480 LR70 SPR5 DOT5-5-3'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'WZD_W',
                signalPos: { x: '150', y: '1360' },
                trainPos: { x: '135', y: '1360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WZD_Z',
                signalPos: { x: '150', y: '1380' },
                trainPos: { x: '135', y: '1380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WZD_Q',
                signalPos: { x: '150', y: '1420' },
                trainPos: { x: '135', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WZD_T',
                signalPos: { x: '150', y: '1460' },
                trainPos: { x: '135', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WZD_O',
                signalPos: { x: '150', y: '1480' },
                trainPos: { x: '135', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WZD_U1',
                signalPos: { x: '150', y: '1360' },
                trainPos: { x: '165', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WZD_U2',
                signalPos: { x: '150', y: '1380' },
                trainPos: { x: '165', y: '1380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": []
    }
}