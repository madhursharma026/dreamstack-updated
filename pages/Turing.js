import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Clients from "./Components/Turning/Clients";
import Trusted from "./Components/Turning/Trusted";
import Innovation from "./Components/Turning/Innovation";
import Quotes from "./Components/DataAndAnalytics/Quotes";
import ManagedTeam from "./Components/Turning/ManagedTeam";
import IntroSection from "./Components/Turning/IntroSection";
import CloudService from "./Components/Turning/CloudService";
import Applications from "./Components/Turning/Applications";
import QualtityCostRatio from "./Components/Turning/QualtityCostRatio";

export default function Turing() {
    return (
        <>
            <Head>
                <title>Turing - Dreamstack</title>
                <meta name="description" content="Turning - Dreamstack" />
            </Head>
            <Header />
            <IntroSection />
            <Innovation />
            <Trusted />
            <CloudService />
            <Applications />
            <ManagedTeam />
            <QualtityCostRatio />
            <Clients />
            <Quotes />
            <Footer />
        </>
    )
}

