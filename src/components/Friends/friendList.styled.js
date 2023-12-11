import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 10px;
  border-radius: 5px;
  background-color: #f1f1f1;
`;

export const List = styled.ul`
  margin: auto;
  width: 300px;
  border: 1px solid blue;
  border-radius: 10px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 5px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => {
    return props.$isOnline ? 'green' : 'red';
  }};
  border-radius: 100%;
`;
