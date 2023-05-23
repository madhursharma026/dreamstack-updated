import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ContactModule from "./Components/Contact/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Dreamstack</title>
        <meta name="description" content="Contact - Dreamstack" />
      </Head>
      <Header />
      <ContactModule />
      <Footer />
    </>
  )
}

