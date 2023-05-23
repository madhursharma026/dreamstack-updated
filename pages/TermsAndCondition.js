import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import UserAgreement from "./Components/TermsAndCondition/UserAgreement";

export default function TermsAndCondition() {
  return (
    <>
      <Head>
        <title>Terms And Condition - Dreamstack</title>
        <meta name="description" content="Terms And Condition - Dreamstack" />
      </Head>
      <Header />
      <UserAgreement />
      <Footer />
    </>
  )
}
