import styles from '../../../styles/careers/Section2.module.css';
import Images1 from "../../media/Careers-Images/careers-image-1.png";

export default function Section2() {
    return (
        <div className={`px-md-4 px-3 py-md-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row" style={{ maxWidth: '1000px', margin: 'auto' }}>
                    <div className="col-lg-6 p-lg-5 pt-5 text-center" style={{ margin: 'auto' }}>
                        <img src={Images1.src} alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5">
                        <h1 className={`${styles.sectionTitle}`}>Flexibility, productivity, joy — it’s what Dreamstack is all about</h1>
                        <p className={`${styles.sectionBody}`}>At Dreamstack, we aim to make work easier for everyone — both for our own employees and for businesses all around the world. Our time-saving products allow teams to take control of their work hours, payroll, reporting, GPS tracking, projects, team organization, and so much more. By working at Dreamstack, you get to be part of a team that makes work better for everyone.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
