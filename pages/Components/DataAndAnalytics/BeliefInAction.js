import styles from '../../../styles/DataAndAnalytics/BeliefInAction.module.css';
import Image11 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-11.jpeg";
import Image12 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-12.jpeg";
import Image13 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-13.jpeg";
import Image14 from "../../media/DataAndAnalytics-Images/DataAndAnalytics-image-14.jpeg";

export default function BeliefInAction() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle}`}>Belief in action</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image11.src} alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>How Dreamstack IoT Expertise Enhanced vingle Transformation Journey</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image12.src} alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>Alstom bets on data for future growth</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image13.src} alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>BASF leverages AWS Cloud for intelligent digital farming  </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image14.src} alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
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
