import PropTypes from 'prop-types';

import { Card } from './StatisticCard.styled';
import { generateRandomColor } from 'utils';

export const StatisticCard = ({ label, percentage }) => {
  return (
    <Card color={generateRandomColor()}>
      <span className="label">{label}</span>
      <span className="percentage"> {percentage}%</span>
    </Card>
  );
};

StatisticCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
