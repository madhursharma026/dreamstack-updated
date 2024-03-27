import styles from '../../../styles/Homepage/CustomersSlider.module.css';
import Image1 from "../../media/Partner-Images/partner-image-1.png";
import Image2 from "../../media/Partner-Images/partner-image-2.png";
import Image3 from "../../media/Partner-Images/partner-image-3.png";
import Image4 from "../../media/Partner-Images/partner-image-4.png";
import Image5 from "../../media/Partner-Images/partner-image-5.png";
import Image6 from "../../media/Partner-Images/partner-image-6.png";
import Image7 from "../../media/Partner-Images/partner-image-7.png";

export default function CustomersSlider() {
    return (
        <div>
            <div className='py-4' style={{ background: '#E3EFFF' }}>
                <h1 className={`${styles.sectionTitle} text-center`}><b>Our Partners</b></h1>
                <div className={`${styles.imageSlider}`}>
                    <div className={`${styles.imageSliderTrack}`}>
                        <div className={`${styles.slide}`}>
                            <img src={Image1.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image2.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image3.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image4.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image5.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image6.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image7.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image1.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image2.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image3.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image4.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image5.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image6.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                        <div className={`${styles.slide}`}>
                            <img src={Image7.src} style={{ width: '100%', maxHeight: '60px', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
