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
                    //----------------  T-HAWAII  --------------------
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
                    //-------------------------------------------------

                    //----------------  IFIC top  --------------------
                    self.NP04_DCS_01_TE0001 = res["47890261082394"][0];
                    self.NP04_DCS_01_TE0002 = res["47890277859610"][0];
                    self.NP04_DCS_01_TE0003 = res["47890294636826"][0];
                    self.NP04_DCS_01_TE0004 = res["47890311414042"][0];
                    self.NP04_DCS_01_TE0005 = res["47890328191258"][0];
                    self.NP04_DCS_01_TE0006 = res["47890344968474"][0];
                    self.NP04_DCS_01_TE0007 = res["47890361745690"][0];
                    self.NP04_DCS_01_TE0008 = res["47890378522906"][0];
                    self.NP04_DCS_01_TE0009 = res["47890395300122"][0];
                    self.NP04_DCS_01_TE0010 = res["47890412077338"][0];
                    self.NP04_DCS_01_TE0011 = res["47890428854554"][0];
                    self.NP04_DCS_01_TE0012 = res["47890445631770"][0];
                    self.NP04_DCS_01_TE0013 = res["47890462408986"][0];
                    self.NP04_DCS_01_TE0014 = res["47890479186202"][0];
                    self.NP04_DCS_01_TE0015 = res["47890495963418"][0];
                    self.NP04_DCS_01_TE0016 = res["47890512740634"][0];
                    //-------------------------------------------------

                    //----------------  IFIC middle --------------------
                    self.NP04_DCS_01_TE0017 = res["47890529517850"][0];
                    self.NP04_DCS_01_TE0018 = res["47890546295066"][0];
                    self.NP04_DCS_01_TE0019 = res["47890563072282"][0];
                    self.NP04_DCS_01_TE0020 = res["47890579849498"][0];
                    self.NP04_DCS_01_TE0021 = res["47890596626714"][0];
                    self.NP04_DCS_01_TE0022 = res["47890613403930"][0];
                    self.NP04_DCS_01_TE0023 = res["47890630181146"][0];
                    self.NP04_DCS_01_TE0024 = res["47890646958362"][0];
                    self.NP04_DCS_01_TE0025 = res["47890663735578"][0];
                    self.NP04_DCS_01_TE0026 = res["47890680512794"][0];
                    self.NP04_DCS_01_TE0027 = res["47890697290010"][0];
                    self.NP04_DCS_01_TE0028 = res["47890714067226"][0];
                    self.NP04_DCS_01_TE0029 = res["47890730844442"][0];
                    self.NP04_DCS_01_TE0030 = res["47890747621658"][0];
                    self.NP04_DCS_01_TE0031 = res["47890764398874"][0];
                    self.NP04_DCS_01_TE0032 = res["47890781176090"][0];


                    //-------------------------------------------------






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