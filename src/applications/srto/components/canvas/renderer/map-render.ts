import { SimRailDataTypes } from "../../../types/simrail-api";
import { ScreenData } from "../../../types/mapdata-types";
import { DebugRenderOptions, UserOptions } from "../../../types/types";
import { HoverTarget } from "../../../types/hoverTarget";

interface CanvasSettingsProps {
    CANVAS_WORLD_WIDTH: number,
    CANVAS_WORLD_HEIGHT: number,
    MIN_ZOOM_FIT: number,
    MIN_ZOOM_EXTENDED: number,
    MAX_ZOOM: number,
    TOOLTIP_MARGIN: number,
}
type Point = { x: number, y: number }
export const TRAIN_BASE_PATH: Record<'left' | 'right', Path2D> = {
    'left': (() => {
        const p = new Path2D();
        const height = 8
        p.moveTo(0, 0);
        p.lineTo(4, height);
        p.lineTo(52, height);
        p.lineTo(52, -height);
        p.lineTo(4, -height);
        p.closePath();
        return p;
    })(),
    'right': (() => {
        const p = new Path2D();
        const height = 8
        p.moveTo(0, 0);
        p.lineTo(-4, height)
        p.lineTo(-52, height)
        p.lineTo(-52, -height)
        p.lineTo(-4, -height)
        p.closePath();
        return p;
    })()
}

export const SIGNAL_BASE_PATH: Record<'left' | 'right', Path2D> = {
    left: (() => {
        const p = new Path2D();
        p.moveTo(2, 0);
        p.lineTo(8, 5);
        p.lineTo(8, -5);
        p.closePath();
        return p;
    })(),
    right: (() => {
        const p = new Path2D();
        p.moveTo(-2, 0);
        p.lineTo(-8, 5);
        p.lineTo(-8, -5);
        p.closePath();
        return p;
    })()
}

const DiffAreaIcon: Path2D = (() => {
    const p = new Path2D();
    p.moveTo(0, 0);
    p.lineTo(20, 0);

    p.moveTo(0, -5);
    p.lineTo(20, -5);

    p.moveTo(7, -5);
    p.lineTo(14, -10);
    p.lineTo(20, -10);
    return p;
})()

const DispatchingPost: Record<'relay' | 'computer', Path2D> = {
    'relay': (() => {
        let p = new Path2D(`M0 0 L21 18 M7 0 L28 18 M14 0 L28 12 M21 0 L28 6 M0 6 L14 18 M0 12 L7 18 M0 18 L21 0 M7 18 L28 0 M14 18 L28 6 M21 18 L28 12 M0 12 L14 0 M0 6 L7 0`);
        p.rect(-2, -2, 32, 22);
        p.rect(0, 0, 28, 18);
        return p;
    })(),
    'computer': (() => {
        const p = new Path2D();
        p.rect(-2, -2, 32, 22);
        p.rect(0, 0, 28, 18);
        return p;
    })()
}

export function getDelayRectMetrics(trainDelay: number) {
    const strLength = trainDelay > 0 ? trainDelay.toString().length + 1 : trainDelay < 0 ? trainDelay.toString().length : 0
    const length = { 1: 12, 2: 19, 3: 27, 4: 35 }[strLength] ?? 0
    return length
}
export function getDelayInfo(delayData: SimRailDataTypes.Delays[], train: SimRailDataTypes.FilteredTrainData) {
    const delayedTrain = delayData.find((t) => t.trainNoLocal === train.TrainNoLocal);
    if (!delayedTrain) return 0;
    return parseInt(delayedTrain.delayInfo.delay.toFixed());
};

//#region TRACK DRAWER HELPER FUNCTIONS
type CommandResult = {
    pathCommands: string[];      // SVG/Canvas path commands
    finalPosition: { x: number, y: number };
    errors?: string[];
}

type ParserState = {
    currentX: number;
    currentY: number;
    commands: string[];
}

function interpretDrawingCommands(
    commandString: string,
    startX: number = 0,
    startY: number = 0
): CommandResult {
    const state: ParserState = {
        currentX: startX,
        currentY: startY,
        commands: []
    };

    const tokens = tokenizeCommands(commandString);
    const errors: string[] = [];

    for (const token of tokens) {
        try {
            parseCommand(token, state);
        } catch (error) {
            errors.push(`Failed to parse "${token}": ${error}\nCommand String: ${commandString}`);
        }
    }

    return {
        pathCommands: state.commands,
        finalPosition: { x: state.currentX, y: state.currentY },
        errors: errors.length > 0 ? errors : undefined
    };
}

function tokenizeCommands(commandString: string): string[] {
    // Split by whitespace or commas, filter empty strings
    return commandString
        .trim()
        .split(' ')
        .filter(token => token.length > 0);
}

