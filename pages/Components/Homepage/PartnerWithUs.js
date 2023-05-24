import styles from '../../../styles/Homepage/PartnerWithUs.module.css'
import Image12 from "../../media/Homepage-Images/homepage-image-12.png";
import Image13 from "../../media/Homepage-Images/homepage-image-13.png";
import Image14 from "../../media/Homepage-Images/homepage-image-14.png";
import Image15 from "../../media/Homepage-Images/homepage-image-15.png";

export default function PartnerWithUs() {
    return (
        <div className={`${styles.bodyContainer} p-0 px-md-4 px-3`}>
            <div className={`py-5 ${styles.ContainerWidth} text-white`}>
                <h2 className={`${styles.subTitle}`}>Partner with us</h2>
                <p className={`${styles.subBody}`}>Help fund, shape, and expand Dreamstack work toward a healthy internet and trustworthy AI.</p>
                <img src={Image12.src} alt="#ImgNotFound" className='my-3' style={{ marginRight: "15px" }} width="170px" height="70px" />
                <img src={Image13.src} alt="#ImgNotFound" className='m-3' width="170px" height="70px" />
                <img src={Image14.src} alt="#ImgNotFound" className='m-3' width="115px" height="70px" />
                <img src={Image15.src} alt="#ImgNotFound" className='m-3' width="170px" height="70px" />
            </div>
        </div >
    )
}

