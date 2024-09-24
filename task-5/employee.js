const employee = {
  name: "Defo",
  position: "Software Engineer",
  salary: 100,
  isFullTime: true,
};

employee.position = "Front Developer"
employee.hireDate = "2021-01-09"
delete employee.salary 
console.log(employee);
