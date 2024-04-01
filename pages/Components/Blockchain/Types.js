import styles from '../../../styles/Blockchain/ConsultingServices.module.css';

export default function Types() {
    return (
        <>
            <div className={`${styles.bodyContainer} px-md-4 px-3 py-5`}>
                <div className={`py-5 ${styles.ContainerWidth}`}>
                    <h1 className={`${styles.sectionTitle} text-center`}><b>Types of Blockchain Networks We Offer</b></h1>
                    <br />
                    <div className="row">
                        <div className="col-md-6 col-xl-3 mt-3">
                            <div className="card w-100 p-3 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div className="card-body">
                                    <p className={`${styles.h3CustomFont} card-title`}><b>Public Blockchain</b></p>
                                    <p className={`${styles.customFont} card-text`}>A public blockchain is open-source, non-restrictive, and permissionless, which allows users to access a blockchain platform with equal rights to become an authorized node</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mt-3">
                            <div className="card w-100 p-3 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div className="card-body">
                                    <p className={`${styles.h3CustomFont} card-title`}><b>Private Blockchain</b></p>
                                    <p className={`${styles.customFont} card-text`}>Private blockchains, known as permissioned blockchains or enterprise blockchains, work in a restrictive environment and are executed by a closed network or a single organization</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mt-3">
                            <div className="card w-100 p-3 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div className="card-body">
                                    <p className={`${styles.h3CustomFont} card-title`}><b>Hybrid Blockchain</b></p>
                                    <p className={`${styles.customFont} card-text`}>A hybrid blockchain is a combination of private and public blockchains, where some part is visible as a public blockchain, and some part is controlled by an organization</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mt-3">
                            <div className="card w-100 p-3 h-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                <div className="card-body">
                                    <p className={`${styles.h3CustomFont} card-title`}><b>Custom Blockchain</b></p>
                                    <p className={`${styles.customFont} card-text`}>Solve specific business challenges tailored to your needs with blockchain implementation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='py-5' style={{ background: '#31BBAE', color: 'white' }}>
                <div className={`px-3 px-md-5 py-5 ${styles.ContainerWidth} row`}>
                    <div className="col-lg-9">
                        <p className={styles.h2CustomFont}>
                            Take Your Business to the Next Level by Outsourcing
                            <br />
                            Your Software Requirements to Dreamstackweb
                        </p>
                    </div>
                    <div className="col-lg-3 mt-3 text-center">
                        <button type="button" className="btn btn-primary px-4 py-3"><b>Hire Software Experts</b></button>
                    </div>
                </div>
            </div>
        </>
    )
}
