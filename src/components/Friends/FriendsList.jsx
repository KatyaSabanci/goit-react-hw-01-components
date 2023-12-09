import React from 'react';

import FriendListItem from './FriendListItem';
import { List } from './friendList.styled';
const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        );
      })}
    </List>
  );
};

export default FriendList;
