import { useState, useEffect } from "react";
import stars from "../../../assets/icons/stars.svg";
import avatar from "../../../assets/icons/avatar.svg";
import gradient from "../../../assets/photo/gradient.svg";

export default function Ratings() {
  const feedbacks = [
    { name: "ДМИТРИЙ", text: "Отличный сервис. Переводы проходят быстро, и безопасность на высшем уровне." },
    { name: "КАМИЛЛА", text: "Очень удобный личный кабинет, все интуитивно и без лишних шагов. Спасибо вам!" },
    { name: "РОМАН", text: "Транзакции проходят за пару минут, ни разу не было проблем." },
    { name: "СЕРГЕЙ", text: "Сервис порадовал скоростью и удобством. Буду пользоваться снова!" },
    { name: "АННА", text: "Всё понятно, быстро и безопасно. Спасибо за вашу работу!" },
  ];

  const [items, setItems] = useState(feedbacks);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setItems((prev) => {
          const newArr = [...prev];
          const first = newArr.shift();
          newArr.push(first);
          return newArr;
        });
        setIsAnimating(false);
        setActiveIndex((prev) => (prev + 1) % feedbacks.length);
      }, 500);
    }, 5000); // ⏳ увеличили до 5 секунд

    return () => clearInterval(interval);
  }, []);

  // Количество "страниц" = общее кол-во элементов - 2 (так как показываем по 3)
  const totalDots = feedbacks.length;

  return (
    <div className="ratings-container" style={{ overflow: "hidden", textAlign: "center" }}>
      <h1>ОТЗЫВЫ</h1>
      <div
        className="r-container-grid"
        style={{
          display: "flex",
          transition: isAnimating ? "transform 0.5s ease" : "none",
          transform: isAnimating ? "translateX(-33.3333%)" : "translateX(0)",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="feedback-container"
            style={{
              flex: "0 0 33.3333%",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <img src={avatar} alt="avatar" />
            <p className="name">{item.name}</p>
            <img src={stars} alt="stars" />
            <p className="comment">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Навигация-точки */}
      <div style={{ marginTop: "15px", display: "flex", justifyContent: "center", gap: "8px" }}>
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: i === activeIndex ? "#33E1F9" : "#1E8593",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
      <img src={gradient} alt="gradient" className="gradient4" />
    </div>
  );
}
