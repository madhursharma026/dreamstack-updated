import Images16 from "../../media/Blockchain-Images/blockchain-image-16.png";
import styles from '../../../styles/Blockchain/BlockchainServices.module.css';

export default function Industries() {
    return (
        <>
            <div className={`${styles.bodyContainer} py-5 text-white`}>
                <div className={`py-5 ${styles.ContainerWidth}`}>
                    <div className="px-md-4 px-3">
                        <div className="text-center">
                            <h1 className={`${styles.sectionTitle}`}><b>Custom Blockchain Development Services We Offer</b></h1>
                            <br />
                            <p className={`${styles.h4CustomFont}`}>End-to-end custom blockchain development services from DreamstackWeb assist emerging startups and large-scale enterprises in leveraging distributed ledger technologies for cutting-edge applications today and empower them with enhanced security and increased transparency</p>
                        </div>
                        <br />

                        <div className="row px-xxl-5">
                            <div className="col-lg-6 row mt-4">
                                <div className="col-2 col-sm-1 col-lg-2 col-xl-1"><img src={Images16.src} alt="#ImgNotFound" style={{width: '100%'}} /></div>
                                <div className="col-10 col-sm-11 col-lg-10 col-xl-11">
                                    <p className={`${styles.h3CustomFont}`}>Blockchain for Banking and Finance</p>
                                    <p className={`${styles.customFont}`}>Utilizing smart contracts and DLT (Distributed Ledger Technology), we design and implement a fully functional loan process and settlement system that speeds up the loan process while facilitating secure payment</p>
                                </div>
                            </div>
                            <div className="col-lg-6 row mt-4">
                                <div className="col-2 col-sm-1 col-lg-2 col-xl-1"><img src={Images16.src} alt="#ImgNotFound" style={{width: '100%'}} /></div>
                                <div className="col-10 col-sm-11 col-lg-10 col-xl-11">
                                    <p className={`${styles.h3CustomFont}`}>Blockchain for eCommerce</p>
                                    <p className={`${styles.customFont}`}>Build a feature-rich eCommerce platform that has every required functionality like special prices for token holders, store performance analysis tools, inventory management, and supply chain management into a secure system</p>
                                </div>
                            </div>
                            <div className="col-lg-6 row mt-4">
                                <div className="col-2 col-sm-1 col-lg-2 col-xl-1"><img src={Images16.src} alt="#ImgNotFound" style={{width: '100%'}} /></div>
                                <div className="col-10 col-sm-11 col-lg-10 col-xl-11">
                                    <p className={`${styles.h3CustomFont}`}>Blockchain in Healthcare</p>
                                    <p className={`${styles.customFont}`}>Leverage the blockchain solutions for your healthcare organization to implement a smart, researcher-driven clinical trial management system based on Ethereum smart contracts that enable BlockTrial and metadata search capability</p>
                                </div>
                            </div>
                            <div className="col-lg-6 row mt-4">
                                <div className="col-2 col-sm-1 col-lg-2 col-xl-1"><img src={Images16.src} alt="#ImgNotFound" style={{width: '100%'}} /></div>
                                <div className="col-10 col-sm-11 col-lg-10 col-xl-11">
                                    <p className={`${styles.h3CustomFont}`}>Blockchain in Real Estate</p>
                                    <p className={`${styles.customFont}`}>Blockchain is used to handle mortgages, transfer ownership, validate paperwork, and maintain track of properties. It reduces paperwork, prevents fraud, and facilitates cross-border transactions by utilizing smart contracts and distinctive tokens</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
