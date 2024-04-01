import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';
import Img1 from "../../media/WhoWeAre-Images/Image1.jpg";
import Img2 from "../../media/WhoWeAre-Images/Image2.jpeg";

export default function Section3() {
    return (
        <>
            <img src={Img1.src} alt="#ImgNotFound" className='w-100' />
            <div className={`my-5 py-5`}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="row">
                        {/* <h1 className="d-xl-none d-block">Cutting-edge technology meets timeless values</h1> */}
                        <p className={`d-xl-none d-block ${styles.h1CustomFont}`}>Cutting-edge technology meets timeless values</p>
                        <div className="d-xl-block d-none col-xl-4" style={{ marginTop: '-200px' }}>
                            <div className="card w-100 h-100" style={{ background: '#F8F9FB', border: "none" }}>
                                <img src={Img2.src} className="w-100 card-img-top" alt="#ImgNotFound" height='150px' style={{ objectFit: 'cover' }} />
                                <div className="card-body p-4">
                                    {/* <h1>Cutting-edge technology meets timeless values</h1> */}
                                    <p className={styles.h1CustomFont}>Cutting-edge technology meets timeless values</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <p className={`h-100 mt-md-0 mt-4 ${styles.h5CustomFont}`} style={{ lineHeight: '1.7', letterSpacing: '-0.2px' }}>
                                We believe that software is the ultimate product of the hands and the mind. And we take pride in creating products and solutions that help solve business problems, anticipate needs, and discover opportunities to help you grow.
                                <br />
                                <br />
                                Over the past 25 years, we've brought more than 55 products to the market. But, the R&D edge that drives this innovation isn't simple luck, it's the result of careful choice.
                            </p>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <p className={`h-100 mt-md-0 mt-4 ${styles.h5CustomFont}`} style={{ lineHeight: '1.7', letterSpacing: '-0.2px' }}>
                                We prefer to build things ourselves instead of growing our platform through acquisition. We invest more in customer support and product development than in sales and marketing. All that because we believe that's the best way to deliver choice and value to our customers.
                                <br />
                                <br />
                                This kind of thinking isn't innovative. But in today's business climate, it is increasingly rare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

