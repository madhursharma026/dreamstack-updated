import BeliefInAction from "./Components/consulting/BeliefInAction";
import Benefits from "./Components/consulting/Benefits";
import Capabilities from "./Components/consulting/capabilities";
import Insights from "./Components/consulting/Insights";
import OurApproach from "./Components/consulting/OurApproach";
import Section1 from "./Components/consulting/Section1";
import Section2 from "./Components/consulting/Section2";
import News from "./Components/DataAndAnalytics/News";
import Quotes from "./Components/DataAndAnalytics/Quotes";
import TalkToExpert from "./Components/DataAndAnalytics/TalkToExpert";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function consulting() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <OurApproach />
      <Capabilities />
      <BeliefInAction />
      <Benefits />
      <Insights />
      <News />
      <Quotes />
      <TalkToExpert />
      <Footer />
    </>
  )
}
