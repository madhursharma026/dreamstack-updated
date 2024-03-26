import styles from '../../../styles/cloud/cloud.module.css';
import Image9 from "../../media/Cloud-New-Images/Image9.svg";
import Image10 from "../../media/Cloud-New-Images/Image10.svg";
import Image11 from "../../media/Cloud-New-Images/Image11.svg";

export default function Section5() {
    return (
        <div className='pb-5' style={{ background: "#E9F3FF" }}>
            <div className={`py-5`}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="py-md-5">
                        <div className="row py-5">
                            <div className="col-lg-6">
                                <h5>For enterprise companies</h5>
                                <h1 className={`${styles.sectionTitle2}`}>Build and implement GenAI into your business</h1>
                            </div>
                            <div className="col-lg-6">
                                <h5 className={`text-muted my-4`}>Accelerate your customer success, internal productivity, market share, and more with GenAI technology.</h5>
                                <button type="button" className="btn btn-dark py-2 px-4 mt-3"><b>Learn More</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.flipCard}>
                                <div className={styles.flipCardInner}>
                                    <div className={`${styles.flipCardFront} p-5`}>
                                        <img src={Image9.src} alt="#ImgNotFound" />
                                        <h1 className='mt-3'>Customized enterprise LLMs</h1>
                                    </div>
                                    <div className={styles.flipCardBack}>
                                        <h4 className='p-xl-5 p-4'>We build bespoke large language models tailored to your business needs with advanced techniques, like retrieval augmented generation and supervised fine-tuning, for seamless integration with your workflows.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.flipCard}>
                                <div className={styles.flipCardInner}>
                                    <div className={`${styles.flipCardFront} p-5`}>
                                        <img src={Image11.src} alt="#ImgNotFound" />
                                        <h1 className='mt-3'>Proprietary data protected</h1>
                                    </div>
                                    <div className={styles.flipCardBack}>
                                        <h4 className='p-xl-5 p-4'>We safeguard and enrich your proprietary data with our secure, high-quality human data to unlock tailored AI solutions that scale with your business.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.flipCard}>
                                <div className={styles.flipCardInner}>
                                    <div className={`${styles.flipCardFront} p-5`}>
                                        <img src={Image10.src} alt="#ImgNotFound" />
                                        <h1 className='mt-3'>Perfected GenAI strategies</h1>
                                    </div>
                                    <div className={styles.flipCardBack}>
                                        <h4 className='p-xl-5 p-4'>We help you build meaningful strategies that maximize GenAI—accelerating product development, productivity, and more—customized to your needs.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.flipCardAfterLGScrn}>
                        <div class="card p-3 mt-3" style={{ border: 'none' }}>
                            <div class="card-body">
                                <img src={Image9.src} alt="#ImgNotFound" />
                                <h1 className='mt-3'>Customized enterprise LLMs</h1>
                                <h4>We build bespoke large language models tailored to your business needs with advanced techniques, like retrieval augmented generation and supervised fine-tuning, for seamless integration with your workflows.</h4>
                            </div>
                        </div>

                        <div class="card p-3 mt-3" style={{ border: 'none' }}>
                            <div class="card-body">
                                <img src={Image11.src} alt="#ImgNotFound" />
                                <h1 className='mt-3'>Proprietary data protected</h1>
                                <h4>We safeguard and enrich your proprietary data with our secure, high-quality human data to unlock tailored AI solutions that scale with your business.</h4>
                            </div>
                        </div>

                        <div class="card p-3 mt-3" style={{ border: 'none' }}>
                            <div class="card-body">
                                <img src={Image10.src} alt="#ImgNotFound" />
                                <h1 className='mt-3'>Perfected GenAI strategies</h1>
                                <h4>We help you build meaningful strategies that maximize GenAI—accelerating product development, productivity, and more—customized to your needs.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
