import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";

const Login = () => {
  let [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  function toggleVisibility() {
    setShowPassword((prev) => {
      return !prev;
    });
  }
  const moveToHome = (e) => {
    e.preventDefault();
    navigate("/Home");
  }
  return (
    <>
      <div className="loginMain">
        <div className="formMain">
          <h2 className="login">Login</h2>
          <form className="form" 
            onSubmit={moveToHome}
          >
            <div className="info">
              <div className="email">
                <label htmlFor="email" className="lable">
                  Username:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  id="email"
                  className="input"
                />
              </div>
              <label htmlFor="password" className="lable">
                Password:{" "}
              </label>
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  id="password"
                  className="input"
                />
              </div>
              <div className="show">
                <input
                  type="checkbox"
                  id="showPass"
                  checked={showPassword}
                  onChange={toggleVisibility}
                />
                <label htmlFor="showPass">Show Password</label>
              </div>
            </div>
            <div className="submit">
              <button type="submit" className="signIn">SIGN IN</button>
              <a href="#">Forget Password</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
