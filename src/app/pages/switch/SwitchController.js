app.controller('SwitchController', function ($scope, ComputerService, $location) {

  $scope.status = ComputerService.computerStatus;

  $scope.onOffComputer = function () {
    ComputerService.toggleComputer();
    $scope.status = ComputerService.computerStatus;
  }

  $scope.disabledEnabledSettings = function () {
    return $scope.status;
  };

  $scope.goFeatures = function () {
    $location.path('/features');
  };

  $scope.hdd = function () {
    _objHdd = {
      name: "Executor",
      model: "Executor-class star dreadnought",
      manufacturer: "Kuat Drive Yards, Fondor Shipyards",
      cost_in_credits: "1143350000",
      length: "19000",
      max_atmosphering_speed: "n/a",
      crew: "279144",
      passengers: "38000",
      cargo_capacity: "250000000",
      consumables: "6 years",
      hyperdrive_rating: "2.0",
      MGLT: "40",
      starship_class: "Star dreadnought",
      pilots: [],
      films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/"],
      created: "2014-12-15T12:31:42.547000Z",
      edited: "2017-04-19T10:56:06.685592Z",
      url: "https://swapi.co/api/starships/15/"
    };
    _stringReturnHdd = $scope.validateString(ComputerService.getHdd(), _objHdd);
    ComputerService.setHdd(_stringReturnHdd);
    return _stringReturnHdd;
  }

  $scope.processor = function () {
    _objProcessor = {
      name: "Sand Crawler",
      model: "Digger Crawler",
      manufacturer: "Corellia Mining Corporation",
      cost_in_credits: "150000",
      length: "36.8",
      max_atmosphering_speed: "30",
      crew: "46",
      passengers: "30",
      cargo_capacity: "50000",
      consumables: "2 months",
      vehicle_class: "wheeled",
      pilots: [],
      films: ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
      created: "2014-12-10T15:36:25.724000Z",
      edited: "2014-12-22T18:21:15.523587Z",
      url: "https://swapi.co/api/vehicles/4/"
    };
    _stringRaturnProcessor = $scope.validateString(ComputerService.getProcessor(), _objProcessor);
    ComputerService.setProcessor(_stringRaturnProcessor);
    return _stringRaturnProcessor;
  }

  $scope.ram = function () {
    _objRam = {
      name: "Hutt",
      classification: "gastropod",
      designation: "sentient",
      average_height: "300",
      skin_colors: "green, brown, tan",
      hair_colors: "n/a",
      eye_colors: "yellow, red",
      average_lifespan: "1000",
      homeworld: "https://swapi.co/api/planets/24/",
      language: "Huttese",
      people: ["https://swapi.co/api/people/16/"],
      films: ["https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/"],
      created: "2014-12-10T17:12:50.410000Z",
      edited: "2014-12-20T21:36:42.146000Z",
      url: "https://swapi.co/api/species/5/"
    };
    _stringReturnRam = $scope.validateString(ComputerService.getRam(), _objRam);
    ComputerService.setRam(_stringReturnRam);
    return _stringReturnRam;
  }

  /**
   * Carga valores por defecto
   */
  $scope.validateString = function (string, stringReturn) {
    return string === '' ? stringReturn : string;
    // if (string === '') {
    //   console.log(1);
    //   return stringReturn;
    // }
    // return string;
  }
}); 