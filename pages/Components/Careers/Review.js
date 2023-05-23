import Carousel from 'react-bootstrap/Carousel';
import styles from '../../../styles/careers/Review.module.css';

export default function Review() {

    return (
        <div className={`${styles.ContainerWidth} px-md-4 px-3 pt-5`}>
            <div className="text-center">
                <h1 className={`${styles.sectionTitle}`}>Take it from a Dreamstacker</h1>
                <p className={`${styles.sectionBody} text-muted`}>Here’s what our team appreciates most about Dreamstacker.</p>
            </div>

            <Carousel variant="dark" indicators={false}>
                <Carousel.Item>
                    <div className="row" style={{ maxWidth: '1200px', margin: 'auto' }}>
                        <div className="col-lg-5 col-md-6 p-lg-5 pt-5 text-center">
                            <img src="https://dreamstack.com/images/dev1.jpeg" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        </div>
                        <div className="col-lg-7 col-md-6 p-lg-5 pt-5">
                            <p className={`${styles.carouselBody}`}>The best part of working at Dreamstacker will forever be the flexibility in my schedule that allows me to see my wife and kids throughout the day. Besides that, I have the opportunity to work with incredibly talented and unique people from all over the world. I love it here.</p>
                            <h6 className={`pt-lg-5`}>Rahul Kumar /<br /> Delhi, India</h6>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row" style={{ maxWidth: '1200px', margin: 'auto' }}>
                        <div className="col-lg-5 col-md-6 p-lg-5 pt-5 text-center">
                            <img src="https://dreamstack.com/images/dev2.jpeg" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        </div>
                        <div className="col-lg-7 col-md-6 p-lg-5 pt-5">
                            <p className={`${styles.carouselBody}`}>Working at Dreamstacker feels like home. We are a team who is always ready to assist you when in doubt and who will always encourage you to become the best version of you.</p>
                            <h6 className={`pt-lg-5`}>J Shivam Sharma /<br /> Bihar, India</h6>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row" style={{ maxWidth: '1200px', margin: 'auto' }}>
                        <div className="col-lg-5 col-md-6 p-lg-5 pt-5 text-center">
                            <img src="https://dreamstack.com/images/dev3.jpeg" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        </div>
                        <div className="col-lg-7 col-md-6 p-lg-5 pt-5">
                            <p className={`${styles.carouselBody}`}>Dreamstacker are so warm, and everyone can be professional and fun at the same time. I love how work-life balance is something that we make sure to practice well.</p>
                            <h6 className={`pt-lg-5`}>Ajay Pandey /<br /> Bhopal, India</h6>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
