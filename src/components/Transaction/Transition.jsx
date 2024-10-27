import s from './Transition.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.nav}>
        <tr className={s.colum}>
          <th className={s.nameColum}>Type</th>
          <th className={s.nameColum}>Amount</th>
          <th className={s.nameColum}>Currency</th>
        </tr>
      </thead>
      {items.map((item, index) => (
        <tbody className={s.bodyTable} key={item.id}>
          <tr className={index % 2 === 1 ? s.evenRow : s.oddRow}>
            <td className={s.quantity}>{item.type}</td>
            <td className={s.quantity}>{item.amount}</td>
            <td className={s.quantity}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default TransactionHistory;
