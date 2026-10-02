import { SimRailDataTypes } from "./simrail-api";
import { ScreenData } from "./mapdata-types";

export type WorldPoint = {
    x: number
    y: number
}

export type ScreenPoint = {
    x: number
    y: number
}

export type HoverTargetBase = {
    key: string
    worldPos: WorldPoint
    anchorWorldPos: WorldPoint
}

export type SignalHoverTarget = HoverTargetBase & {
    type: 'signal'
    hitPath: Path2D
    signal: ScreenData.SIGNAL
}

export type TrainHoverTarget = HoverTargetBase & {
    type: 'train'
    hitPath: Path2D
    train: SimRailDataTypes.FilteredTrainData
    signal: ScreenData.SIGNAL
}

export type CustomHoverTarget = HoverTargetBase & {
    type: 'custom'
    hitPath: Path2D
    payload: unknown
}

export type HoverTarget =
    | SignalHoverTarget
    | TrainHoverTarget
    | CustomHoverTarget

export type ActiveSignalHoverTarget = {
    type: 'signal'
    signal: ScreenData.SIGNAL
    screenX: number
    screenY: number
}

export type ActiveTrainHoverTarget = {
    type: 'train'
    train: SimRailDataTypes.FilteredTrainData
    signal: ScreenData.SIGNAL
    screenX: number
    screenY: number
}

export type ActiveCustomHoverTarget = {
    type: 'custom'
    payload: unknown
    screenX: number
    screenY: number
}

export type ActiveHoverTarget =
    | ActiveSignalHoverTarget
    | ActiveTrainHoverTarget
    | ActiveCustomHoverTarget
    | null