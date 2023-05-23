import styles from '../../../styles/cybersecurity/Benefits.module.css';

export default function Benefits() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`}>
                <h1>Benefits</h1>
                <h5 className='pt-3'>Unlock the full potential of your business.</h5>
                <ul style={{borderLeft:"4px solid red", paddingLeft:"50px"}}>
                    <li className='pt-3'><h5>Realize your purpose with a holistic transformation.</h5></li>
                    <li className='pt-3'><h5>Implement an enterprise-wide transformation, from vision and strategy to execution and outcomes.</h5></li>
                    <li className='pt-3'><h5>Ideate, create, and deploy new business models.</h5></li>
                    <li className='py-3'><h5>Elevate customer and employee experiences.</h5></li>
                    <li className='py-3'><h5>Innovate for continuous value creation.</h5></li>
                </ul>
            </div>
        </div>
    )
}
