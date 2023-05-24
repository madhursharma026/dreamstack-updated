import Link from 'next/link';
import styles from '../../../styles/Homepage/MorePowerToYou.module.css'
import Images11 from "../../media/Turing-Images/turing-image-11.jpeg";
import Images12 from "../../media/Turing-Images/turing-image-12.jpeg";

export default function QualtityCostRatio() {
    return (
        <div className={`py-5 mt-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <h1 className={`${styles.sectionTitle} px-3`}>The right development talent, only from Dreamstack</h1>
                <p className={`${styles.sectionBody} px-3`}>Intelligent solutions require intelligent talent. We deeply vet and match the most suitable people for your solution—building customized teams across location, experience, technical expertise, and other key requirements.</p>
                <div className="row px-3">
                    <div className={`col-md-6 h-100 order-md-2 text-center`} style={{ margin: 'auto' }}>
                        <img className='w-100' src={Images11.src} alt="#ImgNotFound" style={{ maxWidth: '400px' }} />
                    </div>
                    <div className={`col-md-6 h-100`}>
                        <h3 className={`py-3`}><b>High quality/cost ratio</b></h3>
                        <ul>
                            <li>
                                <h4>Deeply vetted developers at half the cost</h4>
                                <h5>
                                    We're home to the top 1% of 2 million+ developers from 150+ countries
                                </h5>
                            </li>
                            <li className='mt-4'>
                                <h4>100+ skills available</h4>
                                <h5>
                                    We have React, Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, DevOps, ML, Data Engineers, and more.
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row px-3">
                    <div className={`col-md-6 h-100 text-center`} style={{ margin: 'auto' }}>
                        <img src={Images12.src} alt="#ImgNotFound" style={{ maxWidth: '400px' }} />
                    </div>
                    <div className={`col-md-6 mt-5`}>
                        <h3 className={`py-3`}><b>Highest-quality vetting</b></h3>
                        <ul>
                            <li>
                                <h4>5+ hours of tests and interviews</h4>
                                <h5>
                                    More rigorous than Silicon Valley job interviews. We test for 100+ skills, data structures, algorithms, systems design, software specializations & frameworks.
                                </h5>
                            </li>
                            <li className='mt-4'>
                                <h4>Seniority tests</h4>
                                <h5>
                                    We select excellent communicators who can proactively take ownership of business and product objectives without micromanagement.
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
