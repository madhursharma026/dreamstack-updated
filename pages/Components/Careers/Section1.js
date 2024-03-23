import Link from 'next/link';
import styles from '../../../styles/careers/Section1.module.css';

export default function Section1() {

    function moveToPositions() {
        var positionHeight = localStorage.getItem('positionHeight');
        window.scroll(0, positionHeight);
    }

    return (
        <div className={`${styles.Section1} px-md-4 px-3 py-md-5`}>
            <div className={`${styles.ContainerWidth} py-lg-5`}>
                <div className={`row py-5 ${styles.Section1Content}`}>
                    <h1 className={`${styles.sectionTitle} text-white text-center py-md-5 py-3`}><b>Remote work for a more flexible future</b></h1>
                    <div className="row">
                        <div className={`col-md-6 mt-md-0 mt-3  ${styles.openPositionBtnSection}`}>
                            <button type="button" className={`btn ${styles.openPositionBtn}`} onClick={() => moveToPositions()}>View open positions</button>
                        </div>
                        <div className={`col-md-6 mt-md-0 mt-3  ${styles.salesBtnSection}`}>
                            <Link className={`btn ${styles.salesBtn}`} href="/contact" role="button">Talk to sales</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

