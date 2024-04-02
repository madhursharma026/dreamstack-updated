import Link from 'next/link';
import { useState } from 'react';
import emailjs from "emailjs-com";
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import styles from '../../../styles/Contact/contact.module.css';

export default function ContactModule() {

    const [fullName, setFullName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [open, setOpen] = useState(false);
    const [AlertMessage, setAlertMessage] = useState("")
    const [AlertMessageBg, setAlertMessageBg] = useState("")

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

        emailjs.sendForm(
            "service_hf742kr",
            "template_u9sdpc9",
            e.target,
            "4nra8RokJk8Oy1-M1"
        ).then(res => {
            setFullName("")
            setEmailAddress("")
            setPhoneNumber("")
            console.log(res)
            setAlertMessageBg("success")
            setAlertMessage("Email Sent Successfully!!!")
            handleClick()
        }).catch(err => {
            console.log(err)
            setAlertMessageBg("danger")
            setAlertMessage(err)
            handleClick()
        })
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white bg-${AlertMessageBg}`}>
                    {AlertMessage}
                </Alert>
            </Snackbar>
            <div className={`p-0`}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className={`row`}>
                        <div className={`col-lg-6`} style={{ background: "#253053" }}>
                            <h1 className={`${styles.sectionTitle} text-white py-md-5 py-3 px-5 ${styles.leftSide}`}><b>We’d love to hear from you</b></h1>
                        </div>
                        <div className={`col-lg-6 pt-5 mt-lg-5`}>
                            <div className={`${styles.maxWidthStyle} px-lg-0 px-3`}>
                                <h1 className={`${styles.sectionTitle}`}><b>Talk to us</b></h1>
                                <p className={`${styles.sectionBody} text-muted`}>
                                    If you have any questions about Dreamstack Services, Dreamstack Hiring, Cloud computing, Dreamstack Tasks, or Dreamstack Talent, please contact us in English through the support chat or email us at <br />
                                    <Link href="/" className={`${styles.supportedLink}`}>akash@dreamstack.com</Link>
                                </p>
                            </div>
                            <div style={{ background: "#F5F7FA" }} className={`${styles.maxWidthStyle} py-3 px-3`}>
                                <h1 className={`${styles.subHeading2}`}><b>Couldn't get ahold of us?</b></h1>
                                <p className={`${styles.sectionBody} text-muted`}>Request a callback and we'll get back to you.</p>
                                <form onSubmit={(e) => sendEmail(e)}>
                                    <div className="mb-3">
                                        <label for="fullName" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Full Name</label>
                                        <input type="text" className="form-control" id="fullName" name='fullName' placeholder="What's your name?" required onChange={(e) => setFullName(e.target.value)} value={fullName} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="emailAddress" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Email</label>
                                        <input type="email" className="form-control" id="emailAddress" name='emailAddress' placeholder="Enter your email" required onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="phoneNumber" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>Phone Number</label>
                                        <input type="text" className="form-control" id="phoneNumber" name='phoneNumber' placeholder="+91 9876543210" required onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                    </div>
                                    <button type="submit" className={`btn btn-primary ${styles.callMeBack} my-3`}>Call me back</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
