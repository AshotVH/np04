'use strict';
angular.module('bottom', []).component('bottom', {
    templateUrl: 'bottom/bottom.template.html',
    controller: function bottomController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 bottom side GTT probes";
        this.natalie = 1;
        this.TT0101 = "";
        const self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=bottom")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.NP04_DCS_01_TE0121 = res["47892274348314"][0];
                    self.NP04_DCS_01_TE0123 = res["47892307902746"][0];
                    self.NP04_DCS_01_TE0135 = res["47892509229338"][0];
                    self.NP04_DCS_01_TE0140 = res["47892593115418"][0];


                });

        };

        this.promise;

        this.reload();

        $scope.start = function () {
            $scope.stop();

            self.promise = $interval(self.reload, 60000);
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