'use strict';
angular.module('splevel2', []).component('splevel2', {
    templateUrl: 'splevel2/splevel2.template.html',
    controller: function splevel2Controller($scope, $http, $interval) {
        this.pageTitle = "NP04 Liquid level temperatures";
        this.natalie = 1;
        let self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=splevel2")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.NP04_DCS_01_TE0097_ = res["47891871695130"][0];
                    self.NP04_DCS_01_TE0098_ = res["47891888472346"][0];
                    self.NP04_DCS_01_TE0099_ = res["47891905249562"][0];
                    self.NP04_DCS_01_TE0100_ = res["47891922026778"][0];
                    self.NP04_DCS_01_TE0101_ = res["47891938803994"][0];
                    self.NP04_DCS_01_TE0102_ = res["47891955581210"][0];

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