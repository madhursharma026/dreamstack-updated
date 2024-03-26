import Link from 'next/link';
import styles from '../../../styles/cloud/cloud.module.css';

export default function Section10() {
    return (
        <div className={`p-0`}>
            <div style={{ backgroundImage: "url('https://images.prismic.io/turing/Zf0agM68zyqdRp1N_Accelerate_1920x506.webp?auto=format,compress')", paddingTop: '100px', paddingBottom: '100px', backgroundSize: 'cover', backgroundPosition: '50%' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}>Want to accelerate your business with AI?</h1>
                            <p className={`${styles.sectionBody} text-white my-4`}>Talk to one of our solutions architects and get a complimentary GenAI advisory session.</p>
                            <Link className={`btn btn-primary px-5 py-3`} href="/Turing" role="button"><b>Get Started</b></Link>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
