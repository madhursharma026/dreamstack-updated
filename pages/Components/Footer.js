import Link from "next/link";
import Logo from "../media/logo.jpg";
import styles from '../../styles/Footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={`${styles.footerPadding} ${styles.footerBG} px-md-4 px-3`}>
                <div className={`${styles.ContainerWidth}`}>
                    <img src={Logo.src} alt="#ImgNotFound" width="80px" height='80px' />
                    <hr className={`${styles.hrStyle}`} />
                    <div className="row">
                        <div className="col-md-4 order-md-2 p-0 m-0">
                            <ul className={`${styles.ulTag} ${styles.column2} px-3`}>
                                <li><Link href="/" className={`${styles.footer_options_second}`}>Language</Link></li>
                                <select className={`form-select mt-2 ${styles.languageSelectBar}`}>
                                    <option value="">English &emsp;&emsp;&emsp;&emsp;</option>

                                </select>
                            </ul>
                        </div>
                        <div className="col-md-8 p-0 m-0">
                            <ul className={`${styles.ulTag} p-3`}>
                                <li className={`${styles.footerMenu}`} style={{ paddingRight: "15px" }}><Link href="/TermsAndCondition" className={`${styles.footer_options_second}`}>Website Privacy Notice</Link></li>
                                <li className={`${styles.footerMenu} px-3`}><Link href="/TermsAndCondition" className={`${styles.footer_options_second}`}>Cookies</Link></li>
                                <li className={`${styles.footerMenu} px-3`}><Link href="/TermsAndCondition" className={`${styles.footer_options_second}`}>Legal</Link></li>
                                <br />
                                <li className={`${styles.footerMenu} mt-2`} style={{ paddingRight: "15px" }}><Link href="/" className={`${styles.footer_options_second}`}>Community Participation Guidelines</Link></li>
                                <li className={`${styles.footerMenu} px-3 mt-2`}><Link href="/" className={`${styles.footer_options_second}`}>About this site</Link></li>
                                <p className={`mt-3 text-white ${styles.footerFacts1}`}>TAN Number: <span className={`${styles.footer_options_second}`}>AGRD12244B</span> - <span className={`${styles.footer_options_second}`}></span></p>
                                <p className={`text-white ${styles.footerFacts2}`}>Portions of this content are ©2014–2023 by individual dreamstack contributors. Content <br /> available under a  <span className={`${styles.footer_options_second}`}>Creative Commons license.</span></p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
