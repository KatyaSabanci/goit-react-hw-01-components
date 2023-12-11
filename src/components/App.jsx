import React from 'react';

import Profile from 'components/Profile/Profile';
import user from '../data/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from '../data/data.json';
import FriendList from 'components/Friends/FriendsList';
import friends from '../data/friends.json';
import TransactionHistory from 'components/Transactions/Transactions';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
