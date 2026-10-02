import { ActiveSignalHoverTarget } from "../../../../types/hoverTarget";
import signalstyles from './signalTooltip.module.css'

export function SignalHoverTarget(hoverTarget: ActiveSignalHoverTarget) {

    const signaltype = (() => {
        const baseType = hoverTarget.signal.signalType.split('_')[0]
        const isStationOnlySz = hoverTarget.signal.signalType === 'station_sz'
        const isW18 = hoverTarget.signal.signalType === 'abs_last'
        const isW22 = hoverTarget.signal.signalType.includes('W22')

        if (baseType === 'station') {
            return {
                baseType: 'Station-Signal',
                additionalType: isStationOnlySz ? ' - has only Sz functionality' : null
            }
        } else if (baseType === 'abs') {
            return {
                baseType: 'ABS-Signal',
                infoW18: isW18 ? ' - with W18 sign' : null,
                infoW22: isW22 ? ' - with W22 sign' : null
            }
        } else if(baseType === 'apo') {
            return {
                baseType: 'APO-Signal',
                additionalType: null
            }
        }

        return {
            baseType: 'Unknown Type',
            additionalType: null
        }


    })();

    return (
        <>
            <div className={signalstyles.container}>
                <div className={signalstyles.title}>{hoverTarget.signal.signalName}</div>
                <div className={signalstyles.baseType}>{signaltype.baseType}</div>
                {signaltype.additionalType &&
                    <div className={signalstyles.additionalType}>{signaltype.additionalType}</div>
                }
                {signaltype.infoW18 &&
                    <div className={signalstyles.additionalType}>{signaltype.infoW18}</div>
                }
                {signaltype.infoW22 &&
                    <div className={signalstyles.additionalType}>{signaltype.infoW22}</div>
                }
            </div>
        </>
    )
}