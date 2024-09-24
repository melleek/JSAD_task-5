const laptop = {
  brand: "Hp Probook",
  model: "Business Laptop–Core™ i7",
  year: 2021,
  price: 15000,
};

for (const obj in laptop) {
  console.log(`${obj}: ${laptop[obj]}`);
}
