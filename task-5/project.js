const project = {
  name: "We're bulletproof",
  team: ["JK", "V", "JM", "RM", "JH", "AD", "WWH"],
  status: "in progress"
};

Object.preventExtensions(project);
project.deadline = "8 days";

Object.seal(project);
project.status = "success";
delete project.team;

Object.freeze(project);
project.name = "Make it right";

console.log(project);

// вывод:
//    methods Object.preventExtensions() - не позволяет добавить свойство
//    methods Object.seal() - позволяет изменить значение  но не позволяет удалить
//    methods Object.freeze() - не позволяет изменить значение
