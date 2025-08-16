import logo from '../../assets/photo/logo.svg';
import tg from '../../assets/icons/tg.svg';
import './footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="upper-container">
            <img src={logo} alt="logo" className="logo" />
            <div className="schedule-container">
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
              <p onClick={() => navigate("/rules")}>FAQ</p>
              <p onClick={() => navigate("/aml")}>AML</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}