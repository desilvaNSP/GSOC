
'use strict'
angular.module('Authentication')
.controller('LoginController', 
	['$scope','$rootScope','$location','LoginAuthService', 
		function($scope,$rootScope,$location,LoginAuthService){
			LoginAuthService.ClearCredentials();

			$scope.login = function(){
				LoginAuthService.Login($scope.username,$scope.password,function(response){


   					if(response.loginSucceeded){
              console.log("inside");
   						LoginAuthService.SetCredentials($scope.username,  response.sessionId);

   						$location.path('/home');
   					}else{
   						$scope.error = response.message;
                    	$scope.dataLoading = false;
                    }
				})
			}

      $scope.$on('$viewContentLoaded', function(){
                $('.top-content').backstretch(
                        ["images/background/1.jpg", "images/background/2.jpg", "images/background/3.jpg"], 
                        {duration: 3000, fade: 750}
                );
                $('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
                $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");
                
                $('#top-navbar-1').on('shown.bs.collapse', function(){
                    $('.top-content').backstretch("resize");
                });
                $('#top-navbar-1').on('hidden.bs.collapse', function(){
                    $('.top-content').backstretch("resize");
                });
                
                $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
                    $('.testimonials-container').backstretch("resize");
                });
      });
}]);