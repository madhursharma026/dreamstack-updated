import Link from 'next/link';
import Image1 from "../../media/Homepage-Images/homepage-image-1.png";
import Image2 from "../../media/Homepage-Images/homepage-image-2.png";
import Image3 from "../../media/Homepage-Images/homepage-image-3.png";
import Image4 from "../../media/Homepage-Images/homepage-image-4.png";
import Image5 from "../../media/Homepage-Images/homepage-image-5.png";
import styles from '../../../styles/Homepage/IntroSection.module.css';
import { InputAdornment, TextField } from '@mui/material';

export default function IntroSection() {
    return (
        <>
            <div className={`p-0 mt-5`}>
                <div className="bg-primary">
                    <div className={`${styles.ContainerWidth}`}>
                        <div className={`row ${styles.IntroSection}`}>
                            <div className={`col-xxl-6`} style={{ margin: 'auto' }}>
                                <div className={`py-xxl-5 ${styles.rightSide} px-3 mt-xxl-0 mt-5`}>
                                    <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}><b>Get fully managed tech services</b></h1>
                                    <p className={`${styles.sectionBody} text-white`}>Use Dreamstack to imagine, deliver, and run solutions to your toughest business problems. Discover quality, speed, and cost efficiency from our internal industry experts and the fully managed teams they build for you.</p>
                                    <Link className={`btn ${styles.openPositionBtn} px-4 py-3`} href="/Turing" role="button"><b>Explore Services</b></Link>
                                    <Link className={`btn ${styles.salesBtn} px-4 py-3`} href="/contact" role="button"><b>Talk to sales</b></Link>
                                    <div className={`${styles.makeDivAlignCenterAfterLGScrn}`}>
                                        <div className="row mt-4">
                                            <div className="col-lg-4">
                                                <img src={Image2.src} alt="#ImgNotFound" />
                                                <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                            </div>
                                            <div className="col-lg-4">
                                                <img src={Image3.src} alt="#ImgNotFound" />
                                                <h6 className='p-2'>⭐⭐⭐⭐⭐</h6>
                                            </div>
                                        </div>
                                        <div className={`card ${styles.showAfterLGScrn} mb-4`}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-4">
                                                        Integrates with:
                                                    </div>
                                                    <div className="col-2">
                                                        <img src={Image4.src} alt="#ImgNotFound" className='w-100' />
                                                    </div>
                                                    <div className="col-6">
                                                        <img src={Image5.src} alt="#ImgNotFound" className='w-100' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-xxl-6 p-md-5 p-3`} style={{ background: `url(https://www.zoho.com/books/signup/images/signup-bg.png)`, backgroundSize: 'contain', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <img src={Image1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} /> */}
                                <div class="card w-100 p-md-5 p-3 m-sm-5 m-3" style={{ boxShadow: '0 20px 35px rgba(0, 34, 69, 0.03), 0 20px 35px rgba(0, 0, 0, 0.06)', maxWidth: '500px', margin: 'auto' }}>
                                    <div class="card-body">
                                        <h4 className='mt-sm-0 mt-4 text-center' style={{ lineHeight: '1', fontWeight: 'bolder' }}>Try Zoho Books for free</h4>
                                        <form className='mt-4'>
                                            <TextField id="outlined-start-adornment" sx={{ width: '100%' }} placeholder='Company Name' InputProps={{ startAdornment: <InputAdornment position="start">🏠</InputAdornment>, }} />
                                            <TextField id="outlined-start-adornment" className='mt-2' sx={{ width: '100%' }} placeholder='Email Address' InputProps={{ startAdornment: <InputAdornment position="start">✉</InputAdornment>, }} />
                                            <TextField id="outlined-start-adornment" className='mt-2' sx={{ width: '100%' }} placeholder='Mobile Number' InputProps={{ startAdornment: <InputAdornment position="start">📞 +91</InputAdornment>, }} />
                                            <TextField id="outlined-start-adornment" className='mt-2' sx={{ width: '100%' }} placeholder='Password' InputProps={{ startAdornment: <InputAdornment position="start">#</InputAdornment>, }} />
                                            <TextField id="outlined-start-adornment" className='mt-2' sx={{ width: '100%' }} placeholder='India' InputProps={{ startAdornment: <InputAdornment position="start">🌐</InputAdornment>, }} />
                                            <TextField id="outlined-start-adornment" className='mt-2' sx={{ width: '100%' }} placeholder='Uttar Pradesh' InputProps={{ startAdornment: <InputAdornment position="start">📍</InputAdornment>, }} />
                                            <div class="form-text">Your data will be in INDIA data center.</div>
                                            <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
                                            <label class="form-text mt-2" for="exampleCheck1">&nbsp; I agree to the Terms of Service and Privacy Policy.</label>
                                            <button type="button" class="btn p-2 w-100 mt-3" style={{ background: '#F5BA31' }}><b>Sign In</b></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card ${styles.hideAfterLGScrn}`} style={{ width: "380px", marginTop: "-40px", marginLeft: '73%', position: "absolute" }}>
                    <div className="card-body">
                        Integrates with:
                        <img src="https://hubstaff.com/images/logos/quickbooks-mark.svg" alt="#ImgNotFound" className='px-2' />
                        <img src="https://hubstaff.com/images/logos/freshbooks-mark.svg" alt="#ImgNotFound" className='px-2' />
                    </div>
                </div>
            </div >
        </>
    )
}

