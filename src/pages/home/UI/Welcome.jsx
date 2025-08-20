import hero from "../../../assets/photo/hero_dark.svg";
import hero_gray2 from "../../../assets/photo/hero_gray2.svg";
import exchange from "../../../assets/icons/exchange.svg";
import gradient from "../../../assets/photo/gradient.svg";
import useExchangeStore from "../../../store/exchange-store";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../../../components/default-components/CustomDropdown";
import useBidStore from "../../../store/bid-store";

export default function Welcome() {
  const {
    giveCurrency,
    getCurrency,
    giveAmount,
    getAmount,
    setGiveCurrency,
    setGetCurrency,
    setGiveAmount,
    setGetAmount,
  } = useExchangeStore();

  const { resetBidStore } = useBidStore();

  const navigate = useNavigate();

  const handleClick = () => {
    resetBidStore();
    navigate("/exchange"); // тут данные уже в zustand
  };

  const options = [
  { label: "USDT (TRC20)", value: "USDT" },
  { label: "Альфа банк RUB", value: "RUB" },
];

  const handleSwap = () => {
    const prevGiveCurrency = giveCurrency;
    const prevGiveAmount = giveAmount;

    setGiveCurrency(getCurrency);
    setGetCurrency(prevGiveCurrency);

    setGiveAmount(getAmount);
    setGetAmount(prevGiveAmount);
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
            value={giveAmount || 1}  // если 0, показываем 1
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value <= 0 || isNaN(value)) {
                setGiveAmount(1); // если 0, отрицательное или пустое → ставим 1
              } else {
                setGiveAmount(value);
              }
            }}
          />
          <CustomDropdown
            options={options}
            value={giveCurrency}            // "USDT" или "RUB"
            onChange={(val) => setGiveCurrency(val)}
            classDrop={"home"}
            classSelected={"home-selected"}
          />
        </div>

        <img src={exchange} alt="exchange" className="exchange" onClick={handleSwap}/>

        <span>Получаете</span>
        <div className="second-input">
          <input
            type="text"
            placeholder="81.0"
            value={getAmount || 1}
            onChange={(e) => {
              const value = Number(e.target.value);
              setGetAmount(value > 0 ? value : 1);
            }}
          />
          <CustomDropdown
            options={options}
            value={getCurrency}
            onChange={(val) => setGetCurrency(val)}
            classDrop={"home"}
            classSelected={"home-selected"}
          />
        </div>

        <button className="continue-button" onClick={handleClick}>
          ПРОДОЛЖИТЬ
        </button>
      </div>

      <img src={hero} alt="hero" className="hero" />
      <img src={hero_gray2} alt="hero" className="hero-gray" />
      <img src={gradient} alt="gradient" className="gradient1" />
      <img src={gradient} alt="gradient" className="gradient2" />
      <img src={gradient} alt="gradient" className="gradient3" />
    </div>
  );
}
