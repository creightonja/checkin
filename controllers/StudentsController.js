studentLogin.controller('StudentsCtrl', function StudentsCtrl($scope, UsersFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentssFactory = StudentsFactory;
});
