import styles from '../../../styles/DataAndAnalytics/Section2.module.css';
import Images11 from "../../media/WhoWeAre-Images/WhoWeAre-image-11.jpeg";

export default function Investors() {
    return (
        <div className={`px-md-4 px-3 py-md-5 pb-lg-0 pb-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className="col-lg-6 p-lg-5 pt-5 text-center">
                        <img src={Images11.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5" style={{ margin: 'auto' }}>
                        <div className={`${styles.sectionBody}`}>
                            <h6><b>INVESTORS</b></h6>
                            <h1 className={`${styles.sectionTitle}`}>Positioned for long-term sustainable growth</h1>
                            <p className={`${styles.sectionContent}`}>Dreamstack is seen as a benchmark in its outreach to investors, in its transparency and disclosures, publicly communicating its strategy, risks and opportunities, reducing information asymmetries and enabling fair valuation of the company.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

