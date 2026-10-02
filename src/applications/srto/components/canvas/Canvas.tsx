import { useRef, useEffect, useLayoutEffect, useState } from 'react'
import './Canvas.css'
import devStyles from './canvas-devInfo.module.css'
//? COMPONENTS
import { HoverTooltip } from './hoverTarget/hoverTarget';
// import { SCREEN1_DATA } from '../../data/screenData/screen1';
// import { SCREEN2_DATA } from '../../data/screenData/screen2';
// import { SCREEN3_DATA } from '../../data/screenData/screen3';
// import { SCREEN4_DATA } from '../../data/screenData/screen4';
// import { SCREEN5_DATA } from '../../data/screenData/screen5';
// import { SCREEN6_DATA } from '../../data/screenData/screen6';
//? TYPES
import { DebugRenderOptions, ScreenId, UserOptions } from '../../types/types';
import { ScreenData } from '../../types/mapdata-types';
import { SimRailDataTypes } from '../../types/simrail-api';
import { ActiveHoverTarget } from '../../types/hoverTarget';
import { CanvasDrawer } from './renderer/map-render';
//? HOOKS / FUNCTIONS
import { loadScreenData } from '../../utilities/loadScreenData';
import { useCanvasInteraction } from './hooks/useCanvasInteraction';
import { useHoverModel } from './hooks/useHoverModel';
import { useHoverTarget } from './hooks/useHoverTarget';

interface ISelfProps {
    trainData: SimRailDataTypes.FilteredTrainData[]
    stationData: SimRailDataTypes.StationData[]
    steamUserData: Map<string, SimRailDataTypes.SteamUser>
    delayData: SimRailDataTypes.DelayData['delays']
    userOptions: UserOptions
    debugRenderOptions: DebugRenderOptions
    isDebugEnabled: boolean
}

if (process.env.NODE_ENV === 'development' && (module as any).hot) {
    (module as any).hot.accept();
}
// const SCREEN_DATA: Record<ScreenId, ScreenData.ScreenDataProps> = {
//     'screen1': SCREEN1_DATA,
//     'screen2': SCREEN2_DATA,
//     'screen3': SCREEN3_DATA,
//     'screen4': SCREEN4_DATA,
//     'screen5': SCREEN5_DATA,
//     'screen6': SCREEN6_DATA,
// }

const SCREEN_DIMENSIONS: Record<ScreenId, { width: number, height: number }> = {
    'screen1': { width: 2560, height: 1680 },
    'screen2': { width: 2560, height: 1520 },
    'screen3': { width: 2560, height: 2700 },
    'screen4': { width: 2560, height: 1800 },
    'screen5': { width: 0, height: 0 },
    'screen6': { width: 0, height: 0 },
}

