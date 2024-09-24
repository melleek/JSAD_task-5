const updateProductQuantity = (product, newQuantity) => {
  product.quantity = newQuantity;
  return product;
}

const product = { name: "Laptop", price: 999.99, quantity: 5 };

console.log(updateProductQuantity(product, 10));
