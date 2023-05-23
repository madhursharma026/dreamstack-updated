import styles from '../../../styles/cybersecurity/SecurityRisk.module.css';

export default function SecurityRisk() {
    return (
        <div className={`${styles.bodyContainer} px-md-4 px-3`}>
            <div className={`py-5 mt-5 ${styles.ContainerWidth}`}>
                <h5 className='text-primary'>REDUCE YOUR WEBSITE SECURITY RISKS</h5>
                <h3 className='pt-3'><b>Get started with SiteLock today</b></h3>
                <p className={`${styles.sectionBody}`}>Automatically protect your website, reputation and visitors against both common threats and advanced attacks.</p>
            </div>
        </div >
    )
}

