angular
.module('app', ['ngRoute'])
/*.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}])*/
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
	$http.get('UpdateDate.txt', {cache: true}).then(function(res) {
		$scope.UpdateDate = res.data;
	}, function(res) { console.error(res); });
	$scope.$on('setTitle', function(event, args) {
		$scope.title = args.title;
	});
}])
.controller('list', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		$scope.$emit('setTitle', {title: '法規查詢'});
		$scope.itemsPerPage = 10;
		$scope.q = $routeParams.search;
		$scope.skip = '0';
		$http.get('index.json').then(function(res) {
			$scope.laws = res.data;
		}, function(res) {
			console.error(res);
		});
		$scope.pages = function() {
			if(!$scope.filtered) return [];
			var result = [];
			for(var i = 0;
				i < $scope.filtered.length;
				i += $scope.itemsPerPage
			) result.push(i);
			return result;
		};
	}
])
.controller('law', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		$scope.PCode = $routeParams.PCode;
		var PCode = $routeParams.PCode;
		$http.get('FalVMingLing/' + PCode + '.json').then(function(res) {
			$scope.law = res.data;
			$scope.$emit('setTitle', {title: res.data.法規名稱});
		}, function(res) {
			$scope.error = res;
		});
	}
])
