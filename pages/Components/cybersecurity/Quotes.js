import styles from '../../../styles/cybersecurity/Quotes.module.css';

export default function Quotes() {
    return (
        <div className={`px-4 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`} style={{maxWidth:"1200px"}}>
                <img src="https://www.tcs.com/etc.clientlibs/tcs/clientlibs/clientlib-site/resources/images/quote.svg" alt="#ImgNotFound" width="100px" height="100px" />
                <h1 className={`${styles.sectionTitle}`} style={{color:"#E8337B"}}>
                To fend off the worst that cybercriminals will attempt, cybersecurity must leverage the best of what technologies like analytics, artificial intelligence, machine learning, and automation–including the possibilities offered by cloud-based solutions–can deliver.
                </h1>
                <hr />
                <h6>SANTHA SUBRAMONI</h6>
                <h6>Head, Cybersecurity Services, Dreamstack</h6>
            </div>
        </div>
    )
}
