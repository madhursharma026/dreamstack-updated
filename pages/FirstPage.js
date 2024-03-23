import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from 'react-bootstrap/Form';
import Link from "next/link";
import styles from '../styles/Turing/OnBoardingPages.module.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import Images2 from "./media/Turing-Images/turing-images-2.png";
import Images3 from "./media/Turing-Images/turing-images-3.png";
import Images4 from "./media/Turing-Images/turing-images-4.png";
import Images5 from "./media/Turing-Images/turing-images-5.png";
import Images6 from "./media/Turing-Images/turing-images-6.png";
import Images7 from "./media/Turing-Images/turing-images-7.png";


export default function FirstPage() {
    const router = useRouter();
    const [showAlert, setShowAlert] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')

    function moveOnSecondboardingPages(e) {
        e.preventDefault()
        if (phoneNumber === "") {
            setShowAlert(true)
        } else {
            router.push('SecondPage')
        }
    }

return (
    <div>
        <Head>
            <title>FirstPage - Dreamstack</title>
            <meta name="description" content="Turning - Dreamstack" />
        </Head>
        <Header />
        <div className="row">
            <div className={`col-md-6 mt-5`}>
                <div className={`${styles.ContainerWidth}`}>
                    <br /><br /><br /><br /><br />
                    <div className="px-lg-5 px-3">
                        <h1>Your custom tech services</h1>
                        <p className={`${styles.sectionBody}`}>To start building your solutions strategy, we need some contact details.</p>
                        <form onSubmit={(e) => moveOnSecondboardingPages(e)}>
                            <Form.Group controlId="emailAddress" style={{ width: '100%' }}>
                                <Form.Label><b>Work Email Address:</b></Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    value={router.query.sendingEmailAddress}
                                    placeholder='email@emample.com'
                                    disabled
                                    style={{ fontSize: '16px', lineHeight: '1.3', padding: '13px 12px' }}
                                />
                            </Form.Group>
                            <Form.Group controlId="phoneNumber" style={{ width: '100%', marginTop: '20px' }}>
                                <Form.Label><b>Phone Number:</b></Form.Label>
                                {/* <Form.Control
                                    required
                                    type="text"
                                    style={{ fontSize: '16px', lineHeight: '1.3', padding: '13px 12px' }}
                                /> */}
                                <PhoneInput onChange={(e) => (setPhoneNumber(e), setShowAlert(false))} 
                                    country={'in'} inputStyle={{ padding: '13px 50px', lineHeight: '1.3', width: '100%' }}
                                />
                                {showAlert ?
                                    <div style={{ fontSize: '12px' }} className="text-danger">Please Fill out this field</div>
                                    :
                                    <></>
                                }
                            </Form.Group>
                            <div className="row mt-5">
                                <div className="col-6">
                                    <Link className="btn btn-outline-secondary w-100 p-2" href="/Turing" role="button">Back</Link>
                                </div>
                                <div className="col-6">
                                    <button type="submit" className="btn btn-primary w-100 p-2">Continue</button>
                                </div>
                            </div>
                        </form>
                        <div className="progress mt-4" role="progressbar" aria-label="Basic example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ height: '5px' }}>
                            <div className="progress-bar" style={{ width: '10%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`col-md-6 mt-5`} style={{ background: '#212121', color: 'white', height: '100vh' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <br /><br /><br /><br /><br />
                    <h1>How does Services work?</h1>
                    <p className={`${styles.sectionBody}`}>We’re happy to answer questions and build your custom business solution.</p>
                    <ul className="mb-5">
                        <li className={`${styles.sectionBody}`}>We build a comprehensive solution strategy</li>
                        <li className={`${styles.sectionBody}`}>We plan, staff, deliver, and manage technology projects and programs across several technical domains</li>
                        <li className={`${styles.sectionBody}`}>We get the right people for the job with the quality, speed, and cost effectiveness of our Talent Cloud</li>
                    </ul>
                    <div className="row mt-5 pt-5">
                        <div className="col-xxl-2 col-4 mt-3">
                            <img src={Images2.src} alt="#ImgNotFound" width='100%' />
                        </div>
                        <div className="col-xxl-2 col-4 mt-3">
                            <img src={Images3.src} alt="#ImgNotFound" width='100%' />
                        </div>
                        <div className="col-xxl-3 col-4 mt-3">
                            <img src={Images4.src} alt="#ImgNotFound" width='100%' />
                        </div>
                        <div className="col-xxl-2 col-5 mt-3">
                            <img src={Images5.src} alt="#ImgNotFound" width='100%' />
                        </div>
                        <div className="col-xxl-1 col-3 mt-3">
                            <img src={Images6.src} alt="#ImgNotFound" width='100%' />
                        </div>
                        <div className="col-xxl-2 col-4 mt-3">
                            <img src={Images7.src} alt="#ImgNotFound" width='100%' />
                        </div>
                    </div>
                    <h5 className={`${styles.sectionBody} pt-3 text-center mb-5`}>
                        Trusted by 900+ companies, including
                    </h5>
                </div>
            </div>
        </div>
    </div>
)
}

