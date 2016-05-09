
(function(){

'use strict';

// declare Autherntication module in here.
angular.module('Authentication', []);

var appModule = angular.module('crossOverSmwApp', [
    'Authentication',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);

appModule.config(['$routeProvider',
  function($routeProvider,$scope) {
    $routeProvider.
      when('/', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'
      }).
      when('/home', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
      }).
      when('/about', {
        controller: 'about',
        templateUrl: 'views/about.html'
      }).otherwise({ redirectTo: '/' });
  }]);

appModule.run(['$rootScope', '$location', '$cookies', '$http',
    function ($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.get('globals') || {};

        if ($rootScope.globals.currentUser) {
            appModule.value('username', $rootScope.globals.currentUser.username);
            appModule.value('authdata', $rootScope.globals.currentUser.authdata);
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            console.log($rootScope.globals.currentUser);
            if ($location.path() !== '/' && !$rootScope.globals.currentUser) {
                $location.path('/');
            }
        });
    }]);


})();





