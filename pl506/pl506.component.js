'use strict';
angular.module('pl506', []).component('pl506', {
    templateUrl: 'pl506/pl506.template.html',
    controller: ['$routeParams', '$scope', '$http', '$window', '$interval',
        function pl506Controller($routeParams, $scope, $http, $window, $interval) {
            this.pageTitle = "NP04 CE PL506";
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.pl506Changer = function (crId) {
                $window.location.href = "#!/pl506/";
                console.log($window.location.href);
            };


            this.reload = function () {
                self.timestamp = new Date();
                $http
                    .get("php-db-conn/np04cachedvals.php?elemName=pl506")
                    .then(function (result) {
                        const res = result.data;
                        console.log(res);
                        self.NP04_MHT0100AI = res["47878785489690"][0];
                        self.NP04_TT0100AI = res["47878802266906"][0];
                        self.NP04_PT0106AI = res["47878819044122"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel0_Status_On = res["47873534198810"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel0_MeasurementSenseVoltage = res["47873534219290"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel0_MeasurementCurrent = res["47873534219546"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel1_Status_On = res["47873601307674"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel1_MeasurementSenseVoltage = res["47873601328154"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel1_MeasurementCurrent = res["47873601328410"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel2_Status_On = res["47873685193754"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel2_MeasurementSenseVoltage = res["47873685214234"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK4_Channel2_MeasurementCurrent = res["47873685214490"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel0_Status_On = res["47875547464730"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel0_MeasurementSenseVoltage = res["47875547485210"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel0_MeasurementCurrent = res["47875547485466"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel1_Status_On = res["47875614573594"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel1_MeasurementSenseVoltage = res["47875614594074"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel1_MeasurementCurrent = res["47875614594330"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel2_Status_On = res["47875698459674"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel2_MeasurementSenseVoltage = res["47875698480154"][0];
                        self.NP04_DCS_01_Wiener_CE_PL506_RACK6_Channel2_MeasurementCurrent = res["47875698480410"][0];

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
        }]
});