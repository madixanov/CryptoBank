import logo from "../../../assets/photo/logo.svg";
import "../register.css";

export default function RegisterHeader() {
  return (
    <header>
      <div className="container">
        <div className="header-cont">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="button-row">
            <button className="login-button">ВХОД</button>
            <button className="login-button">РЕГИСТРАЦИЯ</button>
          </div>
        </div>
      </div>
    </header>
  )
}