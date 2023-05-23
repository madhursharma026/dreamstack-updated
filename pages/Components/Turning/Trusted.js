import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'

export default function Trusted() {
    return (
        <div className={`py-5 mt-5 ${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className={`col-md-6 text-center`}>
                    <img className='w-100' src="https://d2mk45aasx86xg.cloudfront.net/AI_Services_f6eae42bac.svg" alt="#ImgNotFound" style={{ maxWidth: '500px', maxHeight: "500px" }} />
                </div>
                <div className={`col-md-6 mt-lg-5 pt-md-5 ${styles.tryPocketContent}`}>
                    <h1 className={`${styles.sectionTitle} pt-5`}>Trusted AI and machine learning to drive your business</h1>
                    <p className={`${styles.sectionBody}`}>Led by the technology experts who helped build Dreamstack and other successful Silicon Valley firms, you can get intelligent AI implementation that makes an impact in your business.</p>
                    <Link href="/" className={`${styles.learnMoreLink} btn btn-primary`}>Explore AI Service</Link>
                </div>
            </div>
        </div>
    )
}
