import { useEffect } from 'react'
import { HoverTarget, ActiveHoverTarget } from '../../../types/hoverTarget'

type HoveredTargetType = ActiveHoverTarget

interface CanvasViewRef {
    zoom: number
    panX: number
    panY: number
}

interface CanvasSettingsProps {
    CANVAS_WORLD_WIDTH: number
    CANVAS_WORLD_HEIGHT: number
    MIN_ZOOM_FIT: number
    MIN_ZOOM_EXTENDED: number
    MAX_ZOOM: number
    TOOLTIP_MARGIN: number
}

interface UseHoverTargetProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>
    viewRef: React.RefObject<CanvasViewRef>
    dragRef: React.RefObject<{ isDragging: boolean; lastX: number; lastY: number }>
    canvasSettings: CanvasSettingsProps
    mouseWorldPos: { x: number, y: number } | null
    hoverTargets: HoverTarget[]
    setHoveredTarget: React.Dispatch<React.SetStateAction<HoveredTargetType>>
}

function toScreenPoint(
    worldPoint: { x: number, y: number },
    rect: DOMRect,
    view: CanvasViewRef,
    worldWidth: number
) {
    const fitScale = rect.width / worldWidth
    const scale = fitScale * view.zoom

    return {
        x: worldPoint.x * scale + view.panX,
        y: worldPoint.y * scale + view.panY,
    }
}

export function useHoverTarget({
    canvasRef,
    viewRef,
    dragRef,
    canvasSettings,
    mouseWorldPos,
    hoverTargets,
    setHoveredTarget,
}: UseHoverTargetProps) {
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        if (!mouseWorldPos || dragRef.current.isDragging) {
            canvas.style.cursor = 'default'
            setHoveredTarget(null)
            return
        }

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let nextHoveredTarget: HoveredTargetType = null

        for (let index = hoverTargets.length - 1; index >= 0; index -= 1) {
            const target = hoverTargets[index]
            const localX = mouseWorldPos.x - target.worldPos.x
            const localY = mouseWorldPos.y - target.worldPos.y

            if (!ctx.isPointInPath(target.hitPath, localX, localY)) {
                continue
            }

            const rect = canvas.getBoundingClientRect()
            const anchorScreenPoint = toScreenPoint(
                target.anchorWorldPos,
                rect,
                viewRef.current,
                canvasSettings.CANVAS_WORLD_WIDTH
            )

            if (target.type === 'train') {
                nextHoveredTarget = {
                    type: 'train',
                    train: target.train,
                    signal: target.signal,
                    screenX: anchorScreenPoint.x,
                    screenY: anchorScreenPoint.y,
                }
            } else if (target.type === 'signal') {
                nextHoveredTarget = {
                    type: 'signal',
                    signal: target.signal,
                    screenX: anchorScreenPoint.x,
                    screenY: anchorScreenPoint.y,
                }
            } else {
                nextHoveredTarget = {
                    type: 'custom',
                    payload: target.payload,
                    screenX: anchorScreenPoint.x,
                    screenY: anchorScreenPoint.y,
                }
            }

            break
        }

        canvas.style.cursor = nextHoveredTarget ? 'pointer' : 'default'
        setHoveredTarget((previousTarget) => {
            if (previousTarget === null && nextHoveredTarget === null) return previousTarget
            if (previousTarget?.type !== nextHoveredTarget?.type) return nextHoveredTarget

            if (previousTarget?.type === 'signal' && nextHoveredTarget?.type === 'signal') {
                const sameSignal =
                    previousTarget.signal.signalName === nextHoveredTarget.signal.signalName &&
                    previousTarget.screenX === nextHoveredTarget.screenX &&
                    previousTarget.screenY === nextHoveredTarget.screenY

                return sameSignal ? previousTarget : nextHoveredTarget
            }

            if (previousTarget?.type === 'train' && nextHoveredTarget?.type === 'train') {
                const sameTrain =
                    previousTarget.train.TrainNoLocal === nextHoveredTarget.train.TrainNoLocal &&
                    previousTarget.signal.signalName === nextHoveredTarget.signal.signalName &&
                    previousTarget.screenX === nextHoveredTarget.screenX &&
                    previousTarget.screenY === nextHoveredTarget.screenY &&
                    previousTarget.train.TrainData.DistanceToSignalInFront === nextHoveredTarget.train.TrainData.DistanceToSignalInFront &&
                    previousTarget.train.TrainData.SignalInFrontSpeed === nextHoveredTarget.train.TrainData.SignalInFrontSpeed &&
                    previousTarget.train.TrainData.Velocity === nextHoveredTarget.train.TrainData.Velocity

                return sameTrain ? previousTarget : nextHoveredTarget
            }

            if (previousTarget?.type === 'custom' && nextHoveredTarget?.type === 'custom') {
                const sameCustom =
                    previousTarget.payload === nextHoveredTarget.payload &&
                    previousTarget.screenX === nextHoveredTarget.screenX &&
                    previousTarget.screenY === nextHoveredTarget.screenY

                return sameCustom ? previousTarget : nextHoveredTarget
            }

            return nextHoveredTarget
        })
    }, [canvasRef, viewRef, dragRef, canvasSettings.CANVAS_WORLD_WIDTH, mouseWorldPos, hoverTargets, setHoveredTarget])
}
