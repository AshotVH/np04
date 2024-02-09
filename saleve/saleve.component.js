'use strict';
angular.module('saleve', []).component('saleve', {
    templateUrl: 'saleve/saleve.template.html',
    controller: function saleveController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Saleve";
        this.natalie = 1;
        const self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=saleve")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.B4_SS_01 = res["47884573629210"][0];
                    self.DS_SS_01 = res["47884707846938"][0];
                    self.TC_SS_01 = res["47884540074778"][0];
                    self.TC_SS_02 = res["47884506520346"][0];
                    self.TC_SS_03 = res["47884623960858"][0];
                    self.B3_SS_01 = res["47884590406426"][0];
                    self.B2_SS_01 = res["47884607183642"][0];
                    self.BC_SS_01 = res["47884808510234"][0];
                    self.BC_SS_03 = res["47884791733018"][0];
                    self.BC_SS_04 = res["47884741401370"][0];
                    self.MEM_SS_03 = res["47884875619098"][0];
                    self.MEM_SS_02 = res["47884657515290"][0];
                    self.MEM_SS_01 = res["47884892396314"][0];
                    self.MC_LSS_04 = res["47884389079834"][0];
                    self.MC_LSS_03 = res["47884405857050"][0];
                    self.MC_LSS_02 = res["47884489743130"][0];
                    self.MC_LSS_01 = res["47884439411482"][0];
                });
        };

        this.promise;
        this.reload();
        $scope.start = function () {
            $scope.stop();
            self.promise = $interval(self.reload, 30000);
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