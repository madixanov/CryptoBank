import hero from "../../../assets/photo/hero.svg";

export default function ResetMain() {
  return (
    <main className="login-main">
        <div className="login-container">
          <p className="login-title">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</p>
          <form>
            <input type="email" className="email-field" placeholder="E-mail"/>
          </form>
          <button className="login-cont-button">ОТПРАВИТЬ</button>
          <div className="help-row">
            <p className="forget-pass">Войти</p>
            <p className="register-b">Регистрация</p>
          </div>
        </div>
        <div className="icon-container">
          <img src={hero} alt="hero" />
        </div>
    </main>
  );
}