function parseCommand(token: string, state: ParserState): void {
    // Move command: M100,200 or M100 200
    if (token.toUpperCase().startsWith('M')) {
        const coords = token.slice(1).split(',');
        state.currentX = parseFloat(coords[0]);
        state.currentY = parseFloat(coords[1] || coords[0]);
        state.commands.push(`M${state.currentX},${state.currentY}`);
        return;
    }

    if (token.toUpperCase().startsWith('LINE')) {
        const coords = token.slice(4).split(',');
        state.commands.push(`L${coords[0]},${coords[1]}`)
        state.currentX = parseFloat(coords[0]);
        state.currentY = parseFloat(coords[1] || coords[0]);
        return;
    }

    if (token.toUpperCase().startsWith('SP')) {
        const direction = token[2].toUpperCase();
        const distance = parseFloat(token.slice(3));

        switch (direction) {
            case 'R':
                state.currentX += distance;
                break;
            case 'L':
                state.currentX -= distance;
                break;
            case 'U':
                state.currentY -= distance;
                break;
            case 'D':
                state.currentY += distance;
                break;
        }
        state.commands.push(`M${state.currentX},${state.currentY}`);
        return;
    }

    if (token.toUpperCase().startsWith('L')) {
        const distance = parseFloat(token.slice(2));
        const direction = token.toUpperCase().slice(1, 2);
        switch (direction) {
            case 'U':
                state.commands.push(`L${state.currentX},${state.currentY - distance}`);
                state.currentY = state.currentY - distance;
                break;
            case 'D':
                state.commands.push(`L${state.currentX},${state.currentY + distance}`);
                state.currentY = state.currentY + distance;
                break;
            case 'L':
                state.commands.push(`L${state.currentX - distance},${state.currentY}`);
                state.currentX = state.currentX - distance;
                break;
            case 'R':
                state.commands.push(`L${state.currentX + distance},${state.currentY}`);
                state.currentX = state.currentX + distance;
                break;
        }
        return;
    }

    if (token.toUpperCase().startsWith('ABS')) {
        const [width, space, count] = token.toUpperCase().slice(3).split('-').map(Number)
        for (let i = 0; i < count; i++) {
            const endX = state.currentX + width
            state.commands.push(`L${endX},${state.currentY}`)
            state.currentX = endX
            if (i < count - 1) {
                state.currentX += space
                state.commands.push(`M${state.currentX},${state.currentY}`)
            }
        }
        return;
    }

    if (token.toUpperCase().startsWith('UT')) {
        const direction = token.toUpperCase().slice(2, 4)
        const distance = parseFloat(token.toUpperCase().slice(4))
        switch (direction) {
            case 'LU':
                state.commands.push(`L${state.currentX + 2.5},${state.currentY - 5}`)
                state.commands.push(`L${state.currentX + 2.5},${state.currentY - distance + 5}`)
                state.commands.push(`L${state.currentX},${state.currentY - distance}`)
                state.currentY -= distance
                break;
            case 'LD':
                state.commands.push(`L${state.currentX + 2.5},${state.currentY + 5}`)
                state.commands.push(`L${state.currentX + 2.5},${state.currentY + distance - 5}`)
                state.commands.push(`L${state.currentX},${state.currentY + distance}`)
                state.currentY += distance
                break;
            case 'RU':
                state.commands.push(`L${state.currentX - 2.5},${state.currentY - 5}`)
                state.commands.push(`L${state.currentX - 2.5},${state.currentY - distance + 5}`)
                state.commands.push(`L${state.currentX},${state.currentY - distance}`)
                state.currentY -= distance
                break;
            case 'RD':
                state.commands.push(`L${state.currentX - 2.5},${state.currentY + 5}`)
                state.commands.push(`L${state.currentX - 2.5},${state.currentY + distance - 5}`)
                state.commands.push(`L${state.currentX},${state.currentY + distance}`)
                state.currentY += distance
                break;
        }
        return;
    }

    //// STATE OF currentX or currentY does not move on this command // use this as the last command in the command chain
    if (token.toUpperCase().startsWith('CROSS')) {
        state.commands.push(`L${state.currentX + 20},${state.currentY + 20}`);
        state.commands.push(`M${state.currentX},${state.currentY + 20}`);
        state.commands.push(`L${state.currentX + 20},${state.currentY}`);
        state.commands.push(`M${state.currentX + 20},${state.currentY + 20}`);
        state.currentX += 20;
        state.currentY += 20;
        return;
    }

    //! STATE OF currentX or currentY does not move on this command // use this as the last command in the command chain
    if (token.toUpperCase().startsWith('TEND')) {
        state.commands.push(`L${state.currentX + 10},${state.currentY + 10}`)
        return;
    }

    if (token.toUpperCase().startsWith('TSTART')) {
        state.commands.push(`L${state.currentX + 10},${state.currentY + 10}`)
        state.currentX += 10;
        state.currentY += 10;
        return;
    }

    if (token.toUpperCase().startsWith('DOT')) {
        const [width, space, count] = token.toUpperCase().slice(3).split('-').map(Number)
        for (let i = 0; i < count; i++) {
            const endX = state.currentX + width
            state.commands.push(`L${endX},${state.currentY}`)
            state.currentX = endX
            if (i < count - 1) {
                state.currentX += space
                state.commands.push(`M${state.currentX},${state.currentY}`)
            }
        }
        return;
    }

    //! COMMANDS ONLY FOR NPT-TRACKS
    if (token.toUpperCase().startsWith('SS')) {
        const direction = token.slice(2);
        switch (direction) {
            case "L":
                state.commands.push(`M${state.currentX + 8},${state.currentY - 4}`);
                state.commands.push(`L${state.currentX + 2},${state.currentY}`);
                state.commands.push(`L${state.currentX + 8},${state.currentY + 4}`);
                state.commands.push(`M${state.currentX + 10},${state.currentY}`);
                state.currentX += 10
                return;
            case "R":
                state.commands.push(`M${state.currentX + 2},${state.currentY - 4}`);
                state.commands.push(`L${state.currentX + 8},${state.currentY}`);
                state.commands.push(`L${state.currentX + 2},${state.currentY + 4}`);
                state.commands.push(`M${state.currentX + 10},${state.currentY}`);
                state.currentX += 10
                return;
        }
        return;
    }
    if (token.toUpperCase().startsWith('BUFF')) {
        const direction = token.toUpperCase().split('-')[1]
        switch (direction) {
            case "L":
                state.commands.push(`M${state.currentX + 4},${state.currentY - 4}`);
                state.commands.push(`L${state.currentX},${state.currentY - 4}`);
                state.commands.push(`L${state.currentX},${state.currentY + 4}`);
                state.commands.push(`L${state.currentX + 4},${state.currentY + 4}`);
                state.commands.push(`M${state.currentX},${state.currentY}`);
                return;
            case "R":
                state.commands.push(`M${state.currentX - 4},${state.currentY - 4}`);
                state.commands.push(`L${state.currentX},${state.currentY - 4}`);
                state.commands.push(`L${state.currentX},${state.currentY + 4}`);
                state.commands.push(`L${state.currentX - 4},${state.currentY + 4}`);
                state.commands.push(`M${state.currentX},${state.currentY}`);
                return;
        }
        return;
    }
    if (token.toUpperCase().startsWith('DERAILER')) {
        state.commands.push(`M${state.currentX + 4},${state.currentY - 5}`);
        state.commands.push(`L${state.currentX + 4},${state.currentY + 5}`);
        state.commands.push(`M${state.currentX + 6},${state.currentY - 5}`);
        state.commands.push(`L${state.currentX + 6},${state.currentY + 5}`);
        state.commands.push(`M${state.currentX + 10},${state.currentY}`);
        state.currentX += 10
        return;
    }

    // Switch command: SWUP20 or SWL15
    if (token.toUpperCase().startsWith('SW')) {
        parseSwitch(token, state);
        return;
    }

    throw new Error(`Unknown command: ${token}`);
}

