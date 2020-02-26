app.factory('ProcessorsService', function ($http) {
  return $http.get('https://swapi.co/api/vehicles/')
    .success(function (data) {
      return data;
    })
    .error(function (error) {
      return error;
    });
});
