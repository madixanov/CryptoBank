import logo from "../../assets/photo/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css"; 

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.querySelector("header").classList.add("scrolled");
      } else {
        document.querySelector("header").classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-cont">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="mobile-controls mobile-only">
            <div className={`burger-menu ${mobileMenuOpen && "open"}`} onClick={() => setMobileMenuOpen(prev => !prev)}>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
            </div>
          </div>
          <div className="button-row">
            <button className="main-login-button small" onClick={() => {navigate("/login")}}>ВХОД</button>
            <button className="main-login-button" onClick={() => {navigate("/signup")}}>РЕГИСТРАЦИЯ</button>
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