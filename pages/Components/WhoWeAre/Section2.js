import styles from '../../../styles/DataAndAnalytics/Section2.module.css';
import Images1 from "../../media/WhoWeAre-Images/WhoWeAre-image-1.jpeg";

export default function Section2() {
    return (
        <div className={`px-md-4 px-3 py-md-5 pb-lg-0 pb-5 mt-md-0 mt-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className="col-lg-6 p-lg-5 pt-5" style={{ margin: 'auto' }}>
                        <div className={`${styles.sectionBody}`}>
                            <h1 className={`${styles.sectionTitle}`}>Building greater futures through innovation and collective knowledge</h1>
                            <p className={`${styles.sectionContent}`}>
                                Founded in 2014, Dreamstack is an Cloud computing, IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses for the past decade. We offers an array of cloud-native infrastructure products and services including physical bare-metal servers, cloud servers, We registered as Private Limited in 2020.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-3 text-center" style={{ margin: 'auto' }}>
                        <img src={Images1.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
