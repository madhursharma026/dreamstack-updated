import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';

export default function Section5() {
    return (
        <div className={`py-5`} style={{ background: '#F8F9FB' }}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="py-lg-5 text-center">
                    <h1 className={`${styles.sectionTitle} pt-md-5 pt-3`}>
                        We are Zoho.
                        <br />
                        This is our story.
                    </h1>
                    <h4 className={`${styles.makingFontLessBoldAfterSMScrn}`} style={{ maxWidth: '900px', margin: 'auto', lineHeight: '1.6', letterSpacing: '-0.5px' }}>In the 1990s, in a small apartment located in the suburbs of Chennai in southern India, a simple, yet revolutionary idea was born: <span style={{ background: '#FFF3E4' }}>"Build smart technology to help businesses work better."</span> This idea evolved to become the world-class technology company we're known as today.</h4>
                </div>
                <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-twentyfive.svg" alt="#ImgNotFound" className='w-100 mt-lg-0 mt-3' />
            </div>
        </div>
    )
}
