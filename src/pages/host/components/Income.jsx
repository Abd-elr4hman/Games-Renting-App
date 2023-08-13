import TransactionCard from "./transactionCard";
import { getHostTransactions } from "../../../../api";
import { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useOutletContext } from "react-router-dom";

function Income() {
  // const [transactions, setTransactions] = useState([]);
  // const { user } = UserAuth();

  // useEffect(() => {
  //   try {
  //     getHostTransactions(user).then((transactions) =>
  //       setTransactions(transactions)
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const [reviews, transactions] = useOutletContext();

  var amountSum = 0;
  transactions.map((transaction) => {
    amountSum = amountSum + transaction.amount;
  });

  const transactionList = transactions.map((transaction) => (
    <TransactionCard
      key={transaction.id}
      amount={transaction.amount}
      date={transaction.datetime.toDate().toDateString()}
    />
  ));

  return (
    <div className="host--income-container">
      <h2 className="host--income-header">Income</h2>
      <p>Your all time income.</p>
      <h1 className="host--income-income">
        {amountSum ? amountSum + " EGP" : "Loading"}
      </h1>
      <div className="host--income--transactions">
        <h2>Your transactions</h2>
        {transactionList}
        {/* <TransactionCard amount="$515" date="1/12/22" /> */}
      </div>
    </div>
  );
}

export default Income;
