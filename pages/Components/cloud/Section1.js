import Link from 'next/link';
import styles from '../../../styles/cloud/cloud.module.css';

export default function Section1() {
    return (
        <div className={`p mt-5`}>
            <div style={{ backgroundImage: "url('https://images.prismic.io/turing/Zf0Yoc68zyqdRp08_HomepageHero-1920x900.webp?auto=format,compress')", paddingTop: '100px', paddingBottom: '100px', backgroundSize: 'cover', backgroundPosition: '50%' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="row py-lg-5 my-lg-5">
                        <div className="col-md-6">
                            <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}>Innovate your business with AI-powered talent</h1>
                            <p className={`${styles.sectionBody} text-white my-4`}>Turing uses proprietary AI to help companies build enterprise applications, train and enhance LLMs, and hire on-demand technical professionals.</p>
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
