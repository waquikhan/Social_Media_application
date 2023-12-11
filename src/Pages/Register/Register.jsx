import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
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
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="Email" placeholder="Email Id" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Contact Number" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
