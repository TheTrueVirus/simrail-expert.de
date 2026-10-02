import { useRef } from 'react'
import './main.css'
import lpStyles from './main.module.css'
import { useNavigate } from 'react-router'

type Page = 'projects' | 'changelog'

const badgeColors = {
    gray: { bg: '#282828', fg: '#949494' },
    orange: { bg: '#68391e', fg: '#e8793a' },
    blue: { bg: '#134083', fg: '#88aad9' },
    green: { bg: '#138340', fg: '#96e1b5' }
}

const cards = [
    {
        project: 'SRTO - SimRail Track Overview',
        version: '0.4.2-alpha',
        badges: [
            { name: 'Current Project', colors: badgeColors.orange },
            { name: 'ALPHA', colors: badgeColors.blue },
            { name: 'Dispatcher', colors: badgeColors.gray },
        ],
        text: 'The SRTO is a 2d-graphical map which covers all tracks available in SimRail. It offers to watch every train and every signal in real-time for every server available.',
        imgsrc: '/assets/images/project-images/srto_thumb.png',
        route: '/projects/srto'
    },
    {
        project: 'EBuLa - Electronic Timetable',
        version: '-',
        badges: [
            { name: 'Planned', colors: badgeColors.gray },
            { name: 'Driver', colors: badgeColors.gray },
        ],
        text: 'This project features a timetable for drivers in the exact style as the electronic timetable in Germany.',
        imgsrc: '/assets/images/project-images/ebula_thumb.png',
        route: '/projects/ebula'
    },
    {
        project: 'LeiDis - ZFI',
        version: '-',
        badges: [
            { name: 'Planned', colors: badgeColors.gray },
            { name: 'Dispatcher', colors: badgeColors.gray },
        ],
        text: 'For german dispatcher, they have a table almost like the EDR in SimRail. This version features switching tracks, mark trains as cancelled, and making notes for individual trains.',
        imgsrc: '',
        route: '/projects/zfi'
    },
]

export function SimRailExpert() {

    const landingPageRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();

    return (
        <main className={lpStyles.mainContainer} ref={landingPageRef}>
            <section className={lpStyles.shell}>
                <section className={lpStyles.sideBar}>
                    <div className={lpStyles.brand}>
                        <svg viewBox='0 0 40 40'>
                            <rect x={0} y={0} width={40} height={40} fill='#e8793a' rx={10} />
                            <text x={14} y={22} fill='#141210'>S</text>
                            <text x={26} y={22} fill='#141210'>E</text>
                        </svg>
                        <div className={lpStyles.brandName}>
                            SimRail
                            <span>Expert</span>
                        </div>
                    </div>

                    <div className={lpStyles.sideBarNav}>
                        <div className={`${lpStyles.navElement} ${lpStyles.active}`}>
                            <div className={lpStyles.navHero}>
                                Projects
                                <span>01</span>
                            </div>
                        </div>
                        <div className={`${lpStyles.navElement} ${lpStyles.active}`}>
                            <div className={lpStyles.navHero}>
                                Changelog
                                <span>01</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={lpStyles.content}>
                    <div className={lpStyles.cHero}>
                        <h1>Projects on SimRail <span>EXPERT</span></h1>
                        <h2>Various tools for dispatchers & train drivers in SimRail</h2>
                        <p>SimRail-Expert is a constant growing collection of tools for dispatchers and train drivers for <strong>SimRail - The Railway Simulator</strong>.<br />SRTO - SimRail Track Overview is the first project on this page, with more to come!</p>
                    </div>
                    <div className={lpStyles.about}>
                        <p>SimRail-Expert is not a standalone solution, but a <strong>growing platform</strong>. SRTO marks the starting point—each subsequent project follows only once the previous one has achieved a stable footing.</p>
                    </div>

                    <div className={lpStyles.projects}>
                        <div className={lpStyles.pHero}>
                            <span></span>
                            Projects by SimRail-Expert
                        </div>
                        <div className={lpStyles.cards}>
                            {
                                cards.map(card => (
                                    <>
                                        <div className={lpStyles.card} onClick={() => navigate(card.route)}>
                                            <div className={lpStyles.thumb}>
                                                <img src={card.imgsrc} />
                                            </div>
                                            <div className={lpStyles.cardBody}>
                                                <div className={lpStyles.cardTitle}>
                                                    {card.project}
                                                    <span>{card.version}</span>
                                                </div>
                                                <div className={lpStyles.cardBadges}>
                                                    {card.badges.map(badge => <><span className={`${lpStyles.cardBadge}`} style={{ color: badge.colors.fg, backgroundColor: badge.colors.bg }} >{badge.name}</span></>)}
                                                </div>
                                                <p>{card.text}</p>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}