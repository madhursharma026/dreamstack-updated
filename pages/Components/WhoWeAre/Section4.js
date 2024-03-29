import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}> <Typography>{children}</Typography> </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return { id: `vertical-tab-${index}`, 'aria-controls': `vertical-tabpanel-${index}`, };
}

export default function Section4() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='py-5' style={{ background: '#F8F9FB' }}>
            <div className={`py-5 mx-3`}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className='d-lg-block d-none'>
                        <div className="row">
                            <div className="col-xl-3 col-4">
                                <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{ borderRight: 1, borderColor: 'divider' }}>
                                    <Tab label="A common sense approach to privacy" {...a11yProps(0)} />
                                    <Tab label="A private company with a public vision" {...a11yProps(1)} />
                                    <Tab label="A company you'll keep" {...a11yProps(2)} />
                                    <Tab label="A new way to run your business" {...a11yProps(3)} />
                                    <Tab label="A commitment to our communities" {...a11yProps(4)} />
                                </Tabs>
                            </div>
                            <div className="col-xl-9 col-8">
                                <TabPanel value={value} index={0}>
                                    <span className={styles.sectionTitle}>A common sense approach to privacy</span>
                                    <span className={styles.sectionBody}>
                                        <br />
                                        <br />
                                        When you put customers before profits, you end up with more of both.
                                        <br />
                                        <br />
                                        From the beginning, we decided we would never show ads inside our products (not even in the free editions), nor would we sell user information to third parties. And by prohibiting third-party trackers from operating on any of our websites, we've taken extra steps to make sure that your business is yours alone.
                                    </span>
                                    <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-commonsense.jpg" alt="#ImgNotFound" className='w-100 my-4' />
                                    <span className={styles.sectionBody}>We aren't interested in invading your privacy just to make a quick buck. Every person should have control over their data, regardless of where they live. We didn't need laws and government regulations to tell us that; its just the right thing to do.</span>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <span className={styles.sectionTitle}>A private company with a public vision</span>
                                    <div className="row mt-4">
                                        <div className="col-lg-6">
                                            <span className={styles.sectionBody}>Since we have never taken money from investors, we have always been able to focus on what is best for the customer. Rather than worrying about short-term profits, we've had the freedom to think for the long term.</span>
                                            <br />
                                            <br />
                                            <span className={styles.sectionBody}>This kind of independence changes how we approach problem-solving, empowering us to truly think differently.</span>
                                            <br />
                                            <br />
                                            <span className={styles.sectionBody}>From how we build to how we hire, our unconventional approach has brought us to more than 15,000 employees and 100 million users around the world.</span>
                                        </div>
                                        <div className="col-lg-6" style={{ margin: 'auto' }}>
                                            <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-privacy.jpg" alt="#ImgNotFound" className='w-100' style={{ maxHeight: '400px', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <span className={styles.sectionTitle}>A private company with a public vision</span>
                                    <div className="row mt-4">
                                        <div className="col-lg-6" style={{ margin: 'auto' }}>
                                            <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-companykeep.jpg" alt="#ImgNotFound" className='w-100' style={{ maxHeight: '400px', objectFit: 'contain' }} />
                                        </div>
                                        <div className="col-lg-6">
                                            <span className={styles.sectionBody}>Software should solve more problems than it causes, so we don't lock you into multi-year contracts with fixed price increases. We don't push our salespeople to push you.</span>
                                            <br />
                                            <br />
                                            <span className={styles.sectionBody}>Our products are available à la carte or as suites, and we offer flexible payment options to fit every budget. Our prices are as transparent as our privacy policy, and we take pride in both.</span>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <span className={styles.sectionTitle}>A new way to run your business</span>
                                    <div className="row mt-4">
                                        <div className="col-lg-6">
                                            <span className={styles.sectionBody}>When you choose Zoho, you get more than a single product, suite, or platform. You get what we call the operating system for business, the result of more than a decade of engineering and design effort.</span>
                                            <br />
                                            <br />
                                            <span className={styles.sectionBody}>With more than 55 deeply integrated apps available on the web and mobile, we offer a solution to fit almost every business need. And if we haven't built it yet, you can bet we probably will soon.</span>
                                        </div>
                                        <div className="col-lg-6" style={{ margin: 'auto' }}>
                                            <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-newway.jpg" alt="#ImgNotFound" className='w-100' style={{ maxHeight: '400px', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    <span className={styles.sectionTitle}>A commitment to our communities</span>
                                    <span className={styles.sectionBody}>
                                        <br />
                                        <br />
                                        As a global company, we understand the value of good citizenship. It's why we always try to give more than we get and why we are always looking for ways to support the communities in which we live.
                                    </span>
                                    <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-commitedour.jpg" alt="#ImgNotFound" className='w-100 my-4' />
                                    <span className={styles.sectionBody}>
                                        <br />
                                        From providing subscription relief to businesses impacted by natural disasters to building solar farms that offset our carbon footprint, we take on initiatives that change the lives of our customers and employees for the better.
                                    </span>
                                </TabPanel>
                            </div>
                        </div>
                    </div>

                    <div className='d-lg-none d-block'>
                        <h1>A common sense approach to privacy</h1>
                        <h5>
                            When you put customers before profits, you end up with more of both.
                            <br />
                            <br />
                            From the beginning, we decided we would never show ads inside our products (not even in the free editions), nor would we sell user information to third parties. And by prohibiting third-party trackers from operating on any of our websites, we've taken extra steps to make sure that your business is yours alone.
                        </h5>
                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-commonsense.jpg" alt="#ImgNotFound" className='w-100 my-4' />
                        <h5>We aren't interested in invading your privacy just to make a quick buck. Every person should have control over their data, regardless of where they live. We didn't need laws and government regulations to tell us that; its just the right thing to do.</h5>

                        <hr className='my-5' />

                        <h1>A private company with a public vision</h1>
                        <h5>
                            Since we have never taken money from investors, we have always been able to focus on what is best for the customer. Rather than worrying about short-term profits, we've had the freedom to think for the long term.
                            <br />
                            <br />
                            This kind of independence changes how we approach problem-solving, empowering us to truly think differently.
                            <br />
                            <br />
                            From how we build to how we hire, our unconventional approach has brought us to more than 15,000 employees and 100 million users around the world.
                        </h5>
                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-privacy-mob.jpg" alt="#ImgNotFound" className='w-100 my-4' />

                        <hr className='my-5' />

                        <h1>A company you will keep</h1>
                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-companykeep-mob.jpg" alt="#ImgNotFound" className='w-100 my-4' />
                        <h5>
                            Software should solve more problems than it causes, so we don't lock you into multi-year contracts with fixed price increases. We don't push our salespeople to push you.
                            <br />
                            <br />
                            Our products are available à la carte or as suites, and we offer flexible payment options to fit every budget. Our prices are as transparent as our privacy policy, and we take pride in both.
                        </h5>

                        <hr className='my-5' />

                        <h1>A new way to run your business</h1>
                        <h5>
                            When you choose Zoho, you get more than a single product, suite, or platform. You get what we call the operating system for business, the result of more than a decade of engineering and design effort.
                            <br />
                            <br />
                            With more than 55 deeply integrated apps available on the web and mobile, we offer a solution to fit almost every business need. And if we haven't built it yet, you can bet we probably will soon.
                        </h5>
                        <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-newway-mob.jpg" alt="#ImgNotFound" className='w-100 my-4' />

                        <hr className='my-5' />

                        <h1>A commitment to our communities</h1>
                        <h5>
                            As a global company, we understand the value of good citizenship. It's why we always try to give more than we get and why we are always looking for ways to support the communities in which we live.
                            <br />
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-commitedour.jpg" alt="#ImgNotFound" className='w-100 my-4' />
                            <br />
                            With more than 55 deeply integrated apps available on the web and mobile, we offer a solution to fit almost every business need. And if we haven't built it yet, you can bet we probably will soon.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
