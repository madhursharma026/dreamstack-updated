import styles from '../../../styles/cybersecurity/Benefits.module.css';

export default function Benefits() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{background:"#E3E3E3"}}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h5>BENEFITS</h5>
                <h5 className='pt-3'>Achieve your business objectives with agility using actionable insights.</h5>
                <ul style={{borderLeft:"4px solid red", paddingLeft:"50px"}}>
                    <li className='pt-3'><h5>Embed analytics across the enterprise to improve customer experience and reduce costs.</h5></li>
                    <li className='pt-3'><h5>Design innovative solutions for data-driven products and services.</h5></li>
                    <li className='pt-3'><h5>Leverage AI as the digital brain to become resilient and adaptable.</h5></li>
                    <li className='py-3'><h5>Build sustainable businesses with a range of performance metrics.</h5></li>
                </ul>
            </div>
        </div>
    )
}

