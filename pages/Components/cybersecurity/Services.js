import { useRef } from 'react';
import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import styles from '../../../styles/cybersecurity/Services.module.css';
import Images10 from "../../media/Cybersecurity-Images/cybersecurity-image-10.jpeg";
import Images11 from "../../media/Cybersecurity-Images/cybersecurity-image-11.png";
import Images12 from "../../media/Cybersecurity-Images/cybersecurity-image-12.png";
import Images13 from "../../media/Cybersecurity-Images/cybersecurity-image-13.png";
import Images14 from "../../media/Cybersecurity-Images/cybersecurity-image-14.png";
import Images15 from "../../media/Cybersecurity-Images/cybersecurity-image-15.png";
import Images16 from "../../media/Cybersecurity-Images/cybersecurity-image-16.png";

export default function Services() {
    const myRef = useRef()

    useEffect(() => {
        localStorage.setItem('positionHeight', myRef.current.offsetTop);
    }, []);

    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} ref={myRef}>
            <div className={`${styles.ContainerWidth}`}>

                <Accordion style={{ maxWidth: '1200px', margin: 'auto' }}>
                    <p className={`${styles.sectionBody}`}>OUR SERVICES, CUSTOMIZED FOR YOU</p>
                    <p className={`${styles.sectionBody}`} style={{ borderLeft: '4px solid red', paddingLeft: '10px' }}>We protect your business with our comprehensive portfolio of consulting, implementation, managed security services, and solutions, so that you can focus on growth.</p>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Threat detection and response</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3">
                                    <img src={Images10.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Dreamstack Customer Intelligence & Insights (CI&I) helps organizations deliver relevant, connected, and personalized user experience in real-time. Learn how.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b>Digital identity management</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3" style={{maxHeight:'200px', overflow:'hidden'}}>
                                    <img src={Images11.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Read how Dreamstack solution that can be deployed as a source to pay suite helps firms adopt agile sourcing & procurement, automate intelligently, & engage suppliers.  </h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b>Secure cloud transformation</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3" style={{maxHeight:'200px', overflow:'hidden'}}>
                                    <img src={Images12.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Dreamstack ERP on Cloud platform, built around SAP S/4 HANA Core, provides real-time insights for informed decisions and helps accelerate digital transformation.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><b>Cyber-physical security</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3" style={{maxHeight:'200px', overflow:'hidden'}}>
                                    <img src={Images13.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Dreamstack MasterCraft™ optimizes processes across software development, QA, low-code development, digital transformation, enterprise data quality, and privacy.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><b>Privacy and data protection</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3">
                                    <img src={Images14.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Read how Dreamstack solution that can be deployed as a source to pay suite helps firms adopt agile sourcing & procurement, automate intelligently, & engage suppliers.  </h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><b>Incident response and rapid recovery</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                            <div className="col-md-4 col-lg-3" style={{maxHeight:'200px', overflow:'hidden'}}>
                                    <img src={Images15.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Dreamstack MasterCraft™ optimizes processes across software development, QA, low-code development, digital transformation, enterprise data quality, and privacy.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header><b>Cybersecurity advisory and consulting</b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                            <div className="col-md-4 col-lg-3" style={{maxHeight:'200px', overflow:'hidden'}}>
                                    <img src={Images16.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Dreamstack MasterCraft™ optimizes processes across software development, QA, low-code development, digital transformation, enterprise data quality, and privacy.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <p className={`${styles.sectionBody} pt-5`}>Dreamstack Cyber Defense Suite </p>
                <p className={`${styles.sectionBody}`}>
                    We offer security-as-a-service with our platform-first approach to integrate and modernize cybersecurity within enterprises, giving them agility and confidence to grow.
                </p>
            </div>
        </div>
    )
}

