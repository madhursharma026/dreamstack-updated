import React, { useRef, useEffect, useState } from 'react';
import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';
import Img3 from "../../media/WhoWeAre-Images/Image3.jpg";
import Img4 from "../../media/WhoWeAre-Images/Image4.jpg";
import Img5 from "../../media/WhoWeAre-Images/Image5.jpg";
import Img6 from "../../media/WhoWeAre-Images/Image6.jpg";
import Img7 from "../../media/WhoWeAre-Images/Image7.jpg";
import Img13 from "../../media/WhoWeAre-Images/Image13.jpg";
import Img14 from "../../media/WhoWeAre-Images/Image14.jpg";
import Img15 from "../../media/WhoWeAre-Images/Image15.jpg";
import Img16 from "../../media/WhoWeAre-Images/Image16.jpg";

const Section4 = () => {
    const [visibleColumn, setVisibleColumn] = useState(null);
    const columnRefs = { column1: useRef(null), column2: useRef(null), column3: useRef(null), column4: useRef(null), column5: useRef(null), };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleColumn(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        Object.values(columnRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [columnRefs]);

    const scrollToColumn = (columnId) => {
        const columnRef = columnRefs[columnId];
        if (columnRef.current) {
            columnRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='py-5' style={{ background: '#F8F9FB' }}>
            <div className={`py-5`}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className='d-lg-block d-none'>
                        <div className="row" style={{ maxWidth: '1200px', margin: 'auto' }}>
                            <div className='col-xxl-5 col-4' style={{ position: 'sticky', top: 100, left: 0, maxHeight: '60vh' }}>
                                <h6 onClick={() => scrollToColumn('column1')} className={(visibleColumn === 'column1' ? 'text-primary' : 'text-black')} style={{ fontSize: '16px', padding: '5px 10px 20px 28px', cursor: 'pointer', letterSpacing: '-0.2px', margin: '0 12px', borderLeft: `${visibleColumn === 'column1' ? '2px solid red' : '1px solid gray'}` }}>A common sense approach to privacy</h6>
                                <h6 onClick={() => scrollToColumn('column2')} className={(visibleColumn === 'column2' ? 'text-primary' : 'text-black')} style={{ fontSize: '16px', padding: '5px 10px 20px 28px', cursor: 'pointer', letterSpacing: '-0.2px', margin: '0 12px', borderLeft: `${visibleColumn === 'column2' ? '2px solid red' : '1px solid gray'}` }}>A private company with a public vision</h6>
                                <h6 onClick={() => scrollToColumn('column3')} className={(visibleColumn === 'column3' ? 'text-primary' : 'text-black')} style={{ fontSize: '16px', padding: '5px 10px 20px 28px', cursor: 'pointer', letterSpacing: '-0.2px', margin: '0 12px', borderLeft: `${visibleColumn === 'column3' ? '2px solid red' : '1px solid gray'}` }}>A company you'll keep</h6>
                                <h6 onClick={() => scrollToColumn('column4')} className={(visibleColumn === 'column4' ? 'text-primary' : 'text-black')} style={{ fontSize: '16px', padding: '5px 10px 20px 28px', cursor: 'pointer', letterSpacing: '-0.2px', margin: '0 12px', borderLeft: `${visibleColumn === 'column4' ? '2px solid red' : '1px solid gray'}` }}>A new way to run your business</h6>
                                <h6 onClick={() => scrollToColumn('column5')} className={(visibleColumn === 'column5' ? 'text-primary' : 'text-black')} style={{ fontSize: '16px', padding: '5px 10px 20px 28px', cursor: 'pointer', letterSpacing: '-0.2px', margin: '0 12px', borderLeft: `${visibleColumn === 'column5' ? '2px solid red' : '1px solid gray'}` }}>A commitment to our communities</h6>
                            </div>
                            <div className='col-xxl-7 col-8 px-4' style={{ overflowY: 'auto' }}>
                                <div id='column1' ref={columnRefs.column1}>
                                    <span className={styles.sectionTitle}>A common sense approach to privacy</span>
                                    <span className={styles.sectionBody}>
                                        <br /><br />
                                        When you put customers before profits, you end up with more of both.
                                        <br /><br />
                                        From the beginning, we decided we would never show ads inside our products (not even in the free editions), nor would we sell user information to third parties. And by prohibiting third-party trackers from operating on any of our websites, we've taken extra steps to make sure that your business is yours alone.
                                    </span>
                                    <img src={Img3.src} alt="#ImgNotFound" className='w-100 my-4' />
                                    <span className={styles.sectionBody}>We aren't interested in invading your privacy just to make a quick buck. Every person should have control over their data, regardless of where they live. We didn't need laws and government regulations to tell us that; its just the right thing to do.</span>
                                </div>
                                <hr className='my-5' />
                                <div id='column2' ref={columnRefs.column2}>
                                    <span className={styles.sectionTitle}>A private company with a public vision</span>
                                    <div className="row mt-4">
                                        <div className="col-lg-6">
                                            <span className={styles.sectionBody}>Since we have never taken money from investors, we have always been able to focus on what is best for the customer. Rather than worrying about short-term profits, we've had the freedom to think for the long term.</span>
                                            <br /><br />
                                            <span className={styles.sectionBody}>This kind of independence changes how we approach problem-solving, empowering us to truly think differently.</span>
                                            <br /><br />
                                            <span className={styles.sectionBody}>From how we build to how we hire, our unconventional approach has brought us to more than 15,000 employees and 100 million users around the world.</span>
                                        </div>
                                        <div className="col-lg-6" style={{ margin: 'auto' }}>
                                            <img src={Img4.src} alt="#ImgNotFound" className='w-100' style={{ maxHeight: '400px', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-5' />
                                <div id='column3' ref={columnRefs.column3}>
                                    <span className={styles.sectionTitle}>A company you'll keep</span>
                                    <div className="row mt-4">
                                        <div className="col-lg-6" style={{ margin: 'auto' }}>
                                            <img src={Img5.src} alt="#ImgNotFound" className='w-100' style={{ maxHeight: '400px', objectFit: 'contain' }} />
                                        </div>
                                        <div className="col-lg-6">
                                            <span className={styles.sectionBody}>Software should solve more problems than it causes, so we don't lock you into multi-year contracts with fixed price increases. We don't push our salespeople to push you.</span>
                                            <br /><br />
                                            <span className={styles.sectionBody}>Our products are available à la carte or as suites, and we offer flexible payment options to fit every budget. Our prices are as transparent as our privacy policy, and we take pride in both.</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-5' />
                                <div id='column4' ref={columnRefs.column4}>
                                    <span className={styles.sectionTitle}>A new way to run your business</span>
                                    <div className="row mt-4">
                                        <div className="col-lg-6">
                                            <span className={styles.sectionBody}>When you choose Zoho, you get more than a single product, suite, or platform. You get what we call the operating system for business, the result of more than a decade of engineering and design effort.</span>
                                            <br /><br />
                                            <span className={styles.sectionBody}>With more than 55 deeply integrated apps available on the web and mobile, we offer a solution to fit almost every business need. And if we haven't built it yet, you can bet we probably will soon.</span>
                                        </div>
                                        <div className="col-lg-6" style={{ margin: 'auto' }}>
                                            <img src={Img6.src} alt="#ImgNotFound" className='w-100' style={{ maxHeight: '400px', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-5' />
                                <div id='column5' ref={columnRefs.column5}>
                                    <span className={styles.sectionTitle}>A commitment to our communities</span>
                                    <span className={styles.sectionBody}>
                                        <br /><br />
                                        As a global company, we understand the value of good citizenship. It's why we always try to give more than we get and why we are always looking for ways to support the communities in which we live.
                                    </span>
                                    <img src={Img7.jpg} alt="#ImgNotFound" className='w-100 my-4' />
                                    <span className={styles.sectionBody}>
                                        <br />
                                        From providing subscription relief to businesses impacted by natural disasters to building solar farms that offset our carbon footprint, we take on initiatives that change the lives of our customers and employees for the better.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-lg-none d-block'>
                        {/* <h1>A common sense approach to privacy</h1> */}
                        <p className={styles.h1CustomFont}>A common sense approach to privacy</p>
                        <p className={`mt-3 ${styles.h5CustomFont}`}>
                            When you put customers before profits, you end up with more of both.
                            <br />
                            <br />
                            From the beginning, we decided we would never show ads inside our products (not even in the free editions), nor would we sell user information to third parties. And by prohibiting third-party trackers from operating on any of our websites, we've taken extra steps to make sure that your business is yours alone.
                        </p>
                        <img src={Img3.src} alt="#ImgNotFound" className='w-100 my-4' />
                        <p className={`${styles.h5CustomFont}`}>We aren't interested in invading your privacy just to make a quick buck. Every person should have control over their data, regardless of where they live. We didn't need laws and government regulations to tell us that; its just the right thing to do.</p>

                        <hr className='my-5' />

                        {/* <h1>A private company with a public vision</h1> */}
                        <p className={styles.h1CustomFont}>A private company with a public vision</p>
                        <p className={`mt-3 ${styles.h5CustomFont}`}>
                            Since we have never taken money from investors, we have always been able to focus on what is best for the customer. Rather than worrying about short-term profits, we've had the freedom to think for the long term.
                            <br /><br />
                            This kind of independence changes how we approach problem-solving, empowering us to truly think differently.
                            <br /><br />
                            From how we build to how we hire, our unconventional approach has brought us to more than 15,000 employees and 100 million users around the world.
                        </p>
                        <img src={Img13.src} alt="#ImgNotFound" className='w-100 my-4' />

                        <hr className='my-5' />

                        {/* <h1>A company you will keep</h1> */}
                        <p className={styles.h1CustomFont}>A company you will keep</p>
                        <img src={Img14.src} alt="#ImgNotFound" className='w-100 my-4' />
                        <p className={`${styles.h5CustomFont}`}>
                            Software should solve more problems than it causes, so we don't lock you into multi-year contracts with fixed price increases. We don't push our salespeople to push you.
                            <br /><br />
                            Our products are available à la carte or as suites, and we offer flexible payment options to fit every budget. Our prices are as transparent as our privacy policy, and we take pride in both.
                        </p>

                        <hr className='my-5' />

                        {/* <h1>A new way to run your business</h1> */}
                        <p className={styles.h1CustomFont}>A new way to run your business</p>
                        <p className={`${styles.h5CustomFont}`}>
                            When you choose Zoho, you get more than a single product, suite, or platform. You get what we call the operating system for business, the result of more than a decade of engineering and design effort.
                            <br /><br />
                            With more than 55 deeply integrated apps available on the web and mobile, we offer a solution to fit almost every business need. And if we haven't built it yet, you can bet we probably will soon.
                        </p>
                        <img src={Img15.src} alt="#ImgNotFound" className='w-100 my-4' />

                        <hr className='my-5' />

                        {/* <h1>A commitment to our communities</h1> */}
                        <p className={styles.h1CustomFont}>A commitment to our communities</p>
                        <p className={`mt-3 ${styles.h5CustomFont}`}>
                            As a global company, we understand the value of good citizenship. It's why we always try to give more than we get and why we are always looking for ways to support the communities in which we live.
                            <br />
                            <img src={Img16.src} alt="#ImgNotFound" className='w-100 my-4' />
                            <br />
                            With more than 55 deeply integrated apps available on the web and mobile, we offer a solution to fit almost every business need. And if we haven't built it yet, you can bet we probably will soon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;

