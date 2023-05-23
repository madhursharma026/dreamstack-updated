import styles from '../../../styles/cybersecurity/Insights.module.css';

export default function Insights() {
    return (
        <div className={`px-md-4 px-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>Insights</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/mt-web:Medium?wid=700&hei=525&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '400px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>Three Ways to Think about the Workforce of the Future</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/chroma-hr-talent-management-solution-Web-3840x1512:Small?wid=575&hei=681&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '400px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>Sorting last-mile logistics</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/mtd-card:Medium?wid=700&hei=526&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '400px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>Perils of over-personalization</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/insights-card:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '400px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>2 steps to ransomware defense</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
