'use strict'

angular.module('Authentication').config(function ($httpProvider) {        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}).factory('LoginAuthService', ['$http','$cookies','$rootScope', function($http,$cookies,$rootScope){
	var serviceObj = {};

	serviceObj.Login = function (username, password, callback) {

        console.log(username);

    
       var data = {
             user_name:username,
             pass_word:password
            };

        var config = {
         params: data
        };

        
       $http.get('http://localhost:3000/user_login',config).success(function(response) {
           callback(response);
        }).error(function(data, status) {                                            
        alert('Error! ' + status + ' : ' + data)                                  
        })  ;

    };

    serviceObj.SetCredentials = function (username, sessionid) {
          
        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: sessionid
            }
         };
  
        $http.defaults.headers.common['Authorization'] = 'Basic ' + sessionid; // jshint ignore:line
        $cookies.putObject('globals', $rootScope.globals);

    };
  
    serviceObj.ClearCredentials = function () {
        $rootScope.globals = {};
        $cookies.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic ';
    };

	return serviceObj;
}]);
