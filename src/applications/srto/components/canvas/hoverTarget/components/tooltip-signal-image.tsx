import { ActiveTrainHoverTarget } from "../../../../types/hoverTarget";
import image from './signal-image.css'

export function ToolTipSignalImage(hoverTarget: ActiveTrainHoverTarget) {

    const lampObject = (() => {
        const isABS = hoverTarget.signal.signalType.split('_')[0] === 'abs'
        const speed = hoverTarget.train.TrainData.SignalInFrontSpeed
        const speednumber = speed === 50 || speed === 80 || speed === 130 || speed === 120 ? (speed / 10).toString() : ''

        const lamps = {
            lamp1_green: false, // also green for abs
            lamp2_orange: false, // will probably never get used without signal api
            lamp3_red: false, // also red for abs signal
            lamp4_orange: false, // also orange for abs signal
            lamp5_whiteSz: false, // will probably only get used by a very few signals
            greenBar: false, // for speeds of 100 or greater
            orangeBar: false, // for speeds of 60 or greater till 90
            W18: false, // last ABS signal
            W19: false, // short brake distance after next signal
            W20: false, // short brake distance to next signal
            W21: false, // speed on this signal (Zs3)
            W21_speed: '', // speed given in tenths of the speed (80 = 8)
            W22: false, // T-Sign "FREIGHT TRAIN CAN IGNORE SIGNAL S1 GIVEN ON ABS SIGNAL"
            W24: false, // LEFT TRACK (Zs6)
        }

        const isSZPossible = hoverTarget.signal.signalType === 'station_sz' || hoverTarget.signal.signalType.includes('40SZ')
        if (isSZPossible && speed === 40) {
            lamps.lamp3_red = true
            lamps.lamp5_whiteSz = true
            return lamps
        }

        const isW18 = hoverTarget.signal.signalType.split('_')[1] === 'last'
        if(isW18) lamps.W18 = true

        switch (speed) {
            case 0:
                lamps.lamp3_red = true
                break;
            case 40:
                lamps.lamp1_green = true
                lamps.lamp4_orange = true
                break;
            case 50:
                lamps.lamp1_green = true
                lamps.lamp4_orange = true
                lamps.W21 = true
                lamps.W21_speed = speednumber
                break;
            case 60:
                lamps.lamp1_green = true
                lamps.lamp4_orange = true
                lamps.orangeBar = true
                break;
            case 80:
                lamps.lamp1_green = true
                lamps.lamp4_orange = true
                lamps.orangeBar = true
                lamps.W21 = true
                lamps.W21_speed = speednumber
                break;
            case 100:
                lamps.lamp1_green = true
                lamps.lamp4_orange = true
                lamps.greenBar = true
                break;
            case 130:
                lamps.lamp1_green = true
                lamps.lamp4_orange = true
                lamps.greenBar = true
                lamps.W21 = true
                lamps.W21_speed = speednumber
                break;
            case 32767:
                lamps.lamp1_green = true
                break;
        }

        return lamps
    })();

    if (!hoverTarget) return <></>;

    const signalMetalColor = 'rgb(17, 17, 17)'
    const isABS = hoverTarget.signal.signalType.split('_')[0] === 'abs'
    const speed = hoverTarget.train.TrainData.SignalInFrontSpeed

    // const greenOrOffBar = speed >= 100 && speed < 160 ? 'greenBar' : 'offBar'
    // const orangeOrOffBar = speed >= 60 && speed < 100 ? 'orangeBar' : 'offBar'

    // const greenLamp = speed > 0 ? 'greenLamp' : 'lampOff'
    // const orangeLamp1 = 'lampOff'
    // const redLamp = speed === 0 ? 'redLamp' : 'lampOff'
    // const orangeLamp2 = speed > 0 && speed < 160 ? 'orangeLamp' : 'lampOff'
    // const whiteLampSz: string = (hoverTarget.signal.signalType.includes('sz') && speed === 40) ? 'whiteLamp_Blinking' : 'lampOff'
    // const speednumber = speed === 50 || speed === 80 || speed === 130 || speed === 120 ? (speed / 10).toString() : ''

    const signalName = hoverTarget.signal.signalName.split('_')[hoverTarget.signal.signalName.split('_').length - 1].toLocaleUpperCase();

    return (
        <>
            {!isABS ?
                <svg className={image.svg} viewBox="0 0 100 300">
                    <defs>
                        <filter id="lampglow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation={4} result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="numberGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation={4} result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <defs>
                        <pattern id='polePattern' x={0} y={0} width={10} height={50} patternUnits='userSpaceOnUse'>
                            <rect x={0} y={0} width={20} height={25} fill='white' />
                            <rect x={0} y={25} width={20} height={25} fill='red' />
                        </pattern>
                        <pattern id='speedBarGreen' x={0} y={0} width={60} height={8}>
                            <rect className={`speedBar ${lampObject.greenBar ? 'greenBar' : 'offBar'}`} x={5} y={0} width={11} height={8} />
                            <rect className={`speedBar ${lampObject.greenBar ? 'greenBar' : 'offBar'}`} x={18} y={0} width={11} height={8} />
                            <rect className={`speedBar ${lampObject.greenBar ? 'greenBar' : 'offBar'}`} x={31} y={0} width={11} height={8} />
                            <rect className={`speedBar ${lampObject.greenBar ? 'greenBar' : 'offBar'}`} x={44} y={0} width={11} height={8} />
                        </pattern>
                        <pattern id='speedBarOrange' x={0} y={0} width={60} height={8}>
                            <rect className={`speedBar ${lampObject.orangeBar ? 'orangeBar' : 'offBar'}`} x={5} y={0} width={11} height={8} />
                            <rect className={`speedBar ${lampObject.orangeBar ? 'orangeBar' : 'offBar'}`} x={18} y={0} width={11} height={8} />
                            <rect className={`speedBar ${lampObject.orangeBar ? 'orangeBar' : 'offBar'}`} x={31} y={0} width={11} height={8} />
                            <rect className={`speedBar ${lampObject.orangeBar ? 'orangeBar' : 'offBar'}`} x={44} y={0} width={11} height={8} />
                        </pattern>
                    </defs>
                    <rect id='signalPole' x={45} y={5} width={10} height={290} fill='url(#polePattern)' />
                    <g id='signal-signalHead'>
                        <rect x={20} y={0} width={60} height={180} rx={40} ry={25} fill={signalMetalColor} />
                        <circle id='greenLamp' className={`signalLamp ${lampObject.lamp1_green ? 'greenLamp' : 'lampOff'}`} cx={50} cy={30} filter={lampObject.lamp1_green ? "url(#lampglow)" : ''} />
                        <circle id='orangeLamp1' className={`signalLamp ${lampObject.lamp2_orange ? 'orangeLamp' : 'lampOff'}`} cx={50} cy={60} filter={lampObject.lamp2_orange ? "url(#lampglow)" : ''} />
                        <circle id='redLamp' className={`signalLamp ${lampObject.lamp3_red ? 'redLamp' : 'lampOff'}`} cx={50} cy={90} filter={lampObject.lamp3_red ? "url(#lampglow)" : ''} />
                        <circle id='orangeLamp2' className={`signalLamp ${lampObject.lamp4_orange ? 'orangeLamp' : 'lampOff'}`} cx={50} cy={120} filter={lampObject.lamp4_orange ? "url(#lampglow)" : ''} />
                        <circle id='whiteLamp' className={`signalLamp ${lampObject.lamp5_whiteSz ? 'whiteLamp_Blinking' : 'lampOff'}`} cx={50} cy={150} filter={lampObject.lamp5_whiteSz ? "url(#lampglow)" : ''} />
                    </g>
                    <g id='signal-nameSign'>
                        <rect x={30} y={170} width={40} height={20} fill='white' />
                        <text x={50} y={184} textAnchor='middle' fill='black' stroke='black' strokeWidth={0.5} fontSize={16}>{signalName}</text>
                    </g>
                    {(speed >= 60 && speed < 160) &&
                        <>
                            <g id='signal-signalSpeedBars'>
                                <rect x={20} y={190} width={60} height={30} fill={signalMetalColor} />
                                <polygon points='40,220 50,230 60,220' fill='rgb(20, 20, 20)' />
                                <rect x={20} y={195} width={60} height={8} fill='url(#speedBarGreen)' />
                                <rect x={20} y={207} width={60} height={8} fill='url(#speedBarOrange)' />
                            </g>
                        </>
                    }
                    {(speed === 50 || speed === 80 || speed === 120 || speed === 130) &&
                        <g className="signalSpeedNumber" id="signal-signalSpeedIndicator">
                            <rect x={35} y={230} width={30} height={35} fill={signalMetalColor} />
                            <text x={50} y={255} fontSize={26} textAnchor="middle" fill="white" filter="url(#numberGlow)">{lampObject.W21_speed}</text>
                        </g>
                    }
                </svg>
                :
                <svg className={image.svg} viewBox='0 0 100 300'>
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <defs>
                        <pattern id='polePattern' x={0} y={0} width={10} height={50} patternUnits='userSpaceOnUse'>
                            <rect x={0} y={0} width={20} height={25} fill='white' />
                            <rect x={0} y={25} width={20} height={25} fill='red' />
                        </pattern>
                    </defs>
                    <rect id='signalPole' x={45} y={5} width={10} height={290} fill='gray' />
                    <g id='signal-signalHead'>
                        <rect x={20} y={0} width={60} height={120} rx={40} ry={25} fill={signalMetalColor} />
                        <circle id='greenLamp' className={`signalLamp ${lampObject.lamp1_green ? 'greenLamp' : 'lampOff'}`} cx={50} cy={30} filter={lampObject.lamp1_green ? "url(#glow)" : ''} />
                        <circle id='redLamp' className={`signalLamp ${lampObject.lamp3_red ? 'redLamp' : 'lampOff'}`} cx={50} cy={60} filter={lampObject.lamp3_red ? "url(#glow)" : ''} />
                        <circle id='orangeLamp1' className={`signalLamp ${lampObject.lamp4_orange ? 'orangeLamp' : 'lampOff'}`} cx={50} cy={90} filter={lampObject.lamp4_orange ? "url(#glow)" : ''} />
                    </g>
                    <g id='signal-nameSign'>
                        <rect x={30} y={115} width={40} height={20} fill='white' />
                        <text x={50} y={129} textAnchor='middle' fill='black' stroke='black' strokeWidth={0.5} fontSize={14}>{signalName}</text>
                    </g>
                    {lampObject.W18 &&
                        <g id='lastABSSign'>
                            <rect x={35} y={140} width={30} height={30} fill="white" />
                            <circle cx={50} cy={155} r={4} fill="black" />
                            <circle cx={50} cy={155} r={10} strokeWidth={3} stroke="black" fill="transparent" />
                        </g>
                    }
                </svg>
            }
        </>
    )
}