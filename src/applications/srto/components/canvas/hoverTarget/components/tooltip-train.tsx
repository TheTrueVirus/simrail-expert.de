import { ActiveTrainHoverTarget } from "../../../../types/hoverTarget";
import { SimRailDataTypes } from "../../../../types/simrail-api";
import { ToolTipSignalImage } from "./tooltip-signal-image";
import trainstyles from './trainTooltip.module.css'

interface HoverTargetComponent {
    hoverTarget: ActiveTrainHoverTarget
    steamUserData: Map<string, SimRailDataTypes.SteamUser>
}

export function TrainHoverTarget({hoverTarget, steamUserData}: HoverTargetComponent) {

    const nextSignal = (() => {
        const traindata = hoverTarget.train.TrainData
        const isSignalNull = traindata.SignalInFront === null
        const signal = traindata.SignalInFront?.split('@')[0] ?? traindata.SignalInFrontPredictive?.split('@')[0] ?? 'Unknown'
        const distance = traindata.DistanceToSignalInFront > 1000 ? `${(traindata.DistanceToSignalInFront/1000).toFixed(1)} km` : `${(traindata.DistanceToSignalInFront).toFixed(1)} m`

        return !isSignalNull ? `${signal} [${!isSignalNull ? distance : '> 5 km'}]` : `(${signal}) [${!isSignalNull ? distance : '> 5 km'}]`
    })();

    const driver = (() => {
        const isSteamUser = hoverTarget.train.ControlledBy === 'user'
        if (!isSteamUser) return 'Bot'
        const steamid = hoverTarget.train.TrainData.ControlledBySteamID
        if(!steamid) return 'Driver: Unknown SteamID'
        const username = steamUserData.get(steamid)?.personaname

        return username ? `Driver: ${username}` : `Driver: Missing Userdata`
    })();

    const signalSpeed = (() => {
        const td = hoverTarget.train.TrainData
        return td.SignalInFrontSpeed === 32767 ? 'max. Speed' : `${td.SignalInFrontSpeed.toFixed(0)} km/h`
    })();


    return (
        <>
            <div className={trainstyles.container}>
                <div className={trainstyles.infos}>
                    <div className={trainstyles.title}>{`${hoverTarget.train.TrainNoLocal} | ${hoverTarget.train.Type}`}</div>
                    <div className={trainstyles.driver}>{driver}</div>
                    <div className={trainstyles.routeContainer}>
                        <div className={trainstyles.routeTitle}>Route:</div>
                        <div>{hoverTarget.train.StartStation}</div>
                        <div>╰┈➤ {hoverTarget.train.EndStation}</div>
                    </div>
                    <div className={trainstyles.dataContainer}>
                        <div className={trainstyles.vehicle}>{`Vehicle: ${hoverTarget.train.Vehicles[0].split('/')[1].split(':')[0]}`}</div>
                        <div className={trainstyles.speed}>{`Speed: ${hoverTarget.train.TrainData.Velocity.toFixed(0)} km/h`}</div>
                        <div className={trainstyles.nextSignal}>{`Next Signal: ${nextSignal}`}</div>
                        <div className={trainstyles.speedSignal}>{`Signal Speed: ${signalSpeed}`}</div>
                    </div>
                </div>
                <div className={trainstyles.signal}>
                    <ToolTipSignalImage {...hoverTarget} />
                </div>
            </div>
        </>
    )
}