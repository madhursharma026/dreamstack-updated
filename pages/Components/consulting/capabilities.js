import Link from 'next/link';
import styles from '../../../styles/cybersecurity/Benefits.module.css';

export default function Capabilities() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`} style={{background:'#E3E3E3'}}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h5>Our capabilities</h5>
                <h5 className='pt-3'>Strategy for a seamless and secure transformation</h5>
                <ul>
                    <li className='pt-3'><h5>Cloud strategy and transformation</h5></li>
                    <li className='pt-3'><h5>Consumer experience transformation</h5></li>
                    <li className='pt-2'><h5><Link href="/">Finance transformation</Link></h5></li>
                    <li className='pt-2'><h5>Innovation strategy and transformation</h5></li>
                    <li className='pt-1'><h5><Link href="/">Mergers and acquisitions</Link></h5></li>
                    <li className='pt-2'><h5>Next-gen enterprise transformation</h5></li>
                    <li className='pt-3'><h5>Supply chain as a service</h5></li>
                    <li className='pt-3'><h5>Risk and cybersecurity strategy</h5></li>
                </ul>
            </div>
        </div>
    )
}
