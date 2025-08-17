import { useState } from "react";

export default function PersonalData() {
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
        <div className="personal-data">
            <h1>Персональные данные</h1>
            <span>Ф.И.О. совершающего обмен*:</span>
            <input type="text" className="number-to-exchange" />
            <span>Номер телефона*:</span>
            <input type="tel" className="number-to-exchange" placeholder="+7" onChange={handlePhoneChange} value={phone}/>
            <span>E-mail*:</span>
            <input type="email" className="number-to-exchange"/>
            <span>Telegram*:</span>
            <input type="text" className="number-to-exchange" />
            <span>Скидочный купон:</span>
            <input type="text" className="number-to-exchange" />
        </div>
    )
}