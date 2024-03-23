import styles from '../../../styles/cybersecurity/Insights.module.css';
import Image13 from "../../media/Common-Images/common-image-13.jpeg";
import Image14 from "../../media/Common-Images/common-image-14.jpeg";
import Image15 from "../../media/Common-Images/common-image-15.jpeg";
import Image16 from "../../media/Common-Images/common-image-16.jpeg";

export default function News() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>In The Trend</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image13.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Gartner Leader</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image14.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Everest Ranking</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image15.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>IDC Marketscape</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image16.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>HFS Research</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
