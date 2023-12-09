import styled from 'styled-components';

export const UserProfile = styled.div`
display: flex;
flex - direction: column; 
align - items: center; 
width: 360px; 
border: solid 1px blue; 
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 15px;
`;

export const UserName = styled.p`
  font-weight: 800;
  font-size: 26px;
  margin-top: 30px;
`;

export const InfoList = styled.ul`
  display: flex;
  width: 100%;
`;

export const InfoItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  height: 45px;
  border: 1px solid blue;
`;
