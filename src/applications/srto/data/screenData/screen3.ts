import { ScreenData } from '../../types/mapdata-types'

const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'

/* ===============================================================================================
    SCREEN 3 = SEDZICE - RETKINIA - LODZ KALISKA - ZGIERZ - LODZ WIDZEW - LODZ OLECHOW - GALKOWEK
   =============================================================================================== */

export const SCREEN3_DATA: ScreenData.ScreenDataProps = {
    "ADDITIONAL_ELEMENTS": {
        "TRACKS": [
            {
                color: 'yellow',
                commands: [
                    'M12.5,1255 DOT10-5-169',
                    'M12.5,1720 DOT10-5-169',
                ]
            },
        ],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1910, y: 65 },
                text: 'LK131 - [Dionizow]'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2120, y: 270 },
                text: 'LK131 - [Zduńska Wola Karsznice]'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2460, y: 915 },
                text: 'Koluszki'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2445, y: 1050 },
                text: 'Mikołajów'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1805, y: 1600 },
                text: 'LK3 - Łowicz Główny'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 20, y: 2175 },
                text: 'LK11 - Skierniewice'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 155, y: 2340 },
                text: 'LK3 - Warszawa Zachodnia'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2395, y: 2350 },
                text: 'LK3 - Kutno'
            },
            {
                annotationType: 'trackBreakMarker',
                breakLetters: [
                    { first: { x: 2540, y: 120 }, second: { x: 20, y: 335 } },       // [A] Lask <-> Pabianice
                    { first: { x: 2255, y: 340 }, second: { x: 20, y: 495 } },       // [B] Lodz Lublinek <-> Retkinia
                    { first: { x: 660, y: 885 }, second: { x: 1140, y: 815 } },       // [C] Lodz Widzwe <-> Lodz Marysin
                    { first: { x: 2100, y: 765 }, second: { x: 1930, y: 655 } },       // [D] Lodz Marysin <-> Zgierz
                    { first: { x: 2540, y: 585 }, second: { x: 20, y: 1315 } },      // [E] Zgierz <-> Zgierz Polnoc [Kutno]
                    { first: { x: 1970, y: 1320 }, second: { x: 640, y: 1485 } },      // [F] Leczyca <-> Witonia
                    { first: { x: 2540, y: 665 }, second: { x: 20, y: 1775 } },      // [G] Zgierz <-> Glinnik [Lowicz Glowny]
                    { first: { x: 2450, y: 1780 }, second: { x: 20, y: 1975 } },      // [H] Glownow <-> Domaniewice
                ]
            }
        ]
    },



    "3792_Se_SEDZICE": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M10,120 DOT5-5-2 SPR15 LR120 SWDN20',
                    'M10,140 DOT5-5-2 SPR15 LR100 LR60',
                    'M10,160 DOT5-5-3 SPR5 LR100 SPR10 LR50',
                    'M10,180 DOT5-5-2 SPR15 LR100 SPR10 LR10 SWUP20 LR10 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3792_Se_G',
                signalPos: { x: '27.5', y: '120' },
                trainPos: { x: '45', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3792_Se_F',
                signalPos: { x: '27.5', y: '140' },
                trainPos: { x: '45', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3792_Se_H',
                signalPos: { x: '27.5', y: '180' },
                trainPos: { x: '45', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '3792_Se_B',
                signalPos: { x: '150', y: '160' },
                trainPos: { x: '135', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3792_Se_C',
                signalPos: { x: '150', y: '180' },
                trainPos: { x: '135', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3792_Se_A',
                signalPos: { x: '200', y: '140' },
                trainPos: { x: '215', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3792_Se_Sz2N',
                signalPos: { x: '200', y: '160' },
                trainPos: { x: '215', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sędzice',
                    prefix: 'Se',
                    pos: { x: 95, y: 80 },
                    posFlipped: { x: 95, y: 220 }
                },
                platforms: [
                    { label: 'Peron III', width: 50, height: 10, pos: { x: 90, y: 145 } },
                    { label: 'Peron II', width: 55, height: 10, pos: { x: 85, y: 165 } },
                    { label: 'Peron I', width: 45, height: 10, pos: { x: 95, y: 185 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 95, y: 120 } },
                    { text: '1', pos: { x: 95, y: 140 } },
                    { text: '2', pos: { x: 95, y: 160 } },
                    { text: '4a', pos: { x: 70, y: 180 } },
                    { text: '4b', pos: { x: 125, y: 180 } },
                ]
            },
        ]
    },
    "SEDZICE_SIERADZ": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M210,140 LR100',
                    'M210,160 LR100'
                ]
            }
        ],
        "SIGNALS": [], //~ NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [] //~ NO ANNOTATIONS IN THIS CLUSTER
    },
    "3827_Si_SIERADZ": {
        "TRACKS": [
            {
                color: 'white',
                /**
                 * TRACK 1
                 * TRACK 2
                 * SWITCH CONNECTION LEFT SIDE
                 * 
                 * SWITCHES TO TRACK 5 AND BACK DOWN TO TRACK 1
                 * TRACK 3
                 * TRACK 4
                 * SWITCH CONNECTION RIGHT SIDE
                 */
                commands: [
                    'M320,140 LR90 SPR10 LR100 SPR10 LR90',
                    'M320,160            LR200 SPR10 LR90',
                    'M340,140 SWDN20 LR20 SWUP20',

                    'M380,140 SWUP20 LR10 SWUP20 LR10 SPR10 LR100 SPR10 LR10 SWDN20 LR10 SWDN20',
                    'M390,120 LR20 SPR10 LR100 SPR10 LR20',
                    'M380,160 SWDN20 LR25 SPR10 LR100 SPR10 LR25 SWUP20',
                    'M570,140 SWDN20 LR20 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '3827_Si_Sz1N',
                signalPos: { x: '320', y: '140' },
                trainPos: { x: '305', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_sz', //~ sz only?
            },
            {
                signalName: '3827_Si_K',
                signalPos: { x: '320', y: '160' },
                trainPos: { x: '305', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_mechanical-2flap',
            },

            {
                signalName: '3827_Si_N',
                signalPos: { x: '410', y: '100' },
                trainPos: { x: '425', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_mechanical-2flap',
            },
            {
                signalName: '3827_Si_J',
                signalPos: { x: '410', y: '120' },
                trainPos: { x: '425', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_mechanical-2flap',
            },
            {
                signalName: '3827_Si_G',
                signalPos: { x: '410', y: '140' },
                trainPos: { x: '425', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_mechanical-2flap',
            },
            {
                signalName: '3827_Si_F',
                signalPos: { x: '410', y: '180' },
                trainPos: { x: '425', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_mechanical-2flap',
            },

            {
                signalName: '3827_Si_L',
                signalPos: { x: '530', y: '100' },
                trainPos: { x: '515', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_B',
                signalPos: { x: '530', y: '120' },
                trainPos: { x: '515', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_C',
                signalPos: { x: '530', y: '140' },
                trainPos: { x: '515', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_D',
                signalPos: { x: '530', y: '160' },
                trainPos: { x: '515', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_E',
                signalPos: { x: '530', y: '180' },
                trainPos: { x: '515', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3827_Si_A',
                signalPos: { x: '620', y: '140' },
                trainPos: { x: '635', y: '140' },
                trainPosDistance: [
                    //* distance to signal from APO "Meka": ~ 5666m
                    { distanceToSignal: 4920, x: 1045, y: 140 }, // between APO signals
                    { distanceToSignal: 4140, x: 930, y: 140 }, // before po "Sieradz Meka"
                    { distanceToSignal: 3870, x: 880, y: 140 }, // at po "Sieradz Meka"
                    { distanceToSignal: 2000, x: 790, y: 140 }, // after po "Sieradz Meka"
                    { distanceToSignal: 440, x: 730, y: 140 }, // before po "Sieradz Warta"
                    { distanceToSignal: 285, x: 680, y: 140 }, // at po "Sieradz Warta"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3827_Si_A2',
                signalPos: { x: '620', y: '160' },
                trainPos: { x: '635', y: '160' },
                trainPosDistance: [
                    //* distance to signal from APO "Meka": ~ 5662m
                    { distanceToSignal: 4910, x: 1045, y: 160 }, // between APO signals
                    { distanceToSignal: 4130, x: 930, y: 160 }, // before po "Sieradz Meka"
                    { distanceToSignal: 3865, x: 880, y: 160 }, // at po "Sieradz Meka"
                    { distanceToSignal: 2000, x: 790, y: 160 }, // after po "Sieradz Meka"
                    { distanceToSignal: 435, x: 730, y: 160 }, // before po "Sieradz Warta"
                    { distanceToSignal: 285, x: 680, y: 160 }, // at po "Sieradz Warta"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sieradz',
                    prefix: 'Si',
                    pos: { x: 470, y: 70 },
                    posFlipped: { x: 470, y: 220 }
                },
                platforms: [
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 468, y: 145 } },
                    { label: 'Peron I', width: 40, height: 10, pos: { x: 478, y: 185 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 470, y: 100 } },
                    { text: '3', pos: { x: 470, y: 120 } },
                    { text: '1', pos: { x: 470, y: 140 } },
                    { text: '2', pos: { x: 470, y: 160 } },
                    { text: '4', pos: { x: 470, y: 180 } },
                ]
            },
        ]
    },
    "2582_Me_APO_MEKA": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    // 100 50 150 50 100

                    'M630,140 LR400 SPR10 LR100 SPR10 LR450',
                    'M630,160 LR400 SPR10 LR100 SPR10 LR450'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '2582_Me_C',
                signalPos: { x: '1040', y: '140' },
                trainPos: { x: '1025', y: '140' },
                trainPosDistance: [
                    //* distance to signal from station "Sieradz": ~ 5726m
                    { distanceToSignal: 4920, x: 615, y: 140 }, // before backside of signal Si_A
                    { distanceToSignal: 4485, x: 730, y: 140 }, // at po "Sieradz Warta"
                    { distanceToSignal: 2500, x: 820, y: 140 }, // after po "Sieradz Warta"
                    { distanceToSignal: 1050, x: 880, y: 140 }, // before po "Sieradz Meka"
                    { distanceToSignal: 785, x: 930, y: 140 }, // at po "Sieradz Meka"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '2582_Me_D',
                signalPos: { x: '1040', y: '160' },
                trainPos: { x: '1025', y: '160' },
                trainPosDistance: [
                    //* distance to signal from station "Sieradz": ~ 5707m
                    { distanceToSignal: 4910, x: 615, y: 160 }, // before backside of signal Si_A2
                    { distanceToSignal: 4475, x: 730, y: 160 }, // at po "Sieradz Warta"
                    { distanceToSignal: 2500, x: 820, y: 160 }, // after po "Sieradz Warta"
                    { distanceToSignal: 1040, x: 880, y: 160 }, // before po "Sieradz Meka"
                    { distanceToSignal: 780, x: 930, y: 160 }, // at po "Sieradz Meka"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '2582_Me_B',
                signalPos: { x: '1140', y: '140' },
                trainPos: { x: '1155', y: '140' },
                trainPosDistance: [
                    //* distance to signal from station "Zdunska Wola": ~ 10340m
                    //// { distanceToSignal: 9690, x: 1615, y: 140 }, // at backside of entry signal "ZW_P" // cant be used due to api restrictions
                    //// { distanceToSignal: 8260, x: 1550, y: 140 }, // before po "Izabelów" // cant be used - no space
                    { distanceToSignal: 8100, x: 1500, y: 140 }, // at po "Izabelów" //? cant be used properly due to api restrictions
                    { distanceToSignal: 4250, x: 1410, y: 140 }, // after po "Izabelów"
                    { distanceToSignal: 3640, x: 1350, y: 140 }, // before po "Mecka Wola"
                    { distanceToSignal: 3425, x: 1300, y: 140 }, // at po "Mecka Wola"
                    { distanceToSignal: 1750, x: 1210, y: 140 }, // after po "Mecka Wola"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            {
                signalName: '2582_Me_A',
                signalPos: { x: '1140', y: '160' },
                trainPos: { x: '1155', y: '160' },
                trainPosDistance: [
                    //* distance to signal from station "Zdunska Wola": ~ 10340m
                    //// { distanceToSignal: 9690, x: 1615, y: 160 }, // at backside of entry signal "ZW_P" // cant be used due to api restrictions
                    //// { distanceToSignal: 8260, x: 1550, y: 160 }, // before po "Izabelów" // cant be used - no space
                    { distanceToSignal: 8100, x: 1500, y: 160 }, // at po "Izabelów"
                    { distanceToSignal: 5500, x: 1410, y: 160 }, // after po "Izabelów"
                    { distanceToSignal: 3640, x: 1350, y: 160 }, // before po "Mecka Wola"
                    { distanceToSignal: 3425, x: 1300, y: 160 }, // at po "Mecka Wola"
                    { distanceToSignal: 1750, x: 1210, y: 160 }, // after po "Mecka Wola"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Sieradz Warta',
                    pos: { x: 705, y: 110 },
                    posFlipped: { x: 705, y: 190 },
                    platforms: [
                        { pos: { x: 680, y: 127.5 }, width: 50, height: 7.5 },
                        { pos: { x: 680, y: 165 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Sieradz Męka',
                    pos: { x: 905, y: 110 },
                    posFlipped: { x: 905, y: 190 },
                    platforms: [
                        { pos: { x: 880, y: 127.5 }, width: 50, height: 7.5 },
                        { pos: { x: 880, y: 165 }, width: 50, height: 7.5 },
                    ]
                }
            },
            //
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'APO Męka',
                    prefix: 'Me',
                    pos: { x: 1090, y: 90 },
                    posFlipped: { x: 1090, y: 210 }
                }
            },
            //
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Męcka Wola',
                    pos: { x: 1325, y: 110 },
                    posFlipped: { x: 1325, y: 190 },
                    platforms: [
                        { pos: { x: 1300, y: 127.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1300, y: 165 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Izabelów',
                    pos: { x: 1525, y: 110 },
                    posFlipped: { x: 1525, y: 190 },
                    platforms: [
                        { pos: { x: 1500, y: 127.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1500, y: 165 }, width: 50, height: 7.5 },
                    ]
                }
            },
        ]
    },
    "5291_ZW_ZDUNSKAWOLA": {
        "TRACKS": [
            {
                color: 'white',
                /**
                 * TRACK 1
                 * TRACK 2
                 * SWITCH CONNECION LEFT
                 * 
                 * SWITCHES TRACK 7 DOWN TO ZDUNSKA WOLA KARSZNICE
                 * TRACK 5
                 * TRACK 3
                 * TRACK 4 + SWITCH FIELD RIGHT SIDE
                 * 
                 */
                commands: [
                    'M1610,140 LR120 SPR10 LR100 SPR10 LR100',
                    'M1610,160 LR120 SPR10 LR100 SPR10 LR100',
                    'M1630,160 SWUP20 LR20 SWDN20',

                    'M1680,140 SWUP20 LR10 SWUP20 LR10 SWUP20 LR15 SPR10 LR100 SPR10 LR15 SWDN20 LR10 SWDN20 LR10 SWDN20 LR10 SWDN20 LR10 SWDN20',
                    'M1705,100 LR25 SPR10 LR100 SPR10 LR30',
                    'M1690,120 LR40 SPR10 LR100 SPR10 LR100',
                    'M1695,160 SWDN20 LR30 SPR10 LR100 SPR10 LR100 M1860,180 SWUP20 LR10 SWUP20 LR45 SWUP20',
                    '',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '5291_ZW_P',
                signalPos: { x: '1610', y: '140' },
                trainPos: { x: '1595', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    //* distance to signal from APO "Meka": ~ 10440m
                    //// { distanceToSignal: 9700, x: 1135, y: 140 }, // between APO signals // cant be used due to api restrictions
                    //// { distanceToSignal: 7500, x: 1245, y: 140 }, // after APO signals // cant be used due to api restrictions
                    { distanceToSignal: 6270, x: 1300, y: 140 }, // before po "Mecka Wola"
                    { distanceToSignal: 6075, x: 1350, y: 140 }, // at po "Mecka Wola"
                    { distanceToSignal: 3000, x: 1440, y: 140 }, // after po "Mecka Wola"
                    { distanceToSignal: 1600, x: 1500, y: 140 }, // before po "Izabelów"
                    { distanceToSignal: 1440, x: 1550, y: 140 }, // at po "Izabelów"
                    // -> normal trainPos
                ]
            },
            {
                signalName: '5291_ZW_R',
                signalPos: { x: '1610', y: '160' },
                trainPos: { x: '1595', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    //* distance to signal from APO "Meka": ~ 10450m
                    //// { distanceToSignal: 9700, x: 1135, y: 160 }, // between APO signals // cant be used due to api restrictions
                    //// { distanceToSignal: 7500, x: 1245, y: 160 }, // after APO signals // cant be used due to api restrictions
                    { distanceToSignal: 6270, x: 1300, y: 160 }, // before po "Mecka Wola"
                    { distanceToSignal: 6075, x: 1350, y: 160 }, // at po "Mecka Wola"
                    { distanceToSignal: 3000, x: 1440, y: 160 }, // after po "Mecka Wola"
                    { distanceToSignal: 1600, x: 1500, y: 160 }, // before po "Izabelów"
                    { distanceToSignal: 1440, x: 1550, y: 160 }, // at po "Izabelów"
                    // -> normal trainPos
                ]
            },

            {
                signalName: '5291_ZW_L7',
                signalPos: { x: '1730', y: '80' },
                trainPos: { x: '1745', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_L5',
                signalPos: { x: '1730', y: '100' },
                trainPos: { x: '1745', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_L3',
                signalPos: { x: '1730', y: '120' },
                trainPos: { x: '1745', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_L1',
                signalPos: { x: '1730', y: '140' },
                trainPos: { x: '1745', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_K2',
                signalPos: { x: '1730', y: '160' },
                trainPos: { x: '1745', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_K4',
                signalPos: { x: '1730', y: '180' },
                trainPos: { x: '1745', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '5291_ZW_G7',
                signalPos: { x: '1850', y: '80' },
                trainPos: { x: '1835', y: '80' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_G5',
                signalPos: { x: '1850', y: '100' },
                trainPos: { x: '1835', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_G3',
                signalPos: { x: '1850', y: '120' },
                trainPos: { x: '1835', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_G1',
                signalPos: { x: '1850', y: '140' },
                trainPos: { x: '1835', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_H2',
                signalPos: { x: '1850', y: '160' },
                trainPos: { x: '1835', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_H4',
                signalPos: { x: '1850', y: '180' },
                trainPos: { x: '1835', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5291_ZW_D',
                signalPos: { x: '1950', y: '120' },
                trainPos: { x: '1965', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_C',
                signalPos: { x: '1950', y: '140' },
                trainPos: { x: '1965', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_B',
                signalPos: { x: '1950', y: '160' },
                trainPos: { x: '1965', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5291_ZW_A',
                signalPos: { x: '1950', y: '180' },
                trainPos: { x: '1965', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Zduńska Wola',
                    prefix: 'ZW',
                    pos: { x: 1790, y: 50 },
                    posFlipped: { x: 1790, y: 220 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1900, y: 85 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 1742, y: 145 } },
                    { label: 'Peron I', width: 35, height: 10, pos: { x: 1742, y: 185 } },
                ],
                trackLabels: [
                    { text: '7', pos: { x: 1790, y: 80 } },
                    { text: '5', pos: { x: 1790, y: 100 } },
                    { text: '3', pos: { x: 1790, y: 120 } },
                    { text: '1', pos: { x: 1790, y: 140 } },
                    { text: '2', pos: { x: 1790, y: 160 } },
                    { text: '4', pos: { x: 1790, y: 180 } },
                ]
            },
        ]
    },
    "5292_ZWK_ZDUNSKAWOLAKARSZNICE": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M1960,180 LR130 SWDN60 LR115 SPR20 DOT5-5-10',
                    'M2240,180 LL130 UTRD40 LR100 SPR20 DOT5-5-10'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '5292_ZWK_V',
                signalPos: { x: '2220', y: '220' },
                trainPos: { x: '2205', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5292_ZWK_X',
                signalPos: { x: '2220', y: '240' },
                trainPos: { x: '2205', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5292_ZWK_W51',
                signalPos: { x: '2220', y: '220' },
                trainPos: { x: '2235', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5292_ZWK_W31',
                signalPos: { x: '2220', y: '240' },
                trainPos: { x: '2235', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": []
    },
    "779_Di_DIONIZOW": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M1875,40 DOT5-5-10 SPR20 LR100 UTLD80 LL130',
                    'M1875,20 DOT5-5-10 SPR20 LR115 SWDN100 LR130',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '779_Di_D1',
                signalPos: { x: '1980', y: '20' },
                trainPos: { x: '1965', y: '20' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '779_Di_D',
                signalPos: { x: '1980', y: '40' },
                trainPos: { x: '1965', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '779_Di_C',
                signalPos: { x: '1980', y: '20' },
                trainPos: { x: '1995', y: '20' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '779_Di_B',
                signalPos: { x: '1980', y: '40' },
                trainPos: { x: '1995', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": []
    },
    "ZDUNSKAWOLA_GAJEWNIKI": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M1960,140 LR280',
                    'M1960,160 LR280'
                ]
            }
        ],
        "SIGNALS": [], //~ NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": []
    },
    "919_Ga_GAJEWNIKI": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M2250,120 LR20 SWDN20 LR10 SWDN20 LR25 SWUP20',
                    'M2250,140 LR90 M2250,160 LR90',
                    'M2250,180 LR50 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '919_Ga_C',
                signalPos: { x: '2250', y: '120' },
                trainPos: { x: '2235', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '919_Ga_D',
                signalPos: { x: '2250', y: '140' },
                trainPos: { x: '2235', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '919_Ga_E',
                signalPos: { x: '2250', y: '160' },
                trainPos: { x: '2235', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '919_Ga_F',
                signalPos: { x: '2250', y: '180' },
                trainPos: { x: '2235', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '919_Ga_B',
                signalPos: { x: '2340', y: '140' },
                trainPos: { x: '2355', y: '140' },
                trainPosDistance: [
                    // distance to signal from APO "Borszewice": ~ 3725m
                    { distanceToSignal: 3390, x: 2430, y: 140 },
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '919_Ga_A',
                signalPos: { x: '2340', y: '160' },
                trainPos: { x: '2355', y: '160' },
                trainPosDistance: [
                    // distance to signal from APO "Borszewice": ~ 3725m
                    { distanceToSignal: 3390, x: 2430, y: 160 },
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Gajewniki',
                    prefix: 'Ga',
                    pos: { x: 2295, y: 70 },
                    posFlipped: { x: 2295, y: 200 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 2290, y: 105 },
                    rotation: 180,
                },
            }
        ]
    },
    "292_Bo_APO_BORSZEWICE": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    // line 1 Gajewniki <-> Breaker [A]
                    'M2350,140 LR170 SPR10 LR10 TEND',
                    'M2350,160 LR170 SPR10 LR10 TEND',
                    // line 1 Breaker [A] <-> Lask
                    'M10,350 TSTART LR10 SPR10 LR150',
                    'M10,370 TSTART LR10 SPR10 LR150',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '292_Bo_C',
                signalPos: { x: '2530', y: '140' },
                trainPos: { x: '2515', y: '140' },
                trainPosDistance: [
                    // distance to signal from station "Gajewniki": ~ 4210m
                    { distanceToSignal: 210, x: 2445, y: 140 }, // before po "Borszewice"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '292_Bo_D',
                signalPos: { x: '2530', y: '160' },
                trainPos: { x: '2515', y: '160' },
                trainPosDistance: [
                    // distance to signal from station "Gajewniki": ~ 4210m
                    { distanceToSignal: 465, x: 2445, y: 160 }, // before po "Borszewice"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '292_Bo_B',
                signalPos: { x: '30', y: '360' },
                trainPos: { x: '45', y: '360' },
                trainPosDistance: [
                    // distance to signal from station "Lask": ~ 4745m
                    { distanceToSignal: 2000, x: 95, y: 360 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            {
                signalName: '292_Bo_A',
                signalPos: { x: '30', y: '380' },
                trainPos: { x: '45', y: '380' },
                trainPosDistance: [
                    // distance to signal from station "Lask": ~ 4745m
                    { distanceToSignal: 2000, x: 95, y: 380 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'APO Borszewice',
                    prefix: 'Bo',
                    pos: { x: 2460, y: 100 },
                    posFlipped: { x: 2460, y: 190 }
                },
                platforms: [
                    { label: '', width: 70, height: 7.5, pos: { x: 2445, y: 127.5 } },
                    { label: '', width: 70, height: 7.5, pos: { x: 2445, y: 165 } },
                ],
            },
        ]
    },



    "2360_La_LASK": {
        "TRACKS": [
            {
                color: 'white',
                /**
                 * TRACK 1
                 * TRACK 2
                 * SWITCH CONNECTION LEFT SIDE
                 * 
                 * TRACK 4 & 6
                 */
                commands: [
                    'M200,360 LR90 SPR10 LR100 SPR10 LR80',
                    'M200,380 LR90 SPR10 LR100 SPR10 LR80',
                    'M220,360 SWDN20 LR10 SWUP20',

                    'M255,360 SWUP20 LR30 SPR10 LR100 SPR10 LR25 SWDN20 LR10 CROSS',
                    'M250,380 SWDN20 LR10 SWDN20 LR20 SPR10 LR100 SPR10 LR10 SWUP20 M260,400 LR30 SPR10 LR100 SPR10 LR25 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '2360_La_P',
                signalPos: { x: '200', y: '360' },
                trainPos: { x: '185', y: '360' },
                trainPosDistance: [
                    //* distance to signal from APO "Borszewice": ~ 4123m
                    { distanceToSignal: 2000, x: 135, y: 360 },
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_R',
                signalPos: { x: '200', y: '380' },
                trainPos: { x: '185', y: '380' },
                trainPosDistance: [
                    //* distance to signal from APO "Borszewice": ~ 4123m
                    { distanceToSignal: 2000, x: 135, y: 380 },
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2360_La_N',
                signalPos: { x: '290', y: '340' },
                trainPos: { x: '305', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_M',
                signalPos: { x: '290', y: '360' },
                trainPos: { x: '305', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_L',
                signalPos: { x: '290', y: '380' },
                trainPos: { x: '305', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_K',
                signalPos: { x: '290', y: '400' },
                trainPos: { x: '305', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_J',
                signalPos: { x: '290', y: '420' },
                trainPos: { x: '305', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2360_La_C',
                signalPos: { x: '410', y: '340' },
                trainPos: { x: '395', y: '340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_D',
                signalPos: { x: '410', y: '360' },
                trainPos: { x: '395', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_E',
                signalPos: { x: '410', y: '380' },
                trainPos: { x: '395', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_F',
                signalPos: { x: '410', y: '400' },
                trainPos: { x: '395', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_G',
                signalPos: { x: '410', y: '420' },
                trainPos: { x: '395', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2360_La_B',
                signalPos: { x: '490', y: '360' },
                trainPos: { x: '505', y: '360' },
                trainPosDistance: [
                    //* distance to signal from APO "Kolumna": ~ 5271m
                    { distanceToSignal: 4795, x: 710, y: 360 }, // at po "Kolumna"
                    { distanceToSignal: 4665, x: 665, y: 360 }, // after po "Kolumna"
                    { distanceToSignal: 2000, x: 555, y: 360 }, // at po "Kolumna"
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2360_La_A',
                signalPos: { x: '490', y: '380' },
                trainPos: { x: '505', y: '380' },
                trainPosDistance: [
                    //*  distance to signal from APO "Kolumna": ~ 5271m
                    { distanceToSignal: 4795, x: 710, y: 380 }, // at po "Kolumna"
                    { distanceToSignal: 4665, x: 665, y: 380 }, // after po "Kolumna
                    { distanceToSignal: 2000, x: 555, y: 380 }, // at po "Kolumna"
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łask',
                    prefix: 'La',
                    pos: { x: 350, y: 290 },
                    posFlipped: { x: 350, y: 455 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 270, y: 305 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 302, y: 365 } },
                    { label: 'Peron I', width: 35, height: 10, pos: { x: 302, y: 425 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 350, y: 340 } },
                    { text: '1', pos: { x: 350, y: 360 } },
                    { text: '2', pos: { x: 350, y: 380 } },
                    { text: '4', pos: { x: 350, y: 400 } },
                    { text: '6', pos: { x: 350, y: 420 } },
                ]
            },
        ]
    },
    "802_Db_APO_KOLUMNA_DOBRON": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M500,360 LR150 SPR10 LR150 SPR10 LR150 SPR10 LR150 SPR10 LR300',
                    'M500,380 LR150 SPR10 LR150 SPR10 LR150 SPR10 LR150 SPR10 LR300'
                ]
            }
        ],
        "SIGNALS": [
            //~ APO Kolumna
            {
                signalName: '802_Db_H',
                signalPos: { x: '660', y: '360' },
                trainPos: { x: '645', y: '360' },
                trainPosDistance: [
                    //* distance to signal from station "Lask": ~ 5290m
                    { distanceToSignal: 2500, x: 595, y: 360 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_J',
                signalPos: { x: '660', y: '380' },
                trainPos: { x: '645', y: '380' },
                trainPosDistance: [
                    //* distance to signal from station "Lask": ~ 5297m
                    { distanceToSignal: 2500, x: 595, y: 380 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_F',
                signalPos: { x: '810', y: '360' },
                trainPos: { x: '825', y: '360' },
                trainPosDistance: [
                    //* distance to signal from APO "Dobron": ~ 3407m
                    { distanceToSignal: 3020, x: 1030, y: 360 },
                    { distanceToSignal: 2885, x: 985, y: 360 },
                    { distanceToSignal: 1250, x: 875, y: 360 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_E',
                signalPos: { x: '810', y: '380' },
                trainPos: { x: '825', y: '380' },
                trainPosDistance: [
                    //* distance to signal from APO "Dobron": ~ 3407m
                    { distanceToSignal: 3020, x: 1030, y: 380 },
                    { distanceToSignal: 2885, x: 985, y: 380 },
                    { distanceToSignal: 1250, x: 875, y: 380 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            //~ APO Dobron
            {
                signalName: '802_Db_C',
                signalPos: { x: '980', y: '360' },
                trainPos: { x: '965', y: '360' },
                trainPosDistance: [
                    //* distance to signal from APO "Kolumna": ~ 3490m
                    { distanceToSignal: 3160, x: 760, y: 360 },
                    { distanceToSignal: 2885, x: 805, y: 360 },
                    { distanceToSignal: 1500, x: 910, y: 360 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_D',
                signalPos: { x: '980', y: '380' },
                trainPos: { x: '965', y: '380' },
                trainPosDistance: [
                    //* distance to signal from APO "Kolumna": ~ 3490m
                    { distanceToSignal: 3160, x: 760, y: 380 },
                    { distanceToSignal: 2885, x: 805, y: 380 },
                    { distanceToSignal: 1500, x: 910, y: 380 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_B',
                signalPos: { x: '1130', y: '360' },
                trainPos: { x: '1145', y: '360' },
                trainPosDistance: [
                    //* distance to signal from station "Pabianice": ~ 6375m
                    { distanceToSignal: 5000, x: 1345, y: 360 }, // leaving station "Pabianice"
                    { distanceToSignal: 3550, x: 1285, y: 360 }, // before po "Chechlo"
                    { distanceToSignal: 3340, x: 1235, y: 360 }, // at po "Chechlo"
                    { distanceToSignal: 1500, x: 1180, y: 360 }, // after po "Chechlo"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            {
                signalName: '802_Db_A',
                signalPos: { x: '1130', y: '380' },
                trainPos: { x: '1145', y: '380' },
                trainPosDistance: [
                    //^ distance to signal from station "Pabianice": ~ 6328m
                    { distanceToSignal: 3275, x: 1345, y: 380 }, // leaving station "Pabianice" / before po "Chechlo"
                    { distanceToSignal: 3070, x: 1295, y: 380 }, // at po "Chechlo"
                    { distanceToSignal: 1750, x: 1205, y: 380 }, // after po "Chechlo"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'APO Kolumna',
                    prefix: 'Km',
                    pos: { x: 735, y: 320 },
                    posFlipped: { x: 735, y: 420 },
                },
                platforms: [
                    { label: '', width: 50, height: 7.5, pos: { x: 710, y: 347.5 } },
                    { label: '', width: 50, height: 7.5, pos: { x: 710, y: 385 } },
                ]
            },
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'APO Dobroń',
                    prefix: 'Db',
                    pos: { x: 1055, y: 320 },
                    posFlipped: { x: 1055, y: 420 },
                },
                platforms: [
                    { label: '', width: 50, height: 7.5, pos: { x: 1030, y: 347.5 } },
                    { label: '', width: 50, height: 7.5, pos: { x: 1030, y: 385 } },
                ],
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Chechło',
                    pos: { x: 1290, y: 330 },
                    posFlipped: { x: 1290, y: 410 },
                    platforms: [
                        { pos: { x: 1235, y: 347.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1295, y: 385 }, width: 50, height: 7.5 },
                    ]
                }
            },
        ]
    },
    "3093_Pa_PABIANICE": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M1450,360 LR80 SPR10 LR100 SPR10 LR90',
                    'M1450,380 LR80 SPR10 LR100 SPR10 LR90',
                    'M1470,380 SWUP20 LR10 SWDN20 LR10 SWDN20 LR25 SPR10 LR100 SPR10 LR25 SWUP20',
                    'M1510,360 SWUP20 LR15 SPR10 LR100 SPR10 LR10 SWDN20 LR25 SWDN20 LR20 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '3093_Pa_P',
                signalPos: { x: '1450', y: '360' },
                trainPos: { x: '1435', y: '360' },
                trainPosDistance: [
                    //* distance to signal from APO "Dobron": ~ 6139m
                    { distanceToSignal: 5800, x: 1080, y: 360 }, // at po "Dobron"
                    { distanceToSignal: 5620, x: 1125, y: 360 }, // after po "Dobron"
                    { distanceToSignal: 2280, x: 1235, y: 360 }, // before po "Chechlo"
                    { distanceToSignal: 2070, x: 1285, y: 360 }, // at po "Chechlo"
                    { distanceToSignal: 1250, x: 1375, y: 360 }, // after po "Chechlo"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_R',
                signalPos: { x: '1450', y: '380' },
                trainPos: { x: '1435', y: '380' },
                trainPosDistance: [
                    //* distance to signal from APO "Dobron": ~ 6140m
                    { distanceToSignal: 5800, x: 1080, y: 380 }, // at po "Dobron"
                    { distanceToSignal: 5620, x: 1125, y: 380 }, // after po "Dobron"
                    { distanceToSignal: 3750, x: 1235, y: 380 }, // after APO signal "Db_A"
                    { distanceToSignal: 2550, x: 1295, y: 380 }, // before po "Chechlo"
                    { distanceToSignal: 2340, x: 1345, y: 380 }, // at po "Chechlo"
                    { distanceToSignal: 1500, x: 1405, y: 380 }, // after po "Chechlo"
                    // -> normal trainPos
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3093_Pa_N',
                signalPos: { x: '1530', y: '340' },
                trainPos: { x: '1545', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_M',
                signalPos: { x: '1530', y: '360' },
                trainPos: { x: '1545', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_L',
                signalPos: { x: '1530', y: '380' },
                trainPos: { x: '1545', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_K',
                signalPos: { x: '1530', y: '400' },
                trainPos: { x: '1545', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '3093_Pa_C',
                signalPos: { x: '1650', y: '340' },
                trainPos: { x: '1635', y: '340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_D',
                signalPos: { x: '1650', y: '360' },
                trainPos: { x: '1635', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_E',
                signalPos: { x: '1650', y: '380' },
                trainPos: { x: '1635', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_F',
                signalPos: { x: '1650', y: '400' },
                trainPos: { x: '1635', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3093_Pa_B',
                signalPos: { x: '1740', y: '360' },
                trainPos: { x: '1755', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3093_Pa_A',
                signalPos: { x: '1740', y: '380' },
                trainPos: { x: '1755', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Pabianice',
                    prefix: 'Pa',
                    pos: { x: 1590, y: 310 },
                    posFlipped: { x: 1590, y: 435 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1470, y: 325 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 1542, y: 365 } },
                    { label: 'Peron I', width: 35, height: 10, pos: { x: 1542, y: 405 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 1590, y: 340 } },
                    { text: '1', pos: { x: 1590, y: 360 } },
                    { text: '2', pos: { x: 1590, y: 380 } },
                    { text: '4', pos: { x: 1590, y: 400 } },
                ]
            },
        ]
    },
    "PABIANICE_LODZLUBLINEK": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M1750,360 LR100',
                    'M1750,380 LR100'
                ]
            }
        ],
        "SIGNALS": [], //~ NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Pabianice Północne',
                    pos: { x: 1775, y: 335 },
                    posFlipped: { x: 1775, y: 410 },
                    platforms: [
                        { pos: { x: 1752, y: 347.5 }, width: 40, height: 7.5 },
                        { pos: { x: 1752, y: 385 }, width: 40, height: 7.5 },
                    ]
                }
            }
        ]
    },
    "2330_Lb_LODZLUBLINEK": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M1860,360 LR80 SPR10 LR100 SPR10 LR90',
                    'M1860,380 LR80 SPR10 LR100 SPR10 LR90',
                    'M1880,380 SWUP20 LR25 SWDN20 LR10 SWDN20 LR10 SPR10 LR100 SPR10 LR25 SWUP20',
                    'M1895,360 SWUP20 LR10 SWUP20 LR25 SPR10 LR100 SPR10 LR10 SWDN20',
                    'M1910,340 LR30 SPR10 LR100 SPR10 LR35 SWDN20',
                    'M2110,380 SWUP20 LR10 SWDN20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '2330_Lb_P',
                signalPos: { x: '1860', y: '360' },
                trainPos: { x: '1845', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_R',
                signalPos: { x: '1860', y: '380' },
                trainPos: { x: '1845', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2330_Lb_O',
                signalPos: { x: '1940', y: '320' },
                trainPos: { x: '1955', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_N',
                signalPos: { x: '1940', y: '340' },
                trainPos: { x: '1955', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_M',
                signalPos: { x: '1940', y: '360' },
                trainPos: { x: '1955', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_L',
                signalPos: { x: '1940', y: '380' },
                trainPos: { x: '1955', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_K',
                signalPos: { x: '1940', y: '400' },
                trainPos: { x: '1955', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2330_Lb_C',
                signalPos: { x: '2060', y: '320' },
                trainPos: { x: '2045', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_D',
                signalPos: { x: '2060', y: '340' },
                trainPos: { x: '2045', y: '340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_E',
                signalPos: { x: '2060', y: '360' },
                trainPos: { x: '2045', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_F',
                signalPos: { x: '2060', y: '380' },
                trainPos: { x: '2045', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_G',
                signalPos: { x: '2060', y: '400' },
                trainPos: { x: '2045', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2330_Lb_B',
                signalPos: { x: '2150', y: '360' },
                trainPos: { x: '2165', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2330_Lb_A',
                signalPos: { x: '2150', y: '380' },
                trainPos: { x: '2165', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łódź Lublinek',
                    prefix: 'Lb',
                    pos: { x: 2000, y: 290 },
                    posFlipped: { x: 2000, y: 455 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1935, y: 415 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 40, height: 10, pos: { x: 1955, y: 345 } },
                    { label: 'Peron I', width: 40, height: 10, pos: { x: 1955, y: 385 } },
                ],
                trackLabels: [
                    { text: '7', pos: { x: 2000, y: 320 } },
                    { text: '5', pos: { x: 2000, y: 340 } },
                    { text: '1', pos: { x: 2000, y: 360 } },
                    { text: '2', pos: { x: 2000, y: 380 } },
                    { text: '4', pos: { x: 2000, y: 400 } },
                ]
            }
        ]
    },



    "LODZLUBLINEK_RETKINIA": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M2160,360 LR100 TEND',
                    'M2160,380 LR100 TEND',

                    'M10,510 TSTART LR100',
                    'M10,530 TSTART LR100',
                ]
            }
        ],
        "SIGNALS": [], //~ NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Retkinia',
                    pos: { x: 100, y: 495 },
                    posFlipped: { x: 100, y: 495 },
                    platforms: [
                        { pos: { x: 78, y: 507.5 }, width: 40, height: 7.5 },
                        { pos: { x: 78, y: 545 }, width: 40, height: 7.5 },
                    ]
                }
            }
        ]
    },
    "3577_Rt_RETKINIA": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M130,520 LR70',
                    'M130,540 LR70',
                    'M150,540 SWUP20 LR15 SWDN20 LR10 SWDN70 LR20',
                    'M165,540 SWDN90 LR40'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '3577_Rt_E',
                signalPos: { x: '130', y: '520' },
                trainPos: { x: '115', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '3577_Rt_F',
                signalPos: { x: '130', y: '540' },
                trainPos: { x: '115', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '3577_Rt_D',
                signalPos: { x: '200', y: '520' },
                trainPos: { x: '215', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3577_Rt_C',
                signalPos: { x: '200', y: '540' },
                trainPos: { x: '215', y: '540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3577_Rt_B',
                signalPos: { x: '210', y: '610' },
                trainPos: { x: '225', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '3577_Rt_A',
                signalPos: { x: '210', y: '630' },
                trainPos: { x: '225', y: '630' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Retkinia',
                    prefix: 'Rt',
                    pos: { x: 165, y: 475 },
                    posFlipped: { x: 165, y: 650 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 130, y: 550 },
                    rotation: 0,
                }
            }
        ]
    },
    "RETKINIA_LODZKALISKA": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M210,520 LR260',
                    'M210,540 LR260',
                    'M220,610 LR100',
                    'M220,630 LR100',
                ]
            }
        ],
        "SIGNALS": [], //~ NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [] //~ NO ANNOTATIONS IN THIS CLUSTER
    },
    "2432_LK_LODZKALISKA": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    /* =====================
                        UPPER TRACK SECTION
                       ===================== */
                    // TOR 1R - T6 - SW75ab - SW75cd/68ab
                    'M480,520 LR80 SWDN40 LR105 SWDN70 LR65 SPR10 LR100 SPR10 LR25 SWUP20 LR15 SWUP10 LR40 SWUP10',
                    // TOR 2R - T8 - SW74ab - SW74cd/66
                    'M480,540 LR60 SWDN50 LR110 SWDN60 LR80 SPR10 LR100 SPR10 LR140 SWDN60 LR10 SWDN30',
                    // SW110/109ab - SW109cd/107ab - SW107cd - T3 - T13 - SW11/8
                    'M590,610 SWUP20 LR10 SWUP30 LR10 SWUP40 LR115 SPR10 LR100 SPR10 LR40 SWDN50 LR155 SPR10 LR120 SPR10 LR65 SWDN20',
                    // SW 104 - SW103/101 - T1 - T101 - TOR 1Z
                    'M715,520 SWDN30 LR10 M725,580 SWUP30 LR10 SPR10 LR100 SPR10 LR25 SWDN40 LR170 SPR10 LR120 SPR10 LR160',
                    // SW108/109ab - SW109cd - T2 - SW79
                    'M625,590 SWUP30 LR10 SWUP20 LR55 SWDN40 LR35 SPR10 LR100 SPR10 LR10 SWDN30',
                    // SW105cd/102ab - SW102cd - T4 - T102 - TOR 2Z
                    'M645,590 SWUP30 LR35 SWDN50 LR50 SPR10 LR100 SPR10 LR200 SPR10 LR120 SPR10 LR160',
                    // SW80/71 - SW68cd/65ab
                    'M920,570 SWDN20 LR45 SWUP20',
                    // SW9/7 - SW5/3
                    'M1290,610 SWUP20 LR40 SWDN20',
                    /* =====================
                        LOWER TRACK SECTION
                       ===================== */
                    // TOR 3R
                    'M330,610 LR40 UTLD100',
                    // TOR 4R
                    'M330,630 LR20 UTLD80',
                    // SW229/228 + SW227/223ab
                    'M330,710 SWDN20 LR20 SWUP20',
                    // TOR 1C - T102 - T151 - SW77/SW69ab - SW69cd/59 - SW57/51 / SW77/70
                    'M290,710 LR170 SPR10 LR120 SPR10 LR25 SWUP20 LR110 SPR10 LR140 SPR10 LR10 SWUP60 LR50 SWUP20 LR15 SWUP20 LR50 SWDN20 M940,630 SWUP30',
                    // TOR 2C - T202 - T152 - T18 - SW25 - SW12/10
                    'M290,730 LR170 SPR10 LR120 SPR10 LR40 SWUP20 LR95 SPR10 LR140 SPR10 LR140 UTLU20 LL20 UTRU30 LR40 SPR10 LR100 SPR10 LR10 SWUP30 LR70 SWUP20',
                    // SW219/217ab - T203 - SW159
                    'M390,710 SWUP20 LR65 SPR10 LR120 SPR10 LR15 SWUP20',
                    // SW217 - T205 - SW154ab
                    'M405,690 SWUP20 LR50 SPR10 LR120 SPR10 LR75 SWDN20',
                    // SW213 - T207 - SW156
                    'M440,670 SWUP20 LR15 SPR10 LR120 SPR10 LR30 SWDN20',
                    // SW216 - T81 - SW110/105ab -> connection to upper group
                    'M425,670 SWUP60 LR30 SPR10 LR100 SPR10 LR50 SWUP20',
                    // SW158 - T154 - T30 - SW22
                    'M665,710 SWDN30 LR70 SPR10 LR140 SPR10 LR160 SPR10 LR100 SPR10 LR45 SWUP110',
                    // SW154cd/153ab - SW153cd/152 - SW151 - T32 - SW29
                    'M690,690 SWDN20 LR10 SWDN30 LR10 SWDN20 LR15 SPR10 LR420 SPR10 LR10 SWUP20',
                    // SW81/76/61
                    'M980,710 SWUP80 LR15 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            //& ENTRY SIGNALS LK14
            {
                signalName: '2432_LK_T',
                signalPos: { x: '480', y: '520' },
                trainPos: { x: '465', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_U',
                signalPos: { x: '480', y: '540' },
                trainPos: { x: '465', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //& ENTRY SIGNALS LK539
            {
                signalName: '2432_LK_V',
                signalPos: { x: '330', y: '610' },
                trainPos: { x: '315', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_W',
                signalPos: { x: '330', y: '630' },
                trainPos: { x: '315', y: '630' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //& ENTRY SIGNALS CHOJNY
            {
                signalName: '2432_LK_Y',
                signalPos: { x: '290', y: '710' },
                trainPos: { x: '275', y: '710' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_Z',
                signalPos: { x: '290', y: '730' },
                trainPos: { x: '275', y: '730' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //& SIGNALS T81 - T202
            {
                signalName: '2432_LK_P81',
                signalPos: { x: '460', y: '610' },
                trainPos: { x: '475', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P207',
                signalPos: { x: '460', y: '650' },
                trainPos: { x: '485', y: '650' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P205',
                signalPos: { x: '460', y: '670' },
                trainPos: { x: '485', y: '670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P203',
                signalPos: { x: '460', y: '690' },
                trainPos: { x: '485', y: '690' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P201',
                signalPos: { x: '460', y: '710' },
                trainPos: { x: '485', y: '710' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_P202',
                signalPos: { x: '460', y: '730' },
                trainPos: { x: '485', y: '730' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2432_LK_L81',
                signalPos: { x: '580', y: '610' },
                trainPos: { x: '565', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L207',
                signalPos: { x: '600', y: '650' },
                trainPos: { x: '575', y: '650' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L205',
                signalPos: { x: '600', y: '670' },
                trainPos: { x: '575', y: '670' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L203',
                signalPos: { x: '600', y: '690' },
                trainPos: { x: '575', y: '690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L201',
                signalPos: { x: '600', y: '710' },
                trainPos: { x: '575', y: '710' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_L202',
                signalPos: { x: '600', y: '730' },
                trainPos: { x: '575', y: '730' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            //
            {
                signalName: '2432_LK_K3',
                signalPos: { x: '740', y: '520' },
                trainPos: { x: '755', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K1',
                signalPos: { x: '740', y: '550' },
                trainPos: { x: '755', y: '550' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K2',
                signalPos: { x: '740', y: '580' },
                trainPos: { x: '755', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K4',
                signalPos: { x: '740', y: '610' },
                trainPos: { x: '755', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K6',
                signalPos: { x: '740', y: '630' },
                trainPos: { x: '755', y: '630' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_K8',
                signalPos: { x: '740', y: '650' },
                trainPos: { x: '755', y: '650' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_J151',
                signalPos: { x: '740', y: '690' },
                trainPos: { x: '785', y: '690' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_J152',
                signalPos: { x: '740', y: '710' },
                trainPos: { x: '770', y: '710' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_J154',
                signalPos: { x: '740', y: '740' },
                trainPos: { x: '770', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_J32',
                signalPos: { x: '740', y: '760' },
                trainPos: { x: '755', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '2432_LK_G3',
                signalPos: { x: '860', y: '520' },
                trainPos: { x: '845', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G1',
                signalPos: { x: '860', y: '550' },
                trainPos: { x: '845', y: '550' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G2',
                signalPos: { x: '860', y: '580' },
                trainPos: { x: '845', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G4',
                signalPos: { x: '860', y: '610' },
                trainPos: { x: '845', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G6',
                signalPos: { x: '860', y: '630' },
                trainPos: { x: '845', y: '630' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_G8',
                signalPos: { x: '860', y: '650' },
                trainPos: { x: '845', y: '650' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_H151',
                signalPos: { x: '900', y: '690' },
                trainPos: { x: '875', y: '690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_H152',
                signalPos: { x: '900', y: '710' },
                trainPos: { x: '870', y: '710' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_H154',
                signalPos: { x: '900', y: '740' },
                trainPos: { x: '870', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            //
            {
                signalName: '2432_LK_F13',
                signalPos: { x: '1060', y: '570' },
                trainPos: { x: '1075', y: '570' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_F101',
                signalPos: { x: '1060', y: '590' },
                trainPos: { x: '1075', y: '590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_F102',
                signalPos: { x: '1060', y: '610' },
                trainPos: { x: '1075', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_F18',
                signalPos: { x: '1060', y: '660' },
                trainPos: { x: '1075', y: '660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_F30',
                signalPos: { x: '1060', y: '740' },
                trainPos: { x: '1075', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2432_LK_E13',
                signalPos: { x: '1200', y: '570' },
                trainPos: { x: '1185', y: '570' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E101',
                signalPos: { x: '1200', y: '590' },
                trainPos: { x: '1185', y: '590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E102',
                signalPos: { x: '1200', y: '610' },
                trainPos: { x: '1185', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E18',
                signalPos: { x: '1180', y: '660' },
                trainPos: { x: '1165', y: '660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E30',
                signalPos: { x: '1180', y: '740' },
                trainPos: { x: '1165', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_E32',
                signalPos: { x: '1180', y: '760' },
                trainPos: { x: '1160', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            // ENTRY SIGNALS LODZ ZABIENIEC
            //
            {
                signalName: '2432_LK_A1',
                signalPos: { x: '1360', y: '590' },
                trainPos: { x: '1375', y: '590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2432_LK_A2',
                signalPos: { x: '1360', y: '610' },
                trainPos: { x: '1375', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łódź Kaliska',
                    prefix: 'LK',
                    pos: { x: 800, y: 480 },
                    posFlipped: { x: 800, y: 790 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 930, y: 535 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron III', width: 96, height: 20, pos: { x: 752, y: 525 } },
                    { label: 'Peron II', width: 96, height: 20, pos: { x: 752, y: 585 } },
                    { label: 'Peron I', width: 96, height: 13, pos: { x: 752, y: 655 } },
                    { label: 'Peron IV', width: 115, height: 13, pos: { x: 773, y: 671 } },
                    { label: 'Peron V', width: 136, height: 20, pos: { x: 752, y: 715 } },
                ],
                trackLabels: [
                    { text: '81', pos: { x: 525, y: 610 } },
                    { text: '207', pos: { x: 530, y: 650 } },
                    { text: '205', pos: { x: 530, y: 670 } },
                    { text: '203', pos: { x: 530, y: 690 } },
                    { text: '201', pos: { x: 530, y: 710 } },
                    { text: '202', pos: { x: 530, y: 730 } },
                    { text: '3', pos: { x: 800, y: 520 } },
                    { text: '1', pos: { x: 800, y: 550 } },
                    { text: '2', pos: { x: 800, y: 580 } },
                    { text: '4', pos: { x: 800, y: 610 } },
                    { text: '6', pos: { x: 800, y: 630 } },
                    { text: '8', pos: { x: 800, y: 650 } },
                    { text: '151', pos: { x: 820, y: 690 } },
                    { text: '152', pos: { x: 820, y: 710 } },
                    { text: '154', pos: { x: 820, y: 740 } },
                    { text: '32', pos: { x: 820, y: 760 } },
                    { text: '32', pos: { x: 980, y: 760 } },
                    { text: '32', pos: { x: 1120, y: 760 } },
                    { text: '13', pos: { x: 1130, y: 570 } },
                    { text: '101', pos: { x: 1130, y: 590 } },
                    { text: '102', pos: { x: 1130, y: 610 } },
                    { text: '18', pos: { x: 1120, y: 660 } },
                    { text: '30', pos: { x: 1120, y: 740 } },
                ]
            }
        ]
    },
    "LODZKALISKA_LODZZABIENIEC": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M1370,590 LR100',
                    'M1370,610 LR100',
                    ''
                ]
            }
        ],
        "SIGNALS": [], //~ NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": []
    },
    "2463_LZ_LODZZABIENIEC": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M1480,590 LR60 M1480,610 LR60 M1500,610 SWUP20 LR20 SWDN20',

                    'M1550,590 LR100 SPR10 LR50 SPR10 LR100 SPR10 LR100',
                    'M1550,610 LR100 SPR10 LR50 SPR10 LR100 SPR10 LR100',

                    'M1670,590 SWUP20 LR10 SWUP20 LR20 SPR10 LR100 SPR10 LR15 SWDN20',
                    'M1675,570 LR35 SPR10 LR100 SPR10 LR35 SWDN20 LR10 SWDN20 LR20 SWUP20',

                    'M1670,610 SWDN20 LR15 SWDN20 LR15 SPR10 LR100 SPR10 LR10 SWUP20',
                    'M1675,630 LR35 SPR10 LR100 SPR10 LR25 SWUP20',
                    '',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '2463_LZ_W',
                signalPos: { x: '1480', y: '590' },
                trainPos: { x: '1465', y: '590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_X',
                signalPos: { x: '1480', y: '610' },
                trainPos: { x: '1465', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_U',
                signalPos: { x: '1540', y: '590' },
                trainPos: { x: '1555', y: '590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_T',
                signalPos: { x: '1540', y: '610' },
                trainPos: { x: '1555', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_R',
                signalPos: { x: '1660', y: '590' },
                trainPos: { x: '1645', y: '590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_S',
                signalPos: { x: '1660', y: '610' },
                trainPos: { x: '1645', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2463_LZ_P',
                signalPos: { x: '1710', y: '550' },
                trainPos: { x: '1725', y: '550' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_O',
                signalPos: { x: '1710', y: '570' },
                trainPos: { x: '1725', y: '570' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_N',
                signalPos: { x: '1710', y: '590' },
                trainPos: { x: '1725', y: '590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_M',
                signalPos: { x: '1710', y: '610' },
                trainPos: { x: '1725', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_L',
                signalPos: { x: '1710', y: '630' },
                trainPos: { x: '1725', y: '630' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_K',
                signalPos: { x: '1710', y: '650' },
                trainPos: { x: '1725', y: '650' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //
            {
                signalName: '2463_LZ_C',
                signalPos: { x: '1830', y: '550' },
                trainPos: { x: '1815', y: '550' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_D',
                signalPos: { x: '1830', y: '570' },
                trainPos: { x: '1815', y: '570' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_E',
                signalPos: { x: '1830', y: '590' },
                trainPos: { x: '1815', y: '590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_F',
                signalPos: { x: '1830', y: '610' },
                trainPos: { x: '1815', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_G',
                signalPos: { x: '1830', y: '630' },
                trainPos: { x: '1815', y: '630' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_H',
                signalPos: { x: '1830', y: '650' },
                trainPos: { x: '1815', y: '650' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2463_LZ_B',
                signalPos: { x: '1930', y: '590' },
                trainPos: { x: '1945', y: '590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2463_LZ_A',
                signalPos: { x: '1930', y: '610' },
                trainPos: { x: '1945', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łódź Żabieniec',
                    prefix: 'LZ',
                    lcsControlledBy: 'Zgierz',
                    pos: { x: 1770, y: 505 },
                    posFlipped: { x: 1770, y: 695 }
                },
                platforms: [
                    { label: 'Peron II', width: 80, height: 10, pos: { x: 1560, y: 575 } },
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1560, y: 615 } },
                ],
                trackLabels: [
                    { text: '1c', pos: { x: 1600, y: 590 } },
                    { text: '2c', pos: { x: 1600, y: 610 } },
                    { text: '7', pos: { x: 1770, y: 550 } },
                    { text: '5', pos: { x: 1770, y: 570 } },
                    { text: '1', pos: { x: 1770, y: 590 } },
                    { text: '2', pos: { x: 1770, y: 610 } },
                    { text: '6', pos: { x: 1770, y: 630 } },
                    { text: '8', pos: { x: 1770, y: 650 } },
                ]
            }
        ]
    },
    "LODZZABIENIEC_ZGIERZ": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M1940,590 LR100',
                    'M1940,610 LR100',
                ]
            },
        ],
        "SIGNALS": [], //~ NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Radogoszcz Zachód',
                    pos: { x: 1990, y: 565 },
                    posFlipped: { x: 1990, y: 635 },
                    platforms: [
                        { pos: { x: 1965, y: 577.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1965, y: 615 }, width: 50, height: 7.5 },
                    ]
                }
            }
        ]
    },
    "5311_Zg_ZGIERZ": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    // TOR 1Z - T5 - SW6
                    'M2050,590 LR120 SPR10 LR100 SPR10 LR10 SWDN20',
                    // TOR 2Z - T3 - TOR 1K (Zgierz Polnoc)
                    'M2050,610 LR120 SPR10 LR100 SPR10 LR90',

                    // SW38/34 - SW37/31 - SW30ab/28ab - SW28cd/26 - T7 - SW4
                    'M2085,590 SWUP20 LR80 M2095,610 SWUP20 M2125,610 SWUP20 LR10 SWUP10 LR10 SWUP10 LR10 SPR10 LR100 SPR10 LR25 SWDN40',
                    // SW41/40 - SW39 - T1 - TOR 1G (Glinnik)
                    'M2070,590 SWDN20 LR10 SWDN20 LR80 SPR10 LR100 SPR10 LR90',
                    // SW32 - T4 - SW5ab - SW5cd/3 - SW2/1cd
                    'M2125,630 SWDN20 LR40 SPR10 LR100 SPR10 LR25 SWUP20 LR10 SWUP20 LR20 SWDN20',
                    // SW22 - T6 - SW7
                    'M2150,650 SWDN20 LR15 SPR10 LR100 SPR10 LR10 SWUP20',

                    // TOR 1M (Lodz Marysin) - SW35
                    'M2050,670 LR30 SWUP20 LR10 SWUP20 LR10 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '5311_Zg_T',
                signalPos: { x: '2050', y: '590' },
                trainPos: { x: '2035', y: '590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_S',
                signalPos: { x: '2050', y: '610' },
                trainPos: { x: '2035', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_R',
                signalPos: { x: '2050', y: '670' },
                trainPos: { x: '2035', y: '670' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
                trainPosDistance: [
                    // distance to signal from station "Lodz Marysin": ~ 6084m
                    { distanceToSignal: 5380, x: 1685, y: 790 },
                    { distanceToSignal: 5227, x: 1740, y: 790 },
                    { distanceToSignal: 4060, x: 1820, y: 790 },
                    { distanceToSignal: 3905, x: 1870, y: 790 },
                    { distanceToSignal: 2485, x: 1950, y: 790 },
                    { distanceToSignal: 2330, x: 2000, y: 790 },
                    { distanceToSignal: 1150, x: 2095, y: 790 },
                    { distanceToSignal: 0, x: 2035, y: 670 },
                ]
            },

            {
                signalName: '5311_Zg_K',
                signalPos: { x: '2170', y: '570' },
                trainPos: { x: '2185', y: '570' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_L',
                signalPos: { x: '2170', y: '590' },
                trainPos: { x: '2185', y: '590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_M',
                signalPos: { x: '2170', y: '610' },
                trainPos: { x: '2185', y: '610' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_N',
                signalPos: { x: '2170', y: '630' },
                trainPos: { x: '2185', y: '630' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_O',
                signalPos: { x: '2170', y: '650' },
                trainPos: { x: '2185', y: '650' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_P',
                signalPos: { x: '2170', y: '670' },
                trainPos: { x: '2185', y: '670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '5311_Zg_H',
                signalPos: { x: '2290', y: '570' },
                trainPos: { x: '2275', y: '570' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_G',
                signalPos: { x: '2290', y: '590' },
                trainPos: { x: '2275', y: '590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_F',
                signalPos: { x: '2290', y: '610' },
                trainPos: { x: '2275', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_E',
                signalPos: { x: '2290', y: '630' },
                trainPos: { x: '2275', y: '630' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_D',
                signalPos: { x: '2290', y: '650' },
                trainPos: { x: '2275', y: '650' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_C',
                signalPos: { x: '2290', y: '670' },
                trainPos: { x: '2275', y: '670' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '5311_Zg_A',
                signalPos: { x: '2380', y: '610' },
                trainPos: { x: '2395', y: '610' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 3827m
                    { distanceToSignal: 1240, x: 25, y: 1340 },
                    { distanceToSignal: 1065, x: 2440, y: 610 },
                    { distanceToSignal: 0, x: 2395, y: 610 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5311_Zg_B',
                signalPos: { x: '2380', y: '630' },
                trainPos: { x: '2395', y: '630' },
                trainPosDistance: [
                    // distance to signal from station "Glinnik": ~ 6300m
                    { distanceToSignal: 5325, x: 250, y: 1820 }, // leaving station / before po "Glinnik Wies"
                    { distanceToSignal: 5170, x: 200, y: 1820 }, // at po "Glinnik Wies"
                    { distanceToSignal: 3465, x: 100, y: 1820 }, // after po "Glinnik Wies" / before po "Smardzew"
                    { distanceToSignal: 3305, x: 50, y: 1820 }, // at po "Smardzew"
                    { distanceToSignal: 2000, x: 20, y: 1820 }, // after po "Smardzew" / track breaker 1
                    { distanceToSignal: 675, x: 2440, y: 630 }, // track breaker 2 / at po "Zgierz Rudunki"
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Zgierz',
                    prefix: 'Zg',
                    pos: { x: 2230, y: 535 },
                    posFlipped: { x: 2230, y: 705 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 2098, y: 660 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 2218, y: 555 } },
                    { label: 'Peron II', width: 60, height: 10, pos: { x: 2218, y: 595 } },
                    { label: 'Peron III', width: 60, height: 10, pos: { x: 2218, y: 635 } },
                ],
                trackLabels: [
                    { text: '7', pos: { x: 2230, y: 570 } },
                    { text: '5', pos: { x: 2230, y: 590 } },
                    { text: '3', pos: { x: 2230, y: 610 } },
                    { text: '1', pos: { x: 2230, y: 630 } },
                    { text: '4', pos: { x: 2230, y: 650 } },
                    { text: '6', pos: { x: 2230, y: 670 } },
                ]
            },
        ]
    },

    "LODZKALISKA_LODZCHOJNY": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M280,710 LL100 SPL20 LL100 SPL10 LL30 UTRD300 LR30 SPR10 LR100',
                    'M280,730 LL100 SPL20 LL100 SPL10 LL10 UTRD260 LR10 SPR10 LR100',
                ]
            },
        ],
        "SIGNALS": [
            // WRONG ORDER - NOW RIGHT TO LEFT TR/BR/TL/BL
            {
                signalName: 'L25_33',
                signalPos: { x: '170', y: '710' },
                trainPos: { x: '185', y: '710' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L25_32N',
                signalPos: { x: '170', y: '730' },
                trainPos: { x: '185', y: '730' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L25_33N',
                signalPos: { x: '170', y: '710' },
                trainPos: { x: '155', y: '710' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L25_32',
                signalPos: { x: '170', y: '730' },
                trainPos: { x: '155', y: '730' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },

            {
                signalName: 'L25_47',
                signalPos: { x: '50', y: '710' },
                trainPos: { x: '65', y: '710' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L25_46N',
                signalPos: { x: '50', y: '730' },
                trainPos: { x: '65', y: '730' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L25_47N',
                signalPos: { x: '50', y: '1010' },
                trainPos: { x: '65', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L25_46',
                signalPos: { x: '50', y: '990' },
                trainPos: { x: '65', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '21', pos: { x: 230, y: 710 } },
                    { text: '32', pos: { x: 230, y: 730 } },
                    { text: '33', pos: { x: 110, y: 710 } },
                    { text: '46', pos: { x: 110, y: 730 } },
                    { text: '62', pos: { x: 110, y: 990 } },
                    { text: '47', pos: { x: 110, y: 1010 } },
                ]
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Pabianicka',
                    pos: { x: 110, y: 680 },
                    posFlipped: { x: 110, y: 755 },
                    platforms: [
                        { pos: { x: 85, y: 697.5 }, width: 50, height: 7.5 },
                        { pos: { x: 85, y: 735 }, width: 50, height: 7.5 },
                    ]
                }
            },
        ]
    },
    "2426_LCH_LODZCHOJNY": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M170,990 LR10 SPR10 LR90 SPR10 LR100 SPR10 LR100',
                    'M170,1010 LR10 SPR10 LR60 SPR10 LR100 SPR10 LR130',

                    'M205,1010 SWUP20 LR10 SWUP40 LR40 M250,970 SWUP20 LR25 SPR10 LR100 SPR10 LR10 SWDN20',
                    'M235,990 SWUP20 LR40 SPR10 LR100 SPR10 LR25 SWDN20',

                    'M215,1010 SWDN20 LR30 SPR10 LR100 SPR10 LR15 SWUP20 LR20 SWUP20',

                    'M440,990 SWDN20 LR10 SWDN200 LR40',
                    'M475,990 SWDN200 LR20'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '2426_LCH_X',
                signalPos: { x: '170', y: '990' },
                trainPos: { x: '155', y: '990' },
                signalDirectionOnMap: 'right',
                signalType: 'station_sz'
            },
            {
                signalName: '2426_LCH_A',
                signalPos: { x: '170', y: '1010' },
                trainPos: { x: '155', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_X22',
                signalPos: { x: '180', y: '990' },
                trainPos: { x: '195', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_A12',
                signalPos: { x: '180', y: '1010' },
                trainPos: { x: '195', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },

            {
                signalName: '2426_LCH_D',
                signalPos: { x: '280', y: '950' },
                trainPos: { x: '295', y: '950' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_C',
                signalPos: { x: '280', y: '970' },
                trainPos: { x: '295', y: '970' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_B',
                signalPos: { x: '280', y: '990' },
                trainPos: { x: '295', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_F',
                signalPos: { x: '250', y: '1010' },
                trainPos: { x: '265', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_sz'
            },
            {
                signalName: '2426_LCH_E',
                signalPos: { x: '250', y: '1030' },
                trainPos: { x: '265', y: '1030' },
                signalDirectionOnMap: 'left',
                signalType: 'station_sz'
            },

            {
                signalName: '2426_LCH_G',
                signalPos: { x: '400', y: '950' },
                trainPos: { x: '385', y: '950' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_H',
                signalPos: { x: '400', y: '970' },
                trainPos: { x: '385', y: '970' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_M',
                signalPos: { x: '400', y: '990' },
                trainPos: { x: '385', y: '990' },
                signalDirectionOnMap: 'right',
                signalType: 'station_sz'
            },
            {
                signalName: '2426_LCH_J',
                signalPos: { x: '370', y: '1010' },
                trainPos: { x: '355', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_K',
                signalPos: { x: '370', y: '1030' },
                trainPos: { x: '355', y: '1030' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },

            {
                signalName: '2426_LCH_R',
                signalPos: { x: '500', y: '990' },
                trainPos: { x: '515', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_S',
                signalPos: { x: '500', y: '1010' },
                trainPos: { x: '515', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2426_LCH_P',
                signalPos: { x: '500', y: '1190' },
                trainPos: { x: '515', y: '1190' },
                trainPosDistance: [
                    { distanceToSignal: 2860, x: 705, y: 1190 },
                    { distanceToSignal: 2750, x: 695, y: 1190 },
                    { distanceToSignal: 2250, x: 660, y: 1190 },
                    { distanceToSignal: 2040, x: 625, y: 1190 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2426_LCH_O',
                signalPos: { x: '500', y: '1210' },
                trainPos: { x: '515', y: '1210' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łódź Chojny',
                    prefix: 'LCh',
                    pos: { x: 350, y: 920 },
                    posFlipped: { x: 350, y: 1060 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 410, y: 1020 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron IV', width: 60, height: 7.5, pos: { x: 300, y: 972.5 } },
                    { label: 'Peron III', width: 60, height: 7.5, pos: { x: 300, y: 992.5 } },
                    { label: 'Peron I', width: 35, height: 7.5, pos: { x: 262, y: 1000 } },
                ],
                trackLabels: [
                    { text: '6', pos: { x: 340, y: 950 } },
                    { text: '4', pos: { x: 340, y: 970 } },
                    { text: '2', pos: { x: 340, y: 990 } },
                    { text: '1', pos: { x: 310, y: 1010 } },
                    { text: '3', pos: { x: 310, y: 1030 } },
                ]
            },
        ]
    },
    "LODZCHOJNY_2427_LD_LODZDABROWA_LODZFABRYCZNA": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M535,940 DOT5-5-11 SPR20 LR100',
                    'M535,960 DOT5-5-11 SPR20 LR100',

                    'M510,990 LR250',
                    'M510,1010 LR100 SPR10 LR30 SPR10 LR100',
                    'M520,1030 DOT5-5-10 SPR10 LR10 SWUP20'
                ]
            },
        ],
        "SIGNALS": [
            //~ Lodz Dabrowa
            {
                signalName: '2427_LD_A',
                signalPos: { x: '620', y: '1010' },
                trainPos: { x: '605', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '2427_LD_B',
                signalPos: { x: '625', y: '1030' },
                trainPos: { x: '610', y: '1030' },
                signalDirectionOnMap: 'right',
                signalType: 'apo_red-green',
            },
            {
                signalName: '2427_LD_C',
                signalPos: { x: '650', y: '1010' },
                trainPos: { x: '665', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'apo_red-green',
            },
            //~ Lodz Fabryczna
            {
                signalName: '2457_LW_B2',
                signalPos: { x: '650', y: '940' },
                trainPos: { x: '635', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_B1',
                signalPos: { x: '650', y: '960' },
                trainPos: { x: '635', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_C2',
                signalPos: { x: '650', y: '940' },
                trainPos: { x: '665', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_C1',
                signalPos: { x: '650', y: '960' },
                trainPos: { x: '665', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Dąbrowa',
                    pos: { x: 560, y: 1040 },
                    posFlipped: { x: 560, y: 1040 },
                    platforms: [
                        { pos: { x: 535, y: 995 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Zarzew',
                    pos: { x: 710, y: 1035 },
                    posFlipped: { x: 710, y: 1035 },
                    platforms: [
                        { pos: { x: 685, y: 977.5 }, width: 50, height: 7.5 },
                        { pos: { x: 685, y: 1015 }, width: 50, height: 7.5 },
                    ]
                }
            },
        ]
    },
    "2457_LW_LODZWIDZEW": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    // TOR 1M (Marysin) - T4
                    'M770,910 LR150 SPR10 LR130 SPR10 LR60 SWDN30',
                    // TOR 2F (Fabryczna) - T2
                    'M770,940 LR150 SPR10 LR130 SPR10 LR150',
                    // TOR 1F (Fabryczna) - T1
                    'M770,960 LR150 SPR10 LR130 SPR10 LR150',
                    // TOR 1C (Chojny) - T3
                    'M770,990 LR150 SPR10 LR130 SPR10 LR40 SWDN20 LR105',
                    // TOR 2C (Chojny) - T5
                    'M770,1010 LR150 SPR10 LR130 SPR10 LR30 SWDN20 LR115',

                    // SW6/7 - SW8/9 - SW10/11 - SW14/17cd - SW17ab/18cd - SW18ab - SW21 - T104/T102
                    'M790,1010 SWUP20 LR10 SWUP30 LR10 SWUP20 LR25 SWUP30 LR10 SWUP20 LR10 SWUP20 LR10 SWUP60 LR50 SPR10 LR100 SPR10 LR40 SWDN100',
                    'M935,810 SWDN20 LR10 SPR10 LR100 SPR10 LR10 SWUP20',

                    // T8 / T6
                    'M890,870 LR30 SPR10 LR130 SPR10 LR10 SWDN20',
                    'M875,890 LR45 SPR10 LR130 SPR10 LR25 SWDN20',

                    // SW12/13 - SW15/16 - SW19/20 - SW27/28 - T7
                    'M835,940 SWDN20 LR10 SWDN30 LR10 SWDN20 LR10 SWDN30 LR35 SPR10 LR130 SPR10 LR10 SWUP30',

                    // SW22/23 - SW25/26
                    'M890,890 SWDN20 LR10 SWDN30',
                    // SW49/50 - SW51/53 - SW56/57 - SW60/61
                    'M1145,940 SWDN20 LR10 SWDN50 LR35 SWDN20',
                    // SW52/54 - SW58/59 - SW62/63
                    'M1150,1030 SWUP20 LR25 SWUP50 LR10 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            // ENTRY SIGNALS LEFT SIDE
            {
                signalName: '2457_LW_A',
                signalPos: { x: '770', y: '910' },
                trainPos: { x: '755', y: '910' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
                trainPosDistance: [
                    { distanceToSignal: 2020, x: 1280, y: 790, switchDirection: true },
                    { distanceToSignal: 1870, x: 1230, y: 790, switchDirection: true },
                    { distanceToSignal: 1500, x: 1145, y: 790, switchDirection: true },
                    { distanceToSignal: 0, x: 755, y: 910, switchDirection: false },
                ]
            },
            {
                signalName: '2457_LW_D',
                signalPos: { x: '770', y: '940' },
                trainPos: { x: '755', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_E',
                signalPos: { x: '770', y: '960' },
                trainPos: { x: '755', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_G',
                signalPos: { x: '770', y: '990' },
                trainPos: { x: '755', y: '990' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_H',
                signalPos: { x: '770', y: '1010' },
                trainPos: { x: '755', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // EXIT SIGNALS LEFT SIDE
            {
                signalName: '2457_LW_N104',
                signalPos: { x: '950', y: '810' },
                trainPos: { x: '965', y: '810' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_N102',
                signalPos: { x: '950', y: '830' },
                trainPos: { x: '965', y: '830' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_M8',
                signalPos: { x: '920', y: '870' },
                trainPos: { x: '935', y: '870' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_M6',
                signalPos: { x: '920', y: '890' },
                trainPos: { x: '935', y: '890' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_M4',
                signalPos: { x: '920', y: '910' },
                trainPos: { x: '935', y: '910' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L2',
                signalPos: { x: '920', y: '940' },
                trainPos: { x: '935', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L1',
                signalPos: { x: '920', y: '960' },
                trainPos: { x: '935', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L3',
                signalPos: { x: '920', y: '990' },
                trainPos: { x: '935', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L5',
                signalPos: { x: '920', y: '1010' },
                trainPos: { x: '935', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_L7',
                signalPos: { x: '920', y: '1040' },
                trainPos: { x: '935', y: '1040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // EXIT SIGNALS RIGHT SIDE
            {
                signalName: '2457_LW_P104',
                signalPos: { x: '1070', y: '810' },
                trainPos: { x: '1055', y: '810' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_P102',
                signalPos: { x: '1070', y: '830' },
                trainPos: { x: '1055', y: '830' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_R8',
                signalPos: { x: '1070', y: '870' },
                trainPos: { x: '1055', y: '870' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_R6',
                signalPos: { x: '1070', y: '890' },
                trainPos: { x: '1055', y: '890' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_R4',
                signalPos: { x: '1070', y: '910' },
                trainPos: { x: '1020', y: '910' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S2',
                signalPos: { x: '1070', y: '940' },
                trainPos: { x: '1020', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S1',
                signalPos: { x: '1070', y: '960' },
                trainPos: { x: '1020', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S3',
                signalPos: { x: '1070', y: '990' },
                trainPos: { x: '1020', y: '990' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S5',
                signalPos: { x: '1070', y: '1010' },
                trainPos: { x: '1020', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_S7',
                signalPos: { x: '1070', y: '1040' },
                trainPos: { x: '1020', y: '1040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // ENTRY SIGNALS RIGHT SIDE
            {
                signalName: '2457_LW_W',
                signalPos: { x: '1220', y: '940' },
                trainPos: { x: '1235', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_V',
                signalPos: { x: '1220', y: '960' },
                trainPos: { x: '1235', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '2457_LW_U',
                signalPos: { x: '1220', y: '1010' },
                trainPos: { x: '1235', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2457_LW_T',
                signalPos: { x: '1220', y: '1030' },
                trainPos: { x: '1235', y: '1030' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łódź Widzew',
                    prefix: 'LW',
                    pos: { x: 995, y: 785 },
                    posFlipped: { x: 995, y: 1075 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 805, y: 1020 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron III', width: 90, height: 20, pos: { x: 932, y: 915 } },
                    { label: 'Peron II', width: 90, height: 20, pos: { x: 932, y: 965 } },
                    { label: 'Peron I', width: 90, height: 20, pos: { x: 932, y: 1015 } },
                ],
                trackLabels: [
                    { text: '104', pos: { x: 1010, y: 810 } },
                    { text: '102', pos: { x: 1010, y: 830 } },
                    { text: '8', pos: { x: 995, y: 870 } },
                    { text: '6', pos: { x: 995, y: 890 } },
                    { text: '4', pos: { x: 995, y: 910 } },
                    { text: '2', pos: { x: 995, y: 940 } },
                    { text: '1', pos: { x: 995, y: 960 } },
                    { text: '3', pos: { x: 995, y: 990 } },
                    { text: '5', pos: { x: 995, y: 1010 } },
                    { text: '7', pos: { x: 995, y: 1040 } },
                ]
            }
        ]
    },
    "2437_LM_LODZMARYSIN": {
        "TRACKS": [
            {
                // TRACKS Lodz Widzew - Lodz Marysin - Zgierz
                color: 'gray',
                commands: [
                    'M760,910 LL100 LINE650,900',

                    'M1130,800 LINE1140,790 LR100 LR50 LR80',

                    'M1590,790 LR100 LR50 LR80 LR50 LR80 LR50 LR100 LINE2110,780',

                    'M2040,670 LL100 LINE1930,680',
                ]
            },
            {
                // LODZ MARYSIN
                color: 'white',
                commands: [
                    'M1380,790 LR40 SPR10 LR100 SPR10 LR40',
                    'M1400,790 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '2437_LM_A',
                signalPos: { x: '1380', y: '790' },
                trainPos: { x: '1365', y: '790' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
                trainPosDistance: [
                    { distanceToSignal: 4912, x: 775, y: 910, switchDirection: true },
                    { distanceToSignal: 3700, x: 665, y: 910, switchDirection: true },
                    { distanceToSignal: 3045, x: 1230, y: 790, switchDirection: false },
                    { distanceToSignal: 2890, x: 1280, y: 790, switchDirection: false },
                    { distanceToSignal: 0, x: 1365, y: 790, switchDirection: false },
                ]
            },

            {
                signalName: '2437_LM_D',
                signalPos: { x: '1420', y: '790' },
                trainPos: { x: '1435', y: '790' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2437_LM_C',
                signalPos: { x: '1420', y: '810' },
                trainPos: { x: '1435', y: '810' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '2437_LM_E',
                signalPos: { x: '1540', y: '790' },
                trainPos: { x: '1525', y: '790' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2437_LM_F',
                signalPos: { x: '1540', y: '810' },
                trainPos: { x: '1525', y: '810' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '2437_LM_H',
                signalPos: { x: '1580', y: '790' },
                trainPos: { x: '1945', y: '670' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
                //~ distance: 6243m
                trainPosDistance: [
                    { distanceToSignal: 4400, x: 1945, y: 670 },
                    { distanceToSignal: 3480, x: 2000, y: 790 },
                    { distanceToSignal: 3330, x: 1950, y: 790 },
                    { distanceToSignal: 1910, x: 1870, y: 790 },
                    { distanceToSignal: 1750, x: 1820, y: 790 },
                    { distanceToSignal: 590, x: 1740, y: 790 }, // in front of po
                    { distanceToSignal: 430, x: 1690, y: 790 }, // at po
                    { distanceToSignal: 0, x: 1595, y: 790 }, // in front of signal
                ]
            },
        ],
        "ANNOTATIONS": [
            // Station Lodz Marysin
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łódź Marysin',
                    prefix: 'LM',
                    lcsControlledBy: 'Łódź Widzew',
                    pos: { x: 1480, y: 745 },
                    posFlipped: { x: 1480, y: 855 }
                },
                platforms: [
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 1432, y: 775 } },
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 1432, y: 815 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1480, y: 790 } },
                    { text: '3', pos: { x: 1480, y: 810 } },
                ]
            },
            // po Lodz Stoki
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Stoki',
                    pos: { x: 1255, y: 765 },
                    posFlipped: { x: 1255, y: 800 },
                    platforms: [
                        { pos: { x: 1230, y: 777.5 }, width: 50, height: 7.5 },
                    ]
                }
            },
            // po Lodz Warszawska
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Warszawska',
                    pos: { x: 1715, y: 770 },
                    posFlipped: { x: 1715, y: 820 },
                    platforms: [
                        { pos: { x: 1690, y: 795 }, width: 50, height: 7.5 },
                    ]
                }
            },
            // po Lodz Arturowek
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Arturówek',
                    pos: { x: 1845, y: 770 },
                    posFlipped: { x: 1845, y: 820 },
                    platforms: [
                        { pos: { x: 1820, y: 795 }, width: 50, height: 7.5 },
                    ]
                }
            },
            // po Lodz Radogoszcz Wschod
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Radogoszcz Wschód',
                    pos: { x: 1975, y: 820 },
                    posFlipped: { x: 1975, y: 770 },
                    platforms: [
                        { pos: { x: 1950, y: 795 }, width: 50, height: 10 },
                    ]
                }
            },
        ]
    },
    "2439_LOA_B_C_LODZOLECHOW": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M510,1190 LR100',
                    'M510,1210 LR100',

                    'M1230,1010 LR100',
                    'M1230,1030 LR100',

                    'M1900,1130 LR100 SWUP130 LR115',
                    'M1900,1150 LR115 SWUP130 LR100',

                ]
            },
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M1265,1050 DOT5-5-19 LR10 SPR10 LR10 UTLU20',
                    'M1265,1070 DOT5-5-21 LR10 SPR10 LR10 UTLU60',

                    'M1265,1090 DOT5-5-36 SPR5 LR2.5 SPR25 LR2.5 SPR5 DOT5-5-10 LR15 SPR10 LR20 SWDN40',
                    'M1265,1110 DOT5-5-36 SPR5 LR2.5 SPR25 LR2.5 SPR5 DOT5-5-9 LR15 SPR10 LR15 SWDN40',
                ]
            },
            {
                color: 'white',
                commands: [
                    // Beginning on the left all the way up to Lodz Widzew
                    'M620,1190 LR180 SPR10 LR240 SPR10 LR100 SPR10 LR100 SPR10 LR220 SPR10 LR110 UTLU160 LL100 SPL10 LL160',
                    'M620,1210 LR180 SPR10 LR210 SPR10 LR120 SPR10 LR110 SPR10 LR210 SPR10 LR135 UTLU200 LL115 SPL10 LL160',
                    'M1450,1010 CROSS',

                    // first three switches left side
                    'M640,1210 SWUP20 M655,1210 SWUP20 LR35 SWDN20',

                    // switch between LOB and LOC and TRACK 24 AND CROSS SWITCH
                    'M1095,1210 SWUP20 LR30 SWUP20 LR25 SPR10 LR112.5 SWUP20 LR112.5 SPR10 LR10 SWDN40 LR10 CROSS',

                    // Tracks towards Galkowek
                    'M1465,1190 SWUP60 LR20 SPR10 LR117.5 SPR25 LR117.5 SPR10 LR120',
                    'M1480,1210 SWUP60 LR15 SPR10 LR107.5 SPR25 LR127.5 SPR10 LR110',
                    'M1810,1130 CROSS',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '2439_LOA_C',
                signalPos: { x: '620', y: '1190' },
                trainPos: { x: '605', y: '1190' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOA_D',
                signalPos: { x: '620', y: '1210' },
                trainPos: { x: '605', y: '1210' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOA_E12',
                signalPos: { x: '800', y: '1190' },
                trainPos: { x: '815', y: '1190' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // 2210m
                    { distanceToSignal: 1750, x: 1065, y: 1190 }, // in front of opposite signal
                    { distanceToSignal: 1500, x: 955, y: 1190 }, // past opposite signal / front of po
                    { distanceToSignal: 750, x: 905, y: 1190 }, // at po
                ]
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOA_E11',
                signalPos: { x: '800', y: '1210' },
                trainPos: { x: '815', y: '1210' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // LODZ OLECHOW [LOB]
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOB_N12',
                signalPos: { x: '1060', y: '1190' },
                trainPos: { x: '1045', y: '1190' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOB_N11',
                signalPos: { x: '1030', y: '1210' },
                trainPos: { x: '1015', y: '1210' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 2200, x: 710, y: 1210 },
                    { distanceToSignal: 1700, x: 755, y: 1210 },
                    { distanceToSignal: 1570, x: 795, y: 1210 },
                    { distanceToSignal: 830, x: 905, y: 1210 },
                    { distanceToSignal: 625, x: 955, y: 1210 },
                ]
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOB_O24',
                signalPos: { x: '1160', y: '1170' },
                trainPos: { x: '1175', y: '1170' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOB_O22',
                signalPos: { x: '1160', y: '1190' },
                trainPos: { x: '1175', y: '1190' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 1270, x: 1410, y: 1190 },
                    { distanceToSignal: 1060, x: 1355, y: 1190 },
                    { distanceToSignal: 940, x: 1285, y: 1190 },
                ]
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOB_O21',
                signalPos: { x: '1150', y: '1210' },
                trainPos: { x: '1165', y: '1210' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // LODZ OLECHOW [LOC]
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_T22',
                signalPos: { x: '1280', y: '1190' },
                trainPos: { x: '1265', y: '1190' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_T21',
                signalPos: { x: '1280', y: '1210' },
                trainPos: { x: '1265', y: '1210' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 1160, x: 1140, y: 1210 },
                ]
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_T24',
                signalPos: { x: '1410', y: '1150' },
                trainPos: { x: '1395', y: '1150' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '2439_LOC_V32',
                signalPos: { x: '1490', y: '1130' },
                trainPos: { x: '1505', y: '1130' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 1080, x: 1775, y: 1130 },
                    { distanceToSignal: 720, x: 1650, y: 1130 },
                    { distanceToSignal: 500, x: 1525, y: 1130 },
                ]
            },
            {
                signalName: '2439_LOC_V31',
                signalPos: { x: '1500', y: '1150' },
                trainPos: { x: '1515', y: '1150' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_V41',
                signalPos: { x: '1500', y: '1190' },
                trainPos: { x: '1515', y: '1190' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // 1850m
                    { distanceToSignal: 1600, x: 1445, y: 1030, switchDirection: true },
                    { distanceToSignal: 1160, x: 1505, y: 1030, switchDirection: true },
                    { distanceToSignal: 730, x: 1615, y: 1030, switchDirection: true },
                ]
            },
            {
                signalName: '2439_LOC_V42',
                signalPos: { x: '1490', y: '1210' },
                trainPos: { x: '1505', y: '1210' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // SIGNALS FROM LODZ WIDZEW
            {
                signalName: '2439_LOC_Y2',
                signalPos: { x: '1340', y: '1010' },
                trainPos: { x: '1325', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_Y1',
                signalPos: { x: '1340', y: '1030' },
                trainPos: { x: '1325', y: '1030' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_X2',
                signalPos: { x: '1340', y: '1010' },
                trainPos: { x: '1355', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // 466m
                    { distanceToSignal: 80, x: 1420, y: 1010 },
                ]
            },
            {
                signalName: '2439_LOC_X1',
                signalPos: { x: '1340', y: '1030' },
                trainPos: { x: '1355', y: '1030' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                //? NPT SIGNAL
                signalName: '2439_LOC_W43',
                signalPos: { x: '1470', y: '1050' },
                trainPos: { x: '1455', y: '1050' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //? NPT SIGNAL
                signalName: '2439_LOC_W44',
                signalPos: { x: '1490', y: '1070' },
                trainPos: { x: '1475', y: '1070' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_W42',
                signalPos: { x: '1510', y: '1010' },
                trainPos: { x: '1525', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // DISTANCE FROM T21: 2000m
                    { distanceToSignal: 1660, x: 1410, y: 1210, switchDirection: true },
                    { distanceToSignal: 1470, x: 1435, y: 1210, switchDirection: true },
                    { distanceToSignal: 1260, x: 1485, y: 1210, switchDirection: true },
                    { distanceToSignal: 540, x: 1630, y: 1210, switchDirection: true },
                ]
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_W41',
                signalPos: { x: '1510', y: '1030' },
                trainPos: { x: '1525', y: '1030' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    // DISTANCE FROM T21: 1950
                    { distanceToSignal: 1610, x: 1410, y: 1210, switchDirection: true },
                    { distanceToSignal: 1470, x: 1435, y: 1210, switchDirection: true },
                    { distanceToSignal: 1160, x: 1495, y: 1190, switchDirection: true },
                    { distanceToSignal: 500, x: 1615, y: 1190, switchDirection: true },
                    // lower 625 -> return default trainPos
                ]
            },
            // SIGNALS FROM GALKOWEG
            {
                signalName: '2439_LOC_W34',
                signalPos: { x: '1780', y: '1090' },
                trainPos: { x: '1765', y: '1090' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_W33',
                signalPos: { x: '1770', y: '1110' },
                trainPos: { x: '1755', y: '1110' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '2439_LOC_W32',
                signalPos: { x: '1770', y: '1130' },
                trainPos: { x: '1755', y: '1130' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_W31',
                signalPos: { x: '1780', y: '1150' },
                trainPos: { x: '1765', y: '1150' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_Z2',
                signalPos: { x: '1890', y: '1130' },
                trainPos: { x: '1905', y: '1130' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                //~ DISTANCE POSITIONING
                signalName: '2439_LOC_Z1',
                signalPos: { x: '1890', y: '1150' },
                trainPos: { x: '1905', y: '1150' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Olechów Wiadukt',
                    pos: { x: 730, y: 1160 },
                    posFlipped: { x: 730, y: 1240 },
                    platforms: [
                        { pos: { x: 705, y: 1177.5 }, width: 50, height: 7.5 },
                        { pos: { x: 705, y: 1215 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Olechów Zachód',
                    pos: { x: 930, y: 1160 },
                    posFlipped: { x: 930, y: 1240 },
                    platforms: [
                        { pos: { x: 905, y: 1177.5 }, width: 50, height: 7.5 },
                        { pos: { x: 905, y: 1215 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Olechów Wschód',
                    pos: { x: 1380, y: 1130 },
                    posFlipped: { x: 1380, y: 1240 },
                    platforms: [
                        { pos: { x: 1355, y: 1177.5 }, width: 55, height: 7.5 },
                        { pos: { x: 1355, y: 1215 }, width: 55, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Łódź Andrzejów Szosa',
                    pos: { x: 1400, y: 990 },
                    posFlipped: { x: 1400, y: 985 },
                    platforms: [
                        { pos: { x: 1355, y: 997.5 }, width: 90, height: 7.5 },
                        { pos: { x: 1355, y: 1035 }, width: 90, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2', pos: { x: 730, y: 1190 } },
                    { text: '1', pos: { x: 730, y: 1210 } },
                    { text: '12', pos: { x: 930, y: 1190 } },
                    { text: '11', pos: { x: 930, y: 1210 } },
                    { text: '24', pos: { x: 1230, y: 1170 } },
                    { text: '22a', pos: { x: 1220, y: 1190 } },
                    { text: '21a', pos: { x: 1215, y: 1210 } },
                    { text: '24', pos: { x: 1350, y: 1150 } },
                    { text: '22b', pos: { x: 1385, y: 1190 } },
                    { text: '21b', pos: { x: 1385, y: 1210 } },
                ]
            }
        ]
    },
    "LODZWIDZEW_LODZOLECHOW_GALKOWEG": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M1230,940 ABS100-20-2 SPR90 ABS100-20-5',
                    'M1230,960 ABS100-20-2 SPR90 ABS100-20-5'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L17_82N',
                signalPos: { x: '1340', y: '940' },
                trainPos: { x: '1325', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_81',
                signalPos: { x: '1340', y: '960' },
                trainPos: { x: '1325', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_82',
                signalPos: { x: '1340', y: '940' },
                trainPos: { x: '1355', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_81N',
                signalPos: { x: '1340', y: '960' },
                trainPos: { x: '1355', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //
            // after LODZ ANDRZEJOW
            //
            {
                signalName: 'L17_124N',
                signalPos: { x: '1650', y: '940' },
                trainPos: { x: '1635', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_121',
                signalPos: { x: '1650', y: '960' },
                trainPos: { x: '1635', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_124',
                signalPos: { x: '1650', y: '940' },
                trainPos: { x: '1665', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_121N',
                signalPos: { x: '1650', y: '960' },
                trainPos: { x: '1665', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //
            {
                signalName: 'L17_138N',
                signalPos: { x: '1770', y: '940' },
                trainPos: { x: '1755', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_137',
                signalPos: { x: '1770', y: '960' },
                trainPos: { x: '1755', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_138',
                signalPos: { x: '1770', y: '940' },
                trainPos: { x: '1785', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_137N',
                signalPos: { x: '1770', y: '960' },
                trainPos: { x: '1785', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            //
            {
                signalName: 'L17_152N',
                signalPos: { x: '1890', y: '940' },
                trainPos: { x: '1875', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_151',
                signalPos: { x: '1890', y: '960' },
                trainPos: { x: '1875', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_152',
                signalPos: { x: '1890', y: '940' },
                trainPos: { x: '1905', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_151N',
                signalPos: { x: '1890', y: '960' },
                trainPos: { x: '1905', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            //
            {
                signalName: 'L17_166N',
                signalPos: { x: '2010', y: '940' },
                trainPos: { x: '1995', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_167',
                signalPos: { x: '2010', y: '960' },
                trainPos: { x: '1995', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_166',
                signalPos: { x: '2010', y: '940' },
                trainPos: { x: '2025', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L17_167N',
                signalPos: { x: '2010', y: '960' },
                trainPos: { x: '2025', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Bedoń',
                    pos: { x: 1710, y: 910 },
                    posFlipped: { x: 1710, y: 990 },
                    platforms: [
                        { pos: { x: 1685, y: 927.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1685, y: 965 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Justynów',
                    pos: { x: 1950, y: 910 },
                    posFlipped: { x: 1950, y: 990 },
                    platforms: [
                        { pos: { x: 1925, y: 927.6 }, width: 50, height: 7.5 },
                        { pos: { x: 1925, y: 965 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '82', pos: { x: 1280, y: 940 } },
                    { text: '67', pos: { x: 1280, y: 960 } },
                    { text: '102', pos: { x: 1400, y: 940 } },
                    { text: '81', pos: { x: 1400, y: 960 } },
                    // LA
                    { text: '124', pos: { x: 1590, y: 940 } },
                    { text: '107', pos: { x: 1590, y: 960 } },
                    { text: '138', pos: { x: 1710, y: 940 } },
                    { text: '121', pos: { x: 1710, y: 960 } },
                    { text: '152', pos: { x: 1830, y: 940 } },
                    { text: '137', pos: { x: 1830, y: 960 } },
                    { text: '166', pos: { x: 1950, y: 940 } },
                    { text: '151', pos: { x: 1950, y: 960 } },
                    { text: '180', pos: { x: 2070, y: 940 } },
                    { text: '167', pos: { x: 2070, y: 960 } },
                ]
            },
        ]
    },
    "2422_LA_LODZADRZEJOW": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M1460,940 LR70 M1460,960 LR70',
                    'M1480,940 SWDN20 LR20 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '2422_LA_A',
                signalPos: { x: '1460', y: '940' },
                trainPos: { x: '1445', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2422_LA_B',
                signalPos: { x: '1460', y: '960' },
                trainPos: { x: '1445', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '2422_LA_H',
                signalPos: { x: '1530', y: '940' },
                trainPos: { x: '1545', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '2422_LA_G',
                signalPos: { x: '1530', y: '960' },
                trainPos: { x: '1545', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łódź Andrzejów',
                    prefix: 'LA',
                    lcsControlledBy: 'Gałkówek',
                    pos: { x: 1495, y: 900 },
                    posFlipped: { x: 1495, y: 900 }
                },
                platforms: [
                    { label: '', width: 50, height: 7.5, pos: { x: 1542, y: 927.5 } },
                    { label: '', width: 50, height: 7.5, pos: { x: 1542, y: 965 } },
                ],
            }
        ]
    },
    "924_G_GALKOWEK": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M2130,940 LR80 SPR10 LR100 SPR10 LR100',
                    'M2130,960 LR80 SPR10 LR100 SPR10 LR100',

                    'M2150,940 SWDN20 LR30 SWUP20',
                    'M2162.5,1000 SWUP40',
                    'M2192.5,1000 SWUP40',
                    'M2150,1000 SWDN20 LR15 SWUP20',

                    'M2180,1020 SWDN20 LR25 SPR10 LR100 SPR10 LR10 SWUP20',

                    'M2130,1000 LR80 SPR10 LR100 SPR10 LR100',
                    'M2130,1020 LR80 SPR10 LR100 SPR10 LR100',

                    'M2365,940 SWDN20 LR30 SWUP20',
                    'M2350,960 SWDN20 LR10 SWDN20',
                    'M2385,960 SWDN20 LR10 SWDN20',
                    'M2355,1020 SWUP20 LR30 SWDN20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '924_G_A',
                signalPos: { x: '2130', y: '940' },
                trainPos: { x: '2115', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_B',
                signalPos: { x: '2130', y: '960' },
                trainPos: { x: '2115', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_C',
                signalPos: { x: '2130', y: '1000' },
                trainPos: { x: '2115', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_D',
                signalPos: { x: '2130', y: '1020' },
                trainPos: { x: '2115', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_J',
                signalPos: { x: '2210', y: '940' },
                trainPos: { x: '2225', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_H',
                signalPos: { x: '2210', y: '960' },
                trainPos: { x: '2225', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_G',
                signalPos: { x: '2210', y: '1000' },
                trainPos: { x: '2225', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_F',
                signalPos: { x: '2210', y: '1020' },
                trainPos: { x: '2225', y: '1020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_E',
                signalPos: { x: '2210', y: '1040' },
                trainPos: { x: '2225', y: '1040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_K',
                signalPos: { x: '2330', y: '940' },
                trainPos: { x: '2315', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_L',
                signalPos: { x: '2330', y: '960' },
                trainPos: { x: '2315', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_M',
                signalPos: { x: '2330', y: '1000' },
                trainPos: { x: '2315', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_N',
                signalPos: { x: '2330', y: '1020' },
                trainPos: { x: '2315', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_O',
                signalPos: { x: '2330', y: '1040' },
                trainPos: { x: '2315', y: '1040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },

            {
                signalName: '924_G_T',
                signalPos: { x: '2430', y: '940' },
                trainPos: { x: '2445', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_S',
                signalPos: { x: '2430', y: '960' },
                trainPos: { x: '2445', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_R',
                signalPos: { x: '2430', y: '1000' },
                trainPos: { x: '2445', y: '1000' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: '924_G_P',
                signalPos: { x: '2430', y: '1020' },
                trainPos: { x: '2445', y: '1020' },
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
                    pos: { x: 2270, y: 905 },
                    posFlipped: { x: 2270, y: 1070 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 2380, y: 905 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 2268, y: 925 } },
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 2268, y: 965 } },
                ],
                trackLabels: [
                    { text: '2', pos: { x: 2270, y: 940 } },
                    { text: '1', pos: { x: 2270, y: 960 } },
                    { text: '3', pos: { x: 2270, y: 1000 } },
                    { text: '5', pos: { x: 2270, y: 1020 } },
                    { text: '7', pos: { x: 2270, y: 1040 } },
                ]
            }
        ]
    },
    "GALKOWEG_KOLUSZKI": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M2440,940 LR100 SPR10',
                    'M2440,960 LR100 SPR10',

                    'M2440,1000 LR100 SPR10',
                    'M2440,1020 LR100 SPR10',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L17_222N',
                signalPos: { x: '2550', y: '940' },
                trainPos: { x: '2535', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L17_219',
                signalPos: { x: '2550', y: '960' },
                trainPos: { x: '2535', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            //~ ENTRY SIGNALS ZAKOWICE POLUDNIOWE
            {
                signalName: '5377_ZP_A',
                signalPos: { x: '2550', y: '1000' },
                trainPos: { x: '2535', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: '5377_ZP_B',
                signalPos: { x: '2550', y: '1020' },
                trainPos: { x: '2535', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            }
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '222', pos: { x: 2490, y: 940 } },
                    { text: '203', pos: { x: 2490, y: 960 } },
                ]
            },
        ]
    },


    "ZGIERZPOLNOC_ZGIERZKONTREWERS_CHOCISZEW_OZORKOW": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    // Zgierz to Breaker [E]
                    'M2390,610 LR150 TEND',
                    // [E] Breaker to Zigerz Polnoc
                    'M10,1330 TSTART LR100',
                    // Zgierz Polnoc to Zgierz Kontrewers
                    'M340,1340 LR100',
                    // Zgierz Kontrewers to Chociszew
                    'M660,1340 LR400',
                    // Chociszew to Ozorkow
                    'M1300,1340 LR260',
                    // Ozorkow to Breaker [F]
                    'M1820,1340 LR150 TEND',
                ]
            },
        ],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Zgierz Jaracza',
                    pos: { x: 2465, y: 585 },
                    posFlipped: { x: 2465, y: 585 },
                    platforms: [
                        { pos: { x: 2440, y: 597.5 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Jedlicze koło Zgierza',
                    pos: { x: 735, y: 1310 },
                    posFlipped: { x: 735, y: 1360 },
                    platforms: [
                        { pos: { x: 710, y: 1327.5 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Grotniki',
                    pos: { x: 885, y: 1310 },
                    posFlipped: { x: 885, y: 1360 },
                    platforms: [
                        { pos: { x: 860, y: 1327.5 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Ozorków Nowe Miasto',
                    pos: { x: 1475, y: 1310 },
                    posFlipped: { x: 1475, y: 1360 },
                    platforms: [
                        { pos: { x: 1450, y: 1327.5 }, width: 50, height: 7.5 },
                    ]
                }
            },
        ]
    },
    "5317_ZP_ZGIERZPOLNOC": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M130,1340 LR40 SPR10 LR100 SPR10 LR40',
                    'M150,1340 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '5314_ZP_B',
                signalPos: { x: '130', y: '1340' },
                trainPos: { x: '115', y: '1340' },
                trainPosDistance: [
                    { distanceToSignal: 3210, x: 2378.5, y: 610 },
                    { distanceToSignal: 1985, x: 2490, y: 610 },
                    { distanceToSignal: 1500, x: 2535, y: 610 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_E',
                signalPos: { x: '170', y: '1340' },
                trainPos: { x: '185', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_D',
                signalPos: { x: '170', y: '1360' },
                trainPos: { x: '185', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_K',
                signalPos: { x: '290', y: '1340' },
                trainPos: { x: '275', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_L',
                signalPos: { x: '290', y: '1360' },
                trainPos: { x: '275', y: '1360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5314_ZP_P',
                signalPos: { x: '330', y: '1340' },
                trainPos: { x: '345', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Zgierz Północ',
                    prefix: 'ZP',
                    pos: { x: 230, y: 1300 },
                    posFlipped: { x: 230, y: 1400 }
                },
                platforms: [
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 182, y: 1325 } },
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 182, y: 1365 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 230, y: 1340 } },
                    { text: '2', pos: { x: 230, y: 1360 } },
                ]
            },
        ]
    },
    "5313_ZK_ZGIERZKONTREWERS": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M450,1340 LR40 SPR10 LR100 SPR10 LR40',
                    'M470,1340 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '5313_ZK_A',
                signalPos: { x: '450', y: '1340' },
                trainPos: { x: '435', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5313_ZK_E',
                signalPos: { x: '490', y: '1340' },
                trainPos: { x: '505', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5313_ZK_D',
                signalPos: { x: '490', y: '1360' },
                trainPos: { x: '505', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '5313_ZK_K',
                signalPos: { x: '610', y: '1340' },
                trainPos: { x: '595', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5313_ZK_L',
                signalPos: { x: '610', y: '1360' },
                trainPos: { x: '595', y: '1360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '5313_ZK_P',
                signalPos: { x: '650', y: '1340' },
                trainPos: { x: '665', y: '1340' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 7977m
                    { distanceToSignal: 7977, x: 970, y: 1340 },
                    { distanceToSignal: 5000, x: 930, y: 1340 },
                    { distanceToSignal: 2680, x: 910, y: 1340 },
                    { distanceToSignal: 2525, x: 860, y: 1340 },
                    { distanceToSignal: 580, x: 760, y: 1340 },
                    { distanceToSignal: 375, x: 710, y: 1340 },
                    { distanceToSignal: 0, x: 665, y: 1340 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Zgierz Kontrewers',
                    prefix: 'ZK',
                    lcsControlledBy: 'Zgierz Północ',
                    pos: { x: 550, y: 1295 },
                    posFlipped: { x: 550, y: 1405 }
                },
                platforms: [
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 502, y: 1325 } },
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 502, y: 1365 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 550, y: 1340 } },
                    { text: '2', pos: { x: 550, y: 1360 } },
                ]
            },
        ]
    },
    "477_Ch_CHOCISZEW": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M1070,1340 LR50 SPR10 LR100 SPR10 LR50',

                    'M1105,1340 SWUP20 LR10 SPR10 LR100 SPR10 LR10 SWDN20',
                    'M1090,1340 SWDN20 LR25 SPR10 LR100 SPR10 LR25 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '477_Ch_A',
                signalPos: { x: '1070', y: '1340' },
                trainPos: { x: '1055', y: '1340' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 7890 m
                    { distanceToSignal: 6965, x: 760, y: 1340 },
                    { distanceToSignal: 5020, x: 855, y: 1340 },
                    { distanceToSignal: 4865, x: 910, y: 1340 },
                    { distanceToSignal: 3000, x: 965, y: 1340 },
                    { distanceToSignal: 1500, x: 1015, y: 1340 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '477_Ch_C2',
                signalPos: { x: '1120', y: '1320' },
                trainPos: { x: '1135', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '477_Ch_C1',
                signalPos: { x: '1120', y: '1340' },
                trainPos: { x: '1135', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '477_Ch_C3',
                signalPos: { x: '1120', y: '1360' },
                trainPos: { x: '1135', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                signalName: '477_Ch_D2',
                signalPos: { x: '1240', y: '1320' },
                trainPos: { x: '1225', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '477_Ch_D1',
                signalPos: { x: '1240', y: '1340' },
                trainPos: { x: '1225', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '477_Ch_D3',
                signalPos: { x: '1240', y: '1360' },
                trainPos: { x: '1225', y: '1360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '477_Ch_F',
                signalPos: { x: '1290', y: '1340' },
                trainPos: { x: '1305', y: '1340' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 4423m
                    { distanceToSignal: 3260, x: 1500, y: 1340 },
                    { distanceToSignal: 3105, x: 1450, y: 1340 },
                    { distanceToSignal: 2250, x: 1395, y: 1340 },
                    { distanceToSignal: 1500, x: 1355, y: 1340 },
                    { distanceToSignal: 0, x: 1305, y: 1340 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Chociszew',
                    prefix: 'Ch',
                    lcsControlledBy: 'Zgierz Północ',
                    pos: { x: 1180, y: 1275 },
                    posFlipped: { x: 1180, y: 1405 }
                },
                platforms: [
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 1155, y: 1305 } },
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 1155, y: 1365 } },
                ],
                trackLabels: [
                    { text: '2', pos: { x: 1180, y: 1320 } },
                    { text: '1', pos: { x: 1180, y: 1340 } },
                    { text: '3', pos: { x: 1180, y: 1360 } },
                ]
            },
        ]
    },
    // TODO: REDO: Distance Positioning
    "3089_Oz_OZORKOW": {
        "TRACKS": [
            {
                // Ozorkow
                color: 'white',
                commands: [
                    'M1570,1340 LR60 SPR10 LR100 SPR10 LR60',

                    'M1605,1340 SWUP20 LR20 SPR10 LR100 SPR10 LR15 SWDN20',
                    'M1590,1340 SWDN20 LR35 SPR10 LR100 SPR10 LR35 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '3089_Oz_A',
                signalPos: { x: '1570', y: '1340' },
                trainPos: { x: '1555', y: '1340' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: ~4263m
                    { distanceToSignal: 2500, x: 1395, y: 1340 },
                    { distanceToSignal: 770, x: 1445, y: 1340 },
                    { distanceToSignal: 610, x: 1500, y: 1340 },
                    { distanceToSignal: 0, x: 1555, y: 1340 }
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3089_Oz_F',
                signalPos: { x: '1630', y: '1320' },
                trainPos: { x: '1645', y: '1320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3089_Oz_E',
                signalPos: { x: '1630', y: '1340' },
                trainPos: { x: '1645', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '3089_Oz_D',
                signalPos: { x: '1630', y: '1360' },
                trainPos: { x: '1645', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '3089_Oz_M',
                signalPos: { x: '1750', y: '1320' },
                trainPos: { x: '1735', y: '1320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3089_Oz_N',
                signalPos: { x: '1750', y: '1340' },
                trainPos: { x: '1735', y: '1340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '3089_Oz_P',
                signalPos: { x: '1750', y: '1360' },
                trainPos: { x: '1735', y: '1360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '3089_Oz_U',
                signalPos: { x: '1810', y: '1340' },
                trainPos: { x: '1825', y: '1340' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 8269m
                    { distanceToSignal: 8269, x: 895, y: 1510 },
                    { distanceToSignal: 4890, x: 840, y: 1510 },
                    { distanceToSignal: 4690, x: 790, y: 1510 },
                    { distanceToSignal: 3000, x: 645, y: 1510 },
                    { distanceToSignal: 1500, x: 1875, y: 1340 },
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Ozorków',
                    prefix: 'Oz',
                    lcsControlledBy: 'Witonia',
                    pos: { x: 1690, y: 1285 },
                    posFlipped: { x: 1690, y: 1405 }
                },
                platforms: [
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 1642, y: 1325 } },
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 1642, y: 1365 } },
                ],
                trackLabels: [
                    { text: '2', pos: { x: 1690, y: 1320 } },
                    { text: '1', pos: { x: 1690, y: 1340 } },
                    { text: '3a', pos: { x: 1665, y: 1360 } },
                    { text: '3b', pos: { x: 1715, y: 1360 } },
                ]
            },
        ]
    },


    "LECZYCA_WITONIA_KUTNO": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    // Breaker [F] to Leczyca
                    'M630,1500 TSTART LR350',
                    // Leczyca to Witonia
                    'M1240,1510 LR300',
                    // Witonia to Kutno
                    'M1780,1510 LR200',

                    'M1805,1550 DOT5-5-10',
                    'M1805,1570 DOT5-5-10',
                ]
            },
        ],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Sierpów',
                    pos: { x: 815, y: 1480 },
                    posFlipped: { x: 815, y: 1540 },
                    platforms: [
                        { pos: { x: 790, y: 1497.5 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Gawrony',
                    pos: { x: 1390, y: 1480 },
                    posFlipped: { x: 1390, y: 1530 },
                    platforms: [
                        { pos: { x: 1365, y: 1497.5 }, width: 50, height: 7.5 },
                    ]
                }
            }
        ]
    },
    // TODO: REDO: Distance Positioning
    "2385_Le_LECZYCA": {
        "TRACKS": [
            {
                // Leczyca
                color: 'white',
                commands: [
                    'M1000,1510 LR50 SPR10 LR100 SPR10 LR60',

                    'M1020,1510 SWUP20 LR10 SWUP20 LR10 SPR10 LR100 SPR10 LR10 SWDN20 LR10 SWDN20',
                    'M1035,1510 SWDN20 LR10 SPR10 LR100 SPR10 LR35 SWUP20 M1030,1490 LR20 SPR10 LR100 SPR10 LR20'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '2385_Le_A',
                signalPos: { x: '1000', y: '1510' },
                trainPos: { x: '985', y: '1510' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: ~8320m
                    { distanceToSignal: 7500, x: 1915, y: 1340 },
                    { distanceToSignal: 5000, x: 1965, y: 1340 },
                    { distanceToSignal: 4000, x: 730, y: 1510 },
                    { distanceToSignal: 2900, x: 790, y: 1510 }, // at po?
                    { distanceToSignal: 2695, x: 840, y: 1510 },
                    { distanceToSignal: 1750, x: 930, y: 1510 },
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '2385_Le_G',
                signalPos: { x: '1050', y: '1470' },
                trainPos: { x: '1065', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2385_Le_F',
                signalPos: { x: '1050', y: '1490' },
                trainPos: { x: '1065', y: '1490' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2385_Le_E',
                signalPos: { x: '1050', y: '1510' },
                trainPos: { x: '1065', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2385_Le_D',
                signalPos: { x: '1050', y: '1530' },
                trainPos: { x: '1065', y: '1530' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '2385_Le_K',
                signalPos: { x: '1170', y: '1470' },
                trainPos: { x: '1155', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2385_Le_L',
                signalPos: { x: '1170', y: '1490' },
                trainPos: { x: '1155', y: '1490' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2385_Le_M',
                signalPos: { x: '1170', y: '1510' },
                trainPos: { x: '1155', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2385_Le_N',
                signalPos: { x: '1170', y: '1530' },
                trainPos: { x: '1155', y: '1530' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '2385_Le_P',
                signalPos: { x: '1230', y: '1510' },
                trainPos: { x: '1245', y: '1510' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 12589m
                    { distanceToSignal: 6780, x: 1415, y: 1510 }, // platform start
                    { distanceToSignal: 6545, x: 1365, y: 1510 }, // platform end
                    { distanceToSignal: 1500, x: 1300, y: 1510 },
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łęczyca',
                    prefix: 'Le',
                    lcsControlledBy: 'Witonia',
                    pos: { x: 1110, y: 1435 },
                    posFlipped: { x: 1110, y: 1575 }
                },
                platforms: [
                    { label: 'Peron II', width: 45, height: 10, pos: { x: 1062, y: 1495 } },
                    { label: 'Peron I', width: 45, height: 10, pos: { x: 1113, y: 1535 } },
                ],
                trackLabels: [
                    { text: '4', pos: { x: 1110, y: 1470 } },
                    { text: '2', pos: { x: 1110, y: 1490 } },
                    { text: '1', pos: { x: 1110, y: 1510 } },
                    { text: '3', pos: { x: 1110, y: 1530 } },
                ]
            },
        ]
    },
    "4971_Wi_WITONIA": {
        "TRACKS": [
            {
                // Witonia
                color: 'white',
                commands: [
                    'M1550,1510 LR50 SPR10 LR100 SPR10 LR50',
                    'M1570,1510 SWDN20 LR25 SPR10 LR100 SPR10 LR25 SWUP20',
                    'M1585,1530 SWDN20 LR10 SPR10 LR100 SPR10 LR10 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '4971_Wi_A',
                signalPos: { x: '1550', y: '1510' },
                trainPos: { x: '1535', y: '1510' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 13097m
                    { distanceToSignal: 7500, x: 1330, y: 1510 }, // leaving station "Leczyca"
                    { distanceToSignal: 5545, x: 1365, y: 1510 }, // before po "Gawrony"
                    { distanceToSignal: 5315, x: 1415, y: 1510 }, // at po "Gawrony"
                    { distanceToSignal: 2500, x: 1500, y: 1510 }, // after po "Gawrony"
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '4971_Wi_D',
                signalPos: { x: '1600', y: '1510' },
                trainPos: { x: '1615', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '4971_Wi_C',
                signalPos: { x: '1600', y: '1530' },
                trainPos: { x: '1615', y: '1530' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '4971_Wi_B',
                signalPos: { x: '1600', y: '1550' },
                trainPos: { x: '1615', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '4971_Wi_E',
                signalPos: { x: '1720', y: '1510' },
                trainPos: { x: '1705', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '4971_Wi_F',
                signalPos: { x: '1720', y: '1530' },
                trainPos: { x: '1705', y: '1530' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '4971_Wi_G',
                signalPos: { x: '1720', y: '1550' },
                trainPos: { x: '1705', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '4971_Wi_H',
                signalPos: { x: '1770', y: '1510' },
                trainPos: { x: '1785', y: '1510' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 9376m
                    { distanceToSignal: 6000, x: 1890, y: 1510 },
                    { distanceToSignal: 3000, x: 1835, y: 1510 },
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Witonia',
                    prefix: 'Wi',
                    pos: { x: 1660, y: 1480 },
                    posFlipped: { x: 1660, y: 1585 }
                },
                platforms: [
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 1635, y: 1515 } },
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 1635, y: 1555 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1660, y: 1510 } },
                    { text: '3', pos: { x: 1660, y: 1530 } },
                    { text: '5', pos: { x: 1660, y: 1550 } },
                ]
            },
        ]
    },
    "2133_Ku_Kutno": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    //* TOR 1W - T4 - SW610
                    'M1990,1510 LR100 SPR10 LR130 SPR10 LR30 SWDN40',
                    // SW518 - T10 - T104 - T204
                    'M2090,1450 SWUP20 LR25 SPR10 LR100 SPR10 LR45 SWDN100 LR60 SPR10 LR160 SPR10 DOT5-5-3',

                    //* SW516 - T8 - SW601 - SW602/605
                    'M2080,1490 SWUP40 LR25 SPR10 LR100 SPR10 LR10 SWDN40 LR20 SWUP60',
                    //* SW513 - T6 - SW602/604
                    'M2065,1510 SWUP20 LR20 SPR10 LR120 SPR10 LR25 SWDN20',

                    //* SW501/508 - SW509/512
                    'M2020,1510 SWDN40 LR20 SWUP40',
                    // TOR 2S - T2 - T102
                    'M1910,1550 LR20 SPR10 LR130 SPR10 LR160 SPR10 LR100 SPR10 LR160 SPR10 DOT5-5-3',
                    // TOR 1S - T1 - T101
                    'M1910,1570 LR20 SPR10 LR150 SPR10 LR160 SPR10 LR140 SPR10 LR100 SPR10 DOT5-5-3',

                    // SW506/507 - SW511/515 - SW517 - T3 - T103 - T203
                    'M2010,1570 SWUP20 LR40 SWDN20 LR10 SWDN40 LR25 SPR10 LR150 SPR10 LR25 SWUP20 LR110 SPR10 LR100 SPR10 DOT5-5-3',
                    // SW510 - T9 / SW519/520 - T5 - T105
                    'M2050,1570 SWDN60 LR35 M2085,1610 SWDN20 LR10 SPR10 LR130 SPR10 LR60 SWUP20 LR65 SPR10 LR130 SPR10 DOT5-5-3',

                    //~ SWITCHES MIDDLE
                    //* 611/619 - 623/625
                    'M2315,1550 SWDN20 LR55 SWDN20',
                    //* 608/616 - 621/624
                    'M2305,1570 SWDN20 LR45 SWDN20',
                    //* 609/614 - 617/622
                    'M2280,1630 SWUP20 LR10 SWUP20 LR35 SWUP20',

                    // SW618 - T110
                    'M2350,1490 SWUP20 LR15 SPR10 LR140 SPR10 DOT5-5-3',
                    // SW615 - T108
                    'M2335,1510 SWUP20 LR20 SPR10 LR150 SPR10 DOT5-5-3',
                    // SW613 - T106
                    'M2320,1530 SWUP20 LR25 SPR10 LR160 SPR10 DOT5-5-3',

                    // SW603/606 - T107
                    'M2255,1630 SWDN20 LR20 SPR10 LR100 SWUP20 LR125 SPR10 DOT5-5-3',
                    // SW606 - T109
                    'M2270,1650 SWDN20 LR35 SPR10 LR95 SWUP20 LR100 SPR10 DOT5-5-3',
                    // SW607 - T111
                    'M2285,1670 SWDN20 LR20 SPR10 LR105 SWUP20 LR90 SPR10 DOT5-5-3',




                ]
            },
        ],
        "SIGNALS": [
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            //~ ENTRY SIGNALS LEFT SIDE ~\\
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2133_Ku_A',
                signalPos: { x: '1990', y: '1510' },
                trainPos: { x: '1975', y: '1510' },
                trainPosDistance: [
                    // DISTANCE TO MAIN SIGNAL: 9037m
                    { distanceToSignal: 6000, x: 1870, y: 1510 },
                    { distanceToSignal: 3000, x: 1925, y: 1510 },
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_B',
                signalPos: { x: '1910', y: '1550' },
                trainPos: { x: '1895', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_C',
                signalPos: { x: '1910', y: '1570' },
                trainPos: { x: '1895', y: '1570' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            //~~~~~~~~~~~~~~~~~\\
            //~ PERON SIGNALS ~\\
            //~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2133_Ku_E2',
                signalPos: { x: '1930', y: '1550' },
                trainPos: { x: '1945', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_E1',
                signalPos: { x: '1930', y: '1570' },
                trainPos: { x: '1945', y: '1570' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '2133_Ku_F10',
                signalPos: { x: '2120', y: '1430' },
                trainPos: { x: '2135', y: '1430' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_F8',
                signalPos: { x: '2110', y: '1450' },
                trainPos: { x: '2125', y: '1450' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_F6',
                signalPos: { x: '2090', y: '1490' },
                trainPos: { x: '2105', y: '1490' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_F4',
                signalPos: { x: '2090', y: '1510' },
                trainPos: { x: '2105', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_F2',
                signalPos: { x: '2070', y: '1550' },
                trainPos: { x: '2085', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_F1',
                signalPos: { x: '2090', y: '1570' },
                trainPos: { x: '2105', y: '1570' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_F3',
                signalPos: { x: '2100', y: '1610' },
                trainPos: { x: '2115', y: '1610' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_F5',
                signalPos: { x: '2100', y: '1630' },
                trainPos: { x: '2115', y: '1630' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '2133_Ku_G10',
                signalPos: { x: '2240', y: '1430' },
                trainPos: { x: '2225', y: '1430' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_G8',
                signalPos: { x: '2230', y: '1450' },
                trainPos: { x: '2215', y: '1450' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_G6',
                signalPos: { x: '2230', y: '1490' },
                trainPos: { x: '2215', y: '1490' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_G4',
                signalPos: { x: '2240', y: '1510' },
                trainPos: { x: '2225', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_G2',
                signalPos: { x: '2250', y: '1550' },
                trainPos: { x: '2235', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_G1',
                signalPos: { x: '2270', y: '1570' },
                trainPos: { x: '2255', y: '1570' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_G3',
                signalPos: { x: '2270', y: '1610' },
                trainPos: { x: '2255', y: '1610' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_G5',
                signalPos: { x: '2250', y: '1630' },
                trainPos: { x: '2235', y: '1630' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            //~~~~~~~~~~~~~\\
            //~ GROUP 100 ~\\
            //~~~~~~~~~~~~~\\
            {
                signalName: '2133_Ku_H110',
                signalPos: { x: '2370', y: '1470' },
                trainPos: { x: '2385', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H108',
                signalPos: { x: '2360', y: '1490' },
                trainPos: { x: '2375', y: '1490' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H106',
                signalPos: { x: '2350', y: '1510' },
                trainPos: { x: '2365', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H104',
                signalPos: { x: '2350', y: '1530' },
                trainPos: { x: '2365', y: '1530' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H102',
                signalPos: { x: '2350', y: '1550' },
                trainPos: { x: '2365', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H101',
                signalPos: { x: '2410', y: '1570' },
                trainPos: { x: '2425', y: '1570' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H103',
                signalPos: { x: '2410', y: '1590' },
                trainPos: { x: '2425', y: '1590' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H105',
                signalPos: { x: '2380', y: '1610' },
                trainPos: { x: '2395', y: '1610' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H107',
                signalPos: { x: '2280', y: '1650' },
                trainPos: { x: '2295', y: '1650' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H109',
                signalPos: { x: '2310', y: '1670' },
                trainPos: { x: '2325', y: '1670' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2133_Ku_H111',
                signalPos: { x: '2310', y: '1690' },
                trainPos: { x: '2325', y: '1690' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            ///////////////
            {
                signalName: '2133_Ku_J110',
                signalPos: { x: '2530', y: '1470' },
                trainPos: { x: '2515', y: '1470' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J108',
                signalPos: { x: '2530', y: '1490' },
                trainPos: { x: '2515', y: '1490' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J106',
                signalPos: { x: '2530', y: '1510' },
                trainPos: { x: '2515', y: '1510' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J104',
                signalPos: { x: '2530', y: '1530' },
                trainPos: { x: '2515', y: '1530' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J102',
                signalPos: { x: '2530', y: '1550' },
                trainPos: { x: '2515', y: '1550' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J101',
                signalPos: { x: '2530', y: '1570' },
                trainPos: { x: '2515', y: '1570' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J103',
                signalPos: { x: '2530', y: '1590' },
                trainPos: { x: '2515', y: '1590' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J105',
                signalPos: { x: '2530', y: '1610' },
                trainPos: { x: '2515', y: '1610' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J107',
                signalPos: { x: '2530', y: '1630' },
                trainPos: { x: '2515', y: '1630' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J109',
                signalPos: { x: '2530', y: '1650' },
                trainPos: { x: '2515', y: '1650' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2133_Ku_J111',
                signalPos: { x: '2530', y: '1670' },
                trainPos: { x: '2515', y: '1670' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Kutno',
                    prefix: 'Ku',
                    pos: { x: 2180, y: 1400 },
                    posFlipped: { x: 2180, y: 1680 }
                },
                platforms: [
                    { label: 'Peron IV', width: 120, height: 27.5, pos: { x: 2100, y: 1456 } },
                    { label: 'Peron III', width: 160, height: 27.5, pos: { x: 2080, y: 1516 } },
                    { label: 'Peron II', width: 160, height: 27.5, pos: { x: 2100, y: 1576 } },
                    { label: 'Peron I', width: 130, height: 15, pos: { x: 2110, y: 1637 } },
                ],
                trackLabels: [
                    { text: '10', pos: { x: 2180, y: 1430 } },
                    { text: '8', pos: { x: 2170, y: 1450 } },
                    { text: '6', pos: { x: 2160, y: 1490 } },
                    { text: '4', pos: { x: 2165, y: 1510 } },
                    { text: '2', pos: { x: 2160, y: 1550 } },
                    { text: '1', pos: { x: 2180, y: 1570 } },
                    { text: '3', pos: { x: 2190, y: 1610 } },
                    { text: '5', pos: { x: 2175, y: 1630 } },

                    { text: '110', pos: { x: 2450, y: 1470 } },
                    { text: '108', pos: { x: 2445, y: 1490 } },
                    { text: '106', pos: { x: 2440, y: 1510 } },
                    { text: '104', pos: { x: 2440, y: 1530 } },
                    { text: '102', pos: { x: 2440, y: 1550 } },
                    { text: '101', pos: { x: 2470, y: 1570 } },
                    { text: '103', pos: { x: 2470, y: 1590 } },
                    { text: '105', pos: { x: 2455, y: 1610 } },
                    { text: '107', pos: { x: 2345, y: 1650 } },
                    { text: '107', pos: { x: 2460, y: 1630 } },
                    { text: '109', pos: { x: 2370, y: 1670 } },
                    { text: '109', pos: { x: 2475, y: 1650 } },
                    { text: '111', pos: { x: 2375, y: 1690 } },
                    { text: '111', pos: { x: 2475, y: 1670 } },
                ]
            },
            {
                annotationType: 'simpleText',
                nodePos: { x: 2450, y: 1430 },
                nodePosFlipped: { x: 2420, y: 1720 },
                text: 'Kutno Group T101 - T111',
                textSize: 14
            }
        ]
    },



    "ZGIERZ_GLINNIK_STRYKOW_GLOWNO_DOMANIWIECE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    // Zgierz to Breaker
                    'M2390,630 LR150 TEND',
                    // Breaker to Glinnik
                    'M10,1810 TSTART LR310',

                    // Glinnik <-> Strykow
                    'M550,1820 LR350',

                    // Strykow <-> Glowno
                    'M1190,1820 LR350',

                    // Glowno <-> Domaniewice 1 // 150 50 150 50 150
                    'M1900,1820 LR550 TEND',
                ]
            },
        ],
        "SIGNALS": [], //? no signals in this cluster
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Zgierz Rudunki',
                    pos: { x: 2465, y: 655 },
                    posFlipped: { x: 2440, y: 655 },
                    platforms: [
                        { pos: { x: 2440, y: 635 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Smardzew',
                    pos: { x: 125, y: 1790 },
                    posFlipped: { x: 125, y: 1850 },
                    platforms: [
                        { pos: { x: 100, y: 1807.5 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Glinnik Wieś',
                    pos: { x: 225, y: 1790 },
                    posFlipped: { x: 225, y: 1850 },
                    platforms: [
                        { pos: { x: 200, y: 1825 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Swędów',
                    pos: { x: 725, y: 1790 },
                    posFlipped: { x: 725, y: 1850 },
                    platforms: [
                        { pos: { x: 700, y: 1807.5 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Bratoszewice',
                    pos: { x: 1365, y: 1790 },
                    posFlipped: { x: 1365, y: 1850 },
                    platforms: [
                        { pos: { x: 1340, y: 1825 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Głowno Północne',
                    pos: { x: 2075, y: 1790 },
                    posFlipped: { x: 2075, y: 1850 },
                    platforms: [
                        { pos: { x: 2050, y: 1825 }, width: 50, height: 7.5 },
                    ]
                },
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Kamień Łowicki',
                    pos: { x: 2275, y: 1790 },
                    posFlipped: { x: 2275, y: 1850 },
                    platforms: [
                        { pos: { x: 2250, y: 1825 }, width: 50, height: 7.5 },
                    ]
                },
            },
        ]
    },
    "1057_Gl_GLINNIK": {
        "TRACKS": [
            {
                color: 'white',
                commands: [
                    'M360,1820 SWUP20 LR15 SPR10 LR100 SPR10 LR15 SWDN20',
                    'M340,1820 LR40 SPR10 LR100 SPR10 LR40',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '1057_Gl_F',
                signalPos: { x: '340', y: '1820' },
                trainPos: { x: '325', y: '1820' },
                trainPosDistance: [
                    // distance to signal from Zgierz: ~ 6509m
                    { distanceToSignal: 5070, x: 2490, y: 630 }, // at po Zgierz Rudunki
                    { distanceToSignal: 4000, x: 2535, y: 630 }, // after po Zgierz Rudunki
                    { distanceToSignal: 2650, x: 100, y: 1820 }, // before po Smardzew
                    { distanceToSignal: 2490, x: 150, y: 1820 }, // at po Smardzew
                    { distanceToSignal: 790, x: 200, y: 1820 }, // after po Smardzew / before po Glinnik Wies
                    { distanceToSignal: 630, x: 250, y: 1820 }, // at po Glinnik Wies
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '1057_Gl_E',
                signalPos: { x: '380', y: '1800' },
                trainPos: { x: '395', y: '1800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '1057_Gl_D',
                signalPos: { x: '380', y: '1820' },
                trainPos: { x: '395', y: '1820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: '1057_Gl_C',
                signalPos: { x: '500', y: '1800' },
                trainPos: { x: '485', y: '1800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: '1057_Gl_B',
                signalPos: { x: '500', y: '1820' },
                trainPos: { x: '485', y: '1820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: '1057_Gl_A',
                signalPos: { x: '540', y: '1820' },
                trainPos: { x: '555', y: '1820' },
                trainPosDistance: [
                    // distance to signal from station "Strykow": ~ 6910m
                    { distanceToSignal: 5000, x: 805, y: 1820 }, // leaving station "Strykow" // trainAnchor: right
                    { distanceToSignal: 3195, x: 750, y: 1820 }, // before po "Swedow"
                    { distanceToSignal: 3040, x: 700, y: 1820 }, // at po "Swedow"
                    { distanceToSignal: 2250, x: 645, y: 1820 }, // after po "Swedow"
                    { distanceToSignal: 1500, x: 605, y: 1820 }, // closing to signal
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Glinnik',
                    prefix: 'Gl',
                    pos: { x: 440, y: 1760 },
                    posFlipped: { x: 440, y: 1860 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 340, y: 1770 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 392, y: 1785 } },
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 392, y: 1825 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 440, y: 1800 } },
                    { text: '1', pos: { x: 440, y: 1820 } },
                ]
            }
        ]
    },
    "4143_St_STRYKOW": {
        "TRACKS": [
            // {
            //     color: NON_PLAYABLE_TRACKS_COLOR,
            //     isNPT: true,
            //     commands: [
            //         'M1010,1730 BUFF-L DOT4-2-9 SWDN30',
            //         'M990,1790 SWUP30 LR5 DERAILER DOT4-2-12 DERAILER LR5 SWDN30',

            //         'M1040,1850 SWDN30 LR5 DERAILER DOT5-2-3 DERAILER LR5 SWUP30',

            //         'M1130,1850 LR10 DERAILER LR5 SSL DOT5-2-3 BUFF-R',
            //     ]
            // },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M910,1820 LR60 SPR10 LR130 SPR10 LR60',

                    'M950,1820 SWUP20 LR15 SPR10 LR130 SPR10 LR25 SWDN20',
                    'M930,1820 SWDN20 LR35 SPR10 LR130 SPR10 LR10 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '4143_St_P',
                signalPos: { x: '910', y: '1820' },
                trainPos: { x: '895', y: '1820' },
                trainPosDistance: [
                    // distance to signal from Glinnik: ~ 6770m
                    { distanceToSignal: 5000, x: 640, y: 1820 }, // exiting Glinnik // trainAnchor: left
                    { distanceToSignal: 3470, x: 700, y: 1820 }, // before po "Swedow"
                    { distanceToSignal: 3310, x: 750, y: 1820 }, // at po "Swedow"
                    { distanceToSignal: 2750, x: 800, y: 1820 }, // after po "Swedow"
                    { distanceToSignal: 2000, x: 850, y: 1820 }, // closing to signal
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '4143_St_M',
                signalPos: { x: '970', y: '1800' },
                trainPos: { x: '985', y: '1800' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '4143_St_L',
                signalPos: { x: '970', y: '1820' },
                trainPos: { x: '985', y: '1820' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '4143_St_K',
                signalPos: { x: '970', y: '1840' },
                trainPos: { x: '985', y: '1840' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '4143_St_B',
                signalPos: { x: '1120', y: '1800' },
                trainPos: { x: '1105', y: '1800' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '4143_St_C',
                signalPos: { x: '1120', y: '1820' },
                trainPos: { x: '1105', y: '1820' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '4143_St_D',
                signalPos: { x: '1120', y: '1840' },
                trainPos: { x: '1105', y: '1840' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '4143_St_A',
                signalPos: { x: '1180', y: '1820' },
                trainPos: { x: '1195', y: '1820' },
                trainPosDistance: [
                    // distance to signal from station "Glowno": ~ 8680m
                    { distanceToSignal: 5000, x: 1445, y: 1820 }, // leaving station "Glowno" // trainAnchor: right
                    { distanceToSignal: 4330, x: 1390, y: 1820 }, // before po "Bratoszewice" // trainAnchor: left
                    { distanceToSignal: 4175, x: 1340, y: 1820 }, // at po "Bratoszewice" // trainAnchor: left
                    { distanceToSignal: 3000, x: 1285, y: 1820 }, // after po "Bratoszewice" / distance to signal
                    { distanceToSignal: 1500, x: 1240, y: 1820 }, // distance to signal
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Stryków',
                    prefix: 'St',
                    lcsControlledBy: 'Glinnik',
                    pos: { x: 1050, y: 1770 },
                    posFlipped: { x: 1050, y: 1890 }
                },
                platforms: [
                    { label: 'Peron II', width: 70, height: 10, pos: { x: 985, y: 1825 } },
                    { label: 'Peron I', width: 70, height: 10, pos: { x: 985, y: 1845 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 1050, y: 1800 } },
                    { text: '1', pos: { x: 1050, y: 1820 } },
                    { text: '2b', pos: { x: 1017.5, y: 1840 } },
                    { text: '2a', pos: { x: 1082.5, y: 1840 } },
                ]
            },
        ]
    },
    "1092_Gn_GLOWNO": {
        "TRACKS": [
            // {
            //     color: NON_PLAYABLE_TRACKS_COLOR,
            //     isNPT: true,
            //     commands: [
            //         'M1680,1840 SWDN20 LR5 DERAILER LR5 SSL DOT4-2-4 SSR LR17.5 DERAILER LR5 SWUP20',
            //         'M1716,1860 SWDN20 DOT4-2-3 SSR LR5 SWUP20',
            //     ]
            // },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1550,1820 LR60 SPR10 LR200 SPR10 LR60',

                    'M1597.5,1800 SWUP20 LR7.5 SPR10 LR200 SPR10 LR7.5 SWDN20',
                    'M1580,1820 SWUP20 LR25 SPR10 LR200 SPR10 LR25 SWDN20',
                    'M1597.5,1820 SWDN20 LR7.5 SPR10 LR200 SPR10 LR7.5 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '1092_Gn_K',
                signalPos: { x: '1550', y: '1820' },
                trainPos: { x: '1535', y: '1820' },
                trainPosDistance: [
                    // distance to signal from Strykow: ~ 8810m
                    { distanceToSignal: 5000, x: 1285, y: 1820 }, // exiting Strykow // trainAnchor: left
                    { distanceToSignal: 4030, x: 1340, y: 1820 }, // before po "Bratowszewice"
                    { distanceToSignal: 3870, x: 1390, y: 1820 }, // at po "Bratowszewice"
                    { distanceToSignal: 3000, x: 1445, y: 1820 }, // after po "Bratowszewice"
                    { distanceToSignal: 2000, x: 1490, y: 1820 }, // closing in on signal
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '1092_Gn_J',
                signalPos: { x: '1610', y: '1780' },
                trainPos: { x: '1625', y: '1780' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1092_Gn_H',
                signalPos: { x: '1610', y: '1800' },
                trainPos: { x: '1625', y: '1800' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1092_Gn_G',
                signalPos: { x: '1610', y: '1820' },
                trainPos: { x: '1625', y: '1820' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '1092_Gn_F',
                signalPos: { x: '1610', y: '1840' },
                trainPos: { x: '1625', y: '1840' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '1092_Gn_B',
                signalPos: { x: '1830', y: '1780' },
                trainPos: { x: '1815', y: '1780' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1092_Gn_C',
                signalPos: { x: '1830', y: '1800' },
                trainPos: { x: '1815', y: '1800' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1092_Gn_D',
                signalPos: { x: '1830', y: '1820' },
                trainPos: { x: '1815', y: '1820' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '1092_Gn_E',
                signalPos: { x: '1830', y: '1840' },
                trainPos: { x: '1815', y: '1840' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '1092_Gn_A',
                signalPos: { x: '1890', y: '1820' },
                trainPos: { x: '1905', y: '1820' },
                trainPosDistance: [
                    // distance to signal from station "Domaniewice": ~ 9140m
                    { distanceToSignal: 7560, x: 215, y: 2000 }, // leaving station & before po "Domaniewice Centrum" // trainAnchor: left
                    { distanceToSignal: 7400, x: 165, y: 2000 }, // at po "Domaniewice Centrum" // trainAnchor: left
                    { distanceToSignal: 6500, x: 110, y: 2000 }, // after po "Domaniewice Centrum" // trainAnchor: right
                    { distanceToSignal: 5750, x: 25, y: 2000 }, // track breaker 1 // trainAnchor: left
                    { distanceToSignal: 5000, x: 2355, y: 1820 }, // track breaker 2 // trainAnchor: right
                    { distanceToSignal: 3865, x: 2300, y: 1820 }, // before po "Kamien Lowicki" // trainAnchor: left
                    { distanceToSignal: 3660, x: 2250, y: 1820 }, // at po "Kamien Lowicki" // trainAnchor: left
                    { distanceToSignal: 2500, x: 2160, y: 1820 }, // after po "Kamien Lowicki" // trainAnchor: right
                    { distanceToSignal: 1475, x: 2100, y: 1820 }, // before po "Glowno Polnocne" // trainAnchor: left
                    { distanceToSignal: 1315, x: 2050, y: 1820 }, // at po "Glowno Polnocne" // trainAnchor: left
                    { distanceToSignal: 1000, x: 1960, y: 1820 }, // after po "Glowno Polnocne" / distance to signal // trainAnchor: right
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Głowno',
                    prefix: 'Gn',
                    pos: { x: 1720, y: 1750 },
                    posFlipped: { x: 1720, y: 1880 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1575, y: 1850 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 80, height: 10, pos: { x: 1622, y: 1825 } },
                    { label: 'Peron I', width: 55, height: 10, pos: { x: 1622, y: 1845 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 1720, y: 1780 } },
                    { text: '3', pos: { x: 1720, y: 1800 } },
                    { text: '1', pos: { x: 1720, y: 1820 } },
                    { text: '2c', pos: { x: 1652.5, y: 1840 } },
                    { text: '2b', pos: { x: 1720, y: 1840 } },
                    { text: '2a', pos: { x: 1802.5, y: 1840 } },
                ]
            },
        ]
    },


    "GLOWNO_DOMANIEWICE_LOWICZPRZEDMIESCIE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    // Breaker <-> Domaniewice
                    'M10,1990 TSTART LR290',

                    // Domaniewice <-> Lowicz Przedmiescie
                    'M570,2000 LR300',

                    // Lowicz Przedmiescie <-> Lowicz Glowny
                    'M1210,1940 LR467.5 SWDN260 LR97.5',
                    'M1210,2000 LR457.5 UTLD200 LL97.5',
                    'M1080,2310 LR122.5 SWUP150 LR100 UTLU100 LL97.5',
                ]
            },
        ],
        "SIGNALS": [], //? no signals in this cluster
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Domaniewice Centrum',
                    pos: { x: 190, y: 1970 },
                    posFlipped: { x: 190, y: 2030 },
                    platforms: [
                        { pos: { x: 165, y: 2005 }, width: 50, height: 7.5 },
                    ]
                },
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Stare Grudze',
                    pos: { x: 720, y: 1970 },
                    posFlipped: { x: 720, y: 2030 },
                    platforms: [
                        { pos: { x: 695, y: 2005 }, width: 50, height: 7.5 },
                    ]
                },
            },
        ]
    },
    "824_Dm_DOMANIEWICE": {
        "TRACKS": [
            // {
            //     color: NON_PLAYABLE_TRACKS_COLOR,
            //     isNPT: true,
            //     commands: [
            //         'M515,2020 SWDN20 LR5 DERAILER LR5 SSL DOT4-2-5',
            //         'M530,2020 LR10 DERAILER LR5 SSL DOT4-2-5 SPR2 BUFF-R',
            //     ]
            // },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M320,2000 LR60 SPR10 LR100 SPR10 LR60',
                    'M340,2000 SWDN20 LR35 SPR10 LR100 SPR10 LR30 SWUP20'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '824_Dm_P',
                signalPos: { x: '320', y: '2000' },
                trainPos: { x: '305', y: '2000' },
                trainPosDistance: [
                    // distance to signal from Glowno: ~ 9150 m
                    { distanceToSignal: 8000, x: 1995, y: 1820 },  // leaving station "Glowno"     // trainAnchor: left
                    { distanceToSignal: 7295, x: 2050, y: 1820 },  // before po "Glowno Polnocne"  // trainAnhor: right
                    { distanceToSignal: 7140, x: 2100, y: 1820 },  // at po "Glowno Polnocne"      // trainAnhor: right
                    { distanceToSignal: 6000, x: 2190, y: 1820 },  // after po "Glowno Polnocne"   // trainAnchor: left
                    { distanceToSignal: 4950, x: 2250, y: 1820 },  // before po "Kamien Lowicki"   // trainAnhor: right
                    { distanceToSignal: 4745, x: 2300, y: 1820 },  // at po "Kamien Lowicki"       // trainAnhor: right
                    { distanceToSignal: 4000, x: 2390, y: 1820 },  // after po "Kamien Lowicki"    // trainAnhor: left
                    { distanceToSignal: 3000, x: 2445, y: 1820 },  // to track breaker             // trainAnhor: right
                    { distanceToSignal: 2000, x: 110, y: 2000 },  // from track breaker           // trainAnhor: left
                    { distanceToSignal: 1210, x: 165, y: 2000 },  // before po "Dom. Centrum"     // trainAnhor: right
                    { distanceToSignal: 1055, x: 215, y: 2000 },  // at po "Dom. Centrum"         // trainAnhor: right
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '824_Dm_L',
                signalPos: { x: '380', y: '2000' },
                trainPos: { x: '395', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '824_Dm_K',
                signalPos: { x: '380', y: '2020' },
                trainPos: { x: '395', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '824_Dm_C',
                signalPos: { x: '500', y: '2000' },
                trainPos: { x: '485', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '824_Dm_D',
                signalPos: { x: '500', y: '2020' },
                trainPos: { x: '485', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '824_Dm_A',
                signalPos: { x: '560', y: '2000' },
                trainPos: { x: '575', y: '2000' },
                trainPosDistance: [
                    // distance from station "Lowicz Przedmiescie": ~ 11450m
                    { distanceToSignal: 7500, x: 775, y: 2000 }, // leaving station "Lowicz Przedmiescie" // trainAnchor: right
                    { distanceToSignal: 5825, x: 745, y: 2000 }, // before po "Stare Grudze" // trainAnchor: left
                    { distanceToSignal: 5670, x: 695, y: 2000 }, // at po "Stare Grudze" // trainAnchor: left
                    { distanceToSignal: 5000, x: 640, y: 2000 }, // after po "Stare Grudze" // trainAnchor: right
                    { distanceToSignal: 2000, x: 615, y: 2000 }, // distance to signal // trainAnchor: left
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Domaniewice',
                    prefix: 'Dm',
                    lcsControlledBy: 'Głowno',
                    pos: { x: 440, y: 1965 },
                    posFlipped: { x: 440, y: 2065 }
                },
                platforms: [
                    { label: 'Peron II', width: 50, height: 10, pos: { x: 392, y: 2005 } },
                    { label: 'Peron I', width: 50, height: 10, pos: { x: 392, y: 2025 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 440, y: 2000 } },
                    { text: '2', pos: { x: 440, y: 2020 } },
                ]
            },
        ]
    },
    "2418_LP_LOWICZPRZEDMIESCIE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M880,2000 LR70 SPR10 LR140 SPR10 LR60 SWDN60 LR25',

                    'M930,2000 SWUP20 LR15 SPR10 LR140 SPR10 LR70 SWDN20 LR15',
                    'M920,2000 SWDN20 LR15 SPR10 LR140 SPR10 LR30 SWUP20 LR10 SWUP20 LR10 SWUP20 LR15 SWUP20 LR15',
                    'M900,2000 SWDN40 LR35 SPR10 LR130 SPR10 LR25 SWUP20',
                    'M915,2040 SWDN20 LR40 SPR10 LR100 SPR10 LR20 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '2418_LP_M',
                signalPos: { x: '880', y: '2000' },
                trainPos: { x: '865', y: '2000' },
                trainPosDistance: [
                    // distance from station "Domaniewice": ~ 11210m
                    { distanceToSignal: 6500, x: 665, y: 2000 }, // after leaving station "Domaniewice // trainAnhor: right
                    { distanceToSignal: 5195, x: 695, y: 2000 }, // before po "Stare Grudze" // trainAnhor: right
                    { distanceToSignal: 5040, x: 745, y: 2000 }, // at po "Stare Grudze" // trainAnhor: right
                    { distanceToSignal: 3000, x: 805, y: 2000 }, // after po "Stare Grudze" // trainAnchor: left // needs editing afterwards
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '2418_LP_L',
                signalPos: { x: '950', y: '1980' },
                trainPos: { x: '965', y: '1980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2418_LP_K',
                signalPos: { x: '950', y: '2000' },
                trainPos: { x: '965', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2418_LP_J',
                signalPos: { x: '940', y: '2020' },
                trainPos: { x: '955', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2418_LP_H4',
                signalPos: { x: '940', y: '2040' },
                trainPos: { x: '955', y: '2040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2418_LP_H6',
                signalPos: { x: '960', y: '2060' },
                trainPos: { x: '975', y: '2060' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '2418_LP_D',
                signalPos: { x: '1110', y: '1980' },
                trainPos: { x: '1095', y: '1980' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2418_LP_E',
                signalPos: { x: '1110', y: '2000' },
                trainPos: { x: '1095', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2418_LP_F',
                signalPos: { x: '1100', y: '2020' },
                trainPos: { x: '1085', y: '2020' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2418_LP_G4',
                signalPos: { x: '1090', y: '2040' },
                trainPos: { x: '1075', y: '2040' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2418_LP_G6',
                signalPos: { x: '1080', y: '2060' },
                trainPos: { x: '1065', y: '2060' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '2418_LP_C',
                signalPos: { x: '1200', y: '1940' },
                trainPos: { x: '1215', y: '1940' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2418_LP_B',
                signalPos: { x: '1200', y: '2000' },
                trainPos: { x: '1215', y: '2000' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2418_LP_A',
                signalPos: { x: '1200', y: '2060' },
                trainPos: { x: '1215', y: '2060' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łowicz Przedmieście',
                    prefix: 'LP',
                    pos: { x: 1040, y: 1940 },
                    posFlipped: { x: 1040, y: 2090 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1130, y: 2030 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron III', width: 80, height: 10, pos: { x: 1018, y: 1965 } },
                    { label: 'Peron II', width: 80, height: 10, pos: { x: 1018, y: 1985 } },
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1008, y: 2005 } },
                ],
                trackLabels: [
                    { text: '3b', pos: { x: 990, y: 1980 } },
                    { text: '3a', pos: { x: 1070, y: 1980 } },
                    { text: '1', pos: { x: 1030, y: 2000 } },
                    { text: '2', pos: { x: 1020, y: 2020 } },
                    { text: '4', pos: { x: 1015, y: 2040 } },
                    { text: '6', pos: { x: 1025, y: 2060 } },
                ]
            },
        ]
    },

    "SKIERNIEWICE_BELCHOW": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M20,2200 DOT5-5-3 SPR5 LR70 SPR10 LR100',
                    'M20,2220 DOT5-5-3 SPR5 LR70 SPR10 LR100',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L11_94',
                signalPos: { x: '120', y: '2200' },
                trainPos: { x: '135', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_93N',
                signalPos: { x: '120', y: '2220' },
                trainPos: { x: '135', y: '2220' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L11_70',
                invisibleSignal: true,
                signalPos: { x: '10', y: '2200' },
                trainPos: { x: '25', y: '2200' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L11_69N',
                invisibleSignal: true,
                signalPos: { x: '10', y: '2220' },
                trainPos: { x: '25', y: '2220' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '94', pos: { x: 70, y: 2200 } },
                    { text: '83', pos: { x: 70, y: 2220 } },
                    { text: '102', pos: { x: 180, y: 2200 } },
                    { text: '93', pos: { x: 180, y: 2220 } },
                ]
            },
        ]
    },
    "113_Be_BELCHOW": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M240,2200 LR100 SPR10 LR100 SPR10 LR100',
                    'M240,2220 LR100 SPR10 LR100 SPR10 LR100',

                    'M260,2220 SWUP20 LR20 SWDN20',

                    'M310,2200 SWUP20 LR25 SPR10 LR100 SPR10 LR25 SWDN20',
                    'M310,2220 SWDN20 LR25 SPR10 LR100 SPR10 LR25 SWUP20 LR20 SWUP20 LR20 SWDN20',
                    'M330,2240 SWDN20 LR5 SPR10 LR100 SPR10 LR5 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            //& ENTRY SIGNALS LEFT SIDE
            {
                signalName: '113_Be_A',
                signalPos: { x: '240', y: '2200' },
                trainPos: { x: '225', y: '2200' },
                trainPosDistance: [
                    // distance to signal from last ABS: ~ 2150m
                    { distanceToSignal: 1115, x: 115, y: 2200 }, // distance from abs facing other way
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_B',
                signalPos: { x: '240', y: '2220' },
                trainPos: { x: '225', y: '2220' },
                trainPosDistance: [
                    // distance to signal from last ABS: ~ 2150m
                    { distanceToSignal: 1115, x: 115, y: 2220 }, // distance from abs facing other way
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //& EXIT SIGNALS LEFT SIDE
            {
                signalName: '113_Be_G',
                signalPos: { x: '340', y: '2180' },
                trainPos: { x: '355', y: '2180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_F',
                signalPos: { x: '340', y: '2200' },
                trainPos: { x: '355', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_E',
                signalPos: { x: '340', y: '2220' },
                trainPos: { x: '355', y: '2220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_D',
                signalPos: { x: '340', y: '2240' },
                trainPos: { x: '355', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_C',
                signalPos: { x: '340', y: '2260' },
                trainPos: { x: '355', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //& EXIT SIGNALS RIGHT SIDE
            {
                signalName: '113_Be_J',
                signalPos: { x: '460', y: '2180' },
                trainPos: { x: '445', y: '2180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_K',
                signalPos: { x: '460', y: '2200' },
                trainPos: { x: '445', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_L',
                signalPos: { x: '460', y: '2220' },
                trainPos: { x: '445', y: '2220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_M',
                signalPos: { x: '460', y: '2240' },
                trainPos: { x: '445', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '113_Be_N',
                signalPos: { x: '460', y: '2260' },
                trainPos: { x: '445', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //& ENTRY SIGNALS RIGHT SIDE
            {
                signalName: '113_Be_P',
                signalPos: { x: '560', y: '2200' },
                trainPos: { x: '575', y: '2200' },
                trainPosDistance: [
                    // distance to signal from station "Lowicz Glowny": ~ 6425m
                    { distanceToSignal: 5000, x: 895, y: 2200 }, // after leaving station "Lowicz Glowny" // trainAnchor: right
                    { distanceToSignal: 4000, x: 865, y: 2200 }, // after leaving station "Lowicz Glowny"
                    { distanceToSignal: 3075, x: 830, y: 2200 }, // before po "Bobrowniki" // trainAnchor: left
                    { distanceToSignal: 2865, x: 780, y: 2200 }, // at po "Bobrowniki" // trainAnchor: left
                    { distanceToSignal: 2500, x: 720, y: 2200 }, // after po "Bobrowniki" // trainAnchor: right
                    { distanceToSignal: 2000, x: 680, y: 2200 },
                    { distanceToSignal: 1500, x: 625, y: 2200 }, // closing in on signal // trainAnchor: left
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '113_Be_O',
                signalPos: { x: '560', y: '2220' },
                trainPos: { x: '575', y: '2220' },
                trainPosDistance: [
                    // distance to signal from station "Lowicz Glowny": ~ 6425m
                    { distanceToSignal: 5000, x: 895, y: 2220 }, // after leaving station "Lowicz Glowny" // trainAnchor: right
                    { distanceToSignal: 4000, x: 860, y: 2220 }, // distance to po
                    { distanceToSignal: 2805, x: 810, y: 2220 }, // before po "Bobrowniki" // trainAnchor: left
                    { distanceToSignal: 2600, x: 760, y: 2220 }, // at po "Bobrowniki" // trainAnchor: left
                    { distanceToSignal: 2000, x: 710, y: 2220 }, // after po "Bobrowniki" // trainAnchor: right
                    { distanceToSignal: 1500, x: 625, y: 2220 }, // closing in on signal // trainAnchor: left
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
                    pos: { x: 400, y: 2150 },
                    posFlipped: { x: 400, y: 2290 }
                },
                platforms: [
                    { label: 'Peron I', width: 70, height: 10, pos: { x: 378, y: 2205 } },
                ],
                trackLabels: [
                    { text: '4', pos: { x: 375, y: 2180 } },
                    { text: '4b', pos: { x: 425, y: 2180 } },
                    { text: '2', pos: { x: 375, y: 2200 } },
                    { text: '2b', pos: { x: 425, y: 2200 } },
                    { text: '1', pos: { x: 400, y: 2220 } },
                    { text: '3', pos: { x: 400, y: 2240 } },
                    { text: '5', pos: { x: 400, y: 2260 } },
                ]
            }
        ]
    },
    "BELCHOW_LOWICZGLOWNY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M570,2200 LR420',
                    'M570,2220 LR420',
                ]
            },
        ],
        "SIGNALS": [], //? no signals in this cluster
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Bobrowniki',
                    pos: { x: 770, y: 2170 },
                    posFlipped: { x: 770, y: 2250 },
                    platforms: [
                        { pos: { x: 710, y: 2225 }, width: 50, height: 7.5 },
                        { pos: { x: 780, y: 2187.5 }, width: 50, height: 7.5 },
                    ]
                },
            },
        ]
    },
    "108_Bd_BEDNARY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M220,2360 DOT5-5-3 LR85',
                    'M220,2380 DOT5-5-3 LR85',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M400,2360 SWUP20 LR15 SPR10 LR100 SPR10 LR100',
                    'M340,2360 LR80 SPR10 LR100 SPR10 LR100',
                    'M340,2380 LR70 SPR10 LR100 SPR10 LR110',
                    'M395,2380 SWDN20 LR10 SPR10 LR100 SPR10 LR10 SWUP20',

                    //? SW1/2 - SW3/4
                    'M360,2360 SWDN20 LR20 SWUP20',

                    //? SW13/14 - SW17/18
                    'M555,2340 SWDN20 LR30 SWDN20',
                    //? SW15/16 - 19/20
                    'M565,2380 SWUP20 LR30 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: '108_Bd_A',
                signalPos: { x: '340', y: '2360' },
                trainPos: { x: '325', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '108_Bd_B',
                signalPos: { x: '340', y: '2380' },
                trainPos: { x: '325', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '108_Bd_F',
                signalPos: { x: '420', y: '2340' },
                trainPos: { x: '435', y: '2340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '108_Bd_E',
                signalPos: { x: '420', y: '2360' },
                trainPos: { x: '435', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '108_Bd_D',
                signalPos: { x: '410', y: '2380' },
                trainPos: { x: '425', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '108_Bd_C',
                signalPos: { x: '410', y: '2400' },
                trainPos: { x: '425', y: '2400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '108_Bd_J',
                signalPos: { x: '540', y: '2340' },
                trainPos: { x: '525', y: '2340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '108_Bd_K',
                signalPos: { x: '540', y: '2360' },
                trainPos: { x: '525', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '108_Bd_L',
                signalPos: { x: '530', y: '2380' },
                trainPos: { x: '515', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '108_Bd_M',
                signalPos: { x: '530', y: '2400' },
                trainPos: { x: '515', y: '2400' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },

            {
                signalName: '108_Bd_P',
                signalPos: { x: '640', y: '2340' },
                trainPos: { x: '655', y: '2340' },
                // trainPosDistance: [
                //     { distanceToSignal: 0, x: -60, y: 40 },
                // ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '108_Bd_O',
                signalPos: { x: '640', y: '2360' },
                trainPos: { x: '655', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '108_Bd_N',
                signalPos: { x: '640', y: '2380' },
                trainPos: { x: '655', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Bednary',
                    prefix: 'Bd',
                    pos: { x: 480, y: 2310 },
                    posFlipped: { x: 475, y: 2430 }
                },
                platforms: [
                    { label: 'Peron II', width: 60, height: 10, pos: { x: 468, y: 2345 } },
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 468, y: 2385 } },
                ],
                trackLabels: [
                    { text: '4', pos: { x: 480, y: 2340 } },
                    { text: '2', pos: { x: 480, y: 2360 } },
                    { text: '1', pos: { x: 470, y: 2380 } },
                    { text: '3', pos: { x: 470, y: 2400 } },
                ]
            },
        ]
    },
    "BEDNARY_LOWICZGLOWNY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M650,2340 LR167.5 SWUP30 LR167.5',
                    'M650,2360 ABS100-20-3',
                    'M650,2380 ABS100-20-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L3_748N',
                signalPos: { x: '760', y: '2360' },
                trainPos: { x: '745', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L3_747',
                signalPos: { x: '760', y: '2380' },
                trainPos: { x: '745', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L3_748',
                signalPos: { x: '760', y: '2360' },
                trainPos: { x: '775', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L3_747N',
                signalPos: { x: '760', y: '2380' },
                trainPos: { x: '775', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L3_762N',
                signalPos: { x: '880', y: '2360' },
                trainPos: { x: '865', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L3_761',
                signalPos: { x: '880', y: '2380' },
                trainPos: { x: '865', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L3_762',
                signalPos: { x: '880', y: '2360' },
                trainPos: { x: '895', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L3_761N',
                signalPos: { x: '880', y: '2380' },
                trainPos: { x: '895', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '748', pos: { x: 700, y: 2360 } },
                    { text: '721', pos: { x: 700, y: 2380 } },
                    { text: '762', pos: { x: 820, y: 2360 } },
                    { text: '747', pos: { x: 820, y: 2380 } },
                    { text: '774', pos: { x: 940, y: 2360 } },
                    { text: '761', pos: { x: 940, y: 2380 } },
                ]
            },
        ]
    },

    "2412_LG_LOWICZGLOWNY": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //& TOR 2B - T202c - T110 - T8 - SW73/74
                    'M1000,2200 LR70 SPR10 LR117.5 SPR15 LR32.5 SWDN20 LR100 SPR10 LR200 SPR10 LR210 SPR10 LR60 SPR10 LR100 SPR10 LR85 SWDN80',

                    //& TOR 1B - T201c - T108 - T6 - SW68
                    'M1000,2220 LR70 SPR10 LR117.5 SPR15 LR12.5 SWDN20 LR120 SPR10 LR200 SPR10 LR210 SPR10 LR60 SPR10 LR100 SPR10 LR45 SWDN60',

                    //^ Connector Belchow <-> Bednary
                    'M1025,2200 SWDN20 LR10 SWDN30 LR25 SPR10 LR102.5 UTLD30 LL102.5 SPL10 LL25',

                    //~ TOR 4S TRACK
                    'M1000,2310 LR70',
                    'M1040,2310 SWUP30 LR5',

                    //& TOR 2S - T102c - T102 - T2a - T2c - TOR 2J
                    'M1000,2360 LR70 SPR10 LR142.5 SWUP60 LR122.5 SPR10 LR200 SPR10 LR210 SPR10 LR60 SPR10 LR100 SPR10 LR140 SPR10 LR100 SPR10 LR40',
                    //& TOR 1S - T101c - T101 - T1a - T1c - TOR 1J
                    'M1000,2380 LR70 SPR10 LR162.5 SWUP60 LR102.5 SPR10 LR200 SPR10 LR210 SPR10 LR60 SPR10 LR100 SPR10 LR140 SPR10 LR100 SPR10 LR40',

                    //? SWITCHES: 20/21 - 22/23 - 32/33
                    'M1375,2220 SWDN20 LR40 SWDN60 LR90 SWDN20',
                    //~ SWITCHES: 24/25 - 26/27 - 28/29 - 30/31 - TOR 112P
                    'M1440,2320 SWUP20 LR25 SWUP60 LR15 SWUP20 LR15 SWUP20 LR45',
                    //~ TOR 114P - SW45
                    'M1790,2200 LR15 SWDN20',

                    //^ SW36 - T106 - T4 - SW71
                    'M1510,2240 SWDN20 LR45 SPR10 LR210 SPR10 LR60 SPR10 LR100 SPR10 LR26 SWDN40',
                    //^ SW37 - T104 - SW44
                    'M1525,2260 SWDN20 LR30 SPR10 LR210 SPR10 LR7.5 SWUP20',
                    //^ SW34/35 - T103 - SW42/43
                    'M1540,2320 SWDN20 LR15 SPR10 LR210 SPR10 LR20 SWUP20',

                    //? SW46/47
                    'M1825,2220 SWDN20',
                    //? SW48/49
                    'M1810,2240 SWDN20',
                    //? SW40/41
                    'M1800,2320 SWUP20',
                    //? SWITCHES: 65/66 - 67/72
                    'M1975,2220 SWDN20 LR20 SWUP20',
                    //? SW60/61
                    'M1975,2300 SWDN20',
                    //? SW69/70 - 76/77
                    'M2040,2300 SWDN20 LR30 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            //~ ENTRY SIGNALS LEFT SIDE ~\\
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2412_LG_A2',
                signalPos: { x: '1000', y: '2200' },
                trainPos: { x: '985', y: '2200' },
                trainPosDistance: [
                    // distance to signal from station "Belchow": ~ 6510m
                    { distanceToSignal: 5000, x: 665, y: 2200 }, // leaving station "Belchow" // trainAnchor: left
                    { distanceToSignal: 4000, x: 725, y: 2200 }, // leaving station "Belchow" // trainAnchor: left
                    { distanceToSignal: 3035, x: 780, y: 2200 }, // before po "Bobrowniki"
                    { distanceToSignal: 2835, x: 830, y: 2200 }, // at po "Bobrowniki"
                    { distanceToSignal: 2000, x: 885, y: 2200 }, // after po "Bobrowniki"
                    { distanceToSignal: 1250, x: 935, y: 2200 }, // closing in on signal
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_A1',
                signalPos: { x: '1000', y: '2220' },
                trainPos: { x: '985', y: '2220' },
                trainPosDistance: [
                    // distance to signal from station "Belchow": ~ 6510m
                    { distanceToSignal: 4000, x: 665, y: 2220 }, // leaving station "Belchow" // trainAnchor: left
                    { distanceToSignal: 3310, x: 710, y: 2220 }, // before po "Bobrowniki" // trainAnchor: right
                    { distanceToSignal: 3100, x: 760, y: 2220 }, // at po "Bobrowniki" // trainAnchor: right
                    { distanceToSignal: 2000, x: 850, y: 2220 }, // after po "Bobrowniki" // trainAnchor: left
                    { distanceToSignal: 1250, x: 935, y: 2220 }, // closing in on signal
                ],
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_D',
                signalPos: { x: '1000', y: '2310' },
                trainPos: { x: '985', y: '2310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_G2',
                signalPos: { x: '1000', y: '2360' },
                trainPos: { x: '985', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_G1',
                signalPos: { x: '1000', y: '2380' },
                trainPos: { x: '985', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            //~ EXIT SIGNALS LEFT SIDE ~\\
            //~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2412_LG_B2',
                signalPos: { x: '1070', y: '2200' },
                trainPos: { x: '1085', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_B1',
                signalPos: { x: '1070', y: '2220' },
                trainPos: { x: '1085', y: '2220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_C',
                signalPos: { x: '1070', y: '2250' },
                trainPos: { x: '1085', y: '2250' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_E',
                signalPos: { x: '1070', y: '2280' },
                trainPos: { x: '1085', y: '2280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_F',
                signalPos: { x: '1070', y: '2310' },
                trainPos: { x: '1085', y: '2310' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_H2',
                signalPos: { x: '1070', y: '2360' },
                trainPos: { x: '1085', y: '2360' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_H1',
                signalPos: { x: '1070', y: '2380' },
                trainPos: { x: '1085', y: '2380' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            //~ INTERMEDIATE SIGNALS LEFT SIDE ~\\
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2412_LG_J',
                signalPos: { x: '1360', y: '2220' },
                trainPos: { x: '1345', y: '2220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_K',
                signalPos: { x: '1360', y: '2240' },
                trainPos: { x: '1345', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_L',
                signalPos: { x: '1360', y: '2300' },
                trainPos: { x: '1345', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_M',
                signalPos: { x: '1360', y: '2320' },
                trainPos: { x: '1345', y: '2320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~~~~~~~~~~~~~~~~~~~~~~~\\
            //~ TOR SIGNALS 112/114 ~\\
            //~~~~~~~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2412_LG_P',
                signalPos: { x: '1560', y: '2200' },
                trainPos: { x: '1575', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_R',
                signalPos: { x: '1790', y: '2200' },
                trainPos: { x: '1775', y: '2200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            //~ SIGNALS TRACK GROUP 101-110 ~\\
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2412_LG_N110',
                signalPos: { x: '1560', y: '2220' },
                trainPos: { x: '1590', y: '2220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_N108',
                signalPos: { x: '1560', y: '2240' },
                trainPos: { x: '1590', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_N106',
                signalPos: { x: '1560', y: '2260' },
                trainPos: { x: '1590', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_N104',
                signalPos: { x: '1560', y: '2280' },
                trainPos: { x: '1590', y: '2280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_N102',
                signalPos: { x: '1560', y: '2300' },
                trainPos: { x: '1590', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_N101',
                signalPos: { x: '1560', y: '2320' },
                trainPos: { x: '1590', y: '2320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_N103',
                signalPos: { x: '1560', y: '2340' },
                trainPos: { x: '1590', y: '2340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '2412_LG_S110',
                signalPos: { x: '1790', y: '2220' },
                trainPos: { x: '1760', y: '2220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_S108',
                signalPos: { x: '1790', y: '2240' },
                trainPos: { x: '1760', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_S106',
                signalPos: { x: '1790', y: '2260' },
                trainPos: { x: '1760', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_S104',
                signalPos: { x: '1790', y: '2280' },
                trainPos: { x: '1760', y: '2280' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_S102',
                signalPos: { x: '1790', y: '2300' },
                trainPos: { x: '1760', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_S101',
                signalPos: { x: '1790', y: '2320' },
                trainPos: { x: '1760', y: '2320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_S103',
                signalPos: { x: '1790', y: '2340' },
                trainPos: { x: '1760', y: '2340' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            //~ SIGNALS TRACKS 1a/2a/4/6/8 ~\\
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2412_LG_T8',
                signalPos: { x: '1850', y: '2220' },
                trainPos: { x: '1865', y: '2220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_T6',
                signalPos: { x: '1850', y: '2240' },
                trainPos: { x: '1865', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_T4',
                signalPos: { x: '1850', y: '2260' },
                trainPos: { x: '1865', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_T2',
                signalPos: { x: '1850', y: '2300' },
                trainPos: { x: '1865', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_T1',
                signalPos: { x: '1850', y: '2320' },
                trainPos: { x: '1865', y: '2320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: '2412_LG_U8',
                signalPos: { x: '1970', y: '2220' },
                trainPos: { x: '1955', y: '2220' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_U6',
                signalPos: { x: '1970', y: '2240' },
                trainPos: { x: '1955', y: '2240' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_U4',
                signalPos: { x: '1970', y: '2260' },
                trainPos: { x: '1955', y: '2260' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_U2',
                signalPos: { x: '1970', y: '2300' },
                trainPos: { x: '1955', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_U1',
                signalPos: { x: '1970', y: '2320' },
                trainPos: { x: '1955', y: '2320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            //~ INTERMEDIATE Z/W | EXIT X2/X1 | ENTRY Y2|Y1 ~\\
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
            {
                signalName: '2412_LG_Z',
                signalPos: { x: '2110', y: '2300' },
                trainPos: { x: '2125', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_W',
                signalPos: { x: '2110', y: '2320' },
                trainPos: { x: '2125', y: '2320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            ////////////////////////////////////////
            {
                signalName: '2412_LG_X2',
                signalPos: { x: '2230', y: '2300' },
                trainPos: { x: '2215', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: '2412_LG_X1',
                signalPos: { x: '2230', y: '2320' },
                trainPos: { x: '2215', y: '2320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            ////////////////////////////////////////
            {
                signalName: '2412_LG_Y2',
                signalPos: { x: '2270', y: '2300' },
                trainPos: { x: '2285', y: '2300' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: '2412_LG_Y1',
                signalPos: { x: '2270', y: '2320' },
                trainPos: { x: '2285', y: '2320' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łowicz Główny',
                    prefix: 'LG',
                    pos: { x: 1910, y: 2170 },
                    posFlipped: { x: 1675, y: 2380 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1896, y: 2340 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 95, height: 10, pos: { x: 1862.5, y: 2225 } },
                    { label: 'Peron I', width: 95, height: 10, pos: { x: 1862.5, y: 2305 } },
                ],
                trackLabels: [
                    { text: '203', pos: { x: 1135, y: 2280 } },
                    { text: '102c', pos: { x: 1155, y: 2360 } },
                    { text: '101c', pos: { x: 1165, y: 2380 } },
                    { text: '202c', pos: { x: 1300, y: 2220 } },
                    { text: '201c', pos: { x: 1290, y: 2240 } },
                    { text: '110', pos: { x: 1675, y: 2220 } },
                    { text: '108', pos: { x: 1675, y: 2240 } },
                    { text: '106', pos: { x: 1675, y: 2260 } },
                    { text: '104', pos: { x: 1675, y: 2280 } },
                    { text: '102', pos: { x: 1675, y: 2300 } },
                    { text: '101', pos: { x: 1675, y: 2320 } },
                    { text: '103', pos: { x: 1675, y: 2340 } },
                    { text: '8', pos: { x: 1910, y: 2220 } },
                    { text: '6', pos: { x: 1910, y: 2240 } },
                    { text: '4', pos: { x: 1910, y: 2260 } },
                    { text: '2a', pos: { x: 1910, y: 2300 } },
                    { text: '1a', pos: { x: 1910, y: 2320 } },
                    { text: '2c', pos: { x: 2170, y: 2300 } },
                    { text: '1c', pos: { x: 2170, y: 2320 } },
                ]
            },
            // {
            //     annotationType: 'simpleText',
            //     nodePos: { x: 1040, y: 2180 },
            //     textColor: 'white',
            //     textSize: 10,
            //     text: 'Łowicz Główny pzs R12',
            // },
            // {
            //     annotationType: 'simpleText',
            //     nodePos: { x: 1040, y: 2340 },
            //     textColor: 'white',
            //     textSize: 10,
            //     text: 'Łowicz Główny pzs R1',
            // }
        ]
    },

    "LOWICZGLOWNY_JACKOWICE_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2280,2300 LR100 SPR20 LR70 SPR5 DOT5-5-3',
                    'M2280,2320 LR100 SPR20 LR70 SPR5 DOT5-5-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L3_846N',
                signalPos: { x: '2390', y: '2300' },
                trainPos: { x: '2375', y: '2300' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L3_849',
                signalPos: { x: '2390', y: '2320' },
                trainPos: { x: '2375', y: '2320' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L3_846',
                signalPos: { x: '2390', y: '2300' },
                trainPos: { x: '2405', y: '2300' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L3_849N',
                signalPos: { x: '2390', y: '2320' },
                trainPos: { x: '2405', y: '2320' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },

            {
                signalName: 'L3_862N',
                invisibleSignal: true,
                signalPos: { x: '2510', y: '2300' },
                trainPos: { x: '2495', y: '2300' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L3_863',
                invisibleSignal: true,
                signalPos: { x: '2510', y: '2320' },
                trainPos: { x: '2495', y: '2320' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '846', pos: { x: 2330, y: 2300 } },
                    { text: '833', pos: { x: 2330, y: 2320 } },
                    { text: '862', pos: { x: 2450, y: 2300 } },
                    { text: '849', pos: { x: 2450, y: 2320 } },
                ]
            },
        ]
    },
}