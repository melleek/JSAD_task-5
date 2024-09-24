const copyObject = (obj) => ({ ...obj });
const original = { name: "Alice", age: 30 };
const copy = copyObject(original);

console.log(copy);

console.log(original === copy);
