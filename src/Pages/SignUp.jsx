import "../CSS/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-[100vh] min-w-[100vw] flex justify-center items-center overflow-hidden">
      <div className="relative">
        <div className="signup-card">
          <h1 className="signup">Sign Up</h1>

          <div className="inputBox1">
            <input type="text" required />
            <span className="user">Email</span>
          </div>

          <div className="inputBox">
            <input type="text" required />
            <span>Username</span>
          </div>

          <div className="inputBox">
            <input type="password" required />
            <span>Password</span>
          </div>

          <button className="enter">Sign up</button>
        </div>

        <div className="text-center mt-2">
          <p className=" text-sm text-white">
            Already have an account?
            <span className="text-blue-300 font-bold">
              <Link to="/log-in"> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
