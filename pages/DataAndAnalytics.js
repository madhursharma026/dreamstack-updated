import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import News from "./Components/DataAndAnalytics/News";
import Quotes from "./Components/DataAndAnalytics/Quotes";
import Section1 from "./Components/DataAndAnalytics/Section1";
import Section2 from "./Components/DataAndAnalytics/Section2";
import Benefits from "./Components/DataAndAnalytics/Benefits";
import Insights from "./Components/DataAndAnalytics/Insights";
import Solutions from "./Components/DataAndAnalytics/Solutions";
import OurApproach from "./Components/DataAndAnalytics/OurApproach";
import TalkToExpert from "./Components/DataAndAnalytics/TalkToExpert";
import BeliefInAction from "./Components/DataAndAnalytics/BeliefInAction";

export default function DataAndAnalytics() {
  return (
    <>
      <Head>
        <title>Data And Analytics - Dreamstack</title>
        <meta name="description" content="Data And Analytics - Dreamstack" />
      </Head>
      <Header />
      <Section1 />
      <Section2 />
      <OurApproach />
      <News />
      <Solutions />
      <BeliefInAction />
      <Benefits />
      <Insights />
      <Quotes />
      <TalkToExpert />
      <Footer />
    </>
  )
}
