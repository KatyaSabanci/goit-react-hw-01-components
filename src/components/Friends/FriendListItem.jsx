import React from 'react';
import { ListItem, Status, Avatar} from './friendList.styled';
const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <ListItem>
      <Status $isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} />
      <p>{name}</p>
    </ListItem>
  );
};

export default FriendListItem;
