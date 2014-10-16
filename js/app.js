var app = angular.module('myApp', ['ngRoute'])

	//.config(function($routeProvider, $locationProvider) {		
		// $locationProvider.html5Mode(true);
		
	
	.config(function($routeProvider) {		
	
		$routeProvider
			.when('/', {
				templateUrl: './templates/home.html',
				//controller: 'HomeCtrl'
			})
			.when('/paint-box', {
				templateUrl: './templates/paint-box.html',
				controller: 'PaintCtrl'
			})
			.when('/treasure-hunt', {
				templateUrl: './templates/treasure-hunt.html',
				controller: 'TreasureCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
