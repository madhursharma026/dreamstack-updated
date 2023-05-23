import styles from '../../../styles/cybersecurity/Section2.module.css';

export default function Section2() {
    return (
        <div className={`px-md-4 px-3 py-md-5 pb-lg-0 pb-5`}>
            <div className={`${styles.ContainerWidth}`}>
                <div className="row">
                    <div className="col-lg-6 p-lg-5 pt-5" style={{ margin: 'auto' }}>
                        <div className={`${styles.sectionBody}`}>
                            <h6><b>SECURITY FOR GROWTH</b></h6>
                            <h1 className={`${styles.sectionTitle}`}>With expanding threat perimeters in the digital world, cybersecurity is no longer just about compliance and risk mitigation—it is a growth imperative.</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 p-lg-5 pt-5 text-center">
                        <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/synergy:Extra-Medium?wid=820&hei=680&dpr=off" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
