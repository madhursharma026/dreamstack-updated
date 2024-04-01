import styles from '../../../styles/Blockchain/ConsultingServices.module.css';

export default function ConsultingServices() {
    return (
        <div className={`${styles.bodyContainer}`}>
        <div className={`px-md-4 px-3`}>
            <div className={`py-5 mt-5 ${styles.ContainerWidth}`}>
                <h1 className={`${styles.sectionTitle}`}><b>Make a Smart Shift with Our Blockchain Consulting Services</b></h1>
                <br />
                <p className={`${styles.h4CustomFont}`}>Having great expertise across all blockchain platforms, Ethereum, Corda, Quorum, and Hyperledger, our consultants will shape your ideas into viable use cases and suggest product modernization as part of our initial blockchain strategy consulting services</p>
                <div className="row">
                    <div className="col-md-6 col-xl-3 mt-3">
                        <div className="card w-100 p-3 h-100 text-white" style={{ background: '#31BBAE', border: '0', borderRadius: '0' }}>
                            <div className="card-body text-center">
                                <p className={`${styles.h3CustomFont} card-title`}><b>Blockchain Audit</b></p>
                                <p className={`${styles.customFont} card-text`}>Get the support of high-value transactions for your business with a blockchain security audit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mt-3">
                        <div className="card w-100 p-3 h-100 text-white" style={{ background: '#31BBAE', border: '0', borderRadius: '0' }}>
                            <div className="card-body text-center">
                                <p className={`${styles.h3CustomFont} card-title`}><b>Blockchain Strategy</b></p>
                                <p className={`${styles.customFont} card-text`}>Analyze the potential of blockchain for your enterprise with real-world applications</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mt-3">
                        <div className="card w-100 p-3 h-100 text-white" style={{ background: '#31BBAE', border: '0', borderRadius: '0' }}>
                            <div className="card-body text-center">
                                <p className={`${styles.h3CustomFont} card-title`}><b>Blockchain Security</b></p>
                                <p className={`${styles.customFont} card-text`}>Eliminate attacks and frauds using cybersecurity frameworks for a blockchain network</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mt-3">
                        <div className="card w-100 p-3 h-100 text-white" style={{ background: '#31BBAE', border: '0', borderRadius: '0' }}>
                            <div className="card-body text-center">
                                <p className={`${styles.h3CustomFont} card-title`}><b>Custom Blockchain</b></p>
                                <p className={`${styles.customFont} card-text`}>Solve specific business challenges tailored to your needs with blockchain implementation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
