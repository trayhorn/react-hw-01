import PropTypes from 'prop-types';
import { Section, Title, List, Item} from './Statistics.styled';

export default function Statistics({title, stats}) {

  return (
    <Section>
      <Title>{title}</Title>

      <List>
        <Item>
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}%</span>
        </Item>
        <Item>
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}%</span>
        </Item>
        <Item>
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}%</span>
        </Item>
        <Item>
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}%</span>
        </Item>
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