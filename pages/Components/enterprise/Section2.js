import styles from '../../../styles/DataAndAnalytics/Section2.module.css';
import Images2 from "../../media/Enterprise-Images/enterprise-image-2.jpeg";

export default function Section2() {
    return (
        <div className={`px-md-4 px-3 py-md-5 pb-lg-0 pb-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className="col-lg-6 p-lg-5 pt-5" style={{ margin: 'auto' }}>
                        <div className={`${styles.sectionBody}`}>
                            <h1 className={`${styles.sectionTitle}`}>Partnering for success</h1>
                            <p className={`${styles.sectionContent}`}>Enterprise applications are the backbone of businesses today. Digital transformation requires a holistic approach with intelligent solutions from a range of ecosystem partners. </p>
                        </div>
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5 text-center">
                        <img src={Images2.src} alt="#ImgNotFound"  className={`${styles.imgWidth}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
