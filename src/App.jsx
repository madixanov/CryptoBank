import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "./pages/login/Login";
import ResetPage from "./pages/reset/Reset";
import RegisterPage from "./pages/registration/Register";
import HomePage from "./pages/home/Home";
import AmlPage from "./pages/aml/Aml";
import RulesPage from "./pages/rules/Rules";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const authPaths = ["/login", "/signup", "/reset-password"];
    if (authPaths.includes(location.pathname)) {
      document.body.classList.add("auth-page");
    } else {
      document.body.classList.remove("auth-page");
    }
    window.scrollTo(0, 0)
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/reset-password" element={<ResetPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/aml" element={<AmlPage />} />
      <Route path="/rules" element={<RulesPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
