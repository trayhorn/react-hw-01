import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

export default function TransactionHistory({items}) {
  return (
    <table className={styles.history}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.header}>Type</th>
          <th className={styles.header}>Amount</th>
          <th className={styles.header}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={styles.item}>{item.type}</td>
            <td className={styles.item}>{item.amount}</td>
            <td className={styles.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

