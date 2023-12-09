import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 20px;
  border-radius: 5px;
  background-color: #f1f1f1;
`;

export const List = styled.ul`
  margin: 30px auto;
  width: 250px;
  border: 1px solid blue;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Status = styled.span`
width: 24px; 
height: 24px; 
background-color: $(props => {
    return props.isOnline  ? 'green' : 'red'}
};
border-radius: solid 5 px blue; 
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 5px;
`;
