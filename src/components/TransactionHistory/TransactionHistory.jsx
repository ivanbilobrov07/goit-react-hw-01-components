import PropTypes from 'prop-types';

import { TransactionTable } from './TransactionHistory.styled';
import { TransactiomItem } from 'components/TransactiomItem/TransactiomItem';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ amount, type, currency, id }) => (
          <TransactiomItem
            key={id}
            amount={amount}
            type={type}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
