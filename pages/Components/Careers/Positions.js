import { useRef } from 'react';
import { useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import styles from '../../../styles/careers/Positions.module.css';

export default function Positions() {
    const myRef = useRef()

    useEffect(() => {
        localStorage.setItem('positionHeight', myRef.current.offsetTop);
    }, []);

    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} ref={myRef}>
            <div className={`${styles.ContainerWidth}`}>
                <h1 className={`${styles.sectionTitle} text-center py-md-5 py-3`}><b>Open positions at Dreamstack</b></h1>

                <Accordion style={{ maxWidth: '1200px', margin: 'auto' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Data Engineering Architect</b></Accordion.Header>
                        <Accordion.Body>
                            <h6><span className="text-muted">Posted: </span>Thursday, January 12, 2023</h6>
                            <h6><span className="text-muted">Location: </span>Remote</h6>
                            <p className={`${styles.sectionBody} text-muted`}>
                                We are seeking an experienced remote Customer Success Manager from America to join our Success team.
                                <br />
                                <br />
                                Even though this is a fully remote position and due to the company's goals, we're explicitly hiring in America and in one of the following locations: Canada, USA, Mexico, Honduras, or Brazil.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b>Customer Support (UTC-10 to UTC -7): America time zone</b></Accordion.Header>
                        <Accordion.Body>
                            <h6><span className="text-muted">Posted: </span>Thursday, January 12, 2023</h6>
                            <h6><span className="text-muted">Location: </span>Remote</h6>
                            <p className={`${styles.sectionBody} text-muted`}>
                                We are looking for a team lead for our Quality team to improve all aspects of quality assurance including applying industry best practices, developing new testing solutions and methods, and establishing metrics. This is a long-term full-time (40 hrs/wk) role.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b>Content Strategy Manager</b></Accordion.Header>
                        <Accordion.Body>
                            <h6><span className="text-muted">Posted: </span>Thursday, January 12, 2023</h6>
                            <h6><span className="text-muted">Location: </span>Remote</h6>
                            <p className={`${styles.sectionBody} text-muted`}>
                                We are looking for an experienced remote Customer Success Manager from Europe to join our Success team.
                                <br /><br />
                                Even though this is a fully remote position, we're explicitly hiring in Europe (preferred locations: Poland, Romania, and Spain).
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><b>Senior Ruby on Rails Engineer</b></Accordion.Header>
                        <Accordion.Body>
                            <h6><span className="text-muted">Posted: </span>Thursday, January 12, 2023</h6>
                            <h6><span className="text-muted">Location: </span>Remote</h6>
                            <p className={`${styles.sectionBody} text-muted`}>
                                We are looking for a Data Engineering Architect or similar experience within our marketing team to help our teams make better data-driven decisions. You work with our marketing department, engineers, and product specialists across the company to help us compile, analyze and visualize relevant data about our product and relevant market trends.
                                This is a brand-new position. You will have a unique opportunity to help scale the data team, build the process, as well as to be hands-on. Don’t miss it!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div class="alert alert-secondary mt-3 text-center" role="alert" style={{ maxWidth: '1200px', margin: 'auto' }}>
                    Dreamstack does not contact candidates through Facebook or other social media platforms. If you receive a job offer from someone via these channels, please report and disregard it.
                </div>
            </div>
        </div>
    )
}

