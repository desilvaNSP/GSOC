
(function(){

'use strict'

angular.module('crossOverSmwApp').controller('HomeController', HomeController);

HomeController.$inject = ['$scope','$rootScope','$cookies','UserService'];

	function HomeController($scope, $rootScope,$cookies,UserService){

			$scope.currentUser = "Sandun Priyanka";
			$scope.currentSessionId = null;


			var object = $cookies.getObject('globals').currentUser ;

			$scope.currentUser = object.username;
			$scope.currentSessionId = object.authdata;

			console.log($scope.currentSessionId);


		    UserService.getSalesManData($scope.currentSessionId ,function(response){
			   	if(response.data != null){
					$scope.salesmandata = response.data;
					console.log($scope.salesmandata);
			   	}else{
			   		$scope.error = response.resultDescription;
			   	}
		    });



			UserService.getLastYearData($scope.currentSessionId ,function(response){
			   	if(response.data != null){
					$scope.lastyeardata = response.data;
					console.log($scope.lastyeardata);
			   	}else{
			   		$scope.error = response.resultDescription;
			   	}

			   	console.log($scope.lastyeardata);
		   });

		
		   UserService.getTopSalesOrders($scope.currentSessionId ,function(response){
		   		console.log(response.data);
			   	if(response.data != null){
					$scope.topsalesorder = response.data;
					console.log($scope.topsalesorder);
			   	}else{
			   		$scope.error = response.resultDescription;
			   	}
			   	$scope.salesGroups = $scope.topsalesorder;
			   	console.log($scope.salesGroups);
		   });

		

		
		   UserService.getTopSalesMen($scope.currentSessionId ,function(response){
			   	if(response.data != null){
					$scope.topsalesman = response.data;
					
			   	}else{
			   		$scope.error = response.resultDescription;
			   	}
			    $scope.groups =$scope.topsalesman;
		   });
		   

		$scope.$on('$viewContentLoaded', function(){
			
			FusionCharts.ready(function(){
    			var revenueChart = new FusionCharts({
				        "type": "column2d",
				        "renderAt": "ChartContainer-Line",
				        "width": "500",
				        "height": "300",
				        "dataFormat": "json",
				        "dataSource":  {
				          "chart": {
				            "caption": "Sales Total per month:",
				            "subCaption": "Marble Design Center",
				            "xAxisName": "Month",
				            "yAxisName": "Revenues (In USD)",
				            "theme": "fint"
				         },
				         "data": [
				            {
				               "label": "Jan",
				               "value": "420000"
				            },
				            {
				               "label": "Feb",
				               "value": "810000"
				            },
				            {
				               "label": "Mar",
				               "value": "720000"
				            },
				            {
				               "label": "Apr",
				               "value": "550000"
				            },
				            {
				               "label": "May",
				               "value": "910000"
				            },
				            {
				               "label": "Jun",
				               "value": "510000"
				            },
				            {
				               "label": "Jul",
				               "value": "680000"
				            },
				            {
				               "label": "Aug",
				               "value": "620000"
				            },
				            {
				               "label": "Sep",
				               "value": "610000"
				            },
				            {
				               "label": "Oct",
				               "value": "490000"
				            },
				            {
				               "label": "Nov",
				               "value": "900000"
				            },
				            {
				               "label": "Dec",
				               "value": "730000"
				            }
				          ]
      					}

					 });
				revenueChart.render();
			});

			FusionCharts.ready(function(){
    			var revenueChart = new FusionCharts({
    				    "type": "pie3D",
				        "renderAt": "ChartContainer-Pie",
				        "width": "500",
				        "height": "300",
				        "dataFormat": "json",
				        "dataSource":  {
					    "chart": {
					        "caption": "Sales Total per Sales Man",
					        "palette": "2",
					        "animation": "1",
					        "formatnumberscale": "1",
					        "decimals": "0",
					        "numberprefix": "$",
					        "pieslicedepth": "30",
					        "startingangle": "125",
					        "showborder": "0"
						    },
						    "data": [
						        {
						            "label": "Leverling",
						            "value": "100524",
						            "issliced": "1"
						        },
						        {
						            "label": "Fuller",
						            "value": "87790",
						            "issliced": "1"
						        },
						        {
						            "label": "Davolio",
						            "value": "81898",
						            "issliced": "0"
						        },
						        {
						            "label": "Peacock",
						            "value": "76438",
						            "issliced": "0"
						        },
						        {
						            "label": "King",
						            "value": "57430",
						            "issliced": "0"
						        },
						        {
						            "label": "Callahan",
						            "value": "55091",
						            "issliced": "0"
						        },
						        {
						            "label": "Dodsworth",
						            "value": "43962",
						            "issliced": "0"
						        },
						        {
						            "label": "Suyama",
						            "value": "22474",
						            "issliced": "0"
						        },
						        {
						            "label": "Buchanan",
						            "value": "21637",
						            "issliced": "0"
						        }
						    ]
						}
						});
				revenueChart.render();
			});

        });
	}

})();
