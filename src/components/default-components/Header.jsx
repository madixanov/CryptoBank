import logo from "../../assets/photo/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css";
import useLoginStore from "../../store/login-store";
import user from "../../assets/icons/user.svg";
import logout from "../../assets/icons/logout.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { loggedIn, login, setLoggedIn } = useLoginStore();

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

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/login");
  }

  return (
    <header>
      <div className="container">
        <div className="header-cont">
          <div className="logo-h" onClick={() => navigate("/")}>
            <img src={logo} alt="logo"/>
          </div>
          <div className="mobile-controls mobile-only">
            <div className={`burger-menu ${mobileMenuOpen && "open"}`} onClick={() => setMobileMenuOpen(prev => !prev)}>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
            </div>
          </div>
          {loggedIn ? <div className="button-row">
                        <div className="logged-in-button" onClick={() => {navigate("/my-profile")}} style={{marginRight: "60px"}}>
                          <img src={user} alt="User Icon" />
                          {login}
                        </div>
                        <div className="logged-in-button" onClick={() => {handleLogout()}}>
                          <img src={logout} alt="Logout Icon" />
                          ВЫЙТИ
                        </div>
                      </div> : 
                      <div className="button-row">
                        <button className="main-login-button small login" onClick={() => {navigate("/login")}}>ВХОД</button>
                        <button className="main-login-button login" onClick={() => {navigate("/signup")}}>РЕГИСТРАЦИЯ</button>
                      </div>}

          {mobileMenuOpen && (
                loggedIn ? (
                  <div className="button-column">
                      <div className="button-column-button" onClick={() => {navigate("/my-profile")}}>
                        <img src={user} alt="User Icon" />
                        {login}
                      </div>
                      <div className="button-column-button" onClick={() => {handleLogout()}}>
                        <img src={logout} alt="Logout Icon" />
                        ВЫЙТИ
                      </div>
                  </div>
                ) : (
                  <div className="button-column">
                      <button
                        className="button-column-button"
                        onClick={() => navigate("/login")}
                      >
                        ВХОД
                      </button>
                      <button
                        className="button-column-button"
                        onClick={() => navigate("/signup")}
                      >
                        РЕГИСТРАЦИЯ
                      </button>
                  </div>
                )
              )}
        </div>
      </div>
    </header>
  )
}