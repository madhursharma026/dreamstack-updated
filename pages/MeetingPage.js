import Head from "next/head";
import Calendar from 'react-calendar';
import Header from "./Components/Header";
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/router';
import styles from '../styles/Turing/MeetingPage.module.css';
import { useEffect, useState } from "react";

export default function MeetingPage() {
    const router = useRouter();
    const [showNextTab1, setShowNextTab1] = useState(false);
    const [showNextTab2, setShowNextTab2] = useState(false);
    const [showNextTab3, setShowNextTab3] = useState(false);
    const [showNextTab4, setShowNextTab4] = useState(false);
    const [showNextTab5, setShowNextTab5] = useState(false);
    const [showNextTab6, setShowNextTab6] = useState(false);
    const [showNextTab7, setShowNextTab7] = useState(false);
    const [showNextTab8, setShowNextTab8] = useState(false);

    function show1() {
        setShowNextTab1(true)
        setShowNextTab2(false)
        setShowNextTab3(false)
        setShowNextTab4(false)
        setShowNextTab5(false)
        setShowNextTab6(false)
        setShowNextTab7(false)
        setShowNextTab8(false)
    }
    function show2() {
        setShowNextTab2(true)
        setShowNextTab1(false)
        setShowNextTab3(false)
        setShowNextTab4(false)
        setShowNextTab5(false)
        setShowNextTab6(false)
        setShowNextTab7(false)
        setShowNextTab8(false)
    }
    function show3() {
        setShowNextTab3(true)
        setShowNextTab2(false)
        setShowNextTab1(false)
        setShowNextTab4(false)
        setShowNextTab5(false)
        setShowNextTab6(false)
        setShowNextTab7(false)
        setShowNextTab8(false)
    }
    function show4() {
        setShowNextTab4(true)
        setShowNextTab2(false)
        setShowNextTab3(false)
        setShowNextTab1(false)
        setShowNextTab5(false)
        setShowNextTab6(false)
        setShowNextTab7(false)
        setShowNextTab8(false)
    }
    function show5() {
        setShowNextTab5(true)
        setShowNextTab2(false)
        setShowNextTab3(false)
        setShowNextTab4(false)
        setShowNextTab1(false)
        setShowNextTab6(false)
        setShowNextTab7(false)
        setShowNextTab8(false)
    }
    function show6() {
        setShowNextTab6(true)
        setShowNextTab2(false)
        setShowNextTab3(false)
        setShowNextTab4(false)
        setShowNextTab5(false)
        setShowNextTab1(false)
        setShowNextTab7(false)
        setShowNextTab8(false)
    }
    function show7() {
        setShowNextTab7(true)
        setShowNextTab2(false)
        setShowNextTab3(false)
        setShowNextTab4(false)
        setShowNextTab5(false)
        setShowNextTab6(false)
        setShowNextTab1(false)
        setShowNextTab8(false)
    }
    function show8() {
        setShowNextTab8(true)
        setShowNextTab2(false)
        setShowNextTab3(false)
        setShowNextTab4(false)
        setShowNextTab5(false)
        setShowNextTab6(false)
        setShowNextTab7(false)
        setShowNextTab1(false)
    }


    const [currentTime, setCurrentTime] = useState("");
    const [showTime, setShowTime] = useState(false);
    const [value, onChange] = useState(new Date());
    var today = new Date();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds())
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <Head>
                <title>Meeting Page - Dreamstack</title>
                <meta name="description" content="Turning - Dreamstack" />
            </Head>
            <Header />
            <div className={`${showTime ? `${styles.ContainerWidth2}` : `${styles.ContainerWidth}`}`}>
                <div className="card mx-3" style={{ boxShadow: '0 1px 8px 0 rgb(0 0 0/8%)' }}>
                    <div className="card-body">
                        <div className="row">
                            <div className={`${showTime ? 'col-lg-4' : 'col-md-6'} ${styles.textAlignStyle}`}>
                                <div className="p-sm-4">
                                    <h6><b>Dreamstack</b></h6>
                                    <h4><b>Call with Dreamstack - Your Tech Services</b></h4>
                                    <h5 className="text-muted mt-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfVTD76AslIZjGzJbFm9b0RcWnCki7FpxdrM2Tj6PAikaHiEapnQmXz-Ib4RR4CYCCrk&usqp=CAU" alt="#ImgNotFound" width="20px" /> 30 min
                                    </h5>
                                </div>
                            </div>
                            <div className={`${showTime ? 'col-lg-4 col-sm-8 col-md-7' : 'col-md-6'} mt-lg-0 mt-4`}>
                                <div className="p-sm-4">
                                    <h5 className="mb-4"><b>Select a Date & Time</b></h5>
                                    <div style={{ textAlign: 'center' }}>
                                        <Calendar onChange={onChange} value={value} onClickDay={() => setShowTime(true)} />
                                    </div>
                                    <h6 className="mt-4"><b>Time zone</b></h6>
                                    <p>India Standard Time {currentTime}</p>
                                </div>
                            </div>
                            {showTime ?
                                <div className={`${showTime ? 'col-lg-4 col-sm-4 col-md-5' : ''} mt-lg-0 mt-4`}>
                                    {!showNextTab1 ?
                                        <div className="card mt-2">
                                            <div className="card-body text-primary text-center" onClick={() => show1()}>
                                                <b>12:30 am</b>
                                            </div>
                                        </div>
                                        :
                                        <div className="card mt-2 p-2">
                                            <div className="row">
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-primary w-100 disabled"><b>12:00 am</b></button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-secondary w-100" onClick={()=>router.push('Schedule')}><b>Next</b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {!showNextTab2 ?
                                        <div className="card mt-2">
                                            <div className="card-body text-primary text-center" onClick={() => show2()}>
                                                <b>12:30 am</b>
                                            </div>
                                        </div>
                                        :
                                        <div className="card mt-2 p-2">
                                            <div className="row">
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-primary w-100 disabled"><b>12:00 am</b></button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-secondary w-100" onClick={()=>router.push('Schedule')}><b>Next</b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {!showNextTab3 ?
                                        <div className="card mt-2">
                                            <div className="card-body text-primary text-center" onClick={() => show3()}>
                                                <b>12:30 am</b>
                                            </div>
                                        </div>
                                        :
                                        <div className="card mt-2 p-2">
                                            <div className="row">
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-primary w-100 disabled"><b>12:00 am</b></button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-secondary w-100" onClick={()=>router.push('Schedule')}><b>Next</b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {!showNextTab4 ?
                                        <div className="card mt-2">
                                            <div className="card-body text-primary text-center" onClick={() => show4()}>
                                                <b>12:30 am</b>
                                            </div>
                                        </div>
                                        :
                                        <div className="card mt-2 p-2">
                                            <div className="row">
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-primary w-100 disabled"><b>12:00 am</b></button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-secondary w-100" onClick={()=>router.push('Schedule')}><b>Next</b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {!showNextTab5 ?
                                        <div className="card mt-2">
                                            <div className="card-body text-primary text-center" onClick={() => show5()}>
                                                <b>12:30 am</b>
                                            </div>
                                        </div>
                                        :
                                        <div className="card mt-2 p-2">
                                            <div className="row">
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-primary w-100 disabled"><b>12:00 am</b></button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-secondary w-100" onClick={()=>router.push('Schedule')}><b>Next</b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {!showNextTab6 ?
                                        <div className="card mt-2">
                                            <div className="card-body text-primary text-center" onClick={() => show6()}>
                                                <b>12:30 am</b>
                                            </div>
                                        </div>
                                        :
                                        <div className="card mt-2 p-2">
                                            <div className="row">
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-primary w-100 disabled"><b>12:00 am</b></button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-secondary w-100" onClick={()=>router.push('Schedule')}><b>Next</b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {!showNextTab7 ?
                                        <div className="card mt-2">
                                            <div className="card-body text-primary text-center" onClick={() => show7()}>
                                                <b>12:30 am</b>
                                            </div>
                                        </div>
                                        :
                                        <div className="card mt-2 p-2">
                                            <div className="row">
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-primary w-100 disabled"><b>12:00 am</b></button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-secondary w-100" onClick={()=>router.push('Schedule')}><b>Next</b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {!showNextTab8 ?
                                        <div className="card mt-2">
                                            <div className="card-body text-primary text-center" onClick={() => show8()}>
                                                <b>12:30 am</b>
                                            </div>
                                        </div>
                                        :
                                        <div className="card mt-2 p-2">
                                            <div className="row">
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-primary w-100 disabled"><b>12:00 am</b></button>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-md-6 mt-md-0 mt-sm-1 mt-0">
                                                    <div className="text-primary text-center">
                                                        {/* <b>12:00 am</b> */}
                                                        <button type="button" className="btn btn-secondary w-100" onClick={()=>router.push('Schedule')}><b>Next</b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}