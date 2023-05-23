import styles from '../../../styles/cybersecurity/Benefits.module.css';

export default function Benefits() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{background:"#F4F3F9"}}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h5>BENEFITS</h5>
                <h5 className='pt-3'>Grow your business with cyber-confidence</h5>
                <ul className='pt-3'>
                    <li><h5>Optimize security investments</h5></li>
                    <li><h5>Ensure digital trust</h5></li>
                    <li><h5>Accelerate cloud transformation</h5></li>
                    <li><h5>Protect customer data</h5></li>
                    <li><h5>Enhance digital ecosystem security</h5></li>
                    <li><h5>Meet regulatory compliance</h5></li>
                    <li><h5>Reduce total cost of ownership</h5></li>
                </ul>
            </div>
        </div>
    )
}
