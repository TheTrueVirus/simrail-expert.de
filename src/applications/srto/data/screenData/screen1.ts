import { ScreenData } from '../../types/mapdata-types'

const OLD_TRACK_COLOR = 'rgb(255, 100, 100, 0.1)'
const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'


export const SCREEN1_DATA: ScreenData.ScreenDataProps = {
    "ADDITIONAL_ELEMENTS": {
        "TRACKS": [],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 10, y: 120 },
                text: 'LK137 - Legnica'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 10, y: 230 },
                text: 'LK139 - Zwardoń'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1615, y: 225 },
                text: 'LK138 - Szabelnia'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2315, y: 222.5 },
                text: 'LK62 - Tunel'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1185, y: 465 },
                text: 'LK162'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1135, y: 550 },
                text: 'LK133 - Kraków Główny'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 10, y: 990 },
                text: 'LK154 - Dąbrowa Górnicza Towarowa'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1760, y: 1080 },
                text: 'LK1 - Warszawa Zachodnia'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 280, y: 1620 },
                text: 'Koniecpol'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1305, y: 1602.5 },
                text: 'Kozłów ⇒ Kraków Główny'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1250, y: 1397.5 },
                text: 'LK572 - Żelisławice'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1760, y: 1510 },
                text: 'LK571 - Czarnca'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2320, y: 1490 },
                text: 'LK4 - Grodzisk Mazowiecki'
            },
            {
                annotationType: 'trackBreakMarker',
                breakLetters: [
                    { first: { x: 2545, y: 80 }, second: { x: 20, y: 355 } },       // [A] Sosnowiec Glowny - Bedzin
                    { first: { x: 2460, y: 400 }, second: { x: 20, y: 795 } },      // [B] DZA - Lazy Lc
                    { first: { x: 2545, y: 760 }, second: { x: 20, y: 1055 } },     // [C] Lazy La - Zawiercie
                    { first: { x: 2490, y: 1160 }, second: { x: 600, y: 1275 } },   // [D] Gora Wlodowska - Psary 1
                    { first: { x: 2420, y: 1280 }, second: { x: 20, y: 1415 } },    // [E] Gora Wlodowska - Psary 2
                ]
            }
        ]
    },
    "KATOWICETOWAROWA_BRYNOW": {
        "TRACKS": [
            {
                color: 'gray',
                commands: [
                    'M35,40 DOT5-5-10 SPR10 LR100 SPR20 LR100',

                    'M5,140 DOT5-5-10 SPR20 LR100 SPR20 LR100',
                    'M5,160 DOT5-5-10 SPR20 LR100 SPR20 LR100',
                    'M15,180 DOT5-5-10 SPR10 LR100 SPR20 LR100',
                    'M15,200 DOT5-5-10 SPR10 LR100 SPR20 LR100',
                ]
            },
        ],
        "SIGNALS": [
            {
                // BORDER SIGNAL
                signalName: 'l139_bry_o',
                invisibleSignal: true,
                signalPos: { x: '-10', y: '0' },
                trainPos: { x: '20', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'l139_bry_a',
                signalPos: { x: '130', y: '40' },
                trainPos: { x: '145', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'l139_20',
                signalPos: { x: '250', y: '40' },
                trainPos: { x: '235', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'l139_15',
                signalPos: { x: '250', y: '40' },
                trainPos: { x: '265', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                // BORDER SIGNAL
                signalName: 'l137_ktc_o',
                invisibleSignal: true,
                signalPos: { x: '-10', y: '0' },
                trainPos: { x: '10', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'l137_ktc_x',
                signalPos: { x: '110', y: '140' },
                trainPos: { x: '95', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'l137_ktc_y',
                signalPos: { x: '110', y: '160' },
                trainPos: { x: '95', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'l137_ktc_u1',
                signalPos: { x: '110', y: '140' },
                trainPos: { x: '125', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'l137_ktc_u2',
                signalPos: { x: '110', y: '160' },
                trainPos: { x: '125', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'l137_21n',
                signalPos: { x: '230', y: '140' },
                trainPos: { x: '215', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'l137_22',
                signalPos: { x: '230', y: '160' },
                trainPos: { x: '215', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'l137_17',
                signalPos: { x: '230', y: '140' },
                trainPos: { x: '245', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'l137_16n',
                signalPos: { x: '230', y: '160' },
                trainPos: { x: '245', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //
            // BRYNOW
            //
            {
                signalName: 'l139_bry_H',
                signalPos: { x: '120', y: '180' },
                trainPos: { x: '105', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'l139_bry_J',
                signalPos: { x: '120', y: '200' },
                trainPos: { x: '105', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'l139_bry_d',
                signalPos: { x: '230', y: '180' },
                trainPos: { x: '215', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'l139_bry_e',
                signalPos: { x: '230', y: '200' },
                trainPos: { x: '215', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'l139_bry_b',
                signalPos: { x: '230', y: '180' },
                trainPos: { x: '245', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'l139_bry_c',
                signalPos: { x: '230', y: '200' },
                trainPos: { x: '245', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    // Brynow Tor 1
                    { text: '20', pos: { x: 190, y: 40 } },
                    { text: '15', pos: { x: 310, y: 40 } },

                    // Katowice <-> KTC
                    { text: '21', pos: { x: 170, y: 140 } },
                    { text: '28', pos: { x: 170, y: 160 } },
                    { text: '17', pos: { x: 290, y: 140 } },
                    { text: '22', pos: { x: 290, y: 160 } },

                    // Katowice <-> Brynow
                    { text: '3', pos: { x: 170, y: 180 } },
                    { text: '2', pos: { x: 170, y: 200 } },
                    { text: '3L', pos: { x: 290, y: 180 } },
                    { text: '2L', pos: { x: 290, y: 200 } },
                ]
            }
        ]
    },
    "1614_KO_KATOWICE": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M735,120 SWDN20 LR10 CROSS M735,180 SWUP20',
                    'M695,140 LR260',
                    'M695,160 LR240',
                ]
            },
            {
                color: 'white',
                commands: [
                    // TOR 1B - T9
                    'M370,40 LR72.5 SWUP20 LR82.5 SPR10 LR100 SPR10 LR25 SWDN20',
                    // SW72/76ab - SW64/61 - T7 - SW55/54 - T17 - SW18
                    'M420,40 SWDN20 LR40 SWUP20 LR60 SPR10 LR100 SPR10 LR40 SWDN40 LR85 SPR10 LR190 SWDN20',
                    // CROSS - SW61cd - T5 - SW55/53 - T15 - TOR 1Z
                    'M480,20 CROSS LR10 SWDN20 LR15 SPR10 LR100 SPR10 LR25 M660,40 SWDN20 LR10 SWDN40 LR100 SPR10 LR120 SPR10 LR140',
                    // TOR 1K - T3
                    'M350,140 LR70 SWUP60 LR105 SPR10 LR100 SPR10 LR10 SWDN40',
                    // T1 - T13
                    'M440,160 SWUP60 LR50 SWDN20 LR30 SPR10 LR100 SPR10 LR130 SPR10 LR120 SPR10 LR140',
                    // T2
                    'M465,200 SWUP20 LR10 SWUP20 LR10 SWUP20 LR10 SPR10 LR100 SPR10 LR40 SWDN20',
                    // TOR 2K - T4 - T14
                    'M350,160 LR160 SPR10 LR100 SPR10 LR55 SWDN20 LR90 SPR10 LR100 SPR10 LR35 SWDN20 LR45 LINE1005,180 LR10 SWUP20 LR10 SWUP40 LR10 SWUP20',
                    // TOR 2B - T6 - T16
                    'M350,180 LR160 SPR10 LR100 SPR10 LR40 M655,160 SWDN20 LR10 SWDN20 LR105 SPR10 LR100 SPR10 LR10 SWUP20 LR10 SWUP20 LR115 SWDN20 LR10',
                    // TOR 3B - T8 - T18
                    'M350,200 LR160 SPR10 LR100 SPR10 LR25 M640,180 SWDN20 LR10 SWDN20 LR120 SPR10 LR130 SPR10 LR15 SWUP20 LR10 SWUP20 LR70 SWDN20 LR20',
                    // T10 - T22/20
                    'M495,200 SWDN20 LR10 SPR10 LR100 SPR10 LR40 SWDN20 LR265 SPR10 LR20 SWUP40',
                    'M685,240 SWDN20 LR20 SPR10 LR130 SWUP20',


                    // CROSS SWITCHES LEFT UPPER SIDE
                    'M435,60 CROSS LR10 CROSS',
                    // SWITCHES BOTTOM LEFT SIDE
                    'M360,140 SWDN20 LR10 CROSS LR10 SWDN20 M360,200 SWUP20 M405,160 SWUP20',
                    // SWITCHES MIDDLE TOP
                    'M705,80 SWDN20 LR10 SWDN20',
                    'M695,220 CROSS M725,200 CROSS M755,200 SWUP20',

                    // SWITCHES RIGHT SIDE
                    'M930,100 SWDN20 LR10 SWDN20 LR5 SWDN20 LR10 SWDN20',
                    'M965,100 SWDN20 LR10 SWDN40',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'KO_T',
                signalPos: { x: '370', y: '40' },
                trainPos: { x: '355', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_S',
                signalPos: { x: '350', y: '140' },
                trainPos: { x: '335', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_R',
                signalPos: { x: '350', y: '160' },
                trainPos: { x: '335', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_P',
                signalPos: { x: '350', y: '180' },
                trainPos: { x: '335', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_O',
                signalPos: { x: '350', y: '200' },
                trainPos: { x: '335', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'KO_N9',
                signalPos: { x: '530', y: '20' },
                trainPos: { x: '545', y: '20' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N7',
                signalPos: { x: '530', y: '40' },
                trainPos: { x: '545', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N5',
                signalPos: { x: '530', y: '60' },
                trainPos: { x: '545', y: '60' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N3',
                signalPos: { x: '530', y: '80' },
                trainPos: { x: '545', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N1',
                signalPos: { x: '530', y: '120' },
                trainPos: { x: '545', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N2',
                signalPos: { x: '510', y: '140' },
                trainPos: { x: '525', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N4',
                signalPos: { x: '510', y: '160' },
                trainPos: { x: '525', y: '160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N6',
                signalPos: { x: '510', y: '180' },
                trainPos: { x: '525', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N8',
                signalPos: { x: '510', y: '200' },
                trainPos: { x: '525', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_N10',
                signalPos: { x: '510', y: '220' },
                trainPos: { x: '525', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ INTERMEDIATE SIGNALS TO THE RIGHT SIDE
            {
                signalName: 'KO_M9',
                signalPos: { x: '650', y: '20' },
                trainPos: { x: '635', y: '20' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M7',
                signalPos: { x: '650', y: '40' },
                trainPos: { x: '635', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M5',
                signalPos: { x: '650', y: '60' },
                trainPos: { x: '635', y: '60' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M3',
                signalPos: { x: '650', y: '80' },
                trainPos: { x: '635', y: '80' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M1',
                signalPos: { x: '650', y: '120' },
                trainPos: { x: '635', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M2',
                signalPos: { x: '630', y: '140' },
                trainPos: { x: '615', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M4',
                signalPos: { x: '630', y: '160' },
                trainPos: { x: '615', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M6',
                signalPos: { x: '630', y: '180' },
                trainPos: { x: '615', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M8',
                signalPos: { x: '630', y: '200' },
                trainPos: { x: '615', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_M10',
                signalPos: { x: '630', y: '220' },
                trainPos: { x: '615', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ INTERMEDIATE SIGNALS TO THE LEFT SIDE
            {
                signalName: 'KO_L',
                signalPos: { x: '780', y: '80' },
                trainPos: { x: '795', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_J',
                signalPos: { x: '780', y: '100' },
                trainPos: { x: '795', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_K',
                signalPos: { x: '780', y: '120' },
                trainPos: { x: '795', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_G14',
                signalPos: { x: '780', y: '180' },
                trainPos: { x: '795', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_G16',
                signalPos: { x: '780', y: '200' },
                trainPos: { x: '795', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_G18',
                signalPos: { x: '780', y: '220' },
                trainPos: { x: '795', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_F',
                signalPos: { x: '710', y: '260' },
                trainPos: { x: '725', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'KO_E15',
                signalPos: { x: '920', y: '100' },
                trainPos: { x: '905', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_E13',
                signalPos: { x: '920', y: '120' },
                trainPos: { x: '905', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_E14',
                signalPos: { x: '900', y: '180' },
                trainPos: { x: '885', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_E16',
                signalPos: { x: '900', y: '200' },
                trainPos: { x: '885', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_E18',
                signalPos: { x: '930', y: '220' },
                trainPos: { x: '915', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_E20',
                signalPos: { x: '950', y: '240' },
                trainPos: { x: '935', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'KO_D',
                signalPos: { x: '1060', y: '100' },
                trainPos: { x: '1075', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_C',
                signalPos: { x: '1060', y: '120' },
                trainPos: { x: '1075', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_B',
                signalPos: { x: '1060', y: '180' },
                trainPos: { x: '1075', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KO_A',
                signalPos: { x: '1060', y: '200' },
                trainPos: { x: '1075', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Katowice',
                    prefix: 'KO',
                    pos: { x: 770, y: 50 },
                    posFlipped: { x: 770, y: 290 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 635, y: 240 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 95, height: 10, pos: { x: 542.5, y: 25 } },
                    { label: 'Peron II', width: 95, height: 30, pos: { x: 542.5, y: 85 } },
                    { label: 'Peron III', width: 95, height: 10, pos: { x: 522.5, y: 145 } },
                    { label: 'Peron IV', width: 95, height: 10, pos: { x: 522.5, y: 205 } },
                ],
                trackLabels: [
                    { text: '9', pos: { x: 590, y: 20 } },
                    { text: '7', pos: { x: 590, y: 40 } },
                    { text: '5', pos: { x: 590, y: 60 } },
                    { text: '3', pos: { x: 590, y: 80 } },
                    { text: '1', pos: { x: 590, y: 120 } },
                    { text: '2', pos: { x: 570, y: 140 } },
                    { text: '4', pos: { x: 570, y: 160 } },
                    { text: '6', pos: { x: 570, y: 180 } },
                    { text: '8', pos: { x: 570, y: 200 } },
                    { text: '10', pos: { x: 570, y: 220 } },
                    { text: '17', pos: { x: 890, y: 80 } },
                    { text: '15', pos: { x: 850, y: 100 } },
                    { text: '13', pos: { x: 850, y: 120 } },
                    { text: '11', pos: { x: 850, y: 140 } },
                    { text: '12', pos: { x: 850, y: 160 } },
                    { text: '14', pos: { x: 840, y: 180 } },
                    { text: '16', pos: { x: 840, y: 200 } },
                    { text: '18', pos: { x: 855, y: 220 } },
                    { text: '20', pos: { x: 890, y: 240 } },
                    { text: '22', pos: { x: 780, y: 240 } },
                    { text: '26', pos: { x: 780, y: 260 } },
                ]
            }
        ]
    },
    "KATOWICE_KATOWICEZAWODZIE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1070,100 LR100',
                    'M1070,120 LR100',
                    'M1070,180 LR100',
                    'M1070,200 LR100'
                ]
            }
        ],
        "SIGNALS": [], //? NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: 'TOR 1', pos: { x: 1120, y: 100 } },
                    { text: 'TOR 2', pos: { x: 1120, y: 120 } },
                    { text: 'TOR 3', pos: { x: 1120, y: 180 } },
                    { text: 'TOR 4', pos: { x: 1120, y: 200 } },
                ]
            }
        ]
    },
    "1655_KZ_KATOWICEZAWODZIE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1180,100 LR130 SPR10 LR120 SPR10 LR100',
                    'M1180,120 LR130 SPR10 LR120 SPR10 LR100',

                    'M1180,180 LR130 SPR10 LR120 SPR10 LR100',
                    'M1180,200 LR130 SPR10 LR120 SPR10 LR90',

                    'M1190,100 SWDN20 LR10 SWDN60 LR25 SWUP60 LR10 SWUP20',
                    'M1220,200 SWUP20 LR25 SWDN20 LR10 SWDN20 LR40 SPR10 LR120 SPR10 LR40 SWUP20 LR10 SWUP20 LR10 SWUP60',
                    'M1280,220 SWDN20 LR35 SPR10 LR100 SPR10 LR35 SWUP20',
                    'M1295,240 SWDN20 LR20 SPR10 LR100 SPR10 LR20 SWUP20',

                    'M1490,100 SWDN20 LR40 SWUP20'
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'KZ_J1S',
                signalPos: { x: '1180', y: '100' },
                trainPos: { x: '1165', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_O',
                signalPos: { x: '1180', y: '120' },
                trainPos: { x: '1165', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_P1M',
                signalPos: { x: '1180', y: '180' },
                trainPos: { x: '1165', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_P',
                signalPos: { x: '1180', y: '200' },
                trainPos: { x: '1165', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS TO THE LEFT
            {
                signalName: 'KZ_K',
                signalPos: { x: '1310', y: '100' },
                trainPos: { x: '1325', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_K2',
                signalPos: { x: '1310', y: '120' },
                trainPos: { x: '1325', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_M',
                signalPos: { x: '1310', y: '180' },
                trainPos: { x: '1325', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_M4',
                signalPos: { x: '1310', y: '200' },
                trainPos: { x: '1325', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_N6',
                signalPos: { x: '1310', y: '220' },
                trainPos: { x: '1325', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_N8',
                signalPos: { x: '1320', y: '240' },
                trainPos: { x: '1335', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_N10',
                signalPos: { x: '1320', y: '260' },
                trainPos: { x: '1335', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS TO THE RIGHT
            {
                signalName: 'KZ_D1',
                signalPos: { x: '1450', y: '100' },
                trainPos: { x: '1435', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_D2',
                signalPos: { x: '1450', y: '120' },
                trainPos: { x: '1435', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_E3',
                signalPos: { x: '1450', y: '180' },
                trainPos: { x: '1435', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_E',
                signalPos: { x: '1450', y: '200' },
                trainPos: { x: '1435', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_F',
                signalPos: { x: '1450', y: '220' },
                trainPos: { x: '1435', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_G',
                signalPos: { x: '1440', y: '240' },
                trainPos: { x: '1425', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_H',
                signalPos: { x: '1440', y: '260' },
                trainPos: { x: '1425', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_J2',
                signalPos: { x: '1550', y: '200' },
                trainPos: { x: '1535', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'KZ_B1',
                signalPos: { x: '1550', y: '100' },
                trainPos: { x: '1565', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_B2',
                signalPos: { x: '1550', y: '120' },
                trainPos: { x: '1565', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZw_A',
                signalPos: { x: '1550', y: '180' },
                trainPos: { x: '1565', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KZ_J',
                signalPos: { x: '1550', y: '200' },
                trainPos: { x: '1565', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Katowice Zawodzie',
                    prefix: 'KZ',
                    pos: { x: 1380, y: 50 },
                    posFlipped: { x: 1380, y: 300 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1250, y: 140 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 70, height: 10, pos: { x: 1322, y: 105 } },
                    { label: 'Peron II', width: 70, height: 10, pos: { x: 1322, y: 185 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1380, y: 100 } },
                    { text: '2', pos: { x: 1380, y: 120 } },
                    { text: '3', pos: { x: 1380, y: 180 } },
                    { text: '4', pos: { x: 1380, y: 200 } },
                    { text: '6', pos: { x: 1380, y: 220 } },
                    { text: '8', pos: { x: 1380, y: 240 } },
                    { text: '10', pos: { x: 1380, y: 260 } },
                ]
            }
        ]
    },
    "KATOWICEZAWODZIE_MYSLOWICE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1560,180 LR100 SPR20 LR70 SPR5 DOT5-5-3',
                    'M1560,200 LR100 SPR20 LR70 SPR5 DOT5-5-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L138_279N',
                signalPos: { x: '1670', y: '180' },
                trainPos: { x: '1655', y: '180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L138_282',
                signalPos: { x: '1670', y: '200' },
                trainPos: { x: '1655', y: '200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L138_279',
                signalPos: { x: '1670', y: '180' },
                trainPos: { x: '1685', y: '180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L138_282N',
                signalPos: { x: '1670', y: '200' },
                trainPos: { x: '1685', y: '200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'Szb_D1',
                invisibleSignal: true,
                signalPos: { x: '1790', y: '180' },
                trainPos: { x: '1777', y: '180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L138_266',
                invisibleSignal: true,
                signalPos: { x: '1790', y: '200' },
                trainPos: { x: '1777', y: '200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '279', pos: { x: 1610, y: 180 } },
                    { text: '272', pos: { x: 1610, y: 200 } },
                    { text: '267', pos: { x: 1717.5, y: 180 } },
                    { text: '282', pos: { x: 1717.5, y: 200 } },
                ]
            },
        ]
    },
    "KATOWICEZAWODZIE_SOSNOWIECGLOWNY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1560,100 ABS100-20-3',
                    'M1560,120 LR100 SPR10 LR110 SPR20 LR100',

                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L1_3133N',
                signalPos: { x: '1670', y: '100' },
                trainPos: { x: '1655', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_3138',
                signalPos: { x: '1670', y: '120' },
                trainPos: { x: '1655', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_3133',
                signalPos: { x: '1670', y: '100' },
                trainPos: { x: '1685', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_3121N',
                signalPos: { x: '1790', y: '100' },
                trainPos: { x: '1775', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_3128',
                signalPos: { x: '1790', y: '120' },
                trainPos: { x: '1775', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_3121',
                signalPos: { x: '1790', y: '100' },
                trainPos: { x: '1805', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_3128N',
                signalPos: { x: '1790', y: '120' },
                trainPos: { x: '1805', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'K. Szopienice Płd.',
                    pos: { x: 1755, y: 70 },
                    posFlipped: { x: 1755, y: 150 },
                    platforms: [
                        { pos: { x: 1728, y: 105 }, width: 50, height: 10 }
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '3133', pos: { x: 1610, y: 100 } },
                    { text: '3148', pos: { x: 1610, y: 120 } },

                    { text: '3121', pos: { x: 1730, y: 100 } },
                    { text: '3138', pos: { x: 1730, y: 120 } },

                    { text: '3111', pos: { x: 1850, y: 100 } },
                    { text: '3128', pos: { x: 1850, y: 120 } },
                ]
            },
        ]
    },
    "3993_SG_SOSNOWIECGLOWNY": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M2140,80 LR30 SPR10 LR140 SPR10 LR30',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //? switch and connector to Spl
                    'M1925,100 SWDN20 LR10 UTLD20 LL10',


                    //~ TOR 1K - T1 - TOR 1B
                    'M1910,100 LR40 SPR10 LR100 SPR10 LR100 SPR10 LR140 SPR10 LR90',
                    //~ TOR 2K - T2 - TOR 2B
                    'M1910,120 LR40 SPR10 LR100 SPR10 LR100 SPR10 LR140 SPR10 LR90',
                    //~ TOR 1S - T4
                    'M1930,160 LR130 SWUP20 LR85 SPR10 LR160 SPR10 LR10 SWUP20 LR10 SWUP20 LR40 SWDN20',

                    //^ T5
                    'M2130,100 SWUP20 LR10 SWUP20 LR40 SPR10 LR100 SPR10 LR40 SWDN20 LR15 LINE2390,100',
                    //^ T7
                    'M2175,60 SWUP20 LR10 SPR10 LR100 SPR10 LR25 SWDN20',
                    //^ T9
                    'M2160,60 SWUP40 LR25 SPR10 LR100 SPR10 LR10 SWDN20',



                    //? SWITCHES LEFT SIDE
                    'M2080,100 SWDN20 LR30 SWUP20',
                    'M2100,140 SWUP20 LR25 SWDN20',
                ]
            }
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'SG_X',
                signalPos: { x: '1910', y: '100' },
                trainPos: { x: '1895', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_Y',
                signalPos: { x: '1910', y: '120' },
                trainPos: { x: '1895', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ ENTRY SIGNALS SOSNOWIEC POLUDNIOWY
            {
                signalName: 'SG_S',
                signalPos: { x: '1930', y: '140' },
                trainPos: { x: '1915', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_P',
                signalPos: { x: '1930', y: '160' },
                trainPos: { x: '1915', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ EXIT SIGNALS TO KZ
            {
                signalName: 'SG_U1',
                signalPos: { x: '1950', y: '100' },
                trainPos: { x: '1965', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_U2',
                signalPos: { x: '1950', y: '120' },
                trainPos: { x: '1965', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ INTERMEDIATE SIGNALS
            {
                signalName: 'SG_R1',
                signalPos: { x: '2070', y: '100' },
                trainPos: { x: '2055', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_R2',
                signalPos: { x: '2070', y: '120' },
                trainPos: { x: '2055', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ EXIT SIGNALS TO THE LEFT
            {
                signalName: 'SG_N9',
                signalPos: { x: '2190', y: '20' },
                trainPos: { x: '2205', y: '20' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N7',
                signalPos: { x: '2190', y: '40' },
                trainPos: { x: '2205', y: '40' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N5',
                signalPos: { x: '2190', y: '60' },
                trainPos: { x: '2205', y: '60' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N3',
                signalPos: { x: '2170', y: '80' },
                trainPos: { x: '2185', y: '80' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N1',
                signalPos: { x: '2170', y: '100' },
                trainPos: { x: '2185', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N2',
                signalPos: { x: '2170', y: '120' },
                trainPos: { x: '2185', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_N4',
                signalPos: { x: '2150', y: '140' },
                trainPos: { x: '2165', y: '140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ EXIT SIGNALS TO THE RIGHT
            {
                signalName: 'SG_H9',
                signalPos: { x: '2310', y: '20' },
                trainPos: { x: '2295', y: '20' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H7',
                signalPos: { x: '2310', y: '40' },
                trainPos: { x: '2295', y: '40' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H5',
                signalPos: { x: '2310', y: '60' },
                trainPos: { x: '2295', y: '60' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H3',
                signalPos: { x: '2330', y: '80' },
                trainPos: { x: '2315', y: '80' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H1',
                signalPos: { x: '2330', y: '100' },
                trainPos: { x: '2275', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H2',
                signalPos: { x: '2330', y: '120' },
                trainPos: { x: '2275', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_H4',
                signalPos: { x: '2330', y: '140' },
                trainPos: { x: '2315', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'SG_B',
                signalPos: { x: '2420', y: '100' },
                trainPos: { x: '2435', y: '100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_A',
                signalPos: { x: '2420', y: '120' },
                trainPos: { x: '2435', y: '120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sosnowiec Główny',
                    prefix: 'SG',
                    pos: { x: 2030, y: 50 },
                    posFlipped: { x: 2200, y: 175 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1980, y: 130 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 95, height: 10, pos: { x: 2182, y: 105 } },
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 2162, y: 145 } },
                ],
                trackLabels: [
                    { text: '1c', pos: { x: 2010, y: 100 } },
                    { text: '2c', pos: { x: 2010, y: 120 } },
                    { text: '9', pos: { x: 2250, y: 20 } },
                    { text: '7', pos: { x: 2250, y: 40 } },
                    { text: '5', pos: { x: 2250, y: 60 } },
                    { text: '3', pos: { x: 2250, y: 80 } },
                    { text: '1', pos: { x: 2250, y: 100 } },
                    { text: '2', pos: { x: 2250, y: 120 } },
                    { text: '4b', pos: { x: 2190, y: 140 } },
                    { text: '4a', pos: { x: 2280, y: 140 } },
                ]
            },
        ]
    },
    "SOSNOWIECGLOWNY_SOSNOWIECPOLUDNIOWY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1920,140 LL110 UTRD140 LR110',
                    'M1920,160 LL95 UTRD40 LR95',
                ]
            },
        ],
        "SIGNALS": [], //? NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [] //? NO ANNOTATIONS IN THIS CLUSTER
    },
    "4010_Spl1_SOSNOWIECPOLUDNIOWY": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M1990,240 SWDN20 LR25 SPR10 LR100 SPR10 LR10 SWUP20',

                    // track to Sosnowiec Dandowka
                    'M2200,220 LR100',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ FROM UPPER CONNECTOR - T1
                    'M1930,200 LR90 SPR10 LR100 SPR10 LR10 SWDN20',
                    //^ T2 - TOR 1D
                    'M1945,200 SWDN20 LR70 SPR10 LR100 SPR10 LR50',
                    //~ FROM LOWER CONNECTOR - T4
                    'M1930,280 LR20 SWUP40 LR65 SPR10 LR100 SPR10 LR25 SWUP20',

                    //? SWITCHES LEFT SIDE
                    'M1965,240 SWUP20 LR10 SWUP20',
                    'M2005,220 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'SPł1_W',
                signalPos: { x: '1930', y: '200' },
                trainPos: { x: '1915', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_T',
                signalPos: { x: '1930', y: '280' },
                trainPos: { x: '1915', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Spł1_J',
                signalPos: { x: '2020', y: '200' },
                trainPos: { x: '2040', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_K',
                signalPos: { x: '2020', y: '220' },
                trainPos: { x: '2040', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_L',
                signalPos: { x: '2020', y: '240' },
                trainPos: { x: '2040', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_M',
                signalPos: { x: '2020', y: '260' },
                trainPos: { x: '2040', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_C',
                signalPos: { x: '2140', y: '200' },
                trainPos: { x: '2125', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_B',
                signalPos: { x: '2140', y: '220' },
                trainPos: { x: '2125', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_D',
                signalPos: { x: '2140', y: '240' },
                trainPos: { x: '2125', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_E',
                signalPos: { x: '2140', y: '260' },
                trainPos: { x: '2125', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_A',
                signalPos: { x: '2190', y: '220' },
                trainPos: { x: '2205', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                //? ENTRY SIGNAL SOSNOWIEC_DANDOWKA
                signalName: 'SDn_W',
                signalPos: { x: '2310', y: '220' },
                trainPos: { x: '2295', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sosnowiec Południowy',
                    prefix: 'Spł1',
                    pos: { x: 2040, y: 177.5 },
                    posFlipped: { x: 2080, y: 300 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1910, y: 230 },
                    rotation: 90,
                },
                platforms: [
                    { label: 'Peron I', width: 55, height: 10, pos: { x: 2040, y: 205 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 2080, y: 200 } },
                    { text: '2', pos: { x: 2080, y: 220 } },
                    { text: '4', pos: { x: 2080, y: 240 } },
                    { text: '6', pos: { x: 2080, y: 260 } },
                ]
            },
        ]
    },
    "SOSNOWIECGLOWNY_BEDZIN_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2430,100 LR95 SPR10 LR10 TEND',
                    'M2430,120 LR95 SPR10 LR10 TEND',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_3075N',
                signalPos: { x: '2535', y: '100' },
                trainPos: { x: '2520', y: '100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3076',
                signalPos: { x: '2535', y: '120' },
                trainPos: { x: '2520', y: '120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            }
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '3071', pos: { x: 2477.5, y: 100 } },
                    { text: '3080', pos: { x: 2477.5, y: 120 } },
                ]
            }
        ]
    },



    "SOSNOWIECGLOWNY_BEDZIN_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,370 TSTART LR10 SPR10 LR100',
                    'M10,390 TSTART LR10 SPR10 LR100',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_3071',
                signalPos: { x: '30', y: '380' },
                trainPos: { x: '45', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3070N',
                signalPos: { x: '30', y: '400' },
                trainPos: { x: '45', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '3065', pos: { x: 90, y: 380 } },
                    { text: '3074', pos: { x: 90, y: 400 } },
                ]
            }
        ]
    },
    "124_B_BEDZIN": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M150,380 LR50 SPR10 LR120 SPR10 LR100',
                    'M150,400 LR50 SPR10 LR120 SPR10 LR100',
                    'M160,380 SWDN20 LR10 SWDN20 LR20 SPR10 LR120 SPR10 LR20 SWUP20 LR10 SWUP20 LR25 SWDN20',
                    'M190,420 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20'
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'B_R',
                signalPos: { x: '150', y: '380' },
                trainPos: { x: '135', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_S',
                signalPos: { x: '150', y: '400' },
                trainPos: { x: '135', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'B_K1',
                signalPos: { x: '200', y: '380' },
                trainPos: { x: '225', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_K2',
                signalPos: { x: '200', y: '400' },
                trainPos: { x: '225', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_K4',
                signalPos: { x: '200', y: '420' },
                trainPos: { x: '225', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_K6',
                signalPos: { x: '210', y: '440' },
                trainPos: { x: '225', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'B_E1',
                signalPos: { x: '340', y: '380' },
                trainPos: { x: '315', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_E2',
                signalPos: { x: '340', y: '400' },
                trainPos: { x: '315', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_E4',
                signalPos: { x: '340', y: '420' },
                trainPos: { x: '315', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_E6',
                signalPos: { x: '330', y: '440' },
                trainPos: { x: '315', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT AND ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'B_C',
                signalPos: { x: '450', y: '380' },
                trainPos: { x: '435', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_D',
                signalPos: { x: '450', y: '400' },
                trainPos: { x: '435', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_B',
                signalPos: { x: '450', y: '380' },
                trainPos: { x: '465', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'B_A',
                signalPos: { x: '450', y: '400' },
                trainPos: { x: '465', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Będzin',
                    prefix: 'B',
                    pos: { x: 270, y: 340 },
                    posFlipped: { x: 250, y: 475 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 300, y: 460 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 70, height: 10, pos: { x: 235, y: 385 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 270, y: 380 } },
                    { text: '2', pos: { x: 270, y: 400 } },
                    { text: '4', pos: { x: 270, y: 420 } },
                    { text: '6', pos: { x: 270, y: 440 } },
                ]
            },
        ]
    },
    "BEDZIN_DABROWAGORNICZA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M460,380 ABS100-20-3',
                    'M460,400 ABS100-20-3',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_3037N',
                signalPos: { x: '570', y: '380' },
                trainPos: { x: '555', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_3036',
                signalPos: { x: '570', y: '400' },
                trainPos: { x: '555', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_3037',
                signalPos: { x: '570', y: '380' },
                trainPos: { x: '585', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3036N',
                signalPos: { x: '570', y: '400' },
                trainPos: { x: '585', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3023N',
                signalPos: { x: '690', y: '380' },
                trainPos: { x: '675', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3022',
                signalPos: { x: '690', y: '400' },
                trainPos: { x: '675', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_3023',
                signalPos: { x: '690', y: '380' },
                trainPos: { x: '705', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_3022N',
                signalPos: { x: '690', y: '400' },
                trainPos: { x: '705', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Będzin Miasto',
                    pos: { x: 485, y: 350 },
                    posFlipped: { x: 485, y: 430 },
                    platforms: [
                        { pos: { x: 462, y: 367.5 }, width: 50, height: 7.5 },
                        { pos: { x: 462, y: 405 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Będzin Ksawera',
                    pos: { x: 725, y: 350 },
                    posFlipped: { x: 725, y: 430 },
                    platforms: [
                        { pos: { x: 702, y: 385 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '3037', pos: { x: 510, y: 380 } },
                    { text: '3048', pos: { x: 510, y: 400 } },

                    { text: '3023', pos: { x: 630, y: 380 } },
                    { text: '3036', pos: { x: 630, y: 400 } },

                    { text: '3011', pos: { x: 750, y: 380 } },
                    { text: '3022', pos: { x: 750, y: 400 } },
                ]
            },
        ]
    },
    "719_DG_DABROWAGORNICZA": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M810,380 LR50 SPR10 LR210 SPR10 LR50',
                    'M810,400 LR50 SPR10 LR100 SPR10 LR100 SPR10 LR50',
                    'M820,400 SWUP20 LR20 SWDN20'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'DG_O',
                signalPos: { x: '810', y: '380' },
                trainPos: { x: '795', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_P',
                signalPos: { x: '810', y: '400' },
                trainPos: { x: '795', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_N1',
                signalPos: { x: '860', y: '380' },
                trainPos: { x: '875', y: '380' },
                // TODO
                trainPosDistance: [
                    { distanceToSignal: 350, x: 985, y: 380 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_N2',
                signalPos: { x: '860', y: '400' },
                trainPos: { x: '875', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_D',
                signalPos: { x: '980', y: '400' },
                trainPos: { x: '965', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_C1',
                signalPos: { x: '1090', y: '380' },
                trainPos: { x: '1075', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_C2',
                signalPos: { x: '1090', y: '400' },
                trainPos: { x: '1075', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_A',
                signalPos: { x: '1140', y: '380' },
                trainPos: { x: '1155', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DG_B',
                signalPos: { x: '1140', y: '400' },
                trainPos: { x: '1155', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Dąbrowa Górnicza',
                    prefix: 'DG',
                    pos: { x: 975, y: 340 },
                    posFlipped: { x: 975, y: 460 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1070, y: 415 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 95, height: 10, pos: { x: 982.5, y: 385 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 975, y: 380 } },
                    { text: '2', pos: { x: 1030, y: 400 } },
                ]
            },
        ]
    },
    "DABROWAGORNICZA_DABROWAGORNICZAZABKOWICE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1150,380 LR100 SPR20 LR100 SPR20 LR100 SPR20 LR170',
                    'M1150,400 LR170 SPR20 LR100 SPR20 LR100 SPR20 LR100',

                    // DZA / DGHK -> DZ
                    'M1235,480 DOT5-5-10',
                    'M1235,500 DOT5-5-10',
                    'M1235,520 DOT5-5-10',

                    'M1420,500 LR100',
                    'M1420,520 LR100',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_2983N',
                signalPos: { x: '1260', y: '380' },
                trainPos: { x: '1245', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2980',
                signalPos: { x: '1330', y: '400' },
                trainPos: { x: '1315', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2983',
                signalPos: { x: '1260', y: '380' },
                trainPos: { x: '1275', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_2980N',
                signalPos: { x: '1330', y: '400' },
                trainPos: { x: '1345', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },

            {
                signalName: 'L1_2971N',
                signalPos: { x: '1380', y: '380' },
                trainPos: { x: '1365', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2966',
                signalPos: { x: '1450', y: '400' },
                trainPos: { x: '1435', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2971',
                signalPos: { x: '1380', y: '380' },
                trainPos: { x: '1395', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2966N',
                signalPos: { x: '1450', y: '400' },
                trainPos: { x: '1465', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },

            {
                signalName: 'L1_2955N',
                signalPos: { x: '1500', y: '380' },
                trainPos: { x: '1485', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_2952',
                signalPos: { x: '1570', y: '400' },
                trainPos: { x: '1555', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last'
            },
            {
                signalName: 'L1_2955',
                signalPos: { x: '1500', y: '380' },
                trainPos: { x: '1515', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2952N',
                signalPos: { x: '1570', y: '400' },
                trainPos: { x: '1585', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
            {
                signalName: 'L1_2941',
                signalPos: { x: '1690', y: '380' },
                trainPos: { x: '1705', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'D.G. Gołonóg',
                    pos: { x: 1415, y: 350 },
                    posFlipped: { x: 1415, y: 430 },
                    platforms: [
                        { pos: { x: 1392.5, y: 385 }, width: 45, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'D.G. Pogoria',
                    pos: { x: 1535, y: 350 },
                    posFlipped: { x: 1535, y: 430 },
                    platforms: [
                        { pos: { x: 1512.5, y: 407.5 }, width: 45, height: 7.5 },
                        { pos: { x: 1512.5, y: 365 }, width: 45, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2983', pos: { x: 1200, y: 380 } },
                    { text: '2994', pos: { x: 1235, y: 400 } },

                    { text: '2971', pos: { x: 1320, y: 380 } },
                    { text: '2980', pos: { x: 1390, y: 400 } },

                    { text: '2955', pos: { x: 1440, y: 380 } },
                    { text: '2966', pos: { x: 1510, y: 400 } },

                    { text: '2941', pos: { x: 1595, y: 380 } },
                    { text: '2952', pos: { x: 1630, y: 400 } },
                ]
            },
        ]
    },
    "721_DGHK_DABROWAGORNICZAHUTAKATOWICE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1340,480 LR30 SWDN20 LR10 SWDN20',
                    'M1340,500 LR70',
                    'M1340,520 LR70',
                    'M1360,520 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'DGHK_N',
                signalPos: { x: '1340', y: '480' },
                trainPos: { x: '1327.5', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_M',
                signalPos: { x: '1340', y: '500' },
                trainPos: { x: '1327.5', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_L',
                signalPos: { x: '1340', y: '520' },
                trainPos: { x: '1327.5', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_G',
                signalPos: { x: '1410', y: '500' },
                trainPos: { x: '1425', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_H',
                signalPos: { x: '1410', y: '520' },
                trainPos: { x: '1425', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Dąbrowa Górnicza Huta Katowice',
                    prefix: 'DGHK',
                    nameToDisplay: 'D.G. Huta Katowice',
                    pos: { x: 1375, y: 455 },
                    posFlipped: { x: 1375, y: 570 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1360, y: 530 },
                    rotation: 0,
                },
                platforms: [],
                trackLabels: []
            },
        ]
    },
    "734_DZ_DABROWAGORNICZAZABKOWICE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1D - T1 - T11
                    'M1700,380 LR120 SWDN40 LR55 SPR10 LR170 SPR10 LR260',
                    // TOR 2D - T2 - T12
                    'M1700,400 LR100 SWDN60 LR50 SWDN20 LR140 SPR10 LR150 SPR10 LR30 SWUP40 LR125',
                    // SW101/102/103/104 - 101cd/62ab/61 - T3 - T13
                    'M1800,500 CROSS M1820,500 LR10 SWUP80 LR10 SWUP20 LR30 SPR10 LR100 SPR10 LR60 SPR10 LR110 SPR10 LR10 SWDN20',
                    // SW84/83 - SW82cd/81ab - 31cd/58 - 57/55 - T6
                    'M1740,400 SWUP20 LR20 SWDN20 LR10 SWDN80 LR60 SWDN20 LR10 SWDN20 LR25 SPR10 LR110 SPR10 LR20 SWUP20',
                    //* SW33/37/36 - T9 - SW18
                    'M2010,400 SWDN20 LR10 SWDN20 LR30 SPR10 LR100 SWUP20',
                    // SW38/35ab - T10 - SW17
                    'M2020,480 SWUP20 LR135 SPR10 LR10 SWDN20',

                    //? additional switches
                    // SW52/51
                    'M1870,500 SWUP20',
                    // SW56/55
                    'M1875,540 SWUP20',
                    // SW43/42
                    'M2030,520 SWDN20',
                    // SW36/35ab - 35cd/34
                    'M2040,440 SWDN20 LR10 SWDN20',
                    // SW7/5ab - CROSS - SW4cd/2
                    'M2260,420 SWDN20 LR10 CROSS LR10 SWDN20',
                    // SW8/6ab - SW3cd/1
                    'M2260,480 SWUP20 M2305,440 SWUP20',

                    //& Freight Tracks towards Huta Katowice
                    // T101 - T4 - T14 - TOR 3L
                    'M1530,500 LR90 SPR10 LR100 SPR10 LR150 SPR10 LR160 SPR10 LR150 SWUP40 LR105',
                    // T102 - T8 - T16
                    'M1530,520 LR90 SPR10 LR100 SPR10 LR90 SWDN20 LR175 SPR10 LR220 SWUP60 LR85',

                    // SW117cd - T105 - SW108
                    'M1605,480 SWUP20 LR10 SPR10 LR100 SPR10 LR10 SWDN20',
                    // SW252/251 - SW120/119 - SW118/117ab - T103
                    'M1550,500 SWDN20 LR20 SWUP20 LR10 SWUP20 LR25 SPR10 LR100 SPR10 LR25 SWDN20',
                    // SW113/112 - T104 - SW106/105
                    'M1590,520 SWDN20 LR135 SPR10 LR10 SWUP20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'DZ_W',
                signalPos: { x: '1690', y: '380' },
                trainPos: { x: '1675', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_X',
                signalPos: { x: '1690', y: '400' },
                trainPos: { x: '1675', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                //? EXIT SIGNAL TO DABROWA GORNICZA LEFT TRACK
                signalName: 'DZ_X2N',
                signalPos: { x: '1690', y: '400' },
                trainPos: { x: '1705', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ EXIT SIGNALS TO DABROWA GORNICZA
            {
                signalName: 'DZ_P',
                signalPos: { x: '1880', y: '400' },
                trainPos: { x: '1895', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_O',
                signalPos: { x: '1880', y: '420' },
                trainPos: { x: '1895', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_N4',
                signalPos: { x: '1890', y: '500' },
                trainPos: { x: '1905', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_N6',
                signalPos: { x: '1890', y: '520' },
                trainPos: { x: '1905', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ INTERMEDIATE SIGNALS TO LAZY
            {
                signalName: 'DZ_J',
                signalPos: { x: '2000', y: '400' },
                trainPos: { x: '1985', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_K',
                signalPos: { x: '2010', y: '480' },
                trainPos: { x: '1995', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_M',
                signalPos: { x: '2020', y: '520' },
                trainPos: { x: '2005', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_L1',
                signalPos: { x: '2020', y: '540' },
                trainPos: { x: '2005', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ G-SIGNALS + F
            {
                signalName: 'DZ_G13',
                signalPos: { x: '2060', y: '400' },
                trainPos: { x: '2075', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_G11',
                signalPos: { x: '2060', y: '420' },
                trainPos: { x: '2075', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_G9',
                signalPos: { x: '2060', y: '440' },
                trainPos: { x: '2075', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_F',
                signalPos: { x: '2060', y: '500' },
                trainPos: { x: '2075', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ C-SIGNALS + D
            {
                signalName: 'DZ_C13',
                signalPos: { x: '2190', y: '400' },
                trainPos: { x: '2175', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_C10',
                signalPos: { x: '2170', y: '460' },
                trainPos: { x: '2155', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_C12',
                signalPos: { x: '2170', y: '480' },
                trainPos: { x: '2155', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_D',
                signalPos: { x: '2180', y: '540' },
                trainPos: { x: '2165', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            //~ ENTRY SIGNALS FROM LAZY LC
            {
                signalName: 'DZ_B',
                signalPos: { x: '2330', y: '420' },
                trainPos: { x: '2345', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_E',
                signalPos: { x: '2330', y: '440' },
                trainPos: { x: '2345', y: '440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_A',
                signalPos: { x: '2330', y: '460' },
                trainPos: { x: '2345', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_H',
                signalPos: { x: '2330', y: '480' },
                trainPos: { x: '2345', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ SIGNALS DGZ FREIGHT TRACKS ON THE LEFT SIDE
            {
                signalName: 'DZ_Y',
                signalPos: { x: '1530', y: '500' },
                trainPos: { x: '1515', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_Z',
                signalPos: { x: '1530', y: '520' },
                trainPos: { x: '1515', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_U105',
                signalPos: { x: '1620', y: '460' },
                trainPos: { x: '1635', y: '460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_U103',
                signalPos: { x: '1620', y: '480' },
                trainPos: { x: '1635', y: '480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_U101',
                signalPos: { x: '1620', y: '500' },
                trainPos: { x: '1635', y: '500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_U102',
                signalPos: { x: '1620', y: '520' },
                trainPos: { x: '1635', y: '520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S105',
                signalPos: { x: '1740', y: '460' },
                trainPos: { x: '1725', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S103',
                signalPos: { x: '1740', y: '480' },
                trainPos: { x: '1725', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S101',
                signalPos: { x: '1740', y: '500' },
                trainPos: { x: '1725', y: '500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S102',
                signalPos: { x: '1740', y: '520' },
                trainPos: { x: '1725', y: '520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'DZ_S104',
                signalPos: { x: '1740', y: '540' },
                trainPos: { x: '1725', y: '540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Dąbrowa Górnicza Ząbkowice',
                    prefix: 'DZ',
                    pos: { x: 2000, y: 360 },
                    posFlipped: { x: 2000, y: 570 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1745, y: 420 },
                    rotation: 90,
                },
                platforms: [
                    { label: 'Peron I', width: 95, height: 10, pos: { x: 1892.5, y: 385 } },
                    { label: 'Peron II', width: 105, height: 40, pos: { x: 1892.5, y: 430 } },
                    { label: 'Peron III', width: 105, height: 10, pos: { x: 1902.5, y: 525 } },
                ],
                trackLabels: [
                    { text: '105', pos: { x: 1680, y: 460 } },
                    { text: '103', pos: { x: 1680, y: 480 } },
                    { text: '101', pos: { x: 1680, y: 500 } },
                    { text: '102', pos: { x: 1680, y: 520 } },
                    { text: '104', pos: { x: 1680, y: 540 } },
                    { text: '1b', pos: { x: 1795, y: 380 } },
                    { text: '3', pos: { x: 1942.5, y: 400 } },
                    { text: '1a', pos: { x: 1945, y: 420 } },
                    { text: '2', pos: { x: 1945, y: 480 } },
                    { text: '4', pos: { x: 1955, y: 500 } },
                    { text: '6', pos: { x: 1955, y: 520 } },
                    { text: '8b', pos: { x: 1955, y: 540 } },
                    { text: '13', pos: { x: 2125, y: 400 } },
                    { text: '11', pos: { x: 2125, y: 420 } },
                    { text: '9', pos: { x: 2125, y: 440 } },
                    { text: '10', pos: { x: 2115, y: 460 } },
                    { text: '12', pos: { x: 2115, y: 480 } },
                    { text: '14', pos: { x: 2115, y: 500 } },
                    { text: '16', pos: { x: 2115, y: 540 } },
                ]
            },
        ]
    },
    "DABROWAGORNICZAZABKOWICE_LAZYLC_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2340,420 LR100 SPR10 LR10 TEND',
                    'M2340,440 LR100 SPR10 LR10 TEND',
                    'M2340,460 LR100 SPR10 LR10 TEND',
                    'M2340,480 LR100 SPR10 LR10 TEND',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_2899DN',
                signalPos: { x: '2450', y: '420' },
                trainPos: { x: '2435', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2900D',
                signalPos: { x: '2450', y: '440' },
                trainPos: { x: '2435', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                //? WRONG SIGNAL NAME | SIGNAL SHOULD HAVE "N" IN NAME [L160_2899N]
                signalName: 'L160_2899',
                signalPos: { x: '2450', y: '460' },
                trainPos: { x: '2435', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2900',
                signalPos: { x: '2450', y: '480' },
                trainPos: { x: '2435', y: '480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2899D', pos: { x: 2390, y: 420 } },
                    { text: '2912D', pos: { x: 2390, y: 440 } },
                    { text: '2899', pos: { x: 2390, y: 460 } },
                    { text: '2912', pos: { x: 2390, y: 480 } },
                ]
            },
        ]
    },



    "DABROWAGORNICZAZABKOWICE_LAZYLC_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,810 TSTART LR10 SPR10 LR200 SPR20 LR200 SPR30 LR200 SPR30 LR210',
                    'M10,830 TSTART LR10 SPR10 LR200 SPR20 LR200 SPR30 LR200 SPR30 LR210',
                    'M10,850 TSTART LR10 SPR10 LR200 SPR20 LR200 SPR30 LR200 SPR10 LR2.5 SWUP60 LR2.5 SPR10 LR210',
                    'M10,870 TSTART LR10 SPR10 LR200 SPR20 LR200 SPR30 LR210 SPR10 LR2.5 SWUP20 LR2.5 SPR10 LR200',

                    'M170,940 LR302.5 SWUP160 LR452.5',
                    'M170,960 LR372.5 SWUP40 LR177.5 SWUP40 LR200',
                    'M5,940 DOT5-5-10',
                    'M5,960 DOT5-5-10'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_2899D',
                signalPos: { x: '30', y: '820' },
                trainPos: { x: '45', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2900DN',
                signalPos: { x: '30', y: '840' },
                trainPos: { x: '45', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                //? WRONG SIGNAL NAME | SIGNAL SHOULD HAVE NOT "N" IN NAME [L160_2899]
                signalName: 'L160_2899N',
                signalPos: { x: '30', y: '860' },
                trainPos: { x: '45', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L186_2900N',
                signalPos: { x: '30', y: '880' },
                trainPos: { x: '45', y: '880' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            //~ SECOND GROUP
            {
                signalName: 'L1_2885DN',
                signalPos: { x: '250', y: '820' },
                trainPos: { x: '235', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2886D',
                signalPos: { x: '250', y: '840' },
                trainPos: { x: '235', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2885N',
                signalPos: { x: '250', y: '860' },
                trainPos: { x: '235', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2886',
                signalPos: { x: '250', y: '880' },
                trainPos: { x: '235', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////////////
            {
                signalName: 'L1_2885D',
                signalPos: { x: '250', y: '820' },
                trainPos: { x: '265', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2886DN',
                signalPos: { x: '250', y: '840' },
                trainPos: { x: '265', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2885',
                signalPos: { x: '250', y: '860' },
                trainPos: { x: '265', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2886N',
                signalPos: { x: '250', y: '880' },
                trainPos: { x: '265', y: '880' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            //~ THIRD GROUP
            {
                signalName: 'L1_2869DN',
                signalPos: { x: '470', y: '820' },
                trainPos: { x: '455', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2868D',
                signalPos: { x: '470', y: '840' },
                trainPos: { x: '455', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2869N',
                signalPos: { x: '470', y: '860' },
                trainPos: { x: '455', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2870',
                signalPos: { x: '470', y: '880' },
                trainPos: { x: '455', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            ////////////////////////////////////////////////
            {
                signalName: 'L1_2869D',
                signalPos: { x: '480', y: '820' },
                trainPos: { x: '495', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2868DN',
                signalPos: { x: '480', y: '840' },
                trainPos: { x: '495', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2869',
                signalPos: { x: '480', y: '860' },
                trainPos: { x: '495', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2869N',
                signalPos: { x: '480', y: '880' },
                trainPos: { x: '495', y: '880' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //~ FOURTH GROUP
            {
                signalName: 'L1_2851N',
                signalPos: { x: '700', y: '820' },
                trainPos: { x: '685', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2852',
                signalPos: { x: '700', y: '840' },
                trainPos: { x: '685', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L160_2854',
                signalPos: { x: '700', y: '860' },
                trainPos: { x: '685', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L186_2852',
                signalPos: { x: '710', y: '880' },
                trainPos: { x: '695', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            ////////////////////////////////////////////////
            {
                signalName: 'L1_2851',
                signalPos: { x: '710', y: '820' },
                trainPos: { x: '725', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2854N',
                signalPos: { x: '710', y: '840' },
                trainPos: { x: '725', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L160_2853',
                signalPos: { x: '710', y: '800' },
                trainPos: { x: '725', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L186_2851',
                signalPos: { x: '720', y: '860' },
                trainPos: { x: '735', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'D. G. Sikorka',
                    pos: { x: 140, y: 790 },
                    posFlipped: { x: 140, y: 910 },
                    platforms: [
                        { pos: { x: 115, y: 825 }, width: 50, height: 10 },
                        { pos: { x: 115, y: 885 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Chruszczobród',
                    pos: { x: 515, y: 750 },
                    platforms: [
                        { pos: { x: 492, y: 825 }, width: 50, height: 10 },
                        { pos: { x: 492, y: 885 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Wiesiólka',
                    pos: { x: 902.5, y: 750 },
                    posFlipped: { x: 902.5, y: 905 },
                    platforms: [
                        { pos: { x: 878, y: 810 }, width: 50, height: 7 },
                        { pos: { x: 878, y: 845 }, width: 50, height: 10 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2885D', pos: { x: 140, y: 820 } },
                    { text: '2900D', pos: { x: 140, y: 840 } },
                    { text: '2885', pos: { x: 140, y: 860 } },
                    { text: '2900', pos: { x: 140, y: 880 } },

                    { text: '2869D', pos: { x: 360, y: 820 } },
                    { text: '2886D', pos: { x: 360, y: 840 } },
                    { text: '2869', pos: { x: 360, y: 860 } },
                    { text: '2886', pos: { x: 360, y: 880 } },

                    { text: '2851', pos: { x: 590, y: 820 } },
                    { text: '2868', pos: { x: 590, y: 840 } },
                    { text: '2853', pos: { x: 590, y: 860 } },
                    { text: '2870', pos: { x: 595, y: 880 } },

                    { text: '1P', pos: { x: 825, y: 780 } }, // Przemiarki
                    { text: '2839', pos: { x: 825, y: 800 } },
                    { text: '2841', pos: { x: 825, y: 820 } },
                    { text: '2852D', pos: { x: 825, y: 840 } },
                    { text: '2852', pos: { x: 830, y: 860 } },
                    { text: '2P', pos: { x: 830, y: 880 } }, // Przemiarki
                ]
            },
        ]
    },
    "3398_Pmi_PRZEMIARKI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M110,940 LR50',
                    'M110,960 LR50',
                    'M120,960 SWUP20 LR20 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'Pmi_B',
                signalPos: { x: '160', y: '940' },
                trainPos: { x: '175', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 3780, x: 945, y: 780 },
                    { distanceToSignal: 3450, x: 835, y: 780 },
                    { distanceToSignal: 3230, x: 735, y: 780 },
                    { distanceToSignal: 2500, x: 635, y: 780 },
                    { distanceToSignal: 2000, x: 535, y: 780 },
                    { distanceToSignal: 1720, x: 375, y: 940 },
                    { distanceToSignal: 1000, x: 275, y: 940 },
                ]
            },
            {
                signalName: 'Pmi_A',
                signalPos: { x: '160', y: '960' },
                trainPos: { x: '175', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pmi_C',
                signalPos: { x: '110', y: '940' },
                trainPos: { x: '95', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pmi_D',
                signalPos: { x: '110', y: '960' },
                trainPos: { x: '95', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_B',
                invisibleSignal: true,
                signalPos: { x: '0', y: '940' },
                trainPos: { x: '10', y: '940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Przemiarki',
                    prefix: 'Pr',
                    pos: { x: 135, y: 915 },
                    posFlipped: { x: 135, y: 1005 }
                },
                platforms: [],
                trackLabels: []
            },
        ]
    },
    "2375_LC_LAZYLC": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M940,780 LR100',
                    'M940,800 LR200',
                    'M940,820 LR200',
                    'M940,840 LR200',
                    'M940,860 LR200',
                    'M940,880 LR200',

                    'M990,780 SWUP40 LR10',
                    'M975,800 SWUP20 LR20 SWDN20 LR20 SWDN20 LR20 SWDN20 LR20 SWDN20 LR20 SWDN20',
                    'M960,880 SWUP20 LR20 SWUP20 LR20 SWUP20 LR100 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'LC_T',
                signalPos: { x: '940', y: '780' },
                trainPos: { x: '925', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_U',
                signalPos: { x: '940', y: '800' },
                trainPos: { x: '925', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_W1',
                signalPos: { x: '940', y: '820' },
                trainPos: { x: '925', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_W2',
                signalPos: { x: '940', y: '840' },
                trainPos: { x: '925', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_Y',
                signalPos: { x: '940', y: '860' },
                trainPos: { x: '925', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_Z',
                signalPos: { x: '940', y: '880' },
                trainPos: { x: '925', y: '880' },
                trainPosDistance: [
                    // distance to signal from station "Przemiarki": ~ 4406m
                    { distanceToSignal: 4250, x: 265, y: 960 },
                    { distanceToSignal: 4000, x: 395, y: 960 },
                    { distanceToSignal: 3250, x: 535, y: 960 },
                    { distanceToSignal: 2750, x: 645, y: 920 },
                    { distanceToSignal: 2000, x: 715, y: 920 },
                    { distanceToSignal: 1250, x: 835, y: 880 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //
            //
            //
            {
                signalName: 'LC_S7',
                signalPos: { x: '1005', y: '740' },
                trainPos: { x: '1020', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S3',
                signalPos: { x: '1140', y: '800' },
                trainPos: { x: '1155', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S1',
                signalPos: { x: '1140', y: '820' },
                trainPos: { x: '1155', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S2',
                signalPos: { x: '1140', y: '840' },
                trainPos: { x: '1155', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S4',
                signalPos: { x: '1140', y: '860' },
                trainPos: { x: '1155', y: '860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_S6',
                signalPos: { x: '1140', y: '880' },
                trainPos: { x: '1155', y: '880' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łazy Łc',
                    prefix: 'ŁC',
                    pos: { x: 1030, y: 700 },
                    posFlipped: { x: 1030, y: 910 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1080, y: 755 },
                    rotation: 180,
                },
                platforms: [],
                trackLabels: [
                    { text: '3', pos: { x: 1040, y: 800 } },
                    { text: '1', pos: { x: 1040, y: 820 } },
                    { text: '2', pos: { x: 1040, y: 840 } },
                    { text: '4', pos: { x: 1040, y: 860 } },
                    { text: '6', pos: { x: 1040, y: 880 } },
                ]
            },
        ]
    },
    "LAZYLC_LAZYLB": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1015,740 LR145 SWUP40 LR175',

                    'M1150,800 LR190',
                    'M1150,820 LR190',
                    'M1150,840 LR190',
                    'M1150,860 LR190',
                    'M1150,880 LR190',
                ]
            },
        ],
        "SIGNALS": [], //? NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: 'TOR 7', pos: { x: 1085, y: 740 } },
                    { text: 'TOR 7', pos: { x: 1260, y: 700 } },
                    { text: 'TOR 3', pos: { x: 1245, y: 800 } },
                    { text: 'TOR 1', pos: { x: 1245, y: 820 } },
                    { text: 'TOR 2', pos: { x: 1245, y: 840 } },
                    { text: 'TOR 4', pos: { x: 1245, y: 860 } },
                    { text: 'TOR 6', pos: { x: 1245, y: 880 } },
                ]
            },
        ]
    },
    "2371_LB_LAZYLB": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 7LC - T125 - TOR125LA
                    'M1350,700 LR70 SWDN40 LR40 SWUP20 LR60 SPR10 LR115 SWDN40 LR120',
                    // SW387/386 - SW385/384 - SW383/382/381/361cd - T123
                    'M1370,840 SWUP20 LR10 SWUP20 LR10 SWUP40 LR110 SWUP20 LR10 SPR10 LR100 SWDN40 LR30 SWUP20 LR20 SWDN20 LR10 SWDN20 LR20 SWUP20',
                    // TOR 3LC - T3 - TOR 3LA
                    'M1350,800 LR60 SPR10 LR100 SPR10 LR10 SWUP20 LR235',
                    // TOR 1LC - T1 - TOR 1LA
                    'M1350,820 LR60 SPR10 LR100 SPR10 LR20 SWUP20 LR205',
                    // TOR 2LC - T2 - TOR 2LA
                    'M1350,840 LR60 SPR10 LR100 SPR10 LR40 SWUP20 LR185',
                    // TOR 4LC - T4 - SW1064/1063
                    'M1350,860 LR170 SPR10 LR80 SWUP40',
                    // TOR 6LC - T6 - TOR224LA
                    'M1350,880 LR170 SPR10 LR80 SWDN60 LR85',

                    //? additional switches
                    // SW372cd/371 / SW362cd/361ab - SW1083
                    'M1435,740 SWDN20 M1495,720 SWDN40 LR50 SWDN20 LR20 SWDN20 LR100 SWDN20',
                    // SW1052/1051
                    'M1725,760 SWDN20',
                    // CROSSSWITCH
                    'M1570,860 CROSS',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'LB_P7',
                signalPos: { x: '1350', y: '700' },
                trainPos: { x: '1335', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_sz',
            },
            {
                signalName: 'LB_P3',
                signalPos: { x: '1350', y: '800' },
                trainPos: { x: '1335', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_P1',
                signalPos: { x: '1350', y: '820' },
                trainPos: { x: '1335', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_P2',
                signalPos: { x: '1350', y: '840' },
                trainPos: { x: '1335', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_M4',
                signalPos: { x: '1350', y: '860' },
                trainPos: { x: '1335', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_M6',
                signalPos: { x: '1350', y: '880' },
                trainPos: { x: '1335', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'LB_H3',
                signalPos: { x: '1410', y: '800' },
                trainPos: { x: '1425', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_H1',
                signalPos: { x: '1410', y: '820' },
                trainPos: { x: '1425', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_H2',
                signalPos: { x: '1410', y: '840' },
                trainPos: { x: '1425', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'LB_R3',
                signalPos: { x: '1530', y: '800' },
                trainPos: { x: '1515', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_R1',
                signalPos: { x: '1530', y: '820' },
                trainPos: { x: '1515', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_R2',
                signalPos: { x: '1530', y: '840' },
                trainPos: { x: '1515', y: '840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_O',
                signalPos: { x: '1530', y: '860' },
                trainPos: { x: '1515', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_N',
                signalPos: { x: '1530', y: '880' },
                trainPos: { x: '1515', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS FOR TRACKS 125/123
            {
                signalName: 'LB_J125',
                signalPos: { x: '1530', y: '720' },
                trainPos: { x: '1545', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_J123',
                signalPos: { x: '1530', y: '740' },
                trainPos: { x: '1545', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'LB_Q125',
                signalPos: { x: '1780', y: '760' },
                trainPos: { x: '1795', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_Q123',
                signalPos: { x: '1780', y: '780' },
                trainPos: { x: '1795', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LB_G1',
                signalPos: { x: '1760', y: '800' },
                trainPos: { x: '1775', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 430, x: 1920, y: 800 },
                ]
            },
            {
                signalName: 'LB_G2',
                signalPos: { x: '1760', y: '820' },
                trainPos: { x: '1775', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 430, x: 1920, y: 820 },
                ]
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łazy',
                    prefix: 'ŁB',
                    pos: { x: 1500, y: 695 },
                    posFlipped: { x: 1500, y: 910 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1540, y: 895 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 60, height: 10, pos: { x: 1422, y: 805 } },
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 1422, y: 845 } },
                ],
                trackLabels: [
                    { text: '3', pos: { x: 1470, y: 800 } },
                    { text: '1', pos: { x: 1470, y: 820 } },
                    { text: '2', pos: { x: 1470, y: 840 } },
                    { text: '4', pos: { x: 1470, y: 860 } },
                    { text: '6', pos: { x: 1470, y: 880 } },
                    { text: '125', pos: { x: 1590, y: 720 } },
                    { text: '123', pos: { x: 1590, y: 740 } },
                ]
            },
        ]
    },
    "LAZYLB_LAZYLA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1790,760 LR190',
                    'M1790,780 LR190',
                    'M1770,800 ABS130-10-3',
                    'M1770,820 ABS130-10-3',

                    'M1700,940 LR182.5 SWDN20 LR182.5'
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_2791',
                signalPos: { x: '1910', y: '800' },
                trainPos: { x: '1890', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2790',
                signalPos: { x: '1910', y: '820' },
                trainPos: { x: '1890', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2781',
                signalPos: { x: '2040', y: '800' },
                trainPos: { x: '2060', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2780N',
                signalPos: { x: '2040', y: '820' },
                trainPos: { x: '2060', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2795', pos: { x: 1835, y: 800 } },
                    { text: '2794', pos: { x: 1835, y: 820 } },
                    { text: '2781', pos: { x: 1975, y: 800 } },
                    { text: '2790', pos: { x: 1975, y: 820 } },
                    { text: '2779', pos: { x: 2115, y: 800 } },
                    { text: '2778', pos: { x: 2115, y: 820 } },
                ]
            },
        ]
    },
    "2374_LA_LAZYLA": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~~~~~~~~~~~~~~~~~~~~~~~\\
                    //~ UPPER FREIGHT GROUP ~\\
                    //~~~~~~~~~~~~~~~~~~~~~~~\\
                    // T119
                    'M1980,760 LR7.5 SWUP20 LR7.5 SWUP120 LR15 SPR10 LR225 SWDN140',
                    // T117
                    'M2070,660 SWUP20 LR25 SPR10 LR95 SWDN20',
                    // T115
                    'M2055,680 SWUP20 LR40 SPR10 LR110 SWDN40',
                    // SW82/81 - 81/80 - T113
                    'M2025,760 SWUP20 M1995,740 LR45 SWUP60 LR55 SPR10 LR95 SWDN20',

                    //SW77/76 - T111
                    'M2045,760 SWUP20 M2035,740 LR25 SWUP40 LR35 SPR10 LR125 SWDN60',
                    // SW73 - T109
                    'M2085,740 SWUP20 LR10 SPR10 LR95 SWDN20',
                    // SW75/74ab - SW74cd/73 - T107
                    'M2055,780 SWUP20 LR10 SWUP20 LR25 SPR10 LR105 SWDN20 LR10 SWDN20 LR10 SWDN20',
                    // SW82/81ab - T105
                    'M2010,780 SWUP20 LR85 SPR10 LR160 SWDN20 LR10 SWDN20 LR10 SWDN20 LR10 SWDN20 LR20 SWUP20 LR10 SWUP20 LR10 SWUP20',
                    // T103 - TOR 1Z
                    'M1980,780 LR120 SPR10 LR320',
                    // additional switch SW72/71
                    'M2080,760 SWDN20',

                    //~~~~~~~~~~~~~~~~~~~~~~~\\
                    //~ LOWER FREIGHT GROUP ~\\
                    //~~~~~~~~~~~~~~~~~~~~~~~\\
                    // T124
                    'M2165,880 SWUP20 LR100 SPR10 LR10 SWDN20',
                    // T126
                    'M2150,900 SWUP20 LR115 SPR10 LR25 SWDN20',
                    // T128
                    'M2120,920 LINE2140,900 LR130 SPR10 LR40 SWDN20',
                    // TOR224 - SW132 - T130
                    'M2080,960 LR10 SWUP20 LR10 SWUP20 LR160 SPR10 LR67.5 SWUP80 LR17.5 SWUP20',
                    // T132
                    'M2150,920 SWDN20 LR115 SPR10 LR87.5 SWUP80 LR17.5 LINE2410,840',
                    // T134
                    'M2110,940 LR17.5 LINE2147.5,960 LR122.5 SPR10 LR10 SWUP20',
                    // T136
                    'M2135,920 SWDN60 LR130 SPR10 LR25 SWUP40',
                    // T138
                    'M2105,940 LR10 SWDN60 LR150 SPR10 LR40 SWUP60',

                    // CROSS SWITCH
                    'M2350,870 CROSS',

                    // MAIN TRACK TOR 1
                    'M2190,800 LR240',
                    // MAIN TRACK TOR 2
                    'M2190,820 LR240',
                    // TRACK TOR 4Z
                    'M2330,840 LR100',
                ]
            },
        ],
        "SIGNALS": [
            //~ EXIT SIGNALS UPPER FREIGHT GROUP
            {
                signalName: 'LA_F119',
                signalPos: { x: '2020', y: '620' },
                trainPos: { x: '2035', y: '620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F117',
                signalPos: { x: '2100', y: '640' },
                trainPos: { x: '2115', y: '640' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F115',
                signalPos: { x: '2100', y: '660' },
                trainPos: { x: '2115', y: '660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F113',
                signalPos: { x: '2100', y: '680' },
                trainPos: { x: '2115', y: '680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F111',
                signalPos: { x: '2100', y: '700' },
                trainPos: { x: '2115', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F109',
                signalPos: { x: '2100', y: '720' },
                trainPos: { x: '2115', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F107',
                signalPos: { x: '2100', y: '740' },
                trainPos: { x: '2115', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F105',
                signalPos: { x: '2100', y: '760' },
                trainPos: { x: '2115', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_F103',
                signalPos: { x: '2100', y: '780' },
                trainPos: { x: '2115', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'LA_E1',
                signalPos: { x: '2190', y: '800' },
                trainPos: { x: '2175', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 430, x: 2030, y: 800 },
                ]
            },
            {
                signalName: 'LA_E2',
                signalPos: { x: '2190', y: '820' },
                trainPos: { x: '2175', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
                trainPosDistance: [
                    { distanceToSignal: 430, x: 2030, y: 820 },
                ]
            },
            //~ ENTRY SIGNALS + EXIT SIGNALS LOWER FREIGHT GROUP
            {
                //? ENTRY SIGNAL LA_H324
                signalName: 'LA_H324',
                signalPos: { x: '2080', y: '960' },
                trainPos: { x: '2065', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E124',
                signalPos: { x: '2280', y: '860' },
                trainPos: { x: '2265', y: '860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E126',
                signalPos: { x: '2280', y: '880' },
                trainPos: { x: '2265', y: '880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E128',
                signalPos: { x: '2280', y: '900' },
                trainPos: { x: '2265', y: '900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E130',
                signalPos: { x: '2280', y: '920' },
                trainPos: { x: '2265', y: '920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E132',
                signalPos: { x: '2280', y: '940' },
                trainPos: { x: '2265', y: '940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E134',
                signalPos: { x: '2280', y: '960' },
                trainPos: { x: '2265', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E136',
                signalPos: { x: '2280', y: '980' },
                trainPos: { x: '2265', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_E138',
                signalPos: { x: '2280', y: '1000' },
                trainPos: { x: '2265', y: '1000' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'LA_D3',
                signalPos: { x: '2430', y: '780' },
                trainPos: { x: '2445', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_C1',
                signalPos: { x: '2430', y: '800' },
                trainPos: { x: '2445', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_C2',
                signalPos: { x: '2430', y: '820' },
                trainPos: { x: '2445', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'LA_B',
                signalPos: { x: '2430', y: '840' },
                trainPos: { x: '2445', y: '840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Łazy Ła',
                    prefix: 'ŁA',
                    pos: { x: 2310, y: 710 },
                    posFlipped: { x: 2195, y: 1030 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 2250, y: 1020 },
                    rotation: 0,
                },
                platforms: [],
                trackLabels: [
                    // UPPER FREIGHT TRACKS
                    { text: '119', pos: { x: 2140, y: 620 } },
                    { text: '117', pos: { x: 2160, y: 640 } },
                    { text: '115', pos: { x: 2160, y: 660 } },
                    { text: '113', pos: { x: 2160, y: 680 } },
                    { text: '111', pos: { x: 2160, y: 700 } },
                    { text: '109', pos: { x: 2160, y: 720 } },
                    { text: '107', pos: { x: 2160, y: 740 } },
                    { text: '105', pos: { x: 2160, y: 760 } },
                    { text: '103', pos: { x: 2160, y: 780 } },

                    // LOWER FREIGHT TRACKS
                    { text: '124', pos: { x: 2220, y: 860 } },
                    { text: '126', pos: { x: 2220, y: 880 } },
                    { text: '128', pos: { x: 2220, y: 900 } },
                    { text: '130', pos: { x: 2220, y: 920 } },
                    { text: '132', pos: { x: 2220, y: 940 } },
                    { text: '134', pos: { x: 2220, y: 960 } },
                    { text: '136', pos: { x: 2220, y: 980 } },
                    { text: '138b', pos: { x: 2140, y: 1000 } },
                    { text: '138a', pos: { x: 2220, y: 1000 } },
                ]
            },
        ]
    },
    "LAZYLA_ZAWIERCIE_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2440,780 LR100 TEND',
                    'M2440,800 LR100 TEND',
                    'M2440,820 LR100 TEND',
                    'M2440,840 LR100 TEND',
                ]
            }
        ],
        "SIGNALS": [], //? NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: 'TOR 3', pos: { x: 2490, y: 780 } },
                    { text: 'TOR 1', pos: { x: 2490, y: 800 } },
                    { text: 'TOR 2', pos: { x: 2490, y: 820 } },
                    { text: 'TOR 4', pos: { x: 2490, y: 840 } },
                ]
            }
        ]
    },



    "LAZYLA_ZAWIERCIE_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,1070 TSTART LR100',
                    'M10,1090 TSTART LR380',
                    'M10,1110 TSTART LR380',
                    'M10,1130 TSTART LR100',
                ]
            }
        ],
        "SIGNALS": [], //? NO SIGNALS IN THIS CLUSTER
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: 'TOR 3', pos: { x: 70, y: 1080 } },
                    { text: 'TOR 1', pos: { x: 260, y: 1100 } },
                    { text: 'TOR 2', pos: { x: 260, y: 1120 } },
                    { text: 'TOR 4', pos: { x: 70, y: 1140 } },
                ]
            }
        ]
    },
    "5262_Zw_ZAWIERCIE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //* T7
                    'M540,1080 SWUP40 LR75 SPR10 LR160 SPR10 LR10 SWDN20',
                    //* T5
                    'M520,1140 SWUP20 LR15 SWUP20 LR10 SWUP20 LR10 SWUP20 LR10 SWUP20 LR10 SWDN20 M575,1060 LR45 SPR10 LR160 SPR10 LR25 SWDN20',
                    //^ T3
                    'M130,1080 LR150 SPR10 LR220 SPR10 LR100 SPR10 LR140 SPR10 LR130',
                    //^ TOR 1 - T1
                    'M410,1100 LR230 SPR10 LR100 SPR10 LR140',
                    //^ TOR 2 - T2
                    'M410,1120 LR180 SWDN40 LR45 SPR10 LR100 SPR10 LR40 SWUP40 LR95',

                    //? additional switches main part
                    'M505,1100 SWDN20',
                    'M555,1120 SWDN20',
                    'M790,1100 SWUP20',
                    'M840,1080 SWDN20 LR25 SWDN20 LR10 SWDN20',
                    'M840,1140 SWUP20 LR10 SWUP20 LR25 SWUP20',
                    // switch freight part 4b to 104
                    'M460,1140 SWDN20',

                    //~~~~~~~~~~~~~~~~~~~~~~~\\
                    //~ LOWER FREIGHT GROUP ~\\
                    //~~~~~~~~~~~~~~~~~~~~~~~\\
                    //^ TOR 4 - T4b - T4 - TOR 2
                    'M130,1140 LR90 SPR10 LR150 SPR10 LR180 SWDN40 LR15 SPR10 LR200 SPR10 LR10 SWUP40 LR85',
                    //* T104
                    'M150,1140 SWDN20 LR115 SPR10 LR100 SPR10 LR115 SWUP20',
                    //* T106
                    'M245,1200 SWUP20 LR20 SPR10 LR100 SPR10 LR85 LINE495,1160',
                    //* T108
                    'M220,1160 SWDN40 LR45 SPR10 LR100 SPR10 LR70 SWUP20',
                    //* T110
                    'M235,1200 SWDN20 LR30 SPR10 LR100 SPR10 LR10 SWUP20',
                    //* T112
                    'M250,1220 SWDN20 LR15 SPR10 LR100 SPR10 LR55 SWUP40',

                    //* T114
                    'M190,1140 SWDN20 LR10 SWDN100 LR60 SPR10 LR100 SPR10 LR10 SWUP20',
                    //* T116
                    'M165,1160 SWDN100 LR20 SWDN20 LR75 SPR10 LR100 SPR10 LR40 SWUP40',
                    //* T118
                    'M205,1280 SWDN20 LR60 SPR10 LR100 SPR10 LR10 SWUP20',
                    //* T120
                    'M180,1260 SWDN60 LR85 SPR10 LR100 SPR10 LR25 SWUP40',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Zw_W',
                signalPos: { x: '130', y: '1080' },
                trainPos: { x: '115', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_M',
                signalPos: { x: '410', y: '1100' },
                trainPos: { x: '395', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_N',
                signalPos: { x: '410', y: '1120' },
                trainPos: { x: '395', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_R',
                signalPos: { x: '130', y: '1140' },
                trainPos: { x: '115', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ SIGNALS FREIGHT TRACKS LEFT
            {
                signalName: 'Zw_S3',
                signalPos: { x: '280', y: '1080' },
                trainPos: { x: '295', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P4',
                signalPos: { x: '220', y: '1140' },
                trainPos: { x: '235', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P104',
                signalPos: { x: '270', y: '1160' },
                trainPos: { x: '285', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P106',
                signalPos: { x: '270', y: '1180' },
                trainPos: { x: '285', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P108',
                signalPos: { x: '270', y: '1200' },
                trainPos: { x: '285', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P110',
                signalPos: { x: '270', y: '1220' },
                trainPos: { x: '285', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P112',
                signalPos: { x: '270', y: '1240' },
                trainPos: { x: '285', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P114',
                signalPos: { x: '270', y: '1260' },
                trainPos: { x: '285', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P116',
                signalPos: { x: '270', y: '1280' },
                trainPos: { x: '285', y: '1280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P118',
                signalPos: { x: '270', y: '1300' },
                trainPos: { x: '285', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_P120',
                signalPos: { x: '270', y: '1320' },
                trainPos: { x: '285', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS FREIGHT TRACKS LEFT
            {
                signalName: 'Zw_L',
                signalPos: { x: '520', y: '1080' },
                trainPos: { x: '505', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O4',
                signalPos: { x: '390', y: '1140' },
                trainPos: { x: '375', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O104',
                signalPos: { x: '390', y: '1160' },
                trainPos: { x: '375', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O106',
                signalPos: { x: '390', y: '1180' },
                trainPos: { x: '375', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O108',
                signalPos: { x: '390', y: '1200' },
                trainPos: { x: '375', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O110',
                signalPos: { x: '390', y: '1220' },
                trainPos: { x: '375', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O112',
                signalPos: { x: '390', y: '1240' },
                trainPos: { x: '375', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O114',
                signalPos: { x: '390', y: '1260' },
                trainPos: { x: '375', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O116',
                signalPos: { x: '390', y: '1280' },
                trainPos: { x: '375', y: '1280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O118',
                signalPos: { x: '390', y: '1300' },
                trainPos: { x: '375', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_O120',
                signalPos: { x: '390', y: '1320' },
                trainPos: { x: '375', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ SIGNALS LEFT OF PLATFORM
            {
                signalName: 'Zw_H7',
                signalPos: { x: '620', y: '1040' },
                trainPos: { x: '635', y: '1040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_H5',
                signalPos: { x: '620', y: '1060' },
                trainPos: { x: '635', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_H3',
                signalPos: { x: '620', y: '1080' },
                trainPos: { x: '635', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_G1',
                signalPos: { x: '640', y: '1100' },
                trainPos: { x: '655', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_G2',
                signalPos: { x: '640', y: '1160' },
                trainPos: { x: '655', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_H4',
                signalPos: { x: '590', y: '1180' },
                trainPos: { x: '635', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS RIGHT SIDE OF PLATFORM
            {
                signalName: 'Zw_E7',
                signalPos: { x: '800', y: '1040' },
                trainPos: { x: '785', y: '1040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E5',
                signalPos: { x: '800', y: '1060' },
                trainPos: { x: '785', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E3',
                signalPos: { x: '780', y: '1080' },
                trainPos: { x: '765', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E1',
                signalPos: { x: '760', y: '1100' },
                trainPos: { x: '745', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E2',
                signalPos: { x: '760', y: '1160' },
                trainPos: { x: '745', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_E4',
                signalPos: { x: '810', y: '1180' },
                trainPos: { x: '745', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Zw_D',
                signalPos: { x: '910', y: '1080' },
                trainPos: { x: '925', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_C',
                signalPos: { x: '910', y: '1100' },
                trainPos: { x: '925', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_B',
                signalPos: { x: '910', y: '1120' },
                trainPos: { x: '925', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zw_A',
                signalPos: { x: '910', y: '1140' },
                trainPos: { x: '925', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Zawiercie',
                    prefix: 'Zw',
                    pos: { x: 540, y: 1010 },
                    posFlipped: { x: 570, y: 1230 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 525, y: 1170 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 95, height: 50, pos: { x: 652.5, y: 1105 } },
                    { label: 'Peron I', width: 110, height: 10, pos: { x: 635, y: 1185 } },
                ],
                trackLabels: [
                    { text: '3e', pos: { x: 205, y: 1080 } },
                    { text: '4b', pos: { x: 305, y: 1140 } },
                    { text: '104', pos: { x: 330, y: 1160 } },
                    { text: '106', pos: { x: 330, y: 1180 } },
                    { text: '108', pos: { x: 330, y: 1200 } },
                    { text: '110', pos: { x: 330, y: 1220 } },
                    { text: '112', pos: { x: 330, y: 1240 } },
                    { text: '114', pos: { x: 330, y: 1260 } },
                    { text: '116', pos: { x: 330, y: 1280 } },
                    { text: '118', pos: { x: 330, y: 1300 } },
                    { text: '120', pos: { x: 330, y: 1320 } },
                    { text: '3d', pos: { x: 400, y: 1080 } },
                    { text: '4c', pos: { x: 540, y: 1140 } },
                    { text: '3b', pos: { x: 590, y: 1080 } },
                    { text: '1b', pos: { x: 595, y: 1100 } },
                    { text: '2b', pos: { x: 615, y: 1160 } },
                    { text: '7', pos: { x: 710, y: 1040 } },
                    { text: '5', pos: { x: 710, y: 1060 } },
                    { text: '3', pos: { x: 700, y: 1080 } },
                    { text: '1', pos: { x: 700, y: 1100 } },
                    { text: '2', pos: { x: 700, y: 1160 } },
                    { text: '4', pos: { x: 690, y: 1180 } },
                    { text: '2a', pos: { x: 780, y: 1160 } },
                    { text: '1a', pos: { x: 817, y: 1100 } },
                    { text: '3a', pos: { x: 865, y: 1080 } },
                    { text: '4a', pos: { x: 865, y: 1140 } },
                ]
            },
        ]
    },
    "ZAWIERCIE_MYSZKOW": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M920,1100 ABS100-20-6 SPR30 ABS100-20-2 SPR20 DOT5-5-10',
                    'M920,1120 ABS100-20-6 SPR30 ABS100-20-2 SPR20 DOT5-5-10',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L1_2729N',
                signalPos: { x: '910', y: '1100' },
                trainPos: { x: '895', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2728',
                signalPos: { x: '910', y: '1120' },
                trainPos: { x: '895', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2719N',
                signalPos: { x: '1030', y: '1100' },
                trainPos: { x: '1015', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2718',
                signalPos: { x: '1030', y: '1120' },
                trainPos: { x: '1015', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2719',
                signalPos: { x: '1030', y: '1100' },
                trainPos: { x: '1045', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2718N',
                signalPos: { x: '1030', y: '1120' },
                trainPos: { x: '1045', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L1_2707N',
                signalPos: { x: '1150', y: '1100' },
                trainPos: { x: '1135', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2706',
                signalPos: { x: '1150', y: '1120' },
                trainPos: { x: '1135', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2707',
                signalPos: { x: '1150', y: '1100' },
                trainPos: { x: '1165', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2706N',
                signalPos: { x: '1150', y: '1120' },
                trainPos: { x: '1165', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2693N',
                signalPos: { x: '1270', y: '1100' },
                trainPos: { x: '1255', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2692',
                signalPos: { x: '1270', y: '1120' },
                trainPos: { x: '1255', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2963',
                signalPos: { x: '1270', y: '1100' },
                trainPos: { x: '1285', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2692N',
                signalPos: { x: '1270', y: '1120' },
                trainPos: { x: '1285', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2677N',
                signalPos: { x: '1390', y: '1100' },
                trainPos: { x: '1375', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2676',
                signalPos: { x: '1390', y: '1120' },
                trainPos: { x: '1375', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2677',
                signalPos: { x: '1390', y: '1100' },
                trainPos: { x: '1405', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2676N',
                signalPos: { x: '1390', y: '1120' },
                trainPos: { x: '1405', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2665N',
                signalPos: { x: '1510', y: '1100' },
                trainPos: { x: '1495', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2661',
                signalPos: { x: '1510', y: '1120' },
                trainPos: { x: '1495', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2665',
                signalPos: { x: '1510', y: '1100' },
                trainPos: { x: '1525', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2662N',
                signalPos: { x: '1510', y: '1120' },
                trainPos: { x: '1525', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2651N',
                signalPos: { x: '1630', y: '1100' },
                trainPos: { x: '1615', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2650',
                signalPos: { x: '1630', y: '1120' },
                trainPos: { x: '1615', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2651',
                signalPos: { x: '1640', y: '1100' },
                trainPos: { x: '1655', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2650N',
                signalPos: { x: '1640', y: '1120' },
                trainPos: { x: '1655', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L1_2637N',
                signalPos: { x: '1760', y: '1100' },
                trainPos: { x: '1745', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2638',
                signalPos: { x: '1760', y: '1120' },
                trainPos: { x: '1745', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L1_2637',
                signalPos: { x: '1760', y: '1100' },
                trainPos: { x: '1775', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L1_2638N',
                signalPos: { x: '1760', y: '1120' },
                trainPos: { x: '1775', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            //~ 2777_My_MYSZKOW (AI STATION)
            {
                signalName: 'My_D',
                signalPos: { x: '1880', y: '1100' },
                trainPos: { x: '1865', y: '1100' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'My_C',
                signalPos: { x: '1880', y: '1120' },
                trainPos: { x: '1865', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'My_A',
                signalPos: { x: '1880', y: '1100' },
                trainPos: { x: '1895', y: '1100' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'My_B',
                signalPos: { x: '1880', y: '1120' },
                trainPos: { x: '1895', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

            {
                // fake signal to place exiting trains
                signalName: 'My_Z',
                invisibleSignal: true,
                signalPos: { x: '1995', y: '1120' },
                trainPos: { x: '1980', y: '1120' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Zawiercie Borowe Pole',
                    pos: { x: 1192.5, y: 1050 },
                    // posFlipped: { x: -10, y: 40 },
                    platforms: [
                        { pos: { x: 1165, y: 1088.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1165, y: 1124 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Myszków Mrzygłód',
                    pos: { x: 1510, y: 1050 },
                    // posFlipped: { x: -10, y: 40 },
                    platforms: [
                        { pos: { x: 1448, y: 1088.5 }, width: 50, height: 7.5 },
                        { pos: { x: 1522, y: 1124 }, width: 50, height: 7.5 },
                    ]
                }
            },
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2719', pos: { x: 970, y: 1100 } },
                    { text: '2728', pos: { x: 970, y: 1120 } },
                    { text: '2707', pos: { x: 1090, y: 1100 } },
                    { text: '2718', pos: { x: 1090, y: 1120 } },
                    { text: '2693', pos: { x: 1210, y: 1100 } },
                    { text: '2706', pos: { x: 1210, y: 1120 } },
                    { text: '2677', pos: { x: 1330, y: 1100 } },
                    { text: '2692', pos: { x: 1330, y: 1120 } },
                    { text: '2665', pos: { x: 1450, y: 1100 } },
                    { text: '2676', pos: { x: 1450, y: 1120 } },
                    { text: '2651', pos: { x: 1570, y: 1100 } },
                    { text: '2661', pos: { x: 1570, y: 1120 } },
                    { text: '2637', pos: { x: 1700, y: 1100 } },
                    { text: '2650', pos: { x: 1700, y: 1120 } },
                    { text: '2625', pos: { x: 1820, y: 1100 } },
                    { text: '2638', pos: { x: 1820, y: 1120 } },
                ]
            },
        ]
    },
    "ZAWIERCIE_GORAWLODOWSKA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M920,1080 ABS100-20-6 SPR10 LR2.5 SWDN100 LR2.5 SPR10 ABS100-20-3',
                    'M920,1140 ABS100-20-3 SPR10 LR2.5 SWDN60 LR2.5 SPR10 ABS100-20-6',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_2213N',
                signalPos: { x: '1030', y: '1080' },
                trainPos: { x: '1015', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2206',
                signalPos: { x: '1030', y: '1140' },
                trainPos: { x: '1015', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                //? SIGNAL HAS WRONG NAME - SHOULD BE NAMED "L4_2213"
                signalName: 'L1_2213',
                signalPos: { x: '1030', y: '1080' },
                trainPos: { x: '1045', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_2206N',
                signalPos: { x: '1030', y: '1140' },
                trainPos: { x: '1045', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },


            {
                signalName: 'L4_2199N',
                signalPos: { x: '1150', y: '1080' },
                trainPos: { x: '1135', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2182',
                signalPos: { x: '1150', y: '1140' },
                trainPos: { x: '1135', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2199',
                signalPos: { x: '1150', y: '1080' },
                trainPos: { x: '1165', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2182N',
                signalPos: { x: '1150', y: '1140' },
                trainPos: { x: '1165', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2183N',
                signalPos: { x: '1270', y: '1080' },
                trainPos: { x: '1255', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2162',
                signalPos: { x: '1270', y: '1140' },
                trainPos: { x: '1255', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2183',
                signalPos: { x: '1270', y: '1080' },
                trainPos: { x: '1285', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2162N',
                signalPos: { x: '1280', y: '1200' },
                trainPos: { x: '1295', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2161N',
                signalPos: { x: '1390', y: '1080' },
                trainPos: { x: '1375', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2142',
                signalPos: { x: '1400', y: '1200' },
                trainPos: { x: '1385', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2161',
                signalPos: { x: '1390', y: '1080' },
                trainPos: { x: '1405', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2142N',
                signalPos: { x: '1400', y: '1200' },
                trainPos: { x: '1415', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2141N',
                signalPos: { x: '1510', y: '1080' },
                trainPos: { x: '1495', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2128',
                signalPos: { x: '1520', y: '1200' },
                trainPos: { x: '1505', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2141',
                signalPos: { x: '1510', y: '1080' },
                trainPos: { x: '1525', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2128N',
                signalPos: { x: '1520', y: '1200' },
                trainPos: { x: '1535', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2119N',
                signalPos: { x: '1630', y: '1080' },
                trainPos: { x: '1615', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2114',
                signalPos: { x: '1640', y: '1200' },
                trainPos: { x: '1625', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2119',
                signalPos: { x: '1640', y: '1180' },
                trainPos: { x: '1655', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2114N',
                signalPos: { x: '1640', y: '1200' },
                trainPos: { x: '1655', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2103N',
                signalPos: { x: '1760', y: '1180' },
                trainPos: { x: '1745', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2100',
                signalPos: { x: '1760', y: '1200' },
                trainPos: { x: '1745', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2103',
                signalPos: { x: '1760', y: '1180' },
                trainPos: { x: '1775', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2100N',
                signalPos: { x: '1760', y: '1200' },
                trainPos: { x: '1775', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },


            {
                signalName: 'L4_2085N',
                signalPos: { x: '1880', y: '1180' },
                trainPos: { x: '1865', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_2086',
                signalPos: { x: '1880', y: '1200' },
                trainPos: { x: '1865', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_2085',
                signalPos: { x: '1880', y: '1180' },
                trainPos: { x: '1895', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2086N',
                signalPos: { x: '1880', y: '1200' },
                trainPos: { x: '1895', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2213', pos: { x: 970, y: 1080 } },
                    { text: '2228', pos: { x: 970, y: 1140 } },
                    { text: '2199', pos: { x: 1090, y: 1080 } },
                    { text: '2206', pos: { x: 1090, y: 1140 } },
                    { text: '2183', pos: { x: 1210, y: 1080 } },
                    { text: '2182', pos: { x: 1210, y: 1140 } },
                    { text: '2161', pos: { x: 1330, y: 1080 } },
                    { text: '2162', pos: { x: 1340, y: 1200 } },
                    { text: '2141', pos: { x: 1450, y: 1080 } },
                    { text: '2142', pos: { x: 1460, y: 1200 } },
                    { text: '2119', pos: { x: 1570, y: 1080 } },
                    { text: '2128', pos: { x: 1580, y: 1200 } },
                    { text: '2103', pos: { x: 1700, y: 1180 } },
                    { text: '2114', pos: { x: 1700, y: 1200 } },
                    { text: '2085', pos: { x: 1820, y: 1180 } },
                    { text: '2100', pos: { x: 1820, y: 1200 } },
                    { text: '2073', pos: { x: 1940, y: 1180 } },
                    { text: '2086', pos: { x: 1940, y: 1200 } },
                ]
            },
        ]
    },
    "1193_GW_GORAWLODOWSKA": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M2020,1200 SWUP20 LR10 SWUP20 LR10 SPR10 LR100 SPR10 LR10 SWDN20 LR10 SWDN20 LR20 SWUP20',
                    'M2000,1180 LR50 SPR10 LR100 SPR10 LR70',
                    'M2000,1200 LR50 SPR10 LR100 SPR10 LR70',
                    'M2035,1200 SWDN20 LR10 SPR10 LR100 SPR10 LR10 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'GW_T',
                signalPos: { x: '2000', y: '1180' },
                trainPos: { x: '1985', y: '1180' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'GW_W',
                signalPos: { x: '2000', y: '1200' },
                trainPos: { x: '1985', y: '1200' },
                signalType: 'station_standard',
                signalDirectionOnMap: 'right',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'GW_O',
                signalPos: { x: '2050', y: '1160' },
                trainPos: { x: '2065', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'GW_N',
                signalPos: { x: '2050', y: '1180' },
                trainPos: { x: '2065', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'GW_M',
                signalPos: { x: '2050', y: '1200' },
                trainPos: { x: '2065', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'GW_L',
                signalPos: { x: '2050', y: '1220' },
                trainPos: { x: '2065', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'GW_E',
                signalPos: { x: '2170', y: '1160' },
                trainPos: { x: '2155', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'GW_F',
                signalPos: { x: '2170', y: '1180' },
                trainPos: { x: '2155', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'GW_G',
                signalPos: { x: '2170', y: '1200' },
                trainPos: { x: '2155', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'GW_H',
                signalPos: { x: '2170', y: '1220' },
                trainPos: { x: '2155', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'GW_B',
                signalPos: { x: '2240', y: '1180' },
                trainPos: { x: '2255', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'GW_A',
                signalPos: { x: '2240', y: '1200' },
                trainPos: { x: '2255', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Góra Włodowska',
                    prefix: 'GW',
                    pos: { x: 2110, y: 1125 },
                    posFlipped: { x: 2110, y: 1255 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 2000, y: 1210 },
                    rotation: 0,
                },
                platforms: [],
                trackLabels: [
                    { text: '3', pos: { x: 2110, y: 1160 } },
                    { text: '1', pos: { x: 2110, y: 1180 } },
                    { text: '2', pos: { x: 2110, y: 1200 } },
                    { text: '4', pos: { x: 2110, y: 1220 } },
                ]
            },
        ]
    },
    "GORAWLODOWSKA_PSARY_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2250,1180 ABS100-20-2 SPR10 LR10 TEND',
                    'M2250,1200 ABS100-20-2 SPR10 LR10 TEND',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L4_2035N',
                signalPos: { x: '2360', y: '1180' },
                trainPos: { x: '2345', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2036',
                signalPos: { x: '2360', y: '1200' },
                trainPos: { x: '2345', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2035',
                signalPos: { x: '2360', y: '1180' },
                trainPos: { x: '2375', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_2036N',
                signalPos: { x: '2360', y: '1200' },
                trainPos: { x: '2375', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_2023N',
                signalPos: { x: '2480', y: '1180' },
                trainPos: { x: '2465', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2022',
                signalPos: { x: '2480', y: '1200' },
                trainPos: { x: '2465', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2035', pos: { x: 2300, y: 1180 } },
                    { text: '2050', pos: { x: 2300, y: 1200 } },
                    { text: '2023', pos: { x: 2420, y: 1180 } },
                    { text: '2036', pos: { x: 2420, y: 1200 } },
                ]
            },
        ]
    },


    "GORAWLODOWSKA_PSARY_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M590,1290 TSTART LR10 SPR10 ABS100-20-15 SPR10 LR10 TEND',
                    'M590,1310 TSTART LR10 SPR10 ABS100-20-15 SPR10 LR10 TEND',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_2023',
                signalPos: { x: '610', y: '1300' },
                trainPos: { x: '625', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2022N',
                signalPos: { x: '610', y: '1320' },
                trainPos: { x: '625', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_2009N',
                signalPos: { x: '730', y: '1300' },
                trainPos: { x: '715', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2008',
                signalPos: { x: '730', y: '1320' },
                trainPos: { x: '715', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2009',
                signalPos: { x: '730', y: '1300' },
                trainPos: { x: '745', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_2008N',
                signalPos: { x: '730', y: '1320' },
                trainPos: { x: '745', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1995N',
                signalPos: { x: '850', y: '1300' },
                trainPos: { x: '835', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1994',
                signalPos: { x: '850', y: '1320' },
                trainPos: { x: '835', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1995',
                signalPos: { x: '850', y: '1300' },
                trainPos: { x: '865', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1994N',
                signalPos: { x: '850', y: '1320' },
                trainPos: { x: '865', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1981N',
                signalPos: { x: '970', y: '1300' },
                trainPos: { x: '955', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1980',
                signalPos: { x: '970', y: '1320' },
                trainPos: { x: '955', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1981',
                signalPos: { x: '970', y: '1300' },
                trainPos: { x: '985', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1980N',
                signalPos: { x: '970', y: '1320' },
                trainPos: { x: '985', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1967N',
                signalPos: { x: '1090', y: '1300' },
                trainPos: { x: '1075', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1966',
                signalPos: { x: '1090', y: '1320' },
                trainPos: { x: '1075', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1967',
                signalPos: { x: '1090', y: '1300' },
                trainPos: { x: '1105', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1966N',
                signalPos: { x: '1090', y: '1320' },
                trainPos: { x: '1105', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1951N',
                signalPos: { x: '1210', y: '1300' },
                trainPos: { x: '1195', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1950',
                signalPos: { x: '1210', y: '1320' },
                trainPos: { x: '1195', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1951',
                signalPos: { x: '1210', y: '1300' },
                trainPos: { x: '1225', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1950N',
                signalPos: { x: '1210', y: '1320' },
                trainPos: { x: '1225', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1935N',
                signalPos: { x: '1330', y: '1300' },
                trainPos: { x: '1315', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1936',
                signalPos: { x: '1330', y: '1320' },
                trainPos: { x: '1315', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1935',
                signalPos: { x: '1330', y: '1300' },
                trainPos: { x: '1345', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1936N',
                signalPos: { x: '1330', y: '1320' },
                trainPos: { x: '1345', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1917N',
                signalPos: { x: '1450', y: '1300' },
                trainPos: { x: '1435', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1918',
                signalPos: { x: '1450', y: '1320' },
                trainPos: { x: '1435', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1917',
                signalPos: { x: '1450', y: '1300' },
                trainPos: { x: '1465', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1918N',
                signalPos: { x: '1450', y: '1320' },
                trainPos: { x: '1465', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1897N',
                signalPos: { x: '1570', y: '1300' },
                trainPos: { x: '1555', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1898',
                signalPos: { x: '1570', y: '1320' },
                trainPos: { x: '1555', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1897',
                signalPos: { x: '1570', y: '1300' },
                trainPos: { x: '1585', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1898N',
                signalPos: { x: '1570', y: '1320' },
                trainPos: { x: '1585', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1881N',
                signalPos: { x: '1690', y: '1300' },
                trainPos: { x: '1675', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1882',
                signalPos: { x: '1690', y: '1320' },
                trainPos: { x: '1675', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1881',
                signalPos: { x: '1690', y: '1300' },
                trainPos: { x: '1705', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1882N',
                signalPos: { x: '1690', y: '1320' },
                trainPos: { x: '1705', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1859N',
                signalPos: { x: '1810', y: '1300' },
                trainPos: { x: '1795', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1858',
                signalPos: { x: '1810', y: '1320' },
                trainPos: { x: '1795', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1859',
                signalPos: { x: '1810', y: '1300' },
                trainPos: { x: '1825', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1858N',
                signalPos: { x: '1810', y: '1320' },
                trainPos: { x: '1825', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1841N',
                signalPos: { x: '1930', y: '1300' },
                trainPos: { x: '1915', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1842',
                signalPos: { x: '1930', y: '1320' },
                trainPos: { x: '1915', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1841',
                signalPos: { x: '1930', y: '1300' },
                trainPos: { x: '1945', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1842N',
                signalPos: { x: '1930', y: '1320' },
                trainPos: { x: '1945', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1827N',
                signalPos: { x: '2050', y: '1300' },
                trainPos: { x: '2035', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1828',
                signalPos: { x: '2050', y: '1320' },
                trainPos: { x: '2035', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1827',
                signalPos: { x: '2050', y: '1300' },
                trainPos: { x: '2065', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1828N',
                signalPos: { x: '2050', y: '1320' },
                trainPos: { x: '2065', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1807N',
                signalPos: { x: '2170', y: '1300' },
                trainPos: { x: '2155', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1806',
                signalPos: { x: '2170', y: '1320' },
                trainPos: { x: '2155', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1807',
                signalPos: { x: '2170', y: '1300' },
                trainPos: { x: '2185', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1806N',
                signalPos: { x: '2170', y: '1320' },
                trainPos: { x: '2185', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1789N',
                signalPos: { x: '2290', y: '1300' },
                trainPos: { x: '2275', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1788',
                signalPos: { x: '2290', y: '1320' },
                trainPos: { x: '2275', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1789',
                signalPos: { x: '2290', y: '1300' },
                trainPos: { x: '2305', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1788N',
                signalPos: { x: '2290', y: '1320' },
                trainPos: { x: '2305', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1773N',
                signalPos: { x: '2410', y: '1300' },
                trainPos: { x: '2395', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1774',
                signalPos: { x: '2410', y: '1320' },
                trainPos: { x: '2395', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '2009', pos: { x: 670, y: 1300 } },
                    { text: '2022', pos: { x: 670, y: 1320 } },
                    { text: '1995', pos: { x: 790, y: 1300 } },
                    { text: '2008', pos: { x: 790, y: 1320 } },
                    { text: '1981', pos: { x: 910, y: 1300 } },
                    { text: '1994', pos: { x: 910, y: 1320 } },
                    { text: '1967', pos: { x: 1030, y: 1300 } },
                    { text: '1980', pos: { x: 1030, y: 1320 } },
                    { text: '1951', pos: { x: 1150, y: 1300 } },
                    { text: '1966', pos: { x: 1150, y: 1320 } },
                    { text: '1935', pos: { x: 1270, y: 1300 } },
                    { text: '1950', pos: { x: 1270, y: 1320 } },
                    { text: '1917', pos: { x: 1390, y: 1300 } },
                    { text: '1936', pos: { x: 1390, y: 1320 } },
                    { text: '1897', pos: { x: 1510, y: 1300 } },
                    { text: '1918', pos: { x: 1510, y: 1320 } },
                    { text: '1881', pos: { x: 1630, y: 1300 } },
                    { text: '1898', pos: { x: 1630, y: 1320 } },
                    { text: '1859', pos: { x: 1750, y: 1300 } },
                    { text: '1882', pos: { x: 1750, y: 1320 } },
                    { text: '1841', pos: { x: 1870, y: 1300 } },
                    { text: '1858', pos: { x: 1870, y: 1320 } },
                    { text: '1827', pos: { x: 1990, y: 1300 } },
                    { text: '1842', pos: { x: 1990, y: 1320 } },
                    { text: '1827', pos: { x: 2110, y: 1300 } },
                    { text: '1828', pos: { x: 2110, y: 1320 } },
                    { text: '1789', pos: { x: 2230, y: 1300 } },
                    { text: '1806', pos: { x: 2230, y: 1320 } },
                    { text: '1773', pos: { x: 2350, y: 1300 } },
                    { text: '1788', pos: { x: 2350, y: 1320 } },
                ]
            },
        ]
    },


    "GORAWLODOWSKA_PSARY_3": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,1430 TSTART LR10 SPR10 ABS100-20-4',
                    'M10,1450 TSTART LR10 SPR10 ABS100-20-4',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1773',
                signalPos: { x: '30', y: '1440' },
                trainPos: { x: '45', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1774N',
                signalPos: { x: '30', y: '1460' },
                trainPos: { x: '45', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1759N',
                signalPos: { x: '150', y: '1440' },
                trainPos: { x: '135', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1758',
                signalPos: { x: '150', y: '1460' },
                trainPos: { x: '135', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1759',
                signalPos: { x: '150', y: '1440' },
                trainPos: { x: '165', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1758N',
                signalPos: { x: '150', y: '1460' },
                trainPos: { x: '165', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1743N',
                signalPos: { x: '270', y: '1440' },
                trainPos: { x: '255', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1742',
                signalPos: { x: '270', y: '1460' },
                trainPos: { x: '255', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1743',
                signalPos: { x: '270', y: '1440' },
                trainPos: { x: '285', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1742N',
                signalPos: { x: '270', y: '1460' },
                trainPos: { x: '285', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1727N',
                signalPos: { x: '390', y: '1440' },
                trainPos: { x: '375', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1726',
                signalPos: { x: '390', y: '1460' },
                trainPos: { x: '375', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1727',
                signalPos: { x: '390', y: '1440' },
                trainPos: { x: '405', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1726N',
                signalPos: { x: '390', y: '1460' },
                trainPos: { x: '405', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1759', pos: { x: 90, y: 1440 } },
                    { text: '1774', pos: { x: 90, y: 1460 } },
                    { text: '1743', pos: { x: 210, y: 1440 } },
                    { text: '1758', pos: { x: 210, y: 1460 } },
                    { text: '1727', pos: { x: 330, y: 1440 } },
                    { text: '1742', pos: { x: 330, y: 1460 } },
                    { text: '1713', pos: { x: 450, y: 1440 } },
                    { text: '1726', pos: { x: 450, y: 1460 } },
                ]
            },
        ]
    },
    "KOZLOW_PSARY": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    // ABS Psary <-> Starzyny
                    'M500,1490 LL100 SPL10 LL7.5 UTRD80 LR7.5 SPR10 LR100',

                    // Koniecpol
                    'M285,1590 DOT5-5-10 SPR20 LR100',

                    // Starzyny <-> Sprowa <-> Kozlow
                    'M600,1590 LR300 SPR90 LR300',
                    'M600,1610 LR300 SPR90 LR300',
                ]
            },
            {
                //? STARZYNY & SPROWA
                color: STATION_TRACK_COLOR,
                commands: [
                    // STARZYNY
                    'M510,1570 LR35 SWDN20 LR40',
                    'M510,1590 LR80',
                    'M565,1590 SWDN20',
                    'M510,1590 LR20 SWDN20 LR55',

                    // SPROWA
                    'M910,1590 LR70',
                    'M930,1610 SWUP20 LR20 SWDN20',
                    'M910,1610 LR70',
                ]
            }
        ],
        "SIGNALS": [
            //~ ABS SIGNALS PSARY -> STARZYNY
            {
                signalName: 'L570_15',
                signalPos: { x: '390', y: '1490' },
                trainPos: { x: '405', y: '1490' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            {
                signalName: 'L570_15N',
                signalPos: { x: '390', y: '1570' },
                trainPos: { x: '405', y: '1570' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last'
            },
            //~ 1828_Ko_KONIECPOL
            {
                //? Asig Koniecpol
                signalName: '1830_Ko_J',
                signalPos: { x: '390', y: '1590' },
                trainPos: { x: '375', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                //? Esig Koniecpol
                signalName: '1830_Ko_A',
                signalPos: { x: '390', y: '1590' },
                trainPos: { x: '405', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ 4092_Str_STARZYNY
            {
                signalName: 'Str_C',
                signalPos: { x: '510', y: '1570' },
                trainPos: { x: '495', y: '1570' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Str_D',
                signalPos: { x: '510', y: '1590' },
                trainPos: { x: '495', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Str_B',
                signalPos: { x: '590', y: '1590' },
                trainPos: { x: '605', y: '1590' },
                trainPosDistance: [
                    { distanceToSignal: 10000, x: 805, y: 1590 },
                    { distanceToSignal: 5000, x: 715, y: 1590 },
                    { distanceToSignal: 3000, x: 655, y: 1590 },
                    { distanceToSignal: 1500, x: 635, y: 1590 }
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'Str_A',
                signalPos: { x: '590', y: '1610' },
                trainPos: { x: '605', y: '1610' },
                trainPosDistance: [
                    { distanceToSignal: 10000, x: 805, y: 1610 },
                    { distanceToSignal: 5000, x: 715, y: 1610 },
                    { distanceToSignal: 3000, x: 655, y: 1610 },
                    { distanceToSignal: 1500, x: 635, y: 1610 }
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //~ 4021_Sp_SPROWA
            {
                signalName: 'Sp_C',
                signalPos: { x: '910', y: '1590' },
                trainPos: { x: '895', y: '1590' },
                trainPosDistance: [
                    { distanceToSignal: 10000, x: 695, y: 1590 },
                    { distanceToSignal: 5000, x: 785, y: 1590 },
                    { distanceToSignal: 3000, x: 845, y: 1590 },
                    { distanceToSignal: 1500, x: 865, y: 1590 }
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Sp_D',
                signalPos: { x: '910', y: '1610' },
                trainPos: { x: '895', y: '1610' },
                trainPosDistance: [
                    { distanceToSignal: 10000, x: 695, y: 1610 },
                    { distanceToSignal: 5000, x: 785, y: 1610 },
                    { distanceToSignal: 3000, x: 845, y: 1610 },
                    { distanceToSignal: 1500, x: 865, y: 1610 }
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Sp_B',
                signalPos: { x: '980', y: '1590' },
                trainPos: { x: '995', y: '1590' },
                trainPosDistance: [
                    { distanceToSignal: 10000, x: 1195, y: 1590 },
                    { distanceToSignal: 5000, x: 1135, y: 1590 },
                    { distanceToSignal: 3000, x: 1075, y: 1590 },
                    { distanceToSignal: 1500, x: 1015, y: 1590 }
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'Sp_A',
                signalPos: { x: '980', y: '1610' },
                trainPos: { x: '995', y: '1610' },
                trainPosDistance: [
                    { distanceToSignal: 10000, x: 1195, y: 1610 },
                    { distanceToSignal: 5000, x: 1135, y: 1610 },
                    { distanceToSignal: 3000, x: 1075, y: 1610 },
                    { distanceToSignal: 1500, x: 1015, y: 1610 }
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            //? Esigs Kozlow
            {
                signalName: 'Kz_B',
                signalPos: { x: '1300', y: '1590' },
                trainPos: { x: '1285', y: '1590' },
                trainPosDistance: [
                    { distanceToSignal: 10000, x: 1085, y: 1590 },
                    { distanceToSignal: 5000, x: 1145, y: 1590 },
                    { distanceToSignal: 3000, x: 1205, y: 1590 },
                    { distanceToSignal: 1500, x: 1265, y: 1590 }
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Kz_C',
                signalPos: { x: '1300', y: '1610' },
                trainPos: { x: '1285', y: '1610' },
                trainPosDistance: [
                    { distanceToSignal: 10000, x: 1085, y: 1610 },
                    { distanceToSignal: 5000, x: 1145, y: 1610 },
                    { distanceToSignal: 3000, x: 1205, y: 1610 },
                    { distanceToSignal: 1500, x: 1265, y: 1610 }
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '05', pos: { x: 450, y: 1490 } },
                    { text: '15', pos: { x: 450, y: 1570 } },
                ]
            },
            // ? Starzyny
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Starzyny',
                    prefix: 'Str',
                    pos: { x: 550, y: 1550 },
                    posFlipped: { x: 550, y: 1640 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 557.5, y: 1563 },
                    rotation: 180,
                }
            },
            //? Sprowa
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sprowa',
                    prefix: 'Sp',
                    lcsControlledBy: 'Starzyny',
                    pos: { x: 945, y: 1555 },
                    posFlipped: { x: 945, y: 1645 }
                }
            },
        ]
    },
    "3436_Ps_PSARY": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ T1
                    'M510,1440 LR110 SPR10 LR100 SPR10 LR90',
                    //~ T2
                    'M510,1460 LR110 SPR10 LR100 SPR10 LR90',

                    //^ T3
                    'M585,1440 SWUP20 LR30 SPR10 LR100 SPR10 LR25 SWDN20',
                    //^ T4
                    'M510,1490 LR110 SPR10 LR100 SPR10 LR25 SWUP30',
                    //^ T6
                    'M600,1490 SWDN20 LR15 SPR10 LR100 SPR10 LR10 SWUP20',

                    //? SWITCHES: 41/40 - 31/27
                    'M530,1490 SWUP30 LR50 SWDN30',
                    //? SWITCHES: 37/35 - 33/30 
                    'M545,1440 SWDN20 LR20 SWUP20',

                    //? SWITCHES: 4/3 - 2/1
                    'M790,1460 SWUP20 LR15 SWDN20'
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'Ps_T',
                signalPos: { x: '510', y: '1440' },
                trainPos: { x: '495', y: '1440' },
                signalDirectionOnMap: 'right',
                trainAnchor: 'middle',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_V',
                signalPos: { x: '510', y: '1460' },
                trainPos: { x: '495', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_W',
                signalPos: { x: '510', y: '1490' },
                trainPos: { x: '495', y: '1490' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'Ps_O',
                signalPos: { x: '620', y: '1420' },
                trainPos: { x: '635', y: '1420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_N',
                signalPos: { x: '620', y: '1440' },
                trainPos: { x: '635', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_M',
                signalPos: { x: '620', y: '1460' },
                trainPos: { x: '635', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_L',
                signalPos: { x: '620', y: '1490' },
                trainPos: { x: '635', y: '1490' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_K',
                signalPos: { x: '620', y: '1510' },
                trainPos: { x: '635', y: '1510' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'Ps_E',
                signalPos: { x: '740', y: '1420' },
                trainPos: { x: '725', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_F',
                signalPos: { x: '740', y: '1440' },
                trainPos: { x: '725', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_G',
                signalPos: { x: '740', y: '1460' },
                trainPos: { x: '725', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_H',
                signalPos: { x: '740', y: '1490' },
                trainPos: { x: '725', y: '1490' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_J',
                signalPos: { x: '740', y: '1510' },
                trainPos: { x: '725', y: '1510' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'Ps_B',
                signalPos: { x: '830', y: '1440' },
                trainPos: { x: '845', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ps_A',
                signalPos: { x: '830', y: '1460' },
                trainPos: { x: '845', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Psary',
                    prefix: 'Ps',
                    pos: { x: 680, y: 1390 },
                    posFlipped: { x: 680, y: 1540 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 545, y: 1515 },
                    rotation: 0,
                },
                trackLabels: [
                    { text: '3', pos: { x: 680, y: 1420 } },
                    { text: '1', pos: { x: 680, y: 1440 } },
                    { text: '2', pos: { x: 680, y: 1460 } },
                    { text: '4', pos: { x: 680, y: 1490 } },
                    { text: '6', pos: { x: 680, y: 1510 } },
                ]
            },
        ]
    },
    "PSARY_KNAPOWKA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M840,1440 ABS100-20-5',
                    'M840,1460 ABS100-20-5',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1673N',
                signalPos: { x: '950', y: '1440' },
                trainPos: { x: '935', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1674',
                signalPos: { x: '950', y: '1460' },
                trainPos: { x: '935', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1673',
                signalPos: { x: '950', y: '1440' },
                trainPos: { x: '965', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1674N',
                signalPos: { x: '950', y: '1460' },
                trainPos: { x: '965', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_1655N',
                signalPos: { x: '1070', y: '1440' },
                trainPos: { x: '1055', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1656',
                signalPos: { x: '1070', y: '1460' },
                trainPos: { x: '1055', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1655',
                signalPos: { x: '1070', y: '1440' },
                trainPos: { x: '1085', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1656N',
                signalPos: { x: '1070', y: '1460' },
                trainPos: { x: '1085', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1641N',
                signalPos: { x: '1190', y: '1440' },
                trainPos: { x: '1175', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1642',
                signalPos: { x: '1190', y: '1460' },
                trainPos: { x: '1175', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1641',
                signalPos: { x: '1190', y: '1440' },
                trainPos: { x: '1205', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1642N',
                signalPos: { x: '1190', y: '1460' },
                trainPos: { x: '1205', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            {
                signalName: 'L4_1625N',
                signalPos: { x: '1310', y: '1440' },
                trainPos: { x: '1295', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1624',
                signalPos: { x: '1310', y: '1460' },
                trainPos: { x: '1295', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1625',
                signalPos: { x: '1310', y: '1440' },
                trainPos: { x: '1325', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1624N',
                signalPos: { x: '1310', y: '1460' },
                trainPos: { x: '1325', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1673', pos: { x: 890, y: 1440 } },
                    { text: '1686', pos: { x: 890, y: 1460 } },
                    { text: '1655', pos: { x: 1010, y: 1440 } },
                    { text: '1674', pos: { x: 1010, y: 1460 } },
                    { text: '1641', pos: { x: 1130, y: 1440 } },
                    { text: '1656', pos: { x: 1130, y: 1460 } },
                    { text: '1625', pos: { x: 1250, y: 1440 } },
                    { text: '1642', pos: { x: 1250, y: 1460 } },
                    { text: '1611', pos: { x: 1370, y: 1440 } },
                    { text: '1624', pos: { x: 1370, y: 1460 } },
                ]
            },
        ]
    },
    "1772_Kn_KNAPOWKA": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1430,1440 LR110',
                    'M1430,1460 LR110',
                    'M1450,1460 SWUP20 LR20 SWDN20 LR20 SWDN20 LR35'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Kn_E',
                signalPos: { x: '1430', y: '1440' },
                trainPos: { x: '1415', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_F',
                signalPos: { x: '1430', y: '1460' },
                trainPos: { x: '1415', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },

            {
                signalName: 'Kn_C',
                signalPos: { x: '1540', y: '1440' },
                trainPos: { x: '1555', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_B',
                signalPos: { x: '1540', y: '1460' },
                trainPos: { x: '1555', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_A',
                signalPos: { x: '1540', y: '1480' },
                trainPos: { x: '1555', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kn_A',
                signalPos: { x: '1540', y: '1480' },
                trainPos: { x: '1555', y: '1480' },
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
                    pos: { x: 1485, y: 1410 },
                    posFlipped: { x: 1485, y: 1515 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1460, y: 1470 },
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
                    'M1335,1370 DOT5-5-7 SPR20 ABS100-20-2 SPR10 LR2.5 SWDN40 LR2.5 SPR10 ABS100-20-2',

                    // Knapowka
                    'M1550,1440 ABS100-20-3',
                    'M1550,1460 ABS100-20-3',

                    // Czarnca
                    'M1550,1480 ABS100-20-2 SPR20 DOT5-5-10',
                ]
            }
        ],
        "SIGNALS": [
            //~ SIGNALS TOWARDS AND FROM CZARNZA TO KNAPOWKA
            {
                signalName: 'L571_19N',
                signalPos: { x: '1660', y: '1480' },
                trainPos: { x: '1645', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L571_19',
                signalPos: { x: '1660', y: '1480' },
                trainPos: { x: '1675', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'Cz_Z',
                signalPos: { x: '1780', y: '1480' },
                trainPos: { x: '1765', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Cz_O',
                signalPos: { x: '1780', y: '1480' },
                trainPos: { x: '1795', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ SIGNALS TOWARDS AND FROM ZELISLAWICE TO WLOSZCZOWA POLNOC
            {
                signalName: 'Zes_B',
                signalPos: { x: '1410', y: '1370' },
                trainPos: { x: '1395', y: '1370' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Zes_A',
                signalPos: { x: '1410', y: '1370' },
                trainPos: { x: '1425', y: '1370' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'L572_59N',
                signalPos: { x: '1530', y: '1370' },
                trainPos: { x: '1515', y: '1370' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_59',
                signalPos: { x: '1530', y: '1370' },
                trainPos: { x: '1545', y: '1370' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L572_41N',
                signalPos: { x: '1650', y: '1370' },
                trainPos: { x: '1635', y: '1370' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_41',
                signalPos: { x: '1660', y: '1410' },
                trainPos: { x: '1675', y: '1410' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L572_25N',
                signalPos: { x: '1780', y: '1410' },
                trainPos: { x: '1765', y: '1410' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L572_25',
                signalPos: { x: '1780', y: '1410' },
                trainPos: { x: '1795', y: '1410' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },

            //~ ABS SIGNALS KNAPOWKA <-> WLOSZCZOWA POLNOC
            {
                signalName: 'L4_1587N',
                signalPos: { x: '1660', y: '1440' },
                trainPos: { x: '1645', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1586',
                signalPos: { x: '1660', y: '1460' },
                trainPos: { x: '1645', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1587',
                signalPos: { x: '1660', y: '1440' },
                trainPos: { x: '1675', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1586N',
                signalPos: { x: '1660', y: '1460' },
                trainPos: { x: '1675', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },


            {
                signalName: 'L4_1565N',
                signalPos: { x: '1780', y: '1440' },
                trainPos: { x: '1765', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1564',
                signalPos: { x: '1780', y: '1460' },
                trainPos: { x: '1765', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1565',
                signalPos: { x: '1780', y: '1440' },
                trainPos: { x: '1795', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1564N',
                signalPos: { x: '1780', y: '1460' },
                trainPos: { x: '1795', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    // Czarnca <-> Knapowka
                    { text: '19', pos: { x: 1600, y: 1480 } },
                    { text: '21', pos: { x: 1720, y: 1480 } },
                    // Knapowka <-> Wloszczowa Polnoc 1
                    { text: '1587', pos: { x: 1600, y: 1440 } },
                    { text: '1600', pos: { x: 1600, y: 1460 } },
                    { text: '1565', pos: { x: 1720, y: 1440 } },
                    { text: '1586', pos: { x: 1720, y: 1460 } },
                    { text: '1551', pos: { x: 1840, y: 1440 } },
                    { text: '1564', pos: { x: 1840, y: 1460 } },
                    // Wloszczowa Polnoc <-> Zelislawice
                    { text: '59', pos: { x: 1470, y: 1370 } },
                    { text: '41', pos: { x: 1590, y: 1370 } },
                    { text: '25', pos: { x: 1720, y: 1410 } },
                    { text: '11', pos: { x: 1840, y: 1410 } },
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
                    'M1990,1410 SWUP20 LR15 SPR10 LR100 SPR10 LR10 SWDN20',
                    //^ T3
                    'M1910,1410 LR100 SPR10 LR100 SPR10 LR25 SWDN30',

                    //~ T1
                    'M1900,1440 LR90 SPR10 LR110 SPR10 LR90',
                    //~ T2
                    'M1900,1460 LR90 SPR10 LR110 SPR10 LR90',

                    //~ T4
                    'M1975,1460 SWDN20 LR10 SPR10 LR100 SPR10 LR25 SWUP20',

                    //? SWITCHES: 35/33 - 31/30 - 28/26
                    'M1930,1410 SWDN30 LR10 SWDN20 LR10 SWUP20 LR10 SWUP30',
                    //? SWTICHES: 4/3 - 2/1
                    'M2170,1460 SWUP20 LR10 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            //~ ENTRY SIGNALS LEFT SIDE
            {
                signalName: 'WP_S',
                signalPos: { x: '1900', y: '1410' },
                trainPos: { x: '1885', y: '1410' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_T',
                signalPos: { x: '1900', y: '1440' },
                trainPos: { x: '1885', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_U',
                signalPos: { x: '1900', y: '1460' },
                trainPos: { x: '1885', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNAL TO ZELISLAWICE
            {
                signalName: 'WP_R',
                signalPos: { x: '1900', y: '1410' },
                trainPos: { x: '1915', y: '1410' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS LEFT SIDE
            {
                signalName: 'WP_P',
                signalPos: { x: '2010', y: '1390' },
                trainPos: { x: '2025', y: '1390' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_N',
                signalPos: { x: '2010', y: '1410' },
                trainPos: { x: '2025', y: '1410' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_M',
                signalPos: { x: '1990', y: '1440' },
                trainPos: { x: '2005', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_L',
                signalPos: { x: '1990', y: '1460' },
                trainPos: { x: '2005', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_K',
                signalPos: { x: '1990', y: '1480' },
                trainPos: { x: '2005', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            //~ EXIT SIGNALS RIGHT SIDE
            {
                signalName: 'WP_E',
                signalPos: { x: '2130', y: '1390' },
                trainPos: { x: '2115', y: '1390' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_F',
                signalPos: { x: '2130', y: '1410' },
                trainPos: { x: '2115', y: '1410' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_G',
                signalPos: { x: '2120', y: '1440' },
                trainPos: { x: '2105', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_H',
                signalPos: { x: '2120', y: '1460' },
                trainPos: { x: '2105', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_J',
                signalPos: { x: '2110', y: '1480' },
                trainPos: { x: '2095', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            //~ ENTRY SIGNALS RIGHT SIDE
            {
                signalName: 'WP_B',
                signalPos: { x: '2210', y: '1440' },
                trainPos: { x: '2225', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'WP_A',
                signalPos: { x: '2210', y: '1460' },
                trainPos: { x: '2225', y: '1460' },
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
                    pos: { x: 2055, y: 1360 },
                    posFlipped: { x: 2085, y: 1520 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1940, y: 1490 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron II', width: 60, height: 10, pos: { x: 2022, y: 1395 } },
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 2022, y: 1485 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 2070, y: 1390 } },
                    { text: '3', pos: { x: 2070, y: 1410 } },
                    { text: '1', pos: { x: 2055, y: 1440 } },
                    { text: '2', pos: { x: 2055, y: 1460 } },
                    { text: '4', pos: { x: 2050, y: 1480 } },
                ]
            },
        ]
    },
    "WLOSZCZOWAPOLNOC_OLSZAMOWICE_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2220,1440 ABS100-20-2 SPR5 DOT5-5-2',
                    'M2220,1460 ABS100-20-2 SPR5 DOT5-5-2',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L4_1511N',
                signalPos: { x: '2330', y: '1440' },
                trainPos: { x: '2315', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1510',
                signalPos: { x: '2330', y: '1460' },
                trainPos: { x: '2315', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1511',
                signalPos: { x: '2330', y: '1440' },
                trainPos: { x: '2345', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },
            {
                signalName: 'L4_1510N',
                signalPos: { x: '2330', y: '1460' },
                trainPos: { x: '2345', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_last',
            },

            {
                signalName: 'L4_1489N',
                invisibleSignal: true,
                signalPos: { x: '2450', y: '1440' },
                trainPos: { x: '2435', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
            {
                signalName: 'L4_1490',
                invisibleSignal: true,
                signalPos: { x: '2450', y: '1460' },
                trainPos: { x: '2435', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '1511', pos: { x: 2270, y: 1440 } },
                    { text: '1526', pos: { x: 2270, y: 1460 } },
                    { text: '1489', pos: { x: 2390, y: 1440 } },
                    { text: '1510', pos: { x: 2390, y: 1460 } },
                ]
            },
        ]
    },
}