export default function Canvas({
    trainData,
    stationData,
    steamUserData,
    delayData,
    userOptions,
    debugRenderOptions,
    isDebugEnabled
}: ISelfProps) {

    const [screenData, setScreenData] = useState<ScreenData.ScreenDataProps | null>(null);

    //? THIS OPTION SHOULD ONLY BE ACTIVE IN DEVELOPMENT
    // const data = SCREEN_DATA[userOptions.selectedScreen.screenid]
    // useEffect(() => {
    //     setScreenData(data);
    //     return () => {}
    // }, [data])

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
    //~ ACTIVATE THIS BEFORE RELEASING INTO PRODUCTION ~\\
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
    useEffect(() => {
        let cancelled = false
        loadScreenData(userOptions.selectedScreen.screenid, (freshData) => {
            if (!cancelled) setScreenData(freshData)
        }).then((initialData) => {
            if (!cancelled) setScreenData(initialData)
        })
        return () => { cancelled = true }
    }, [userOptions.selectedScreen.screenid])

    const {
        hoverTargets
    } = useHoverModel({
        screenData,
        trainData,
        delayData,
        userOptions,
        worldSize: {
            width: SCREEN_DIMENSIONS[userOptions.selectedScreen.screenid].width,
            height: SCREEN_DIMENSIONS[userOptions.selectedScreen.screenid].height,
        },
    });

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trackPathCacheRef = useRef(new WeakMap<ScreenData.TRACK_NODE, Path2D>());
    const viewRef = useRef({ zoom: 1, panX: 0, panY: 0 })
    const dragRef = useRef({ isDragging: false, lastX: 0, lastY: 0 })
    const rafRef = useRef<number | null>(null)
    const canvasSizeRef = useRef({ width: 0, height: 0, dpr: 0 })
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const { width: WORLD_W, height: WORLD_H } = SCREEN_DIMENSIONS[userOptions.selectedScreen.screenid];
    const canvasSettings = {
        CANVAS_WORLD_WIDTH: WORLD_W,
        CANVAS_WORLD_HEIGHT: WORLD_H,
        MIN_ZOOM_FIT: 1,
        MIN_ZOOM_EXTENDED: 0.25,
        MAX_ZOOM: 4,
        TOOLTIP_MARGIN: 16,
    }
    const [showDevMenu, toggleDevMenu] = useState<boolean>(false);

    const allowExtendedViewRef = useRef(userOptions.allowExtendedView);
    const minZoomRef = useRef(canvasSettings.MIN_ZOOM_FIT)
    useEffect(() => {
        allowExtendedViewRef.current = userOptions.allowExtendedView
        minZoomRef.current = userOptions.allowExtendedView ? canvasSettings.MIN_ZOOM_EXTENDED : canvasSettings.MIN_ZOOM_FIT
    }, [userOptions.allowExtendedView])

    const [mouseWorldPos, setMouseWorldPos] = useState<{ x: number, y: number } | null>(null)
    const [hoveredTarget, setHoveredTarget] = useState<ActiveHoverTarget>(null)
    const [tooltipPosition, setTooltipPosition] = useState<{ left: number, top: number } | null>(null)

    useEffect(() => {
        viewRef.current.zoom = 1
        viewRef.current.panX = 0
        viewRef.current.panY = 0
    }, [userOptions.selectedScreen])

    useLayoutEffect(() => {
        if (!hoveredTarget) {
            setTooltipPosition(null)
            return
        }

        const tooltipElement = tooltipRef.current
        const canvas = canvasRef.current
        if (!tooltipElement || !canvas) return

        const tooltipWidth = tooltipElement.offsetWidth
        const tooltipHeight = tooltipElement.offsetHeight

        // -- place the tooltip --
        const desiredLeft = hoveredTarget.screenX - (tooltipWidth / 2)
        const isTooltipToFarLeft = desiredLeft < canvasSettings.TOOLTIP_MARGIN
        const isTooltipToFarRight = desiredLeft + tooltipWidth > window.innerWidth
        const left = isTooltipToFarLeft ? canvasSettings.TOOLTIP_MARGIN : isTooltipToFarRight ? window.innerWidth - tooltipWidth - canvasSettings.TOOLTIP_MARGIN : desiredLeft

        const desiredTop = hoveredTarget.screenY - tooltipHeight - (10 + (8 * viewRef.current.zoom))
        const isToolTipOverTop = desiredTop < 5
        const top = isToolTipOverTop ? hoveredTarget.screenY + 15 : desiredTop
        // console.log('HoveredTarget:', hoveredTarget)

        setTooltipPosition({ left, top })
    }, [hoveredTarget])

    useEffect(() => {
        scheduleDraw()

        const handleResize = () => scheduleDraw()
        window.addEventListener('resize', handleResize)

        const canvas = canvasRef.current
        if (canvas) {
            canvas.addEventListener('wheel', canvasInteraction.handleWheel, { passive: false })
        }
        return () => {
            window.removeEventListener('resize', handleResize)

            if (canvas) {
                canvas.removeEventListener('wheel', canvasInteraction.handleWheel)
            }
            if (rafRef.current !== null) {
                window.cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
        }
    }, [
        screenData,
        userOptions,
        trainData,
    ])

    function drawCanvas() {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const rect = canvas.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1

        canvasInteraction.clampViewToBounds(rect)

        const nextWidth = Math.floor(rect.width * dpr)
        const nextHeight = Math.floor(rect.height * dpr)
        const sizeChanged =
            canvasSizeRef.current.width !== nextWidth ||
            canvasSizeRef.current.height !== nextHeight ||
            canvasSizeRef.current.dpr !== dpr

        if (sizeChanged) {
            canvas.width = nextWidth
            canvas.height = nextHeight
            canvasSizeRef.current = {
                width: nextWidth,
                height: nextHeight,
                dpr,
            }
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

        ctx.fillStyle = 'rgb(0, 0, 0)'
        ctx.fillRect(0, 0, rect.width, rect.height)

        // Base scale always fits world width (2560) into current viewport width.
        const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH
        const { zoom, panX, panY } = viewRef.current

        //~ DEBUG TEXT
        // if (isDebugEnabled) {
        //     ctx.textAlign = 'center';
        //     ctx.textBaseline = 'hanging'
        //     ctx.fillStyle = 'rgb(255, 100, 100, 0.1)';
        //     ctx.font = 'bold 40px IBM Plex Mono'
        //     ctx.fillText('DEBUG MODE ENABLED - DEVELOPMENT ENVIRONMENT', rect.width/2, 0);

        //     ctx.textBaseline = 'ideographic'
        //     ctx.fillText('DEBUG MODE ENABLED - DEVELOPMENT ENVIRONMENT', rect.width/2, rect.height);
        // }

        ctx.save()
        ctx.translate(panX, panY)
        ctx.scale(fitScale * zoom, fitScale * zoom)

        if (userOptions.flipScreen) {
            ctx.scale(-1, -1);
            ctx.translate(-canvasSettings.CANVAS_WORLD_WIDTH, -canvasSettings.CANVAS_WORLD_HEIGHT)
        }

        //~ DEBUG FRAME
        if (isDebugEnabled) {
            ctx.strokeStyle = 'rgb(255,0,0,0.2)';
            ctx.strokeRect(0, 0, canvasSettings.CANVAS_WORLD_WIDTH, canvasSettings.CANVAS_WORLD_HEIGHT);
        }

        if (!screenData) return;
        if (debugRenderOptions.renderTracks)
            CanvasDrawer.drawTracks(screenData, ctx, trackPathCacheRef.current, userOptions);
        if (debugRenderOptions.renderSignals)
            CanvasDrawer.drawSignals(screenData, trainData, ctx, userOptions, debugRenderOptions);

        if (!stationData) return;
        if (debugRenderOptions.renderNodes)
            CanvasDrawer.drawAnnotations(screenData, ctx, stationData, userOptions, debugRenderOptions, canvasSettings);
        if (!trainData) return;
        if (debugRenderOptions.renderTrains)
            CanvasDrawer.drawTrains(screenData, ctx, trainData, delayData, userOptions, debugRenderOptions)
        if (isDebugEnabled) {
            if (debugRenderOptions.renderGhostTrains)
                CanvasDrawer.drawGhostTrainsDebug(screenData, ctx);
            if (debugRenderOptions.renderHoverTargets)
                CanvasDrawer.drawHoverTargetsDebug(ctx, hoverTargets);
        }
        ctx.restore()
    }

    function scheduleDraw() {
        if (rafRef.current !== null) return

        rafRef.current = window.requestAnimationFrame(() => {
            rafRef.current = null
            drawCanvas()
        })
    }

    const canvasInteraction = useCanvasInteraction({
        canvasRef,
        viewRef,
        dragRef,
        minZoomRef,
        canvasSettings,
        userOptions,
        scheduleDraw,
        setMouseWorldPos
    })

    useHoverTarget({
        canvasRef,
        viewRef,
        dragRef,
        canvasSettings,
        mouseWorldPos,
        hoverTargets,
        setHoveredTarget,
    })

    return (
        <>
            <div className='srtoCanvasContainer'>
                {hoveredTarget && (
                    <div
                        className='hoverTooltip'
                        ref={tooltipRef}
                        style={{
                            left: tooltipPosition?.left ?? hoveredTarget.screenX,
                            top: tooltipPosition?.top ?? hoveredTarget.screenY,
                            // visibility: tooltipPosition ? 'visible' : 'hidden'
                        }}
                    >
                        <HoverTooltip hoverTarget={hoveredTarget} steamUserData={steamUserData} />
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className='srto-canvas'
                    onAuxClick={(event) => {
                        if (event.button === 1) {
                            event.preventDefault()
                        }
                    }}
                    // onContextMenu={(event) => event.preventDefault()}
                    onMouseDown={canvasInteraction.handleMouseDown}
                    onMouseMove={canvasInteraction.handleMouseMove}
                    onMouseUp={canvasInteraction.handleMouseUp}
                    onMouseLeave={canvasInteraction.handleMouseLeave}
                />
            </div>
            {isDebugEnabled &&
                <>
                    <main
                        id={devStyles.canvasdevinfoRoot}
                        className={`${devStyles.container} ${showDevMenu && devStyles.expanded}`}
                        onClick={() => toggleDevMenu(!showDevMenu)}>
                        <div className={devStyles.hero}>Development Info</div>
                        <div className={devStyles.dataContainer}>
                            <div className={devStyles.boxHero}>
                                <span></span>
                                SRTO Data Count
                            </div>
                            <div className={devStyles.dataBox}>
                                <p>{`Cluster Count: ${(() => { let v = 0; for (const _ in screenData) { v++ } return v.toString() })()}`}</p>
                                <p>{`Track Count: ${(() => { let v = 0; for (const clusterid in screenData) { v = v + screenData[clusterid].TRACKS.length } return v.toString() })()}`}</p>
                                <p>{`Signal Count: ${(() => { let v = 0; for (const clusterid in screenData) { v = v + screenData[clusterid].SIGNALS.length } return v.toString() })()}`}</p>
                                <p>{`Annotation Count: ${(() => { let v = 0; for (const clusterid in screenData) { v = v + screenData[clusterid].ANNOTATIONS.length }; return v.toString() })()}`}</p>
                            </div>
                        </div>
                        <div className={devStyles.dataContainer}>
                            <div className={devStyles.boxHero}>
                                <span></span>
                                SRTO States Info
                            </div>
                            <div className={devStyles.dataBox}>
                                <p>{`Is Canvas: ${canvasRef ? 'Yes' : 'No'}`}</p>
                                <p>
                                    {mouseWorldPos
                                        ? <div className='devInfo-stateRef'>{`Mouse: [ ${Object.entries(mouseWorldPos).map(([key, value]) => { return ` ${key}: ${value.toFixed(1)}` })} ]`}</div>
                                        : <div className='devInfo-stateRef'>{`Mouse: [ x: - , y: - ]`}</div>
                                    }
                                </p>
                                <p>{`viewRef: ${Object.entries(viewRef.current).map(([key, value]) => { return `${key}: ${value.toFixed(1)} ` })}`}</p>
                                <p>{`dragRef: ${Object.entries(dragRef.current).map(([key, value]) => { return `${key}: ${value} ` })}`}</p>
                                <p>{`dragRef: ${Object.entries(canvasSizeRef.current).map(([key, value]) => { return `${key}: ${value.toFixed(2)} ` })}`}</p>
                            </div>
                        </div>
                    </main>
                </>

                // <div className={`devInfoContainer ${showDevMenu ? 'devInfoVisible' : 'devInfoHidden'}`} onClick={() => toggleDevMenu(!showDevMenu)}>
                //     <div className='devInfo-title'>DEV INFO</div>
                //     <div className="devInfoBox">
                //         <div className='devInfo-title'>SRTO-DATA Info:</div>
                //         <div className="tracksCount"></div>
                //         <div className="signalCount"></div>
                //         <div className="annotationCount"></div>
                //     </div>
                //     <div className='devInfo-statesContainer'>
                //         <div className='devInfo-title'>States Info:</div>
                //         <div className='devInfo-stateRef'></div>

                //         <div className='devInfo-stateRef'></div>
                //         <div className='devInfo-stateRef'></div>
                //         <div className='devInfo-stateRef'></div>
                //     </div>
                // </div>
            }
        </>
    )
}