'use strict';
angular.module('cryostat', []).component('cryostat', {
    templateUrl: 'cryostat/cryostat.template.html',
    controller: function cryostatController($scope, $http, $q, $interval) {
        this.pageTitle = "NP04 Cryostat";
        this.natalie = 1;
        let self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=cryostat")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_PT0100AI = res["47878684826394"][0];
                    self.NP04_PT0101AI = res["47878701603610"][0];
                    self.NP04_PT0104AI = res["47878751935258"][0];
                    self.NP04_PT0105AI = res["47878768712474"][0];
                    self.NP04_2PT0100AIR = res["47883114011418"][0];
                    self.NP04_2PT0100AI = res["47878902930202"][0];
                    self.NP04_PT0102AI = res["47882929462042"][0];
                    self.NP04_PT0103AI = res["47878735158042"][0];
                    self.NP04_DCS_01_TE0121 = res["47892274348314"][0];
                    self.NP04_DCS_01_TE0122 = res["47892291125530"][0];
                    self.NP04_DCS_01_TE0123 = res["47892307902746"][0];
                    self.NP04_DCS_01_TE0127 = res["47892375011610"][0];
                    self.NP04_DCS_01_TE0133 = res["47892475674906"][0];
                    self.NP04_DCS_01_TE0135 = res["47892509229338"][0];
                    self.NP04_DCS_01_TE0139 = res["47892576338202"][0];
                    self.NP04_DCS_01_TE0140 = res["47892593115418"][0];
                    self.NP04_DCS_01_NP04_4PT4920 = res["47931851800858"][0];
                    self.NP04_PT0110AI = res["47879272028954"][0];
                    self.NP04_PT0111AI = res["47879288806170"][0];
                    self.CV4100 = res["47888667251994"][0];
                    self.CV4101 = res["47888684029210"][0];
                    self.NP04_DCS_01_NP04_4QT4710 = res["47897609503002"][0];
                    self.NP04_DCS_01_NP04_4QT4711 = res["47897626280218"][0];
                    self.NP04_DCS_01_NP04_4QT4720 = res["47897643057434"][0];
                    self.NP04_DCS_01_NP04_4QT4730 = res["47897676611866"][0];
                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                });

            console.log("interval occured");
        };

        this.promise;
        this.reload();
        $scope.start = function () {
            $scope.stop();
            self.promise = $interval(self.reload, 60000);
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