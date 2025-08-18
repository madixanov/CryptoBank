import ProfileExchange from "./ProfileExchange";
import ReferalContainer from "./ReferalContainer";
import ExchangeTable from "./ProfileTable"

export default function ProfileMain() {
  return (
    <main className="profile-main">
      <div className="container">
        <ProfileExchange />
        <ReferalContainer />
        <ExchangeTable />
      </div>
    </main>
  )
}