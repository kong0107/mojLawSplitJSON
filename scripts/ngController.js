angular
.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'list',
		controller: 'list'
	})
	.when('/law/:PCode', {
		templateUrl: 'law',
		controller: 'law'
	})
	.otherwise({redirectTo: '/'});
}])
.controller('main', ['$scope', '$http', function($scope, $http) {
	$http.get('UpdateDate.txt').then(function(res) {
		$scope.UpdateDate = res.data;
	}, function(res) { console.error(res); });
}])
.controller('list', ['$scope', '$http', function($scope, $http) {
	$scope.itemsPerPage = 10;
	$scope.skip = '0';
	$http.get('index.json').then(function(res) {
		$scope.laws = res.data;
	}, function(res) {
		console.error(res);
	});
	$scope.typeof = function(v){return typeof v;};
}])
.controller('law', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.test = 'LAW';
	}
]);
