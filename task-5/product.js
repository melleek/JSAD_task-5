const product = {
  name: "Apple",
  price: 28,
  category: "fruits",
  inStock: false,
};

product.price = 30;
product.inStock = true;
product.rating = 8;
delete product.category;
console.log(product);
