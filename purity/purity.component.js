'use strict';
angular.module('purity', []).component('purity', {
    templateUrl: 'purity/purity.template.html',
    controller: function purityController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Purity monitors";
        this.natalie = 1;
        const self = this;
        $("#btncheck0").change(function(){
            $("#data_table_0").toggle();
        });
        $("#btncheck1").change(function(){
            $("#data_table_1").toggle();
        });
        $("#btncheck2").change(function(){
            $("#data_table_2").toggle();
        });
   
        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=purity")
                .then(function (result) {
                    const res = result.data;
                    // console.log(res);
                    self.NP04_DCS_01_PrM0_PrM_V_A_Set = res["47928748018458"]?res["47928748018458"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_V_A = res["47928748018970"]?res["47928748018970"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_I_A = res["47928748019738"]?res["47928748019738"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_V_C_Set = res["47928748018714"]?res["47928748018714"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_V_C = res["47928748019226"]?res["47928748019226"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_I_C = res["47928748023578"]?res["47928748023578"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_corrected_charge_ratio = res["47928748016154"]?res["47928748016154"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_corrected_e_lifetime = res["47928748016410"]?res["47928748016410"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_Q_C = res["47928748016922"]?res["47928748016922"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_T_C = res["47928748017178"]?res["47928748017178"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_BL_C = res["47928748017434"]?res["47928748017434"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_Q_A = res["47928748017690"]?res["47928748017690"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_T_A = res["47928748017946"]?res["47928748017946"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_BL_A = res["47928748018202"]?res["47928748018202"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_corrected_Q_C = res["47928748024346"]?res["47928748024346"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_corrected_Q_A = res["47928748024602"]?res["47928748024602"][0]:"N/A";
                    self.NP04_DCS_01_PrM0_PrM_Trans_Corr = res["47928748026394"]?res["47928748026394"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_V_A_Set = res["47928764795674"]?res["47928764795674"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_V_A = res["47928764796186"]?res["47928764796186"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_I_A = res["47928764796954"]?res["47928764796954"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_V_C_Set = res["47928764795930"]?res["47928764795930"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_V_C = res["47928764796442"]?res["47928764796442"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_I_C = res["47928764800794"]?res["47928764800794"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_corrected_charge_ratio = res["47928764793370"]?res["47928764793370"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_corrected_e_lifetime = res["47928764793626"]?res["47928764793626"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_Q_C = res["47928764794138"]?res["47928764794138"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_T_C = res["47928764794394"]?res["47928764794394"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_BL_C = res["47928764794650"]?res["47928764794650"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_Q_A = res["47928764794906"]?res["47928764794906"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_T_A = res["47928764795162"]?res["47928764795162"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_BL_A = res["47928764795418"]?res["47928764795418"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_corrected_Q_C = res["47928764801562"]?res["47928764801562"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_corrected_Q_A = res["47928764801818"]?res["47928764801818"][0]:"N/A";
                    self.NP04_DCS_01_PrM1_PrM_Trans_Corr = res["47928764803610"]?res["47928764803610"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_V_A_Set = res["47928781572890"]?res["47928781572890"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_V_A = res["47928781573402"]?res["47928781573402"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_I_A = res["47928781574170"]?res["47928781574170"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_V_C_Set = res["47928781573146"]?res["47928781573146"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_V_C = res["47928781573658"]?res["47928781573658"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_I_C = res["47928781578010"]?res["47928781578010"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_corrected_charge_ratio = res["47928781570586"]?res["47928781570586"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_corrected_e_lifetime = res["47928781570842"]?res["47928781570842"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_Q_C = res["47928781571354"]?res["47928781571354"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_T_C = res["47928781571610"]?res["47928781571610"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_BL_C = res["47928781571866"]?res["47928781571866"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_Q_A = res["47928781572122"]?res["47928781572122"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_T_A = res["47928781572378"]?res["47928781572378"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_BL_A = res["47928781572634"]?res["47928781572634"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_corrected_Q_C = res["47928781578778"]?res["47928781578778"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_corrected_Q_A = res["47928781579034"]?res["47928781579034"][0]:"N/A";
                    self.NP04_DCS_01_PrM2_PrM_Trans_Corr = res["47928781580826"]?res["47928781580826"][0]:"N/A";

                    self.NP04_MHT0100AI = res["47878785489690"]?res["47878785489690"][0]:"N/A";
                    self.NP04_TT0100AI = res["47878802266906"]?res["47878802266906"][0]:"N/A";
                    self.NP04_PT0106AI = res["47878819044122"]?res["47878819044122"][0]:"N/A";
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