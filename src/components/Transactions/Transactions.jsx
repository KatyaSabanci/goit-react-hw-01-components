import React from 'react';
import { Table, Header } from './transactions.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thread>
        <tr>
          <Header>Type</Header>
          <Header>Amount</Header>
          <Header>Currency</Header>
        </tr>
      </thread>
      <tbody>
        {transactions.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
