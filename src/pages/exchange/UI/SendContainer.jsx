import usdt from "../../../assets/icons/usdt.svg";
import abrub from "../../../assets/icons/abrub.svg";
import useExchangeStore from "../../../store/exchange-store";

export default function SendContainer() {
    const {
    giveCurrency,
    getCurrency,
    giveAmount,
    rates,
    setGiveCurrency,
    setGiveAmount,
  } = useExchangeStore();

  const currencyIcons = {
    USDT: usdt,
    RUB: abrub,
  };

  const rate = rates[giveCurrency]?.[getCurrency] || 1;

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
                    <select
                      onChange={(e) => setGiveCurrency(e.target.value)}
                      className="currency-selector"
                      value={giveCurrency}
                    >
                      <option value="USDT">Tether TRC20 USDT</option>
                      <option value="RUB">Альфа Банк RUB</option>
                    </select>
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
                    onChange={(e) => setGiveAmount(e.target.value)}
                  />
                </div>
        </div>
    )
}