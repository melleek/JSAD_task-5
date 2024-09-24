function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `"${this.firstName} ${this.lastName}"`;
};

const person1 = new Person("Tina", "Riko");

const employee = Object.create(person1);
employee.position = "Admin";

console.log(person1.getFullName());
console.log(employee.getFullName());
console.log(employee.position);
