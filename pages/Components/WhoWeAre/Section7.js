import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';

export default function Section7() {
    return (
        <div className={`py-5`} style={{ background: '#F8F9FB' }}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="py-lg-5 text-center">
                    <h1 className={`${styles.sectionTitle} pt-md-5 pt-3`}>
                        Our journey through the years
                    </h1>
                    <h5 style={{ maxWidth: '800px', margin: 'auto', lineHeight: '1.6', letterSpacing: '-0.5px' }}>
                        Creating stellar products for our users comes first. In the long run, it's not the big wins that matter, but the little ones, and the determination to keep trying. And that's what we do every day: continually put new things on the market and demonstrate the value of our products.
                    </h5>
                </div>
                <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-ourstory-bg.png" alt="#ImgNotFound" className='w-100 mt-lg-0 mt-3 d-lg-block d-none' style={{marginBottom: '-250px'}} />

                <div className="row p-5 text-white mt-5" style={{maxWidth:'700px', margin: 'auto', borderRadius: '10px', background: '#0060B4', zIndex: '1'}}>
                    <div className="col-md-4 col-6 mt-3">
                        <h1>25+</h1>
                        <h6 style={{fontSize: '14px'}}>YEARS IN BUSINESS</h6>
                    </div>
                    <div className="col-md-4 col-6 mt-3">
                        <h1>15K+</h1>
                        <h6 style={{fontSize: '14px'}}>EMPLOYEES</h6>
                    </div>
                    <div className="col-md-4 col-6 mt-3">
                        <h1>150+</h1>
                        <h6 style={{fontSize: '14px'}}>COUNTRIES SERVED</h6>
                    </div>
                    <div className="col-md-4 col-6 mt-3">
                        <h1>16</h1>
                        <h6 style={{fontSize: '14px'}}>DATA CENTERS</h6>
                    </div>
                    <div className="col-md-4 col-6 mt-3">
                        <h1>100M+</h1>
                        <h6 style={{fontSize: '14px'}}>USERS</h6>
                    </div>
                    <div className="col-md-4 col-6 mt-3">
                        <h1>55+</h1>
                        <h6 style={{fontSize: '14px'}}>PRODUCTS</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
