import Link from 'next/link';
import styles from '../../../styles/cybersecurity/TalkToExpert.module.css';

export default function TalkToExpert() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3 px-xl-5`} style={{ background: "#1E2222" }}>
            <div className="row px-lg-5 py-5">
                <div className={`col-md-6 pt-3`}>
                    <h1 className={`${styles.sectionTitle} text-white`}>Transformation starts here</h1>
                    <h5 className="text-muted my-3">Reimagine your future.</h5>
                    <Link className={`btn ${styles.btnStyle} text-white`} href="/contact" role="button">Talk To our Expert</Link>
                </div>
                <div className="col-md-6 pt-3 text-white" style={{ borderLeft: '2px solid white' }}>
                    <div className="px-md-5 px-3">
                        <h6><b>FIND OUT MORE</b></h6>
                        <button type="button" className="btn btn-light" style={{ borderRadius: '50px', background: "transparent", color: "white" }}>What We Do →</button><br />
                        <button type="button" className="btn btn-light mt-3" style={{ borderRadius: '50px', background: "transparent", color: "white" }}>The DS Way →</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
