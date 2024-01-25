'use strict';
angular.module('wib', []).component('wib', {
    templateUrl: 'wib/wib.template.html',
    controller: ['$routeParams', '$q', '$scope', '$http', '$window', '$interval',
        function wibController($routeParams, $q, $scope, $http, $window, $interval) {
            this.crateId = $routeParams.crateId;
            this.wibId = $routeParams.wibId;
            this.pageTitle = "NP04 Crate " + this.crateId + " WIB " + this.wibId;
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.wibChanger = function(crId, wId) {
                $window.location.href = "#!/wib/" + crId + "/" + wId;
                console.log($window.location.href);
            }

            this.reload = function () {

                $http.get("php-db-conn/cachedVals.conn.php?elemId=crate" + self.crateId + "wib" + self.wibId).then(function (resultArr) {

                    let rArr = [];
                    let resjson = angular.toJson(resultArr.data);
                    let res = JSON.parse(resjson);
                    for (let i = 0; i < res.length; i++) {
                        rArr.push(JSON.parse(res[i]));
                    }

                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_1V5_I = rArr[0];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_1V5_V = rArr[1];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_2V5_V = rArr[2];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_2V8_I = rArr[3];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_2V8_V = rArr[4];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_3V6_I = rArr[5];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_3V6_V = rArr[6];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_BIAS_I = rArr[7];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_BIAS_V = rArr[8];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_TEMP = rArr[9];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_1V5_I = rArr[10];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_1V5_V = rArr[11];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_2V5_I = rArr[12];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_2V5_V = rArr[13];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_2V8_I = rArr[14];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_2V8_V = rArr[15];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_3V6_I = rArr[16];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_3V6_V = rArr[17];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_BIAS_I = rArr[18];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_BIAS_V = rArr[19];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB2_TEMP = rArr[20];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_1V5_I = rArr[21];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_1V5_V = rArr[22];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_2V5_I = rArr[23];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_2V5_V = rArr[24];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_2V8_I = rArr[25];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_2V8_V = rArr[26];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_3V6_I = rArr[27];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_3V6_V = rArr[28];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_BIAS_I = rArr[29];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_BIAS_V = rArr[30];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB3_TEMP = rArr[31];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_1V5_I = rArr[32];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_1V5_V = rArr[33];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_2V5_I = rArr[34];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_2V5_V = rArr[35];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_2V8_I = rArr[36];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_2V8_V = rArr[37];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_3V6_I = rArr[38];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_3V6_V = rArr[39];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_BIAS_I = rArr[40];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_BIAS_V = rArr[41];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB4_TEMP = rArr[42];
                    self.NP04_DCS_01_WIB_crate0_slot1_POWER_FEMB1_2V5_I = rArr[43];
                    self.NP04_MHT0100AI = rArr[44];
                    self.NP04_TT0100AI = rArr[45];
                    self.NP04_PT0106AI = rArr[46];
                    
                    console.log("interval occured");
                    self.timestamp = rArr[rArr.length-1] * 1000;
            });
                
            };

            this.promise;

            this.reload();

            $scope.start = function() {
                $scope.stop();

                self.promise = $interval(self.reload, 120000);
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