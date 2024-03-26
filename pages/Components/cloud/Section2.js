import styles from '../../../styles/cloud/cloud.module.css';
import Image2 from "../../media/Cloud-New-Images/Image2.svg";
import Image3 from "../../media/Cloud-New-Images/Image3.svg";
import Image4 from "../../media/Cloud-New-Images/Image4.svg";
import Image5 from "../../media/Cloud-New-Images/Image5.svg";
import Image6 from "../../media/Cloud-New-Images/Image6.svg";
import Image7 from "../../media/Cloud-New-Images/Image7.svg";

export default function Section2() {
    return (
        <div className={`p-0`}>
            <div style={{ background: "#0F0F0F" }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="py-md-5">
                        <h5 className="pt-5 text-white"><b>Leading enterprises, startups, and more have trusted Turing</b></h5>
                        <div className="row pb-5">
                            <div className="col-lg-2 col-md-4 col-6 text-center pt-5" style={{ margin: 'auto' }}>
                                <img src={Image2.src} alt="#ImgNotFound" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 text-center pt-5" style={{ margin: 'auto' }}>
                                <img src={Image3.src} alt="#ImgNotFound" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 text-center pt-5" style={{ margin: 'auto' }}>
                                <img src={Image4.src} alt="#ImgNotFound" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 text-center pt-5" style={{ margin: 'auto' }}>
                                <img src={Image5.src} alt="#ImgNotFound" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 text-center pt-5" style={{ margin: 'auto' }}>
                                <img src={Image6.src} alt="#ImgNotFound" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 text-center pt-5" style={{ margin: 'auto' }}>
                                <img src={Image7.src} alt="#ImgNotFound" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
