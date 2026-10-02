import { useMemo } from "react";
import { ScreenData } from "../../../types/mapdata-types";
import { SimRailDataTypes } from "../../../types/simrail-api";
import { UserOptions } from "../../../types/types";
import { getDelayInfo, getDelayRectMetrics, SIGNAL_BASE_PATH, TRAIN_BASE_PATH } from "../renderer/map-render";
import { SignalHoverTarget, TrainHoverTarget, HoverTarget } from "../../../types/hoverTarget";

interface HoverModel {
    screenData: ScreenData.ScreenDataProps | null
    trainData: SimRailDataTypes.FilteredTrainData[]
    delayData: SimRailDataTypes.Delays[]
    userOptions: Pick<UserOptions, 'flipScreen'>
    worldSize: {
        width: number
        height: number
    }
}

function flipPoint(
    point: { x: string | number, y: string | number },
    flipScreen: boolean,
    worldSize: { width: number, height: number }
) {
    if (!flipScreen) {
        return {
            x: Number(point.x),
            y: Number(point.y)
        }
    }

    return {
        x: worldSize.width - Number(point.x),
        y: worldSize.height - Number(point.y)
    }
}

function flipDirection(direction: 'left' | 'right', flipScreen: boolean) {
    if (!flipScreen) return direction
    return direction === 'left' ? 'right' : 'left'
}

function resolveTrainPlacement(
    train: SimRailDataTypes.FilteredTrainData,
    signal: ScreenData.SIGNAL
) {
    const positions = signal.trainPosDistance

    if (!positions) {
        return {
            x: Number(signal.trainPos.x),
            y: Number(signal.trainPos.y),
            switchDirection: false,
        }
    }

    for (const position of positions) {
        if (train.TrainData.DistanceToSignalInFront > position.distanceToSignal) {
            return {
                x: position.x,
                y: position.y,
                switchDirection: position.switchDirection ?? false,
            }
        }
    }

    return {
        x: Number(signal.trainPos.x),
        y: Number(signal.trainPos.y),
        switchDirection: false,
    }
}

export function useHoverModel({ screenData, trainData, delayData, userOptions, worldSize }: HoverModel) {
    const { width: worldWidth, height: worldHeight } = worldSize

    // building the signalList out of the screenData. Iterate every cluster and get all signals out of the screenData[clusterid].SIGNALS
    const signalList = useMemo(() => {
        if (!screenData) return [];

        const signals: ScreenData.SIGNAL[] = [];
        for (const clusterid in screenData) {
            signals.push(...screenData[clusterid].SIGNALS);
        }
        return signals;
    }, [screenData]);

    // generating a simple Map<key, element> from the signalList
    const signalsByName = useMemo(() => {
        const map = new Map<string | null, ScreenData.SIGNAL[]>();

        for (const signal of signalList) {
            const mapKey = signal.signalName;
            const list = map.get(mapKey);

            if (list) {
                list.push(signal);
            } else {
                map.set(mapKey, [signal]);
            }
        }

        return map;
    }, [signalList]);

    // creating all hoverable trains from trainData
    // it has to get all signals from the signalList in case one train is shown twice due to doubled signals
    const trainHoverEntries = useMemo(() => {
        return trainData.flatMap((train) => {
            const signalName =
                train.TrainData.SignalInFront?.split('@')[0] ??
                train.TrainData.SignalInFrontPredictive?.split('@')[0];

            if (!signalName) return [];

            const signals = signalsByName.get(signalName) ?? [];
            return signals.map((signal) => ({ train, signal }));
        });
    }, [trainData, signalsByName]);

    // creating all hoverable elements based on the previous calculation
    const hoverTargets = useMemo<HoverTarget[]>(() => {
        const signalTargets: SignalHoverTarget[] = signalList
            .filter((signal) => !signal.invisibleSignal)
            .map((signal) => {
                const worldPos = flipPoint(signal.signalPos, userOptions.flipScreen, { width: worldWidth, height: worldHeight })
                const pathDirection = flipDirection(signal.signalDirectionOnMap, userOptions.flipScreen)

                return {
                    key: `signal:${signal.signalName}:${signal.signalPos.x}:${signal.signalPos.y}`,
                    type: 'signal',
                    signal,
                    worldPos,
                    anchorWorldPos: worldPos,
                    hitPath: SIGNAL_BASE_PATH[pathDirection],
                }
            })

        const trainTargets: TrainHoverTarget[] = trainHoverEntries.map(({ train, signal }) => {
            const placement = resolveTrainPlacement(train, signal)
            const trainDelay = getDelayInfo(delayData, train) 
            const worldPos = flipPoint(placement, userOptions.flipScreen, { width: worldWidth, height: worldHeight })
            const flippedDirection = flipDirection(signal.signalDirectionOnMap, userOptions.flipScreen)
            const pathDirection = placement.switchDirection
                ? (flippedDirection === 'left' ? 'right' : 'left')
                : flippedDirection
            const delayRectMetrics = getDelayRectMetrics(trainDelay)
            const anchorOffsetX = pathDirection === 'right' ? -25 + -(delayRectMetrics/2) : 25 + (delayRectMetrics/2)
            function buildTrainHitPath(direction: 'left' | 'right', delayLength: number) {
                const path = new Path2D(TRAIN_BASE_PATH[direction]) // Kopie der Basisform
                const rectX = direction === 'left' ? 52 : -52
                const rectLen = direction === 'left' ? delayLength : -delayLength
                path.rect(rectX, -8, rectLen, 16)
                return path
            }

            return {
                key: `train:${train.TrainNoLocal}:${signal.signalName}`,
                type: 'train',
                train,
                signal,
                worldPos,
                anchorWorldPos: {
                    x: worldPos.x + anchorOffsetX,
                    y: worldPos.y,
                },
                hitPath: buildTrainHitPath(pathDirection, getDelayRectMetrics(trainDelay)),
            }
        })

        //? insert more targets later here if needed

        return [...signalTargets, ...trainTargets]
    }, [signalList, trainHoverEntries, userOptions.flipScreen, worldWidth, worldHeight])

    return {
        hoverTargets,
    };
}