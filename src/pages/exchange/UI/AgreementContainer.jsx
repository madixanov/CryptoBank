import useBidStore from "../../../store/bid-store";

export default function AgreementContainer({ click }) {
  const { isAgree1, isAgree2, isAgree3, setField } = useBidStore();

  return (
    <div className="agreement-main-container">
      <div className="agreement-container">
        <label>
          <input
            type="checkbox"
            className="agreement-chackbox"
            checked={isAgree1}
            onChange={(e) => setField("isAgree1", e.target.checked)}
          />
          Я прочитал и согласен с условиями обмена с правилами AML политики и с Декларацией
        </label>
      </div>

      <div className="agreement-container">
        <label>
          <input
            type="checkbox"
            className="agreement-chackbox"
            checked={isAgree2}
            onChange={(e) => setField("isAgree2", e.target.checked)}
          />
          Даю согласие на обработку моих персональных данных и принимаю условия Пользовательского соглашения
        </label>
      </div>

      <div className="agreement-container">
        <label>
          <input
            type="checkbox"
            className="agreement-chackbox"
            checked={isAgree3}
            onChange={(e) => setField("isAgree3", e.target.checked)}
          />
          Не запоминать введенные данные
        </label>
      </div>

      <button className="exchange-button" onClick={click}>
        Продолжить
      </button>
    </div>
  );
}
