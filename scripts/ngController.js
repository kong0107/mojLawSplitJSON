angular
.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'list',
		controller: 'list'
	})
	.when('/search/:search', {
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
	$scope.$on('setTitle', function(event, args) {
		$scope.title = args.title;
	});
}])
.controller('list', ['$scope', '$http', '$routeParams', '$location',
	function($scope, $http, $routeParams, $location) {
		$scope.itemsPerPage = 10;
		$scope.q = $routeParams.search || '';
		$http.get('index.json', {cache: true}).then(function(res) {
			$scope.laws = res.data;
		}, function(res) {
			console.error(res);
		});
		$scope.search = function() {
			var title = '法規查詢';
			var q = $scope.q.trim();
			//$location.url(q ? ('/search/' + q) : '/'); ///< the input would lose focus
			if(q) title += '「' + q + '」';
			$scope.$emit('setTitle', {title: title});
			$scope.skip = '0';
		};
		$scope.search();
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
