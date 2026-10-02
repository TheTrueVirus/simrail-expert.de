import { ActiveHoverTarget } from "../../../types/hoverTarget";
import { SimRailDataTypes } from "../../../types/simrail-api";
import { SignalHoverTarget } from "./components/tooltip-signal";
import { TrainHoverTarget } from "./components/tooltip-train";
import tooltip from './tooltip.module.css'

interface HoverTooltipProps {
    hoverTarget: ActiveHoverTarget
    steamUserData: Map<string, SimRailDataTypes.SteamUser>
}

export function HoverTooltip({hoverTarget, steamUserData}: HoverTooltipProps) {

    return (
        <>
            <div className={tooltip.container}>
                {   hoverTarget?.type === 'train' ? <><TrainHoverTarget hoverTarget={hoverTarget} steamUserData={steamUserData}/></>
                    : hoverTarget?.type === 'signal' ? <><SignalHoverTarget {...hoverTarget}/></>
                    : hoverTarget?.type === 'custom' ? <></> : <></>
                }
            </div>
        </>
    )
}