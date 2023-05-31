import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'
import Images10 from "../../media/Turing-Images/turing-images-10.png";

export default function Applications() {
    return (
        <div className={`py-5 px-md-4 px-3 ${styles.ContainerWidth}`}>
            <div className="row">
                <div className={`col-lg-6 text-center`}>
                    <img className='w-100' src={Images10.src} alt="#ImgNotFound" style={{ maxWidth: '420px', maxHeight: "420px" }} />
                </div>
                <div className={`col-lg-6 mt-lg-5 ${styles.tryPocketContent}`}>
                    <h1 className={`${styles.sectionTitle} pt-5`}>Applications as resilient as your business</h1>
                    <p className={`${styles.sectionBody}`}>Take your legacy applications to the next level. Thanks to our faultless migration and development pipeline you walk away with a build you can trust.</p>
                    <Link href="/" className={`${styles.learnMoreLink} btn btn-primary py-2 px-4 mt-2`} style={{fontSize: '20px'}}>Explore Application Engineering Services</Link>
                </div>
            </div>
        </div>
    )
}
