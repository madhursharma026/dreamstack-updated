import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'
import Images9 from "../../media/Turing-Images/turing-images-9.png";

export default function CloudService() {
    return (
        <div className={`py-5 px-md-4 px-3`} style={{background: '#F8F8F8'}}>
        <div className={`${styles.ContainerWidth}`}>
            <div className="row">
                <div className={`col-lg-6 order-lg-2 text-center`} style={{margin: 'auto'}}>
                    <img className='w-100' src={Images9.src} alt="#ImgNotFound" style={{ maxWidth: '410px', maxHeight: "410px" }} />
                </div>
                <div className={`col-lg-6 my-lg-5 py-lg-5 ${styles.tryPocketContent}`}>
                    <h1 className={`${styles.sectionTitle} pt-5`}>Ideal cloud environments for infinite growth</h1>
                    <p className={`${styles.sectionBody}`}>We make accelerating your cloud business growth and innovation easy—no matter what cloud you use. Whether it’s migration or a cloud-native build, we’ve got you covered.</p>
                    <Link href="/" className={`${styles.learnMoreLink} btn btn-primary py-2 px-4 mt-2`} style={{fontSize: '20px'}}>Explore Cloud Service</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
