import React from 'react';

import {
  StatisticsList,
  StatisticsWrapper,
  StatisticsItem,
} from './statistics.styled';

const Statistics = ({ title, data }) => {
  return (
    <StatisticsWrapper>
      {title && <h2>{title}</h2>}
      <StatisticsList>
        {data.map(item => {
          return (
            <StatisticsItem $lengthList={data.length} key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsWrapper>
  );
};

export default Statistics;
