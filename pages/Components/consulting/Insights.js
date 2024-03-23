import styles from '../../../styles/cybersecurity/Insights.module.css';
import Image7 from "../../media/Consulting-Images/consulting-image-7.jpeg";
import Image8 from "../../media/Consulting-Images/consulting-image-8.jpeg";
import Image9 from "../../media/Consulting-Images/consulting-image-9.jpeg";
import Image10 from "../../media/Consulting-Images/consulting-image-10.jpeg";

export default function Insights() {
    return (
        <div className={`px-md-4 px-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>Insights</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image7.src} alt="#ImgNotFound" className='w-100' style={{ height: '400px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Three Ways to Think about the Workforce of the Future</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image8.src} alt="#ImgNotFound" className='w-100' style={{ height: '400px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Sorting last-mile logistics</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image9.src} alt="#ImgNotFound" className='w-100' style={{ height: '400px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Perils of over-personalization</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image10.src} alt="#ImgNotFound" className='w-100' style={{ height: '400px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>2 steps to ransomware defense</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
