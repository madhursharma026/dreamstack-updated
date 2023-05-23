import styles from '../../../styles/Homepage/PartnerWithUs.module.css'

export default function PartnerWithUs() {
    return (
        <div className={`${styles.bodyContainer} p-0 px-md-4 px-3`}>
            <div className={`py-5 ${styles.ContainerWidth} text-white`}>
                <h2 className={`${styles.subTitle}`}>Partner with us</h2>
                <p className={`${styles.subBody}`}>Help fund, shape, and expand Dreamstack work toward a healthy internet and trustworthy AI.</p>
                <img src="https://assets.mofoprod.net/network/images/logo-ford-foundation.width-340.png" alt="#ImgNotFound" className='my-3' style={{ marginRight: "15px" }} width="170px" height="70px" />
                <img src="https://assets.mofoprod.net/network/images/logo-omidyar_urjZbce.width-340.png" alt="#ImgNotFound" className='m-3' width="170px" height="70px" />
                <img src="https://assets.mofoprod.net/network/images/logo-color-of-change.width-230.png" alt="#ImgNotFound" className='m-3' width="115px" height="70px" />
                <img src="https://assets.mofoprod.net/network/images/logo-consumer-international.width-340.png" alt="#ImgNotFound" className='m-3' width="170px" height="70px" />
            </div>
        </div >
    )
}

