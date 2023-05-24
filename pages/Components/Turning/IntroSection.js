import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/Turing/IntroSection.module.css';
import Images1 from "../../media/Turing-Images/turing-image-1.jpeg";
import Images2 from "../../media/Turing-Images/turing-image-2.jpeg";
import Images3 from "../../media/Turing-Images/turing-image-3.jpeg";
import Images4 from "../../media/Turing-Images/turing-image-4.jpeg";
import Images5 from "../../media/Turing-Images/turing-image-5.jpeg";
import Images6 from "../../media/Turing-Images/turing-image-6.jpeg";
import Images7 from "../../media/Turing-Images/turing-image-7.jpeg";

export default function IntroSection() {
    const router = useRouter();
    const [emailAddress, setEmailAddress] = useState('')

    function moveOnFirstboardingPages(e) {
        e.preventDefault()
        // router.push('FirstPage');
        router.push({
            pathname: 'FirstPage',
            query: { sendingEmailAddress: emailAddress }
        });
    }


    return (
        <div className={`px-md-4 px-3 py-lg-0 py-5 mt-5 ${styles.IntroSection}`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className={`${styles.imgStyle} col-xl-6 col-lg-5 order-lg-2 pb-lg-0 pb-3`}>
                        <img src={Images1.src} alt="#ImgNotFound" className={`w-100`} />
                    </div>
                    <div className={`col-xl-6 col-lg-7 py-5 mt-xxl-5`}>
                        <h1 className={`${styles.sectionTitle} pt-lg-5`}>
                            The world’s best engineering team for your project, vetted by AI
                        </h1>
                        <h5 className={`${styles.sectionBody} pt-2`}>
                            Your software engineering challenges. <br />
                            Dreamstack modern development methodology. <br />
                            An intelligent solution, every time. <br /><br />

                            Customized strategy and execution, led by our internal industry experts and built by our deep-vetting global talent platform.
                        </h5>
                        <form onSubmit={(e) => moveOnFirstboardingPages(e)} className={`${styles.formStyleBeforeLGScrn}`}>
                            <div class="input-group my-5">
                                <input type="email" required class="form-control" placeholder="Your work email" aria-describedby="basic-addon2" onChange={(e) => setEmailAddress(e.target.value)}
                                    style={{ fontSize: '16px', lineHeight: '1.3', padding: '13px 12px' }} />
                                <button type='submit' class="input-group-text bg-primary text-white" id="basic-addon2" style={{ border: 'none', fontSize: '16px', lineHeight: '1.3', padding: '15px 20px', fontWeight: '550' }}>Talk to an Expert</button>
                            </div>
                        </form>
                        <form onSubmit={(e) => moveOnFirstboardingPages(e)} className={`${styles.formStyleAfterLGScrn} my-3`}>
                            {/* <div class="input-group my-5">
                                <input type="email" required class="form-control" placeholder="Your work email" aria-describedby="basic-addon2" onChange={(e) => setEmailAddress(e.target.value)}
                                    style={{ fontSize: '16px', lineHeight: '1.3', padding: '13px 12px' }} />
                                <button type='submit' class="input-group-text bg-primary text-white" id="basic-addon2" style={{ border: 'none', fontSize: '16px', lineHeight: '1.3', padding: '15px 20px', fontWeight: '550' }}>Talk to an Expert</button>
                            </div> */}
                            <input type="email" required class="form-control" placeholder="Your work email" onChange={(e) => setEmailAddress(e.target.value)} style={{ fontSize: '16px', lineHeight: '1.3', padding: '13px 12px' }} />
                            <button type='submit' class="bg-primary text-white w-100 mt-2" style={{ border: 'none', fontSize: '16px', borderRadius: '6px', lineHeight: '1.3', padding: '15px 20px', fontWeight: '550' }}>Talk to an Expert</button>
                        </form>
                        <h5 className={`${styles.sectionBody} pt-2`}>
                            Trusted by 900+ companies, including
                        </h5>
                        <div className="row">
                            <div className="col-sm-2 col-3 mt-3 offset-sm-0 offset-1">
                                <img src={Images2.src} alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-2 col-3 mt-4">
                                <img src={Images3.src} alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-3 col-4 mt-4">
                                <img src={Images4.src} alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-2 col-4 mt-3 offset-sm-0 offset-1">
                                <img src={Images5.src} alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-1 col-2 mt-4">
                                <img src={Images6.src} alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-sm-2 col-3 mt-sm-2 mt-4">
                                <img src={Images7.src} alt="#ImgNotFound" width='100%' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

