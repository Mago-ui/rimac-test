import React from "react";
import LoginForm from "../components/Login/LoginForm";
import LoginBanner from "../components/Login/LoginBanner";

import Footer from "../components/footer/footer";
import Header from "../components/header/header";

function Login() {
  return (
    <div className="Login">
      <LoginBanner />
      <LoginForm />
      <Footer></Footer>
    </div>
  );
}

export default Login;
