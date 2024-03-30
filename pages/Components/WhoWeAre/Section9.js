import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';

export default function Section9() {
    return (
        <div className={`pt-5 text-center`} style={{background: '#0060B4'}}>
            <h1 className={`${styles.sectionTitle} pt-sm-5 pt-3 pb-5 text-white`}>
                Made in India.
                <br />
                Made for the World.
            </h1>
            <img src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-our-story-made-in-india.svg" alt="ImgNotFound" className='w-100' />
        </div>
    )
}

