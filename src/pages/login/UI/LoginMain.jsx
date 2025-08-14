import hero from "../../../assets/photo/hero.svg";
import { useNavigate } from "react-router-dom";

export default function LoginMain() {
  const navigate = useNavigate();
  return (
    <main className="login-main">
        <div className="login-container">
          <p className="login-title">ВХОД</p>
          <form>
            <input type="text" className="username-field" placeholder="Имя пользователя"/>
            <input type="password" className="password-field" placeholder="Пароль"/>
          </form>
          <button className="login-cont-button">ВОЙТИ</button>
          <div className="help-row">
            <p className="forget-pass" onClick={() => {navigate("/reset-password")}}>Забыли пароль?</p>
            <p className="register-b" onClick={() => {navigate("/signup")}}>Регистрация</p>
          </div>
        </div>
        <div className="icon-container">
          <img src={hero} alt="hero" />
        </div>
    </main>
  );
}