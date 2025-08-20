export default function AgreementContainer({ click }) {
    return (
        <div className="agreement-main-container">
            <div className="agreement-container">
                <label>
                    <input type="checkbox" className="agreement-chackbox"/>
                    Я прочитал и согласен с условиями обмена с правилами AML политики и с Декларацией
                </label>
            </div>
            <div className="agreement-container">
                <label>
                    <input type="checkbox" className="agreement-chackbox"/>
                    Даю согласие на обработку моих персональных данных и принимаю условия Пользовательского соглашения
                </label>
            </div>
            <div className="agreement-container">
                <label>
                    <input type="checkbox" className="agreement-chackbox"/>
                    Не запоминать введенные данные
                </label>
            </div>
            <button className="exchange-button" onClick={click}>Продолжить</button>
        </div>
    )
}