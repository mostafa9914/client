import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Cultural = () => {
  return (
    <>
      <Helmet>
        <title>Cultural Page</title>
        <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>

      <Header />

      <MainContent pageName="Cultural Page" />

      <Footer />
    </>
  );
};

export default Cultural;
