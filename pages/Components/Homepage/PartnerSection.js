import styles from '../../../styles/Homepage/PartnerSection.module.css'

export default function PartnerSection() {
    return (
        <div className={`pt-3 my-md-5 my-3 ${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className="col-md-3 ">
                    <p className={`${styles.subHeading}`}>Meet our Tech Partners</p>
                    <p className={`${styles.subBody}`}>Our Association with Top Ventures</p>
                </div>
                <div className="col-md-9 row">
                    <div className={`col-sm col-6 text-center`}>
                        <div className={`${styles.logoStyle} w-100 pb-0`}>
                            <img src="https://www.nanostuffs.com/img/gold-consulting-partner-nanostuffs.png" alt="#ImgNotFound" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                            <p className={`${styles.imageInfo}`}>Salesforce Ridge(Silver) <br /> Consulting Partner</p>
                        </div>
                    </div>
                    <div className={`col-sm col-6 text-center`}>
                        <div className={`${styles.logoStyle} w-100 pb-0`}>
                            <img src="https://www.omi.co/wp-content/uploads/2017/12/2015_sfdc_dev_user_official_badge_registered_ISV_Partner_light_RGB_1.0.png" alt="#ImgNotFound" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                            <p className={`${styles.imageInfo}`}>ISV Salesforce <br /> Partner</p>
                        </div>
                    </div>
                    <div className={`col-sm col-6 text-center`}>
                        <div className={`${styles.logoStyle} w-100 pb-1`}>
                            <img src="https://www.grandviewcorp.com/wp-content/uploads/2021/09/red-hat.png" alt="#ImgNotFound" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                        </div>
                    </div>
                    <div className={`col-sm col-6 text-center`}>
                        <div className={`${styles.logoStyle} w-100`}>
                            <img src="https://smartmeasures.ai/images/Pledge1_ProudMember_Large_Landscape.jpg" alt="#ImgNotFound" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                        </div>
                    </div>
                    <div className={`col-6 offset-3 offset-sm-0 col-sm text-center`}>
                        <div className={`${styles.logoStyle} w-100`}>
                            <img src="https://www.nicepng.com/png/full/253-2530279_download-svg-or-png-odoo-gold-partner.png" alt="#ImgNotFound" className={`w-100 px-lg-3 ${styles.logoSize}`} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}
