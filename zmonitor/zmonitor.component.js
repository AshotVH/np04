'use strict';
angular.module('zmonitor', []).component('zmonitor', {
    templateUrl: 'zmonitor/zmonitor.template.html',
    controller: function zmonitorController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Ground impedance monitor";
        this.natalie = 1;
        this.TT0101 = "";
        const self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=zmonitor")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_DCS_01_gizmo_RES = res["47861572043290"]?res["47861572043290"][0]:"N/A";
                    self.NP04_DCS_01_gizmo_TH = res["47861572043546"]?res["47861572043546"][0]:"N/A";
                    self.NP04_DCS_01_gizmo_mag = res["47861572043802"]?res["47861572043802"][0]:"N/A";
                    self.NP04_DCS_01_gizmo_I = res["47861572044058"]?res["47861572044058"][0]:"N/A";
                    self.NP04_DCS_01_gizmo_Q = res["47861572044314"]?res["47861572044314"][0]:"N/A";
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