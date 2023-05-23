import styles from '../../../styles/WhoWeAre/KnowUsBetter.module.css';

export default function KnowUsBetter() {
    return (
        <div className="px-md-4 px-3">
            <div className={`my-5 ${styles.ContainerWidth}`}>
                <div className={`row`}>
                    <h2>Get to know us better</h2>
                    <div className={`col ${styles.colNo1}`}>
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/newsroom-1:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>Newsroom</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo2}`}>
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/csr-solutioncards:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>CSR</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo3}`}>
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/diversity-solutioncards:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>Diversity, equality, inclusion</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col ${styles.colNo4}`}>
                        <div class={`${styles.columnData}`}>
                            <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/sports-solutioncards:Small?wid=575&hei=680&dpr=off" alt="#ImgNotFound" className='w-100' style={{ height: '500px' }} />
                            <div class={`${styles.bottomLeft}`}>
                                <h2>Sports sponsorship</h2>
                                <p>Stay connected and up to date with our events and announcements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
