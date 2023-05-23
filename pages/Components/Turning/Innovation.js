import styles from '../../../styles/Turing/Innovation.module.css';

export default function Innovation() {
    return (
        <div className={`px-md-4 px-3 py-lg-0 py-5 mt-5 ${styles.InnovationSection}`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h5 className={`${styles.sectionTitle} pt-lg-5`}>
                    Intelligent innovation led by industry experts
                </h5>
                <h5 className={`${styles.sectionBody}`}> <br />
                    Your modern software engineering challenges deserve modern development methodologies. The right mix of AI, cloud, and application engineering can take you from legacy to industry leader—with the right experts.
                </h5>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <div class="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                            <div class="card-body">
                                <h1>Over 125 years</h1>
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
                    <div className="col-md-6 mt-3">
                        <div class="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                            <div class="card-body">
                                <h1>Over 3 million hours</h1>
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
                <h5 className={`${styles.sectionBody}`}> <br />
                    A comprehensive and customized method that suits your needs. With our IDR (Imagine, Deliver, Run) framework you get exactly what’s best for your business, not our bottom line.
                </h5>
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                            <div class="card-body">
                                <h1>Imagine</h1>
                                <h5 className={`${styles.sectionBody} pt-2`}>
                                    Your goals and challenges, transformed into actionable planning and strategy.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                            <div class="card-body">
                                <h1>Deliver</h1>
                                <h5 className={`${styles.sectionBody} pt-2`}>
                                    White-glove development from the best AI-matched developers from our Talent Cloud.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                            <div class="card-body">
                                <h1>Run</h1>
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

