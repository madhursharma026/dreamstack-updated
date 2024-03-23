import styles from '../../../styles/careers/ReadAll.module.css';

export default function ReadAll() {
    return (
        <div className={`px-md-4 px-3 py-5`} style={{ background: "#3F5FFF" }}>
            <div className={`${styles.ContainerWidth} py-md-5 py-3`}>
                <h1 className={`${styles.sectionTitle} text-white text-center`}><b>See what else is happening at Dreamstack</b></h1>
                <p className="text-white text-center">Get the latest articles on productivity, remote work, and more on our blog.</p>
                <div className='text-center'>
                    <button type="button" className={`btn ${styles.ReadAllAboutit}`}>Read All About it</button>
                </div>
            </div>
        </div>
    )
}
