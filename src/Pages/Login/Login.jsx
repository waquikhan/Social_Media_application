import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            neque praesentium perspiciatis a harum mollitia! Molestiae ea beatae
            ipsam enim?
          </p>
          <span>Don't you have an account .?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
          <p>Forget Password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
