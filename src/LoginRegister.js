import React, { useEffect } from "react";
import "./LoginRegister.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

function LoginRegister() {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login_link");
    const registerLink = document.querySelector(".register_link");
    const iconClose = document.querySelector(".icon_close");
    // const registerForm = document.querySelector(".register");
    // const loginForm = document.querySelector(".login");
    // const formBox = document.querySelector(".form_box");
    // formBox.classList.remove("login");
    // formBox.classList.remove("register");

    function login() {
      registerLink.addEventListener("click", () => {
        wrapper.classList.add("active2");
        // formBox.classList.remove("login");
        // formBox.classList.add("register");
      });

      loginLink.addEventListener("click", () => {
        wrapper.classList.remove("active2");
        // formBox.classList.remove("register");
        // formBox.classList.add("login");
      });

      wrapper.classList.add("active2_popup");

      iconClose.addEventListener("click", () => {
        wrapper.classList.remove("active2_popup");
      });
    }

    // function login2() {
    //   loginLink.addEventListener("click", () => {
    //     wrapper.classList.remove("active2");
    //   });

    //   iconClose.addEventListener("click", () => {
    //     wrapper.classList.remove("active2_popup");
    //   })
    // }

    login();
    // login2();
  }, []);

  return (
    <div className="wrapper">
      <span className="icon_close">
        <CloseOutlinedIcon />
      </span>

      <div className="form_box login">
        <h2>Login</h2>

        <form action="#">
          <div className="input_box">
            <span className="icon">
              <EmailIcon />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input_box">
            <span className="icon">
              <LockIcon />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="remember_forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login_register">
            <div className="login_register_text">
              <p>
                Dont't have an account?
                <a href="#" className="register_link">
                  Signup
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="form_box register">
        <h2>Signup</h2>
        <form action="#">
          <div className="input_box">
            <span className="icon">
              <PersonIcon />
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="input_box">
            <span className="icon">
              <EmailIcon />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input_box">
            <span className="icon">
              <LockIcon />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="remember_forgot">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn">
            Signup
          </button>
          <div className="login_register">
            <p>
              Already have an account?
              <a href="#" className="login_link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
