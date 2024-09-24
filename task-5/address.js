const user = {
  username: "Tini",
  email: "tini@gmail.com",
  age: "21",
};

const address = {
  city: "Argentina",
  state: "ByounBuenos Aires",
  postalCode: "B1001",
};

const userProfile = Object.assign({}, user, address);

console.log(userProfile);
