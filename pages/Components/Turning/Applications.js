import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'
import Images10 from "../../media/Turing-Images/turing-images-10.png";

export default function Applications() {
    return (
        <div className={`py-5 mt-5 ${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className={`col-md-6 text-center`}>
                    <img className='w-100' src={Images10.src} alt="#ImgNotFound" style={{ maxWidth: '500px', maxHeight: "500px" }} />
                </div>
                <div className={`col-md-6 mt-lg-5 pt-md-5 ${styles.tryPocketContent}`}>
                    <h1 className={`${styles.sectionTitle} pt-5`}>Applications as resilient as your business</h1>
                    <p className={`${styles.sectionBody}`}>Take your legacy applications to the next level. Thanks to our faultless migration and development pipeline you walk away with a build you can trust.</p>
                    <Link href="/" className={`${styles.learnMoreLink} btn btn-primary`}>Explore Application Engineering Services</Link>
                </div>
            </div>
        </div>
    )
}
