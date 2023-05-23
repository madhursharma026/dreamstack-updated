import Link from 'next/link'
import styles from '../../../styles/Homepage/productivity.module.css'

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
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-time-preview@2x-9ca60c5ec00a053c4d5e7802672a49d5e1ee743a09ebd19b1bbeb99556aa2548.webp" class="card-img-top" alt="#ImgNotFound" />
                                        <div class="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Cloud Computing</h1>
                                            <p class="card-text">Simple time tracking and reporting</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-3 p-3">
                                <Link href="/DataAndAnalytics" className={styles.cardLinkStyle}>
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-desk-preview@2x-66395c1d29d70e469199444aae7e27fa943cd45f51cac6d02a6e8925c71ebe54.webp" class="card-img-top" alt="#ImgNotFound" />
                                        <div class="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Data & Analytic</h1>
                                            <p class="card-text">Proof of work, time tracking, and team management</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-3 p-3">
                                <Link href="/cybersecurity" className={styles.cardLinkStyle}>
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-field-preview@2x-9f92568bb227eb485d612fef8afd596365fb8d362987747640bee7d6db549693.webp" class="card-img-top" alt="#ImgNotFound" />
                                        <div class="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Cybersecurity</h1>
                                            <p class="card-text">GPS location tracking and team management</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mt-3 p-3">
                                <Link href="/enterprise" className={styles.cardLinkStyle}>
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-tasks-preview@2x-3fb59de926dab88560b009602540409f7367a4a5b3def88a4763b6f35da2e7bc.webp" class="card-img-top" alt="#ImgNotFound" />
                                            </div>
                                            <div className="col-8 pt-3">
                                                <h1 className={`${styles.sectionHeading}`}>Enterprise solution</h1>
                                                <p class="card-text">Simple, Agile project management for productive teams of all sizes</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mt-3 p-3">
                                <Link href="/blockchain" className={styles.cardLinkStyle}>
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-talent-preview@2x-6eaf597033fa43832a3da12e1c204de1765414d6abc0d339d07bae947b925567.webp" class="card-img-top" alt="#ImgNotFound" />
                                            </div>
                                            <div className="col-8 pt-3">
                                                <h1 className={`${styles.sectionHeading}`}>Blockchain</h1>
                                                <p class="card-text">The free and easy way to find remote talent across the world</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className={`${styles.cardBeforeMDScrn} px-3`} style={{ maxWidth: "600px", margin: "auto" }}>
                            <div class="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-time-preview@2x-9ca60c5ec00a053c4d5e7802672a49d5e1ee743a09ebd19b1bbeb99556aa2548.webp" class="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Cloud Computing</h1>
                                        <p class="card-text">Simple time tracking and reporting</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-desk-preview@2x-66395c1d29d70e469199444aae7e27fa943cd45f51cac6d02a6e8925c71ebe54.webp" class="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Data & Analytic</h1>
                                        <p class="card-text">Proof of work, time tracking, and team management</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-field-preview@2x-9f92568bb227eb485d612fef8afd596365fb8d362987747640bee7d6db549693.webp" class="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Cybersecurity</h1>
                                        <p class="card-text">GPS location tracking and team management</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-tasks-preview@2x-3fb59de926dab88560b009602540409f7367a4a5b3def88a4763b6f35da2e7bc.webp" class="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Enterprise solution</h1>
                                        <p class="card-text">Simple, Agile project management for productive teams of all sizes</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card h-100 mt-3" style={{ border: '0' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-talent-preview@2x-6eaf597033fa43832a3da12e1c204de1765414d6abc0d339d07bae947b925567.webp" class="card-img-top" alt="#ImgNotFound" />
                                    </div>
                                    <div className="col-8 pt-3">
                                        <h1 className={`${styles.sectionHeading}`}>Blockchain</h1>
                                        <p class="card-text">The free and easy way to find remote talent across the world</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={`${styles.cardAfterMDScrn} px-3`}>
                            <div className="row">
                                <div className="col-lg-4 mt-3">
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-time-preview@2x-9ca60c5ec00a053c4d5e7802672a49d5e1ee743a09ebd19b1bbeb99556aa2548.webp" class="card-img-top" alt="#ImgNotFound" />
                                        <div class="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Cloud Computing</h1>
                                            <p class="card-text">Simple time tracking and reporting</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-desk-preview@2x-66395c1d29d70e469199444aae7e27fa943cd45f51cac6d02a6e8925c71ebe54.webp" class="card-img-top" alt="#ImgNotFound" />
                                        <div class="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Data & Analytic</h1>
                                            <p class="card-text">Proof of work, time tracking, and team management</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-field-preview@2x-9f92568bb227eb485d612fef8afd596365fb8d362987747640bee7d6db549693.webp" class="card-img-top" alt="#ImgNotFound" />
                                        <div class="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Cybersecurity</h1>
                                            <p class="card-text">GPS location tracking and team management</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-tasks-preview@2x-3fb59de926dab88560b009602540409f7367a4a5b3def88a4763b6f35da2e7bc.webp" class="card-img-top" alt="#ImgNotFound" />
                                        <div class="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Enterprise solution</h1>
                                            <p class="card-text">Simple, Agile project management for productive teams of all sizes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div class="card h-100" style={{ border: '0' }}>
                                        <img src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-talent-preview@2x-6eaf597033fa43832a3da12e1c204de1765414d6abc0d339d07bae947b925567.webp" class="card-img-top" alt="#ImgNotFound" />
                                        <div class="card-body px-3 py-3">
                                            <h1 className={`${styles.sectionHeading}`}>Blockchain</h1>
                                            <p class="card-text">The free and easy way to find remote talent across the world</p>
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

