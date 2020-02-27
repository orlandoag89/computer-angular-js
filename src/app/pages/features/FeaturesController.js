app.controller('FeaturesController', function ($scope, $location, ComputerService, HddService, ProcessorsService, RamService) {

  $scope.returnPath = function () {
    if ($scope.hddSelected !== undefined && $scope.processorSelected !== undefined && $scope.ramSelected !== undefined) {
      ComputerService.setHdd($scope.hddSelected);
      ComputerService.setProcessor($scope.processorSelected);
      ComputerService.setRam($scope.ramSelected);
    }
    $location.path('/swtich');
  };

  HddService.success(function (data) {
    $scope.hdds = data.results;
    $scope.hddSelected = $scope.hdds[$scope._getIndexSelected($scope.hdds, ComputerService.getHdd().name)];
  });

  ProcessorsService.success(function (data) {
    $scope.processors = data.results;
    $scope.processorSelected = $scope.processors[$scope._getIndexSelected($scope.processors, ComputerService.getProcessor().name)];
  });

  RamService.success(function (data) {
    $scope.rams = data.results;
    $scope.ramSelected = $scope.rams[$scope._getIndexSelected($scope.rams, ComputerService.getRam().name)];
  });

  /**
   * Obtiene el índice que ha sido seleccionado desde el switch
   */
  $scope._getIndexSelected = function (array, searchString) {
    output = array.map(function (element) {
      return element.name;
    }).indexOf(searchString);
    return output !== -1 ? output : 0;
  }
});