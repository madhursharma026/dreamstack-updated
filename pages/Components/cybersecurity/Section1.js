import Link from 'next/link';
import cyberSecurityImg from "../../media/cybersecurity.jpeg";
import styles from '../../../styles/Homepage/IntroSection.module.css';

export default function IntroSection() {
    return (
        <div className={`p-0 mt-5`}>
            <div style={{ background: '#B20000' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className={`row`}>
                        <div className={`col-lg-6 order-lg-2`}>
                            <img src={cyberSecurityImg.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} />
                        </div>
                        <div className={`col-lg-6 mt-lg-5 py-lg-5`}>
                            <div className={`${styles.rightSide} py-5 px-md-4 px-3`}>
                                <h5 className={`text-white ${styles.sectionBody} pt-2`}><b>SERVICES / CYBERSECURITY</b></h5>
                                <hr style={{ height: '2px', background: 'white' }} />
                                <h1 className={`${styles.sectionTitle} text-white`}>Lead with cyber confidence</h1>
                                <Link href="/" className={`${styles.letsTalk}`}><b>Let's Talk</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


