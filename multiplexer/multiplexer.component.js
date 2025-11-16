"use strict";
angular.module("multiplexer", []).component("multiplexer", {
  templateUrl: "multiplexer/multiplexer.template.html",
  controller: [
    "$routeParams",
    "$scope",
    "$http",
    "$window",
    "$interval",
    function multiplexerController(
      $routeParams,
      $scope,
      $http,
      $window,
      $interval
    ) {
      this.pageTitle = "NP04 Temperature Map";
      this.natalie = 1;
      const self = this;

      self.NP04_DCS_01_TE_card1 = [];

      self.NP04_DCS_01_TE_card1["Name"] = [];
      self.NP04_DCS_01_TE_card1["Value"] = [];

      self.NP04_DCS_01_TE_card2 = [];

      self.NP04_DCS_01_TE_card2["Name"] = [];
      self.NP04_DCS_01_TE_card2["Value"] = [];

      self.NP04_DCS_01_TE_card3 = [];

      self.NP04_DCS_01_TE_card3["Name"] = [];
      self.NP04_DCS_01_TE_card3["Value"] = [];

      self.NP04_DCS_01_TE_card4 = [];

      self.NP04_DCS_01_TE_card4["Name"] = [];
      self.NP04_DCS_01_TE_card4["Value"] = [];

      self.NP04_DCS_01_TE_card5 = [];

      self.NP04_DCS_01_TE_card5["Name"] = [];
      self.NP04_DCS_01_TE_card5["Value"] = [];

      self.NP04_DCS_01_TE_card6 = [];

      self.NP04_DCS_01_TE_card6["Name"] = [];
      self.NP04_DCS_01_TE_card6["Value"] = [];

      self.NP04_DCS_01_TE_card7 = [];

      self.NP04_DCS_01_TE_card7["Name"] = [];
      self.NP04_DCS_01_TE_card7["Value"] = [];

      self.NP04_DCS_01_TE_card8 = [];

      self.NP04_DCS_01_TE_card8["Name"] = [];
      self.NP04_DCS_01_TE_card8["Value"] = [];

      self.NP04_DCS_01_TE_card9 = [];

      self.NP04_DCS_01_TE_card9["Name"] = [];
      self.NP04_DCS_01_TE_card9["Value"] = [];

      this.pageChooser = function (page) {
        $window.location.href = "#!/" + page;
      };

      this.reload = function () {
        self.timestamp = new Date();
        $http
          .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=multiplexer1")
          .then(function (result) {
            const res = result.data;
            console.log(res);
            self.NP04_TE0001 = res["47890261082394"]?res["47890261082394"][0]:"N/A";
            self.NP04_TE0002 = res["47890277859610"]?res["47890277859610"][0]:"N/A";
            self.NP04_TE0003 = res["47890294636826"]?res["47890294636826"][0]:"N/A";
            self.NP04_TE0004 = res["47890311414042"]?res["47890311414042"][0]:"N/A";
            self.NP04_TE0005 = res["47890328191258"]?res["47890328191258"][0]:"N/A";
            self.NP04_TE0006 = res["47890344968474"]?res["47890344968474"][0]:"N/A";
            self.NP04_TE0007 = res["47890361745690"]?res["47890361745690"][0]:"N/A";
            self.NP04_TE0008 = res["47890378522906"]?res["47890378522906"][0]:"N/A";
            self.NP04_TE0009 = res["47890395300122"]?res["47890395300122"][0]:"N/A";

          });

        // $http
        //   .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=multiplexer")
        //   .then(function (resultArr) {
        //     console.log(resultArr.data);
        //     let rArr = [];
        //     let resjson = angular.toJson(resultArr.data);
        //     let res = JSON.parse(resjson);
        //     for (let i = 0; i < res.length; i++) {
        //       rArr.push(JSON.parse(res[i]));
        //     }

        //     self.NP04_MHT0100AI = rArr[0];
        //     self.NP04_TT0100AI = rArr[1];
        //     self.NP04_PT0106AI = rArr[2];

        //     let j = 0;
        //     let k = "";

        //     for (let i = 1; i < 10; i++) {
        //       self.NP04_DCS_01_TE_card1["Name"].push("TE000" + i);
        //       self.NP04_DCS_01_TE_card1["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 10; i < 25; i++) {
        //       self.NP04_DCS_01_TE_card1["Name"].push("TE00" + i);
        //       self.NP04_DCS_01_TE_card1["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 25; i < 49; i++) {
        //       self.NP04_DCS_01_TE_card2["Name"].push("TE00" + i);
        //       self.NP04_DCS_01_TE_card2["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 49; i < 73; i++) {
        //       self.NP04_DCS_01_TE_card3["Name"].push("TE00" + i);
        //       self.NP04_DCS_01_TE_card3["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 73; i < 97; i++) {
        //       self.NP04_DCS_01_TE_card4["Name"].push("TE00" + i);
        //       self.NP04_DCS_01_TE_card4["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 97; i < 100; i++) {
        //       self.NP04_DCS_01_TE_card5["Name"].push("TE00" + i);
        //       self.NP04_DCS_01_TE_card5["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 100; i < 121; i++) {
        //       self.NP04_DCS_01_TE_card5["Name"].push("TE0" + i);
        //       self.NP04_DCS_01_TE_card5["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 121; i < 145; i++) {
        //       self.NP04_DCS_01_TE_card6["Name"].push("TE0" + i);
        //       self.NP04_DCS_01_TE_card6["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 145; i < 169; i++) {
        //       self.NP04_DCS_01_TE_card7["Name"].push("TE0" + i);
        //       self.NP04_DCS_01_TE_card7["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 169; i < 193; i++) {
        //       self.NP04_DCS_01_TE_card8["Name"].push("TE0" + i);
        //       self.NP04_DCS_01_TE_card8["Value"].push(rArr[i + 2]);
        //     }

        //     for (let i = 193; i < 217; i++) {
        //       self.NP04_DCS_01_TE_card9["Name"].push("TE0" + i);
        //       self.NP04_DCS_01_TE_card9["Value"].push(rArr[i + 2]);
        //     }

        //     console.log("interval occured");
        //     self.timestamp = rArr[rArr.length - 1] * 1000;
        //   });
      };

      this.promise;

      this.reload();

      $scope.start = function () {
        $scope.stop();

        self.promise = $interval(self.reload, 300000);
      };

      $scope.stop = function () {
        $interval.cancel(self.promise);
      };
      $scope.start();

      $scope.$on("$destroy", function () {
        $scope.stop();
      });
    },
  ],
});
