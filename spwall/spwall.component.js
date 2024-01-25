'use strict';
angular.module('spwall', []).component('spwall', {
    templateUrl: 'spwall/spwall.template.html',
    controller: function spwallController($scope, $http, $interval) {
        this.pageTitle = "NP04 Single Phase wall temperatures";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=spwall").then(function (resultArr) {

                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];

                self.NP04_DCS_01_TE0115_ = rArr[4];
                self.NP04_DCS_01_TE0116_ = rArr[3];
                self.NP04_DCS_01_TE0117_ = rArr[5];
                self.NP04_DCS_01_TE0118_ = rArr[6];
                self.NP04_DCS_01_TE0119_ = rArr[7];

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