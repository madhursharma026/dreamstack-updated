import Head from "next/head";
import { useRouter } from 'next/router';
import Header from "./Components/Header";
import styles from '../styles/Turing/OnBoardingPages.module.css';

export default function ThanksPage2() {
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
                    <h1 className="pt-sm-5 mt-sm-5">🎉 Thank you!</h1>
                    <h6>We’ll be in touch soon to imagine, deliver, and run your business solution.</h6>
                    <button type="button" class="btn btn-primary" onClick={(e) => moveOnTurningPages(e)}>Home</button>
                    <img src="https://lh3.googleusercontent.com/Uk7FuU7Udcp-7j-ynwtCwL0ERuw1SZJB4fJ6L0bUkoGgAd21yfQbkkvbGUaRxMsFfiLuXsm3q9miTJJnyw_mMR6lR66L-mjM2NAm5MIeDA" alt="#ImgNotFound" className="mt-4 w-100" />
                    
                </div>
            </div>
        </div>
    )
}

