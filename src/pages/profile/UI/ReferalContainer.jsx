import copy from "../../../assets/icons/copy.svg";

export default function ReferalContainer() {
  return (
    <div className="profile-container">
      <p style={{marginTop: "0px"}}>Ваша реферальная ссылка</p>
      <div className="referal-container">
        <span>https://www.crypto-coin-bank.com/?ref=46-12&t=J7JrTQc2ZqWAOKQp-0</span>
        <img src={copy} alt="Copy Icon" />
      </div>
      <p style={{marginTop: "0px"}}>Ваш реферальный баланс</p>
      <input type="text" style={{marginBottom: "50px"}} className="referal-input" value="350  RUB" />
      <button className="profile-button">Вывести</button>
    </div>
  )
}