'use strict';
angular.module('pl506', []).component('pl506', {
    templateUrl: 'pl506/pl506.template.html',
    controller: ['$routeParams', '$scope', '$http', '$window', '$interval',
        function pl506Controller($routeParams, $scope, $http, $window, $interval) {
            this.pageTitle = "NP04 CE PL506";
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.pl506Changer = function(crId) {
                $window.location.href = "#!/pl506/";
                console.log($window.location.href);
            };



            this.reload = function () {

                $http.get("php-db-conn/cachedVals.conn.php?elemId=pl506").then(function (resultArr) {

                    let rArr = [];
                    let resjson = angular.toJson(resultArr.data);
                    let res = JSON.parse(resjson);
                    for (let i = 0; i < res.length; i++) {
                        rArr.push(JSON.parse(res[i]));
                    }

                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel0_Status_On = rArr[0];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel0_MeasurementSenseVoltage = rArr[1];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel0_MeasurementCurrent = rArr[2];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel1_MeasurementSenseVoltage = rArr[3];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel1_Status_On = rArr[4];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel1_MeasurementCurrent = rArr[5];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel2_Status_On = rArr[6];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel2_MeasurementSenseVoltage = rArr[7];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel2_MeasurementCurrent = rArr[8];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel0_MeasurementSenseVoltage = rArr[9];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel0_Status_On = rArr[10];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel0_MeasurementCurrent = rArr[11];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel1_MeasurementSenseVoltage = rArr[12];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel1_Status_On = rArr[13];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel1_MeasurementCurrent = rArr[14];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel2_Status_On = rArr[15];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel2_MeasurementSenseVoltage = rArr[16];
                    self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel2_MeasurementCurrent = rArr[17];
                    self.NP04_MHT0100AI = rArr[18];
                    self.NP04_TT0100AI = rArr[19];
                    self.NP04_PT0106AI = rArr[20];

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
        }]
});