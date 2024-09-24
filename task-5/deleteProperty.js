const deleteProperty = (obj, propertyName) => {
  delete obj[propertyName];
  return obj;
};

const person = { name: "Bob", age: 40, city: "San Francisco" };

console.log(deleteProperty(person, "city"));
