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
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=saleve")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_MHT0100AI = res["47878785489690"]?res["47878785489690"][0]:"N/A";
                    self.NP04_TT0100AI = res["47878802266906"]?res["47878802266906"][0]:"N/A";
                    self.NP04_PT0106AI = res["47878819044122"]?res["47878819044122"][0]:"N/A";
                    self.B4_SS_01 = res["47884573629210"]?res["47884573629210"][0]:"N/A";
                    self.DS_SS_01 = res["47884707846938"]?res["47884707846938"][0]:"N/A";
                    self.TC_SS_01 = res["47884540074778"]?res["47884540074778"][0]:"N/A";
                    self.TC_SS_02 = res["47884506520346"]?res["47884506520346"][0]:"N/A";
                    self.TC_SS_03 = res["47884623960858"]?res["47884623960858"][0]:"N/A";
                    self.B3_SS_01 = res["47884590406426"]?res["47884590406426"][0]:"N/A";
                    self.B2_SS_01 = res["47884607183642"]?res["47884607183642"][0]:"N/A";
                    self.BC_SS_01 = res["47884808510234"]?res["47884808510234"][0]:"N/A";
                    self.BC_SS_03 = res["47884791733018"]?res["47884791733018"][0]:"N/A";
                    self.BC_SS_04 = res["47884741401370"]?res["47884741401370"][0]:"N/A";
                    self.MEM_SS_03 = res["47884875619098"]?res["47884875619098"][0]:"N/A";
                    self.MEM_SS_02 = res["47884657515290"]?res["47884657515290"][0]:"N/A";
                    self.MEM_SS_01 = res["47884892396314"]?res["47884892396314"][0]:"N/A";
                    self.MC_LSS_04 = res["47884389079834"]?res["47884389079834"][0]:"N/A";
                    self.MC_LSS_03 = res["47884405857050"]?res["47884405857050"][0]:"N/A";
                    self.MC_LSS_02 = res["47884489743130"]?res["47884489743130"][0]:"N/A";
                    self.MC_LSS_01 = res["47884439411482"]?res["47884439411482"][0]:"N/A";
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