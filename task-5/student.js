const student = {
  name: "Farishtamoh",
  age: 21,
  major: "Artificial Intelligence - (AI)",
  gpa: 3.5
};

const countProperty = Object.keys(student).length;
console.log(`Количество свойств: ${countProperty}`);

Object.keys(student).forEach((elem) => {
  console.log(`${elem}: ${student[elem]}`);
});
