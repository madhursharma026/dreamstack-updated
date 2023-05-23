import Link from 'next/link';
import React, { useEffect, useState } from "react";
import styles from '../../../styles/Solution/Section3.module.css';

export default function Section3() {
    const [activeCard, setActiveCard] = useState("1")

    function setActiveCardNo(cardNO) {
        setActiveCard(cardNO)
    }

    return (
        <div className={`p-0 px-md-4 px-3`} style={{ background: '#F2F8FF' }}>
            <div className={`${styles.ContainerWidth} py-5`}>
                <h1 className={`${styles.sectionTitle} py-lg-5 py-3 text-center`}><b>Simple agency <span className='text-primary'>billing and invoicing <br /> software</span> to save you time</b></h1>
                <div className="row mx-xl-5 px-xl-5 mb-5">
                    <div className={`col-lg-4`} style={{ cursor: "pointer" }}>
                        <div class={`card w-100 h-100 p-4 ${(activeCard === "1") ? `${styles.activeCard}` : `${styles.cardStyle}`}`} onClick={() => setActiveCardNo("1")}>
                            <div class="card-body">
                                <h6 class={`card-title text-primary pb-3 ${styles.cardSubHeading}`}>BUDGETING</h6>
                                <h5 class="card-subtitle mb-3"><b>Manage clients budgets on auto-pilot</b></h5>
                                <p class="card-text text-muted">Maximize billing by easily setting budget limits for each client. Dreamstack notifies you as you approach limits so you can stay profitable and keep your clients in the loop.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4`} style={{ cursor: "pointer" }}>
                        <div class={`card w-100 h-100 p-4 ${(activeCard === "2") ? `${styles.activeCard}` : `${styles.cardStyle}`}`} onClick={() => setActiveCardNo("2")}>
                            <div class="card-body">
                                <h6 class={`card-title text-primary pb-3 ${styles.cardSubHeading}`}>AUTOMATED PAYROLL</h6>
                                <h5 class="card-subtitle mb-3"><b>Avoid headaches with automated payroll</b></h5>
                                <p class="card-text text-muted">Work with freelancers or hourly staff? Set their pay rate, then automatically send international and local payments based on hours worked. Dreamstack’s automated timesheets make payroll a breeze.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4`} style={{ cursor: "pointer" }}>
                        <div class={`card w-100 h-100 p-4 ${(activeCard === "3") ? `${styles.activeCard}` : `${styles.cardStyle}`}`} onClick={() => setActiveCardNo("3")}>
                            <div class="card-body">
                                <h6 class={`card-title text-primary pb-3 ${styles.cardSubHeading}`}>CLIENT INVOICING</h6>
                                <h5 class="card-subtitle mb-3"><b>Faster, easier invoicing</b></h5>
                                <p class="card-text text-muted">Maximize billable hours, invoice clients directly, and get paid faster. Set up different bill rates for each person to streamline invoicing. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '800px', margin: "auto" }}>
                    {(activeCard === "1") ?
                        <>
                            <img src="https://a.storyblok.com/f/172398/2332x1668/012d3b8529/tab1_project_budgets_report-2x-solutions-agencies.png" alt="#ImgNotFound" className='w-100' />
                        </>
                        :
                        <></>
                    }
                    {(activeCard === "2") ?
                        <>
                            <img src="https://a.storyblok.com/f/172398/2336x1692/2846757414/tab2_invoices-2x-solutions-agencies.png" alt="#ImgNotFound" className='w-100' />
                        </>
                        :
                        <></>
                    }
                    {(activeCard === "3") ?
                        <>
                            <img src="https://a.storyblok.com/f/172398/d5f5cf9628/invoices-2x.png" alt="#ImgNotFound" className='w-100' />
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}

