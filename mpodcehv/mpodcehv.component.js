'use strict';
angular.module('mpodcehv', []).component('mpodcehv', {
    templateUrl: 'mpodcehv/mpodcehv.template.html',
    controller: ['$routeParams', '$q', '$http', '$window', '$interval',
        function mpodcehvController($routeParams, $q, $http, $window, $interval) {
            this.pageTitle = "NP04 High Voltage";
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.mpodcehvChanger = function(crId) {
                $window.location.href = "#!/mpodcehv/";
                console.log($window.location.href);
            };

            this.reload = function () {

                let element = [];

                element.push("NP04_DCS_V21-CPC_AnalogInput-00007.ProcessInput.PosSt");
                element.push("NP04_DCS_V21-CPC_AnalogInput-00008.ProcessInput.PosSt");
                element.push("NP04_DCS_V21-CPC_AnalogInput-00009.ProcessInput.PosSt");

                let elementsend = JSON.stringify(element);


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


                    self.timestamp = rArr[rArr.length-1] * 1000;
            });

            };

            this.reload();
            $interval(this.reload, 60000);
        }]
});