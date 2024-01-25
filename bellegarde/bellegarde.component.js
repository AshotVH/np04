'use strict';
angular.module('bellegarde', []).component('bellegarde', {
    templateUrl: 'bellegarde/bellegarde.template.html',
    controller: function bellegardeController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Bellegarde side";
        this.natalie = 1;
        let self = this;

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=bellegarde").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];
                self.BC_BS_03 = rArr[3];
                self.MEM_BS_03 = rArr[4];
                self.MEM_BS_02 = rArr[5];
                self.B4_BS_01 = rArr[6];
                self.B3_BS_01 = rArr[7];
                self.B2_BS_01 = rArr[8];
                self.TCO_BS_01 = rArr[9];
                self.DS_BS_01 = rArr[10];
                self.MC_BSS_03 = rArr[11];
                self.MC_BSS_02 = rArr[12];
                self.timestamp = rArr[rArr.length-1] * 1000;
            });
        };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();

            self.promise = $interval(self.reload, 150000);
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