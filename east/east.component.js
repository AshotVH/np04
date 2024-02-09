'use strict';
angular.module('east', []).component('east', {
    templateUrl: 'east/east.template.html',
    controller: function eastController($scope, $http, $interval) {
        this.pageTitle = "NP04 Saleve side GTT probes";
        this.natalie = 1;
        this.TT0101 = "";
        const self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=east")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.NP04_DCS_01_TE0127 = res["47892375011610"][0];
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