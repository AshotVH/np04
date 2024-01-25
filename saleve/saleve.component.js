'use strict';
angular.module('saleve', []).component('saleve', {
    templateUrl: 'saleve/saleve.template.html',
    controller: function saleveController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Saleve";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=saleve").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];
                self.MC_LSS_04 = rArr[3];
                self.MC_LSS_03 = rArr[4];
                self.MC_LSS_01 = rArr[5];
                self.MC_LSS_02 = rArr[6];
                self.TC_SS_02 = rArr[7];
                self.TC_SS_01 = rArr[8];
                self.B4_SS_01 = rArr[9];
                self.B3_SS_01 = rArr[10];
                self.B2_SS_01 = rArr[11];
                self.TC_SS_03 = rArr[12];
                self.MEM_SS_02 = rArr[13];
                self.DS_SS_01 = rArr[14];
                self.BC_SS_04 = rArr[15];
                self.BC_SS_03 = rArr[16];
                self.BC_SS_01 = rArr[17];
                self.MEM_SS_03 = rArr[18];
                self.MEM_SS_01 = rArr[19];
            self.timestamp = rArr[rArr.length-1] * 1000;
            });
        };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();

            self.promise = $interval(self.reload, 150000);
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