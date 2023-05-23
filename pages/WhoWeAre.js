import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Galance from "./Components/WhoWeAre/glance";
import Section2 from "./Components/WhoWeAre/Section2";
import Investors from "./Components/WhoWeAre/Investors";
import OurPeople from "./Components/WhoWeAre/OurPeople";
import MapService from "./Components/WhoWeAre/MapService";
import AboutUsCard from "./Components/WhoWeAre/AboutUsCard";
import WhomWeServe from "./Components/WhoWeAre/WhomWeServe";
import TalkToExpert from "./Components/WhoWeAre/TalkToExpert";
import KnowUsBetter from "./Components/WhoWeAre/KnowUsBetter";
import Partnerships from "./Components/WhoWeAre/partnerships";
import OurPricingPolicy from "./Components/WhoWeAre/OurPricingPolicy";

export default function WhoWeAre() {
    return (
        <>
            <Head>
                <title>Who We Are - Dreamstack</title>
                <meta name="description" content="Who We Are - Dreamstack" />
            </Head>
            <Header />
            <Section2 />
            <Galance />
            <OurPeople />
            <AboutUsCard />
            <KnowUsBetter />
            <WhomWeServe />
            <MapService />
            <Partnerships />
            <OurPricingPolicy />
            <Investors />
            <TalkToExpert />
            <Footer />
        </>
    )
}
