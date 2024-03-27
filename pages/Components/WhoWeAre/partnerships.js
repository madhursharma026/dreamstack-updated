import styles from '../../../styles/WhoWeAre/MapService.module.css';
import Image1 from "../../media/Partner-Images/partner-image-1.png";
import Image2 from "../../media/Partner-Images/partner-image-2.png";
import Image3 from "../../media/Partner-Images/partner-image-3.png";
import Image4 from "../../media/Partner-Images/partner-image-4.png";
import Image5 from "../../media/Partner-Images/partner-image-5.png";
import Image6 from "../../media/Partner-Images/partner-image-6.png";
import Image7 from "../../media/Partner-Images/partner-image-7.png";

export default function Partnerships() {
    return (
        <div className={`px-md-4 px-3 pb-lg-0 pb-5 mt-lg-5 mt-0`}>
            <div className={`${styles.ContainerWidth}`}>
                <h1 className={`${styles.sectionTitle}`}>Our technology partnerships</h1>
                <p className={`${styles.sectionContent}`}>
                    Throughout our history, we have developed a number of <b>partnerships with technology leaders</b>, who highly attested our technical competencies and the ability to understand our customers’ needs and translate them into quality services:
                </p>
                <div className={`${styles.imageSlider}`}>
                    <div className={`${styles.imageSliderTrack}`}>
                    <div className={`${styles.slide}`}>
                            <img src={Image1.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image2.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image3.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image4.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image5.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image6.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image7.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image1.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image2.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image3.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image4.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image5.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image6.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image7.src}  style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
