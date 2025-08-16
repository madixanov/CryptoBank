import hero from "../../../assets/photo/hero.svg";
import { useNavigate } from "react-router-dom";

export default function ResetMain() {
  const navigate = useNavigate();
  return (
    <main className="login-main">
        <div className="login-container">
          <p className="login-title">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</p>
          <form>
            <input type="email" className="email-field" placeholder="E-mail"/>
          </form>
          <button className="login-cont-button login">ОТПРАВИТЬ</button>
          <div className="help-row">
            <p className="forget-pass" onClick={() => {navigate("/login")}}>Войти</p>
            <p className="register-b" onClick={() => {navigate("/signup")}}>Регистрация</p>
          </div>
        </div>
        <div className="icon-container">
          <img src={hero} alt="hero" />
        </div>
    </main>
  );
}