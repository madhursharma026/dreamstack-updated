import Head from "next/head";
import Calendar from 'react-calendar';
import Header from "./Components/Header";
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/router';
import styles from '../styles/Turing/MeetingPage.module.css';
import { useEffect, useState } from "react";

export default function Schedule() {

    const router = useRouter();
    function goThanksPage(e){
        e.preventDefault()
        router.push('ThanksPage2')
    }

    return (
        <>
            <Head>
                <title>Schedule Page - Dreamstack</title>
                <meta name="description" content="Turning - Dreamstack" />
            </Head>
            <Header />
            <div className={`${styles.ContainerWidth2}`}>
                <div className="card mx-3" style={{ boxShadow: '0 1px 8px 0 rgb(0 0 0/8%)' }}>
                    <div className="card-body">
                        <div className="row">
                            <div className={`col-md-4`}>
                                <div className="p-sm-4">
                                    <h6><b>Dreamstack</b></h6>
                                    <h4><b>Call with Dreamstack - Your Tech Services</b></h4>
                                    <h5 className="text-muted mt-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfVTD76AslIZjGzJbFm9b0RcWnCki7FpxdrM2Tj6PAikaHiEapnQmXz-Ib4RR4CYCCrk&usqp=CAU" alt="#ImgNotFound" width="20px" /> 30 min
                                    </h5>
                                    <h6 className="text-muted mt-3">
                                        12:30am - 1:00am, Tuesday, May 16, 2023
                                    </h6>
                                    <h6 className="text-muted mt-3">
                                        India Standard Time
                                    </h6>
                                </div>
                            </div>
                            <div className={`col-md-7`}>
                                <div className="p-sm-4">
                                    <h5 className="mb-4"><b>Enter Details</b></h5>
                                    <form style={{ maxWidth: '400px' }} onSubmit={(e)=>goThanksPage(e)}>
                                        <div className="mb-3">
                                            <label for="name" className="form-label">Name</label>
                                            <input type="text" required className="form-control" id="name" style={{ fontSize: '16px', lineHeight: '1.3', padding: '13px 12px' }} />
                                        </div>
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" required className="form-control" id="email" style={{ fontSize: '16px', lineHeight: '1.3', padding: '13px 12px' }} />
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-3" style={{ borderRadius: '30px' }}>Schedule Event</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}