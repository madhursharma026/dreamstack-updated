import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Quotes from "./Components/cloud/Quotes";
import Section1 from "./Components/cloud/Section1";
import Section2 from "./Components/cloud/Section2";
import Benefits from "./Components/common/Benefits";
import Insights from "./Components/common/Insights";
import News from "./Components/DataAndAnalytics/News";
import OurApproach from "./Components/common/OurApproach";
import Capabilities from "./Components/cloud/capabilities";
import BeliefInAction from "./Components/common/BeliefInAction";
import TalkToExpert from "./Components/DataAndAnalytics/TalkToExpert";

export default function cloud() {
  return (
    <>
      <Head>
        <title>Cloud - Dreamstack</title>
        <meta name="description" content="Cloud - Dreamstack" />
      </Head>
      <Header />
      <Section1 />
      <Section2 />
      <OurApproach />
      <Capabilities />
      <Insights />
      <Benefits />
      <BeliefInAction />
      <News />
      <Quotes />
      <TalkToExpert />
      <Footer />
    </>
  )
}
