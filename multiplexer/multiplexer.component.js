'use strict';
angular.module('multiplexer', []).component('multiplexer', {
    templateUrl: 'multiplexer/multiplexer.template.html',
    controller: ['$routeParams', '$scope', '$http', '$window', '$interval',
        function multiplexerController($routeParams, $scope, $http, $window, $interval) {
        this.pageTitle = "NP04 Temperature Map";
        this.natalie = 1;
        let self = this;



        this.pageChooser = function (page) {
            $window.location.href = "#!/" + page;
        };

        this.reload = function () {

            $http.get("php-db-conn/np04cachedvals.php?elemName=multiplexer").then(function (result) {
                const res = result.data;
                console.log(res);
                console.log(res.length);

                let rArr = [];
                for (const key in res){
                    console.log(key + "---" + key[0]);
                }
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP04_DCS_01_TE_card1 = [];

                self.NP04_DCS_01_TE_card1["Name"] = [];
                self.NP04_DCS_01_TE_card1["Value"] = [];

                self.NP04_DCS_01_TE_card2 = [];

                self.NP04_DCS_01_TE_card2["Name"] = [];
                self.NP04_DCS_01_TE_card2["Value"] = [];

                self.NP04_DCS_01_TE_card3 = [];

                self.NP04_DCS_01_TE_card3["Name"] = [];
                self.NP04_DCS_01_TE_card3["Value"] = [];

                self.NP04_DCS_01_TE_card4 = [];

                self.NP04_DCS_01_TE_card4["Name"] = [];
                self.NP04_DCS_01_TE_card4["Value"] = [];

                self.NP04_DCS_01_TE_card5 = [];

                self.NP04_DCS_01_TE_card5["Name"] = [];
                self.NP04_DCS_01_TE_card5["Value"] = [];

                self.NP04_DCS_01_TE_card6 = [];

                self.NP04_DCS_01_TE_card6["Name"] = [];
                self.NP04_DCS_01_TE_card6["Value"] = [];

                self.NP04_DCS_01_TE_card7 = [];

                self.NP04_DCS_01_TE_card7["Name"] = [];
                self.NP04_DCS_01_TE_card7["Value"] = [];

                self.NP04_DCS_01_TE_card8 = [];

                self.NP04_DCS_01_TE_card8["Name"] = [];
                self.NP04_DCS_01_TE_card8["Value"] = [];

                self.NP04_DCS_01_TE_card9 = [];

                self.NP04_DCS_01_TE_card9["Name"] = [];
                self.NP04_DCS_01_TE_card9["Value"] = [];

                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];

                let j = 0;
                let k = "";

                for (let i = 1; i < 10; i++) {
                    self.NP04_DCS_01_TE_card1["Name"].push("TE000" + i);
                    self.NP04_DCS_01_TE_card1["Value"].push(rArr[i+2])
                }

                for (let i = 10; i < 25; i++) {
                    self.NP04_DCS_01_TE_card1["Name"].push("TE00" + i);
                    self.NP04_DCS_01_TE_card1["Value"].push(rArr[i+2])
                }

                for (let i = 25; i < 49; i++) {
                    self.NP04_DCS_01_TE_card2["Name"].push("TE00" + i);
                    self.NP04_DCS_01_TE_card2["Value"].push(rArr[i+2])
                }

                for (let i = 49; i < 73; i++) {
                    self.NP04_DCS_01_TE_card3["Name"].push("TE00" + i);
                    self.NP04_DCS_01_TE_card3["Value"].push(rArr[i+2])
                }

                for (let i = 73; i < 97; i++) {
                    self.NP04_DCS_01_TE_card4["Name"].push("TE00" + i);
                    self.NP04_DCS_01_TE_card4["Value"].push(rArr[i+2])
                }

                for (let i = 97; i < 100; i++) {
                    self.NP04_DCS_01_TE_card5["Name"].push("TE00" + i);
                    self.NP04_DCS_01_TE_card5["Value"].push(rArr[i+2])
                }

                for (let i = 100; i < 121; i++) {
                    self.NP04_DCS_01_TE_card5["Name"].push("TE0" + i);
                    self.NP04_DCS_01_TE_card5["Value"].push(rArr[i+2])
                }

                for (let i = 121; i < 145; i++) {
                    self.NP04_DCS_01_TE_card6["Name"].push("TE0" + i);
                    self.NP04_DCS_01_TE_card6["Value"].push(rArr[i+2])
                }

                for (let i = 145; i < 169; i++) {
                    self.NP04_DCS_01_TE_card7["Name"].push("TE0" + i);
                    self.NP04_DCS_01_TE_card7["Value"].push(rArr[i+2])
                }

                for (let i = 169; i < 193; i++) {
                    self.NP04_DCS_01_TE_card8["Name"].push("TE0" + i);
                    self.NP04_DCS_01_TE_card8["Value"].push(rArr[i+2])
                }

                for (let i = 193; i < 217; i++) {
                    self.NP04_DCS_01_TE_card9["Name"].push("TE0" + i);
                    self.NP04_DCS_01_TE_card9["Value"].push(rArr[i+2])
                }

                console.log("interval occured");
                
                self.timestamp = rArr[rArr.length-1] * 1000;
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
    }]
});