import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from 'react-bootstrap/Form';
import Link from "next/link";
import styles from '../styles/Turing/OnBoardingPages.module.css';

export default function SecondPage() {
    const router = useRouter();
    const [companySize, setCompanySize] = useState('')
    const [capitalFunded, setCapitalFunded] = useState('')
    const [IPOListed, setIPOListed] = useState('')
    const [showCompanySizeAlert, setShowCompanySizeAlert] = useState(false)
    const [showCapitalFundedAlert, setShowCapitalFundedAlert] = useState(false)
    const [showIPOListedAlert, setShowIPOListedAlert] = useState(false)


    function moveOnThirdboardingPages(e) {
        e.preventDefault()
        if (capitalFunded === '' || IPOListed === '' || companySize === '') {
            if (companySize === '') {
                setShowCompanySizeAlert(true)
            }
            if (capitalFunded === '') {
                setShowCapitalFundedAlert(true)
            }
            if (IPOListed === '') {
                setShowIPOListedAlert(true)
            }
        } else {
            if (capitalFunded === 'No' && IPOListed === 'No') {
                router.push('ThirdPageYes')
            } else {
                router.push('ThirdPageYes')
            }
        }
    }

    return (
        <div>
            <Head>
                <title>SecondPage - Dreamstack</title>
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
                            <form onSubmit={(e) => moveOnThirdboardingPages(e)}>
                                <Form.Group controlId="emailAddress" style={{ width: '100%' }}>
                                    <Form.Label><b>Company:</b></Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        defaultValue="Gmail"
                                        placeholder='email@emample.com'
                                        style={{ fontSize: '16px', lineHeight: '1.3', padding: '13px 12px' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="emailAddress" required style={{ width: '100%', marginTop: '30px' }}>
                                    <Form.Label><b>What is your company size:</b></Form.Label>
                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio1" style={{ border: '0', background: `${companySize === "1to10" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setCompanySize('1to10'), setShowCompanySizeAlert(false))}>1-10</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio2" style={{ border: '0', background: `${companySize === "11to50" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setCompanySize('11to50'), setShowCompanySizeAlert(false))}>11-50</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio3" style={{ border: '0', background: `${companySize === "51to250" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setCompanySize('51to250'), setShowCompanySizeAlert(false))}>51-250</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio4" style={{ border: '0', background: `${companySize === "251to10K" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setCompanySize('251to10K'), setShowCompanySizeAlert(false))}>251-10K</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio5" style={{ border: '0', background: `${companySize === "10KPlus" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setCompanySize('10KPlus'), setShowCompanySizeAlert(false))}>10K+</label>
                                    </div>
                                    {showCompanySizeAlert ?
                                        <div style={{ fontSize: '12px' }} className="text-danger">Please Fill out this field</div>
                                        :
                                        <></>
                                    }
                                </Form.Group>
                                <Form.Group controlId="emailAddress" required style={{ width: '100%', marginTop: '30px' }}>
                                    <Form.Label><b>Are you Seed or Venture Capital funded?:</b></Form.Label>
                                    <br />
                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio6" style={{ border: '0', background: `${capitalFunded === "Yes" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setCapitalFunded('Yes'), setShowCapitalFundedAlert(false))}>Yes</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio7" style={{ border: '0', background: `${capitalFunded === "No" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setCapitalFunded('No'), setShowCapitalFundedAlert(false))}>No</label>
                                    </div>
                                    {showCapitalFundedAlert ?
                                        <div style={{ fontSize: '12px' }} className="text-danger">Please Fill out this field</div>
                                        :
                                        <></>
                                    }
                                </Form.Group>
                                <Form.Group controlId="emailAddress" required style={{ width: '100%', marginTop: '30px' }}>
                                    <Form.Label><b>Are you a publicly listed/post IPO company?:</b></Form.Label>
                                    <br />
                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio8" style={{ border: '0', background: `${IPOListed === "Yes" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setIPOListed('Yes'), setShowIPOListedAlert(false))}>Yes</label>

                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio9" autocomplete="off" />
                                        <label class="btn mx-1" for="btnradio9" style={{ border: '0', background: `${IPOListed === "No" ? '#D5E2F9' : '#f2f2f2'}`, borderRadius: '5px' }} onClick={() => (setIPOListed('No'), setShowIPOListedAlert(false))}>No</label>
                                    </div>
                                    {showIPOListedAlert ?
                                        <div style={{ fontSize: '12px' }} className="text-danger">Please Fill out this field</div>
                                        :
                                        <></>
                                    }
                                </Form.Group>
                                <div className="row mt-5">
                                    <div className="col-6">
                                        <Link class="btn btn-outline-secondary w-100 p-2" href="/Turing" role="button">Back</Link>
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" class="btn btn-primary w-100 p-2">Continue</button>
                                    </div>
                                </div>
                            </form>
                            <div class="progress mt-4" role="progressbar" aria-label="Basic example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ height: '5px' }}>
                                <div class="progress-bar" style={{ width: '40%' }}></div>
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
                                <img src="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/02/pepsi-logo_5e53a34c893dc.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-2 col-4 mt-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-3 col-4 mt-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Johnson_and_Johnson_Logo.svg/2560px-Johnson_and_Johnson_Logo.svg.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-2 col-5 mt-3">
                                <img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-1.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-1 col-3 mt-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo-Iron-Mark-Black.svg/1200px-Volvo-Iron-Mark-Black.svg.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-xxl-2 col-4 mt-3">
                                <img src="https://logos-world.net/wp-content/uploads/2021/02/Disney-Logo.png" alt="#ImgNotFound" width='100%' />
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

