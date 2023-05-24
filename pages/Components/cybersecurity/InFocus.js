import styles from '../../../styles/cybersecurity/Insights.module.css';
import Image13 from "../../media/Common-Images/common-image-13.jpeg";
import Image14 from "../../media/Common-Images/common-image-14.jpeg";
import Image15 from "../../media/Common-Images/common-image-15.jpeg";
import Image16 from "../../media/Common-Images/common-image-16.jpeg";

export default function InFocus() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{background:"#F4F3F9"}}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>In Focus</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Image13.src} alt="#ImgNotFound" className='w-100' />
                            <p className={`${styles.sectionBody} text-black`}>A global credit bureau secures credit scores</p>
                            <h6 className="text-muted">Case Studies | 18 May 2022</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Image14.src} alt="#ImgNotFound" className='w-100' />
                            <p className={`${styles.sectionBody} text-black`}>A global credit bureau secures credit scores</p>
                            <h6 className="text-muted">Case Studies | 18 May 2022</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Image15.src} alt="#ImgNotFound" className='w-100' />
                            <p className={`${styles.sectionBody} text-black`}>A global credit bureau secures credit scores</p>
                            <h6 className="text-muted">Case Studies | 18 May 2022</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Image16.src} alt="#ImgNotFound" className='w-100' />
                            <p className={`${styles.sectionBody} text-black`}>A global credit bureau secures credit scores</p>
                            <h6 className="text-muted">Case Studies | 18 May 2022</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
