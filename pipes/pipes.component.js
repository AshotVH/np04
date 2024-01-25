'use strict';
angular.module('pipes', []).component('pipes', {
    templateUrl: 'pipes/pipes.template.html',
    controller: function pipesController($scope, $http, $interval) {
        this.pageTitle = "NP04 Pipe temperatures";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=pipes").then(function (resultArr) {

                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];

                self.NP04_DCS_01_TE0085_ = rArr[3];
                self.NP04_DCS_01_TE0086_ = rArr[4];
                self.NP04_DCS_01_TE0087_ = rArr[5];
                self.NP04_DCS_01_TE0088_ = rArr[6];
                self.NP04_DCS_01_TE0089_ = rArr[7];
                self.NP04_DCS_01_TE0090_ = rArr[8];
                self.NP04_DCS_01_TE0091_ = rArr[9];
                self.NP04_DCS_01_TE0092_ = rArr[10];
                self.NP04_DCS_01_TE0093_ = rArr[11];
                self.NP04_DCS_01_TE0094_ = rArr[12];
                self.NP04_DCS_01_TE0095_ = rArr[13];
                self.NP04_DCS_01_TE0096_ = rArr[14];

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