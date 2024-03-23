import Link from 'next/link';
import styles from '../../../styles/cybersecurity/TalkToExpert.module.css';
import Images10 from "../../media/Cybersecurity-Images/cybersecurity-image-10.jpeg";

export default function TalkToExpert() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{ background: "#1E2222" }}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <img src={Images10.src} alt="#ImgNotFound" className='w-100' style={{ maxHeight: "300px" }} />
                    </div>
                    <div className={`col-md-6 ${styles.rightSide} pt-3`}>
                        <h1 className={`${styles.sectionTitle} text-white`}>Transformation starts here</h1>
                        <h5 className="text-muted my-3">Ready to secure your digital estate?</h5>
                        {/* <button type="button" className={`btn ${styles.btnStyle} text-white`}>Talk To our Expert</button> */}
                        <Link href="/contact" className={`btn ${styles.btnStyle} text-white`}>Talk To our Expert</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

