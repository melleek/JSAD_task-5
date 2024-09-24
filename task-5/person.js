const person = {
  name: "Leon",
  age: 24,
};

Object.defineProperty(person, "age", {
  writable: false,
  enumerable: false,
  configurable: false,
});

person.age = 25;
console.log(person.age);

console.log(Object.getOwnPropertyDescriptor(person, "age"));
