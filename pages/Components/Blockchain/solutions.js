import styles from '../../../styles/Blockchain/Solutions.module.css';
import Images6 from "../../media/Blockchain-Images/blockchain-image-6.jpg";

export default function Solutions() {
    return (
        <>
            <div className={`${styles.bodyContainer} py-5`}>
                <div className="px-md-4 px-3">
                    <div className={`py-5 ${styles.ContainerWidth}`}>
                        <div className="row">
                            <div className="col-lg-4">
                                <img style={{ width: '100%', margin: 'auto' }} className={styles.imgStyle} src={Images6.src} alt="" />
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <h1 className={`${styles.sectionTitle} px-4`}><b>Our Custom Blockchain Solutions for All Types of Enterprises</b></h1>
                                    <br />
                                    <h4 className={`${styles.sectionBody} px-4`}>Our time-tested experience in custom blockchain development solutions delivers secure and robust blockchain applications for enterprises from various industries</h4>
                                    <div className="col-md-6 mt-3">
                                        <div className="card w-100 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                            <div className="card-body">
                                                <h3 className="card-title"><b>Corda Development</b></h3>
                                                <p className="card-text" style={{ fontSize: '20px' }}>
                                                    Corda is an open-source distributed ledger technology that uses Consensus Time, Hashgraphs, and Stamping to reduce expensive friction in business transactions
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div className="card w-100 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                            <div className="card-body">
                                                <h3 className="card-title"><b>Stellar Development</b></h3>
                                                <p className="card-text" style={{ fontSize: '20px' }}>
                                                    We will build future-ready and secure applications on Stellar Blockchain platform that connect banks, customers and payment systems for easy and safe money transactions
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div className="card w-100 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                            <div className="card-body">
                                                <h3 className="card-title"><b>Hyperledger Development</b></h3>
                                                <p className="card-text" style={{ fontSize: '20px' }}>
                                                    Create a cutting-edge enterprise ecosystem with transactions that are secure and transparent to foster your blockchain business with the Hyperledger framework
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div className="card w-100 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                            <div className="card-body">
                                                <h3 className="card-title"><b>Ethereum Development</b></h3>
                                                <p className="card-text" style={{ fontSize: '20px' }}>
                                                    When you hire software developers to build Ethereum, they deliver smart contracts and direct interaction of dApps with the decentralized Ethereum blockchain development
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
