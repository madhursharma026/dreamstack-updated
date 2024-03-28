import styles from '../../../styles/WhoWeAre/WhoWeAre.module.css';
import Typewriter from "typewriter-effect";

export default function Section2() {
    return (
        <div className={`my-5 py-5 mx-sm-5 mx-3 px-sm-5 px-3`}>
            <div style={{ maxWidth: '992px', margin: 'auto' }}>
                <h3 className='text-center'>Good software is a work of art, and good art takes time. Our teams spend years mastering their craft in order to deliver exceptional products that customers love. Software isn't just our paycheck:</h3>
                <div className="text-center">
                    <h1 className={styles.mainHeading} style={{ display: 'inline-block'  }}>
                        It's our&nbsp;
                    </h1>
                    <h1 className={styles.mainHeading} style={{ display: 'inline-block'  }}>
                        <Typewriter onInit={(typewriter) => { typewriter.typeString("craft.").pauseFor(1000).deleteAll().typeString("passion.").start(); }} />
                    </h1>
                </div>
            </div>
        </div>
    )
}

