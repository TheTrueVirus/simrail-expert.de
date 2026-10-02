import modal from './disclaimer.module.css'

interface ISelfProps {
    DISCLAIMER_KEY: string
    showDisclaimer: boolean,
    setShowDisclaimer: (value: boolean) => void
}


export default function Disclaimer({DISCLAIMER_KEY, showDisclaimer, setShowDisclaimer} : ISelfProps) {

    const onUnderstand = () => {
        localStorage.setItem(DISCLAIMER_KEY, "true")
        setShowDisclaimer(false);
    }

    return (
        <>
            <div className={modal.msgShell}>
                <div className={modal.msgBox}>
                    <div className={modal.msgHero}>
                        <div>SimRail Track Overview - Disclaimer</div>
                        <button className={modal.msgClose} onClick={onUnderstand}>X</button>
                    </div>
                    <div className={modal.msgContent}>
                        <p>SRTO is still in development. Features may be incomplete and data may be inaccurate or temporarily unavailable. Provided as-is.</p>
                        <p><strong>Found a bug?</strong><br/> Report it on the <strong><a href={process.env.REACT_APP_FORUM_URL} target='_blank'>SimRail Forum Thread</a></strong> or on <strong><a href={process.env.REACT_APP_GITHUB_URL} target='_blank'>GitHub</a></strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}