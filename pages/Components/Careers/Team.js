import styles from '../../../styles/careers/Team.module.css';

export default function Team() {
    return (
        <div className={`px-md-4 px-3 py-md-5 ${styles.teamContainer}`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row" style={{ maxWidth: '1200px', margin: 'auto' }}>
                    <div className="col-lg-6 order-lg-2 pt-md-0 pt-5 text-center" style={{ margin: 'auto' }}>
                        <img src="https://a.storyblok.com/f/172398/18245a2c83/image_take-a-closer-look.png" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5">
                        <h1 className={`${styles.sectionTitle} text-white`}>Take a closer look at the Dreamstack team</h1>
                        <p className={`${styles.sectionBody} text-white`}>
                            We are mostly dog people (but we love cat people, too).<br />
                        </p>
                        <p className={`${styles.sectionBody} text-white`}>
                            Dreamstack generally spend their free time cooking, playing games, reading, working out, brewing beer, or hanging with the family.<br />
                        </p>
                        <p className={`${styles.sectionBody} text-white`}>
                            We're big into family. One of the great benefits of remote work is being home for bus pickup and drop-off.<br />
                        </p>
                        <p className={`${styles.sectionBody} text-white`}>
                            Wellness is important to us. Many Dreamstack lift weights, rock climb, and practice yoga — as reported in our #wellness Slack channel.<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
