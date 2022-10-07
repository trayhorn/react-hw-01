import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({title, stats}) {

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}%</span>
        </li>
        <li className={styles.item}>
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}%</span>
        </li>
        <li className={styles.item}>
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}%</span>
        </li>
        <li className={styles.item}>
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape
  )
}