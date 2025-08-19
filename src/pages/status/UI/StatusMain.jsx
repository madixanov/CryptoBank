import { useNavigate, useParams} from "react-router-dom";
import useLoginStore from "../../../store/login-store"

export default function StatusMain() {
  const { id } = useParams(); 

  const data = [
    { id: 1505, direction: "Альфа-банк RUB-USDT TRC20", amount: "1 TRC20", status: "Отправка средств пользователю" },
    { id: 1740, direction: "Альфа-банк RUB-USDT TRC20", amount: "5 TRC20", status: "Успешно выполнено" },
    { id: 2019, direction: "Альфа-банк RUB-USDT TRC20", amount: "10 TRC20", status: "Отказано в отправке" },
  ];

  const { loggedIn } = useLoginStore();

  const payment = data.find((item) => item.id.toString() === id);

  const navigate = useNavigate();
  return (
    <main className="status-main">
      <div className="container">
        <div className="status-sub-container">
          <div className="status-container">
            {payment ? (<div>
              <p className="status-title">Статус заявки</p>
              <p className="status-text"><span>Номер заявки: </span>{payment.id}</p>
              <p className="status-text"><span>Направление обмена: </span> {payment.direction}</p>
              <p className="status-text"><span>Сумма: </span>{payment.amount}</p>
              <p className="status-text last"><span>Статус заявки: </span>{payment.status}</p>
              <p className="hint">Узнать дополнительную информацию по заявке вы можете у оператора, обратившись в чат.</p>
            </div>) : 
            (<p>Заявка не найдена</p>)}
          </div>
          {loggedIn ? <div></div> : <div className="aml-login-container status-login-container">
            <p>Авторизация</p>
            <form className="auth-form">
              <span>Логин или e-mail *:</span>
              <input type="text" />
              <span>Пароль *:</span>
              <input type="password" />
            </form>
            <button className="aml-login-button">Войти</button>
            <div className="reg-link-row">
              <span className="reg-link" onClick={() => navigate("/signup")}>Регистрация</span>
              <span>|</span>
              <span className="reg-link" onClick={() => navigate("/reset-password")}>Забыли пароль?</span>
            </div>
          </div>}
        </div>
      </div>
    </main>
  )
}