import logo from "../../assets/photo/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <div className="header-cont">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="mobile-controls mobile-only">
            <div className="burger-menu" onClick={() => setMobileMenuOpen(prev => !prev)}>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
            </div>
          </div>
          <div className="button-row">
            <button className="login-button" onClick={() => {navigate("/login")}}>ВХОД</button>
            <button className="login-button" onClick={() => {navigate("/signup")}}>РЕГИСТРАЦИЯ</button>
          </div>

          {mobileMenuOpen && (
            <div className="button-column">
              <button onClick={() => {navigate("/login")}}>ВХОД</button>
              <button onClick={() => {navigate("/signup")}}>РЕГИСТРАЦИЯ</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}