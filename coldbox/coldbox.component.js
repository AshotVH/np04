'use strict';
angular.module('coldbox', []).component('coldbox', {
    templateUrl: 'coldbox/coldbox.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function coldboxController($routeParams, $scope, $window, $http, $interval) {
        this.pageTitle = "NP04 Coldbox";
        this.natalie = 1;
        let self = this;

            this.reload = function () {

                $http.get("php-db-conn/cachedVals.conn.php?elemId=coldbox").then(function (resultArr) {
                    let rArr = [];
                    let resjson = angular.toJson(resultArr.data);
                    let res = JSON.parse(resjson);
                    for (let i = 0; i < res.length; i++) {
                        rArr.push(JSON.parse(res[i]));
                    }

                    self.NP04_MHT0100AI = rArr[0];
                    self.NP04_TT0100AI = rArr[1];
                    self.NP04_PT0106AI = rArr[2];
                    self.NP04_DCS_01_TE0205 = rArr[3];
                    self.NP04_DCS_01_TE0206 = rArr[4];
                    self.NP04_DCS_01_TE0207 = rArr[5];
                    self.NP04_DCS_01_TE0208 = rArr[6];
                    self.NP04_DCS_01_TE0209 = rArr[7];
                    self.NP04_DCS_01_TE0210 = rArr[8];
                    self.NP04_DCS_01_TE0211 = rArr[9];
                    self.NP04_DCS_01_4CV3160 = rArr[10];
                    self.NP04_DCS_01_4CV3170 = rArr[11];
                    self.NP04_DCS_01_4CV3500 = rArr[12];
                    self.NP04_DCS_01_4CV3510 = rArr[13];
                    self.NP04_DCS_01_4PT3170 = rArr[14];
                    self.NP04_DCS_01_4PT3500 = rArr[15];
                    self.NP04_DCS_01_4PT3510 = rArr[16];
                    self.NP04_DCS_01_4TT3500 = rArr[17];
                    self.NP04_DCS_01_4TT3510 = rArr[18];
                    self.NP04_DCS_01_CB_DeltaT = rArr[19];
                    self.NP04_DCS_01_CB_Tmax = rArr[20];


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
]});