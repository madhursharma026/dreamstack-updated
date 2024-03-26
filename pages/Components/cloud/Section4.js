import styles from '../../../styles/cloud/cloud.module.css';
import Image8 from "../../media/Cloud-New-Images/Image8.png";

export default function Section4() {
    return (
        <div className={`p-0`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="py-md-5">
                    <div className="row py-5">
                        <div className="col-lg-6 text-center">
                            <img src={Image8.src} alt="#ImgNotFound" style={{ width: '80%' }} />
                        </div>
                        <div className="col-lg-6 px-md-5" style={{ margin: 'auto' }}>
                            <div className={styles.scrnBeforeMDScrn}>
                                <h5 className='text-muted'>For LLM Companies And Research Organizations</h5>
                                <h1 className={styles.sectionTitle2}>Train and enhance high-quality LLMs</h1>
                                <h5 className='text-muted mt-3'>
                                    Accelerate your LLM's reasoning and coding capabilities with expert model training. Generate high-quality, proprietary human data for SFT, RLHF, and DPO.
                                </h5>
                                <button type="button" class="btn btn-dark py-2 px-4 mt-3"><b>Learn More</b></button>
                            </div>
                            <div className={styles.scrnAfterMDScrn}>
                                <h6 className='text-muted'><b>For LLM Companies And Research Organizations</b></h6>
                                <h1 style={{ fontWeight: '550' }}>Train and enhance high-quality LLMs</h1>
                                <h5 className='text-muted mt-3'>
                                    Accelerate your LLM's reasoning and coding capabilities with expert model training. Generate high-quality, proprietary human data for SFT, RLHF, and DPO.
                                </h5>
                                <button type="button" class="btn btn-dark py-2 px-4 mt-3 w-100"><b>Learn More</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
