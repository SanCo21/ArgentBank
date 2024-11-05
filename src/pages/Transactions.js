import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import InputWrapper from "../components/InputWrapper";
// import Account from "../components/Account";

const Transactions = () => {
  //   const { accountId } = useParams();
  //   const [account, setAccount] = useState(null);
  //   const [transactions, setTransactions] = useState([]);
  const [account] = useState(null);
  const [transactions] = useState([]);

  //   useEffect(() => {
  //     const fetchAccountDetails = async () => {
  //       try {
  //         // Add the URL of API here when it's ready
  //         const response = await axios.get(
  //           `http://localhost:3001/api/v1/accounts/${accountId}`
  //         );
  //         setAccount(response.data);
  //       } catch (error) {
  //         console.error("Error fetching account details:", error);
  //       }
  //     };
  //     const fetchTransactions = async () => {
  //       try {
  //         // Add the URL of API here when it's ready
  //         const response = await axios.get(
  //           `http://localhost:3001/api/v1/accounts/${accountId}/transactions`
  //         );
  //         setTransactions(response.data);
  //       } catch (error) {
  //         console.error("Error fetching transactions:", error);
  //       }
  //     };
  //     fetchAccountDetails();
  //     fetchTransactions();
  //   }, [accountId]);

  return (
    <div>
      <div>
        {account ? (
          <div>
            <h1>Transactions for Account {account.title}</h1>
            <p>Account Balance: {account.amount}</p>
            <p>Account Description: {account.description}</p>
          </div>
        ) : (
          <p>Loading account details...</p>
        )}
        <h2>Transactions</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {new Date(transaction.date).toLocaleDateString()} - Description{" "}
              {transaction.description} - Amount {transaction.amount} - Balance{" "}
              {transaction.balance}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
