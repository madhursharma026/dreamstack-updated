import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';

export default function Section1() {
    return (
        <div className={`p-0 mt-5`}>
            <div className={styles.videoBackground}>
                <video className={styles.video} autoPlay loop muted playsInline>
                    <source src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-ban.mp4?auto=compress%2Cformat&fit=min&q=80" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={`${styles.content} ${styles.makingFontLessBoldAfterSMScrn}`}>
                    <div style={{ background: 'rgba(5,55,85,0.82)', paddingTop: '70px', paddingBottom: '70px' }}>
                        <div className={`${styles.ContainerWidth} ${styles.Section1}`}>
                            <div className="row py-lg-5 my-lg-5 px-lg-4">
                                <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                                    <h4 className={`text-white ${styles.h4CustomFont}`}>About Us</h4>
                                    <h1 className={`${styles.sectionTitle} pt-3 text-white`}>For more than 25 years, we've been bucking Silicon Valley trends, taking our own approach to building products.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

