app.factory('RamService', function ($http) {
  return $http.get('https://swapi.co/api/species/')
    .success(function (data) {
      return data;
    })
    .error(function (error) {
      return error;
    });
})