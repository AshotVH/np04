'use strict';
angular.module('xenon', []).component('xenon', {
    templateUrl: 'xenon/xenon.template.html',
    controller: function xenonController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Xenon";
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=xenon")
                .then(function (result) {
                    const res = result.data;
                    // console.log(res);
                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.NP04_DCS_01_xenon = res["47879389469466"][0];
                    self.NP04_DCS_01_xenon_weight = res["48021878342170"][0];
                    self.NP04_4PT4150 = res["48021643460890"][0];
                    self.NP04_4PT4910 = res["47931835023642"][0];

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