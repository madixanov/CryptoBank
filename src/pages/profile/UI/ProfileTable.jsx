import { Link } from "react-router-dom";

export default function ExchangeTable() {
  const data = [
    { id: 1505, direction: "Альфа-банк RUB-USDT TRC20", amount: "1 TRC20" },
    { id: 1740, direction: "Альфа-банк RUB-USDT TRC20", amount: "5 TRC20" },
    { id: 2019, direction: "Альфа-банк RUB-USDT TRC20", amount: "10 TRC20" },
  ];

  return (
    <div className="exchange-table">
      <p className="title">Ваши обмены</p>

      <div className="table-wrapper">
        <table className="desktop-table">
          <thead>
            <tr>
              <th style={{borderRight: "1px solid rgba(255,255,255, 0.2)", width: "25%", textAlign: "center"}}>Номер заявки</th>
              <th style={{borderRight: "1px solid rgba(255,255,255, 0.2)", width: "50%", textAlign: "center"}}>Направление обмена</th>
              <th style={{width: "25%", textAlign: "center"}}>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td style={{ textAlign: "center", borderRight: "1px solid rgba(255,255,255, 0.2)" }}>
                  <Link to={`/status/${row.id}`} style={{ color: "white", textDecoration: "none" }}>
                    {row.id}
                  </Link>
                </td>
                <td style={{ textAlign: "center", borderRight: "1px solid rgba(255,255,255, 0.2" }}>
                  <Link to={`/status/${row.id}`} style={{ color: "white", textDecoration: "none" }}>
                    {row.direction}
                  </Link>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Link to={`/status/${row.id}`} style={{ color: "white", textDecoration: "none" }}>
                    {row.amount}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mobile-cards">
          {data.map((row) => (
            <Link to={`/status/${row.id}`} style={{color: "white", textDecoration: "none"}} key={row.id}>
              <div className="card">
                <p><span>Номер заявки</span> {row.id}</p>
                <p><span>Направление обмена</span><br />{row.direction}</p>
                <p><span>Сумма</span> {row.amount}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
