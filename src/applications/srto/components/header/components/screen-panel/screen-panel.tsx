import styles from './screen-panel.module.css'
import panels from '../panels.module.css'
import { Screen, UserOptions } from '../../../../types/types'
import { SetStateAction } from 'react'
import { SimRailDataTypes } from '../../../../types/simrail-api'
import { screenList } from '../../../../data/customData'
import { OpenPanel } from '../../header-new'

interface ISelfProps {
    userOptions: UserOptions,
    setUserOptions: React.Dispatch<SetStateAction<UserOptions>>
    serverData: SimRailDataTypes.ServerData[]
    openPanel: OpenPanel | null
    togglePanel: (panel: OpenPanel) => void
}

export function ScreenPanel({
    userOptions,
    setUserOptions,
    serverData,
    openPanel,
    togglePanel
}: ISelfProps) {

    function setScreen(screen: Screen) {
        setUserOptions(prev => ({ ...prev, selectedScreen: screen }));
    }

    return (
        <>
            <section className={`${panels.container} ${openPanel === 'screen' && panels.openPanel} ${styles.panel}`}>
                <div className={panels.hero}>
                    <h3 className={panels.title}>Select a Screen</h3>
                    <button className={panels.close} onClick={() => togglePanel('screen')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className={`${styles.screenList}`}>
                    <div
                        className={`${styles.screenOption} ${userOptions.selectedScreen.screenid === screenList[0].screenid ? styles.active : ''}`}
                        onClick={() => {
                            setScreen(screenList[0]);
                            togglePanel('screen');
                        }}
                    >
                        <div className={styles.screenBadge}>{`S1`}</div>
                        <div className={styles.screenTitle}>
                            <strong>{`Katowice - Włoszczowa Północ`}</strong>
                            <span>{`Katowice - Dąbrowa Górnicza - Łazy - Zawiercie - Myszków / Góra Włodowska - Psary - Włoszczowa Północ`}</span>
                            </div>
                    </div>
                    <div
                        className={`${styles.screenOption} ${userOptions.selectedScreen.screenid === screenList[1].screenid ? styles.active : ''}`}
                        onClick={() => {
                            setScreen(screenList[1]);
                            togglePanel('screen');
                        }}
                    >
                        <div className={styles.screenBadge}>{`S2`}</div>
                        <div className={styles.screenTitle}>
                            <strong>{`Góra Włodowska - Warszawa`}</strong>
                            <span>{`Włoszczowa Północ - Opoczno Południe - Grodzisk Mazowiecki - Warszawa`}</span>
                            </div>
                    </div>
                    <div
                        className={`${styles.screenOption} ${userOptions.selectedScreen.screenid === screenList[2].screenid ? styles.active : ''}`}
                        onClick={() => {
                            setScreen(screenList[2]);
                            togglePanel('screen');
                        }}
                    >
                        <div className={styles.screenBadge}>{`S3`}</div>
                        <div className={styles.screenTitle}>
                            <strong>{`Sędzice - Gałkówek`}</strong>
                            <span>{`Sędzice - Łódź Kaliska - Zgierz -> Łódź North - Łódź Widzew - Łódź Olechów - Gałkówek`}</span>
                            </div>
                    </div>
                    <div
                        className={`${styles.screenOption} ${userOptions.selectedScreen.screenid === screenList[3].screenid ? styles.active : ''}`}
                        onClick={() => {
                            setScreen(screenList[3]);
                            togglePanel('screen');
                        }}
                    >
                        <div className={styles.screenBadge}>{`S4`}</div>
                        <div className={styles.screenTitle}>
                            <strong>{`Rozprza - Pruszków`}</strong>
                            <span>{`Rozprza - Rokiciny - Koluszki - Skierniewice - Żyrardów - Pruszków`}</span>
                            </div>
                    </div>
                    <div
                        className={`${styles.screenOption} ${styles.soonOption} ${userOptions.selectedScreen.screenid === screenList[4].screenid ? styles.active : ''}`}
                        // onClick={() => {
                        //     setScreen(screenList[4]);
                        //     togglePanel('screen');
                        // }}
                    >
                        <div className={styles.screenBadge}>{`S5`}</div>
                        <div className={styles.screenTitle}>
                            <strong>{`Kraków Główny - Sędziszów`} <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>Soon</span></strong>
                            <span>{`Kraków Główny - Zastów - Niedźwiedź - Słomniki - Tunel - Kozłów - Sędziszów / Psary`}</span>
                            </div>
                    </div>
                    <div
                        className={`${styles.screenOption} ${styles.soonOption} ${userOptions.selectedScreen.screenid === screenList[5].screenid ? styles.active : ''}`}
                        // onClick={() => {
                        //     setScreen(screenList[5]);
                        //     togglePanel('screen');
                        // }}
                    >
                        <div className={styles.screenBadge}>{`S6`}</div>
                        <div className={styles.screenTitle}>
                            <strong>{`Staszic - Sędziszów`} <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>Soon</span></strong>
                            <span>{`Staszic - Sosn. Dańdówka - Juliusz - Dorota - Dąb. Górn. Wschodnia - Sławków - Tunel - Sędziszów`}</span>
                            </div>
                    </div>
                </div>
            </section >
        </>
    )
}