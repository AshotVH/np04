'use strict';
angular.module('lausanne', []).component('lausanne', {
    templateUrl: 'lausanne/lausanne.template.html',
    controller: function lausanneController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Lausanne side";
        this.natalie = 1;
        const self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=lausanne")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.DS_LS_01 = res["47884355525402"][0];
                    self.TC_LS_02 = res["47884238084890"][0];
                    self.B3_LS_01 = res["47884305193754"][0];
                    self.BC_LS_03 = res["47884271639322"][0];
                    self.MEM_LS_03 = res["47884321970970"][0];
                    self.MEM_LS_02 = res["47884338748186"][0];
                    self.MC_LJS_03 = res["47884187753242"][0];
                    self.MC_LJS_02 = res["47884221307674"][0];
                });
        };

        this.promise;
        this.reload();
        $scope.start = function () {
            $scope.stop();
            self.promise = $interval(self.reload, 30000);
        };
        $scope.stop = function () {
            $interval.cancel(self.promise);
        };
        $scope.start();
        $scope.$on('$destroy', function () {
            $scope.stop();
        });
    }
});