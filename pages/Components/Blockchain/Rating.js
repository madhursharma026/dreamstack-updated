import styles from '../../../styles/Blockchain/WhyChoose.module.css';
import Images17 from "../../media/Blockchain-Images/blockchain-image-17.png";

export default function Rating() {
    return (
        <>
            <div className={`${styles.bodyContainer} py-5`} style={{ color: 'white', background: '#0F1628' }}>
                <div className="px-md-4 px-3">
                    <div className={`py-5 ${styles.ContainerWidth}`}>
                        <div className="text-center">
                            <h1 className={`${styles.sectionTitle}`}><b>What Our Partner Say</b></h1>
                            <br />
                        </div>
                        <br />

                        <div className="row">
                            <div className="col-lg-4 mt-3">
                                <div className="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                                    <div className="text-center">
                                        <img src={Images17.src} alt="#ImgNotFound" width="100px" />
                                    </div>
                                    <div className="card-body text-center">
                                        <p className={`${styles.h4CustomFont}`}>
                                            They built exceptionally tailored capabilities on an existing platform. Very rarely do they say no to some possibility. Most of the time they will say, “Let’s look at this,” and, nine times out of ten, they would come back to me with the solution I had in mind. I am talking about a modification to a particular module that didn’t previously exist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div className="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                                    <div className="text-center">
                                        <img src={Images17.src} alt="#ImgNotFound" width="100px" />
                                    </div>
                                    <div className="card-body text-center">
                                        <p className={`${styles.h4CustomFont}`}>
                                            Radix goes the extra mile to ensure success. The software fulfills all our requirements. Its efficacy is based largely on their contributions. It helps us know the environmental demands that large corporations have. Our clients are very happy, and it’s doing precisely what we envisioned
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div className="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                                    <div className="text-center">
                                        <img src={Images17.src} alt="#ImgNotFound" width="100px" />
                                    </div>
                                    <div className="card-body text-center">
                                        <p className={`${styles.h4CustomFont}`}>
                                            From Custom Development to Project Management and Technology Consulting – they excelled in everything. It gives us this sense of pride when our customers say that they are flattered by the UI/UX. We know we chose the right people in the way they have made our solution unique
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
