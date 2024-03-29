import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';

export default function Section6() {
    return (
        <div className={`py-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="py-lg-5">
                    <div className="row">
                        <div className="col-md-5 text-center">
                            <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-sridhar.png" alt="#ImgNotFound" style={{ width: '80%' }} />
                        </div>
                        <div className="col-md-7 mt-4">
                            <h1 className={`${styles.sectionTitle}`}>
                                Craftsmanship, as good as it gets
                            </h1>
                            <p className='mt-3' style={{ maxWidth: '400px', fontFamily: 'robotoslablight', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.5rem' }}>Building software is best done in small teams, in informal environments. Numbers and metrics-only-driven approaches destroy creativity and result in soulless products.</p>
                            <h5 style={{ lineHeight: '1.6', letterSpacing: '-0.3px' }}>We see creating great software that delivers high value as a craft, akin to a work of art. You chip away at what's not working, sharpen your skills year after year, and return to refine your product from the very core. While the components might be high-tech, the process used to create them is the same as that of any artisan: tireless effort, countless iteration, and patient refinement.</h5>

                            <hr className='my-5' />

                            <h1 className={`${styles.sectionTitle}`}>
                                Privately held, profitable, and proud to be
                            </h1>
                            <p className='mt-3' style={{ maxWidth: '400px', fontFamily: 'robotoslablight', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.5rem' }}>Our mantra has always been to invest in people and products. That's why most of our investments go towards R&D.</p>
                            <h5 style={{ lineHeight: '1.6', letterSpacing: '-0.3px' }}>We've been around for a quarter of a century, and plan to be around a whole lot longer.</h5>
                            <br />
                            <h5 style={{ lineHeight: '1.6', letterSpacing: '-0.3px' }}>Our decision not to take venture capital, not to go for an IPO, and not to be acquired has given us immense freedom—the freedom to innovate, to learn from our mistakes, and to challenge conventional wisdom. We've put in the time and hard work to build our software portfolio from scratch, rather than acquiring the work of others.</h5>

                            <hr className='my-5' />

                            <h1 className={`${styles.sectionTitle}`}>
                                An innovation-first company
                            </h1>
                            <p className='mt-3' style={{ maxWidth: '400px', fontFamily: 'robotoslablight', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.5rem' }}>We take great pride in our ability to reinvent ourselves.</p>
                            <h5 style={{ lineHeight: '1.6', letterSpacing: '-0.3px' }}>This confidence comes from the wisdom we learned during times when we had no choice but to reinvent, all while tapping into new market opportunities.</h5>
                            <br />
                            <h5 style={{ lineHeight: '1.6', letterSpacing: '-0.3px' }}>We haven't earned the goodwill of customers and analysts alike by building great software alone, but by demonstrating our commitment to ceaseless innovation.</h5>

                            <hr className='my-5' />

                            <h1 className={`${styles.sectionTitle}`}>
                                A holistic approach toward employees
                            </h1>
                            <p className='mt-3' style={{ maxWidth: '400px', fontFamily: 'robotoslablight', lineHeight: '1.6', letterSpacing: '-0.3px', background: '#fff3e4', fontSize: '1.5rem' }}>We hire people for whom our existence truly makes a difference.</p>
                            <h5 style={{ lineHeight: '1.6', letterSpacing: '-0.3px' }}>We think beyond the system of credentialism. That hiring policy and the goal of creating more jobs in rural communities, by itself, contributes to keeping our culture vital.</h5>
                            <br />
                            <h5 style={{ lineHeight: '1.6', letterSpacing: '-0.3px' }}>We've had programmers move to creative design, content writers switch to customer support, and copy editors transition into human resource roles. We do not believe that prior experience in one field should preclude pursuing another. Our employees, who’ve stayed with us for more than a decade, have spoken in great detail about such experiences in Humans of Zoho.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
