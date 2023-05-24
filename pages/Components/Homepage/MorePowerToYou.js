import Link from 'next/link'
import Image6 from "../../media/Homepage-Images/homepage-image-6.png";
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'

export default function MorePowerToYou() {
    return (
            <div className={`py-5 mt-5 ${styles.ContainerWidth}`}>
                <div className="row px-3 text-center">
                    <div className={`col-md-6`}>
                        <img className='w-100' src={Image6.src} alt="Dreamstack" style={{ maxWidth: '500px', maxHeight: "500px" }} />
                    </div>
                    <div className={`col-md-6 mt-lg-5 pt-md-5 ${styles.tryPocketContent}`}>
                        <h1 className={`${styles.sectionTitle} pt-5`}>Tired of traditional recruiting to hire software developers?</h1>
                        <p className={`${styles.sectionBody}`}>Hire senior pre-vetted remote developers with strong technical and communication skills at unbeatable prices, ready to work in your timezone.</p>
                        <Link href="/WhoWeAre" className={`${styles.learnMoreLink}`}>Learn more about us</Link>
                    </div>
                </div>
            </div>
    )
}
