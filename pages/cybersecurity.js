import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Quotes from "./Components/cybersecurity/Quotes";
import InFocus from "./Components/cybersecurity/InFocus";
import Section1 from "./Components/cybersecurity/Section1";
import Services from "./Components/cybersecurity/Services";
import Insights from "./Components/cybersecurity/Insights";
import Benefits from "./Components/cybersecurity/Benefits";
import Section2 from "./Components/cybersecurity/Section2";
import Insights2 from "./Components/cybersecurity/Insights2";
import Plateforms from "./Components/cybersecurity/Plateforms";
import OurApproach from "./Components/cybersecurity/OurApproach";
import TalkToExpert from "./Components/cybersecurity/TalkToExpert";
import SecurityRisk from "./Components/cybersecurity/SecurityRisk";
import BrandCarousel from "./Components/cybersecurity/BrandCarousel";
import HaveAPieceOfMind from "./Components/cybersecurity/HaveAPieceOfMind";
import AdditionalResources from "./Components/cybersecurity/AdditionalResources";
import Head from "next/head";

export default function cybersecurity() {
  return (
    <>
      <Head>
        <title>Cybersecurity - Dreamstack</title>
        <meta name="description" content="Cybersecurity - Dreamstack" />
      </Head>
      <Header />
      <Section1 />
      <Section2 />
      <OurApproach />
      <Services />
      <Insights />
      <Benefits />
      <Insights2 />
      <Quotes />
      <InFocus />
      <HaveAPieceOfMind />
      <BrandCarousel />
      <Plateforms />
      <AdditionalResources />
      <SecurityRisk />
      <TalkToExpert />
      <Footer />
    </>
  )
}

