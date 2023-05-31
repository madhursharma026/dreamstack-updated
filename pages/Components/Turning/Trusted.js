import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'
import Images8 from "../../media/Turing-Images/turing-images-8.png";

export default function Trusted() {
    return (
        <div className={`py-5 px-md-4 px-3 ${styles.ContainerWidth}`}>
            <div className="row">
                <div className={`col-lg-6 text-center`}>
                    <img className='w-100' src={Images8.src} alt="#ImgNotFound" style={{ maxWidth: '410px', maxHeight: "410px" }} />
                </div>
                <div className={`col-lg-6 mt-lg-5 pt-lg-5 ${styles.tryPocketContent}`}>
                    <h1 className={`${styles.sectionTitle} pt-5`}>Trusted AI and machine learning to drive your business</h1>
                    <p className={`${styles.sectionBody}`}>Led by the technology experts who helped build Dreamstack and other successful Silicon Valley firms, you can get intelligent AI implementation that makes an impact in your business.</p>
                    <Link href="/" className={`${styles.learnMoreLink} btn btn-primary py-2 px-4`} style={{fontSize: '20px'}}>Explore AI Service</Link>
                </div>
            </div>
        </div>
    )
}
