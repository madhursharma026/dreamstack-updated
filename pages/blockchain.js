import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Types from "./Components/Blockchain/Types";
import Rating from "./Components/Blockchain/Rating";
import Process from "./Components/Blockchain/Process";
import Section1 from "./Components/Blockchain/Section1";
import Section2 from "./Components/Blockchain/Section2";
import Section4 from "./Components/Blockchain/Section4";
import WhyChoose from "./Components/Blockchain/WhyChoose";
import Solutions from "./Components/Blockchain/solutions";
import GetInTouch from "./Components/Blockchain/GetInTouch";
import Industries from "./Components/Blockchain/Industries";
import BlockchainServices from "./Components/Blockchain/BlockchainServices";
import ConsultingServices from "./Components/Blockchain/ConsultingServices";
import Head from "next/head";

export default function WhoWeAre() {
    return (
        <>
            <Head>
                <title>Blockchain - Dreamstack</title>
                <meta name="description" content="Blockchain - Dreamstack" />
            </Head>
            <Header />
            <Section1 />
            <Section2 />
            <ConsultingServices />
            <Section4 />
            <BlockchainServices />
            <Types />
            <Solutions />
            <Industries />
            <Process />
            <WhyChoose />
            <Rating />
            <GetInTouch />
            <Footer />
        </>
    )
}

