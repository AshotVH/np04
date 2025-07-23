'use strict';
angular.module('spbottom', []).component('spbottom', {
    templateUrl: 'spbottom/spbottom.template.html',
    controller: function spbottomController($scope, $http, $interval) {
        this.pageTitle = "NP04 Single Phase bottom warm vessel temperatures";
        this.natalie = 1;
        let self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=spbottom")
                .then(function (result) {
                    const res = result.data;
                    // console.log(res);
                    self.NP04_DCS_01_TE0145_ = res["47892677001498"]?res["47892677001498"][0]:"N/A";
                    self.NP04_DCS_01_TE0146_ = res["47892693778714"]?res["47892693778714"][0]:"N/A";
                    self.NP04_DCS_01_TE0147_ = res["47892710555930"]?res["47892710555930"][0]:"N/A";
                    self.NP04_DCS_01_TE0148_ = res["47892727333146"]?res["47892727333146"][0]:"N/A";
                    self.NP04_DCS_01_TE0149_ = res["47892744110362"]?res["47892744110362"][0]:"N/A";
                    self.NP04_DCS_01_TE0150_ = res["47892760887578"]?res["47892760887578"][0]:"N/A";
                    self.NP04_DCS_01_TE0151_ = res["47892777664794"]?res["47892777664794"][0]:"N/A";
                    self.NP04_DCS_01_TE0152_ = res["47892794442010"]?res["47892794442010"][0]:"N/A";
                    self.NP04_DCS_01_TE0153_ = res["47892811219226"]?res["47892811219226"][0]:"N/A";
                    self.NP04_DCS_01_TE0154_ = res["47892827996442"]?res["47892827996442"][0]:"N/A";
                    self.NP04_DCS_01_TE0155_ = res["47892844773658"]?res["47892844773658"][0]:"N/A";
                    self.NP04_DCS_01_TE0156_ = res["47892861550874"]?res["47892861550874"][0]:"N/A";
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