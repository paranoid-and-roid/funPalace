var app = angular.module('myApp', ['ngRoute'])

	.config(function($routeProvider) {
		
	//.config(function($routeProvider, $locationProvider) {		
		// $locationProvider.html5Mode(true);
		
		$routeProvider
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
