import Link from "next/link";
import Logo from "../media/logo.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import Cloud from "../media/Header-Images/Cloud.png";
import Blockchain from "../media/Header-Images/Blockchain.png";
import CustomerCare from "../media/Header-Images/CustomerCare.png";
import CyberSecurity from "../media/Header-Images/CyberSecurity.png";
import DataAndAnalytic from "../media/Header-Images/DataAndAnalytic.png";
import EnterpriseSolution from "../media/Header-Images/EnterpriseSolution.jpeg";

function Header() {
    const [visible, setVisible] = useState(true)
    const [position, setPosition] = useState("")
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.pageYOffset)
            let moving = window.pageYOffset
            setVisible(position > moving || position < 140);
            setPosition(moving)
            setIsShown(false)
            console.log(window.scrollTop)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <>
            <div className={`${styles.navbarBeforeMD}`} onMouseLeave={() => setIsShown(false)}>
                {isShown && (
                    <div style={{ position: 'fixed', width: '100%', zIndex: '1', boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                        <div style={{ background: "white", width: '100%', position: "absolute" }} onMouseLeave={() => setIsShown(false)}>
                            <div className={`${styles.ContainerWidth} w-100 mt-4`}>
                                <div className="row">
                                    <div className="col-xl-3 col-4 py-5">
                                        <ul className={`${styles.menuULTagStyle} p-0`}>
                                            <Link href="/cloud" style={{ textDecoration: 'none' }}><li className={`${styles.menuLITagStyle} p-2 text-black`}><img src={Cloud.src} alt="#ImgNotFound" width='25px' height='25px' /> Cloud</li></Link>
                                            <Link href="/DataAndAnalytics" style={{ textDecoration: 'none' }}><li className={`${styles.menuLITagStyle} p-2 text-black`}><img src={DataAndAnalytic.src} alt="#ImgNotFound" width='25px' height='25px' /> Data & Analytic</li></Link>
                                            <Link href="/cybersecurity" style={{ textDecoration: 'none' }}><li className={`${styles.menuLITagStyle} p-2 text-black`}><img src={CyberSecurity.src} alt="#ImgNotFound" width='25px' height='25px' /> Cybersecurity</li></Link>
                                            <Link href="/enterprise" style={{ textDecoration: 'none' }}><li className={`${styles.menuLITagStyle} p-2 text-black`}><img src={EnterpriseSolution.src} alt="#ImgNotFound" width='25px' height='25px' /> Enterprise solution</li></Link>
                                            <Link href="/blockchain" style={{ textDecoration: 'none' }}><li className={`${styles.menuLITagStyle} p-2 text-black`}><img src={Blockchain.src} alt="#ImgNotFound" width='25px' height='25px' /> Blockchain</li></Link>
                                        </ul>
                                    </div>
                                    <div className={`col-xl-5 col-4 py-5`}>
                                        <h3>Dreamstack is here to make a difference through technology.</h3>
                                        <p className={`${styles.sectionBody} pt-3`}>Leading the way in innovation for over a decade, we build greater futures for businesses across multiple industries and cloud-native infrastructure.</p>
                                    </div>
                                    <div className={`col-xl-4 col-4 py-5`} style={{ background: '#F5F7FA' }}>
                                        <h5 className="text-center"><b>TALK TO US</b></h5>
                                        <hr />
                                        <div className="text-center">
                                            <img src={CustomerCare.src} alt="#ImgNotFound" style={{ borderRadius: "100%", width: "125px", height: "125px" }} />
                                        </div>
                                        <p className={`${styles.sectionBody} pt-3 px-lg-5 px-3`}>Learn more about Dreamstack from our in-house product specialist.</p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <Navbar className={`fixed-top px-md-4 px-3 bg-white ${visible ? styles.animationStyle1 : styles.animationStyle2}`} expand="md" style={{ height: "65px" }}>
                    <Navbar className={`${styles.ContainerWidth} w-100`}>
                        <Navbar.Brand>
                            <Link href='/'>
                                <img src={Logo.src} alt="#ImgNotFound" width="30px" height='30px' />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" className={`${styles.navbarToggle}`} />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionBeforeLG}`} navbarScroll>
                                <p className={`px-lg-3 px-2 pt-3 ${styles.menuOptions}`} onMouseEnter={() => setIsShown(true)}><b>What We Do</b></p>
                                <Link href="/WhoWeAre" className={`px-lg-3 px-2 pt-3 ${styles.menuOptions}`} onMouseEnter={() => setIsShown(false)}><b>Who We Are</b></Link>
                                <Link href="/careers" className={`px-lg-3 px-2 pt-3 ${styles.menuOptions}`} onMouseEnter={() => setIsShown(false)}><b>Careers</b></Link>
                                <Link href="/TermsAndCondition" className={`px-lg-3 px-2 pt-3 ${styles.menuOptions}`} onMouseEnter={() => setIsShown(false)}><b>Terms</b></Link>
                            </Nav>
                            <div className={`${styles.navOptionBeforeLG}`}>
                                <Link className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`} href="/contact" role="button"><b>Contact Us</b></Link>
                            </div>
                            <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionAfterLG}`} navbarScroll>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Link className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`} href="/contact" role="button"><b>Contact Us</b></Link>
                                </div>
                                <hr />
                                <Link href="" className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>What We Do</b></Link>
                                <hr />
                                <Link href="/WhoWeAre" className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Who We Are</b></Link>
                                <hr />
                                <Link href="/careers" className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Careers</b></Link>
                                <hr />
                                <Link href="/TermsAndCondition" className={`px-3 pt-1 ${styles.menuOptionsAfterLG}`}><b>Terms</b></Link>
                                <hr />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Navbar>
            </div>

            <div className={`${styles.navbarAfterMD}`}>
                <Navbar className={`fixed-top px-xl-0 px-xl-5 bg-white px-md-4 px-3  ${visible ? styles.animationStyle1 : styles.animationStyle2}`} expand="md">
                    <Navbar.Brand>
                        <Link href='/'>
                            <img src={Logo.src} alt="#ImgNotFound" width="30px" height='30px' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className={`${styles.navbarToggle}`} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionBeforeLG}`} navbarScroll>
                            <Link href='' className={`px-3 ${styles.menuOptions}`}><b>What We Do</b></Link>
                            <Link href='/WhoWeAre' className={`px-3 ${styles.menuOptions}`}><b>Who We Are</b></Link>
                            <Link href='/careers' className={`px-3 ${styles.menuOptions}`}><b>Careers</b></Link>
                            <Link href='/TermsAndCondition' className={`px-3 ${styles.menuOptions}`}><b>Terms</b></Link>
                        </Nav>
                        <div className={`${styles.navOptionBeforeLG}`}>
                            <button type="button" className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`}><b>Contact Us</b></button>
                        </div>
                        <Nav className={`me-auto my-2 my-lg-0 ${styles.navOptionAfterLG}`} navbarScroll>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <button type="button" className={`btn btn-outline-primary d-flex px-3 ${styles.downloadBtn}`}><b>Contact Us</b></button>
                            </div>
                            <Dropdown className="mt-4">
                                <Dropdown.Toggle id="dropdown-basic" className="py-3" style={{ background: "transparent", width: "100%", color: "black", textAlign: "left", borderRadius: "0", borderColor: "black", borderRight: '0', borderLeft: "0", borderBottom: '0' }}>
                                    <b>What We Do</b>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="mb-3">
                                    <ul className={`${styles.menuULTagStyle} px-4`}>
                                        <Link href="/cloud" style={{ textDecoration: 'none', display: "block", color: 'black', borderBottom: '1px solid black' }} className='p-2'><img src={Cloud.src} alt="#ImgNotFound" width='25px' height='25px' /> <b>Cloud</b></Link>
                                        <Link href="/DataAndAnalytics" style={{ textDecoration: 'none', display: "block", color: 'black', borderBottom: '1px solid black' }} className='p-2'><img src={DataAndAnalytic.src} alt="#ImgNotFound" width='25px' height='25px' /> <b>Data & Analytic</b></Link>
                                        <Link href="/cybersecurity" style={{ textDecoration: 'none', display: "block", color: 'black', borderBottom: '1px solid black' }} className='p-2'><img src={CyberSecurity.src} alt="#ImgNotFound" width='25px' height='25px' /> <b>Cybersecurity</b></Link>
                                        <Link href="/enterprise" style={{ textDecoration: 'none', display: "block", color: 'black', borderBottom: '1px solid black' }} className='p-2'><img src={EnterpriseSolution.src} alt="#ImgNotFound" width='25px' height='25px' /> <b>Enterprise solution</b></Link>
                                        <Link href="/blockchain" style={{ textDecoration: 'none', display: "block", color: 'black', borderBottom: '1px solid black' }} className='p-2'><img src={Blockchain.src} alt="#ImgNotFound" width='25px' height='25px' /> <b>Blockchain</b></Link>
                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Link href="/WhoWeAre">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="py-3" style={{ background: "transparent", width: "100%", color: "black", textAlign: "left", borderRadius: "0", borderColor: "black", borderRight: '0', borderLeft: "0", borderBottom: '0' }}>
                                        <b>Who We Are</b>
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </Link>
                            <Link href="/careers">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="py-3" style={{ background: "transparent", width: "100%", color: "black", textAlign: "left", borderRadius: "0", borderColor: "black", borderRight: '0', borderLeft: "0", borderBottom: '0' }}>
                                        <b>Careers</b>
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </Link>
                            <Link href="/TermsAndCondition">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="py-3" style={{ background: "transparent", width: "100%", color: "black", textAlign: "left", borderRadius: "0", borderColor: "black", borderRight: '0', borderLeft: "0" }}>
                                        <b>Terms</b>
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default Header;
