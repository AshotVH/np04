'use strict';
angular.module('comissioning', []).component('comissioning', {
    templateUrl: 'comissioning/comissioning.template.html',
    controller: function comissioningController($scope, $http, $interval) {
        this.pageTitle = "NP04 comissioning";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=comissioning").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }


                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];

                self.NP04_PT0110AI = rArr[3];
                self.NP04_PT0111AI = rArr[4];
                self.NP04_DCS_01_Wiener_MPOD_CE_RACK6_Board2_Channel07_MeasurementSenseVoltage = rArr[5];
                self.NP04_DCS_01_Wiener_MPOD_CE_RACK6_Board2_Channel07_MeasurementCurrent = rArr[6];
                self.NP04_DCS_01_NP04_4QT4710 = rArr[7];
                self.NP04_DCS_01_NP04_4QT4711 = rArr[8];
                self.NP04_DCS_01_NP04_4QT4720 = rArr[9];
                self.NP04_DCS_01_NP04_4QT4730 = rArr[10];

                self.NP04_DCS_01_LT0100 = rArr[11];
                self.NP04_4CV4202 = rArr[12];
                self.NP04_DCS_01_NP04_4PDT4500 = rArr[13];
                self.NP04_DCS_01_NP04_4PT4920 = rArr[14];
                self.NP04_DCS_01_NP04_4FT4592 = rArr[15];

                self.timestamp = rArr[rArr.length-1] * 1000;
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