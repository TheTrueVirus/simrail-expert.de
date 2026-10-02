export type ScreenId = "screen1" | "screen2" | "screen3" | "screen4" | "screen5" | "screen6"

export interface Screen {
    screenid: ScreenId
    screenTitle: string
}

export interface UserOptions {
    selectedServer: string
    selectedScreen: Screen,
    shortStationNames: boolean,
    allowExtendedView: boolean,
    flipScreen: boolean,
    showNonPlayableTracks: boolean,
}

// ! ONLY FOR DEV
export interface DebugRenderOptions {
    renderTracks: boolean
    renderSignals: boolean
    showSignalTypes: boolean
    renderNodes: boolean
    renderTrains: boolean
    renderGhostTrains: boolean
    renderHoverTargets: boolean
}

