import styles from '../../../styles/Blockchain/WhyChoose.module.css';

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
                                <div class="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                                    <div className="text-center">
                                        <img src="https://png.pngtree.com/png-vector/20230124/ourmid/pngtree-five-star-rating-with-gold-color-and-3d-style-png-image_6565096.png" alt="#ImgNotFound" width="100px" />
                                    </div>
                                    <div class="card-body text-center">
                                        <h4>
                                            They built exceptionally tailored capabilities on an existing platform. Very rarely do they say no to some possibility. Most of the time they will say, “Let’s look at this,” and, nine times out of ten, they would come back to me with the solution I had in mind. I am talking about a modification to a particular module that didn’t previously exist
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div class="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                                    <div className="text-center">
                                        <img src="https://png.pngtree.com/png-vector/20230124/ourmid/pngtree-five-star-rating-with-gold-color-and-3d-style-png-image_6565096.png" alt="#ImgNotFound" width="100px" />
                                    </div>
                                    <div class="card-body text-center">
                                        <h4>
                                            Radix goes the extra mile to ensure success. The software fulfills all our requirements. Its efficacy is based largely on their contributions. It helps us know the environmental demands that large corporations have. Our clients are very happy, and it’s doing precisely what we envisioned
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div class="card h-100" style={{ background: 'transparent', border: '2px solid white' }}>
                                    <div className="text-center">
                                        <img src="https://png.pngtree.com/png-vector/20230124/ourmid/pngtree-five-star-rating-with-gold-color-and-3d-style-png-image_6565096.png" alt="#ImgNotFound" width="100px" />
                                    </div>
                                    <div class="card-body text-center">
                                        <h4>
                                            From Custom Development to Project Management and Technology Consulting – they excelled in everything. It gives us this sense of pride when our customers say that they are flattered by the UI/UX. We know we chose the right people in the way they have made our solution unique
                                        </h4>
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
