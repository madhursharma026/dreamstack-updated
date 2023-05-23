import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Benefits from "./Components/common/Benefits";
import Insights from "./Components/common/Insights";
import Quotes from "./Components/enterprise/Quotes";
import Partner from "./Components/enterprise/Partner";
import Section1 from "./Components/enterprise/Section1";
import Section2 from "./Components/enterprise/Section2";
import OurApproach from "./Components/common/OurApproach";
import Solutions from "./Components/enterprise/Solutions";
import Capabilities from "./Components/enterprise/capabilities";
import BeliefInAction from "./Components/common/BeliefInAction";
import TalkToExpert from "./Components/DataAndAnalytics/TalkToExpert";

export default function enterprise() {
  return (
    <>
      <Head>
        <title>Enterprise Solutions - Dreamstack</title>
        <meta name="description" content="Enterprise Solutions - Dreamstack" />
      </Head>
      <Header />
      <Section1 />
      <Section2 />
      <Quotes />
      <Partner />
      <Capabilities />
      <Solutions />
      <BeliefInAction />
      <Benefits />
      <BeliefInAction />
      <OurApproach />
      <Insights />
      <TalkToExpert />
      <Footer />
    </>
  )
}
