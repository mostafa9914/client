import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import MainContent from "../comp/MainContent";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>

      <Header />

      <MainContent/>

      <Footer />
    </>
  );
};

export default Home;
