var app = angular.module('myApp', ['ngRoute'])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {		
		 $locationProvider.html5Mode(true);	
	
		$routeProvider
			.when('/', {
				templateUrl: '/templates/home.html'
			})
			.when('/paint-box', {
				templateUrl: '/templates/paint-box.html',
				controller: 'PaintCtrl'
			})
			.when('/treasure-hunt', {
				templateUrl: '/templates/treasure-hunt.html',
				controller: 'TreasureCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
