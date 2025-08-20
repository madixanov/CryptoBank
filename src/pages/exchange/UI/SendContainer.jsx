import usdt from "../../../assets/icons/usdt.svg";
import abrub from "../../../assets/icons/abrub.svg";
import useExchangeStore from "../../../store/exchange-store";
import useBidStore from "../../../store/bid-store";
import CustomDropdown from "../../../components/default-components/CustomDropdown";
import { useEffect } from "react";

export default function SendContainer() {
  const {
    giveCurrency,
    getCurrency,
    giveAmount,
    rates,
    setGiveCurrency,
    setGiveAmount,
  } = useExchangeStore();

  const { setGiveBidCurrency, setGetBidAmount } = useBidStore();

  const currencyIcons = {
    USDT: usdt,
    RUB: abrub,
  };

  const options = [
    { label: "Tether TRC20 USDT", value: "USDT" },
    { label: "Альфа Банк RUB", value: "RUB" },
  ];

  // курс валют
  const rate = rates[giveCurrency]?.[getCurrency] || 1;

  // Сразу выставляем значение 1 при первой загрузке
  useEffect(() => {
    if (!giveAmount || giveAmount <= 0) {
      setGiveAmount(1);
      setGetBidAmount(1);
    }
  }, [giveAmount, setGiveAmount, setGetBidAmount]);

  // Сохраняем валюту в bid-store
  useEffect(() => {
    setGiveBidCurrency(giveCurrency);
  }, [giveCurrency, setGiveBidCurrency]);

  const handleCurrencyChange = (val) => {
    setGiveCurrency(val);
    setGiveBidCurrency(val);
  };

  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    const finalValue = value <= 0 || isNaN(value) ? 1 : value;

    setGiveAmount(finalValue);
    setGetBidAmount(finalValue);
  };

  return (
    <div className="send-container">
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
          <CustomDropdown
            options={options}
            value={giveCurrency}
            onChange={handleCurrencyChange}
            classSelected={"exchange-selected"}
          />
        </div>

        <span className="limits">
          min.: {giveCurrency === "USDT" ? "493.82 USDT" : "40000.00 RUB"} <br />
          max.: {giveCurrency === "USDT" ? "2222.82 USDT" : "180048.59 RUB"}
        </span>

        <span>Сумма *:</span>
        <input
          type="number"
          className="number-to-exchange"
          value={giveAmount}
          min="0"
          onChange={handleAmountChange}
        />
      </div>
    </div>
  );
}
