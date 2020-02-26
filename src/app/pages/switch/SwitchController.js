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
    _stringReturnHdd = $scope.validateString(ComputerService.getHdd(), 'Executor');
    ComputerService.setHdd(_stringReturnHdd);
    return _stringReturnHdd;
  }

  $scope.processor = function () {
    _stringRaturnProcessor = $scope.validateString(ComputerService.getProcessor(), 'Sand Crawler');
    ComputerService.setProcessor(_stringRaturnProcessor);
    return _stringRaturnProcessor;
  }

  $scope.ram = function () {
    _stringReturnRam = $scope.validateString(ComputerService.getRam(), 'Hutt');
    ComputerService.setRam(_stringReturnRam);
    return _stringReturnRam;
  }

  /**
   * Carga valores por defecto
   */
  $scope.validateString = function (string, stringReturn) {
    return string === '' ? stringReturn : string;
  }

}); 