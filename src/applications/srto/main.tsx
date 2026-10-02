import './main.css'
import { useEffect, useState } from "react"
import Disclaimer from './components/disclaimer/disclaimer';
import Header from './components/header/header-new';
import Canvas from './components/canvas/Canvas';
import { DEV_TRAIN } from './data/customData';
import { useUserOptions } from './hooks/useUserOptions';
import { useSimRailDataUpdater } from './hooks/useSimRailDataUpdater';
import { DebugRenderOptions } from './types/types';

const DISCLAIMER_KEY = "srto_disclaimer_v0.5"

const RenderOptions: DebugRenderOptions = {
    renderTracks: true,
    renderSignals: true,
    showSignalTypes: false,
    renderNodes: true,
    renderTrains: true,
    renderGhostTrains: false,
    renderHoverTargets: false
}

export const isDebugEnabled = 
  new URLSearchParams(window.location.search).get('exposeDebugOptions') === 'true' || 
  process.env.NODE_ENV === 'development';

export default function SimRailTrackOverview() {

    const [userOptions, setUserOptions] = useUserOptions()
    const {
        serverData,
        stationData,
        trainData,
        delayData,
        playerCount,
        steamUserMapRef,
    } = useSimRailDataUpdater(userOptions);

    const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
    const [showChangelog, setShowChangelog] = useState<boolean>(false);
    const [debugRenderOptions, setDebugRenderOptions] = useState<DebugRenderOptions>(RenderOptions)

    const [trainSpeed, setTrainSpeed] = useState<number>(0);

    useEffect(() => {
        let speedAcc = 0;

        for(const train of trainData) {
            speedAcc += train.TrainData.Velocity
        }

        const averageSpeed = speedAcc / trainData.length
        setTrainSpeed(averageSpeed);
    }, [trainData])

    // determine if disclamer has to be shown or not
    useEffect(() => {
        const disclaimeAccepted = localStorage.getItem(DISCLAIMER_KEY) === 'true';
        setShowDisclaimer(!disclaimeAccepted);
    }, []);

    useEffect(() => {
        document.title = process.env.REACT_APP_TITLE + " | SimRail Track Overview"
    })

    const finalTrainList = isDebugEnabled ? [...trainData, ...DEV_TRAIN] : trainData;

    const headerOptions = {
        userOptions,
        setUserOptions,
        showChangelog,
        setShowChangelog,
        serverData,
        playerCount,
        debugRenderOptions,
        setDebugRenderOptions,
        isDebugEnabled
    }

    const SRTO_PROPS = {
        trainData: finalTrainList,
        stationData,
        steamUserData: steamUserMapRef.current,
        delayData,
        userOptions,
        debugRenderOptions,
        isDebugEnabled
    }

    return (
        <>
            <div className='srtoContainer'>
                {showDisclaimer &&
                    <Disclaimer
                        DISCLAIMER_KEY={DISCLAIMER_KEY}
                        showDisclaimer={showDisclaimer}
                        setShowDisclaimer={setShowDisclaimer}
                    />
                }
                <Header {...headerOptions} />
                {/* <div className='averageSpeedInformation' style={{visibility: trainSpeed < 45 ? 'visible' : 'hidden'}}>
                    The <strong><u>average speed</u></strong> on this server is <span><strong>very low at {trainSpeed.toFixed(1)} km/h</strong></span> 
                </div> */}
                <Canvas {...SRTO_PROPS} />
            </div>
        </>
    )
}