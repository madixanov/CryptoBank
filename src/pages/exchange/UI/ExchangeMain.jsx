import { useNavigate } from "react-router-dom";
import gradient from "../../../assets/photo/gradient.svg";
import PersonalData from "./PersonalData";
import SendContainer from "./SendContainer";
import useExchangeStore from "../../../store/exchange-store";
import GetContainer from "./GetContainer";
import AgreementContainer from "./AgreementContainer";
import CardData from "./CardData";

export default function ExchangeMain() {
  const navigate = useNavigate();
  const { giveCurrency, getCurrency } = useExchangeStore();

  return (
    <main className="aml-main">
      <div className="container">
        <div className="aml-container-grid">
          <div className="exchange-form-grid">
            {/* Блок с правилами */}
            <div className="exchange-rules">
              <div style={{ whiteSpace: "pre-line" }} className="exchange-text">
                Данная операция производится оператором в ручном режиме. <br />
                Заявка выполняется от 15 до 500 минут. <br />
                В редких случаях срок может быть увеличен до 72 часов. <br /><br />
                Выплата может быть разделена на несколько переводов (до 10). <br />
                Каждый из платежей требует подтверждения в чате с оператором. <br />
                Средства могут быть отправлены через Систему Быстрых Платежей (СБП). <br />
                <br />
                Продолжая обмен, вы соглашаетесь с правилами оператора обмена.
              </div>
            </div>

            {/* Форма обмена */}
            <div className="exchange-rules">
              <div className="exchange-text">
                
                <SendContainer />

                {giveCurrency === "RUB" && (
                  <>
                    <CardData />
                  </>
                )}

                <div className="breaking-line"></div>

                <GetContainer />

                {getCurrency === "RUB" && (
                  <>
                    <CardData />
                  </>
                )}

                <div className="breaking-line"></div>

                <PersonalData />


                <div className="breaking-line"></div>

                <AgreementContainer />
              
              </div>
            </div>

            {/* Шаги по обмену */}
            <div className="exchange-rules" style={{ whiteSpace: "pre-line" }}>
              <div className="exchange-text">
                <h1>{giveCurrency === "USDT" ? "Обмен Tether TRC20 USDT на Альфа-Банк RUB" : "Обмен Tether Альфа-Банк RUB на TRC20 USDT"}</h1>
                Для обмена выполните несколько шагов:
                <br />
                <ol>
                  <li>Заполните все поля формы.</li>
                  <br />
                  <li>
                    Ознакомьтесь с условиями обмена в <span className="span-links">FAQ</span> и{" "}
                    <span className="span-links">AML</span>, затем нажмите «Обменять».
                  </li>
                  <br />
                  <li>Оплатите заявку по инструкциям на сайте.</li>
                  <br />
                  <li>После оплаты система перенаправит вас на страницу статуса заявки.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="aml-right-container">
            <div className="aml-login-container">
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
            </div>

            <div className="aml-login-container">
              <p>Проверка статуса заявки</p>
              <form className="auth-form">
                <span>ID обмена:</span>
                <input type="text" />
                <span>Email:</span>
                <input type="text" />
              </form>
              <button className="aml-login-button status">Проверить статус</button>
            </div>
          </div>
        </div>

        {/* Фоновые градиенты */}
        {[...Array(9)].map((_, i) => (
          <img key={i} src={gradient} alt="gradient" className={`gradient gradient-a${i+1}`} />
        ))}
      </div>
    </main>
  );
}
