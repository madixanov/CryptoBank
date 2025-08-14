import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}