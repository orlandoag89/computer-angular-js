app.controller('FeaturesController', function ($scope, $location, ComputerService, HddService, ProcessorsService, RamService) {

  $scope.status = ComputerService.getComputerStatus();

  $scope.returnPath = function () {
    if ($scope.hddSelected !== undefined && $scope.processorSelected !== undefined && $scope.ramSelected !== undefined) {
      ComputerService.setHdd($scope.hddSelected.name);
      ComputerService.setProcessor($scope.processorSelected.name);
      ComputerService.setRam($scope.ramSelected.name);
    }
    $location.path('/swtich');
  };

  HddService.success(function (data) {
    $scope.hdds = data.results;
    $scope.hddSelected = $scope.hdds[0];
  });

  ProcessorsService.success(function (data) {
    $scope.processors = data.results;
    $scope.processorSelected = $scope.processors[0];
  });

  RamService.success(function (data) {
    $scope.rams = data.results;
    $scope.ramSelected = $scope.rams[0];
  });
});