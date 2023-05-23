import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'

export default function CloudService() {
    return (
        <div className={`py-5 mt-5`} style={{background: '#F8F8F8'}}>
        <div className={`${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className={`col-md-6 order-md-2 text-center`} style={{margin: 'auto'}}>
                    <img className='w-100' src="https://d2mk45aasx86xg.cloudfront.net/Cloud_Services_c856668115.svg" alt="#ImgNotFound" style={{ maxWidth: '500px', maxHeight: "500px" }} />
                </div>
                <div className={`col-md-6 my-lg-5 py-md-5 ${styles.tryPocketContent}`}>
                    <h1 className={`${styles.sectionTitle} pt-5`}>Ideal cloud environments for infinite growth</h1>
                    <p className={`${styles.sectionBody}`}>We make accelerating your cloud business growth and innovation easy—no matter what cloud you use. Whether it’s migration or a cloud-native build, we’ve got you covered.</p>
                    <Link href="/" className={`${styles.learnMoreLink} btn btn-primary`}>Explore Cloud Service</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
