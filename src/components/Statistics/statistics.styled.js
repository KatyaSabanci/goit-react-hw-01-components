import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 300px;
  border: 1px solid blue;
  margin: 30px auto;
  text-align: center;
  border-radius: 10px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  margin-top: 50px;
  width: 300px;
  padding-left: 0px;
  background-color: #f0f0f0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-basis: ${props => {
    return `${100 / props.$lengthList}%`;
  }};
  border: 1px solid black;
`;
