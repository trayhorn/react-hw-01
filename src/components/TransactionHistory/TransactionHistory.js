import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function TransactionHistory({items}) {
  return (
    <table className={s.history}>
      <thead className={s.head}>
        <tr>
          <th className={s.header}>Type</th>
          <th className={s.header}>Amount</th>
          <th className={s.header}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={s.item}>{item.type}</td>
            <td className={s.item}>{item.amount}</td>
            <td className={s.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

