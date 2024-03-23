import styles from '../../../styles/Solution/Section6.module.css';

export default function Section6() {
    return (
        <div className={`px-md-4 px-3 py-5`} style={{ background: "#3F5FFF" }}>
            <div className={`${styles.ContainerWidth} py-md-5 py-3`}>
                <h1 className={`${styles.sectionTitle} text-white text-center`}><b>Try Dreamstack free for 14 days</b></h1>
                <p className="text-white text-center my-3">Get the premier agency timesheet software with payments and invoicing free for 14 days.
                    <br />
                    No credit card needed. Cancel anytime.</p>
                <div className='text-center'>
                    <button type="button" className={`btn ${styles.ReadAllAboutit}`}>Try Dreamstack Now</button>
                </div>
            </div>
        </div>
    )
}
