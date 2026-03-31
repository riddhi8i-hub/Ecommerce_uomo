import React, { useState } from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginSignUp = () => {
  const [activeTab, setActiveTab] = useState("tabButton1");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/register", {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      });

      alert(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: loginEmail,
        password: loginPassword,
      });

      alert(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div className="loginSignUpSection">
        <div className="loginSignUpContainer">
          <div className="loginSignUpTabs">
            <p
              onClick={() => handleTab("tabButton1")}
              className={activeTab === "tabButton1" ? "active" : ""}
            >
              Login
            </p>
            <p
              onClick={() => handleTab("tabButton2")}
              className={activeTab === "tabButton2" ? "active" : ""}
            >
              Register
            </p>
          </div>
          <div className="loginSignUpTabsContent">
            {/* tab1 */}

            {activeTab === "tabButton1" && (
              <div className="loginSignUpTabsContentLogin">
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    placeholder="Email address *"
                    required
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Password *"
                    required
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />


                  <div className="loginSignUpForgetPass">
                    <label>
                      <input type="checkbox" className="brandRadio" />
                      <p>Remember me</p>
                    </label>
                    <p>
                      <Link to="/resetPassword">Lost password?</Link>
                    </p>
                  </div>
                  <button>Log In</button>
                </form>
                <div className="loginSignUpTabsContentLoginText">
                  <p>
                    No account yet?{" "}
                    <span onClick={() => handleTab("tabButton2")}>
                      Create Account
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Tab2 */}

            {activeTab === "tabButton2" && (
              <div className="loginSignUpTabsContentRegister">
                <form onSubmit={handleRegister}>
                  <input
                    type="text"
                    placeholder="Username *"
                    required
                    onChange={(e) => setRegisterName(e.target.value)}
                  />


                  <input
                    type="email"
                    placeholder="Email address *"
                    required
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />


                  <input
                    type="password"
                    placeholder="Password *"
                    required
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />


                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our
                    <Link
                      to="/terms"
                      style={{ textDecoration: "none", color: "#c32929" }}
                    >
                      {" "}
                      privacy policy
                    </Link>
                    .
                  </p>
                  <button>Register</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
