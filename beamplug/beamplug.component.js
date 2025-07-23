'use strict';
angular.module('beamplug', []).component('beamplug', {
    templateUrl: 'beamplug/beamplug.template.html',
    controller: function beamplugController($http, $scope, $q, $interval) {
        this.pageTitle = "NP04 Beamplug";
        this.natalie = 1;
        const self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=beamplug")
                .then(function (result) {
                    const res = result.data;
                    // console.log(res);
                    self.NP04_2PT0100AI = res["47878902930202"]?res["47878902930202"][0]:"N/A";
                    self.NP04_2PT0100AIR = res["47883114011418"]?res["47883114011418"][0]:"N/A";
                    self.NP04_2PT0101AI = res["47878919707418"]?res["47878919707418"][0]:"N/A";
                    self.NP04_2PT0101AIR = res["47883130788634"]?res["47883130788634"][0]:"N/A";
                    self.NP04_2TT0100AI = res["47878953261850"]?res["47878953261850"][0]:"N/A";
                    self.NP04_2TT0101AI = res["47878970039066"]?res["47878970039066"][0]:"N/A";
                    self.NP04_2IT0100AI = res["47895881449754"]?res["47895881449754"][0]:"N/A";
                    self.NP04_MHT0100AI = res["47878785489690"]?res["47878785489690"][0]:"N/A";
                    self.NP04_TT0100AI = res["47878802266906"]?res["47878802266906"][0]:"N/A";
                    self.NP04_PT0106AI = res["47878819044122"]?res["47878819044122"][0]:"N/A";
                });
            console.log("interval occured");
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