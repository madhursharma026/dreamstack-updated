import styles from '../../../styles/cloud/cloud.module.css';

export default function Section4() {
    return (
        <div className={`p-0`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="py-md-5">
                    <div className="row py-5">
                        <div className="col-lg-6 text-center">
                            <img src="https://images.prismic.io/turing/Zf0Y0868zyqdRp1B_NodeContainer-600x600.webp?auto=format%2Ccompress&fit=max&w=1200" alt="#ImgNotFound" style={{width: '80%'}} />
                        </div>
                        <div className="col-lg-6 px-md-5" style={{ margin: 'auto' }}>
                            <h5 className='text-muted'>For LLM Companies And Research Organizations</h5>
                            <h1 className={styles.sectionTitle2}>Train and enhance high-quality LLMs</h1>
                            <h5 className='text-muted mt-3'>
                                Accelerate your LLM's reasoning and coding capabilities with expert model training. Generate high-quality, proprietary human data for SFT, RLHF, and DPO.
                            </h5>
                                <button type="button" class="btn btn-dark py-2 px-4 mt-3"><b>Learn More</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}