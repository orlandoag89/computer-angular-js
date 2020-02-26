app.factory('ComputerService', function () {
  return {

    computerStatus: false,
    hdd: '',
    processor: '',
    ram: '',

    toggleComputer: function () {
      this.computerStatus = !this.computerStatus;
    },
    getComputerStatus: function () {
      return this.computerStatus;
    },
    setHdd: function (hdd) {
      this.hdd = hdd;
    },
    getHdd: function () {
      return this.hdd;
    },
    setProcessor: function (processor) {
      this.processor = processor;
    },
    getProcessor: function () {
      return this.processor;
    },
    setRam: function (ram) {
      this.ram = ram;
    },
    getRam: function () {
      return this.ram;
    }
  };
});