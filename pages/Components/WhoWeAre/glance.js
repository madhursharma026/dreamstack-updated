import styles from '../../../styles/WhoWeAre/Galance.module.css';
import Images2 from "../../media/WhoWeAre-Images/WhoWeAre-image-2.jpeg";
import Images3 from "../../media/WhoWeAre-Images/WhoWeAre-image-3.jpeg";
import Images4 from "../../media/WhoWeAre-Images/WhoWeAre-image-4.jpeg";
import Images5 from "../../media/WhoWeAre-Images/WhoWeAre-image-5.jpeg";

export default function Galance() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3 pb-lg-0 pb-5 bg-black`}>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className={`row ${styles.ContainerWidth}`}>
                            <h5 className="text-white">
                                1 / 4
                            </h5>
                            <div className="col-lg-6 p-lg-5 pt-5 text-white" style={{ margin: 'auto' }}>
                                <div className={`${styles.sectionBody}`}>
                                    <h1 className={`${styles.sectionTitle}`}>In it for good</h1>
                                    <p className={`${styles.sectionContent}`}>We take a long-term view, building relationships that endure, leading to mutual growth and sustainable outcomes.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                                <img src={Images2.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={`row ${styles.ContainerWidth}`}>
                            <h5 className="text-white">
                                2 / 4
                            </h5>
                            <div className="col-lg-6 p-lg-5 pt-5 text-white" style={{ margin: 'auto' }}>
                                <div className={`${styles.sectionBody}`}>
                                    <h1 className={`${styles.sectionTitle}`}>Bring everything</h1>
                                    <p className={`${styles.sectionContent}`}>When you are out to change your world, you need a partner who can combine every resource in their armory with an utter determination to succeed. Ideas magnified and value multiplied, at global scale.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                                <img src={Images3.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={`row ${styles.ContainerWidth}`}>
                            <h5 className="text-white">
                                3 / 4
                            </h5>
                            <div className="col-lg-6 p-lg-5 pt-5 text-white" style={{ margin: 'auto' }}>
                                <div className={`${styles.sectionBody}`}>
                                    <h1 className={`${styles.sectionTitle}`}>Know-how</h1>
                                    <p className={`${styles.sectionContent}`}>With Dreamstack, you experience certainty. We are a knowledge network of the smartest minds and practitioners who apply concept to context for real outcomes..</p>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                                <img src={Images4.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={`row ${styles.ContainerWidth}`}>
                            <h5 className="text-white">
                                4 / 4
                            </h5>
                            <div className="col-lg-6 p-lg-5 pt-5 text-white" style={{ margin: 'auto' }}>
                                <div className={`${styles.sectionBody}`}>
                                    <h1 className={`${styles.sectionTitle}`}>Master the journey</h1>
                                    <p className={`${styles.sectionContent}`}>Along with certainty, you also need partners who can deal with uncertainty. We provide the agility and continuity you need to navigate perpetual change.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                                <img src={Images5.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className={`${styles.leftArrow} carousel-control-prev`} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <img src="https://www.svgrepo.com/show/346529/arrow-left-circle.svg" alt="#ImgNotFound" width='100px' height='100px' />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={`${styles.rightArrow} carousel-control-next`} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <img src="https://www.svgrepo.com/show/346529/arrow-left-circle.svg" alt="#ImgNotFound" width='100px' height='100px' />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

