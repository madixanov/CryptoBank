import { useState } from "react";
import hero from "../../../assets/photo/hero_dark.svg";
import exchange from "../../../assets/icons/exchange.svg";
import gradient from "../../../assets/photo/gradient.svg";

export default function Welcome() {
  // Курсы валют
  const rates = {
    "USDT(trc20)": { "Альфа Банк РУБ": 79.4, BTC: 0.000015 },
    "Альфа Банк РУБ": { "USDT(trc20)": 1 / 79.4, BTC: 0.00000019 },
  };

  const [giveAmount, setGiveAmount] = useState("1");
  const [getAmount, setGetAmount] = useState(
    (79.4 * 1).toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  );

  const [giveCurrency, setGiveCurrency] = useState("USDT(trc20)");
  const [getCurrency, setGetCurrency] = useState("Альфа Банк РУБ");

  // Получение текущего курса

  const recalcFromGive = (value = giveAmount, currGive = giveCurrency, currGet = getCurrency) => {
    if (value === "") {
      setGetAmount("");
      return;
    }
    const rate = rates[currGive]?.[currGet] || 1;
    const calculated = Number(value) * rate;
    setGetAmount(
      calculated.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    );
  };

  const recalcFromGet = (value = getAmount, currGive = giveCurrency, currGet = getCurrency) => {
    if (value === "") {
      setGiveAmount("");
      return;
    }
    const rate = rates[currGive]?.[currGet] || 1;
    const calculated = Number(value.replace(/\s/g, "").replace(",", ".")) / rate;
    setGiveAmount(
      calculated.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    );
  };

  const handleGiveChange = (e) => {
    const value = e.target.value;
    setGiveAmount(value);
    recalcFromGive(value);
  };

  const handleGetChange = (e) => {
    const value = e.target.value;
    setGetAmount(value);
    recalcFromGet(value);
  };

  const handleGiveCurrencyChange = (e) => {
    const value = e.target.value;
    setGiveCurrency(value);
    recalcFromGive(giveAmount, value, getCurrency);
  };

  const handleGetCurrencyChange = (e) => {
    const value = e.target.value;
    setGetCurrency(value);
    recalcFromGive(giveAmount, giveCurrency, value);
  };

  return (
    <div className="main-container">
      <h1>
        МГНОВЕННЫЙ <span>ОБМЕН КРИПТОВАЛЮТЫ</span>
      </h1>

      <div className="exchange-main-container">
        <span>Отдаете</span>
        <div className="first-input">
          <input
            type="number"
            placeholder="1"
            value={giveAmount}
            onChange={handleGiveChange}
          />
          <select value={giveCurrency} onChange={handleGiveCurrencyChange}>
            <option value="USDT(trc20)">USDT(trc20)</option>
            <option value="Альфа Банк РУБ">Альфа Банк РУБ</option>
          </select>
        </div>

        <img src={exchange} alt="exchange" className="exchange" />

        <span>Получаете</span>
        <div className="second-input">
          <input
            type="text"
            placeholder="79,40"
            value={getAmount}
            onChange={handleGetChange}
          />
          <select value={getCurrency} onChange={handleGetCurrencyChange}>
            <option value="Альфа Банк РУБ">Альфа Банк РУБ</option>
            <option value="USDT(trc20)">USDT(trc20)</option>
          </select>
        </div>

        <button className="continue-button">ПРОДОЛЖИТЬ</button>
      </div>

      <img src={hero} alt="hero" className="hero" />
      <img src={gradient} alt="gradient" className="gradient1" />
      <img src={gradient} alt="gradient" className="gradient2" />
      <img src={gradient} alt="gradient" className="gradient3" />
    </div>
  );
}
