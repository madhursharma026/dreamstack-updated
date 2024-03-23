import styles from '../../../styles/cybersecurity/AdditionalResources.module.css';
import Images29 from "../../media/Cybersecurity-Images/cybersecurity-image-29.png";
import Images30 from "../../media/Cybersecurity-Images/cybersecurity-image-30.png";

export default function AdditionalResources() {
    return (
        <div className={`py-5 text-center px-md-5 px-3`}>
        <div className={`${styles.ContainerWidth}`}>
            <h1 className={`${styles.sectionTitle}`}><b>Additional Resources</b></h1>
            <p className={`${styles.sectionBody}`}>Interested in learning more? Check out some of our helpful resources for more information.</p>
            <div className="row text-center">
                <div className="col-sm-6">
                    <div className='p-lg-4 p-3' style={{ background: '#F0F0F0', height:'100%' }}>
                        <img src={Images29.src} alt="#ImgNotFound" style={{maxWidth:'300px', width:'100%'}} />
                        <p className={`${styles.sectionBody} pt-3`}><b>Ransomware Attacks on the World Stage</b></p>
                        <p className={`${styles.sectionBody} pt-3 px-md-5`}>We have all seen it in the news lately: Critical infrastructure and organizations being hit with ransomware attacks; bringing operations to a screeching halt.</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className='p-lg-4 p-3' style={{ background: '#F0F0F0', height:'100%' }}>
                        <img src={Images30.src} alt="#ImgNotFound" style={{maxWidth:'300px', width:'100%'}} />
                        <p className={`${styles.sectionBody} pt-3`}><b>Website Monitoring: Why It Is Important</b></p>
                        <p className={`${styles.sectionBody} pt-3 px-md-5`}>Slow websites can impact search rankings and conversion rates, while having it go down may result in serious financial or reputational damage.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

