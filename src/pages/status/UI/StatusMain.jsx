import { useNavigate} from "react-router-dom";
import useLoginStore from "../../../store/login-store"
import useBidStore from "../../../store/bid-store"
import gradient from "../../../assets/photo/gradient.svg"

export default function StatusMain() {
  
  const { giveBidCurrency, getBidAmount, bidStatus, bidId } = useBidStore();
  

  const { loggedIn } = useLoginStore();

  const navigate = useNavigate();
  return (
    <main className="status-main">
      <div className="container">
        <div className="status-sub-container">
          <div className="status-container">
            <div>
              <p className="status-title">Статус заявки</p>
              <p className="status-text"><span>Номер заявки: </span>{bidId}</p>
              <p className="status-text"><span>Направление обмена: </span> {giveBidCurrency === "USDT" ? "USDT TRC20" : "Альфа-Банк RUB"}-{giveBidCurrency === "USDT" ? "Альфа-Банк RUB" : "USDT TRC20"}</p>
              <p className="status-text"><span>Сумма: </span>{giveBidCurrency === "RUB" ?  <span>{getBidAmount / 81} TRC20</span>: <span>{getBidAmount * 81} RUB</span>}</p>
              <p className="status-text last"><span>Статус заявки: </span>{bidStatus}</p>
              <p className="hint">Узнать дополнительную информацию по заявке вы можете у оператора, обратившись в чат.</p>
            </div>
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
      <img src={gradient} alt="gradient" className="profile-gradient pg1" />
      <img src={gradient} alt="gradient" className="profile-gradient pg2" />
      <img src={gradient} alt="gradient" className="profile-gradient pg3" />
    </main>
  )
}