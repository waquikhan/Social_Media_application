import { Link } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {

   const [inputs, setInputs] = useState({
    username:"",
    password:"",
    email:"",
    name:""
   })
   const [err, setErr] = useState(null)

   const handleChange = e =>{
      setInputs(prev=>({...prev, [e.target.name] : e.target.value}))
   };

   const handleClick = async e =>{
      e.preventDefault();

      try {
        await axios.post("http://localhost:8800/api/auth/register", inputs);
      }
      catch(err){
        setErr(err.response.data)
      }
   }

   console.log(err)
  return (
    <div className="register">
      <div className="card">
        <div className="left ">
          <h1>Waqui Social</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            neque praesentium perspiciatis a harum mollitia! Molestiae ea beatae
            ipsam enim?
          </p>
          <span>Do you have an account .</span>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="Email" placeholder="Email Id" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
