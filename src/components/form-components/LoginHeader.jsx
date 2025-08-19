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
          <div className="logo" onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
          </div>
          <div className="mobile-controls mobile-only">
            <div className={`burger-menu ${mobileMenuOpen && "open"}`} onClick={() => setMobileMenuOpen(prev => !prev)}>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
            </div>
          </div>
          <div className="button-row">
            <button className="login-button small login" onClick={() => {navigate("/login")}}>ВХОД</button>
            <button className="login-button login" onClick={() => {navigate("/signup")}}>РЕГИСТРАЦИЯ</button>
          </div>

          {mobileMenuOpen && (
            <div className="button-column">
              <button className="button-column-button" onClick={() => {navigate("/login")}}>ВХОД</button>
              <button className="button-column-button" onClick={() => {navigate("/signup")}}>РЕГИСТРАЦИЯ</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}