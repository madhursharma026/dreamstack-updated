import styles from '../../../styles/Blockchain/WhyChoose.module.css';

export default function GetInTouch() {
    return (
        <div className={`${styles.bodyContainer} px-3`}>
            <div className={`py-5 ${styles.ContainerWidth}`}>
                <div className="text-center">
                    <h1><b>Get in Touch</b></h1>
                    <br />
                    <h2>Our Free Custom Software Development Consulting Aims to Help You Analyze the Viability of Your Concept</h2>
                    <button type="button" className="btn btn-info">Get Your Estimate</button>
                </div>
            </div>
        </div>
    )
}
