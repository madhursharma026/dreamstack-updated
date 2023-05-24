import styles from '../../../styles/cybersecurity/Insights2.module.css';
import Images3 from "../../media/Cybersecurity-Images/cybersecurity-image-3.jpeg";
import Images4 from "../../media/Cybersecurity-Images/cybersecurity-image-4.jpeg";
import Images5 from "../../media/Cybersecurity-Images/cybersecurity-image-5.jpeg";
import Images6 from "../../media/Cybersecurity-Images/cybersecurity-image-6.jpeg";

export default function Insights2() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{ background: '#1E2222' }}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle} text-white`}>Insights</h6>
                <div className="row">
                    <div className="col-lg-3 col-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Images3.src} alt="#ImgNotFound" className='w-100' style={{ maxHeight: '300px', borderRadius: "10px" }} />
                            <div class={`${styles.topLeft}`}>
                                <h3 className='pt-2'>Security is key to growth </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Images4.src} alt="#ImgNotFound" className='w-100' style={{ maxHeight: '300px', borderRadius: "10px" }} />
                            <div class={`${styles.topLeft}`}>
                                <h3 className='pt-2'>Security is key to growth </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Images5.src} alt="#ImgNotFound" className='w-100' style={{ maxHeight: '300px', borderRadius: "10px" }} />
                            <div class={`${styles.topLeft}`}>
                                <h3 className='pt-2'>Security is key to growth </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Images6.src} alt="#ImgNotFound" className='w-100' style={{ maxHeight: '300px', borderRadius: "10px" }} />
                            <div class={`${styles.topLeft}`}>
                                <h3 className='pt-2'>Security is key to growth </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
