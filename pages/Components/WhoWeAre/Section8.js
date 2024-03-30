import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';

export default function Section8() {
    return (
        <div className={`py-5`} style={{ background: '#F8F9FB' }}>
            <div className={`${styles.ContainerWidth}`}>
                <h1 className={`${styles.sectionTitle} text-center`}>
                    Customers and analysts chime in
                </h1>
                <p className='mt-3 text-center' style={{ maxWidth: '900px', margin: 'auto', lineHeight: '1.6', letterSpacing: '-0.3px', fontSize: '1.125rem' }}>
                    We couldn’t have come this far without the support of our customers and partners. It’s a long road ahead, but we’re optimistic about transforming the future of work for businesses across nations.
                </p>
                <div className='mt-5'>
                    {/* <div id="carouselExample" class="carousel carousel-dark slide d-md-block d-none slide"> */}
                    <div id="carouselExampleSlidesOnly" class="carousel carousel-dark d-md-block d-none slide" data-bs-ride="carousel">
                        <div class="carousel-inner" style={{ maxWidth: '900px', margin: 'auto' }}>
                            <div class="carousel-item active">
                                <div className="row p-5">
                                    <div className="col-md-5 p-md-5" style={{ borderRight: '1px solid #E7EBF0' }}>
                                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-testimonial-phil-wainewright.png" alt="#ImgNotFound" className={styles.testimonialImg} />
                                    </div>
                                    <div className="col-md-6" style={{ margin: 'auto' }}>
                                        <p className='mt-3' style={{ maxWidth: '400px', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.125rem' }}>"Zoho has always focused on how to make their customers, employees, and community better, and I believe that’s the key to their success."</p>
                                        <h4>Brent Leary,</h4>
                                        <h6>Founder of CRM Essentials</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row p-5">
                                    <div className="col-md-5 p-md-5" style={{ borderRight: '1px solid #E7EBF0' }}>
                                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-testimonial-phil-wainewright.png" alt="#ImgNotFound" className={styles.testimonialImg} />
                                    </div>
                                    <div className="col-md-6" style={{ margin: 'auto' }}>
                                        <p className='mt-3' style={{ maxWidth: '400px', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.125rem' }}>"Zoho has always focused on how to make their customers, employees, and community better, and I believe that’s the key to their success."</p>
                                        <h4>Brent Leary,</h4>
                                        <h6>Founder of CRM Essentials</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row p-5">
                                    <div className="col-md-5 p-md-5" style={{ borderRight: '1px solid #E7EBF0' }}>
                                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-testimonial-phil-wainewright.png" alt="#ImgNotFound" className={styles.testimonialImg} />
                                    </div>
                                    <div className="col-md-6" style={{ margin: 'auto' }}>
                                        <p className='mt-3' style={{ maxWidth: '400px', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.125rem' }}>"Zoho has always focused on how to make their customers, employees, and community better, and I believe that’s the key to their success."</p>
                                        <h4>Brent Leary,</h4>
                                        <h6>Founder of CRM Essentials</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    {/* <div id="carouselExampleDark" class="carousel carousel-dark slide d-md-none d-block"> */}
                    <div id="carouselExampleSlidesOnly" class="carousel carousel-dark d-md-none d-block slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <p className='mt-3' style={{ maxWidth: '500px', margin: 'auto', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.125rem', marginBottom: '-50px' }}>"Zoho has always focused on how to make their customers, employees, and community better, and I believe that’s the key to their success."</p>
                                <div className="row mt-md-0 mt-5">
                                    <div className="col-5 p-5 text-center">
                                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-testimonial-phil-wainewright.png" alt="#ImgNotFound" className={styles.testimonialImg} />
                                    </div>
                                    <div className="col-7" style={{ margin: 'auto' }}>
                                        <h4>Brent Leary,</h4>
                                        <h6>Founder of CRM Essentials</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <p className='mt-3' style={{ maxWidth: '500px', margin: 'auto', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.125rem', marginBottom: '-50px' }}>"Zoho has always focused on how to make their customers, employees, and community better, and I believe that’s the key to their success."</p>
                                <div className="row mt-md-0 mt-5">
                                    <div className="col-5 p-5 text-center">
                                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-testimonial-phil-wainewright.png" alt="#ImgNotFound" className={styles.testimonialImg} />
                                    </div>
                                    <div className="col-7" style={{ margin: 'auto' }}>
                                        <h4>Brent Leary,</h4>
                                        <h6>Founder of CRM Essentials</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <p className='mt-3' style={{ maxWidth: '500px', margin: 'auto', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.125rem', marginBottom: '-50px' }}>"Zoho has always focused on how to make their customers, employees, and community better, and I believe that’s the key to their success."</p>
                                <div className="row mt-md-0 mt-5">
                                    <div className="col-5 p-5 text-center">
                                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-testimonial-phil-wainewright.png" alt="#ImgNotFound" className={styles.testimonialImg} />
                                    </div>
                                    <div className="col-7" style={{ margin: 'auto' }}>
                                        <h4>Brent Leary,</h4>
                                        <h6>Founder of CRM Essentials</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
