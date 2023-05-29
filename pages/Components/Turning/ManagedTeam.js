import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'
import Images14 from "../../media/Turing-Images/turing-images-14.png";

export default function ManagedTeam() {
    return (
        <div className={`py-5`} style={{ background: '#F8F8F8' }}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row px-3">
                    <div className={`col-lg-6 order-lg-2 text-center`} style={{ margin: 'auto' }}>
                        <img className='w-100' src={Images14.src} alt="#ImgNotFound" style={{ maxWidth: '410px', maxHeight: "410px" }} />
                    </div>
                    <div className={`col-lg-6 my-lg-5 py-lg-5 ${styles.tryPocketContent}`}>
                        <h1 className={`${styles.sectionTitle} pt-5`}>Customized teams for any solution challenge</h1>
                        <p className={`${styles.sectionBody}`}>Have specific project needs beyond our existing services? No problem. Dreamstack can build a dedicated development team to deliver your solution.</p>
                        <Link href="/" className={`${styles.learnMoreLink} btn btn-primary py-2 px-4`} style={{fontSize: '20px'}}>Explore Managed Team</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
