'use strict';
angular.module('floor', []).component('floor', {
    templateUrl: 'floor/floor.template.html',
    controller: function floorController($scope, $http, $interval) {
        this.pageTitle = "NP04 Floor temperatures";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=floor").then(function (resultArr) {

                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];

                self.NP04_DCS_01_TE0103_ = rArr[3];
                self.NP04_DCS_01_TE0104_ = rArr[4];
                self.NP04_DCS_01_TE0105_ = rArr[5];
                self.NP04_DCS_01_TE0106_ = rArr[6];
                self.NP04_DCS_01_TE0107_ = rArr[7];
                self.NP04_DCS_01_TE0108_ = rArr[8];
                self.NP04_DCS_01_TE0109_ = rArr[9];
                self.NP04_DCS_01_TE0110_ = rArr[10];
                self.NP04_DCS_01_TE0111_ = rArr[11];
                self.NP04_DCS_01_TE0112_ = rArr[12];
                self.NP04_DCS_01_TE0113_ = rArr[13];
                self.NP04_DCS_01_TE0114_ = rArr[14];

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