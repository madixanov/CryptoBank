import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import ResetPage from "./pages/reset/Reset";
import RegisterPage from "./pages/registration/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* При заходе на / — сразу редирект на /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPage />} />
      </Routes>
    </BrowserRouter>
  );
}
