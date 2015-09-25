studentLogin.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Jessica", id: 1, login: false },
    { name: "John", id: 2, login: false },
    { name: "Jenna", id: 3, login: true },
    { name: "Jack", id: 4, login: true },
    { name: "Justin", id: 5, login: false }
  ];

  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, id: factory.students.length + 1, login: false });
    factory.studentName = null;
  };

  return factory;
});
