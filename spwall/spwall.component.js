'use strict';
angular.module('spwall', []).component('spwall', {
    templateUrl: 'spwall/spwall.template.html',
    controller: function spwallController($scope, $http, $interval) {
        this.pageTitle = "NP04 Single Phase wall temperatures";
        this.natalie = 1;
        const self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=spwall")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_DCS_01_TE0115_ = res["47892173685018"]?res["47892173685018"][0]:"N/A";
                    self.NP04_DCS_01_TE0116_ = res["47892190462234"]?res["47892190462234"][0]:"N/A";
                    self.NP04_DCS_01_TE0117_ = res["47892207239450"]?res["47892207239450"][0]:"N/A";
                    self.NP04_DCS_01_TE0118_ = res["47892224016666"]?res["47892224016666"][0]:"N/A";
                    self.NP04_DCS_01_TE0119_ = res["47892240793882"]?res["47892240793882"][0]:"N/A";
                    self.NP04_MHT0100AI = res["47878785489690"]?res["47878785489690"][0]:"N/A";
                    self.NP04_TT0100AI = res["47878802266906"]?res["47878802266906"][0]:"N/A";
                    self.NP04_PT0106AI = res["47878819044122"]?res["47878819044122"][0]:"N/A";
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