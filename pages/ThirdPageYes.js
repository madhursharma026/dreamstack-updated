import Head from "next/head";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from 'react-bootstrap/Form';
import Link from "next/link";
import styles from '../styles/Turing/OnBoardingPages.module.css';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ThirdPageYes() {
    const router = useRouter();
    const [showAlert, setShowAlert] = useState(false)
    const [serviceType, setServiceType] = useState('')


    function moveOnSecondboardingPages(e) {
        e.preventDefault()
        // router.push('FirstPage');
        if (serviceType === "") {
            setShowAlert(true)
        } else {
            // router.push('ThanksPage')
            router.push('MeetingPage')
        }
    }

    const top100Films = [
        { title: 'AI Services' },
        { title: 'Application Engineering Services' },
        { title: 'Cloud Services' },
        { title: 'Managed Team' },
        { title: 'Something Else' },
    ];

    return (
        <div>
            <Head>
                <title>Third Page - Dreamstack</title>
                <meta name="description" content="Turning - Dreamstack" />
            </Head>
            <Header />
            <div className="row">
                <div className={`col-md-6 mt-5`}>
                    <div className={`${styles.ContainerWidth}`}>
                        <br /><br /><br /><br /><br />
                        <div className="px-lg-5 px-3">
                            <h1>Tell us about your service needs</h1>
                            <p className={`${styles.sectionBody}`}>The more details you provide, the better we can customize your solution.</p>
                            <form onSubmit={(e) => moveOnSecondboardingPages(e)}>
                                <Form.Group controlId="services" style={{ width: '100%' }}>
                                    <Form.Label><b>Select service type(s):</b></Form.Label>
                                    <Autocomplete multiple id="checkboxes-tags-demo" onChange={(e) => (setServiceType(e.target.value), setShowAlert(false))} options={top100Films} disableCloseOnSelect getOptionLabel={(option) => option.title} renderOption={(props, option, { selected }) => (
                                        <li {...props}>
                                            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} /> {option.title}
                                        </li>
                                    )} style={{ width: '100%' }} renderInput={(params) => (
                                        <TextField {...params} label="Select service type(s)" placeholder="Select service type(s)" />
                                    )} />
                                    {showAlert ?
                                        <div style={{ fontSize: '12px' }} className="text-danger">Please Fill out this field</div>
                                        :
                                        <></>
                                    }
                                </Form.Group>
                                <Form.Group controlId="additionalInfo" style={{ width: '100%', marginTop: '20px' }}>
                                    <Form.Label><b>Additional information (optional):</b></Form.Label>
                                    <textarea className="form-control" rows="5" placeholder="Enter any additional details" style={{ width: "100%", padding: '10px' }}></textarea>
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
                                <div class="progress-bar" style={{ width: '80%' }}></div>
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

