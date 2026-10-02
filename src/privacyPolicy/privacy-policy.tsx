import { useEffect, useRef, useState } from 'react'
import styles from './privacy-policy.module.css'
import { Navigate, useNavigate } from 'react-router';

export default function PrivacyPolicyPage() {

    const navigate = useNavigate();

    return (
        <>
            <main className={styles.page}>
                <header className={styles.header}>
                    <div className={styles.brand}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/site-images/se.png`} />
                        <h2>SimRail-Expert</h2>
                    </div>
                    <h2>Privacy Policy</h2>
                </header>

                <section className={styles.content}>
                    <h2>Last updated: September 2026</h2>
                    <p>I operate SimRail-Expert ( <code>simrail-expert.de</code> ), a non-commercial hobby project providing tools and information related to the game SimRail.</p>
                    <p>This Privacy Policy explains what technical data may be processed when you visit my website or use services provided by SimRail-Expert.</p>

                    <h1>1. Data Controller</h1>
                    <p>The data controller responsible for this website is <i>TrueVirus</i>.</p>
                    <p>For privacy-related questions, I can be contacted using the following alternatives:</p>
                    <p>
                        <ul>
                            <li className={styles.interact}>Discord: <code>truevirustv</code></li>
                            <li className={styles.interact}><a href="https://forum.simrail.eu/profile/5963-truevirus/" target='_blank' rel="noopener noreferrer">SimRail Forum (forum.simrail.eu)</a></li>
                            <li className={styles.interact}><a href="https://github.com/TheTrueVirus" target='_blank' rel="noopener noreferrer">GitHub (github.com)</a></li>
                            <li className={styles.interact}>
                                <details>
                                    <summary>E-Mail: (click to show)
                                    </summary>
                                    thetruevirusyt@gmail.com
                                </details>
                            </li>
                        </ul>
                    </p>

                    <h1>2. Website Access and Server Logs</h1>
                    <p>When you access the SimRail-Expert website, technical information is processed automatically in order
                        to deliver the requested content and maintain the security and reliability of the service</p>
                    <p>Depending on the request, this information may include:</p>
                    <p>
                        <ul>
                            <li>date and time of the request,</li>
                            <li>requested URL or resource,</li>
                            <li>HTTP method and protocol,</li>
                            <li>HTTP status code,</li>
                            <li>amount of data transferred,</li>
                            <li>referrer URL, if provided by the browser,</li>
                            <li>browser and browser version,</li>
                            <li>operating system and other information contained in the User-Agent.</li>
                        </ul>
                    </p>
                    <h2>IP address anonymisation</h2>
                    <p>The web hosting infrastructure provided by Hetzner anonymises IP addresses in its web server logs.</p>
                    <p>For IPv4 addresses, the last octet is removed and replaced with a randomly generated value. For IPv6
                        addresses, the last 88 bits are anonymised.</p>
                    <p>The original IP address is therefore not stored in the web server logs used for the website.</p>
                    <p>The logs are used for:</p>
                    <p>
                        <ul>
                            <li>operating the website,</li>
                            <li>detecting and investigating technical problems,</li>
                            <li>maintaining security,</li>
                            <li>detecting abuse,</li>
                            <li>generating technical and statistical information about the website.</li>
                        </ul>
                    </p>
                    <p>The legal basis for this processing is Article 6(1)(f) GDPR, based on my legitimate interest in operating a
                        secure and reliable website.</p>

                    <h1>3. API Service</h1>
                    <p>SimRail-Expert provides a public API at <code>api.simrail-expert.de</code>.</p>
                    <p>The API does not require registration, user accounts or the submission of personal information.</p>
                    <p>Unlike the web hosting environment described above, the API server is operated and configured by me.
                        Technical server logs may therefore contain the original IP address of a client.</p>
                    <p>Depending on the request and server configuration, API logs may contain:</p>
                    <p>
                        <ul>
                            <li>IP address,</li>
                            <li>date and time of the request,</li>
                            <li>requested API endpoint,</li>
                            <li>HTTP status code,</li>
                            <li>amount of data transferred,</li>
                            <li>User-Agent and other technical HTTP information.</li>
                        </ul>
                    </p>
                    <p>This information is used for:</p>
                    <p>
                        <ul>
                            <li>operating the API,</li>
                            <li>troubleshooting,</li>
                            <li>monitoring availability,</li>
                            <li>maintaining security,</li>
                            <li>detecting and preventing abuse.</li>
                        </ul>
                    </p>
                    <p>I do not use API log data to create user profiles, track users across different websites or provide
                        targeted advertising.</p>
                    <p>The legal basis for this processing is Article 6(1)(f) GDPR, based on my legitimate interest in operating and protecting the API service.</p>

                    <h1>4. Local Storage</h1>
                    <p>SimRail-Expert does not use cookies for storing user preferences or tracking visitors.</p>
                    <p>Instead, the website may use the browser's <strong>Local Storage</strong> to save locally selected application settings
                        and preferences.</p>
                    <p>This information remains stored locally in the user's browser and is not transmitted to my servers
                        merely because it is stored in Local Storage.</p>
                    <p>Local Storage is not used for advertising, cross-site tracking or user profiling.</p>

                    <h1>5. Website Statistics</h1>
                    <p>I use statistics provided by the web hosting service, including <strong>AWStats</strong> and <strong>ReportMagic</strong>, to obtain
                        general technical information about website usage.</p>
                    <p>These statistics are generated from the web server logs described in Section 2, which contain anonymised IP addresses.</p>
                    <p>The statistics may provide information such as:</p>
                    <p>
                        <ul>
                            <li>number of requests,</li>
                            <li>requested pages and resources,</li>
                            <li>HTTP status codes,</li>
                            <li>browsers and operating systems,</li>
                            <li>referrers,</li>
                            <li>search engine activity,</li>
                            <li>automated bot or crawler activity.</li>
                        </ul>
                    </p>
                    <p>These statistics are used to maintain and improve the website and to identify technical problems.</p>
                    <p>They are not used to identify or profile individual visitors.</p>

                    <h1>6. Hosting</h1>
                    <p>The website is hosted by <strong>Hetzner Online GmbH</strong>.</p>
                    <p>The hosting provider processes technical data as necessary to provide its hosting infrastructure and related services.</p>
                    <p>For the web hosting service, Hetzner anonymises IP addresses in its web server logs as described in Section 2.</p>
                    <p>Further information about data protection at Hetzner can be found in Hetzner's own privacy documentation.</p>

                    <h1>7. No Advertising or Third-Party Tracking</h1>
                    <p>SimRail-Expert does not currently use:</p>
                    <p>
                        <ul>
                            <li>Google Analytics,</li>
                            <li>Google AdSense,</li>
                            <li>Facebook Pixel,</li>
                            <li>advertising networks,</li>
                            <li>tracking pixels,</li>
                            <li>marketing cookies,</li>
                            <li>third-party analytics services,</li>
                            <li>cross-site tracking technologies.</li>
                        </ul>
                    </p>
                    <p>I do not sell personal data and I do not use the website to create advertising profiles.</p>

                    <h1>8. Data Retention</h1>
                    <p>Technical server logs are retained only for as long as they are required for the purposes described
                        above, such as security, troubleshooting and technical operation.</p>
                    <p>The exact retention period may depend on the respective hosting service and its configuration.</p>
                    <p>Data stored solely in the user's Local Storage remains on the user's device until it is deleted by the user or by the browser.</p>

                    <h1>9. Your Data Protection Rights</h1>
                    <p>
                        The GDPR provides individuals with various rights concerning their personal data, including the right to
                        access, rectification, erasure, restriction of processing and objection.</p>
                    <p>
                        Because SimRail-Expert does not provide user accounts and does not collect names, email addresses or
                        other personal information through the website, I generally do not maintain personal user profiles or
                        identifiable user records.
                    </p>
                    <p>
                        For the website itself, IP addresses in the Hetzner web hosting logs are already partially anonymised by
                        the hosting infrastructure. The statistical reports generated from these logs therefore do not contain
                        the original IP addresses.
                    </p>
                    <p>
                        The API server may temporarily store technical connection information, including IP addresses, in its
                        server logs. If you believe that information relating to you is being processed by the API server and
                        would like to exercise a data protection right, you may contact me using the contact information
                        provided in the Legal Notice.
                    </p>
                    <p>
                        I will handle such requests in accordance with the GDPR. Depending on the nature of the request and
                        the data concerned, I may need sufficient information to determine which data relates to the
                        requesting person.
                    </p>
                    <p>
                        You also have the right to lodge a complaint with a competent data protection supervisory authority if
                        you believe that your personal data is being processed unlawfully.
                    </p>

                    <h1>10. Changes to this Privacy Policy</h1>
                    <p>I may update this Privacy Policy if the technical setup of SimRail-Expert changes or if legal requirements change.</p>
                    <p>The current version of this Privacy Policy is always available on this page.</p>

                    <h2>Last updated: September 2026</h2>
                </section>
            </main>
            {/* <div className={styles.page}>
                <h1 className="privacyPolicy_header">Privacy Policy</h1>
                <div className='privacyPolicy_textContainer'>
                    <p>
                        This website collects anonymous usage statistics to understand how often the website is accessed and to estimate future traffic requirements for planned features and infrastructure improvements.
                    </p>
                    <p>
                        When a page is visited, a temporary anonymous identifier is generated from technical connection information. This identifier cannot be used to identify an individual visitor and is automatically deleted after 24 hours.
                    </p>
                    <p>
                        The collected information is used solely to determine:
                        <ul>
                            <strong>
                                <li>the total number of page views;</li>
                                <li>the approximate number of unique visitors per day;</li>
                                <li>expected traffic volume to help plan future features, server capacity, and infrastructure requirements.</li>
                            </strong>
                        </ul>
                    </p>
                    <p>
                        <b>No cookies</b> are used for analytics.
                    </p>
                    <p>
                        <b>No personal</b> profiles are created.
                    </p>
                    <p>
                        <b>No personal data</b> is intentionally stored beyond what is technically required to process a request.
                    </p>
                    <p>
                        <b>No data is sold or shared</b> with third parties.
                    </p>
                    <p>
                        Anonymous statistics are processed solely for the legitimate interest of monitoring website usage, planning future development, and ensuring the website remains reliable and scalable.`
                    </p>
                </div>
                <div className='backToSRTO'>
                    <button className='backToSRTOButton' onClick={() => navigate('/')}>Back to SRTO ➪</button>
                </div>
            </div> */}
        </>
    )
}