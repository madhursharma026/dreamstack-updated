import styles from '../../../styles/cybersecurity/BrandCarousel.module.css';

export default function Plateforms() {
    return (
        <div className={`${styles.ContainerWidth} py-5 px-md-5 px-3`}>
            <h5 className="text-danger text-center"><b>COMPATIBLE WITH ALL TYPES OF WEBSITES</b></h5>
            <h1 className='text-center pb-5' style={{ maxWidth: '750px', margin: 'auto' }}><b>We prevent millions of hacks per day on these platforms and more</b></h1>
            
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <img src="https://www.sitelock.com/images/wordpress-logo-4a6413.webp" alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src="https://www.sitelock.com/images/woocommerce-logo-70ae45.webp" alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src="https://www.sitelock.com/images/drupal-logo-f03a5d.svg" alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src="https://www.sitelock.com/images/magento-logo-a661f5.svg" alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src="https://www.sitelock.com/images/ms-iis-color-9adf0c.webp" alt="#ImgNotFound" className='w-100 p-5' />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img src="https://www.sitelock.com/images/custom-sites-6f95f1.webp" alt="#ImgNotFound" className='w-100 p-5' />
                </div>
            </div>
        </div>
    )
}
