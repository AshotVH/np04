'use strict';
angular.module('bottom', []).component('bottom', {
    templateUrl: 'bottom/bottom.template.html',
    controller: function bottomController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 bottom side GTT probes";
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=bottom").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];
                self.NP04_DCS_01_TE0121 = rArr[3];
                self.NP04_DCS_01_TE0123 = rArr[4];
                self.NP04_DCS_01_TE0135 = rArr[5];
                self.NP04_DCS_01_TE0140 = rArr[6];

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