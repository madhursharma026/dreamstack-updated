import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LoveTheWeb from "./Components/Homepage/LoveTheWeb";
import IntroSection from "./Components/Homepage/IntroSection";
import Productivity from "./Components/Homepage/productivity";
import PartnerWithUs from "./Components/Homepage/PartnerWithUs";
import MorePowerToYou from "./Components/Homepage/MorePowerToYou";
import CustomersSlider from "./Components/Homepage/CustomersSlider";
import KnowledgeSection from "./Components/Homepage/KnowledgeSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get fully managed tech services - Dreamstack</title>
        <meta name="description" content="Get fully managed tech services - Dreamstack" />
      </Head>
      <Header />
      <IntroSection />
      <MorePowerToYou />
      <CustomersSlider />
      <Productivity />
      <KnowledgeSection />
      <PartnerWithUs />
      <LoveTheWeb />
      <Footer />
    </>
  )
}

