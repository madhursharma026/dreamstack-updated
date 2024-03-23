import styles from '../../../styles/Blockchain/WhyChoose.module.css';
import Images15 from "../../media/Blockchain-Images/blockchain-image-15.jpg";

export default function WhyChoose() {
    return (
        <>
            <div className={`${styles.bodyContainer}`}>
                <div className="px-md-4 px-3 py-5">
                    <div className={`py-5 ${styles.ContainerWidth}`}>
                        <div className="text-center">
                            <h1 className={`${styles.sectionTitle}`}><b>Why Choose Dreamstackweb as a Blockchain Development Company for Your Business?</b></h1>
                            <br />
                            <h4 className={`${styles.sectionBody}`}>As a leading blockchain consulting and development company, we ensure to deliver guaranteed results by developing tailored blockchain applications, no matter how complex your project is!</h4>
                        </div>
                        <br />

                        <div className="row px-xxl-5">
                            <div className="col-md-6 col-xl-4">
                                <div className="card w-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                    <div className="card-body">
                                        <h3 className="card-title"><b>Technology Experts</b></h3>
                                        <p className="card-text" style={{ fontSize: '20px' }}>Get access to experienced blockchain professionals to build a secure blockchain app for your domain and implement custom solutions for your business success</p>
                                    </div>
                                </div>
                                <div className="card w-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                    <div className="card-body">
                                        <h3 className="card-title"><b>Cross-Industry Experience</b></h3>
                                        <p className="card-text" style={{ fontSize: '20px' }}>We have vast competencies in building blockchain-driven solutions across industry domains including insurance, supply chain, retail, and more</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-xl-4 ${styles.imgStyle}`}>
                            <img src={Images15.src} alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="card w-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                    <div className="card-body">
                                        <h3 className="card-title"><b>Competitive Advantage</b></h3>
                                        <p className="card-text" style={{ fontSize: '20px' }}>Gain a strategic competitive advantage with our tailor-made solutions that cover DevOps practices, AML/KYC Compliance solutions, discovery phase, and more</p>
                                    </div>
                                </div>
                                <div className="card w-100" style={{ border: '0', borderRadius: '0', background: 'transparent' }}>
                                    <div className="card-body">
                                        <h3 className="card-title"><b>Extensive Development Skills</b></h3>
                                        <p className="card-text" style={{ fontSize: '20px' }}>Our developers bring knowledge and experience in specialized blockchain-relevant methodologies together to provide best-in-class blockchain solutions </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5' style={{ background: '#31BBAE', color: 'white' }}>
                    <div className={`px-3 px-md-5 py-5 ${styles.ContainerWidth} row`}>
                        <div className="col-lg-10">
                            <h2>
                                Want to Develop Fast, Secure, and Scalable Blockchain
                                <br />
                                Application with Our Expertise?
                            </h2>
                        </div>
                        <div className="col-lg-2 mt-3 text-center">
                            <button type="button" className="btn btn-primary px-3 py-2"><b>Talk to us</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
