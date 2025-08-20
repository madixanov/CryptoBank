import { useState } from "react";
import useBidStore from "../../../store/bid-store";

export default function PersonalData() {
  const { setField } = useBidStore();

  const [phone, setPhone] = useState("+7");

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Убираем всё, кроме цифр
    value = value.replace(/\D/g, "");

    // Гарантируем, что всегда начинается с "7"
    if (!value.startsWith("7")) {
      value = "7" + value;
    }

    // Ограничиваем до 11 цифр (+7 и ещё 10 цифр)
    value = value.slice(0, 11);

    // Обновляем локальный стейт
    setPhone("+" + value);

    // Сохраняем в zustand
    setField("phoneNumber", e.target.value);
  };

  return (
    <div className="personal-data">
      <h1>Персональные данные</h1>

      <span>Ф.И.О. совершающего обмен*:</span>
      <input
        type="text"
        className="number-to-exchange"
        onChange={(e) => setField("fullName", e.target.value)}
      />

      <span>Номер телефона*:</span>
      <input
        type="tel"
        className="number-to-exchange"
        placeholder="+7"
        onChange={handlePhoneChange}
        value={phone}
      />

      <span>E-mail*:</span>
      <input
        type="email"
        className="number-to-exchange"
        onChange={(e) => setField("email", e.target.value)}
      />

      <span>Telegram*:</span>
      <input
        type="text"
        className="number-to-exchange"
        onChange={(e) => setField("telegram", e.target.value)}
      />

      <span>Скидочный купон:</span>
      <input
        type="text"
        className="number-to-exchange"
        onChange={(e) => setField("discount", e.target.value)}
      />
    </div>
  );
}
