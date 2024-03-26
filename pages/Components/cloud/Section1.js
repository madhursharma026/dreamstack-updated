import Link from 'next/link';
import styles from '../../../styles/cloud/cloud.module.css';
import Image1 from "../../media/Cloud-New-Images/Image1.png";

export default function Section1() {
    return (
        <div className={`p mt-5`}>
            <div style={{ backgroundImage: `url(${Image1.src})`, paddingTop: '100px', paddingBottom: '100px', backgroundSize: 'cover', backgroundPosition: '50%' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="row py-lg-5 my-lg-5">
                        <div className="col-md-6">
                            <div className={styles.scrnBeforeMDScrn}>
                                <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}>Innovate your business with AI-powered talent</h1>
                                <p className={`${styles.sectionBody} text-white my-4`}>Turing uses proprietary AI to help companies build enterprise applications, train and enhance LLMs, and hire on-demand technical professionals.</p>
                                <Link className={`btn btn-primary px-5 py-3`} href="/Turing" role="button"><b>Get Started</b></Link>
                            </div>
                            <div className={styles.scrnAfterMDScrn}>
                                <h1 className={`pt-md-5 pt-3 text-white`}>Innovate your business with AI-powered talent</h1>
                                <p className={`text-white my-4`}>Turing uses proprietary AI to help companies build enterprise applications, train and enhance LLMs, and hire on-demand technical professionals.</p>
                                <Link className={`btn btn-primary w-100 py-2`} href="" role="button"><b>Get Started</b></Link>
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
