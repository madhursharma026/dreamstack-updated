import styles from '../../../styles/cybersecurity/OurApproach.module.css';
import Image1 from "../../media/Common-Images/common-image-1.png";
import Image2 from "../../media/Common-Images/common-image-2.png";
import Image3 from "../../media/Common-Images/common-image-3.png";
import Image4 from "../../media/Common-Images/common-image-4.png";

export default function OurApproach() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{ background: '#1E2222' }}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle} text-white`}><b>OUR APPROACH</b></h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <img src={Image4.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Holistic cybersecurity strategy</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <img src={Image3.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Security by design</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <img src={Image2.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Proactive risk mitigation</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <img src={Image1.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Security-as-a-service</b></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
