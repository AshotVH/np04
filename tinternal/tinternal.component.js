'use strict';
angular.module('tinternal', []).component('tinternal', {
    templateUrl: 'tinternal/tinternal.template.html',
    controller: function tinternalController($scope, $http, $window, $interval) {
        this.pageTitle = "NP04 T-Internal";
        this.natalie = 1;
        const self = this;

        this.pageChooser = function (page) {
            $window.location.href = "#!/" + page;
        };

        this.reload = function () {

            self.timestamp = new Date();
            $http
                .get("php-db-conn/np04cachedvals.php?elemName=tinternal")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.NP04_DCS_01_TE0067 = res["47891368378650"][0];
                    self.NP04_DCS_01_TE0068 = res["47891385155866"][0];
                    self.NP04_DCS_01_TE0069 = res["47891401933082"][0];
                    self.NP04_DCS_01_TE0070 = res["47891418710298"][0];
                    self.NP04_DCS_01_TE0071 = res["47891435487514"][0];
                    self.NP04_DCS_01_TE0072 = res["47891452264730"][0];
                    self.NP04_DCS_01_TE0061 = res["47891267715354"][0];
                    self.NP04_DCS_01_TE0062 = res["47891284492570"][0];
                    self.NP04_DCS_01_TE0063 = res["47891301269786"][0];
                    self.NP04_DCS_01_TE0064 = res["47891318047002"][0];
                    self.NP04_DCS_01_TE0065 = res["47891334824218"][0];
                    self.NP04_DCS_01_TE0066 = res["47891351601434"][0];
                    self.NP04_DCS_01_TE0055 = res["47891167052058"][0];
                    self.NP04_DCS_01_TE0056 = res["47891183829274"][0];
                    self.NP04_DCS_01_TE0057 = res["47891200606490"][0];
                    self.NP04_DCS_01_TE0058 = res["47891217383706"][0];
                    self.NP04_DCS_01_TE0059 = res["47891234160922"][0];
                    self.NP04_DCS_01_TE0060 = res["47891250938138"][0];
                    self.NP04_DCS_01_TE0049 = res["47891066388762"][0];
                    self.NP04_DCS_01_TE0050 = res["47891083165978"][0];
                    self.NP04_DCS_01_TE0051 = res["47891099943194"][0];
                    self.NP04_DCS_01_TE0052 = res["47891116720410"][0];
                    self.NP04_DCS_01_TE0053 = res["47891133497626"][0];
                    self.NP04_DCS_01_TE0054 = res["47891150274842"][0];



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