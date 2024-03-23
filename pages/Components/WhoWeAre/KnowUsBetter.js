import styles from '../../../styles/WhoWeAre/KnowUsBetter.module.css';
import Images7 from "../../media/WhoWeAre-Images/WhoWeAre-image-7.jpeg";
import Images8 from "../../media/WhoWeAre-Images/WhoWeAre-image-8.jpeg";
import Images9 from "../../media/WhoWeAre-Images/WhoWeAre-image-9.jpeg";
import Images10 from "../../media/WhoWeAre-Images/WhoWeAre-image-10.jpeg";

export default function KnowUsBetter() {
    return (
        <div className="px-md-4 px-3">
            <div className={`my-5 ${styles.ContainerWidth}`}>
                <div className={`row`}>
                    <h2>Get to know us better</h2>
                    <div className={`col ${styles.colNo1}`}>
                        <div className={`${styles.columnData}`}>
                            <img src={Images7.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Newsroom</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo2}`}>
                        <div className={`${styles.columnData}`}>
                            <img src={Images8.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>CSR</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo3}`}>
                        <div className={`${styles.columnData}`}>
                            <img src={Images9.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Diversity, equality, inclusion</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo4}`}>
                        <div className={`${styles.columnData}`}>
                            <img src={Images10.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div className={`${styles.bottomLeft}`}>
                                <h2>Sports sponsorship</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
