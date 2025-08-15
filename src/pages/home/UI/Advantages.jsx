import comfy from "../../../assets/icons/comfy.svg";
import safety from "../../../assets/icons/safety.svg";
import fast from "../../../assets/icons/fast.svg";
import hero from "../../../assets/photo/hero_gray.svg";
import gradient from "../../../assets/photo/gradient.svg";

export default function Advantages() {
  return (
    <div className="advantages-container">
      <h1>ПРЕИМУЩЕСТВА ИСПОЛЬЗОВАНИИЯ</h1>
      <div className="a-container-grid">
        <div className="comfy">
          <img src={comfy} alt="comfy" />
          <p>УДОБНЫЙ ЛИЧНЫЙ КАБИНЕТ</p>
        </div>
        <div className="safety">
          <img src={safety} alt="safety" />
          <p>БЕЗОПАСНЫЕ ПЕРЕВОДЫ</p>
        </div>
        <div className="fast">
          <img src={fast} alt="fast" />
          <p>ВЫСОКАЯ СКОРОСТЬ ТРАНЗАКЦИЙ</p>
        </div>
      </div>
      <img src={hero} alt="hero-gray" className="a-hero"/>
      <img src={gradient} alt="gradient" className="gradient5"/>
      <img src={gradient} alt="gradient" className="gradient6"/>
    </div>
  )
}