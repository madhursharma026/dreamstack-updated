import styles from '../../../styles/cybersecurity/Services.module.css';

export default function Capabilities() {

    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth}`}>
                <p className={`${styles.sectionBody}`}>Our capabilities</p>
                <div className="row">
                    <div className="col-md-6">
                        <ul className='p-4' style={{ background: "#F4F3F9", marginRight: "5px", listStyleType:"none" }}>
                            <li className={`${styles.sectionBody}`}>Advisory and consulting</li>
                            <li className={`${styles.sectionBody}`}>Analytics and visualization</li>
                            <li className={`${styles.sectionBody}`}>Customer experience</li>
                            <li className={`${styles.sectionBody}`}>Digital field service management</li>
                            <li className={`${styles.sectionBody}`}>Digital performance management</li>
                            <li className={`${styles.sectionBody}`}>Enterprise integration</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className='p-4' style={{ background: "#F4F3F9", marginLeft: '5px', listStyleType:"none" }}>
                            <li className={`${styles.sectionBody}`}>Finance performance management</li>
                            <li className={`${styles.sectionBody}`}>Human capital management</li>
                            <li className={`${styles.sectionBody}`}>Sales performance management</li>
                            <li className={`${styles.sectionBody}`}>Strategy</li>
                            <li className={`${styles.sectionBody}`}>Supply chain management</li>
                            <li className={`${styles.sectionBody}`}>Transformation support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

