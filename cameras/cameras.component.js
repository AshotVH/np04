'use strict';
angular.module('cameras', []).component('cameras', {
    templateUrl: 'cameras/cameras.template.html',
    controller: function camerasController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Cryostat";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=cryostat").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(res[i]);
                }

                self.NP04_PT0100AI = rArr[0];
                self.NP04_PT0101AI = rArr[1];
                self.NP04_PT0103AI = rArr[2];
                self.NP04_PT0104AI = rArr[3];
                self.NP04_PT0105AI = rArr[4];
                self.NP04_MHT0100AI = rArr[5];
                self.NP04_TT0100AI = rArr[6];
                self.NP04_PT0106AI = rArr[7];
                self.NP04_2PT0100AI = rArr[8];
                self.NP04_PT0110AI = rArr[9];
                self.NP04_PT0111AI = rArr[10];
                self.NP04_PT0102AI = rArr[11];
                self.NP04_2PT0100AIR = rArr[12];
                self.CV4100 = rArr[13];
                self.CV4101 = rArr[14];
                self.NP04_DCS_01_TE0121 = rArr[15];
                self.NP04_DCS_01_TE0122 = rArr[16];
                self.NP04_DCS_01_TE0123 = rArr[17];
                self.NP04_DCS_01_TE0127 = rArr[18];
                self.NP04_DCS_01_TE0133 = rArr[19];
                self.NP04_DCS_01_TE0135 = rArr[20];
                self.NP04_DCS_01_TE0139 = rArr[21];
                self.NP04_DCS_01_TE0140 = rArr[22];
                self.NP04_DCS_01_NP04_4QT4710 = rArr[23];
                self.NP04_DCS_01_NP04_4QT4711 = rArr[24];
                self.NP04_DCS_01_NP04_4QT4720 = rArr[25];
                self.NP04_DCS_01_NP04_4QT4730 = rArr[26];
                self.NP04_DCS_01_NP04_4PT4920 = rArr[27];

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