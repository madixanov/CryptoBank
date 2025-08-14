import logo from "../../assets/photo/logo.svg";
import { useNavigate } from "react-router-dom";

export default function LoginHeader() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <div className="header-cont">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="button-row">
            <button className="login-button" onClick={() => {navigate("/login")}}>ВХОД</button>
            <button className="login-button" onClick={() => {navigate("/signup")}}>РЕГИСТРАЦИЯ</button>
          </div>
        </div>
      </div>
    </header>
  )
}