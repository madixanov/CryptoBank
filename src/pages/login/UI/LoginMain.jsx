export default function LoginMain() {
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
            <p className="forget-pass">Забыли пароль?</p>
            <p className="register-b">Регистрация</p>
          </div>
        </div>
    </main>
  );
}