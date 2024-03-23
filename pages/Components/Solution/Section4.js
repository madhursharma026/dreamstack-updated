import Link from 'next/link';
import styles from '../../../styles/Solution/Section4.module.css';
import Images6 from "../../media/Solution-Images/solution-image-6.png";
import Images7 from "../../media/Solution-Images/solution-image-7.png";
import Images8 from "../../media/Solution-Images/solution-image-8.png";

export default function Section4() {
    return (
        <div className={`p-0 px-md-4 px-3`}>
            <div className={`${styles.ContainerWidth} py-5`}>
                <h1 className={`${styles.sectionTitle} py-lg-5 py-3 text-center`}><b>Comprehensive <span className='text-primary'>agency management software</span> <br /> for creative teams to recruiting agencies</b></h1>
                <div className={`row`}>
                    <div className={`col-lg-6 text-center ${styles.imageColumn}`}>
                        <img src={Images6.src} alt="#ImgNotFound" className={`w-100 h-100`} />
                    </div>
                    <div className={`col-lg-6 pb-lg-0 pb-5 pt-lg-0 pt-5 px-lg-5 ${styles.rightSide}`}>
                        <h6 className={`text-primary pb-3 ${styles.cardSubHeading}`}>BUDGET REPORTS</h6>
                        <h5 className="card-subtitle mb-3" style={{ marginTop: '-10px' }}><b>Faster, easier invoicing</b></h5>
                        <p className="card-text text-muted" style={{ marginTop: '-10px' }}>View profitability and budget data from over 18 different reports. See hours worked by client or project, keep an eye on costs, and more. You can schedule reports or export them for easy reference.</p>

                        <h6 className={`text-primary pb-3 ${styles.cardSubHeading}`}>AVAILABLE FOR Dreamstack Desk</h6>
                        <h5 className="card-subtitle mb-3" style={{ marginTop: '-10px' }}><b>Built-in productivity features</b></h5>
                        <p className="card-text text-muted" style={{ marginTop: '-10px' }}>Dreamstack helps you boost staff productivity. View activity rates to identify overloaded or underutilized agency teams. See screenshots while tracking time, apps and URLs, and more.</p>

                        <h6 className={`text-primary pb-3 ${styles.cardSubHeading}`}>Dreamstack Task</h6>
                        <h5 className="card-subtitle mb-3" style={{ marginTop: '-10px' }}><b>Time and project management in sync</b></h5>
                        <p className="card-text text-muted" style={{ marginTop: '-10px' }}>Manage agency projects and make sure all of your client work is headed in the right direction with Dreamstack Tasks. Estimate hours needed and see actuals on each task as your team tracks time.</p>
                    </div>
                </div>

                <div className="row" style={{ maxWidth: '1200px', margin: 'auto' }}>
                    <div className="col-lg-5 col-md-6 p-lg-5 pt-5 text-center">
                        <img src={Images7.src} alt="#ImgNotFound" className={`${styles.imgWidth} h-100`} />
                    </div>
                    <div className="col-lg-7 col-md-6 p-lg-5 pt-5">
                        <p className={`${styles.carouselBody}`}>“Dreamstack saved us $170,000 a year and allowed us to streamline our business processes.”</p>
                        <div className="row mt-xl-5 pt-xxl-5">
                            <div className="col-6">
                                <h6 className={`pt-lg-5`}>Cody Rogers /<br /> Oregon, US</h6>
                            </div>
                            <div className="col-6">
                                <img className={`pt-lg-5`} style={{ float: 'right' }} src={Images8.src} alt="#ImgNotFound" />
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className={`col-xl-6 ${styles.leftSideBtn} text-center`}>
                                <button type="button" className="btn btn-outline-primary btn-lg">Read case study</button>
                            </div>
                            <div className={`col-xl-6 pt-2 ${styles.rightSideLink} text-center`}>
                                <Link href="/" style={{ fontSize: '20px' }}>View all case studies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

