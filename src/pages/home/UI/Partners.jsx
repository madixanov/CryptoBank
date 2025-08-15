import partner1 from "../../../assets/icons/partner1.svg";
import partner2 from "../../../assets/icons/partner2.svg";

export default function Partners() {
  const logos = [partner1, partner2, partner1, partner2, partner1, partner2, partner1, partner2, partner1, partner2, partner1, partner2]; // любой набор

  return (
    <div className="partners-container">
      <h1>ПАРТНЕРЫ</h1>

      {/* Первый ряд — влево */}
      <div className="marquee marquee-left">
        <div className="marquee-track">
          {logos.map((src, i) => (
            <img key={`top-${i}`} src={src} alt="" />
          ))}
          {logos.map((src, i) => (
            <img key={`top-dup-${i}`} src={src} alt="" />
          ))}
        </div>
      </div>

      {/* Второй ряд — вправо */}
      <div className="marquee marquee-right">
        <div className="marquee-track">
          {logos.map((src, i) => (
            <img key={`bottom-${i}`} src={src} alt="" />
          ))}
          {logos.map((src, i) => (
            <img key={`bottom-dup-${i}`} src={src} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
