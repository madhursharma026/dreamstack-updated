import styles from '../../../styles/cloud/cloud.module.css';

export default function Section8() {
    return (
        <div className='pb-5' style={{ background: "#E9F3FF" }}>
            <div className={`py-5`}>
                <div className={`${styles.ContainerWidth}`}>
                    <div className="row">
                        <div className="col-lg-6 mt-3">
                            <h1 className={`${styles.sectionTitle2}`}>Turing increases developer productivity by over 30%</h1>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <img src="https://turing.cdn.prismic.io/turing/65dffed79c42d04f7d969ae9_Google_Cloud_logo1.svg?auto=compress%2Cformat&fit=max&w=384" alt="#ImgNotFound" style={{ maxWidth: '300px', width: '100%' }} />
                            <h5 className='text-muted mt-3'>
                                Discover how Turing and Google are transforming the way businesses work through Duet AI.
                            </h5>
                        </div>
                    </div>
                    <div className={`${styles.videoContainer} mt-4`}>
                        <iframe width="1304" height="734" style={{borderRadius: '10px'}} src="https://www.youtube.com/embed/zbuA2QEwF_E" title="Turing increases developer productivity by over 30% with Duet AI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
