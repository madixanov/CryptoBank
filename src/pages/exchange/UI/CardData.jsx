import { useState } from "react";

export default function CardData() {
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


  return (
    <>
      <span>На карту*:</span>
      <input type="text" className="number-to-exchange" placeholder="1234 5678 9012 3456" maxLength={19} value={cardNumber} onChange={handleCardChange}  />
      <span>Номер телефона, привязанный к банку (СБП)*:</span>
      <input type="tel" className="number-to-exchange" value={phone} placeholder="+7" onChange={handlePhoneChange}/>
      <span>Имя получателя — как на карте *:</span>
      <input type="text" placeholder="Иван И." className="number-to-exchange" />
    </>
  )
}