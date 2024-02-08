'use strict';
angular.module('purity', []).component('purity', {
    templateUrl: 'purity/purity.template.html',
    controller: function purityController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Purity monitors";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=purity")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);

                    self.NP04_DCS_01_PrM0_PrM_V_A_Set = res["47928748018458"][0];
                    self.NP04_DCS_01_PrM0_PrM_V_A = res["47928748018970"][0];
                    self.NP04_DCS_01_PrM0_PrM_I_A = res["47928748019738"][0];
                    self.NP04_DCS_01_PrM0_PrM_V_C_Set = res["47928748018714"][0];
                    self.NP04_DCS_01_PrM0_PrM_V_C = res["47928748019226"][0];
                    self.NP04_DCS_01_PrM0_PrM_I_C = res["47928748023578"][0];
                    self.NP04_DCS_01_PrM0_PrM_corrected_charge_ratio = res["47928748016154"][0];
                    self.NP04_DCS_01_PrM0_PrM_corrected_e_lifetime = res["47928748016410"][0];
                    self.NP04_DCS_01_PrM0_PrM_Q_C = res["47928748016922"][0];
                    self.NP04_DCS_01_PrM0_PrM_T_C = res["47928748017178"][0];
                    self.NP04_DCS_01_PrM0_PrM_BL_C = res["47928748017434"][0];
                    self.NP04_DCS_01_PrM0_PrM_Q_A = res["47928748017690"][0];
                    self.NP04_DCS_01_PrM0_PrM_T_A = res["47928748017946"][0];
                    self.NP04_DCS_01_PrM0_PrM_BL_A = res["47928748018202"][0];
                    self.NP04_DCS_01_PrM0_PrM_corrected_Q_C = res["47928748024346"][0];
                    self.NP04_DCS_01_PrM0_PrM_corrected_Q_A = res["47928748024602"][0];
                    self.NP04_DCS_01_PrM0_PrM_Trans_Corr = res["47928748026394"][0];
                    self.NP04_DCS_01_PrM1_PrM_V_A_Set = res["47928764795674"][0];
                    self.NP04_DCS_01_PrM1_PrM_V_A = res["47928764796186"][0];
                    self.NP04_DCS_01_PrM1_PrM_I_A = res["47928764796954"][0];
                    self.NP04_DCS_01_PrM1_PrM_V_C_Set = res["47928764795930"][0];
                    self.NP04_DCS_01_PrM1_PrM_V_C = res["47928764796442"][0];
                    self.NP04_DCS_01_PrM1_PrM_I_C = res["47928764800794"][0];
                    self.NP04_DCS_01_PrM1_PrM_corrected_charge_ratio = res["47928764793370"][0];
                    self.NP04_DCS_01_PrM1_PrM_corrected_e_lifetime = res["47928764793626"][0];
                    self.NP04_DCS_01_PrM1_PrM_Q_C = res["47928764794138"][0];
                    self.NP04_DCS_01_PrM1_PrM_T_C = res["47928764794394"][0];
                    self.NP04_DCS_01_PrM1_PrM_BL_C = res["47928764794650"][0];
                    self.NP04_DCS_01_PrM1_PrM_Q_A = res["47928764794906"][0];
                    self.NP04_DCS_01_PrM1_PrM_T_A = res["47928764795162"][0];
                    self.NP04_DCS_01_PrM1_PrM_BL_A = res["47928764795418"][0];
                    self.NP04_DCS_01_PrM1_PrM_corrected_Q_C = res["47928764801562"][0];
                    self.NP04_DCS_01_PrM1_PrM_corrected_Q_A = res["47928764801818"][0];
                    self.NP04_DCS_01_PrM1_PrM_Trans_Corr = res["47928764803610"][0];
                    self.NP04_DCS_01_PrM2_PrM_V_A_Set = res["47928781572890"][0];
                    self.NP04_DCS_01_PrM2_PrM_V_A = res["47928781573402"][0];
                    self.NP04_DCS_01_PrM2_PrM_I_A = res["47928781574170"][0];
                    self.NP04_DCS_01_PrM2_PrM_V_C_Set = res["47928781573146"][0];
                    self.NP04_DCS_01_PrM2_PrM_V_C = res["47928781573658"][0];
                    self.NP04_DCS_01_PrM2_PrM_I_C = res["47928781578010"][0];
                    self.NP04_DCS_01_PrM2_PrM_corrected_charge_ratio = res["47928781570586"][0];
                    self.NP04_DCS_01_PrM2_PrM_corrected_e_lifetime = res["47928781570842"][0];
                    self.NP04_DCS_01_PrM2_PrM_Q_C = res["47928781571354"][0];
                    self.NP04_DCS_01_PrM2_PrM_T_C = res["47928781571610"][0];
                    self.NP04_DCS_01_PrM2_PrM_BL_C = res["47928781571866"][0];
                    self.NP04_DCS_01_PrM2_PrM_Q_A = res["47928781572122"][0];
                    self.NP04_DCS_01_PrM2_PrM_T_A = res["47928781572378"][0];
                    self.NP04_DCS_01_PrM2_PrM_BL_A = res["47928781572634"][0];
                    self.NP04_DCS_01_PrM2_PrM_corrected_Q_C = res["47928781578778"][0];
                    self.NP04_DCS_01_PrM2_PrM_corrected_Q_A = res["47928781579034"][0];
                    self.NP04_DCS_01_PrM2_PrM_Trans_Corr = res["47928781580826"][0];


                });

        };

        this.promise;

        this.reload();

        $scope.start = function () {
            $scope.stop();

            self.promise = $interval(self.reload, 60000);
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