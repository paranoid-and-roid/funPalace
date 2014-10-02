var app = angular.module('myApp', ['ngRoute'])

	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				template: 'index.html',
				controller: 'MainCtrl'
			})
			.when('/paint-box', {
				template: '/templates/paint-box.html',
				controller: 'PaintCtrl'
			})
			.when('/treasure-hunt', {
				template: '/templates/treasure-hunt.html',
				controller: 'TreasureCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
