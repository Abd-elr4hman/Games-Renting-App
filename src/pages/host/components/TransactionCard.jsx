function TransactionCard(transaction) {
  return (
    <div className="host--income--transaction-card">
      <h3>{transaction.amount} EGP</h3>
      <p>{transaction.date}</p>
    </div>
  );
}

export default TransactionCard;
