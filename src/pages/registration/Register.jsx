import "./register.css";
import RegisterHeader from "./UI/RegisterHeader";
import RegisterMain from "./UI/RegisterMain";

export default function RegisterPage() {
  return (
    <div className="login-page">
      <RegisterHeader />
      <RegisterMain />
    </div>
  )
}