import LoginForm from "../components/Login/LoginForm";
import LoginBanner from "../components/Login/LoginBanner";
import Footer from "../components/footer/footer";



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
