'use strict';
angular.module('comissioning', []).component('comissioning', {
    templateUrl: 'comissioning/comissioning.template.html',
    controller: function comissioningController($scope, $http, $interval) {
        this.pageTitle = "NP04 comissioning";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=comissioning")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);

                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.NP04_DCS_01_NP04_4PT4920 = res["47931851800858"][0];
                    self.NP04_PT0110AI = res["47879272028954"][0];
                    self.NP04_PT0111AI = res["47879288806170"][0];
                    self.NP04_DCS_01_NP04_4QT4710 = res["47897609503002"][0];
                    self.NP04_DCS_01_NP04_4QT4711 = res["47897626280218"][0];
                    self.NP04_DCS_01_NP04_4QT4720 = res["47897643057434"][0];
                    self.NP04_DCS_01_NP04_4QT4730 = res["47897676611866"][0];
                    // self.NP04_DCS_01_Wiener_MPOD_CE_RACK6_Board2_Channel07_MeasurementSenseVoltage = res["47890059777050"][0];
                    // self.NP04_DCS_01_Wiener_MPOD_CE_RACK6_Board2_Channel07_MeasurementCurrent = res["47890059777306"][0];
                    self.NP04_DCS_01_LT0100 = res["47897777275162"][0];
                    self.NP04_4CV4202 = res["47917859602714"][0];
                    self.NP04_DCS_01_NP04_4PDT4500 = res["47931801469210"][0];
                    self.NP04_DCS_01_NP04_4FT4592 = res["48019361759514"][0];

                });

            console.log("interval occured");

        };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();

            self.promise = $interval(self.reload, 60000);
        };

        $scope.stop = function() {
            $interval.cancel(self.promise);
        };
        $scope.start();

        $scope.$on('$destroy', function() {
            $scope.stop();
        });
    }
});