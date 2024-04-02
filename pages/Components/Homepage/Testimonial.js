import List from '@mui/material/List';
import Logo from "../../media/logo.jpg";
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import styles from '../../../styles/Homepage/IntroSection.module.css';
import Link from 'next/link';

export default function Testimonial() {
    return (
        <div className={`px-4 py-3 mb-5`}>
            <div className={`${styles.ContainerWidth} py-4`} style={{ maxWidth: "992px" }}>
                <Link href='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <span className='d-xl-inline d-none' style={{ marginLeft: '-100px', borderRadius: '100%', paddingTop: '60px', paddingBottom: '60px', paddingLeft: '50px', paddingRight: '50px', background: '#FFF9EA' }}>
                        <img src="https://static-00.iconduck.com/assets.00/double-quotes-l-icon-512x393-t3r35hc3.png" alt="#ImgNotFound" width='50px' />
                    </span>
                    <p className={`${styles.h3CustomFont}`} style={{ lineHeight: '1.2' }}>
                        "Zoho Dataprep has taken the time it takes to clean and import our data from multiple hours down to minutes. I am able to provide my clients better tracking of their key statistics because I now have an automated way to take in their third-party data."
                    </p>
                    <hr />
                    <List style={{ marginTop: '-20px' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={Logo.src} alt="#ImgNotFound" className="w-100" style={{ borderRadius: "100%" }} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Akash Dixit" secondary="CEO. Dreamstack Private Limited" />
                        </ListItem>
                    </List>
                </Link>
            </div>
        </div>
    )
}
