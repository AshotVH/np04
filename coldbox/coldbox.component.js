'use strict';
angular.module('coldbox', []).component('coldbox', {
    templateUrl: 'coldbox/coldbox.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function coldboxController($routeParams, $scope, $window, $http, $interval) {
        this.pageTitle = "NP04 Coldbox";
        this.natalie = 1;
        let self = this;

            this.reload = function () {
                self.timestamp = new Date();
                fetch("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=coldbox")
                .then(res => res.text())  
                .then(rawText => {
                    const cleanedText = rawText
                    .replace(/\bNaN\b/g, 'null')
                    .replace(/\bInfinity\b/g, 'null')
                    .replace(/\b-Infinity\b/g, 'null');

                    
                    const data = JSON.parse(cleanedText);

                    console.log(data);
                })
                .catch(err => {
                    console.error("Error parsing data:", err);
                });

                $http
                    .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=coldbox")
                    .then(function (result) {
                        const res = result.data;
                        console.log(res);
                        self.NP04_MHT0100AI = res["47878785489690"][0] ? res["47878785489690"][0] : "N/A";
                        self.NP04_TT0100AI = res["47878802266906"][0] ? res["47878802266906"][0] : "N/A";
                        self.NP04_PT0106AI = res["47878819044122"][0] ? res["47878819044122"][0] : "N/A";
                        self.NP04_DCS_01_TE0205 = res["47893683634458"][0] ? res["47893683634458"][0] : "N/A";
                        self.NP04_DCS_01_TE0206 = res["47893700411674"][0] ? res["47893700411674"][0] : "N/A";
                        self.NP04_DCS_01_TE0207 = res["47893717188890"][0] ? res["47893717188890"][0] : "N/A";
                        self.NP04_DCS_01_TE0208 = res["47893733966106"][0] ? res["47893733966106"][0] : "N/A";
                        self.NP04_DCS_01_TE0209 = res["47893750743322"][0] ? res["47893750743322"][0] : "N/A";
                        self.NP04_DCS_01_TE0210 = res["47893767520538"][0] ? res["47893767520538"][0] : "N/A";
                        self.NP04_DCS_01_TE0211 = res["47893784297754"][0] ? res["47893784297754"][0] : "N/A";
                        self.NP04_DCS_01_4CV3160 = res["48020200620570"][0] ? res["48020200620570"][0] : "N/A";
                        self.NP04_DCS_01_4CV3170 = res["48020217397786"][0] ? res["48020217397786"][0] : "N/A";
                        self.NP04_DCS_01_4CV3500 = res["48020234175002"][0] ? res["48020234175002"][0] : "N/A";
                        self.NP04_DCS_01_4CV3510 = res["48020250952218"][0] ? res["48020250952218"][0] : "N/A";
                        self.NP04_DCS_01_4PT3170 = res["48020267729434"][0] ? res["48020267729434"][0] : "N/A";
                        self.NP04_DCS_01_4PT3500 = res["48020284506650"][0] ? res["48020284506650"][0] : "N/A";
                        self.NP04_DCS_01_4PT3510 = res["48020301283866"][0] ? res["48020301283866"][0] : "N/A";
                        self.NP04_DCS_01_4TT3500 = res["48020334838298"][0] ? res["48020334838298"][0] : "N/A";
                        self.NP04_DCS_01_4TT3510 = res["48020351615514"][0] ? res["48020351615514"][0] : "N/A";

                    });

            };

            this.promise;

            this.reload();

            $scope.start = function() {
                $scope.stop();

                self.promise = $interval(self.reload, 30000);
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