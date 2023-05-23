import Link from 'next/link';
import styles from '../../../styles/cybersecurity/Insights.module.css';

export default function Insights() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>Insights</h6>
                <div className="row">
                    <div className="col-md py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/chroma-hr-talent-management-solution-Tab-2048x1076:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h1>Data-driven organizations</h1>
                                <Link href="/" style={{color:'#E41165', fontSize:"24px"}}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/man-planting:Small?wid=575&hei=681&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h1>Sustainability with analytics</h1>
                                <Link href="/" style={{color:'#E41165', fontSize:"24px"}}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/data-driven-insights-ai-financial-institutions-card-1330x1270:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
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
