import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Sport = () => {
  return (
    <>
      <Helmet>
        <title>Sport Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <MainContent pageName="Sport page" />
      <Footer />
    </>
  );
};

export default Sport;
