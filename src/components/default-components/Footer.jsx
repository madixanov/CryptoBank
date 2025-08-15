import logo from '../../assets/photo/logo.svg';
import tg from '../../assets/icons/tg.svg';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="upper-container">
            <img src={logo} alt="logo" className="logo" />
            <div className="schedule">
              <div className="tg-cont">
                <img src={tg} alt="Telegram" />
                <span>Telegram</span>
              </div>
              <div className="schedule">
                <p>Пн. — Пт. с 10:30 до 21:00 по Мск.</p>
                <p>Сб. — Вск. с 11:00 до 21:00 по Мск.</p>
              </div>
            </div>
          </div>
          <div className="lower-container">
            <p className='license-text'>2023-2025 - сервис обмена электронных валют.<br /> Все права защищены.</p>
            <div className="links-container">
              <p>FAQ</p>
              <p>AML</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}