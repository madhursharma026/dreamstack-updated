import styles from '../../../styles/Turing/Innovation.module.css';

export default function Innovation() {
    return (
        <div className={`px-md-4 px-3 py-lg-0 py-5 mt-lg-5 mt-0 pb-lg-5 pb-5 ${styles.InnovationSection}`}>
            <div className={`${styles.ContainerWidth} py-lg-4 py-3`}>
                <h5 className={`${styles.sectionTitle} pt-lg-5`}>
                    Intelligent innovation led by industry experts
                </h5>
                <h5 className={`${styles.sectionBody}`}> 
                    Your modern software engineering challenges deserve modern development methodologies. The right mix of AI, cloud, and application engineering can take you from legacy to industry leader—with the right experts.
                </h5>
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <div className="card h-100" style={{ background: 'transparent', border: '1px solid white' }}>
                            <div className="card-body">
                                <h1><b>Over 125 years</b></h1>
                                <h5 className={`${styles.sectionBody} pt-2`}>
                                    of combined experience <br />
                                    building world-class tech solutions at leading <br />
                                    companies including <br />
                                    <br />
                                    Google | Meta | Microsoft | LinkedIn | Dreamstack <br />
                                    Accenture | Wipro | Capgemini | Cognizent | IBM <br />
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="card h-100" style={{ background: 'transparent', border: '1px solid white' }}>
                            <div className="card-body">
                                <h1><b>Over 3 million hours</b></h1>
                                <h5 className={`${styles.sectionBody} pt-2`}>
                                    of services work delivered <br />
                                    for clients across several industries including <br />
                                    <br />
                                    Finserve | Healthcare | Automotive | Retail | Tech <br />
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className={`${styles.sectionTitle} pt-5`}>
                    A better way to imagine, deliver, and run your technology solutions
                </h5>
                <h5 className={`${styles.sectionBody}`}>
                    A comprehensive and customized method that suits your needs. With our IDR (Imagine, Deliver, Run) framework you get exactly what’s best for your business, not our bottom line.
                </h5>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className="card h-100" style={{ background: 'transparent', border: '1px solid white' }}>
                            <div className="card-body">
                                <h1><b>Imagine</b></h1>
                                <h5 className={`${styles.sectionBody} pt-2`}>
                                    Your goals and challenges, transformed into actionable planning and strategy.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className="card h-100" style={{ background: 'transparent', border: '1px solid white' }}>
                            <div className="card-body">
                                <h1><b>Deliver</b></h1>
                                <h5 className={`${styles.sectionBody} pt-2`}>
                                    White-glove development from the best AI-matched developers from our Talent Cloud.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3">
                        <div className="card h-100" style={{ background: 'transparent', border: '1px solid white' }}>
                            <div className="card-body">
                                <h1><b>Run</b></h1>
                                <h5 className={`${styles.sectionBody} pt-2`}>
                                    We’ll handle the ongoing maintenance and support for as long as you need.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