function parseSwitch(token: string, state: ParserState): void {
    const direction = token.slice(2, 4).toUpperCase();
    const distance = parseFloat(token.slice(4));
    const switchWidth = 5; // pixels

    if (distance === 10) {
        switch (direction) {
            case 'UP':
                // state.commands.push(`L${state.currentX - 5},${state.currentY}`);
                state.commands.push(`L${state.currentX},${state.currentY}`);
                state.commands.push(`L${state.currentX + 2.5},${state.currentY - 3}`);
                state.commands.push(`L${state.currentX + 2.5},${state.currentY - 7}`);
                state.commands.push(`L${state.currentX + 5},${state.currentY - distance}`);
                // state.commands.push(`L${state.currentX + 10},${state.currentY - distance}`);
                state.currentY -= distance;
                state.currentX += switchWidth;
                break;
            case 'DN':
                // state.commands.push(`L${state.currentX - 5},${state.currentY}`);
                state.commands.push(`L${state.currentX},${state.currentY}`);
                state.commands.push(`L${state.currentX + 2.5},${state.currentY + 3}`);
                state.commands.push(`L${state.currentX + 2.5},${state.currentY + 7}`);
                state.commands.push(`L${state.currentX + 5},${state.currentY + distance}`);
                // state.commands.push(`L${state.currentX + 10},${state.currentY + distance}`);
                state.currentY += distance;
                state.currentX += switchWidth;
                break;
        }
    } else {
        switch (direction) {
            case 'UP':
                // state.commands.push(`L${state.currentX - 5},${state.currentY}`);
                state.commands.push(`L${state.currentX},${state.currentY}`);
                state.commands.push(`L${state.currentX + 2.5},${state.currentY - 5}`);
                state.commands.push(`L${state.currentX + 2.5},${state.currentY - distance + 5}`);
                state.commands.push(`L${state.currentX + 5},${state.currentY - distance}`);
                // state.commands.push(`L${state.currentX + 10},${state.currentY - distance}`);
                state.currentY -= distance;
                state.currentX += switchWidth;
                break;
            case 'DN':
                // state.commands.push(`L${state.currentX - 5},${state.currentY}`);
                state.commands.push(`L${state.currentX},${state.currentY}`);
                state.commands.push(`L${state.currentX + 2.5},${state.currentY + 5}`);
                state.commands.push(`L${state.currentX + 2.5},${state.currentY + distance - 5}`);
                state.commands.push(`L${state.currentX + 5},${state.currentY + distance}`);
                // state.commands.push(`L${state.currentX + 10},${state.currentY + distance}`);
                state.currentY += distance;
                state.currentX += switchWidth;
                break;
        }
    }
}
//#endregion

