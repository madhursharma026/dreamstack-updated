import styles from '../../../styles/Blockchain/Process.module.css';
import Images8 from "../../media/Blockchain-Images/blockchain-image-8.png";
import Images9 from "../../media/Blockchain-Images/blockchain-image-9.jpg";
import Images10 from "../../media/Blockchain-Images/blockchain-image-10.png";
import Images11 from "../../media/Blockchain-Images/blockchain-image-11.png";
import Images12 from "../../media/Blockchain-Images/blockchain-image-12.png";
import Images13 from "../../media/Blockchain-Images/blockchain-image-13.png";
import Images14 from "../../media/Blockchain-Images/blockchain-image-14.png";

export default function Process() {
    return (
        <>
            <div className={`${styles.bodyContainer} py-5`}>
                <div className="px-md-4 px-3">
                    <div className={`py-5 ${styles.ContainerWidth}`}>
                        <div className="text-center">
                            <h1 className={`${styles.sectionTitle}`}><b>Our Blockchain App Development Process</b></h1>
                            <br />
                        </div>
                        <br />

                        <div className="row px-xxl-5 text-center">
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div class="card" style={{ border: '2px solid red' }}>
                                    <div class="card-body">
                                        <img src={Images8.src} alt="#ImgNotFound" width="100px" />
                                        <h6 class="card-subtitle mt-2 text-body-secondary"><b>Conceptualizing</b></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div class="card" style={{ border: '2px solid red' }}>
                                    <div class="card-body">
                                        <img src={Images9.src} alt="#ImgNotFound" width="100px" />
                                        <h6 class="card-subtitle mt-2 text-body-secondary"><b>Business Analysis</b></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div class="card" style={{ border: '2px solid red' }}>
                                    <div class="card-body">
                                        <img src={Images10.src} alt="#ImgNotFound" width="100px" />
                                        <h6 class="card-subtitle mt-2 text-body-secondary"><b>Goal Setting</b></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div class="card" style={{ border: '2px solid red' }}>
                                    <div class="card-body">
                                        <img src={Images11.src} alt="#ImgNotFound" width="100px" />
                                        <h6 class="card-subtitle mt-2 text-body-secondary"><b>Roadmap</b></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div class="card" style={{ border: '2px solid red' }}>
                                    <div class="card-body">
                                        <img src={Images12.src} alt="#ImgNotFound" width="100px" />
                                        <h6 class="card-subtitle mt-2 text-body-secondary"><b>Prototyping</b></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div class="card" style={{ border: '2px solid red' }}>
                                    <div class="card-body">
                                        <img src={Images13.src} alt="#ImgNotFound" width="100px" />
                                        <h6 class="card-subtitle mt-2 text-body-secondary"><b>Development</b></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div class="card" style={{ border: '2px solid red' }}>
                                    <div class="card-body">
                                        <img src={Images14.src} alt="#ImgNotFound" width="100px" />
                                        <h6 class="card-subtitle mt-2 text-body-secondary"><b>Testing</b></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 mt-3" style={{ margin: 'auto' }}>
                                <div class="card" style={{ border: '2px solid red' }}>
                                    <div class="card-body">
                                        <img src={Images14.src} alt="#ImgNotFound" width="100px" />
                                        <h6 class="card-subtitle mt-2 text-body-secondary"><b>Deployment</b></h6>
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
