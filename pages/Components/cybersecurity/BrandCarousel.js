import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../../styles/cybersecurity/BrandCarousel.module.css';
import Images7 from "../../media/Cybersecurity-Images/cybersecurity-image-7.png";
import Images8 from "../../media/Cybersecurity-Images/cybersecurity-image-8.png";
import Images9 from "../../media/Cybersecurity-Images/cybersecurity-image-9.png";

export default function BrandCarousel() {
    return (
        <div className={`${styles.ContainerWidth} py-5 px-md-5 px-3`} style={{ maxWidth: '1000px', margin: 'auto' }}>
            <h1 className='text-center pb-5' style={{ maxWidth: '600px', margin: 'auto' }}><b>A <span style={{ color: '#38ACD2' }}>layered approach</span> in protecting your online brand</b></h1>
            <Carousel variant="dark" indicators={false}>
                <Carousel.Item>
                    <img className="d-block w-100" src={Images7.src} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Images8.src} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Images9.src} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <div className={`row mt-4 ${styles.rowStyle}`}>
                <div className="col-lg-6 mt-3">
                    <button type="button" class={`btn btn-info p-3 text-white ${styles.leftSideBtn}`}><b>I'VE BEEN HACKED</b></button>
                </div>
                <div className="col-lg-6 mt-3">
                    <button type="button" class={`btn btn-outline-danger p-3 ${styles.rightSideBtn}`}><b>COMPARE PLANS</b></button>
                </div>
            </div>
        </div>
    )
}
