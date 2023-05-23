import styles from '../../../styles/cybersecurity/OurApproach.module.css';

export default function OurApproach() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{ background: '#1E2222' }}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h6 className={`${styles.sectionTitle} text-white`}><b>OUR APPROACH</b></h6>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/7709/7709895.png" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Enable business vision</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <img src="https://pngimg.com/uploads/sun/small/sun_PNG13426.png" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Empower data-led decisions</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <img src="https://www.pngmart.com/files/7/Security-PNG-Transparent-Picture.png" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Build resilience</b></h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center py-3">
                        <img src="https://img.freepik.com/free-icon/user_318-865433.jpg?w=360" alt="#ImgNotFound" className={`${styles.imgWidth}`} />
                        <h6 className='text-white pt-4'><b>Accelerate innovation</b></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
