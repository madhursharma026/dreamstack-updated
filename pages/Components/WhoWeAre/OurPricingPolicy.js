import styles from '../../../styles/WhoWeAre/MapService.module.css';

export default function OurPricingPolicy() {
    return (
        <div className={`px-md-4 px-3 pb-lg-0 pb-5 mt-lg-5 mt-0`}>
            <div className={`${styles.ContainerWidth}`}>
                <h1 className={`${styles.sectionTitle}`}>Our Pricing Policy</h1>
                <p className={`${styles.sectionContent}`}>
                    Depending on a project and the nature of the delivered service, we resort to one of the following pricing models:
                </p>
                <div className='row mx-sm-0 mx-1'>
                    <div className="col-sm-6 col-lg-3 mt-3" >
                        <div className="card h-100" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', border: '0' }}>
                            <div className="card-body text-center">
                                <h2>Fixed price</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mt-3" >
                        <div className="card h-100" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', border: '0' }}>
                            <div className="card-body text-center">
                                <h2>Time & Material</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mt-3" >
                        <div className="card h-100" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', border: '0' }}>
                            <div className="card-body text-center">
                                <h2>Consumption-based pricing</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mt-3" >
                        <div className="card h-100" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', border: '0' }}>
                            <div className="card-body text-center">
                                <h2>Monthly subscription fee</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <ul style={{ listStyleType: 'square' }}>
                    <h5 className='mb-3 mt-5'>To increase productivity and provide for the project cost reduction for our customers, we invest a part of our revenue in:</h5>
                    <li><h5>Quality management and process optimization.</h5></li>
                    <li><h5>Adoption of new technologies.</h5></li>
                    <li><h5>Employee training and further education.</h5></li>
                    <h5 className='my-3'>In addition, to implement software solutions faster and optimize the solutions’ Total Cost of Ownership, we resort to using the following technologies and methodologies:</h5>
                    <li><h5>Cloud-native architecture.</h5></li>
                    <li><h5>DevOps and the implementation of CI/CD pipelines.</h5></li>
                    <li><h5>Test automation.</h5></li>
                    <li><h5>Application Performance Management.</h5></li>
                </ul>
                <div className='mt-5 py-3' style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                    <div className={`px-3 px-md-5 py-5 ${styles.ContainerWidth} row`}>
                        <div className="col-lg-10">
                            <h3>Looking for a Partner to Support Your Business Growth or Monetize Your Idea?</h3>
                            <h5>
                                ScienceSoft will help you improve your business operations with an optimal service or assist you in launching a product that would win customers fast.
                            </h5>
                        </div>
                        <div className="col-lg-2 mt-3 text-center">
                            <button type="button" className="btn btn-primary px-3 py-2"><b>Talk to us</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

