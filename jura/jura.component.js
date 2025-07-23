'use strict';
angular.module('jura', []).component('jura', {
    templateUrl: 'jura/jura.template.html',
    controller: function juraController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Jura side";
        this.natalie = 1;
        let self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=jura")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.DS_JS_01 = res["47884120644378"]?res["47884120644378"][0]:"N/A";
                    self.TC_JS_02 = res["47884036758298"]?res["47884036758298"][0]:"N/A";
                    self.B3_JS_01 = res["47884103867162"]?res["47884103867162"][0]:"N/A";
                    self.BC_JS_03 = res["47884070312730"]?res["47884070312730"][0]:"N/A";
                    self.MC_BJS_03 = res["47884137421594"]?res["47884137421594"][0]:"N/A";
                    self.MC_BJS_02 = res["47884154198810"]?res["47884154198810"][0]:"N/A";
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