const shoppingCart = {
  itemName: "Vernel",
  itemPrice: 40,
  itemQuantity: 5,

  updateItem(name, price, quantity) {
    this.itemName = name;
    this.itemPrice = price;
    this.itemQuantity = quantity;

    return `Товар обновлен: ${this.itemName}, количество: ${this.itemPrice}, цена: $${this.itemQuantity}`;
  },

  resetItem() {
    this.itemName = "";
    this.itemPrice = 0;
    this.itemQuantity = 0;
  },

  getTotal() {
    return `Общая стоимость: $${this.itemPrice * this.itemQuantity}`;
  },

  displayCart() {
    if (this.itemName && this.itemPrice && this.itemQuantity) {
      return `Товар: ${this.itemName}, количество: ${this.itemPrice}, цена: $${this.itemQuantity}`;
    }

    return "Корзина пуста";
  }
};

console.log(shoppingCart.updateItem("Ноутбук", 999.99, 1));
console.log(shoppingCart.displayCart());
console.log(shoppingCart.getTotal());

shoppingCart.resetItem();
console.log(shoppingCart.displayCart());
