import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';
import Typewriter from "typewriter-effect";

export default function Section2() {
    return (
        <div className={`my-5 py-5 mx-sm-5 mx-3`}>
            <div style={{ maxWidth: '860px', margin: 'auto' }}>
                <h4 className='text-center' style={{lineHeight: '1.6', letterSpacing: '-0.3px'}}>Good software is a work of art, and good art takes time. Our teams spend years mastering their craft in order to deliver exceptional products that customers love. Software isn't just our paycheck:</h4>
                <div className="text-center d-sm-block d-none">
                    <h1 className={styles.mainHeading} style={{ display: 'inline-block' }}>
                        It's our&nbsp;
                    </h1>
                    <h1 className={styles.mainHeading} style={{ display: 'inline-block' }}>
                        <Typewriter onInit={(typewriter) => { typewriter.typeString("craft.").pauseFor(1000).deleteAll().typeString("passion.").start(); }} />
                    </h1>
                </div>
                <div className="text-center d-sm-none d-block mt-3">
                    <h1 className={styles.mainHeading2} style={{ display: 'inline-block' }}>
                        It's our&nbsp;
                    </h1>
                    <h1 className={styles.mainHeading2} style={{ display: 'inline-block' }}>
                        <Typewriter onInit={(typewriter) => { typewriter.typeString("craft.").pauseFor(1000).deleteAll().typeString("passion.").start(); }} />
                    </h1>
                </div>
            </div>
        </div>
    )
}

