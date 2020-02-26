app.factory('HddService', function ($http) {
  return $http.get('https://swapi.co/api/starships/')
    .success(function (data) {
      return data;
    })
    .error(function (err) {
      return err;
    });
});