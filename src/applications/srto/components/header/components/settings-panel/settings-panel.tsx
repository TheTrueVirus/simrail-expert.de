import { JSX, SetStateAction } from 'react'
import { DebugRenderOptions, UserOptions } from '../../../../types/types'
import { OpenPanel } from '../../header-new'
import styles from './settings-panel.module.css'
import panels from '../panels.module.css'
import { isDataView } from 'node:util/types'

interface ISelfProps {
    userOptions: UserOptions
    setUserOptions: React.Dispatch<SetStateAction<UserOptions>>
    openPanel: OpenPanel | null
    togglePanel: (panel: OpenPanel) => void
    debugRenderOptions: DebugRenderOptions,
    setDebugRenderOptions: React.Dispatch<SetStateAction<DebugRenderOptions>>
    isDebugEnabled: boolean
}

type UserOptionKey = 'shortStationNames' | 'allowExtendedView' | 'flipScreen' | 'showNonPlayableTracks'
type DebugOptionKey =
    | 'renderTracks'
    | 'renderSignals'
    | 'showSignalTypes'
    | 'renderNodes'
    | 'renderTrains'
    | 'renderGhostTrains'
    | 'renderHoverTargets'

const CURRENT_VERSION = process.env.REACT_APP_VERSION
const BUILD_TIME = process.env.REACT_APP_BUILD_TIME

export function SettingsPanel({
    userOptions,
    setUserOptions,
    openPanel,
    togglePanel,
    debugRenderOptions,
    setDebugRenderOptions,
    isDebugEnabled
}: ISelfProps) {

    function setUserOption<K extends UserOptionKey>(key: K, value: UserOptions[K]) {
        setUserOptions(prev => ({ ...prev, [key]: !value }))
    }

    function setDebugOption<K extends DebugOptionKey>(key: K, value: DebugRenderOptions[K]) {
        setDebugRenderOptions(prev => ({ ...prev, [key]: !value }))
    }

    return (
        <>
            <section className={`${panels.container} ${openPanel === 'settings' && panels.openPanel} ${styles.panel}`}>
                <div className={panels.hero}>
                    <h3 className={panels.title}>Settings</h3>
                    <button className={panels.close} onClick={() => togglePanel('settings')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className={styles.userSettings}>
                    <ToggleableOption optionKey='shortStationNames' {...{ userOptions, setUserOption }} />
                    <ToggleableOption optionKey='allowExtendedView' {...{ userOptions, setUserOption }} />
                    <ToggleableOption optionKey='flipScreen' {...{ userOptions, setUserOption }} />
                    {/*//& OPTION WILL NOT BE MADE AVAILABLE UNTIL MOSTLY ALL STATIONS HAVE NPT TRACKS  */}
                    {isDebugEnabled &&
                        <ToggleableOption optionKey='showNonPlayableTracks' {...{ userOptions, setUserOption }} />
                    }
                </div>

                <div className={styles.buttons}>
                    <a className={styles.siteButton} target='_blank' rel="noopener noreferrer" href={process.env.REACT_APP_FORUM_URL}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/social-buttons/simrail-forum-logo.png'} />
                        Forum Thread
                    </a>
                    <a className={styles.siteButton} target='_blank' rel="noopener noreferrer" href={process.env.REACT_APP_GITHUB_URL}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/social-buttons/github-white-icon.png'} />
                        GitHub Repo
                    </a>
                    <a className={`${styles.siteButton}`} target='_blank' rel="noopener noreferrer" href={process.env.REACT_APP_DISCORD_URL}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/social-buttons/discord.png'} />
                        Discord
                    </a>
                </div>

                <div className={styles.copyrightVersion}>
                    <span>SRTO-Version {CURRENT_VERSION}</span>
                    {BUILD_TIME && <span>Build: {new Date(BUILD_TIME).toLocaleString('de-DE')}</span>}
                    <span>Copyright (c) 2026 TheTrueVirus</span>
                </div>
                {isDebugEnabled &&
                    <>
                        <div className={styles.debug}>
                            <span className={styles.debugTitle}>
                                DEBUG OPTIONS
                                <span>DANGER ZONE</span>
                            </span>
                            <DEV_ToggleableOption optionKey='renderTracks' {...{ debugRenderOptions, setDebugOption }} />
                            <DEV_ToggleableOption optionKey='renderSignals' {...{ debugRenderOptions, setDebugOption }} />
                            <DEV_ToggleableOption optionKey='showSignalTypes' {...{ debugRenderOptions, setDebugOption }} />
                            <DEV_ToggleableOption optionKey='renderNodes' {...{ debugRenderOptions, setDebugOption }} />
                            <DEV_ToggleableOption optionKey='renderTrains' {...{ debugRenderOptions, setDebugOption }} />
                            <DEV_ToggleableOption optionKey='renderGhostTrains' {...{ debugRenderOptions, setDebugOption }} />
                            <DEV_ToggleableOption optionKey='renderHoverTargets' {...{ debugRenderOptions, setDebugOption }} />
                        </div>
                    </>

                }

            </section>
        </>
    )
}

const OptionsMeta: Record<UserOptionKey, { icon: JSX.Element, name: string, text: string }> = {
    "shortStationNames": {
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="'IBM Plex Sans'" letterSpacing="1">
                    Pr
                </text>
            </svg>
        ),
        name: "Short Station Names",
        text: "Show the short prefix instead of the full station name",
    },
    "allowExtendedView": {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="8" width="8" height="8" rx="1" />
                <rect x="2" y="2" width="20" height="20" rx="2" strokeDasharray="2.5 2.5" />
            </svg>
        ),
        name: "Allow Extended View",
        text: "Enable the ability to move the map further than the normal bounds",
    },
    "flipScreen": {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
        ),
        name: "Flip Screen",
        text: "Flip the screen 180°",
    },
    "showNonPlayableTracks": {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h20" />
                <path d="M8 7l8 9" />
                <path d="M13.8 18l4.4-4" />
            </svg>
        ),
        name: "Show NonPlayable Tracks",
        text: "Makes Non-Playable tracks visible (usualy tracks which doesn't get used In-Game)",
    }
}