export namespace CanvasDrawer {

    export function drawTracks(
        screenData: ScreenData.ScreenDataProps | null,
        ctx: CanvasRenderingContext2D,
        trackPathCache: WeakMap<ScreenData.TRACK_NODE, Path2D>,
        userOptions: UserOptions
    ) {
        if (!screenData) return;
        if (!ctx) return;

        ctx.lineWidth = 2.5
        ctx.lineCap = 'butt'
        ctx.lineJoin = 'bevel'

        for (const clusterid in screenData) {
            for (const tracknode of screenData[clusterid].TRACKS) {
                if (tracknode.trackColor === 'none' || tracknode.color === 'none') continue;
                if (tracknode.isNPT && !userOptions.showNonPlayableTracks) continue;

                let path = trackPathCache.get(tracknode)
                if (!path) {
                    // Old format: trackSVG string
                    if (tracknode.trackSVG) {
                        // path = new Path2D(tracknode.trackSVG_TEMP)
                        path = new Path2D(tracknode.trackSVG)
                    }
                    // New format: custom commands array
                    else if (tracknode.commands && tracknode.commands.length > 0) {
                        const allCommands: string[] = []
                        for (const commandStr of tracknode.commands) {
                            const result = interpretDrawingCommands(commandStr)
                            if (result.errors && result.errors.length > 0) {
                                console.warn(`Error in parsing commands at ${clusterid}\n${result.errors.join(`\n`)}`)
                            }
                            allCommands.push(...result.pathCommands)
                        }
                        // console.log(`Path2D for Cluster ${clusterid}:\n\n${allCommands.join(' ')}`);
                        path = new Path2D(allCommands.join(' '))
                    }

                    if (path) {
                        trackPathCache.set(tracknode, path)
                    }
                }

                if (path) {
                    ctx.strokeStyle = (() => {
                        if (tracknode.trackSVG) {
                            // return 'rgb(100, 20, 20, 0.3)'
                            return tracknode.trackColor ?? 'white'
                        } else {
                            return tracknode.color ?? 'white'
                        }
                    })()
                    ctx.stroke(path)
                }
            }
        }
    }

    export function drawSignals(
        screenData: ScreenData.ScreenDataProps | null,
        train_data: SimRailDataTypes.FilteredTrainData[],
        ctx: CanvasRenderingContext2D,
        userOptions: UserOptions,
        debugRenderOptions: DebugRenderOptions
    ) {
        if (!screenData) return;
        if (!train_data) return;
        if (!ctx) return;

        ctx.lineJoin = 'bevel'
        const defaultSignalColor = 'gray'

        // Build a per-frame lookup to avoid O(signals * trains) scans.
        const signalColorByName = new Map<string, 'lime' | 'orange' | 'red'>()
        for (const train of train_data) {
            const signalName = train.TrainData.SignalInFront ?? train.TrainData.SignalInFrontPredictive ?? null
            if (!signalName) continue

            const nextColor: 'lime' | 'orange' | 'red' = train.TrainData.SignalInFrontSpeed === 0 ? 'red' : train.TrainData.SignalInFrontSpeed < 100 ? 'orange' : 'lime'
            const currentColor = signalColorByName.get(signalName)

            // If multiple trains point to the same signal, keep red as highest priority.
            if (!currentColor || currentColor !== 'red') {
                signalColorByName.set(signalName, nextColor)
            }
        }

        const signalFrameColorByType = new Map<string, string>()
        for (const clusterid in screenData) {
            for (const signal of screenData[clusterid].SIGNALS) {
                const frameColor = () => {
                    const split_type = signal.signalType.split('_')
                    switch (split_type[0]) {
                        case 'station': return 'red'
                        case 'abs':
                            if (split_type[1] === 'standard') { return 'lime' } else { return 'orange' }
                        case 'apo': return 'yellow'
                        default: return 'white'
                    }
                }
                signalFrameColorByType.set(signal.signalName, frameColor())
            }
        }

        for (const node in screenData) {
            for (const signal of screenData[node].SIGNALS) {
                if (signal.invisibleSignal) continue;
                const { sx, sy } = { sx: Number(signal.signalPos.x), sy: Number(signal.signalPos.y) }
                const signalColor = signalColorByName.get(signal.signalName) ?? defaultSignalColor

                ctx.save();
                ctx.translate(sx, sy);
                if (userOptions.flipScreen) {
                    ctx.scale(-1, -1);
                }
                const signalDirection = userOptions.flipScreen ? signal.signalDirectionOnMap === 'right' ? 'left' : 'right' : signal.signalDirectionOnMap
                const signalPath = SIGNAL_BASE_PATH[signalDirection]
                ctx.lineWidth = 2;
                if (debugRenderOptions.showSignalTypes) {
                    ctx.strokeStyle = signalFrameColorByType.get(signal.signalName) ?? 'white';
                    ctx.fillStyle = signalFrameColorByType.get(signal.signalName) ?? 'white';
                } else {
                    ctx.strokeStyle = signalColor;
                    ctx.fillStyle = signalColor;
                }
                ctx.fill(signalPath);
                ctx.stroke(signalPath);
                ctx.restore();
            }
        }
    }

