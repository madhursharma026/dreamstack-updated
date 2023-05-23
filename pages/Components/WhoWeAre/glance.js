import styles from '../../../styles/WhoWeAre/Galance.module.css';

export default function Galance() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3 pb-lg-0 pb-5 bg-black`}>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
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
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/build-together:Extra-Medium?wid=768&hei=637&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
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
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/data-analytics-management-business-efficiency:Extra-Medium?wid=820&hei=680&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
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
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/driving-innovation-in-high-tech-saas-paas:Extra-Medium?wid=820&hei=681&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
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
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/master-journey-4:Extra-Medium?wid=820&hei=680&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <button class={`${styles.leftArrow} carousel-control-prev`} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <img src="https://www.svgrepo.com/show/346529/arrow-left-circle.svg" alt="#ImgNotFound" width='100px' height='100px' />
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class={`${styles.rightArrow} carousel-control-next`} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <img src="https://www.svgrepo.com/show/346529/arrow-left-circle.svg" alt="#ImgNotFound" width='100px' height='100px' />
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

