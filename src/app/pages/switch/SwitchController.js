app.controller('SwitchController', function ($scope, ComputerService, $location) {

  $scope.status = ComputerService.computerStatus;

  $scope.onOffComputer = function () {
    ComputerService.toggleComputer();
    $scope.status = ComputerService.computerStatus;
  }

  $scope.disabledEnabledSettings = function () {
    return $scope.status;
  };

  $scope.toggleComputer = function () {
    ComputerService.toggleComputer();
    $location.path('/features');
  };

  $scope.hdd = function () {
    return $scope.validateString(ComputerService.getHdd(), 'Executor');
  }

  $scope.processor = function () {
    return $scope.validateString(ComputerService.getProcessor(), 'Sand Crawler')
  }

  $scope.ram = function () {
    return $scope.validateString(ComputerService.getRam(), 'Hutt');
  }

  $scope.validateString = function (string, stringReturn) {
    return string === '' ? stringReturn : string;
  }
}); 