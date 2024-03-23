import styles from '../../../styles/cybersecurity/BrandCarousel.module.css';
import Images23 from "../../media/Cybersecurity-Images/cybersecurity-image-23.png";
import Images24 from "../../media/Cybersecurity-Images/cybersecurity-image-24.png";
import Images25 from "../../media/Cybersecurity-Images/cybersecurity-image-25.png";
import Images26 from "../../media/Cybersecurity-Images/cybersecurity-image-26.png";
import Images27 from "../../media/Cybersecurity-Images/cybersecurity-image-27.png";
import Images28 from "../../media/Cybersecurity-Images/cybersecurity-image-28.png";

export default function Plateforms() {
    return (
        <div className={`${styles.ContainerWidth} py-5 px-md-5 px-3`}>
            <h5 className="text-danger text-center"><b>COMPATIBLE WITH ALL TYPES OF WEBSITES</b></h5>
            <h1 className='text-center pb-5' style={{ maxWidth: '750px', margin: 'auto' }}><b>We prevent millions of hacks per day on these platforms and more</b></h1>

            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <img src={Images23.src} alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src={Images24.src} alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src={Images25.src} alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src={Images26.src} alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src={Images27.src} alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src={Images28.src} alt="#ImgNotFound" className='w-100 p-5' />
                </div>
            </div>
        </div>
    )
}
