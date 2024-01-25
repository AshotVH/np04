'use strict';
angular.module('top', []).component('top', {
    templateUrl: 'top/top.template.html',
    controller: function topController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 top side";
        this.natalie = 1;
        let self = this;

        let element = [];


        element.push("NP04_DCS_V21-CPC_AnalogInput-00007.ProcessInput.PosSt");
        element.push("NP04_DCS_V21-CPC_AnalogInput-00008.ProcessInput.PosSt");
        element.push("NP04_DCS_V21-CPC_AnalogInput-00009.ProcessInput.PosSt");

        this.reload = function () {
            $http.get("php-db-conn/straingauges.conn.php").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                console.log(res);

                let len = res.length;

                self.DS_MDL_01;

            });

            let elementsend = JSON.stringify(element);


            $http.get("php-db-conn/cachedVals.conn.php?elemId=" + elementsend).then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }


                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];
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