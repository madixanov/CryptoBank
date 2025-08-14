import hero from "../../../assets/photo/hero.svg";

export default function RegisterMain() {
  return (
    <main className="login-main">
        <div className="login-container">
          <p className="login-title">РЕГИСТРАЦИЯ</p>
          <form>
            <input type="text" className="username-field" placeholder="Имя пользователя"/>
            <input type="email" className="email-field" placeholder="Email"/>
            <input type="password" className="password-field" placeholder="Пароль"/>
            <input type="password" className="password-field" placeholder="Повторите пароль"/>
          </form>
          <button className="login-cont-button">ОТПРАВИТЬ</button>
          <div className="help-row">
            <p className="forget-pass">Уже зарегистрированы?</p>
            <p className="register-b">Активация профиля</p>
          </div>
        </div>
        <div className="icon-container">
          <img src={hero} alt="hero" />
        </div>
    </main>
  );
}