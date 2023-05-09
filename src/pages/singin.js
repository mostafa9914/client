import { Helmet } from "react-helmet-async";
import Header from "../comp/header";
import Footer from "../comp/Footer";
import Axios from 'axios';
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import '../comp/login.css';

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const signIn = () => {
    Axios.post("http://localhost:3002/login", {
      email: email,
      password: password, 
    })
    .then((res) => {
      alert('succful Login')
      // Save the token in local storage
      localStorage.setItem('token', res.data.token);

      // Redirect the user to the profile page
      window.location.href = './Profile';
  
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return(
    <>
      <Helmet>
        <title>SingIn Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <main className="login">
        <form action="">
          <h1 className="p-create">Login</h1>
          <input type="text" placeholder="Email" onChange={e=>{setEmail(e.target.value)}} value={email}/>
          <input type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}} value={password}/>
          <button type="submit" onClick={signIn}>Sing In</button>
        
        </form>
      </main>

      <Footer />
    </>
  );
}

export default SingIn;