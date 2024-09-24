const user = {
  userName: "Angel",
  email: "angel@gmail.com",
  age: 21,
  countrty: "Tajikistan"
};

const {
  userName: userName,
  email: email,
  age: age,
  countrty = "Unknown"
} = user;

console.log(`${userName}\n${email}\n${age}\n${countrty}`);
