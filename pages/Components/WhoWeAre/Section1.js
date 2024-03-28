import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';

export default function Section1() {
    return (
        <div className={`p-0 mt-5`}>
            <div className={styles.bgStyle} style={{ backgroundImage: `url(https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohoaboutus-ban.jpg)`, paddingTop: '100px', paddingBottom: '100px', backgroundSize: 'cover', backgroundPosition: '50%', backgroundAttachment: 'fixed', overflow: 'hidden' }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="row py-lg-5 my-lg-5">
                        <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                            <div style={{ borderBottom: '2px solid #FFAE0A', width: '100px' }}>
                                <h4 className='text-white'>About Us</h4>
                            </div>
                            <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}>For more than 25 years, we've been bucking Silicon Valley trends, taking our own approach to building products.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

