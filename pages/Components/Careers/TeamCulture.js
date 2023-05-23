import styles from '../../../styles/careers/TeamCulture.module.css';

export default function TeamCulture() {

    return (
        <div className={`${styles.ContainerWidth}`}>
            <div className="text-center px-md-4 px-3">
                <h1 className={`${styles.sectionTitle}`}>Our team culture</h1>
                <p className={`${styles.sectionBody} text-muted`}>These behaviors show what it means to be a true Hubstar. <br /> It’s what we strive for and celebrate as a team.</p>

                <div className="row mt-5 mx-xl-5 px-xl-5">
                    <div className="col-lg-6 pt-5" style={{ maxWidth: "580px", margin: 'auto' }}>
                        <h1>🥇</h1>
                        <h1 className={`${styles.subHeading}`}>Own it</h1>
                        <p className={`${styles.sectionBody} text-muted`}>Have pride in the work you do and own it from start to finish. Do what you say you’re gonna do without being nudged.</p>
                    </div>
                    <div className="col-lg-6 pt-5" style={{ maxWidth: "580px", margin: 'auto' }}>
                        <h1>✅</h1>
                        <h1 className={`${styles.subHeading}`}>Prove it</h1>
                        <p className={`${styles.sectionBody} text-muted`}>Know your numbers. Show evidence for decisions and proof later that they worked. This earns respect.</p>
                    </div>
                    <div className="col-lg-6 pt-5" style={{ maxWidth: "580px", margin: 'auto' }}>
                        <h1>⏰</h1>
                        <h1 className={`${styles.subHeading}`}>Trim it</h1>
                        <p className={`${styles.sectionBody} text-muted`}>Work efficiently, and recognize when time is being wasted. Identify opportunities for improvement.</p>
                    </div>
                    <div className="col-lg-6 pt-5" style={{ maxWidth: "580px", margin: 'auto' }}>
                        <h1>🕵</h1>
                        <h1 className={`${styles.subHeading}`}>Solve it</h1>
                        <p className={`${styles.sectionBody} text-muted`}>Present solutions not problems, and think for yourself. You have permission to create. Creation adds value. Take charge and just get it done.</p>
                    </div>
                    <div className="col-lg-6 pt-5" style={{ maxWidth: "580px", margin: 'auto' }}>
                        <h1>💪</h1>
                        <h1 className={`${styles.subHeading}`}>Mean it</h1>
                        <p className={`${styles.sectionBody} text-muted`}>Share opinions honestly and respectfully. Don’t be afraid to pick a side and defend it.</p>
                    </div>
                    <div className="col-lg-6 pt-5" style={{ maxWidth: "580px", margin: 'auto' }}>
                        <h1>🤟</h1>
                        <h1 className={`${styles.subHeading}`}>Feel it</h1>
                        <p className={`${styles.sectionBody} text-muted`}>Start with empathy. Not an assembly line. Take initiative and think with the customer in mind.</p>
                    </div>
                    <div className="col-lg-6 pt-5" style={{ maxWidth: "580px", margin: 'auto' }}>
                        <h1>🚀</h1>
                        <h1 className={`${styles.subHeading}`}>Ship it</h1>
                        <p className={`${styles.sectionBody} text-muted`}>Act with urgency and choose simple over complex. It's better to release something early and iterate on it than perfect it first.</p>
                    </div>
                    <div className="col-lg-6 pt-5" style={{ maxWidth: "580px", margin: 'auto' }}>
                        <h1>🤛</h1>
                        <h1 className={`${styles.subHeading}`}>Team it</h1>
                        <p className={`${styles.sectionBody} text-muted`}>We’re in this together and we’re all on the same team. Take time to appreciate each other.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
