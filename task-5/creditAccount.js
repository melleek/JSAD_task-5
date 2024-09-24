const creditAccount = {
  owner: "Franchesko",
  balance: 0,
  creditLimit: 10000,
  apr: 0.18,

  deposit(amount) {
    console.log(
      `Пополнение на: ${amount}. Текущий баланс: ${(this.balance += amount)}`
    );
  },

  withdraw(amount) {
    if (this.balance - amount >= -this.creditLimit) {
      console.log(
        `Снято: ${amount}. Текущий баланс: ${(this.balance -= amount)}`
      );
    } else {
      console.log(`Недостаточно средств. Кредитный лимит превышен.`);
    }
  },

  applyInterest() {
    if (this.balance < 0) {
      let interest = this.balance * (this.apr / 12);
      console.log(`Начислены проценты: ${interest.toFixed(2)}. Текущий баланс: ${(this.balance += interest)}`);
    }
  },

  getBalance() {
    return this.balance;
  },

  getDebt() {
    return this.balance < 0 ? Math.abs(this.balance) : 0;
  },
};

creditAccount.deposit(1000);
creditAccount.withdraw(2000);
creditAccount.applyInterest();
console.log(creditAccount.getDebt());