    export function drawAnnotations(
        screenData: ScreenData.ScreenDataProps | null,
        ctx: CanvasRenderingContext2D,
        stationData: SimRailDataTypes.StationData[],
        userOptions: UserOptions,
        debugRenderOptions: DebugRenderOptions,
        canvasSettings: CanvasSettingsProps
    ) {
        if (!screenData) return;
        if (!stationData) return;
        if (!ctx) return;

        function drawAtPoint(
            ctx: CanvasRenderingContext2D,
            points: { pos: Point, posFlipped?: Point },
            draw: () => void,
        ) {
            const flip = userOptions.flipScreen
            const sourcePoint = flip
                ? (points.posFlipped ?? points.pos)
                : points.pos

            ctx.save()
            ctx.translate(sourcePoint.x, sourcePoint.y)

            if (flip) {
                ctx.scale(-1, -1)
            }

            draw()
            ctx.restore()
        }

        function drawPlatforms(platform: any) {
            drawAtPoint(ctx, { pos: platform.pos }, () => {
                ctx.font = 'bold 9px IBM Plex Sans'
                if (!userOptions.flipScreen) {
                    // non-flipped
                    ctx.fillStyle = 'rgb(255, 180, 80)'
                    ctx.fillRect(0, 0, platform.width ?? 0, platform.height ?? 0)
                    ctx.fillStyle = 'black'
                    ctx.fillText(platform.label ?? '', (platform.width ? platform.width / 2 : 0), (platform.height ? platform.height / 2 : 0) + 1)
                } else {
                    // flipped
                    ctx.fillStyle = 'rgb(255, 180, 80)'
                    ctx.fillRect(-(platform.width ?? 1), -(platform.height ?? 1), platform.width ?? 0, platform.height ?? 0)
                    ctx.fillStyle = 'black'
                    ctx.fillText(platform.label ?? '', -(platform.width ? platform.width / 2 : 0), -(platform.height ? platform.height / 2 : 0) + 1)
                }
            })
        }

        function drawTrackLabels(label: any) {
            drawAtPoint(ctx, { pos: label.pos }, () => {
                ctx.font = '10.5px IBM Plex Sans'
                const tm_metrics = ctx.measureText(label.text ?? '');
                const tm_height = tm_metrics.actualBoundingBoxAscent + tm_metrics.actualBoundingBoxDescent
                const tm_width = tm_metrics.width

                ctx.fillStyle = 'black'
                ctx.fillRect(-(tm_width / 2) - 2, -5, tm_width + 4, tm_height + 2)

                ctx.fillStyle = 'white'
                ctx.fillText(label.text ?? '????', 0, 1)
            })
        }

        for (const clusterid in screenData) {
            for (const annotation of screenData[clusterid].ANNOTATIONS) {
                const { x, y } = ((userOptions.flipScreen && annotation.nodePosFlipped) ? annotation.nodePosFlipped : annotation.nodePos) ?? { x: 0, y: 0 }
                // ctx.save();
                // ctx.translate(x, y);
                // if (userOptions.flipScreen) {
                //     ctx.scale(-1, -1);
                // }
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'

                function underlineColor() {
                    const getStation = stationData.find((station) => station.Name === annotation.stationLabel?.name)
                    if (!getStation) return 'transparent'
                    return getStation.DispatchedBy.length < 1 ? 'lime' : 'red'
                }


                switch (annotation.annotationType) {
                    case 'station':
                        const stationLabel = annotation.stationLabel
                        const dispatchingPost = annotation.dispatchingPost
                        const platforms = annotation.platforms
                        const trackLabels = annotation.trackLabels

                        //* Station Label
                        if (stationLabel) {
                            drawAtPoint(ctx, { pos: stationLabel.pos, posFlipped: stationLabel.posFlipped }, () => {
                                // displaying the stationLabel
                                ctx.font = 'bold 20px Sora'
                                const nameToDisplay = (!userOptions.shortStationNames ? (stationLabel.nameToDisplay ?? stationLabel.name) : stationLabel.prefix) ?? '?????'
                                ctx.fillStyle = 'rgb(255, 200, 0)'
                                ctx.fillText(nameToDisplay, 0, 0)
                                ctx.fillStyle = underlineColor()
                                const underlindeWidth = ctx.measureText(nameToDisplay).width
                                ctx.fillRect(-(underlindeWidth / 2), 10, underlindeWidth, 2);
                            })
                            if (stationLabel.lcsControlledBy) {
                                drawAtPoint(ctx, { pos: stationLabel.pos, posFlipped: stationLabel.posFlipped }, () => {
                                    // displaying the stationLabel
                                    ctx.font = '10px Sora'
                                    const lcsControlledText = `Controlled by ${stationLabel.lcsControlledBy}`
                                    ctx.fillStyle = 'rgb(255, 255, 255)'
                                    ctx.fillText(lcsControlledText, 0, 15)
                                })
                            }
                        }

                        //* Dispatching Post
                        if (dispatchingPost) {
                            drawAtPoint(ctx, { pos: dispatchingPost.pos }, () => {
                                if (userOptions.flipScreen) ctx.translate(-30, -20);
                                //^ rotate the post to align with dispatcher view
                                ctx.translate(14, 9);
                                const angle = (dispatchingPost.rotation ?? 0) * Math.PI / 180;
                                ctx.rotate(userOptions.flipScreen ? angle - Math.PI : angle);
                                ctx.translate(-14, -9);
                                const post = DispatchingPost[dispatchingPost.type ?? 'computer'];
                                ctx.lineWidth = 0.5
                                ctx.strokeStyle = 'white';
                                ctx.stroke(post);

                                ctx.fillStyle = 'white';
                                ctx.strokeStyle = 'black';
                                ctx.lineWidth = 3;
                                ctx.strokeRect(6, 4, 16, 3);
                                ctx.fillRect(6, 4, 16, 3);
                                ctx.beginPath();
                                ctx.lineWidth = 1.5;
                                ctx.arc(14, 12.5, 3, 0, 2 * Math.PI)
                                ctx.fill()
                                ctx.stroke();
                            })
                        }

                        //* Station Platforms
                        if (platforms && platforms.length !== 0) {
                            for (const platform of platforms) {
                                drawPlatforms(platform);
                            }
                        }

                        //* Station Track Labels
                        if (trackLabels && trackLabels.length !== 0) {
                            for (const label of trackLabels) {
                                drawTrackLabels(label);
                            }
                        }
                        break;

                    //^ repeating drawer for track labels (out of stations)
                    case 'trackLabels':
                        const nonStationtrackLabels = annotation.trackLabels
                        if (!nonStationtrackLabels || nonStationtrackLabels.length === 0) break;
                        for (const label of nonStationtrackLabels) {
                            drawTrackLabels(label);
                        }
                        break;
                    case 'poStop':
                        const poPlatforms = annotation.poPlatforms
                        if (!poPlatforms || poPlatforms.platforms.length === 0) break;
                        drawAtPoint(ctx, { pos: poPlatforms.pos, posFlipped: poPlatforms.posFlipped }, () => {
                            ctx.font = '12px IBM Plex Sans'
                            ctx.fillStyle = 'white'
                            ctx.fillText(poPlatforms.poName, 0, 0);
                        })
                        for (const platform of poPlatforms.platforms) {
                            drawPlatforms(platform);
                        }
                        break;

                    case 'differentScreenMarker':
                        drawAtPoint(ctx, { pos: annotation.nodePos ?? { x: 0, y: 0 } }, () => {
                            ctx.font = 'bold 16px IBM Plex Sans'
                            ctx.fillStyle = 'white'
                            const dsm_metrics = ctx.measureText(annotation.text ?? '');
                            const dsm_height = dsm_metrics.actualBoundingBoxAscent + dsm_metrics.actualBoundingBoxDescent
                            const dsm_width = dsm_metrics.width

                            const icon = DiffAreaIcon;
                            ctx.textAlign = 'left'
                            ctx.textBaseline = 'alphabetic'

                            //^ writing the text
                            if (userOptions.flipScreen) {
                                // flipped
                                ctx.fillText(annotation.text ?? '', -dsm_width, dsm_height)
                            } else {
                                // not flipped (original)
                                ctx.fillText(annotation.text ?? '', +26, 0)
                            }

                            //^ drawing the icon
                            if (userOptions.flipScreen) {
                                // flipped
                                ctx.translate(-dsm_width - 26, dsm_height)
                            } else {
                                // not flipped (original)
                                ctx.translate(0, 0)
                            }
                            ctx.lineWidth = 2;
                            ctx.strokeStyle = 'rgb(0, 150, 200)'
                            ctx.stroke(icon)
                        })
                        break;
                    case 'trackBreakMarker':
                        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                        const breakers = (() => {
                            const raw = annotation.breakLetters ?? []

                            const flipped = userOptions.flipScreen ? raw.toReversed() : raw

                            const result = (() => {
                                const fl = userOptions.flipScreen
                                const ww = canvasSettings.CANVAS_WORLD_WIDTH
                                const wh = canvasSettings.CANVAS_WORLD_HEIGHT
                                return flipped.map((marker) => {
                                    return {
                                        first: {
                                            x: fl ? ww - marker.first.x : marker.first.x,
                                            y: fl ? wh - marker.first.y : marker.first.y
                                        },
                                        second: {
                                            x: fl ? ww - marker.second.x : marker.second.x,
                                            y: fl ? wh - marker.second.y : marker.second.y
                                        }
                                    }
                                })
                            })();

                            return result
                        })();

                        for (const breaker in breakers) {

                            const { first: po1, second: po2 } = breakers[breaker]

                            drawAtPoint(ctx, { pos: { x: 0, y: 0 } }, () => {
                                if (userOptions.flipScreen) {
                                    ctx.translate(-canvasSettings.CANVAS_WORLD_WIDTH, -canvasSettings.CANVAS_WORLD_HEIGHT);
                                }
                                ctx.fillStyle = 'rgb(160, 0, 120)'
                                ctx.font = 'bold 18px IBM Plex Sans'
                                ctx.textBaseline = 'middle'

                                ctx.fillText(`[${letters[breaker]}]`, po1.x, po1.y)
                                ctx.fillText(`[${letters[breaker]}]`, po2.x, po2.y)
                            })
                        }
                        break;
                    case 'simpleText':
                        drawAtPoint(ctx, { pos: annotation.nodePos ?? { x: 0, y: 0 }, posFlipped: annotation.nodePosFlipped }, () => {
                            ctx.font = `${annotation.textSize}px IBM Plex Sans`;
                            ctx.fillStyle = 'white';
                            ctx.fillText(annotation.text ?? 'MISSING TEXT', 0, 0);
                        })
                        break;
                }
            }
        }
    }

