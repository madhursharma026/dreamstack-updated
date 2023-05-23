import styles from '../../../styles/DataAndAnalytics/BeliefInAction.module.css';

export default function BeliefInAction() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3 bg-black text-white`}>
            <div className={`${styles.ContainerWidth}`}>
                <h6 className={`${styles.sectionTitle}`}>Belief in action</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/novolex-sap-s4hana-digital-transformation-business-process?wid=1900&hei=1002&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>Novolex integrates its ERP systems</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/man-checking-flight-status?wid=1900&hei=1330&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>United Airlines all set to fly higher</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/proximus-accelerates-enterprise-agile-transformation-journey-Web?wid=1900&hei=749&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>Proximus joins hands with Dreamstack for enterprise agile transformation </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/digitally-transform-subscription-Web-3840x1512?wid=1900&hei=749&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>Extreme Networks switches on subscription models</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
