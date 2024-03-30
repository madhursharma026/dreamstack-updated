import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section1 from "./Components/WhoWeAre/Section1";
import Section2 from "./Components/WhoWeAre/Section2";
import Section3 from "./Components/WhoWeAre/Section3";
import Section4 from "./Components/WhoWeAre/Section4";
import Section5 from "./Components/WhoWeAre/Section5";
import Section6 from "./Components/WhoWeAre/Section6";
import Section7 from "./Components/WhoWeAre/Section7";
import Section8 from "./Components/WhoWeAre/Section8";
import Section9 from "./Components/WhoWeAre/Section9";

export default function WhoWeAre() {
    return (
        <>
            <Head>
                <title>Who We Are - Dreamstack</title>
                <meta name="description" content="Who We Are - Dreamstack" />
            </Head>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Footer />
        </>
    )
}

