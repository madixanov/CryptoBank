import usdt from "../../../assets/icons/usdt.svg";
import abrub from "../../../assets/icons/abrub.svg";
import useExchangeStore from "../../../store/exchange-store";
import { useState } from "react";
import CustomDropdown from "../../../components/default-components/CustomDropdown";

export default function GetContainer() {
    const {
        giveCurrency,
        getCurrency,
        getAmount,
        setGetCurrency,
        setGetAmount,
      } = useExchangeStore();
    
      const currencyIcons = {
        USDT: usdt,
        RUB: abrub,
      };

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
      
        
      
        const [cardNumber, setCardNumber] = useState("");
      
        const handleCardChange = (e) => {
          let value = e.target.value;
      
          // убираем всё кроме цифр
          value = value.replace(/\D/g, "");
      
          // ограничиваем 16 цифрами
          value = value.slice(0, 16);
      
          // вставляем пробелы каждые 4 цифры
          value = value.replace(/(.{4})/g, "$1 ").trim();
      
          setCardNumber(value);
        };

    const options = [
      { label: "Tether TRC20 USDT", value: "USDT" },
      { label: "Альфа Банк RUB", value: "RUB" },
    ];

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
                      onChange={(val) => setGetCurrency(val)}
                      classSelected={"exchange-selected"}
                    />
                    </div>
                    <span className="limits">
                    min.: {giveCurrency === "USDT" ? "40000.00 RUB" : "493.82 USDT"} <br />
                    max.: {giveCurrency === "USDT" ? "180048.59 RUB" : "2222.82 USDT"}
                    </span>
                    <span>Сумма *:</span>
                    <input type="number" className="number-to-exchange" min="0" value={getAmount} onChange={(e) => setGetAmount(e.target.value)} />
                    <span>На карту*:</span>
                    <input type="text" className="number-to-exchange" placeholder="1234 5678 9012 3456" maxLength={19} value={cardNumber} onChange={handleCardChange}  />
                    <span>Номер телефона, привязанный к банку (СБП)*:</span>
                    <input type="tel" className="number-to-exchange" value={phone} placeholder="+7" onChange={handlePhoneChange}/>
                    <span>Имя получателя — как на карте *:</span>
                    <input type="text" placeholder="Иван И." className="number-to-exchange" />
                </div>
        </div>
    )
}