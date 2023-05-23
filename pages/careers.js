import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Team from "./Components/Careers/Team";
import Review from "./Components/Careers/Review";
import ReadAll from "./Components/Careers/ReadAll";
import Section1 from "./Components/Careers/Section1";
import Section2 from "./Components/Careers/Section2";
import Positions from "./Components/Careers/Positions";
import TeamCulture from "./Components/Careers/TeamCulture";
import DitchTheOffice from "./Components/Careers/DitchTheOffice";

export default function careers() {
  return (
    <>
      <Head>
        <title>Careers - Dreamstack</title>
        <meta name="description" content="Careers - Dreamstack" />
      </Head>
      <Header />
      <Section1 />
      <Section2 />
      <TeamCulture />
      <DitchTheOffice />
      <Review />
      <Team />
      <Positions />
      <ReadAll />
      <Footer />
    </>
  )
}

