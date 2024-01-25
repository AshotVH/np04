'use strict';
angular.module('zmonitor', []).component('zmonitor', {
    templateUrl: 'zmonitor/zmonitor.template.html',
    controller: function zmonitorController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Ground impedance monitor";
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=zmonitor").then(function (resultArr) {

                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_DCS_01_gizmo_RES = rArr[0];
                self.NP04_DCS_01_gizmo_TH = rArr[1];
                self.NP04_DCS_01_gizmo_mag = rArr[2];
                self.NP04_DCS_01_gizmo_I = rArr[3];
                self.NP04_DCS_01_gizmo_Q = rArr[4];
                self.NP04_MHT0100AI = rArr[5];
                self.NP04_TT0100AI = rArr[6];
                self.NP04_PT0106AI = rArr[7];

                console.log("interval occured");
                self.timestamp = rArr[rArr.length-1] * 1000;
            });
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