    export function drawTrains(
        screenData: ScreenData.ScreenDataProps | null,
        ctx: CanvasRenderingContext2D,
        trainData: SimRailDataTypes.FilteredTrainData[],
        delayData: SimRailDataTypes.Delays[],
        userOptions: UserOptions,
        debugRenderOptions: DebugRenderOptions
    ) {
        if (!screenData) return;
        if (!ctx) return;
        if (!trainData) return;

        function searchSignal(signalName: string | null) {
            let signals: ScreenData.SIGNAL[] = []
            for (const clusterid in screenData) {
                const foundSignal = screenData[clusterid].SIGNALS.filter((signal) => signalName === signal.signalName);
                if (foundSignal) signals.push(...foundSignal);
            }
            return signals
        }

        const nearestTrainBySignal = new Map<string, SimRailDataTypes.FilteredTrainData>();
        for (const train of trainData) {
            const signalName = train.TrainData.SignalInFront ?? train.TrainData.SignalInFrontPredictive ?? null;
            if (!signalName) continue;

            const existing = nearestTrainBySignal.get(signalName);
            //if (existing) console.log(`Two Trains on the same signal:
            // ${train.TrainNoLocal} | ${train.TrainData.DistanceToSignalInFront}
            // ${existing.TrainNoLocal} | ${existing.TrainData.DistanceToSignalInFront}`)
            if (!existing || train.TrainData.DistanceToSignalInFront < existing.TrainData.DistanceToSignalInFront) {
                nearestTrainBySignal.set(signalName, train);
            }
        }

        for (const [signalName, train] of nearestTrainBySignal) {
            const trainOnSignals = searchSignal(signalName)
            if (!trainOnSignals) continue;

            const trainCoordsAndDirection = (signal: ScreenData.SIGNAL) => {
                const positions = signal.trainPosDistance
                // return fallback position if no distance positioning given
                if (!positions) return { x: signal.trainPos.x, y: signal.trainPos.y, dir: false }

                for (const pos of positions) {
                    if (train.TrainData.DistanceToSignalInFront > pos.distanceToSignal) {
                        return { x: pos.x, y: pos.y, dir: pos.switchDirection }
                    }
                    continue;
                }
                return { x: signal.trainPos.x, y: signal.trainPos.y, dir: false }
            }

            for (const trainOnSignal of trainOnSignals) {
                const tx = Number(trainCoordsAndDirection(trainOnSignal).x)
                const ty = Number(trainCoordsAndDirection(trainOnSignal).y)
                const dir = trainCoordsAndDirection(trainOnSignal).dir
                const trainDelay = getDelayInfo(delayData, train)
                const trainColors = () => {
                    const isTrainControlledByPlayer = train.ControlledBy === 'user'
                    return {
                        outlineColor: isTrainControlledByPlayer ? 'rgb(0, 128, 255)' : 'darkgray',
                        fillColor: 'black',
                        textColor: isTrainControlledByPlayer ? 'rgb(0, 255, 255)' : 'white'
                    }
                }
                const signalDirectionOnFlip = userOptions.flipScreen ? trainOnSignal.signalDirectionOnMap === 'right' ? 'left' : 'right' : trainOnSignal.signalDirectionOnMap
                const signalDirectionOnDistance = dir ? signalDirectionOnFlip === 'left' ? 'right' : 'left' : signalDirectionOnFlip
                const trainSpeed = '' + (train.TrainData.Velocity.toFixed(0).toString())


                ctx.save();
                ctx.translate(tx, ty);
                if (userOptions.flipScreen) {
                    ctx.scale(-1, -1);
                }

                //& drawing the base train
                const baseTrain = TRAIN_BASE_PATH[signalDirectionOnDistance]
                ctx.fillStyle = trainColors().fillColor
                ctx.lineJoin = 'miter'
                ctx.lineWidth = 2
                ctx.strokeStyle = trainColors().outlineColor
                ctx.fill(baseTrain);
                ctx.stroke(baseTrain);

                //& writing the train number into the base train
                ctx.font = 'bold 13px IBM Plex Sans'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = trainColors().textColor
                ctx.fillText(train.TrainNoLocal, signalDirectionOnDistance === 'right' ? -27 : 27, 1);


                //& drawing the delta rectangle and write text (currently it's train speed)
                if (trainDelay != 0) {
                    ctx.fillStyle = trainColors().fillColor
                    ctx.beginPath();
                    const { rect: { rectx, recty, length, height }, text: { textx, texty } } = (() => {
                        const dir = signalDirectionOnDistance
                        const length = getDelayRectMetrics(trainDelay);
                        return {
                            rect: {
                                rectx: dir === 'left' ? 52 : -52,
                                recty: -8,
                                length: dir === 'left' ? length : -length,
                                height: 16
                            },
                            text: {
                                textx: dir === 'left' ? 54 : -54,
                                texty: 1
                            }
                        }
                    })()
                    ctx.rect(rectx, -8, length, 16);
                    ctx.lineWidth = 2
                    ctx.fill();
                    ctx.stroke();
                    //? draw delta (speed for now)
                    ctx.textAlign = signalDirectionOnDistance
                    ctx.fillStyle = trainColors().textColor
                    ctx.font = 'bold 13px IBM Plex Mono'
                    ctx.fillText(trainDelay > 0 ? `+${trainDelay}` : `${trainDelay}`, textx, 1)
                }

                //~ restore to normal CanvasContext
                ctx.restore();
            }

        }
    }

