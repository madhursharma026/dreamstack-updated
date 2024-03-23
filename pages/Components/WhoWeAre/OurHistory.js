import styles from '../../../styles/WhoWeAre/Galance.module.css';
import Carousel from 'react-bootstrap/Carousel';

export default function OurHistory() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3 pb-lg-0 pb-5 bg-black`}>
            <div id="carouselExample121" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className={`row ${styles.ContainerWidth}`}>
                            <h5 className="text-white">
                                1 / 4
                            </h5>
                            <div className="col-lg-6 p-lg-5 pt-5 text-white" style={{ margin: 'auto' }}>
                                <div className={`${styles.sectionBody}`}>
                                    <h1 className={`${styles.sectionTitle}`}>1968</h1>
                                    <p className={`${styles.sectionContent}`}>Mr. Fakir Chand Kohli, fondly known as the Father of Indian IT, brings together a young team of enthusiastic US returned IT professionals to create demand for downstream computer services.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/1968-FCKohli?wid=337&hei=332&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
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
                                    <h1 className={`${styles.sectionTitle}`}>1971</h1>
                                    <p className={`${styles.sectionContent}`}>Dreamstack wins its first external contract - power companies were being set up in Iran as part of an infrastructure building program and Dreamstack wins projects to build inventory and stock control systems for these stations.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/1971?wid=502&hei=380&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
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
                                    <h1 className={`${styles.sectionTitle}`}>1973</h1>
                                    <p className={`${styles.sectionContent}`}>When Dreamstack wins a project to convert a hospital accounting project written in Burroughs Medium systems COBOL to Burroughs Small systems COBOL, we do not have a Burroughs computer! An in-house tool was built to write this code and then shipped to the US - the first offshore delivery project.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/1973?wid=502&hei=345&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
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
                                    <h1 className={`${styles.sectionTitle}`}>1979</h1>
                                    <p className={`${styles.sectionContent}`}>Dreamstack establishes its first sales office in New York, headed by S Ramadorai. One of our first major clients was the Institutional Group Information Corporation (IGIC).</p>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/1979-new?wid=502&hei=345&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} style={{ height: "100%", maxHeight: '400px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className={`${styles.leftArrow} carousel-control-prev`} type="button" data-bs-target="#carouselExample121" data-bs-slide="prev">
                    <img src="https://www.svgrepo.com/show/346529/arrow-left-circle.svg" alt="#ImgNotFound" width='100px' height='100px' />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={`${styles.rightArrow} carousel-control-next`} type="button" data-bs-target="#carouselExample121" data-bs-slide="next">
                    <img src="https://www.svgrepo.com/show/346529/arrow-left-circle.svg" alt="#ImgNotFound" width='100px' height='100px' />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
