import styles from '../../../styles/cybersecurity/TalkToExpert.module.css';
import Link from 'next/link';

export default function TalkToExpert() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{ background: "#1E2222" }}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <div className="row">
                    <div className="col-md-6 pt-3">
                        <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/cto-digital-transformation-improve-business-outcomes_Card_1330_x_1270-1:Extra-Medium?wid=820&hei=681&dpr=off" alt="#ImgNotFound" className='w-100' style={{maxHeight:"300px"}} />
                    </div>
                    <div className={`col-md-6 ${styles.rightSide} pt-3`}>
                        <h1 className={`${styles.sectionTitle} text-white`}>Transformation starts here</h1>
                        <h5 className="text-muted my-3">Looking to turn purpose into action?</h5>
                        <Link href="/contact" className={`btn ${styles.btnStyle} text-white`}>Talk To our Expert</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
