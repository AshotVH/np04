'use strict';
angular.module('mpodpd', []).component('mpodpd', {
    templateUrl: 'mpodpd/mpodpd.template.html',
    controller: ['$routeParams', '$scope', '$q', '$http', '$window', '$interval',
        function mpodpdController($routeParams, $scope, $q, $http, $window, $interval) {
            this.pageTitle = "NP04 Photon detectors";
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.mpodpdChanger = function(crId) {
                $window.location.href = "#!/mpodpd/";
                console.log($window.location.href);
            };

            this.reload = function () {

                self.NP04_DCS_01_Wiener_MPODPD_Rack4 = [4];
                for (let j = 0; j < 4; j++) {
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[j] = [8];
                    for (let k = 0; k < 8; k++) {
                        self.NP04_DCS_01_Wiener_MPODPD_Rack4[j][k] = [3];
                    }
                }

                self.NP04_DCS_01_Wiener_MPODPD_Rack6 = [4];
                for (let j = 0; j < 4; j++) {
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[j] = [8];
                    for (let k = 0; k < 8; k++) {
                        self.NP04_DCS_01_Wiener_MPODPD_Rack6[j][k] = [3];
                    }
                }

                $http.get("php-db-conn/cachedVals.conn.php?elemId=mpodpd").then(function (resultArr) {
                    let rArr = [];
                    let resjson = angular.toJson(resultArr.data);
                    let res = JSON.parse(resjson);
                    for (let i = 0; i < res.length; i++) {
                        rArr.push(JSON.parse(res[i]));
                    }
                    self.NP04_MHT0100AI = rArr[186];
                    self.NP04_TT0100AI = rArr[187];
                    self.NP04_PT0106AI = rArr[188];

                    let r = 0;
                    for (let j = 0; j < 4; j++) {
                        for (let k = 0; k < 8; k++) {
                            for (let l = 0; l < 3; l++) {
                                self.NP04_DCS_01_Wiener_MPODPD_Rack4[j][k][l] = rArr[r];
                                r++;
                            }
                        }
                    }

                    r = 96;
                    for (let j = 0; j < 4; j++) {
                        for (let k = 0; k < 8; k++) {
                            for (let l = 0; l < 3; l++) {
                                self.NP04_DCS_01_Wiener_MPODPD_Rack6[j][k][l] = rArr[r];
                                r++;
                            }
                        }
                    }
                    console.log(resultArr);

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