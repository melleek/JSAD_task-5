const hasProperty = (obj, propertyName) => propertyName in obj;
const car = { brand: "Toyota", model: "Camry", year: 2021 };
console.log(hasProperty(car, "model"));
console.log(hasProperty(car, "color"));
