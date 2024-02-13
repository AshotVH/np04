"use strict";
angular.module("bellegarde", []).component("bellegarde", {
  templateUrl: "bellegarde/bellegarde.template.html",
  controller: function bellegardeController($scope, $http, $q, $interval) {
    this.pageTitle = "NP04 Bellegarde side";
    this.natalie = 1;
    let self = this;

    this.reload = function () {
      $http
        .get("php-db-conn/np04cachedvals.php?elemName=bellegarde")
        .then(function (result) {
          self.timestamp = new Date();
          const res = result.data;
          console.log(res);
          self.B4_BS_01 = res["47883902540570"]?res["47883902540570"][0]:"N/A";
          self.DS_BS_01 = res["47883969649434"]?res["47883969649434"][0]:"N/A";
          self.TCO_BS_01 = res["47883952872218"]?res["47883952872218"][0]:"N/A";
          self.B3_BS_01 = res["47883919317786"]?res["47883919317786"][0]:"N/A";
          self.B2_BS_01 = res["47883936095002"]?res["47883936095002"][0]:"N/A";
          self.MEM_BS_03 = res["47883868986138"]?res["47883868986138"][0]:"N/A";
          self.MEM_BS_02 = res["47883885763354"]?res["47883885763354"][0]:"N/A";
          self.BC_BS_03 = res["47883835431706"]?res["47883835431706"][0]:"N/A";
          self.MC_BSS_03 = res["47883986426650"]?res["47883986426650"][0]:"N/A";
          self.MC_BSS_02 = res["47884019981082"]?res["47884019981082"][0]:"N/A";
          self.NP04_MHT0100AI = res["47878785489690"]?res["47878785489690"][0]:"N/A";
          self.NP04_TT0100AI = res["47878802266906"]?res["47878802266906"][0]:"N/A";
          self.NP04_PT0106AI = res["47878819044122"]?res["47878819044122"][0]:"N/A";   
        });
    };

    this.promise;

    this.reload();

    $scope.start = function () {
      $scope.stop();

      self.promise = $interval(self.reload, 15000);
    };

    $scope.stop = function () {
      $interval.cancel(self.promise);
    };
    $scope.start();

    $scope.$on("$destroy", function () {
      $scope.stop();
    });
  },
});
