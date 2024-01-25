'use strict';
angular.module('tinternal', []).component('tinternal', {
    templateUrl: 'tinternal/tinternal.template.html',
    controller: function tinternalController($scope, $http, $window, $interval) {
        this.pageTitle = "NP04 T-Internal";
        this.natalie = 1;
        let self = this;

        this.pageChooser = function (page) {
            $window.location.href = "#!/" + page;
        };

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=tinternal").then(function (resultArr) {

                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];

                self.NP04_DCS_01_TE = [];

                for (let i = 3; i < rArr.length; i++) {
                    self.NP04_DCS_01_TE.push(rArr[i]);
                }
                console.log("interval occured");
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