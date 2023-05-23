import styles from '../../../styles/DataAndAnalytics/Section2.module.css';

export default function Section2() {
    return (
        <div className={`px-md-4 px-3 py-md-5 pb-lg-0 pb-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className="col-lg-6 p-lg-5 pt-5" style={{ margin: 'auto' }}>
                        <div className={`${styles.sectionBody}`}>
                            <h1 className={`${styles.sectionTitle}`}>Accelerate results with analytics</h1>
                            <p className={`${styles.sectionContent}`}>Data is at the heart of business transformation. Our solutions provide insights that help you develop new products and services, elevate customer experience, and enhance business outcomes.</p>
                            </div>
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5 text-center">
                        <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/stocks:Medium?wid=700&hei=525&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
