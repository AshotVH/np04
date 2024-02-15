'use strict';
angular.module('floor', []).component('floor', {
    templateUrl: 'floor/floor.template.html',
    controller: function floorController($scope, $http, $interval) {
        this.pageTitle = "NP04 Floor temperatures";
        this.natalie = 1;
        const self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=floor")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_DCS_01_TE0103_ = res["47891972358426"]?res["47891972358426"][0]:"N/A";
                    self.NP04_DCS_01_TE0104_ = res["47891989135642"]?res["47891989135642"][0]:"N/A";
                    self.NP04_DCS_01_TE0105_ = res["47892005912858"]?res["47892005912858"][0]:"N/A";
                    self.NP04_DCS_01_TE0106_ = res["47892022690074"]?res["47892022690074"][0]:"N/A";
                    self.NP04_DCS_01_TE0107_ = res["47892039467290"]?res["47892039467290"][0]:"N/A";
                    self.NP04_DCS_01_TE0108_ = res["47892056244506"]?res["47892056244506"][0]:"N/A";
                    self.NP04_DCS_01_TE0109_ = res["47892073021722"]?res["47892073021722"][0]:"N/A";
                    self.NP04_DCS_01_TE0110_ = res["47892089798938"]?res["47892089798938"][0]:"N/A";
                    self.NP04_DCS_01_TE0111_ = res["47892106576154"]?res["47892106576154"][0]:"N/A";
                    self.NP04_DCS_01_TE0112_ = res["47892123353370"]?res["47892123353370"][0]:"N/A";
                    self.NP04_DCS_01_TE0113_ = res["47892140130586"]?res["47892140130586"][0]:"N/A";
                    self.NP04_DCS_01_TE0114_ = res["47892156907802"]?res["47892156907802"][0]:"N/A";
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