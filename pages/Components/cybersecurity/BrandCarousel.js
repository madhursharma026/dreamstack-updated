import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../../styles/cybersecurity/BrandCarousel.module.css';

export default function BrandCarousel() {
    return (
        <div className={`${styles.ContainerWidth} py-5 px-md-5 px-3`} style={{ maxWidth: '1000px', margin: 'auto' }}>
            <h1 className='text-center pb-5' style={{ maxWidth: '600px', margin: 'auto' }}><b>A <span style={{ color: '#38ACD2' }}>layered approach</span> in protecting your online brand</b></h1>
            <Carousel variant="dark" indicators={false}>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://www.sitelock.com/images/website-website-backup-50a5c9.webp" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://www.sitelock.com/images/website-vulnerability-patching-b47acf.webp" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://www.sitelock.com/images/website-malware-scanner-03a56d.webp" alt="Third slide" />
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
