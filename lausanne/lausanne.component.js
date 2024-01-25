'use strict';
angular.module('lausanne', []).component('lausanne', {
    templateUrl: 'lausanne/lausanne.template.html',
    controller: function lausanneController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Lausanne side";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=lausanne").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];
                self.MC_LJS_03 = rArr[3];
                self.MC_LJS_02 = rArr[4];
                self.TC_LS_02 = rArr[5];
                self.BC_LS_03 = rArr[6];
                self.B3_LS_01 = rArr[7];
                self.MEM_LS_03 = rArr[8];
                self.MEM_LS_02 = rArr[9];
                self.DS_LS_01 = rArr[10];
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