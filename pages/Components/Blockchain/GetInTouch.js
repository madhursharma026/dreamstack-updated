import styles from '../../../styles/Blockchain/WhyChoose.module.css';

export default function GetInTouch() {
    return (
        <div className={`${styles.bodyContainer} px-3`}>
            <div className={`py-5 ${styles.ContainerWidth}`}>
                <div className="text-center">
                <p className={`${styles.h1CustomFont}`}><b>Get in Touch</b></p>
                    <br />
                    <p className={`${styles.h2CustomFont}`}>Our Free Custom Software Development Consulting Aims to Help You Analyze the Viability of Your Concept</p>
                    <button type="button" className="btn btn-info">Get Your Estimate</button>
                </div>
            </div>
        </div>
    )
}
