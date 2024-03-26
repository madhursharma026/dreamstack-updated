import styles from '../../../styles/cloud/cloud.module.css';

export default function Section3() {
    return (
        <div className={`p-0`}>
            <div style={{ background: "#E9F3FF" }}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="py-md-5">
                        <div className="row py-5">
                            <div className="col-lg-6">
                                <h1 className={`${styles.sectionTitle2}`}>Accelerate your generative AI integrations and implementations</h1>
                            </div>
                            <div className="col-lg-6">
                                <h5 className={`text-muted my-4`}>AI transformation is the catalyst to your competitive advantage. We're the world's most experienced AI-powered tech services company making AI systems integration a faster, more efficient reality.</h5>
                                <div className="row">
                                    <div className="col-md-4 mt-3" style={{ borderLeft: '2px solid blue' }}>
                                        <h1>1000+</h1>
                                        <h4>companies accelerated</h4>
                                    </div>
                                    <div className="col-md-4 mt-3" style={{ borderLeft: '2px solid blue' }}>
                                        <h1>40+</h1>
                                        <h4>industries innovated</h4>
                                    </div>
                                    <div className="col-md-4 mt-3" style={{ borderLeft: '2px solid blue' }}>
                                        <h1>3M+</h1>
                                        <h4>technical professionals</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
