import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'

export default function ManagedTeam() {
    return (
        <div className={`py-5 mt-5`} style={{ background: '#F8F8F8' }}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row px-3">
                    <div className={`col-md-6 order-md-2 text-center`} style={{ margin: 'auto' }}>
                        <img className='w-100' src="https://d2mk45aasx86xg.cloudfront.net/Cloud_Services_c856668115.svg" alt="#ImgNotFound" style={{ maxWidth: '500px', maxHeight: "500px" }} />
                    </div>
                    <div className={`col-md-6 my-lg-5 py-md-5 ${styles.tryPocketContent}`}>
                        <h1 className={`${styles.sectionTitle} pt-5`}>Customized teams for any solution challenge</h1>
                        <p className={`${styles.sectionBody}`}>Have specific project needs beyond our existing services? No problem. Dreamstack can build a dedicated development team to deliver your solution.</p>
                        <Link href="/" className={`${styles.learnMoreLink} btn btn-primary`}>Explore Managed Team</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
