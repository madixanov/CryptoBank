import "../login/login.css";
import LoginHeader from "../../components/form-components/LoginHeader";
import RegisterMain from "./UI/RegisterMain";

export default function RegisterPage() {
  return (
    <div className="login-page">
      <LoginHeader />
      <RegisterMain />
    </div>
  )
}