const DebugOptionsMeta: Record<DebugOptionKey, { name: string, text: string }> = {
    "renderTracks": {
        name: "Render Tracks",
        text: "Enable or disable rendering of tracks"
    },
    "renderSignals": {
        name: "Render Signals",
        text: "Enable or disable rendering of signals"
    },
    "showSignalTypes": {
        name: "Show Signal Types",
        text: "Enable or disable coloring of different signal types"
    },
    "renderNodes": {
        name: "Render Nodes",
        text: "Enable or disable rendering of annotations"
    },
    "renderTrains": {
        name: "Render Trains",
        text: "Enable or disable rendering of trains"
    },
    "renderGhostTrains": {
        name: "Render Ghost Trains",
        text: "Enable or disable rendering of possible train positions of each signal"
    },
    "renderHoverTargets": {
        name: "Render Hover Targets",
        text: "Enable or disable rendering of hoverable targets on the Canvas"
    },
}

function ToggleableOption({
    optionKey,
    userOptions,
    setUserOption,
}: {
    optionKey: UserOptionKey
    userOptions: UserOptions,
    setUserOption: <K extends UserOptionKey>(key: K, value: UserOptions[K]) => void
}) {

    return (
        <>
            <div className={styles.option}>
                <div className={styles.icon}>
                    {OptionsMeta[optionKey].icon}
                </div>
                <div className={styles.settingsText}>
                    <span>{OptionsMeta[optionKey].name}</span>
                    <small>{OptionsMeta[optionKey].text}</small>
                </div>
                <div
                    className={`${styles.toggle} ${userOptions[optionKey] === true && styles.active}`}
                    onClick={() => { setUserOption(optionKey, userOptions[optionKey]) }}
                ></div>
            </div>
        </>
    )
}

function DEV_ToggleableOption({
    optionKey,
    debugRenderOptions,
    setDebugOption,
}: {
    optionKey: DebugOptionKey
    debugRenderOptions: DebugRenderOptions,
    setDebugOption: <K extends DebugOptionKey>(key: K, value: DebugRenderOptions[K]) => void
}) {

    return (
        <>
            <div className={styles.option}>
                <div className={styles.icon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="7" y="7" width="10" height="11" rx="4" />
                        <path d="M9 7V5a3 3 0 016 0v2M4 10h3M17 10h3M4 15h3M17 15h3M9 20l-2 1M15 20l2 1M12 7v11" />
                    </svg>
                </div>
                <div className={styles.settingsText}>
                    <span>{DebugOptionsMeta[optionKey].name}</span>
                    <small>{DebugOptionsMeta[optionKey].text}</small>
                </div>
                <div
                    className={`${styles.toggle} ${debugRenderOptions[optionKey] === true && styles.active}`}
                    onClick={() => { setDebugOption(optionKey, debugRenderOptions[optionKey]) }}
                ></div>
            </div>
        </>
    )
}