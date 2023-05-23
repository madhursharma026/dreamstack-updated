import styles from '../../../styles/DataAndAnalytics/Section2.module.css';

export default function Section2() {
    return (
        <div className={`px-md-4 px-3 py-md-5 pb-lg-0 pb-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className="col-lg-6 p-lg-5 pt-5" style={{ margin: 'auto' }}>
                        <div className={`${styles.sectionBody}`}>
                            <h1 className={`${styles.sectionTitle}`}>Strategy for action</h1>
                            <p className={`${styles.sectionContent}`}>Today's business landscape calls for new enterprise strategies, technological innovation, and a holistic approach to the changing expectations of customers and employees. To thrive amidst change, you need a transformative business strategy centered on purpose.</p>
                            </div>
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5 text-center">
                        <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/chess-card:Extra-Medium?wid=820&hei=680&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
