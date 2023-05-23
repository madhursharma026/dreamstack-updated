import styles from '../../../styles/DataAndAnalytics/BeliefInAction.module.css';

export default function BeliefInAction() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>Belief in action</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/iot-architecture?wid=1900&hei=1069&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>How Dreamstack IoT Expertise Enhanced vingle Transformation Journey</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/alstom-Web-3840x1512?wid=1900&hei=749&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>Alstom bets on data for future growth</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/Img-Web-3840x1512-2?wid=1900&hei=749&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>BASF leverages AWS Cloud for intelligent digital farming  </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/woolsworth?wid=1900&hei=1069&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>Embracing data-driven retail to enhance customer experiences</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
