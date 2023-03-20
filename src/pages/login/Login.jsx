import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globaldata } from "../../App";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(Globaldata);

  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="left">
        <h1>
          Welcome back to<br></br> Pretty Login
        </h1>
        <p>it's great to have you back!</p>
        <label>EMAIL</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>PASSWORD</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              height: "15px",
            }}
          >
            <input
              type="checkbox"
              style={{ width: "15px", margin: "12px 0" }}
            ></input>
            <p style={{ marginTop: "16px" }}> Remember me</p>
          </div>
          <p style={{ marginTop: "16px" }}>Forgot password?</p>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              if (
                email === context.logincredentials.username &&
                password === context.logincredentials.password
              ) {
                alert("login successfull");
                navigate("/home");
              } else {
                window.alert("please enter valid credentials");
              }
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/createaccount");
            }}
          >
            Create Account
          </button>
        </div>
      </div>
      <div className="right">
        <img
          src="https://www.wallpaperflare.com/static/753/495/802/fog-cold-trees-pines-wallpaper.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Login;
