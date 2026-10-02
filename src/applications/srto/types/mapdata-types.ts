import { ScreenId } from "../types/types"

export namespace ScreenData {

    export type ScreenDataProps = {
        [clusterID: string]: ScreenClusterType
    }
    export type ScreenClusterType = {
        TRACKS: TRACK_NODE[]
        SIGNALS: SIGNAL[]
        ANNOTATIONS: ANNOTATIONS[]
    }
    export interface TRACK_NODE {
        //! is there only one type now with the array?
        trackID?: string, // is not needed anymore since the main render element is canvas
        trackSVG?: string, // old type to make full multi-line strings with SVGPath (which gets converted to Path2D for Canvas) //! has to stay for old tracks till rework is complete
        trackColor?: string, // not needed anymore since it's per track commands //! has to stay since it's bound with the old track-type
        color?: string,
        commands?: string[]
        isNPT?: boolean
    }
    export interface SIGNAL {
        signalName: string,
        signalPos: { x: string, y: string }
        signalDirectionOnMap: 'left' | 'right'
        trainPos: { x: string, y: string }
        trainPosDistance?: { distanceToSignal: number, x: number, y: number, switchDirection?: boolean }[]
        trainAnchor?: 'left' | 'right' | 'middle'
        signalType: 'station_standard' | 'station_sz' | 'abs_standard' | 'abs_last' | 'apo_red-green' | 'apo_red-green-white'| 'station_mechanical-2flap'
        invisibleSignal?: boolean
        // a lot more to come, mainly additional signs on those signals
    }
    export type Point = { x: number, y: number }
    export interface ANNOTATIONS {
        annotationType:
        | 'simpleText'
        | 'simpleRect'

        | 'trackBreakMarker'
        | 'differentScreenMarker'
        | 'station' // contains everything for a station (stationName, Platforms, DispatchingPost and Track Labels)
        | 'poStop'
        | 'trackLabels'

        //* FOR ANNOTATIONTYPE 'station'
        stationLabel?: {
            name: string
            nameToDisplay?: string
            prefix: string
            lcsControlledBy?: string
            pos: Point
            posFlipped: Point
        }
        dispatchingPost?: {
            type: 'computer' | 'relay'
            pos: Point
            rotation: number
        }
        platforms?: {
            label: string
            width: number
            height: number
            pos: Point
        }[]
        trackLabels?: { //^ can also be used for trackLabels
            text: string
            fontSize?: number
            color?: string
            pos: Point
        }[]

        //^ FOR annotationType 'poStop'
        poPlatforms?: {
            poName: string
            pos: Point
            posFlipped?: Point
            platforms: {
                pos: Point
                width: number
                height: number
            }[]
        }

        //^ for annotationType 'trackBreakMarker'
        breakLetters?: {
            first: Point
            second: Point
        }[]
        

        //^ THIS IS ALL OLD STUFF
        nodePos?: Point
        nodePosFlipped?: Point
        breakMarker?: {
            firstMarker: Point
            secondMarker: Point
        }
        height?: number,
        width?: number,
        textColor?: string,
        rectColor?: string,
        fillColor?: string,
        strokeWidth?: number,
        textSize?: number,
        text?: string,
    }
}