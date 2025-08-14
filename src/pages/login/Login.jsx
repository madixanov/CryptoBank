import "./login.css";
import LoginHeader from "./UI/LoginHeader";
import LoginMain from "./UI/LoginMain";

export default function LoginPage() {
  return (
    <div className="login-page">
      <LoginHeader />
      <LoginMain />
    </div>
  )
}