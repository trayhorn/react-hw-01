import PropTypes from 'prop-types';
import { Section, Title, List, Item} from './Statistics.styled';

const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED'];

export default function Statistics({ title, stats }) {

  return (
    <Section>
      <Title>{title}</Title>
      <List>
        {stats.map(({id, label, percentage}, index) => {
          return (
            <Item 
              style={{ background: colors[index] }}
              key={id}
            >
              <span>{label}</span>
              <span>{percentage} %</span>
            </Item>
          )
        })}
      </List>
    </Section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape
  )
}