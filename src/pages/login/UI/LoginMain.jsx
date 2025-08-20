import hero from "../../../assets/photo/hero.svg";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../../../store/login-store";
import { useState } from "react";

export default function LoginMain() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn, setLoginName } = useLoginStore();
  const [ incorrectLogin, setIncorrectLogin ] = useState(false);
  const [ incorrectPassword, setIncorrectPassword ] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (login.length >= 5 && password.length >= 8) {
      setLoggedIn(true);
      setLoginName(login);
      navigate("/");
    } else if (login.length < 5) {
      setIncorrectLogin(true);
    } else if (password.length < 8) {
      setIncorrectPassword(true);
    }
  };

  return (
    <main className="login-main">
      <div className="login-container">
        <p className="login-title">ВХОД</p>
        <form>
          <input
            type="text"
            className="username-field"
            placeholder="Имя пользователя"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          {incorrectLogin && <span style={{color: "red", fontFamily: "sans-serif", alignSelf: "start",}}>Неправильный логин</span>}
          <input
            type="password"
            className="password-field"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {incorrectPassword && <span style={{color: "red", fontFamily: "sans-serif", alignSelf: "start"}}>Неправильный пароль</span>}
        </form>
        <button
          className="login-cont-button login"
          onClick={handleClick}
        >
          ВОЙТИ
        </button>
        <div className="help-row">
          <p
            className="forget-pass"
            onClick={() => navigate("/reset-password")}
          >
            Забыли пароль?
          </p>
          <p
            className="register-b"
            onClick={() => navigate("/signup")}
          >
            Регистрация
          </p>
        </div>
      </div>
      <div className="icon-container">
        <img src={hero} alt="hero" />
      </div>
    </main>
  );
}
