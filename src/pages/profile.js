import { Helmet } from "react-helmet-async";
import Footer from "../comp/Footer";
import Header from "../comp/header";
// import { Axios } from "axios";

// import { useEffect, useState } from "react";

const Profile = () => {
  // Axios.get("http://localhost:3002/proile", (req, res) => {
    
  // });

  return (
    <>
      <Helmet>
        <title>profile Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <main>
        <div></div>
      </main>

      <Footer />
    </>
  );
};
export default Profile;
