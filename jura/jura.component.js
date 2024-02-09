'use strict';
angular.module('jura', []).component('jura', {
    templateUrl: 'jura/jura.template.html',
    controller: function juraController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Jura side";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=jura").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];
                self.TC_JS_02 = rArr[3];
                self.BC_JS_03 = rArr[4];
                self.B3_JS_01 = rArr[5];
                self.DS_JS_01 = rArr[6];
                self.MC_BJS_03 = rArr[7];
                self.MC_BJS_02 = rArr[8];
            self.timestamp = rArr[rArr.length-1] * 1000;
            });
        };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();

            self.promise = $interval(self.reload, 30000);
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