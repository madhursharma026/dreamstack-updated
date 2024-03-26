import Link from 'next/link';
import styles from '../../../styles/cloud/cloud.module.css';
import Image23 from "../../media/Cloud-New-Images/Image23.png";

export default function Section10() {
    return (
        <div className={`p-0`}>
            <div style={{ backgroundImage: `url(${Image23.src})`, paddingTop: '100px', paddingBottom: '100px', backgroundSize: 'cover', backgroundPosition: '50%' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="row text-white">
                        <div className="col-md-6">
                            {/* <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}>Want to accelerate your business with AI?</h1>
                            <p className={`${styles.sectionBody} text-white my-4`}>Talk to one of our solutions architects and get a complimentary GenAI advisory session.</p>
                            <Link className={`btn btn-primary px-5 py-3`} href="/Turing" role="button"><b>Get Started</b></Link> */}
                            <div className={styles.scrnBeforeMDScrn}>
                                <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}>Want to accelerate your business with AI?</h1>
                                <p className={`${styles.sectionBody} text-white my-4`}>Talk to one of our solutions architects and get a complimentary GenAI advisory session.</p>
                                <Link className={`btn btn-primary px-5 py-3`} href="/Turing" role="button"><b>Get Started</b></Link>
                            </div>
                            <div className={styles.scrnAfterMDScrn}>
                                <h1 style={{ fontWeight: '550' }}>Want to accelerate your business with AI?</h1>
                                <h5 className='mt-3'>
                                    Talk to one of our solutions architects and get a complimentary GenAI advisory session.
                                </h5>
                                <button type="button" class="btn btn-primary py-2 px-4 mt-3 w-100"><b>Get Started</b></button>
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
