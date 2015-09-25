studentLogin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentssFactory = StudentsFactory;

  $scope.studentLogin = function(student){
    student.login = true;
  };

  $scope.studentLogout = function(student){
    student.login = false;
  };

});
