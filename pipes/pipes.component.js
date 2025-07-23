'use strict';
angular.module('pipes', []).component('pipes', {
    templateUrl: 'pipes/pipes.template.html',
    controller: function pipesController($scope, $http, $interval) {
        this.pageTitle = "NP04 Pipe temperatures";
        this.natalie = 1;
        let self = this;

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=pipes")
                .then(function (result) {
                    const res = result.data;
                    // console.log(res);
                    self.NP04_DCS_01_TE0085_ = res["47891670368538"]?res["47891670368538"][0]:"N/A";
                    self.NP04_DCS_01_TE0086_ = res["47891687145754"]?res["47891687145754"][0]:"N/A";
                    self.NP04_DCS_01_TE0087_ = res["47891703922970"]?res["47891703922970"][0]:"N/A";
                    self.NP04_DCS_01_TE0088_ = res["47891720700186"]?res["47891720700186"][0]:"N/A";
                    self.NP04_DCS_01_TE0089_ = res["47891737477402"]?res["47891737477402"][0]:"N/A";
                    self.NP04_DCS_01_TE0090_ = res["47891754254618"]?res["47891754254618"][0]:"N/A";
                    self.NP04_DCS_01_TE0091_ = res["47891771031834"]?res["47891771031834"][0]:"N/A";
                    self.NP04_DCS_01_TE0092_ = res["47891787809050"]?res["47891787809050"][0]:"N/A";
                    self.NP04_DCS_01_TE0093_ = res["47891804586266"]?res["47891804586266"][0]:"N/A";
                    self.NP04_DCS_01_TE0094_ = res["47891821363482"]?res["47891821363482"][0]:"N/A";
                    self.NP04_DCS_01_TE0095_ = res["47891838140698"]?res["47891838140698"][0]:"N/A";
                    self.NP04_DCS_01_TE0096_ = res["47891854917914"]?res["47891854917914"][0]:"N/A";
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