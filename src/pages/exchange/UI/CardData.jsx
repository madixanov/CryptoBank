import { useState } from "react";
import useBidStore from "../../../store/bid-store";

export default function CardData() {
  const { setField } = useBidStore();

  const [phone, setPhone] = useState("+7");
  const [cardNumber, setCardNumber] = useState("");

  // Обработка телефона
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Убираем всё, кроме цифр
    value = value.replace(/\D/g, "");

    // Гарантируем, что начинается с "7"
    if (!value.startsWith("7")) {
      value = "7" + value;
    }

    // Ограничиваем 11 цифрами
    value = value.slice(0, 11);

    // Форматируем для отображения
    const formattedPhone = "+" + value;
    setPhone(formattedPhone);

    // Сохраняем уже нормализованное значение в Zustand
    setField("cardPhone", formattedPhone);
  };

  // Обработка номера карты
  const handleCardChange = (e) => {
    let value = e.target.value;

    // Убираем всё, кроме цифр
    value = value.replace(/\D/g, "");

    // Ограничиваем 16 цифрами
    value = value.slice(0, 16);

    // Вставляем пробелы каждые 4 цифры
    const formattedCard = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formattedCard);

    // В Zustand сохраняем "чистый" номер карты
    setField("card", value);
  };

  // Обработка имени владельца карты
  const handleCardFullNameChange = (e) => {
    setField("cardFullName", e.target.value);
  };

  return (
    <>
      <span>На карту*:</span>
      <input
        type="text"
        className="number-to-exchange"
        placeholder="1234 5678 9012 3456"
        maxLength={19}
        value={cardNumber}
        onChange={handleCardChange}
      />

      <span>Номер телефона, привязанный к банку (СБП)*:</span>
      <input
        type="tel"
        className="number-to-exchange"
        value={phone}
        placeholder="+7"
        onChange={handlePhoneChange}
      />

      <span>Имя получателя — как на карте *:</span>
      <input
        type="text"
        placeholder="Иван И."
        className="number-to-exchange"
        onChange={handleCardFullNameChange}
      />
    </>
  );
}
