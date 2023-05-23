import styles from '../../../styles/cybersecurity/Quotes.module.css';

export default function Quotes() {
    return (
        <div className={`px-4`}>
            <div className={`${styles.ContainerWidth}`} style={{ maxWidth: "1200px" }}>
                <img src="https://www.tcs.com/etc.clientlibs/tcs/clientlibs/clientlib-site/resources/images/quote.svg" alt="#ImgNotFound" width="100px" height="100px" />
                <h1 className={`${styles.sectionTitle}`} style={{ color: "#E8337B" }}>
                Successful digital transformations are business driven. We partner with our clients to bring to life their vision of enterprise-wide transformation for purpose-led growth.
                </h1>
                <hr />
                <div className="row">
                    <div className="col-lg-1 col-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="#ImgNotFound" className="w-100" style={{borderRadius:"100%", height:"60px"}} />
                    </div>
                    <div className="col-lg-11 col-10">
                        <h6>DAVE JORDAN</h6>
                        <h6>Vice President & Global Head, Consulting, Dreamstack</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
