'use strict';
angular.module('mpodcehvras', []).component('mpodcehvras', {
    templateUrl: 'mpodcehvras/mpodcehvras.template.html',
    controller: ['$routeParams', '$q', '$http', '$window', '$interval',
        function mpodcehvrasController($routeParams, $q, $http, $window, $interval) {
            this.pageTitle = "NP04 High Voltage Rack Side";
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.mpodcehvrasChanger = function(crId) {
                $window.location.href = "#!/mpodcehvras/";
                console.log($window.location.href);
            };

            this.reload = function () {

                let element = [];

                element.push("NP04_DCS_V21-CPC_AnalogInput-00007.ProcessInput.PosSt");
                element.push("NP04_DCS_V21-CPC_AnalogInput-00008.ProcessInput.PosSt");
                element.push("NP04_DCS_V21-CPC_AnalogInput-00009.ProcessInput.PosSt");
                    for (let j = 0; j < 4; j++) {
                        for (let k = 0; k < 8; k++) {
                            element.push("MPOD_CE_RACK4_Board" + j + "_Channel0" + k + "_StatusOn");
                            element.push("MPOD_CE_RACK4_Board" + j + "_Channel0" + k + "_MeasurementSenseVoltage");
                            element.push("MPOD_CE_RACK4_Board" + j + "_Channel0" + k + "_MeasurementCurrent");
                        }
                    }
                console.log(element[3]);

                let elementsend = JSON.stringify(element);

                    self.NP04_DCS_01_Wiener_MPODCE = [4];
                    for (let j = 0; j < 4; j++) {
                        self.NP04_DCS_01_Wiener_MPODCE[j] = [8];
                        for (let k = 0; k < 8; k++) {
                            self.NP04_DCS_01_Wiener_MPODCE[j][k] = [3];
                        }
                    }


                $http.get("php-db-conn/cachedVals.conn.php?elemId=" + elementsend).then(function (resultArr) {
                    let rArr = [];
                    let resjson = angular.toJson(resultArr.data);
                    let res = JSON.parse(resjson);
                    for (let i = 0; i < res.length; i++) {
                        rArr.push(JSON.parse(res[i]));
                    }
                    self.NP04_MHT0100AI = rArr[0].records.Mnish;
                    self.NP04_TT0100AI = rArr[1].records.Mnish;
                    self.NP04_PT0106AI = rArr[2].records.Mnish;

                    let r = 3;
                        for (let j = 0; j < 4; j++) {
                            for (let k = 0; k < 8; k++) {
                                for (let l = 0; l < 3; l++) {
                                    self.NP04_DCS_01_Wiener_MPODCE[j][k][l] = rArr[r].records.Mnish;
                                    r++;
                                }
                            }
                        }
                    self.timestamp = rArr[rArr.length-1] * 1000;
            });

            };

            this.reload();
            $interval(this.reload, 60000);
        }]
});