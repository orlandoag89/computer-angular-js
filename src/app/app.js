var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/switch', {
      controller: 'SwitchController',
      templateUrl: 'app/pages/switch/switch.html'
    })
    .when('/features', {
      controller: 'FeaturesController',
      templateUrl: 'app/pages/features/features.html'
    })
    .otherwise({
      redirectTo: '/switch'
    });
});
