import styles from '../../../styles/Solution/Section1.module.css';

export default function Section1() {
    return (
        <>
            <div className={`p-0 mt-5`}>
                <div className="bg-primary">
                    <div className={`${styles.ContainerWidth}`}>
                        <div className={`row`}>
                            <div className={`col-lg-6 order-lg-2`}>
                                <img src="https://a.storyblok.com/f/172398/221433c541/development-industry-desktop-2x.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} />
                            </div>
                            <div className={`col-lg-6`}>
                                <div className={`py-lg-5 pb-5 ${styles.rightSide} px-md-4 px-3`}>
                                    <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}><b>End the timesheet battle with simpler agency time trackingg</b></h1>
                                    <button type="button" class={`btn ${styles.openPositionBtn}`} style={{ marginRight: "10px" }}>View open positions</button>
                                    <button type="button" class={`btn ${styles.salesBtn}`} style={{ marginLeft: "10px" }}>Talk to sales</button>
                                    <p className='mt-4 text-white'>No credit card required. <br className={`${styles.BRTagAfterMDScrn}`} /> Available for: <img src="https://marketing-assets-cms.hubstaff.com/public/images/logos/apple-mark-white.svg" alt="#ImgNotFound" /> &ensp; <img src="https://marketing-assets-cms.hubstaff.com/public/images/logos/android-mark-white.svg" alt="#ImgNotFound" /></p>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="https://hubstaff.com/images/logos/capterra-white.svg" alt="#ImgNotFound" />
                                            <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                        <div className="col-lg-4">
                                            <img src="https://hubstaff.com/images/logos/g2-white.svg" alt="#ImgNotFound" />
                                            <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`py-5 my-5 ${styles.ContainerWidth}`}>
                    <div className="mx-xl-5 px-xl-5">
                        <div className="row">
                            <div className="col-4 text-center">
                                <span style={{ fontSize: "36px" }}>📄</span>
                                <p className={`${styles.sectionBody}`}><b>Automated timesheets for agencies</b></p>
                            </div>
                            <div className="col-4 text-center">
                                <span style={{ fontSize: "36px" }}>📄</span>
                                <p className={`${styles.sectionBody}`}><b>Track costs and project profitability with budgets</b></p>
                            </div>
                            <div className="col-4 text-center">
                                <span style={{ fontSize: "36px" }}>📄</span>
                                <p className={`${styles.sectionBody}`}><b>Streamlined payroll and invoicing</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

