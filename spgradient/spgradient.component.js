'use strict';
angular.module('spgradient', []).component('spgradient', {
    templateUrl: 'spgradient/spgradient.template.html',
    controller: function spgradientController($scope, $http, $interval) {
        this.pageTitle = "NP04 Single Phase ground planes temperatures";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=spgradient")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_DCS_01_TE0073_ = res["47891469041946"]?res["47891469041946"][0]:"N/A";
                    self.NP04_DCS_01_TE0074_ = res["47891485819162"]?res["47891485819162"][0]:"N/A";
                    self.NP04_DCS_01_TE0075_ = res["47891502596378"]?res["47891502596378"][0]:"N/A";
                    self.NP04_DCS_01_TE0076_ = res["47891519373594"]?res["47891519373594"][0]:"N/A";
                    self.NP04_DCS_01_TE0077_ = res["47891536150810"]?res["47891536150810"][0]:"N/A";
                    self.NP04_DCS_01_TE0078_ = res["47891552928026"]?res["47891552928026"][0]:"N/A";
                    self.NP04_DCS_01_TE0079_ = res["47891569705242"]?res["47891569705242"][0]:"N/A";
                    self.NP04_DCS_01_TE0080_ = res["47891586482458"]?res["47891586482458"][0]:"N/A";
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