'use strict';
angular.module('purity', []).component('purity', {
    templateUrl: 'purity/purity.template.html',
    controller: function purityController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Purity monitors";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=purity").then(function (resultArr) {

                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_DCS_01_PrM0_PrM_corrected_charge_ratio = rArr[0];
                self.NP04_DCS_01_PrM0_PrM_corrected_e_lifetime = rArr[1];
                self.NP04_DCS_01_PrM0_PrM_Q_C = rArr[2];
                self.NP04_DCS_01_PrM0_PrM_T_C = rArr[3];
                self.NP04_DCS_01_PrM0_PrM_BL_C = rArr[4];
                self.NP04_DCS_01_PrM0_PrM_Q_A = rArr[5];
                self.NP04_DCS_01_PrM0_PrM_T_A = rArr[6];
                self.NP04_DCS_01_PrM0_PrM_BL_A = rArr[7];
                self.NP04_DCS_01_PrM0_PrM_V_A_Set = rArr[8];
                self.NP04_DCS_01_PrM0_PrM_V_C_Set = rArr[9];
                self.NP04_DCS_01_PrM0_PrM_V_A = rArr[10];
                self.NP04_DCS_01_PrM0_PrM_V_C = rArr[11];
                self.NP04_DCS_01_PrM0_PrM_I_A = rArr[12];
                self.NP04_DCS_01_PrM0_PrM_I_C = rArr[13];
                self.NP04_DCS_01_PrM0_PrM_corrected_Q_C = rArr[14];
                self.NP04_DCS_01_PrM0_PrM_corrected_Q_A = rArr[15];
                self.NP04_DCS_01_PrM0_PrM_Trans_Corr = rArr[16];
                self.NP04_DCS_01_PrM1_PrM_corrected_charge_ratio = rArr[17];
                self.NP04_DCS_01_PrM1_PrM_corrected_e_lifetime = rArr[18];
                self.NP04_DCS_01_PrM1_PrM_Q_C = rArr[19];
                self.NP04_DCS_01_PrM1_PrM_T_C = rArr[20];
                self.NP04_DCS_01_PrM1_PrM_BL_C = rArr[21];
                self.NP04_DCS_01_PrM1_PrM_Q_A = rArr[22];
                self.NP04_DCS_01_PrM1_PrM_T_A = rArr[23];
                self.NP04_DCS_01_PrM1_PrM_BL_A = rArr[24];
                self.NP04_DCS_01_PrM1_PrM_V_A_Set = rArr[25];
                self.NP04_DCS_01_PrM1_PrM_V_C_Set = rArr[26];
                self.NP04_DCS_01_PrM1_PrM_V_A = rArr[27];
                self.NP04_DCS_01_PrM1_PrM_V_C = rArr[28];
                self.NP04_DCS_01_PrM1_PrM_I_A = rArr[29];
                self.NP04_DCS_01_PrM1_PrM_I_C = rArr[30];
                self.NP04_DCS_01_PrM1_PrM_corrected_Q_C = rArr[31];
                self.NP04_DCS_01_PrM1_PrM_corrected_Q_A = rArr[32];
                self.NP04_DCS_01_PrM1_PrM_Trans_Corr = rArr[33];
                self.NP04_DCS_01_PrM2_PrM_corrected_charge_ratio = rArr[34];
                self.NP04_DCS_01_PrM2_PrM_corrected_e_lifetime = rArr[35];
                self.NP04_DCS_01_PrM2_PrM_Q_C = rArr[36];
                self.NP04_DCS_01_PrM2_PrM_T_C = rArr[37];
                self.NP04_DCS_01_PrM2_PrM_BL_C = rArr[38];
                self.NP04_DCS_01_PrM2_PrM_Q_A = rArr[39];
                self.NP04_DCS_01_PrM2_PrM_T_A = rArr[40];
                self.NP04_DCS_01_PrM2_PrM_BL_A = rArr[41];
                self.NP04_DCS_01_PrM2_PrM_V_A_Set = rArr[42];
                self.NP04_DCS_01_PrM2_PrM_V_C_Set = rArr[43];
                self.NP04_DCS_01_PrM2_PrM_V_A = rArr[44];
                self.NP04_DCS_01_PrM2_PrM_V_C = rArr[45];
                self.NP04_DCS_01_PrM2_PrM_I_A = rArr[46];
                self.NP04_DCS_01_PrM2_PrM_I_C = rArr[47];
                self.NP04_DCS_01_PrM2_PrM_corrected_Q_C = rArr[48];
                self.NP04_DCS_01_PrM2_PrM_corrected_Q_A = rArr[49];
                self.NP04_DCS_01_PrM2_PrM_Trans_Corr = rArr[50];

                console.log("interval occured");
                self.timestamp = rArr[rArr.length-1] * 1000;
            });

            };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();

            self.promise = $interval(self.reload, 60000);
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