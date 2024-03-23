import styles from '../../../styles/DataAndAnalytics/BeliefInAction.module.css';
import Image9 from "../../media/Common-Images/common-image-9.jpeg";
import Image10 from "../../media/Common-Images/common-image-10.jpeg";
import Image11 from "../../media/Common-Images/common-image-11.jpeg";
import Image12 from "../../media/Common-Images/common-image-12.jpeg";

export default function BeliefInAction() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3 bg-black text-white`}>
            <div className={`${styles.ContainerWidth}`}>
                <h6 className={`${styles.sectionTitle}`}>Belief in action</h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image9.src} alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>Novolex integrates its ERP systems</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image10.src} alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>United Airlines all set to fly higher</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image11.src} alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
                            <div className='pt-3'>
                                <h4>Proximus joins hands with Dreamstack for enterprise agile transformation </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                        <div className={`${styles.columnData}`}>
                            <img src={Image12.src} alt="#ImgNotFound" className='w-100' style={{ height: '300px' }} />
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
