'use strict';
angular.module('cryostat', []).component('cryostat', {
    templateUrl: 'cryostat/cryostat.template.html',
    controller: function cryostatController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Cryostat";
        this.natalie = 1;
        const self = this;
        $scope.isNumber = function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        };
        this.reload = function () {
            
            self.timestamp = new Date();
            $http
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=cryostat")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_PT0100AI = res["47878684826394"]?res["47878684826394"][0]:"N/A";
                    self.NP04_PT0101AI = res["47878701603610"]?res["47878701603610"][0]:"N/A";
                    self.NP04_PT0104AI = res["47878751935258"]?res["47878751935258"][0]:"N/A";
                    self.NP04_PT0105AI = res["47878768712474"]?res["47878768712474"][0]:"N/A";
                    self.NP04_2PT0100AIR = res["47883114011418"]?res["47883114011418"][0]:"N/A";
                    self.NP04_2PT0100AI = res["47878902930202"]?res["47878902930202"][0]:"N/A";
                    self.NP04_PT0102AI = res["47882929462042"]?res["47882929462042"][0]:"N/A";
                    self.NP04_PT0103AI = res["47878735158042"]?res["47878735158042"][0]:"N/A";
                    self.NP04_DCS_01_TE0121 = res["47892274348314"]?res["47892274348314"][0]:"N/A";
                    self.NP04_DCS_01_TE0122 = res["47892291125530"]?res["47892291125530"][0]:"N/A";
                    self.NP04_DCS_01_TE0123 = res["47892307902746"]?res["47892307902746"][0]:"N/A";
                    self.NP04_DCS_01_TE0127 = res["47892375011610"]?res["47892375011610"][0]:"N/A";
                    self.NP04_DCS_01_TE0133 = res["47892475674906"]?res["47892475674906"][0]:"N/A";
                    self.NP04_DCS_01_TE0135 = res["47892509229338"]?res["47892509229338"][0]:"N/A";
                    self.NP04_DCS_01_TE0139 = res["47892576338202"]?res["47892576338202"][0]:"N/A";
                    self.NP04_DCS_01_TE0140 = res["47892593115418"]?res["47892593115418"][0]:"N/A";
                    self.NP04_DCS_01_NP04_4PT4920 = res["47931851800858"]?res["47931851800858"][0]:"N/A";
                    self.NP04_PT0110AI = res["47879272028954"]?res["47879272028954"][0]:"N/A";
                    self.NP04_PT0111AI = res["47879288806170"]?res["47879288806170"][0]:"N/A";
                    self.CV4100 = res["47888667251994"]?res["47888667251994"][0]:"N/A";
                    self.CV4101 = res["47888684029210"]?res["47888684029210"][0]:"N/A";
                    self.NP04_DCS_01_NP04_4QT4710 = res["47897609503002"]?res["47897609503002"][0]:"N/A";
                    self.NP04_DCS_01_NP04_4QT4711 = res["47897626280218"]?res["47897626280218"][0]:"N/A";
                    self.NP04_DCS_01_NP04_4QT4720 = res["47897643057434"]?res["47897643057434"][0]:"N/A";
                    self.NP04_DCS_01_NP04_4QT4730 = res["47897676611866"]?res["47897676611866"][0]:"N/A";
                    self.NP04_MHT0100AI = res["47878785489690"]?res["47878785489690"][0]:"N/A";
                    self.NP04_TT0100AI = res["47878802266906"]?res["47878802266906"][0]:"N/A";
                    self.NP04_PT0106AI = res["47878819044122"]?res["47878819044122"][0]:"N/A";
                });

            console.log("interval occured");
        };

        this.promise;
        this.reload();
        $scope.start = function () {
            $scope.stop();
            self.promise = $interval(self.reload, 15000);
        };
        $scope.stop = function () {
            $interval.cancel(self.promise);
        };
        $scope.start();
        $scope.$on('$destroy', function () {
            $scope.stop();
        });
    }
});