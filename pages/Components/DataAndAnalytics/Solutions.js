import Accordion from 'react-bootstrap/Accordion';
import styles from '../../../styles/cybersecurity/Services.module.css';

export default function Solutions() {

    return (   
    <div className={`px-md-4 px-3`}>
    <div className={`${styles.ContainerWidth}`}>
            <Accordion>
                <p className={`${styles.sectionBody}`}>Our solutions</p>
                <p className={`${styles.sectionBody} mb-5`} style={{ borderLeft: '4px solid red', paddingLeft: '10px' }}>We help enterprises turn data into value. Here’s how.</p>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>Dreamstack Decision Fabric <sup>TM</sup></h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-md-4 col-lg-3">
                                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/products-platforms/products/CII/customer-intelligence-insights-her-banner.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                <h4>Dreamstack Customer Intelligence & Insights (CI&I) helps organizations deliver relevant, connected, and personalized user experience in real-time. Learn how.</h4>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>Dreamstack Datom <sup>TM</sup></h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-md-4 col-lg-3" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/products-platforms/platforms/tcs-add/tap-tcs-card.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                <h4>Read how Dreamstack solution that can be deployed as a source to pay suite helps firms adopt agile sourcing & procurement, automate intelligently, & engage suppliers.  </h4>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h2>Dreamstack Daezmo <sup>TM</sup></h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-md-4 col-lg-3" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/erp-transformation-cloud-Card-1330x1270.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                <h4>Dreamstack ERP on Cloud platform, built around SAP S/4 HANA Core, provides real-time insights for informed decisions and helps accelerate digital transformation.</h4>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h2>Dreamstack Dexam <sup>TM</sup></h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-md-4 col-lg-3" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/products-platforms/platforms/tcs-add/tcs-add-analytics-insights-intelligent-decision-making-card.jpg/jcr:content/renditions/cq5dam.thumbnail.1280.765.png" alt="#ImgNotFound" width='100%' />
                            </div>
                            <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                <h4>Dreamstack MasterCraft™ optimizes processes across software development, QA, low-code development, digital transformation, enterprise data quality, and privacy.</h4>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        </div>
    )
}

