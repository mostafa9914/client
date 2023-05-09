import { Helmet } from "react-helmet-async";
import Header from "../comp/header";
import Footer from "../comp/Footer";
import '../index.css'
import Axios from 'axios';
import { useEffect, useState } from "react";
const SingUp=()=>{

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");

  



  useEffect(() => {
    Axios.get("http://localhost:3002/users").then((res) => {
    setUsers(res.data)
    
    });
  }, [users]);

  const createUser = (e) => {
    e.preventDefault();
      alert('crteate Users')
    Axios.post("http://localhost:3002/singup",{
      email:email,
      type: type,
      password:password
    })
    .then((res) => {
      setUsers(res.data)
    });
  };


  return(
    <>
      <Helmet>
        <title>SingUp Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <main className="login">
          
        <form action="" >
          <h1 className="p-create">Create Users</h1>
          <input type="text"  placeholder="Email" onChange={e=>{setEmail(e.target.value)}} />
          <input type="text" placeholder="Type" onChange={e=>{setType(e.target.value)}}/>
          <input type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
          <button type="submit" onClick={createUser}>Sing Up</button>
      
        </form>

      </main>

      <Footer />
    </>
  );
}

export default SingUp;