import { useState, useEffect, useRef } from "react";
import useExchangeStore from "../../../store/exchange-store";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CustomDropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Закрывать при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown-selected" onClick={() => setOpen(!open)}>
        {value}
        <ChevronDown
          size={20}
          className={`chevron ${open ? "rotate" : ""}`}
        />
      </div>
      {open && (
        <ul className="dropdown-list">
          {options.map((opt) => (
            <li
              key={opt}
              className="dropdown-item"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ProfileExchange() {
  const navigate = useNavigate();

  const {
    giveCurrency,
    getCurrency,
    setGetCurrency,
    setGiveCurrency,
    giveAmount,
    setGiveAmount,
    getAmount,
    setGetAmount
  } = useExchangeStore();

  const [phone, setPhone] = useState("+7");
        const handlePhoneChange = (e) => {
          let value = e.target.value;
      
          // убираем всё кроме цифр
          value = value.replace(/\D/g, "");
      
          // гарантируем что всегда начинается с "7"
          if (!value.startsWith("7")) {
            value = "7" + value;
          }
      
          // ограничиваем до 11 цифр (+7 и ещё 10 цифр)
          value = value.slice(0, 11);
      
          // собираем обратно с плюсом
          setPhone("+" + value);
        };

  return (
    <div className="profile-exchange">
      <div className="profile-exchange-container">
        <p>Отдаете</p>
        <div className="referal-container">
          <input type="number" value={giveAmount} min="0" onChange={(e) => setGiveAmount(Number(e.target.value))}/>
          <CustomDropdown
            options={["USDT", "Альфа Банк RUB"]}
            value={giveCurrency}
            onChange={(val) => setGiveCurrency(val)}
          />
        </div>
        <p>Получаете</p>
        <div className="referal-container">
          <input type="number" value={getAmount} min="0" onChange={(e) => setGetAmount(Number(e.target.value))} />
          <CustomDropdown
            options={["USDT", "Альфа Банк RUB"]}
            value={getCurrency}
            onChange={(val) => setGetCurrency(val)}
          />
        </div>
        <button className="profile-button" onClick={() => navigate("/exchange")}>Продолжить</button>
      </div>
      <div className="profile-data-container">
        <span>Номер телефона*:</span>
        <input type="tel" className="number-to-exchange" placeholder="+7" onChange={handlePhoneChange} value={phone}/>
        <span>E-mail*:</span>
        <input type="email" className="number-to-exchange"/>
        <span>Telegram*:</span>
        <input type="text" className="number-to-exchange" />
        <button className="profile-button">Сохранить</button>
      </div>
    </div>
  )
}