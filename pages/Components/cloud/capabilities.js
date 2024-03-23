import Accordion from 'react-bootstrap/Accordion';
import CloudImage3 from "../../media/Cloud-Images/cloud-image-3.png";
import CloudImage4 from "../../media/Cloud-Images/cloud-image-4.png";
import CloudImage5 from "../../media/Cloud-Images/cloud-image-5.png";
import CloudImage6 from "../../media/Cloud-Images/cloud-image-6.png";
import CloudImage7 from "../../media/Cloud-Images/cloud-image-7.png";
import styles from '../../../styles/cybersecurity/Services.module.css';

export default function Capabilities() {
    return (
        <div className={`px-md-4 px-3 py-md-5 py-3`}>
            <div className={`${styles.ContainerWidth}`}>
                <Accordion style={{ maxWidth: '1400px', margin: 'auto' }}>
                    <p className={`${styles.sectionBody}`}>Our capabilities</p>
                    <p className={`${styles.sectionBody}`} style={{ borderLeft: '4px solid red', paddingLeft: '10px' }}>We power your success with our unmatched partnerships and cloud capabilities.</p>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b><h2>01. Cloud Strategy and Transformation</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3">
                                    <img src={CloudImage3.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Dreamstack ADD  is a suite of modern and open technology platforms for clinical research and drug development that helps make clinical trials more agile and safe.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b><h2>02. Dreamstack and AWS Cloud</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3" style={{maxHeight:'200px', overflow:'hidden'}}>
                                    <img src={CloudImage4.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Offering Software-as-a-Service across a stack of solutions and applications, Dreamstack BaNCS facilitates smooth transformation in financial services and drives growth.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b><h2>03. Dreamstack and Google Cloud</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3" style={{maxHeight:'200px', overflow:'hidden'}}>
                                    <img src={CloudImage5.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Dreamstack BFSI Platforms is a cloud-native, as-a-service digital ecosystem that helps FIs and insurance firms overcome challenges and deliver superior CX. Learn more.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><b><h2>04. Dreamstack and Microsoft Cloud</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3">
                                    <img src={CloudImage6.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>As enterprises adopt new ways of working, read how Dreamstack AI-driven workforce management solution helps promote workforce wellbeing & enhance productivity & EX.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><b><h2>05. Enterprise Cloud</h2></b></Accordion.Header>
                        <Accordion.Body>
                            <div className="row">
                                <div className="col-md-4 col-lg-3">
                                    <img src={CloudImage7.src} alt="#ImgNotFound" width='100%' />
                                </div>
                                <div className="col-md-8 col-lg-9 mt-md-0 mt-3">
                                    <h4>Dreamstack Customer Intelligence & Insights (CI&I) helps organizations deliver relevant, connected, and personalized user experience in real-time. Learn how.</h4>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

