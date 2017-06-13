let app = angular.module('main', []);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
    });
}]);
