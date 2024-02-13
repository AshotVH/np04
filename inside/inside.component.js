'use strict';
angular.module('inside', []).component('inside', {
    templateUrl: 'inside/inside.template.html',
    controller: function insideController($scope, $http, $interval) {
        this.pageTitle = "NP04 T-Insulation";
        this.natalie = 1;
        this.TT0101 = "";
        const self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=inside")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_DCS_01_TE0121 = res["47892274348314"]?res["47892274348314"][0]:"N/A";
                    self.NP04_DCS_01_TE0122 = res["47892291125530"]?res["47892291125530"][0]:"N/A";
                    self.NP04_DCS_01_TE0123 = res["47892307902746"]?res["47892307902746"][0]:"N/A";
                    self.NP04_DCS_01_TE0127 = res["47892375011610"]?res["47892375011610"][0]:"N/A";
                    self.NP04_DCS_01_TE0133 = res["47892475674906"]?res["47892475674906"][0]:"N/A";
                    self.NP04_DCS_01_TE0135 = res["47892509229338"]?res["47892509229338"][0]:"N/A";
                    self.NP04_DCS_01_TE0139 = res["47892576338202"]?res["47892576338202"][0]:"N/A";
                    self.NP04_DCS_01_TE0140 = res["47892593115418"]?res["47892593115418"][0]:"N/A";
                    self.NP04_MHT0100AI = res["47878785489690"]?res["47878785489690"][0]:"N/A";
                    self.NP04_TT0100AI = res["47878802266906"]?res["47878802266906"][0]:"N/A";
                    self.NP04_PT0106AI = res["47878819044122"]?res["47878819044122"][0]:"N/A";
                });

        };

        this.promise;

        this.reload();

        $scope.start = function () {
            $scope.stop();

            self.promise = $interval(self.reload, 30000);
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