    //& DEBUG DRAWING LAYER
    export function drawGhostTrainsDebug(
        screenData: ScreenData.ScreenDataProps | null,
        ctx: CanvasRenderingContext2D
    ) {
        for (const clusterid in screenData) {
            for (const signal of screenData[clusterid].SIGNALS) {
                const distancePos = signal.trainPosDistance
                if (distancePos) {
                    for (const pos of distancePos) {
                        const trainDirection = pos.switchDirection ? signal.signalDirectionOnMap === 'right' ? 'left' : 'right' : signal.signalDirectionOnMap
                        const baseTrain = TRAIN_BASE_PATH[trainDirection]
                        ctx.save();
                        ctx.fillStyle = 'rgba(255, 160, 80, 0.25)'
                        ctx.strokeStyle = 'rgba(255, 100, 80, 0.4)'
                        ctx.lineWidth = 2
                        ctx.translate(pos.x, pos.y)
                        ctx.fill(baseTrain);
                        ctx.stroke(baseTrain);
                        ctx.fillStyle = 'rgb(255, 255, 255)'
                        ctx.font = 'bold 14px IBM Plex Sans'
                        ctx.textAlign = 'center'
                        ctx.textBaseline = 'middle'
                        ctx.fillText(pos.distanceToSignal.toString(), trainDirection === 'right' ? -26 : 26, 1)

                        ctx.beginPath();
                        ctx.fillStyle = 'rgb(0, 120, 200, 0.2)'
                        ctx.strokeStyle = 'rgb(200, 0, 255, 0.8)'
                        ctx.rect(trainDirection === 'left' ? 52 : -52, -8, trainDirection === 'left' ? 35 : -35, 16)
                        ctx.fill();
                        ctx.stroke();

                        ctx.restore();
                    }
                }
                const tc = () => {
                    return {
                        x: Number(signal.trainPos.x),
                        y: Number(signal.trainPos.y)
                    }
                }
                const baseTrain = TRAIN_BASE_PATH[signal.signalDirectionOnMap]
                ctx.save();
                ctx.fillStyle = 'rgb(0, 120, 200, 0.2)'
                ctx.strokeStyle = 'rgb(0, 128, 255, 0.5)'
                ctx.lineWidth = 2
                ctx.translate(tc().x, tc().y)
                ctx.fill(baseTrain);
                ctx.stroke(baseTrain);

                ctx.beginPath();
                ctx.strokeStyle = 'rgb(200, 0, 255, 0.8)'
                ctx.rect(signal.signalDirectionOnMap === 'left' ? 52 : -52, -8, signal.signalDirectionOnMap === 'left' ? 35 : -35, 16)
                ctx.fill();
                ctx.stroke();

                ctx.restore();

            }
        }
    }

    export function drawHoverTargetsDebug(
        ctx: CanvasRenderingContext2D,
        hoverTargets: HoverTarget[]
    ) {
        ctx.save()
        for (const target of hoverTargets) {
            ctx.save()
            ctx.translate(target.worldPos.x, target.worldPos.y)
            ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)'
            ctx.fillStyle = 'rgba(255, 0, 0, 0.2)'
            ctx.lineWidth = 1
            ctx.fill(target.hitPath)
            ctx.stroke(target.hitPath)
            ctx.restore()
        }
        ctx.restore()
    }
}