import Link from 'next/link';
import { useState } from 'react';
import emailjs from "emailjs-com";
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Image1 from "../../media/Homepage-Images/homepage-image-1.png";
import Image2 from "../../media/Homepage-Images/homepage-image-2.png";
import Image3 from "../../media/Homepage-Images/homepage-image-3.png";
import Image4 from "../../media/Homepage-Images/homepage-image-4.png";
import Image5 from "../../media/Homepage-Images/homepage-image-5.png";
import styles from '../../../styles/Homepage/IntroSection.module.css';
import { InputAdornment, TextField } from '@mui/material';

export default function IntroSection() {
    const [open, setOpen] = useState(false);
    const [AlertMessage, setAlertMessage] = useState("")
    const [AlertMessageBg, setAlertMessageBg] = useState("")
    const [country, setCountry] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [companyName, setCompanyName] = useState("")

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    function sendEmail(e) {
        e.preventDefault()
        const templateParams = {
            'companyName': companyName,
            'emailAddress': emailAddress,
            'phoneNumber': phoneNumber,
            'country': country
        };

        emailjs.send(
            "service_u3618y9",
            "template_zach42b",
            templateParams,
            "4nra8RokJk8Oy1-M1"
        ).then(res => {
            setCompanyName("");
            setEmailAddress("");
            setPhoneNumber("");
            setCountry("");
            console.log(res);
            setAlertMessageBg("success");
            setAlertMessage("Email Sent Successfully!!!");
            handleClick();
        }).catch(err => {
            console.log(err);
            setAlertMessageBg("danger");
            setAlertMessage(err);
            handleClick();
        });
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white bg-${AlertMessageBg}`}>
                    {AlertMessage}
                </Alert>
            </Snackbar>
            <div className={`pb-5 mt-5`}>
                <div className="bg-primary pb-5">
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
                                    </div>
                                </div>
                            </div>
                            <div className={`col-xxl-6 p-md-5 p-3 d-md-block d-none`} style={{ background: `url(https://www.zoho.com/books/signup/images/signup-bg.png)`, backgroundSize: 'contain', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <img src={Image1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100 h-100`} /> */}
                                <div class="card w-100 p-md-5 p-3 m-sm-5 m-3" style={{ boxShadow: '0 20px 35px rgba(0, 34, 69, 0.03), 0 20px 35px rgba(0, 0, 0, 0.06)', maxWidth: '500px', margin: 'auto' }}>
                                    <div class="card-body">
                                        <h4 className='mt-sm-0 mt-4 text-center' style={{ lineHeight: '1', fontWeight: 'bolder' }}>Try Zoho Books for free</h4>
                                        <form className='mt-4' onSubmit={(e) => sendEmail(e)}>
                                            <TextField id="companyName" sx={{ width: '100%' }} placeholder='Company Name' InputProps={{ startAdornment: <InputAdornment position="start">🏠</InputAdornment>, }} value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                            <TextField id="emailAddress" className='mt-2' sx={{ width: '100%' }} placeholder='Email Address' InputProps={{ startAdornment: <InputAdornment position="start">✉</InputAdornment>, }} value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                                            <TextField id="phoneNumber" className='mt-2' sx={{ width: '100%' }} placeholder='Mobile Number' InputProps={{ startAdornment: <InputAdornment position="start">📞 +91</InputAdornment>, }} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                            <TextField id="country" className='mt-2' sx={{ width: '100%' }} placeholder='India' InputProps={{ startAdornment: <InputAdornment position="start">🌐</InputAdornment>, }} value={country} onChange={(e) => setCountry(e.target.value)} />
                                            <div class="form-text">Your data will be in INDIA data center.</div>
                                            <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
                                            <label class="form-text mt-2" for="exampleCheck1">&nbsp; I agree to the Terms of Service and Privacy Policy.</label>
                                            <button type="submit" class="btn p-2 w-100 mt-3" style={{ background: '#F5BA31' }}><b>Sign In</b></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='d-md-none d-block text-center py-5 mb-5' style={{ maxWidth: '300px', margin: 'auto' }}>
                                <img src="https://www.zoho.com/books/images/home-header-image.webp" alt="#ImgNotFound" className='w-100 mb-5' />
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>
                <div className={`${styles.ContainerWidth}`} style={{ marginTop: '-140px' }}>
                    <div class="card w-100 d-sm-block d-none p-3 bg-black text-white rounded-5">
                        <div class="card-body">
                            <p className={`text-center ${styles.h3CustomFont}`}><b>Trusted by thousands of <br /> businesses worldwide</b></p>
                            <hr />
                            <div className="row p-5">
                                <div className="col-lg-2 col-md-4 col-6" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer1}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer2}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer3}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer4}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer5}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer6}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer1}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer2}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer3}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer4}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer5}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer6}`} />
                                </div>
                                <hr />
                                <div className="col-lg-3 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer7}`} />
                                </div>
                                <div className="col-lg-3 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer8}`} />
                                </div>
                                <div className="col-lg-3 col-md-4 col-6 d-md-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer9}`} />
                                </div>
                                <div className="col-lg-3 col-md-4 col-6 d-lg-block d-none" style={{ margin: 'auto', maxWidth: '200px' }}>
                                    <div className={`${styles.bodyContainer10}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card w-100 d-block d-sm-none p-3 bg-black text-white rounded-0">
                        <div class="card-body">
                            <p className={`text-center ${styles.h3CustomFont}`}><b>Trusted by thousands of <br /> businesses worldwide</b></p>
                            <hr />
                            <div className="row p-5">
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className={`${styles.bodyContainer1}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className={`${styles.bodyContainer2}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className={`${styles.bodyContainer3}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className={`${styles.bodyContainer4}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className={`${styles.bodyContainer5}`} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className={`${styles.bodyContainer6}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

