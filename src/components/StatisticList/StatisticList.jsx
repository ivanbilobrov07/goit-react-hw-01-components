import PropTypes from 'prop-types';

import { StatisticCard } from 'components/StatistcCard/StatisticCard';
import { StatisticContainer } from './StatisticList.styled';

export const StatisticList = ({ stats }) => {
  return (
    <StatisticContainer>
      {stats.map(({ id, label, percentage }) => {
        return <StatisticCard key={id} label={label} percentage={percentage} />;
      })}
    </StatisticContainer>
  );
};

StatisticList.propTypes = {
  stats: PropTypes.array.isRequired,
};
