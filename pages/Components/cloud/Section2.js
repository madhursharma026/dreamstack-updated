import styles from '../../../styles/DataAndAnalytics/Section2.module.css';
import Image2 from "../../media/Cloud-Images/cloud-image-2.png";

export default function Section2() {
    return (
        <div className={`px-md-4 px-3 py-md-5 pb-lg-0 pb-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className="col-lg-6 p-lg-5 pt-5" style={{ margin: 'auto' }}>
                        <div className={`${styles.sectionBody}`}>
                            <h1 className={`${styles.sectionContent}`}>Strategy to scale</h1>
                            <p className={`${styles.sectionContent}`}>Your company has a unique purpose and growth journey. That's why you need a distinct cloud strategy to take advantage of breakthrough technologies, scale rapidly, and seize emerging opportunities. Dreamstack can help you drive business value, build resilience, and advance your goals of transformation, adaptation, and innovation for a reimagined future.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5 text-center">
                        <img src={Image2.src} alt="#ImgNotFound" style={{width:'100%'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
