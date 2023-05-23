import styles from '../../../styles/Solution/Section2.module.css';

export default function Section2() {
    return (
        <div className={`p-0 px-md-4 px-3 py-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className={`row`}>
                    <div className={`col-lg-6 text-center ${styles.imageColumn}`}>
                        <img src='https://a.storyblok.com/f/172398/1450x1706/edd9cfbd3f/image-2x-solutions-agencie.png' alt="#ImgNotFound" className={`w-100 h-100`} />
                    </div>
                    <div className={`col-lg-6 pb-lg-0 pb-5 pt-lg-0 pt-5 px-lg-5`}>
                        <h1 className={`${styles.sectionTitle} py-lg-5 py-3`}><b>How Dreamstack's agency time tracking software works</b></h1>
                        <div class={`${styles.timelines} ${styles.education}`}>
                            <div class={`${styles.timelineItems}`}>
                                <div class={`${styles.timelineItem}`}>
                                    <h3></h3>
                                    <p className={`${styles.sectionBody}`}><b>Add your clients, projects, and tasks</b></p>
                                    <p className={`${styles.sectionBody} text-muted`}>To get started, simply set up your projects and assign tasks to your agency teams.</p>
                                </div>
                                <div class={`${styles.timelineItem}`}>
                                    <h3></h3><p className={`${styles.sectionBody}`}><b>Track billable and non-billable hours in one click</b></p>
                                    <p className={`${styles.sectionBody} text-muted`}>Your team can use the desktop timer for Mac, Windows, or Linux, the mobile apps when traveling, or the Chrome extension or web timer to track time. All they have to do is hit start and stop on the client they’re working on.</p>
                                </div>
                                <div class={`${styles.timelineItem}`}>
                                    <h3></h3>
                                    <p className={`${styles.sectionBody}`}><b>Auto-calculate project costs and avoid blowing budgets</b></p>
                                    <p className={`${styles.sectionBody} text-muted`}>Set client budgets and get automatic alerts as you approach them. See hours spent, detailed timesheets, and budget progress all from your Dreamstack dashboard.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

