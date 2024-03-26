import Link from 'next/link';
import styles from '../../../styles/cloud/cloud.module.css';
import Image12 from "../../media/Cloud-New-Images/Image12.png";

export default function Section6() {
    return (
        <div className={`p-0`}>
            <div style={{ backgroundImage: `url(${Image12.src})`, paddingTop: '100px', paddingBottom: '100px', backgroundSize: 'cover', backgroundPosition: '50%' }}>
                <div className={`${styles.ContainerWidth} text-white`}>
                    <div className="row py-lg-5 my-lg-5">
                        <div className="col-md-6">
                            <h5>For enterprises and startups</h5>
                            <h1 className={`${styles.sectionTitle2}`}>Scale your software development team on demand</h1>
                            <p className={`${styles.sectionBody} my-4`}>Accelerate your software engineering and close skill gaps with our AI-vetted technical professionals.</p>
                            <div className="row">
                                <div className="col-xl-6 col-md-7 p-3">
                                    <h5>Hire individuals</h5>
                                    <h6>Find the right talent from the world's largest network of vetted developers, data scientists, LLM trainers, and more.</h6>
                                </div>
                                <div className="col-xl-6 col-md-5 p-3">
                                    <h5>Hire technical teams</h5>
                                    <h6>Build an agile team of technical professionals—seamlessly integrated into your workflow.</h6>
                                </div>
                            </div>
                            <Link className={`btn btn-primary px-5 py-3`} href="/Turing" role="button"><b>Hire Professionals</b></Link>
                            <h6 className='mt-3'>Two week free trial available</h6>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
