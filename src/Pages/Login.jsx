import { useEffect } from "react";
import "../CSS/SignUp.css";
import { Link } from "react-router-dom";
import Render_Sound from "../assets/Sounds/SND01_sine/transition_up.wav";

const Login = () => {
  const RenderSound = new Howl({
    src: [Render_Sound],
    volume: 0.5,
    preload: true,
  });

  useEffect(() => {
    RenderSound.play();
  }, []);

  return (
    <div className="min-h-[100vh] min-w-[100vw] flex justify-center items-center overflow-hidden">
      <div className="relative">
        <div className="signup-card">
          <h1 className="signup">Log In</h1>

          <div className="inputBox">
            <input type="text" required />
            <span>Username</span>
          </div>

          <div className="inputBox">
            <input type="password" required />
            <span>Password</span>
          </div>

          <button className="enter">Log IN</button>
        </div>

        <div className="text-center mt-2">
          <p className=" text-sm text-white">
            Don't have an account?
            <span className="text-blue-300 font-bold">
              <Link to="/sign-up"> Create Account</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
