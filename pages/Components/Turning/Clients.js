import styles from '../../../styles/Turing/Clients.module.css';

export default function Clients() {
    return (
        <div className={`py-5 px-md-4 px-3`}>
            <div className={`${styles.ContainerWidth}`}>
                <h2>What clients say about Dreamstack</h2>
                <p className={`${styles.sectionBody}`}>900+ top companies have trusted Dreamstack and the Talent Cloud for their engineering needs.</p>
                <div className="row">
                    <div className="col-md-4 mt-lg-3 mt-4">
                        <div style={{ background: 'transparent linear-gradient(104deg,#6c7bd4,#56a8f7) 0 0 no-repeat padding-box', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', textAlign:'right' }}> 
                        <img src="https://www.turing.com/icons/quote.svg" alt="#ImgNotFound" width="40px" height='40px' className='m-1' />
                        </div>
                        <div class="card" style={{ boxShadow: 'rgba(17,17,26,.05) 0px 1px 0px,rgba(17,17,26,.1) 0px 0px 8px', borderTopLeftRadius: '0', borderTopRightRadius: '0' }}>
                            <div class="card-body">
                               <h5>Dreamstack has been a valuable partner in helping us grow our team. We use Dreamstack because it helps us quickly find great talent globally in the ultra-competitive market climate.</h5>
                               <br /><br />
                               <h5 className='text-primary'>HR Manager of a US-based, multimillion-dollar software solution provider</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-lg-3 mt-4">
                        <div style={{ background: 'transparent linear-gradient(104deg,#6c7bd4,#56a8f7) 0 0 no-repeat padding-box', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', textAlign:'right' }}> 
                        <img src="https://www.turing.com/icons/quote.svg" alt="#ImgNotFound" width="40px" height='40px' className='m-1' />
                        </div>
                        <div class="card" style={{ boxShadow: 'rgba(17,17,26,.05) 0px 1px 0px,rgba(17,17,26,.1) 0px 0px 8px', borderTopLeftRadius: '0', borderTopRightRadius: '0' }}>
                            <div class="card-body">
                               <h5>Dreamstack has been a valuable partner in helping us grow our team. We use Dreamstack because it helps us quickly find great talent globally in the ultra-competitive market climate.</h5>
                               <br /><br />
                               <h5 className='text-primary'>HR Manager of a US-based, multimillion-dollar software solution provider</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-lg-3 mt-4">
                        <div style={{ background: 'transparent linear-gradient(104deg,#6c7bd4,#56a8f7) 0 0 no-repeat padding-box', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', textAlign:'right' }}> 
                        <img src="https://www.turing.com/icons/quote.svg" alt="#ImgNotFound" width="40px" height='40px' className='m-1' />
                        </div>
                        <div class="card" style={{ boxShadow: 'rgba(17,17,26,.05) 0px 1px 0px,rgba(17,17,26,.1) 0px 0px 8px', borderTopLeftRadius: '0', borderTopRightRadius: '0' }}>
                            <div class="card-body">
                               <h5>Dreamstack has been a valuable partner in helping us grow our team. We use Dreamstack because it helps us quickly find great talent globally in the ultra-competitive market climate.</h5>
                               <br /><br />
                               <h5 className='text-primary'>HR Manager of a US-based, multimillion-dollar software solution provider</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

