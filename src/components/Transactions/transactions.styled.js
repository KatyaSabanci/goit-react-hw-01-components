import styled from 'styled-components';

export const Table = styled.table`
  width: 300px;
  border: 1px solid blue;
  border-radius: 10px;
  margin: 30px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  justify-content: center;
  align-items: center;
`;

export const Header = styled.th`
  background-color: lightblue;
  height: 30px;
`;
