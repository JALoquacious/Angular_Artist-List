let app = angular.module('app', [
    'ngRoute',
    'artistControllers'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        })
        .when('/details/:itemId', {
            templateUrl: '/partials/details.html',
            controller: 'detailsController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);