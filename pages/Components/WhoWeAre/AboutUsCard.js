import styles from '../../../styles/WhoWeAre/AboutUsCard.module.css';
import Link from 'next/link';

export default function AboutUsCard() {
    return (
        <div className="px-md-4 px-3">
            <div className={`mt-5 ${styles.ContainerWidth}`}>
                <div className={`row ${styles.AboutUsContent}`}>
                    <h5 className={`${styles.headingColor}`} style={{ zIndex: "1" }}>ABOUT US</h5>
                    <div className={`col ${styles.colNo1}`}>
                        <div className={`card ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h6 style={{ fontSize: '14px' }}><b>OUR EMPLOYEES</b></h6>
                                <h1 className="card-title text-primary" style={{ fontSize: '4rem' }}>15+</h1>
                                <p className="card-text">workforce globally distributed highly localized</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo2}`}>
                        <div className={`card ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h6 style={{ fontSize: '14px' }}><b>Custumers</b></h6>
                                <h1 className="card-title text-primary" style={{ fontSize: '4rem' }}>10k</h1>
                                <p className="card-text">Customers building with Dreamstack</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo3}`}>
                        <div className={`card ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h6 style={{ fontSize: '14px' }}><b>Uptime</b></h6>
                                <h1 className="card-title text-primary" style={{ fontSize: '4rem' }}>99.9%</h1>
                                <p className="card-text">Uptime SLA for Droplets and Volumes block storage</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo4}`}>
                        <div className={`card ${styles.cardStyle}`}>
                            <div className="card-body">
                                <h6 style={{ fontSize: '14px' }}><b>DEVELOPMENT</b></h6>
                                <h1 className="card-title text-primary" style={{ fontSize: '4rem' }}>11K</h1>
                                <p className="card-text">employees deep-skilled. 121 hrs of average learning hours per employee per year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
