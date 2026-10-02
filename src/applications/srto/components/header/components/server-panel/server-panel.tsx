import styles from './server-panel.module.css'
import panels from '../panels.module.css'
import { SetStateAction, useState } from 'react'
import { UserOptions } from '../../../../types/types';
import { SimRailDataTypes } from '../../../../types/simrail-api';
import { OpenPanel } from '../../header-new'

interface ISelfProps {
    userOptions: UserOptions,
    setUserOptions: React.Dispatch<SetStateAction<UserOptions>>
    serverData: SimRailDataTypes.ServerData[]
    playerCount: SimRailDataTypes.PlayerCount
    openPanel: OpenPanel | null
    togglePanel: (panel: OpenPanel) => void
}

export function ServerPanel({
    userOptions,
    setUserOptions,
    serverData,
    playerCount,
    openPanel,
    togglePanel
}: ISelfProps) {

    const [isPolskiExpanded, setPolskiExpanded] = useState<boolean>(false);
    const [isGermanExpanded, setGermanExpanded] = useState<boolean>(false);
    const [isIntExpanded, setIntExpanded] = useState<boolean>(false);
    const [isAdditionalExpanded, setAdditionalExpanded] = useState<boolean>(false);

    const ServerOptionObj = {
        userOptions,
        setUserOptions,
        serverData,
        playerCount,
        togglePanel
    }

    const allUsagePercent = (() => {
        let totalPlayers = 0;
        let totalSlots = 0;

        for (const entry of Object.values(playerCount)) {
            totalPlayers += entry.stations.byPlayer + entry.trains.byPlayer;
            totalSlots += entry.stations.total + entry.trains.total;
        }

        return totalSlots > 0 ? `${((totalPlayers / totalSlots) * 100).toFixed(2)} %` : '0 %';
    })();

    return (
        <>
            <section className={`${panels.container} ${openPanel === 'server' && panels.openPanel} ${styles.panel}`}>
                <div className={panels.hero}>
                    <div>
                        <h3 className={panels.title}>Select a Server</h3>
                        <span>Overall Usage: {allUsagePercent}</span>
                    </div>
                    <button className={panels.close} onClick={() => togglePanel('server')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div
                    className={`${styles.category} ${isPolskiExpanded ? styles.expanded : styles.collapsed}`}
                    id='category-polski'
                >
                    <div
                        className={styles.catHero}
                        onClick={() => { setPolskiExpanded(prev => !prev) }}
                    >
                        <div className={styles.heroRegion}>Polski · 4 Server · Europe</div>
                        <div>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9l6 6 6-6"></path></svg>
                        </div>
                    </div>
                    <div className={`${styles.options} ${isPolskiExpanded ? styles.expanded : ''}`}>
                        <div className={`${styles.playerCounterHeader}`}>
                            <span>Stations</span>
                            <span>Trains</span>
                            <span>%</span>
                        </div>
                        <ServerOption code='pl1' extra='BEZ WYDARZEŃ' {...ServerOptionObj} />
                        <ServerOption code='pl2' {...ServerOptionObj} />
                        <ServerOption code='pl3' {...ServerOptionObj} />
                        <ServerOption code='pl5' {...ServerOptionObj} />
                    </div>
                </div>

                <div
                    className={`${styles.category} ${isGermanExpanded ? styles.expanded : styles.collapsed}`}
                    id='category-german'
                >
                    <div
                        className={styles.catHero}
                        onClick={() => { setGermanExpanded(prev => !prev) }}
                    >
                        <div className={styles.heroRegion}>German · 3 Server · Europe</div>
                        <div>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9l6 6 6-6"></path></svg>
                        </div>
                    </div>
                    <div className={`${styles.options} ${isGermanExpanded ? styles.expanded : ''}`}>
                        <div className={`${styles.playerCounterHeader}`}>
                            <span>Stations</span>
                            <span>Trains</span>
                            <span>%</span>
                        </div>
                        <ServerOption code='de1' extra='KEINE EVENTS' {...ServerOptionObj} />
                        <ServerOption code='de2' {...ServerOptionObj} />
                        <ServerOption code='de3' {...ServerOptionObj} />
                    </div>
                </div>

                <div
                    className={`${styles.category} ${isIntExpanded ? styles.expanded : styles.collapsed}`}
                    id='category-international'
                >
                    <div
                        className={styles.catHero}
                        onClick={() => { setIntExpanded(prev => !prev) }}
                    >
                        <div className={styles.heroRegion}>International · 7 Server · Europe / North America / Asia</div>
                        <div>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9l6 6 6-6"></path></svg>
                        </div>
                    </div>
                    <div className={`${styles.options} ${isIntExpanded ? styles.expanded : ''}`}>
                        <div className={`${styles.playerCounterHeader}`}>
                            <span>Stations</span>
                            <span>Trains</span>
                            <span>%</span>
                        </div>
                        <ServerOption code='int1' extra='NO EVENTS' {...ServerOptionObj} />
                        <ServerOption code='int2' {...ServerOptionObj} />
                        <ServerOption code='int3' {...ServerOptionObj} />
                        <ServerOption code='int4' {...ServerOptionObj} />
                        <ServerOption code='int5' {...ServerOptionObj} />
                        <ServerOption code='int6' {...ServerOptionObj} />
                        <ServerOption code='int9' extra='NO MODERATION' {...ServerOptionObj} />
                    </div>
                </div>

                <div
                    className={`${styles.category} ${isAdditionalExpanded ? styles.expanded : styles.collapsed}`}
                    id='category-international'
                >
                    <div
                        className={styles.catHero}
                        onClick={() => { setAdditionalExpanded(prev => !prev) }}
                    >
                        <div className={styles.heroRegion}>Additional Server · 5 Server · Europe</div>
                        <div>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9l6 6 6-6"></path></svg>
                        </div>
                    </div>
                    <div className={`${styles.options} ${isAdditionalExpanded ? styles.expanded : ''}`}>
                        <div className={`${styles.playerCounterHeader}`}>
                            <span>Stations</span>
                            <span>Trains</span>
                            <span>%</span>
                        </div>
                        <ServerOption code='cz1' {...ServerOptionObj} />
                        <ServerOption code='fr1' {...ServerOptionObj} />
                        <ServerOption code='xbx1' {...ServerOptionObj} />
                        <ServerOption code='xbx2' {...ServerOptionObj} />
                        <ServerOption code='xbx3' {...ServerOptionObj} />
                    </div>
                </div>

            </section>
        </>
    )
}

function ServerOption({
    code,
    extra,
    userOptions,
    setUserOptions,
    serverData,
    playerCount,
    togglePanel
}: {
    code: string
    extra?: string
    userOptions: UserOptions
    setUserOptions: React.Dispatch<SetStateAction<UserOptions>>
    serverData: SimRailDataTypes.ServerData[]
    playerCount: SimRailDataTypes.PlayerCount
    togglePanel: (panel: OpenPanel) => void
}) {
    return (
        <>
            <div
                className={`${styles.serverOption} ${code === userOptions.selectedServer && panels.selected}`}
                onClick={() => {
                    setUserOptions(prev => ({ ...prev, selectedServer: code }));
                    togglePanel('server');
                }}
            >
                <div className={styles.server}>
                    <span className={`${styles.statusDot} ${serverData.find(server => server.ServerCode === code)?.IsActive ? styles.statusOnline : styles.statusOffline}`}></span>
                    <span className={styles.code}>{code.toLocaleUpperCase()}</span>
                    {extra &&
                        <span className={styles.extra}>{extra.toLocaleUpperCase()}</span>
                    }
                </div>
                <div className={styles.playerCounterGrid}>
                    <span>{playerCount[code] ? `${playerCount[code].stations.byPlayer} / ${playerCount[code].stations.total}` : '0 / 0'}</span>
                    <span>{playerCount[code] ? `${playerCount[code].trains.byPlayer} / ${playerCount[code].trains.total}` : '0 / 0'}</span>
                    <span>{playerCount[code] ? `${playerCount[code].percentFilled.toFixed(0)} %` : '0 %'}</span>
                </div>
            </div>
        </>
    )
}