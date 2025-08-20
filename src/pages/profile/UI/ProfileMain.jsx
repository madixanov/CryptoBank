import ProfileExchange from "./ProfileExchange";
import ReferalContainer from "./ReferalContainer";
import ExchangeTable from "./ProfileTable"
import gradient from "../../../assets/photo/gradient.svg"

export default function ProfileMain() {
  return (
    <main className="profile-main">
      <div className="container">
        <ProfileExchange />
        <ReferalContainer />
        <ExchangeTable />
      </div>
      <img src={gradient} alt="gradient" className="profile-gradient pg1" />
      <img src={gradient} alt="gradient" className="profile-gradient pg2" />
      <img src={gradient} alt="gradient" className="profile-gradient pg3" />
      <img src={gradient} alt="gradient" className="profile-gradient pg4" />
    </main>
  )
}