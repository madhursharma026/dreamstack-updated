import Link from 'next/link';
import Image1 from "../../media/Cloud-Images/cloud-image-1.jpeg";
import styles from '../../../styles/Homepage/IntroSection.module.css';

export default function Section1() {
    return (
        <div className={`p-0 mt-5`}>
            <div style={{ background: '#2A416B' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className={`row`}>
                        <div className={`col-lg-6 order-lg-2`}>
                            <img src={Image1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} />
                        </div>
                        <div className={`col-lg-6 mt-lg-5 py-lg-5`}>
                            <div className={`${styles.rightSide} py-5 px-md-4 px-3`}>
                            <h5 className={`text-white ${styles.sectionBody} pt-2`}><b>SERVICES / CLOUD</b></h5>
                                <hr style={{ height: '2px', background: 'white' }} />
                                <h1 className={`${styles.sectionTitle} text-white`}>Your cloud, your journey</h1>
                                <Link href="/" className={`${styles.letsTalk}`}><b>Let's Talk</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}