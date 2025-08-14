import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import ResetPage from "./pages/reset/Reset";
import RegisterPage from "./pages/registration/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPage />} />
      </Routes>
    </BrowserRouter>
  )
}