import styles from '../../../styles/cybersecurity/Insights2.module.css';

export default function Insights2() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{ background: '#1E2222' }}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle} text-white`}>Insights</h6>
                <div className="row">
                    <div className="col-lg-3 col-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cq5dam.thumbnail.480.480%20(1):Small?wid=387&hei=458&dpr=off" alt="#ImgNotFound" className='w-100' style={{ maxHeight: '300px', borderRadius: "10px" }} />
                            <div class={`${styles.topLeft}`}>
                                <h3 className='pt-2'>Security is key to growth </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/tcs-crystallus-accelerate-card-1330x1270:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ maxHeight: '300px', borderRadius: "10px" }} />
                            <div class={`${styles.topLeft}`}>
                                <h3 className='pt-2'>Security is key to growth </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cloud-security-automation-cyber-hygiene-card-1330x1270:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ maxHeight: '300px', borderRadius: "10px" }} />
                            <div class={`${styles.topLeft}`}>
                                <h3 className='pt-2'>Security is key to growth </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/snn-inline-2:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ maxHeight: '300px', borderRadius: "10px" }} />
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
