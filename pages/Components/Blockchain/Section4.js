import styles from '../../../styles/Blockchain/ConsultingServices.module.css';
import Images2 from "../../media/Blockchain-Images/blockchain-image-2.jpg";
import Images3 from "../../media/Blockchain-Images/blockchain-image-3.jpg";
import Images4 from "../../media/Blockchain-Images/blockchain-image-4.jpg";
import Images5 from "../../media/Blockchain-Images/blockchain-image-5.jpg";

export default function Section4() {
    return (
        <div className={`${styles.ContainerWidth} text-center`}>
            <div className={`px-md-4 px-3 py-5 pt-5`}>
                <h1 className={`${styles.sectionTitle}`}>Blockchain for Enterprises to Scale Up</h1>
                <br />
                <div className="row">
                    <div className="col-md-6 col-lg-3 mt-3">
                        <div className="card w-100 h-100" style={{ border: '0' }}>
                            <div className="card-body">
                                <img src={Images2.src} alt="#ImgNotFound" style={{ width: '100px' }} />
                                <p className={`${styles.h3CustomFont} card-title mt-3`} style={{ lineHeight: '1.3' }}>Client Retention and Increased Profitability</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-3">
                        <div className="card w-100 h-100" style={{ border: '0' }}>
                            <div className="card-body">
                                <img src={Images3.src} alt="#ImgNotFound" style={{ width: '100px' }} />
                                <p className={`${styles.h3CustomFont} card-title mt-3`} style={{ lineHeight: '1.3' }}>Secure Blockchain Software Systems</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-3">
                        <div className="card w-100 h-100" style={{ border: '0' }}>
                            <div className="card-body">
                                <img src={Images4.src} alt="#ImgNotFound" style={{ width: '100px' }} />
                                <p className={`${styles.h3CustomFont} card-title mt-3`} style={{ lineHeight: '1.3' }}>Revamped Apps and Digital Tools</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-3">
                        <div className="card w-100 h-100" style={{ border: '0' }}>
                            <div className="card-body">
                                <img src={Images5.src} alt="#ImgNotFound" style={{ width: '100px' }} />
                                <p className={`${styles.h3CustomFont} card-title mt-3`} style={{ lineHeight: '1.3' }}>Intuitive Service and Maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-md-4 mx-3 py-5' style={{ background: '#F5F5F5' }}>
                <div className={`px-3 py-5 ${styles.ContainerWidth} row`}>
                    <div className="col-lg-10">
                        <p className={`${styles.h2CustomFont}`} style={{ lineHeight: '1.3' }}>
                            Accelerate Your Business Transformation by Building
                            <br />
                            Smarter Products with Blockchain App Development
                        </p>
                    </div>
                    <div className="col-lg-2 mt-3 text-center">
                        <button type="button" className="btn btn-primary px-3 py-2"><b>Get Started</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
