import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Image16 from "../../media/Homepage-Images/homepage-image-16.png";
import styles from '../../../styles/Homepage/LoveTheWeb.module.css'

export default function LoveTheWeb() {
    const [visibleForm, setVisibleForm] = useState(false)
    const [showNextData, setShowNextData] = useState(false)

    function visibleFormFunction() {
        setVisibleForm(true)
    }

    function formSubmit() {
        setShowNextData(true)
    }

    return (
        <div className={`pt-3 my-3 ${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className={`col-md-6 ${styles.imgSection}`}>
                    <img src={Image16.src} alt="#ImgNotFound" />
                </div>
                <div className={`col-md-6 ${styles.formSection}`}>
                    {showNextData === false ?
                        <form onSubmit={() => formSubmit()}>
                            <h1 className={`${styles.sectionTitle}`}>Love the Web</h1>
                            <p className={`${styles.sectionBody}`}>Get the Dreamstack newsletters and help us keep the web open and free.</p>
                            <div class="my-3">
                                <div class="my-3">
                                    <Form.Group controlId="validationCustom01" style={{ width: '100%' }}>
                                        <Form.Label><b>Your email address:</b></Form.Label>
                                        <Form.Control onClick={() => visibleFormFunction()}
                                            required
                                            type="email"
                                            placeholder='yourname@emample.com'
                                            className={`${styles.formInput}`}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            {visibleForm ?
                                <>
                                    <div class="my-3">
                                        <Form.Group controlId="validationCustom01" style={{ width: '100%' }}>
                                            <Form.Label><b>Select country or region:</b></Form.Label>
                                            <Form.Select aria-label="Default select example" required
                                                className={`${styles.formInput}`}>
                                                <option value="UnitedKingdom">United Kingdom</option>
                                                <option value="India">India</option>
                                                <option value="Pakistan">Pakistan</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div class="my-3">
                                        <Form.Group controlId="validationCustom02" style={{ width: '100%' }}>
                                            <Form.Label><b>Select language:</b></Form.Label>
                                            <Form.Select aria-label="Default select example" required
                                                className={`${styles.formInput}`}>
                                                <option value="English">English</option>
                                                <option value="Hindi">Hindi</option>
                                                <option value="Urdu">Urdu</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div class="my-3">
                                        <Form.Label><b>I want information about:</b></Form.Label>
                                        <div className="row">
                                            <div className="col-6">
                                                <Form.Group controlId="validationCustom03" style={{ width: '100%' }}>
                                                    <b style={{ fontSize: '15px' }}>
                                                        <Form.Check
                                                            label="Dreamstack Foundation"
                                                        />
                                                    </b>
                                                </Form.Group>
                                            </div>
                                            <div className="col-6">
                                                <Form.Group controlId="validationCustom04" style={{ width: '100%' }}>
                                                    <b style={{ fontSize: '15px' }}>
                                                        <Form.Check
                                                            label="Firefox"
                                                        />
                                                    </b>
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        <Form.Label><b>Format:</b></Form.Label>
                                        <div className="row">
                                            <div className="col-6">
                                                <Form.Group controlId="validationCustom05" style={{ width: '100%' }}>
                                                    <b style={{ fontSize: '15px' }}>
                                                        <Form.Check type='radio' required
                                                            inline
                                                            label="HTML"
                                                            name="group1"
                                                            id={`inline-radio-1`}
                                                        />
                                                    </b>
                                                </Form.Group>
                                            </div>
                                            <div className="col-6">
                                                <Form.Group controlId="validationCustom06" style={{ width: '100%' }}>
                                                    <b style={{ fontSize: '15px' }}>
                                                        <Form.Check type='radio' required
                                                            inline
                                                            label="TEXT"
                                                            name="group1"
                                                            id={`inline-radio-2`}
                                                        />
                                                    </b>
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <Form.Group controlId="validationCustom07" style={{ width: '100%' }}>
                                            <b style={{ fontSize: '15px' }}>
                                                <Form.Check
                                                    required
                                                    label="I’m okay with Dreamstack handling my info as explained in this Privacy Notice"
                                                />
                                            </b>
                                        </Form.Group>
                                    </div>
                                </>
                                :
                                <></>
                            }
                            <button type="submit" class={`btn w-100 ${styles.formSubmitBtn} ${visibleForm ? 'mb-5' : ''}`}><b>Sign Up Now</b></button>
                        </form>
                        :
                        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', maxWidth: '500px', width: '100%' }}>
                            <h1>Thanks!</h1>
                            <h6>If you haven’t previously confirmed a subscription to a Dreamstack-related newsletter you may have to do so. Please check your inbox or your spam filter for an email from us.</h6>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
