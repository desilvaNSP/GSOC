'use strict'

angular.module('crossOverSmwApp').config(function ($httpProvider) {        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}).factory('UserService', ['$http','$cookies','$rootScope', function($http,$cookies,$rootScope){
		var userserviceObj = {};

	userserviceObj.getSalesManData = function (sessionid,callback) {
		var data = {
             session_id:sessionid,
            };

        var config = {
         params: data
        };

        
       $http.get('http://localhost:3000/sales-man-data',config).success(function(response) {
           callback(response);
        }).error(function(data, status) {                                            
        alert('Error! ' + status + ' : ' + data)                                  
        })  ;

	};

	userserviceObj.getLastYearData = function (sessionid,callback) {
		var data = {
             session_id:sessionid,
            };

        var config = {
         params: data
        };

        
       $http.get('http://localhost:3000/last-year-data',config).success(function(response) {
           callback(response);
        }).error(function(data, status) {                                            
        alert('Error! ' + status + ' : ' + data)                                  
        })  ;
	};

	userserviceObj.getTopSalesOrders = function (sessionid,callback) {
		var data = {
             session_id:sessionid,
            };

        var config = {
         params: data
        };
        
       $http.get('http://localhost:3000/top-sales-orders',config).success(function(response) {
           callback(response);
        }).error(function(data, status) {                                            
        alert('Error! ' + status + ' : ' + data)                                  
        })  ;
	};
	userserviceObj.getTopSalesMen = function (sessionid,callback) {
		var data = {
             session_id:sessionid,
            };

        var config = {
         params: data
        };

        
       $http.get('http://localhost:3000/top-sales-men',config).success(function(response) {
           callback(response);
        }).error(function(data, status) {                                            
        alert('Error! ' + status + ' : ' + data)                                  
        })  ;

	};



	return userserviceObj;
}]);