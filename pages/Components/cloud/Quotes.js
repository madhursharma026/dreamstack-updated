import styles from '../../../styles/cybersecurity/Quotes.module.css';
import Image8 from "../../media/Cloud-Images/cloud-image-8.jpeg";
import Image9 from "../../media/Cloud-Images/cloud-image-9.png";

export default function Quotes() {
    return (
        <div className={`px-4 py-3`}>
            <div className={`${styles.ContainerWidth} py-4`} style={{ maxWidth: "1200px" }}>
                <img src={Image8.src} alt="#ImgNotFound" width="100px" height="80px" />
                <h1 className={`${styles.sectionTitle}`} style={{ color: "#E8337B" }}>
                Cloud opens up opportunities for enterprises to do everything from improving business processes to finding new revenue streams and eventually becoming significantly more relevant to the end customers.
                </h1>
                <hr />
                <div className="row">
                    <div className="col-lg-1 col-2">
                        <img src={Image9.src} alt="#ImgNotFound" className="w-100" style={{borderRadius:"100%", height:"60px"}} />
                    </div>
                    <div className="col-lg-11 col-10">
                        <h6>RAJESH GOPINATHAN</h6>
                        <h6>CEO and Managing Director, Dreamstack</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
