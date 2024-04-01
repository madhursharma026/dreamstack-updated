import styles from '../../../styles/Blockchain/Section1.module.css';

export default function Section1() {
    return (
        <div className={`${styles.bodyContainer} bg-black px-3 py-5`}>
            <div className={`py-5 mt-5 ${styles.ContainerWidth} text-white`}>
                <h1 className={`${styles.sectionTitle} pt-md-5 pt-3 text-white`}><b>Blockchain Development Services</b></h1>
                <br />
                <p className={`${styles.h4CustomFont} text-white`}>Equip your business with a sustainable and secure ecosystem of blockchain solutions</p>
                <br />
                <p className={`${styles.h4CustomFont} text-white`}>Custom blockchain development services from Dreamstackweb help you build a strong core for your next application by creating a decentralized blockchain network</p>
            </div>
        </div >
    )
}
