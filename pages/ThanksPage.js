import Head from "next/head";
import { useRouter } from 'next/router';
import Header from "./Components/Header";
import styles from '../styles/Turing/OnBoardingPages.module.css';

export default function ThanksPage() {
    const router = useRouter();

    function moveOnTurningPages(e) {
        e.preventDefault()
        router.push({
            pathname: 'Turing',
        });
    }

    return (
        <div>
            <Head>
                <title>Thanks - Dreamstack</title>
                <meta name="description" content="Turning - Dreamstack" />
            </Head>
            <Header />

            <div className={`px-md-4 px-3 py-lg-0 py-5 mt-5 ${styles.IntroSection}`}>
                <div className={`${styles.ContainerWidth} text-center mt-5 pt-5`}>
                    <h1 className="pt-5 mt-5">Thanks</h1>
                    <h5>We'll be in touch with you.</h5>
                    <button type="button" className="btn btn-primary" onClick={(e) => moveOnTurningPages(e)}>Home</button>
                </div>
            </div>
        </div>
    )
}

