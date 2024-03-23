import styles from '../../../styles/Homepage/TryPocket.module.css'

export default function TryPocket() {
    return (
        <div className={`pt-5 my-5 ${styles.ContainerWidth}`}>
            <div className="row px-3">
                <div className={`col-md-6 mt-3 order-md-2 ${styles.tryPocketContent}`}>
                    <img src="https://logos-download.com/wp-content/uploads/2019/11/Pocket_Logo.png" alt="#ImgNotFound" width="200px" height="50px" className='mb-3' />
                    <h1 className={`${styles.sectionTitle}`}>Welcome to the web, sunny side up</h1>
                    <p className={`${styles.sectionBody}`}>Millions of people rely on Pocket to save and discover the best articles, stories and videos on the web. As part of the Firefox family, Pocket has the same dedication to privacy</p>
                    <button type="button" className={`btn btn-primary`}><b>Try Pocket</b></button>
                </div>
                <div className={`col-md-6 mt-md-0 mt-5`}>
                    <img className='w-100' src="https://images.ctfassets.net/w5er3c7zdgmd/2ySD0uwR3K2TtYItTDFFm8/655364580fc7a7f0789d7299710d58d3/pocket-rainbow.jpg?w=800" alt="#ImgNotFound" />
                </div>
            </div>
        </div>
    )
}
