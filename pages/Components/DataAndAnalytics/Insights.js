import Link from 'next/link';
import styles from '../../../styles/cybersecurity/Insights.module.css';
import Image15 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-15.jpeg";
import Image16 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-16.jpeg";
import Image17 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-17.jpeg";

export default function Insights() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>Insights</h6>
                <div className="row">
                    <div className="col-md py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Image15.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h1>Data-driven organizations</h1>
                                <Link href="/" style={{color:'#E41165', fontSize:"24px"}}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Image16.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h1>Sustainability with analytics</h1>
                                <Link href="/" style={{color:'#E41165', fontSize:"24px"}}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md py-3">
                        <div class={`${styles.columnData}`}>
                            <img src={Image17.src} alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h1>Collaborative intelligence</h1>
                                <Link href="/" style={{color:'#E41165', fontSize:"24px"}}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
