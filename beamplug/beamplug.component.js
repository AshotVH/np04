'use strict';
angular.module('beamplug', []).component('beamplug', {
    templateUrl: 'beamplug/beamplug.template.html',
    controller: function beamplugController($http, $scope, $q, $interval) {
        this.pageTitle = "NP04 Beamplug";
        this.natalie = 1;
        let self = this;



        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=beamplug").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                console.log(res);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }


                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];

                self.NP04_2PT0100AI = rArr[3];
                self.NP04_2PT0101AI = rArr[4];
                self.NP04_2TT0100AI = rArr[5];
                self.NP04_2TT0101AI = rArr[6];
                self.NP04_2PT0100AIR = rArr[7];
                self.NP04_2PT0101AIR = rArr[8];
                self.NP04_2IT0100AI = rArr[9];

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