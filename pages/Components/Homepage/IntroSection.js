import Link from 'next/link';
import styles from '../../../styles/Homepage/IntroSection.module.css';

export default function IntroSection() {
    return (
        <>
            <div className={`p-0 mt-5`}>
                <div className="bg-primary">
                    <div className={`${styles.ContainerWidth}`}>
                        <div className={`row`}>
                            <div className={`col-lg-6 order-lg-2`}>
                                <img src="https://a.storyblok.com/f/172398/2164x1460/bcae7390a6/hero-2x-e-commerce.png" alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} />
                            </div>
                            <div className={`col-lg-6`}>
                                <div className={`py-lg-5 ${styles.rightSide} px-3`}>
                                    <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}><b>Get fully managed tech services</b></h1>
                                    <p className={`${styles.sectionBody} text-white`}>Use Dreamstack to imagine, deliver, and run solutions to your toughest business problems. Discover quality, speed, and cost efficiency from our internal industry experts and the fully managed teams they build for you.</p>
                                    <Link className={`btn ${styles.openPositionBtn} px-4 py-3`} href="/contact" role="button"><b>Try Dreamstack for free</b></Link>
                                    <Link className={`btn ${styles.salesBtn} px-4 py-3`} href="/contact" role="button"><b>Talk to sales</b></Link>
                                    <div className={`${styles.makeDivAlignCenterAfterLGScrn}`}>
                                        <div className="row mt-4">
                                            <div className="col-lg-4">
                                                <img src="https://hubstaff.com/images/logos/capterra-white.svg" alt="#ImgNotFound" />
                                                <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                            </div>
                                            <div className="col-lg-4">
                                                <img src="https://hubstaff.com/images/logos/g2-white.svg" alt="#ImgNotFound" />
                                                <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                            </div>
                                        </div>
                                        <div class={`card ${styles.showAfterLGScrn} mb-4`}>
                                            <div class="card-body">
                                                <div className="row">
                                                    <div className="col-4">
                                                        Integrates with:
                                                    </div>
                                                    <div className="col-2">
                                                        <img src="https://hubstaff.com/images/logos/quickbooks-mark.svg" alt="#ImgNotFound" className='w-100' />
                                                    </div>
                                                    <div className="col-6">
                                                        <img src="https://hubstaff.com/images/logos/freshbooks-mark.svg" alt="#ImgNotFound" className='w-100' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={`card ${styles.hideAfterLGScrn}`} style={{ width: "380px", marginTop: "-40px", marginLeft: '73%', position: "absolute" }}>
                    <div class="card-body">
                        Integrates with:
                        <img src="https://hubstaff.com/images/logos/quickbooks-mark.svg" alt="#ImgNotFound" className='px-2' />
                        <img src="https://hubstaff.com/images/logos/freshbooks-mark.svg" alt="#ImgNotFound" className='px-2' />
                    </div>
                </div>
            </div>
        </>
    )
}

