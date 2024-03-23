import Link from 'next/link';
import styles from '../../../styles/cybersecurity/HaveAPieceOfMind.module.css';
import Images17 from "../../media/Cybersecurity-Images/cybersecurity-image-17.png";
import Images18 from "../../media/Cybersecurity-Images/cybersecurity-image-18.png";
import Images19 from "../../media/Cybersecurity-Images/cybersecurity-image-19.png";
import Images20 from "../../media/Cybersecurity-Images/cybersecurity-image-20.png";
import Images21 from "../../media/Cybersecurity-Images/cybersecurity-image-21.png";
import Images22 from "../../media/Cybersecurity-Images/cybersecurity-image-22.png";

export default function HaveAPieceOfMind() {
    return (
        <div className={`py-5 px-md-5 px-3`}>
            <div className={`${styles.ContainerWidth}`}>
                <div style={{ maxWidth: '1100px', margin: 'auto' }} className='mb-5 px-3 text-center'>
                    <h6 className={`${styles.sectionTitle}`}><b>Have peace of mind with website security</b></h6>
                    <p className={`${styles.sectionBody}`}>Comprehensive website security software protects you from malware, DDoS attacks, phishing scams, bad bots and other types of malicious code and cyber threats. This includes the protection of your site code and web applications.</p>
                    <p className={`${styles.sectionBody}`}>SiteLock’s website protection plans vary based on the level of security needed. Some of our primary features include daily website scans to find threats, real-time notifications, automated malware removal, vulnerability/CMS patching to fix threats, a web application firewall to block and prevent harmful traffic before it ever reaches your site, a content delivery network (CDN) to accelerate your site speed (which can improve SEO) and a firewall PCI report to help eCommerce sites comply with banking institutions. Protect sensitive information and customer data with the following offerings.</p>
                </div>
                <div className="row px-lg-5">
                    <div className="col-md-6 mt-lg-5 mt-3">
                        <p className={`${styles.sectionBody} text-danger`}>
                            <img src={Images17.src} alt="#ImgNotFound" style={{ width: "60px", height: '70px', paddingTop: '10px' }} />
                            &ensp; <b>Website Scanning</b></p>
                        <p className={`${styles.sectionBody}`} style={{ paddingLeft: '70px', marginTop: '-30px' }}>Our website security scan instantly checks your website from malware, viruses and other cyber threats and alerts you to found issues.</p>
                        <Link href="" className='text-black pb-2' style={{ marginLeft: '70px', borderBottom: '2px solid red', textDecoration: 'none' }}>LEARN MORE</Link>
                    </div>
                    <div className="col-md-6 mt-lg-5 mt-3">
                        <p className={`${styles.sectionBody} text-danger`}>
                            <img src={Images18.src} alt="#ImgNotFound" style={{ width: "60px", height: '70px', paddingTop: '10px' }} />
                            &ensp; <b>Malware Removal</b></p>
                        <p className={`${styles.sectionBody}`} style={{ paddingLeft: '70px', marginTop: '-30px' }}>Detects and automatically removes malicious content from your website, creating a safe experience for your customers and their sensitive information.</p>
                        <Link href="" className='text-black pb-2' style={{ marginLeft: '70px', borderBottom: '2px solid red', textDecoration: 'none' }}>LEARN MORE</Link>
                    </div>
                    <div className="col-md-6 mt-lg-5 mt-3">
                        <p className={`${styles.sectionBody} text-danger`}>
                            <img src={Images19.src} alt="#ImgNotFound" style={{ width: "60px", height: '70px', paddingTop: '10px' }} />
                            &ensp; <b>Vulnerability Patching</b></p>
                        <p className={`${styles.sectionBody}`} style={{ paddingLeft: '70px', marginTop: '-30px' }}>Easily check for website vulnerabilities in your CMS with our vulnerability scanner before they are exploited by hackers and cause disruption to the functionality of your site.</p>
                        <Link href="" className='text-black pb-2' style={{ marginLeft: '70px', borderBottom: '2px solid red', textDecoration: 'none' }}>LEARN MORE</Link>
                    </div>
                    <div className="col-md-6 mt-lg-5 mt-3">
                        <p className={`${styles.sectionBody} text-danger`}>
                            <img src={Images20.src} alt="#ImgNotFound" style={{ width: "60px", height: '70px', paddingTop: '10px' }} />
                            &ensp; <b>Website Backup</b></p>
                        <p className={`${styles.sectionBody}`} style={{ paddingLeft: '70px', marginTop: '-30px' }}>Securely backup your website to protect against ransomware, hardware corruption and human errors with our reliable backup solution.</p>
                        <Link href="" className='text-black pb-2' style={{ marginLeft: '70px', borderBottom: '2px solid red', textDecoration: 'none' }}>LEARN MORE</Link>
                    </div>
                    <div className="col-md-6 mt-lg-5 mt-3">
                        <p className={`${styles.sectionBody} text-danger`}>
                            <img src={Images21.src} alt="#ImgNotFound" style={{ width: "60px", height: '70px', paddingTop: '10px' }} />
                            &ensp; <b>Web Application Firewall (WAF)</b></p>
                        <p className={`${styles.sectionBody}`} style={{ paddingLeft: '70px', marginTop: '-30px' }}>Powerful WAF security protects against advanced cyberthreats - including the top ten threats that could damage your site or blacklist it from search engines.</p>
                        <Link href="" className='text-black pb-2' style={{ marginLeft: '70px', borderBottom: '2px solid red', textDecoration: 'none' }}>LEARN MORE</Link>
                    </div>
                    <div className="col-md-6 mt-lg-5 mt-3">
                        <p className={`${styles.sectionBody} text-danger`}>
                            <img src={Images22.src} alt="#ImgNotFound" style={{ width: "60px", height: '70px', paddingTop: '10px' }} />
                            &ensp; <b>Content Delivery Network</b></p>
                        <p className={`${styles.sectionBody}`} style={{ paddingLeft: '70px', marginTop: '-30px' }}>SiteLock’s technology enables high volumes of website traffic with zero lag time, ensuring the best possible customer experience with no latency.</p>
                        <Link href="" className='text-black pb-2' style={{ marginLeft: '70px', borderBottom: '2px solid red', textDecoration: 'none' }}>LEARN MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
