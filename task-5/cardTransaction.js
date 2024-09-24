const cardTransaction = {
  amount: 0,
  transactionType: "purchase",
  transactionStatus: "pending",

  updateTransaction(amount, type, status) {
    this.amount = amount > 0 ? amount : 0;
    this.transactionType = type;
    this.transactionStatus = status;
  },

  resetTransaction() {
    this.amount = 0;
    this.transactionType = "purchase";
    this.transactionStatus = "pending";
  },

  getTotal(balance) {
    if (this.status !== "completed") return balance;
    return this.type === "purchase"
      ? balance - this.amount
      : balance + this.amount;
  },

  displayTransaction() {
    if (this.transactionStatus === "pending") {
      console.log("Транзакция не была выполнена.");
    } else {
      console.log(`Транзакция: 
        Сумма: ${this.amount} 
        Тип: ${this.transactionType} 
        Статус: ${this.transactionStatus}`);
    }
  },
};

let currentBalance = 500;
cardTransaction.updateTransaction(100, "purchase", "completed");
cardTransaction.displayTransaction();

currentBalance = cardTransaction.getTotal(currentBalance);

console.log(`Новый баланс: $${currentBalance}`);

cardTransaction.resetTransaction();
cardTransaction.displayTransaction();
