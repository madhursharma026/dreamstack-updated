import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section1 from "./Components/cloud/Section1";
import Section2 from "./Components/cloud/Section2";
import Section3 from "./Components/cloud/Section3";
import Section4 from "./Components/cloud/Section4";
import Section5 from "./Components/cloud/Section5";
import Section6 from "./Components/cloud/Section6";
import Section7 from "./Components/cloud/Section7";
import Section8 from "./Components/cloud/Section8";
import Section9 from "./Components/cloud/Section9";
import Section10 from "./Components/cloud/Section10";

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
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
    </>
  )
}

