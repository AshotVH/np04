'use strict';
angular.module('cryogenics', []).component('cryogenics', {
    templateUrl: 'cryogenics/cryogenics.template.html',
    controller: function cryogenicsController($scope, $http, $interval) {
        this.pageTitle = "NP04 Cryogenics";
        this.natalie = 1;
        this.TT0101 = "";
        var self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=cryogenics").then(function (resultArr) {
                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }


                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];


                self.NP04_DCS_01_4LT3100 = rArr[2];
                self.NP04_DCS_01_2LT3160 = rArr[3];
                self.NP04_DCS_01_2LT4300 = rArr[4];
                self.NP04_DCS_01_2CV4125 = rArr[5];
                self.NP04_DCS_01_2QT4711 = rArr[6];
                self.NP04_DCS_01_2QT4710 = rArr[7];
                self.NP04_DCS_01_2QT4720 = rArr[8];
                self.NP04_DCS_01_2QT4730 = rArr[9];
                self.NP04_DCS_01_2CV4150 = rArr[10];
                self.NP04_DCS_01_2CV4420 = rArr[11];
                self.NP04_DCS_01_2CV4223 = rArr[12];
                self.NP04_DCS_01_2CV4202 = rArr[13];
                self.NP04_DCS_01_2PT4200 = rArr[14];
                self.NP04_DCS_01_2LT4200 = rArr[15];
                self.NP04_DCS_01_2CV4204 = rArr[16];
                self.NP04_DCS_01_2PV4100 = rArr[17];
                self.NP04_DCS_01_2PV4109 = rArr[18];
                self.NP04_DCS_01_2PV4110 = rArr[19];
                self.NP04_DCS_01_2FT4432 = rArr[20];
                self.NP04_DCS_01_2C4432 = rArr[21];
                self.NP04_DCS_01_2CV4410 = rArr[22];
                self.NP04_DCS_01_2CV4400 = rArr[23];
                self.NP04_DCS_01_2PDT4915 = rArr[24];
                self.NP04_DCS_01_2PT4910 = rArr[25];
                self.NP04_DCS_01_2PV4560 = rArr[26];
                self.NP04_DCS_01_2PV4561 = rArr[27];
                self.NP04_DCS_01_2P4500 = rArr[28];
                self.NP04_DCS_01_2P4510 = rArr[29];
                self.NP04_DCS_01_2FT4592 = rArr[30];
                self.NP04_DCS_01_2PDT4500 = rArr[31];

                console.log("interval occured");
            });

            $http.get("php-db-conn/alias.conn.timestamp.php").then(function (ts) {
                self.timestamp = ts.data.records;
            })
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