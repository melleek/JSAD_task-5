const account = {
  owner: "Farishta",
  balance: 1000,

  deposit(amount) {
    return `Депозит: ${amount}. Текущий баланс: ${(this.balance += amount)}`;
  },

  withdraw(amount) {
    if (this.balance >= amount) {
      return `Снято: ${amount}. Текущий баланс: ${(this.balance -= amount)}`;
    } else {
      console.log(
        `Недостаточно: ${amount}. Cредств для снятия: ${this.balance}`
      );
    }
  },

  getBalance() {
    return this.balance;
  },

  getOwner() {
    return this.owner;
  },
};

console.log(`Владелец аккаунта: ${account.getOwner()}`);

account.deposit(500);
account.withdraw(200);
account.withdraw(2000);

console.log(account.getBalance());
