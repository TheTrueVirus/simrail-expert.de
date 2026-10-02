import { MouseEventHandler, SetStateAction } from "react";
import { UserOptions } from "../../../types/types";

interface CanvasSettingsProps {
    CANVAS_WORLD_WIDTH: number,
    CANVAS_WORLD_HEIGHT: number,
    MIN_ZOOM_FIT: number,
    MIN_ZOOM_EXTENDED: number,
    MAX_ZOOM: number,
    TOOLTIP_MARGIN: number,
}

interface CanvasInteraction {
    canvasRef: React.RefObject<HTMLCanvasElement | null>
    viewRef: React.RefObject<{ zoom: number, panX: number, panY: number }>
    dragRef: React.RefObject<{ isDragging: boolean; lastX: number; lastY: number }>
    minZoomRef: React.RefObject<number>
    canvasSettings: CanvasSettingsProps
    userOptions: UserOptions
    scheduleDraw: () => void
    setMouseWorldPos: React.Dispatch<SetStateAction<{ x: number, y: number } | null>>
}

export function useCanvasInteraction({
    canvasRef,
    viewRef,
    dragRef,
    minZoomRef,
    canvasSettings,
    userOptions,
    scheduleDraw,
    setMouseWorldPos
}: CanvasInteraction) {

    function clampViewToBounds(rect: DOMRect) {

        if (userOptions.allowExtendedView) return
        const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH
        const scale = fitScale * viewRef.current.zoom

        const scaledWorldWidth = canvasSettings.CANVAS_WORLD_WIDTH * scale
        const scaledWorldHeight = canvasSettings.CANVAS_WORLD_HEIGHT * scale

        if (scaledWorldWidth <= rect.width) {
            viewRef.current.panX = (rect.width - scaledWorldWidth) / 2
        } else {
            const minPanX = rect.width - scaledWorldWidth
            const maxPanX = 0
            viewRef.current.panX = Math.min(maxPanX, Math.max(minPanX, viewRef.current.panX))
        }

        if (scaledWorldHeight <= rect.height) {
            viewRef.current.panY = (rect.height - scaledWorldHeight) / 2
        } else {
            const minPanY = rect.height - scaledWorldHeight
            const maxPanY = 0
            viewRef.current.panY = Math.min(maxPanY, Math.max(minPanY, viewRef.current.panY))
        }
    }

    function resetView(rect: DOMRect) {
        viewRef.current.panY = viewRef.current.panY / viewRef.current.zoom
        viewRef.current.panX = 0
        viewRef.current.zoom = 1
        clampViewToBounds(rect)
    }

    function handleMouseDown(event: React.MouseEvent<HTMLCanvasElement>) {
        //? MouseWheel Button
        if (event.button === 1 && !event.ctrlKey) {
            // event.preventDefault()

            const canvas = canvasRef.current
            if (!canvas) return

            const rect = canvas.getBoundingClientRect()
            resetView(rect)
            scheduleDraw()
            return
        }
        //? Other than left mouse button (e.g. right mouse button)
        if (event.button !== 0) return

        dragRef.current.isDragging = true
        dragRef.current.lastX = event.clientX
        dragRef.current.lastY = event.clientY
    }

    function handleMouseMove(event: React.MouseEvent<HTMLCanvasElement>) {
        const canvas = canvasRef.current
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top
        const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH
        const scale = fitScale * viewRef.current.zoom
        const worldX = (mouseX - viewRef.current.panX) / scale
        const worldY = (mouseY - viewRef.current.panY) / scale
        if (setMouseWorldPos) {
            setMouseWorldPos({ x: Math.round(worldX), y: Math.round(worldY) })
        }

        if (!dragRef.current.isDragging) return

        const deltaX = event.clientX - dragRef.current.lastX
        const deltaY = event.clientY - dragRef.current.lastY

        dragRef.current.lastX = event.clientX
        dragRef.current.lastY = event.clientY

        viewRef.current.panX += deltaX
        viewRef.current.panY += deltaY

        clampViewToBounds(rect)
        scheduleDraw()
    }

    function handleMouseUp(event: React.MouseEvent<HTMLCanvasElement>) {
        dragRef.current.isDragging = false
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLCanvasElement>) {
        dragRef.current.isDragging = false
        if (!setMouseWorldPos) return;
        setMouseWorldPos(null)
    }

    function handleWheel(event: WheelEvent) {
        event.preventDefault()

        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top
        const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH

        const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9
        const prevZoom = viewRef.current.zoom
        const nextZoom = Math.min(canvasSettings.MAX_ZOOM, Math.max(minZoomRef.current, prevZoom * zoomFactor))

        if (nextZoom === prevZoom) return

        const prevScale = fitScale * prevZoom
        const nextScale = fitScale * nextZoom

        // Keep the world point under the cursor fixed while zooming.
        const worldX = (mouseX - viewRef.current.panX) / prevScale
        const worldY = (mouseY - viewRef.current.panY) / prevScale

        viewRef.current.zoom = nextZoom
        viewRef.current.panX = mouseX - worldX * nextScale
        viewRef.current.panY = mouseY - worldY * nextScale
        clampViewToBounds(rect)

        scheduleDraw()
    }

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleMouseLeave,
        handleWheel,
        clampViewToBounds
    }
}