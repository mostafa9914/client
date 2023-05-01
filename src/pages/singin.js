import { Helmet } from "react-helmet-async";
import Header from "../comp/header";
import Footer from "../comp/Footer";

const SingIn=()=>{
  return(
    <>
      <Helmet>
        <title>SingIn Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <main>
        <form action="">
          <h1 className="p-create">Login</h1>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password"/>
          <button>Sing In</button>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default SingIn;