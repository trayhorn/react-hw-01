import PropTypes from 'prop-types';

import { Container, Head, ColumnName, TableBody, Item } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Container>
      <Head>
        <tr>
          <ColumnName>Type</ColumnName>
          <ColumnName>Amount</ColumnName>
          <ColumnName>Currency</ColumnName>
        </tr>
      </Head>

      <TableBody>
        {items.map(item => (
          <tr key={item.id}>
            <Item>{item.type}</Item>
            <Item>{item.amount}</Item>
            <Item>{item.currency}</Item>
          </tr>
        ))}
      </TableBody>
    </Container>
  )
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}