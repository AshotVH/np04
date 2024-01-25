'use strict';
angular.module('splevel2', []).component('splevel2', {
    templateUrl: 'splevel2/splevel2.template.html',
    controller: function splevel2Controller($scope, $http, $interval) {
        this.pageTitle = "NP04 Liquid level temperatures";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=splevel2").then(function (resultArr) {

                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];

                self.NP04_DCS_01_TE0097_ = rArr[3];
                self.NP04_DCS_01_TE0098_ = rArr[4];
                self.NP04_DCS_01_TE0099_ = rArr[5];
                self.NP04_DCS_01_TE0100_ = rArr[6];
                self.NP04_DCS_01_TE0101_ = rArr[7];
                self.NP04_DCS_01_TE0102_ = rArr[8];

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