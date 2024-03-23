import Link from 'next/link';
import Image7 from "../../media/Homepage-Images/homepage-image-7.png";
import Image8 from "../../media/Homepage-Images/homepage-image-8.png";
import Image9 from "../../media/Homepage-Images/homepage-image-9.png";
import styles from '../../../styles/Homepage/productivity.module.css';
import Image10 from "../../media/Homepage-Images/homepage-image-10.png";
import Image11 from "../../media/Homepage-Images/homepage-image-11.png";

export default function Productivity() {
    return (
        <div className={`${styles.greenRightTopCorner}`} style={{ background: "#253053" }}>
            <div className={`${styles.orangeLeftTopCorner}`}>
                <div className={`py-5 ${styles.blueLeftBottomCorner}`}>
                    <div className={`pt-lg-5 ${styles.ContainerWidth}`}>
                        <h1 className={`${styles.sectionTitle} text-center text-white`}>The productivity platform</h1>
                        <p className={`${styles.sectionBody} py-3 text-center text-white`}>The complete platform for time tracking, workforce and project management.</p>
                        <div className={`row ${styles.cardBeforeLGScrn}`} style={{ maxWidth: '1200px', margin: "auto" }}>
                            <div className="col-lg-4 mt-3 p-3">
                                <Link href="/cloud" className={styles.cardLinkStyle}>
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <img src={Image7.src} className="card-img-top" alt="#ImgNotFound" />
                                        <div className="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Cloud Computing</h1>
                                            <p className="card-text">Simple time tracking and reporting</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-3 p-3">
                                <Link href="/DataAndAnalytics" className={styles.cardLinkStyle}>
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <img src={Image8.src} className="card-img-top" alt="#ImgNotFound" />
                                        <div className="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Data & Analytic</h1>
                                            <p className="card-text">Proof of work, time tracking, and team management</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-3 p-3">
                                <Link href="/cybersecurity" className={styles.cardLinkStyle}>
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <img src={Image9.src} className="card-img-top" alt="#ImgNotFound" />
                                        <div className="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Cybersecurity</h1>
                                            <p className="card-text">GPS location tracking and team management</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mt-3 p-3">
                                <Link href="/enterprise" className={styles.cardLinkStyle}>
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Image10.src} className="card-img-top" alt="#ImgNotFound" />
                                            </div>
                                            <div className="col-8 pt-3">
                                                <h1 className={`${styles.sectionHeading}`}>Enterprise solution</h1>
                                                <p className="card-text">Simple, Agile project management for productive teams of all sizes</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mt-3 p-3">
                                <Link href="/blockchain" className={styles.cardLinkStyle}>
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={Image11.src} className="card-img-top" alt="#ImgNotFound" />
                                            </div>
                                            <div className="col-8 pt-3">
                                                <h1 className={`${styles.sectionHeading}`}>Blockchain</h1>
                                                <p className="card-text">The free and easy way to find remote talent across the world</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className={`${styles.cardBeforeMDScrn} px-3`} style={{ maxWidth: "600px", margin: "auto" }}>
                            <div className="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={Image7.src} className="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Cloud Computing</h1>
                                        <p className="card-text">Simple time tracking and reporting</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={Image8.src} className="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Data & Analytic</h1>
                                        <p className="card-text">Proof of work, time tracking, and team management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={Image9.src} className="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Cybersecurity</h1>
                                        <p className="card-text">GPS location tracking and team management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={Image10.src} className="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Enterprise solution</h1>
                                        <p className="card-text">Simple, Agile project management for productive teams of all sizes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={Image11.src} className="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Blockchain</h1>
                                        <p className="card-text">The free and easy way to find remote talent across the world</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={`${styles.cardAfterMDScrn} px-3`}>
                            <div className="row">
                                <div className="col-lg-4 mt-3">
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <img src={Image7.src} className="card-img-top" alt="#ImgNotFound" />
                                        <div className="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Cloud Computing</h1>
                                            <p className="card-text">Simple time tracking and reporting</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <img src={Image8.src} className="card-img-top" alt="#ImgNotFound" />
                                        <div className="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Data & Analytic</h1>
                                            <p className="card-text">Proof of work, time tracking, and team management</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <img src={Image9.src} className="card-img-top" alt="#ImgNotFound" />
                                        <div className="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Cybersecurity</h1>
                                            <p className="card-text">GPS location tracking and team management</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <img src={Image10.src} className="card-img-top" alt="#ImgNotFound" />
                                        <div className="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Enterprise solution</h1>
                                            <p className="card-text">Simple, Agile project management for productive teams of all sizes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div className="card h-100" style={{ border: '0' }}>
                                        <img src={Image11.src} className="card-img-top" alt="#ImgNotFound" />
                                        <div className="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Blockchain</h1>
                                            <p className="card-text">The free and easy way to find remote talent across the world</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

