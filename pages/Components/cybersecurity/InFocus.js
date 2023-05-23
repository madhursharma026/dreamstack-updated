import styles from '../../../styles/cybersecurity/Insights.module.css';

export default function InFocus() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{background:"#F4F3F9"}}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>In Focus</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cyber-vigilance-vulnerability-incident-response-card-1:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' />
                            <p className={`${styles.sectionBody} text-black`}>A global credit bureau secures credit scores</p>
                            <h6 className="text-muted">Case Studies | 18 May 2022</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/AdobeStock_404751193:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' />
                            <p className={`${styles.sectionBody} text-black`}>A global credit bureau secures credit scores</p>
                            <h6 className="text-muted">Case Studies | 18 May 2022</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cb:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' />
                            <p className={`${styles.sectionBody} text-black`}>A global credit bureau secures credit scores</p>
                            <h6 className="text-muted">Case Studies | 18 May 2022</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cloud-security-automation-card-1330x1270:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' />
                            <p className={`${styles.sectionBody} text-black`}>A global credit bureau secures credit scores</p>
                            <h6 className="text-muted">Case Studies | 18 May 2022</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
