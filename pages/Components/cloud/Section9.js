import Link from 'next/link';
import styles from '../../../styles/cloud/cloud.module.css';

export default function Section9() {
    return (
        <div className={`p-0`}>
            <div style={{ backgroundImage: "url('https://images.prismic.io/turing/Zf0aTs68zyqdRp1L_WhitepaperBG-1920x824.webp?auto=format,compress')", paddingTop: '100px', paddingBottom: '100px', backgroundSize: 'cover', backgroundPosition: '50%' }}>
                <div className={`${styles.ContainerWidth} text-white`}>
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <img src="https://images.prismic.io/turing/Zf0aZs68zyqdRp1M_UsingLLMCoding-Whitepaper-Mockup_WithPadding.webp?auto=format%2Ccompress&fit=max&w=1920" alt="#ImgNotFound" className='w-100' />
                        </div>
                        <div className="col-lg-6" style={{ margin: 'auto' }}>
                            <h1 className={`${styles.sectionTitle2}`}>Discover your ROI with GenAI</h1>
                            <p className={`${styles.sectionBody} my-4`}>Efficient strategies make LLM training and development success possible.</p>
                            <p className={`${styles.sectionBody} my-4`}>Empower your research teams without sacrificing your budget or business goals with our tips on strategic use, development of minimum viable models, and prompt engineering for a variety of applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  
