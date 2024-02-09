'use strict';
angular.module('crate', []).component('crate', {
    templateUrl: 'crate/crate.template.html',
    controller: ['$routeParams', '$scope', '$http', '$window', '$interval',
        function crateController($routeParams, $scope, $http, $window, $interval) {
        this.crateId = $routeParams.crateId;
        this.pageTitle = "Crate " + this.crateId;
        this.natalie = 1;
        this.TT0101 = "";
        let self = this;

        this.crateChanger = function(crId) {
            $window.location.href = "#!/crate/" + crId;
            console.log($window.location.href);
        }

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=crate" + self.crateId).then(function (resultArr) {

                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_1V8_I = rArr[0];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_1V8_V = rArr[1];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_2V8_I = rArr[2];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_2V8_V = rArr[3];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_3V6_I = rArr[4];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_3V6_V = rArr[5];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_5V_I = rArr[6];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_5V_V = rArr[7];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_TEMP = rArr[8];
                self.NP04_DCS_01_WIB_crate0_slot1_POWER_WIB_VCC = rArr[9];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_1V8_I = rArr[10];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_1V8_V = rArr[11];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_2V8_I = rArr[12];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_2V8_V = rArr[13];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_3V6_I = rArr[14];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_3V6_V = rArr[15];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_5V_I = rArr[16];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_5V_V = rArr[17];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_TEMP = rArr[18];
                self.NP04_DCS_01_WIB_crate0_slot2_POWER_WIB_VCC = rArr[19];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_1V8_I = rArr[20];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_1V8_V = rArr[21];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_2V8_I = rArr[22];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_2V8_V = rArr[23];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_3V6_I = rArr[24];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_3V6_V = rArr[25];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_5V_I = rArr[26];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_5V_V = rArr[27];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_TEMP = rArr[28];
                self.NP04_DCS_01_WIB_crate0_slot3_POWER_WIB_VCC = rArr[29];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_1V8_I = rArr[30];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_1V8_V = rArr[31];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_2V8_I = rArr[32];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_2V8_V = rArr[33];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_3V6_I = rArr[34];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_3V6_V = rArr[35];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_5V_I = rArr[36];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_5V_V = rArr[37];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_TEMP = rArr[38];
                self.NP04_DCS_01_WIB_crate0_slot4_POWER_WIB_VCC = rArr[39];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_1V8_I = rArr[40];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_1V8_V = rArr[41];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_2V8_I = rArr[42];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_2V8_V = rArr[43];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_3V6_I = rArr[44];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_3V6_V = rArr[45];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_5V_I = rArr[46];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_5V_V = rArr[47];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_TEMP = rArr[48];
                self.NP04_DCS_01_WIB_crate0_slot5_POWER_WIB_VCC = rArr[49];
                self.NP04_MHT0100AI = rArr[50];
                self.NP04_TT0100AI = rArr[51];
                self.NP04_PT0106AI = rArr[52];

                console.log("interval occured");
                self.timestamp = rArr[rArr.length-1] * 1000;
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
    }]
});