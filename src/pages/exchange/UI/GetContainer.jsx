import usdt from "../../../assets/icons/usdt.svg";
import abrub from "../../../assets/icons/abrub.svg";
import useExchangeStore from "../../../store/exchange-store";
import useBidStore from "../../../store/bid-store";
import CustomDropdown from "../../../components/default-components/CustomDropdown";

export default function GetContainer() {
  const {
    giveCurrency,
    getCurrency,
    getAmount,
    setGetCurrency,
    setGetAmount,
  } = useExchangeStore();

  const { setGetBidCurrency } = useBidStore();

  const currencyIcons = {
    USDT: usdt,
    RUB: abrub,
  };

  const options = [
    { label: "Tether TRC20 USDT", value: "USDT" },
    { label: "Альфа Банк RUB", value: "RUB" },
  ];

  const handleCurrencyChange = (val) => {
    setGetCurrency(val);      // обновляем exchange-store
    setGetBidCurrency(val);   // обновляем bid-store
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value < 0) return;    // защита от отрицательных значений
    setGetAmount(value);
           // обновляем exchange-store
  };

  return (
    <div className="get-main-container">
      <h1>Получаете</h1>
      <div className="get-container">
        <div className="currency-selector-container">
          <img
            src={currencyIcons[getCurrency]}
            alt={getCurrency}
            style={{ marginRight: "10px", width: "50px" }}
          />
          <CustomDropdown
            options={options}
            value={getCurrency}
            onChange={handleCurrencyChange}
            classSelected={"exchange-selected"}
          />
        </div>

        <span className="limits">
          min.: {giveCurrency === "USDT" ? "40000.00 RUB" : "493.82 USDT"} <br />
          max.: {giveCurrency === "USDT" ? "180048.59 RUB" : "2222.82 USDT"}
        </span>

        <span>Сумма *:</span>
        <input
          type="number"
          className="number-to-exchange"
          min="0"
          value={getAmount}
          onChange={handleAmountChange}
        />
      </div>
    </div>
  );
}
