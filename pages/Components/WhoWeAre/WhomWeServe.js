import styles from '../../../styles/WhoWeAre/Galance.module.css';

export default function WhomWeServe() {
    return (
        <div className="px-md-4 px-3 pb-lg-0 pb-5">
            <div className={`my-5 ${styles.ContainerWidth}`}>
                <h3><b>Whom We Serve</b></h3>
                <div className="row">
                    <div className="col-md-6 px-3">
                        <div className="card h-100 p-4" style={{ background: 'url(https://www.mphasis.com/content/dam/mphasis-com/global/en/home/our-approach/solutions/cognitive-tab.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'100%', color: 'white', borderRadius: '0' }}>
                            <div className="card-body">
                                <h3 className="card-title"><b>Non-IT enterprises</b></h3>
                                <p className="card-text">
                                    Services to improve business performance, optimize customer service, and tap in digital transformation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3 px-3">
                        <div className="card h-100 p-4" style={{ background: 'url(https://media.licdn.com/dms/image/C5612AQGKVySkLy_wlA/article-cover_image-shrink_720_1280/0/1644417102967?e=2147483647&v=beta&t=ifzvyYVez0spWvIxcDvdN16DCrVo-7E4cq8BihmPwH0)', backgroundRepeat:'no-repeat', backgroundSize:'100%', color: 'white', borderRadius: '0' }}>
                            <div className="card-body">
                                <h3 className="card-title"><b>Software product companies</b></h3>
                                <p className="card-text">
                                    Services to help bring new products to the market and win customers fast.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
