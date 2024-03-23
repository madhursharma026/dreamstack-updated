import styles from '../../../styles/careers/Section2.module.css';
import Images2 from "../../media/Careers-Images/careers-image-2.png";

export default function DitchTheOffice() {
    return (
        <div className={`px-md-4 px-3 py-md-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row" style={{ maxWidth: '1000px', margin: 'auto' }}>
                    <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                        <img src={Images2.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5">
                        <h1 className={`${styles.sectionTitle}`}>Ditch the office</h1>
                        <p className={`${styles.sectionBody}`}>Dreamstack is a fully remote company that believes a global talent pool is a competitive advantage. We have no corporate campus, no cubicles, no geographic limit to who we can hire, and our products are better for it. Our team is always growing.</p>
                        <button type="button" className={`btn ${styles.openPositionBtn}`}>View open positions</button></div>
                </div>
            </div>
        </div>
    )
}
