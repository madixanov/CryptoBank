import { useNavigate } from "react-router-dom";
import gradient from "../../../assets/photo/gradient.svg";
import { useState } from "react";
import usdt from "../../../assets/icons/usdt.svg";
import abrub from "../../../assets/icons/abrub.svg";

export default function ExchangeMain() {
  const navigate = useNavigate();

  const [giveCurrency, setGiveCurrency] = useState("USDT"); // отдаём
  const [getCurrency, setGetCurrency] = useState("RUB");    // получаем
  const [amount, setAmount] = useState(1);

  const currencyIcons = {
    USDT: usdt,
    RUB: abrub,
  };

  // курсы: 1 USDT = 81 RUB и обратно
  const exchangeRates = {
    USDT: { RUB: 81 },
    RUB: { USDT: 0.0123 },
  };

  // вычисляем курс динамически
  const rate = exchangeRates[giveCurrency]?.[getCurrency] || 1;

  const handleGiveChange = (e) => {
    const selected = e.target.value;
    setGiveCurrency(selected);

    // если выбрали ту же валюту, что и "получаете", меняем getCurrency
    if (selected === getCurrency) {
      setGetCurrency(giveCurrency);
    }
  };

  const handleGetChange = (e) => {
    const selected = e.target.value;
    setGetCurrency(selected);

    // если выбрали ту же валюту, что и "отдаёте", меняем giveCurrency
    if (selected === giveCurrency) {
      setGiveCurrency(getCurrency);
    }
  };

  return (
    <div className="container">
      <main className="aml-main">
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
                <h1 className="exchange-form-title">Отдаёте</h1>
                <div className="give-container">
                  <span className="currency">
                    Курс 1 {giveCurrency} = {rate} {getCurrency}
                  </span>
                  <div className="currency-selector-container">
                    <img
                      src={currencyIcons[giveCurrency]}
                      alt={giveCurrency}
                      style={{ marginRight: "10px", width: "50px" }}
                    />
                    <select
                      onChange={handleGiveChange}
                      className="currency-selector"
                      value={giveCurrency}
                    >
                      <option value="USDT">Tether TRC20 USDT</option>
                      <option value="RUB">Альфа Банк RUB</option>
                    </select>
                  </div>
                  <span className="limits">
                    min.: {giveCurrency === "USDT" ? "493.82716049 USDT" : "81 RUB"} <br />
                    max.: {giveCurrency === "USDT" ? "2 222.822222222 USDT" : "180 048.5999982 RUB"}
                  </span>
                  <span>Сумма *:</span>
                  <input
                    type="number"
                    className="number-to-exchange"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="breaking-line"></div>

                <h1>Получаете</h1>
                <div className="get-container">
                  <div className="currency-selector-container">
                    <img
                      src={currencyIcons[getCurrency]}
                      alt={getCurrency}
                      style={{ marginRight: "10px", width: "50px" }}
                    />
                    <select
                      onChange={handleGetChange}
                      className="currency-selector"
                      value={getCurrency}
                    >
                      <option value="USDT">Tether TRC20 USDT</option>
                      <option value="RUB">Альфа Банк RUB</option>
                    </select>
                  </div>
                  <span className="result">
                    Вы получите: {(amount * rate).toFixed(2)} {getCurrency}
                  </span>
                </div>
              </div>
            </div>

            {/* Шаги по обмену */}
            <div className="exchange-rules" style={{ whiteSpace: "pre-line" }}>
              <div className="exchange-text">
                <h1>Обмен {giveCurrency} на {getCurrency}</h1>
                Для обмена выполните несколько шагов:
                <ol>
                  <li>Заполните все поля формы.</li>
                  <li>
                    Ознакомьтесь с условиями обмена в <span className="span-links">FAQ</span> и{" "}
                    <span className="span-links">AML</span>, затем нажмите «Обменять».
                  </li>
                  <li>Оплатите заявку по инструкциям на сайте.</li>
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
      </main>
    </div>
  );
}
