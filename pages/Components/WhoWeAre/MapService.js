import styles from '../../../styles/WhoWeAre/MapService.module.css';

export default function MapService() {
    return (
        <div className={`px-md-4 px-3 pb-lg-0 pb-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <h2 className={`${styles.subTitle}`}><b>Our Service Map</b></h2>
                <div className="row">
                    <div className="col-sm-6 col-md-4 mt-3">
                        <div className="card h-100" style={{ borderRadius: '0', borderTop: '10px solid black' }}>
                            <div className="card-body">
                                <h4 className="card-title text-center"><b>IT consulting</b></h4>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>In-depth analysis of your IT needs, challenges, and the existing IT ecosystem.</li>
                                    <li>Expert assistance in achieving the goals of IT modernization, IT infrastructure optimization and ongoing management, cloud migration.</li>
                                    <li>Digital transformation of business workflows.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-3">
                        <div className="card h-100" style={{ borderRadius: '0', borderTop: '10px solid black' }}>
                            <div className="card-body">
                                <h4 className="card-title text-center"><b>Software development</b></h4>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>Design, development, and support of enterprise software: web and mobile applications, cloud development, libraries and APIs.</li>
                                    <li>SaaS product development.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-3">
                        <div className="card h-100" style={{ borderRadius: '0', borderTop: '10px solid black' }}>
                            <div className="card-body">
                                <h4 className="card-title text-center"><b>Testing and QA</b></h4>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>Fully managed functional, integration, performance, usability, and security testing of web, mobile, desktop applications, DWHs, and SaaS apps.</li>
                                    <li>ISTQB-certified test engineers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-3">
                        <div className="card h-100" style={{ borderRadius: '0', borderTop: '10px solid black' }}>
                            <div className="card-body">
                                <h4 className="card-title text-center"><b>Application services</b></h4>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>Management of new application implementations: development, integration, ongoing support.</li>
                                    <li>Business application modernization driving the reduction of operational costs and profitability improvement.</li>
                                    <li>Application support and maintenance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-3">
                        <div className="card h-100" style={{ borderRadius: '0', borderTop: '10px solid black' }}>
                            <div className="card-body">
                                <h4 className="card-title text-center"><b>Data analytics</b></h4>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>Data science, big data, business intelligence, data visualization, data management.</li>
                                    <li>Design and implementation of data analytics solutions.</li>
                                    <li>Data Analytics as a Service.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-3">
                        <div className="card h-100" style={{ borderRadius: '0', borderTop: '10px solid black' }}>
                            <div className="card-body">
                                <h4 className="card-title text-center"><b>Infrastructure services</b></h4>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>IT infrastructure optimization for reduced IT spending, improved reliability, and operational improvements.</li>
                                    <li>Ongoing infrastructure management: administration, monitoring, troubleshooting.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-3">
                        <div className="card h-100" style={{ borderRadius: '0', borderTop: '10px solid black' }}>
                            <div className="card-body">
                                <h4 className="card-title text-center"><b>Help Desk services</b></h4>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>Process-based and transparent L1, L2 and L3 support for enterprises, IT product companies, and MSPs.</li>
                                    <li>Result-oriented help desk governed by SLA.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-3">
                        <div className="card h-100" style={{ borderRadius: '0', borderTop: '10px solid black' }}>
                            <div className="card-body">
                                <h4 className="card-title text-center"><b>Cybersecurity services</b></h4>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>Security assessment, testing and patching within the whole IT infrastructure: applications, networks, remote access software.</li>
                                    <li>Vast experience in penetration testing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

