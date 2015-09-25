var studentLogin = angular.module('studentLogin', ['ui.router']);

studentLogin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('students', {
    url: "/students",
    templateUrl: "partials/students.html",
    controller: 'StudentsCtrl'
  });

  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "partials/login.html",
    controller: 'StudentsCtrl'
  });

});
