'use strict';
angular.module('mpodpd', []).component('mpodpd', {
    templateUrl: 'mpodpd/mpodpd.template.html',
    controller: ['$routeParams', '$scope', '$q', '$http', '$window', '$interval',
        function mpodpdController($routeParams, $scope, $q, $http, $window, $interval) {
            this.pageTitle = "NP04 Photon detectors";
            this.natalie = 1;
            this.TT0101 = "";
            let self = this;

            this.mpodpdChanger = function(crId) {
                $window.location.href = "#!/mpodpd/";
                console.log($window.location.href);
            };
            self.NP04_DCS_01_Wiener_MPODPD_Rack4 = new Array(4);
            for (let j = 0; j < 4; j++) {
                self.NP04_DCS_01_Wiener_MPODPD_Rack4[j] = new Array(8);
                for (let k = 0; k < 8; k++) {
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[j][k] = new Array(3);
                }
            }
            self.NP04_DCS_01_Wiener_MPODPD_Rack6 = new Array(4);
            for (let j = 0; j < 4; j++) {
                self.NP04_DCS_01_Wiener_MPODPD_Rack6[j] = new Array(8);
                for (let k = 0; k < 8; k++) {
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[j][k] = new Array(3);
                }
            }
            
            this.reload = function () {
                $http.get("php-db-conn/np04cachedvals.php?elemName=mpodpd").then(function (resultArr) {
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][0][0] = res["47875698459674"]?res["47875698459674"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][0][1] = res["47875698480154"]?res["47875698480154"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][0][2] = res["47875698480410"]?res["47875698480410"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][0][0] = res["47876000449562"]?res["47876000449562"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][0][1] = res["47876000470042"]?res["47876000470042"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][0][2] = res["47876000470298"]?res["47876000470298"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][1][0] = res["47875715236890"]?res["47875715236890"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][1][1] = res["47875715257370"]?res["47875715257370"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][1][2] = res["47875715257626"]?res["47875715257626"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][1][0] = res["47876017226778"]?res["47876017226778"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][1][1] = res["47876017247258"]?res["47876017247258"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][1][2] = res["47876017247514"]?res["47876017247514"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][2][0] = res["47875732014106"]?res["47875732014106"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][2][1] = res["47875732034586"]?res["47875732034586"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][2][2] = res["47875732034842"]?res["47875732034842"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][2][0] = res["47876034003994"]?res["47876034003994"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][2][1] = res["47876034024474"]?res["47876034024474"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][2][2] = res["47876034024730"]?res["47876034024730"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][3][0] = res["47875748791322"]?res["47875748791322"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][3][1] = res["47875748811802"]?res["47875748811802"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[1][3][2] = res["47875748812058"]?res["47875748812058"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][3][0] = res["47876050781210"]?res["47876050781210"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][3][1] = res["47876050801690"]?res["47876050801690"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[3][3][2] = res["47876050801946"]?res["47876050801946"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][4][0] = res["47875614573594"]?res["47875614573594"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][4][1] = res["47875614594074"]?res["47875614594074"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][4][2] = res["47875614594330"]?res["47875614594330"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][4][0] = res["47875916563482"]?res["47875916563482"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][4][1] = res["47875916583962"]?res["47875916583962"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][4][2] = res["47875916584218"]?res["47875916584218"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][5][0] = res["47875631350810"]?res["47875631350810"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][5][1] = res["47875631371290"]?res["47875631371290"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][5][2] = res["47875631371546"]?res["47875631371546"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][5][0] = res["47875933340698"]?res["47875933340698"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][5][1] = res["47875933361178"]?res["47875933361178"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][5][2] = res["47875933361434"]?res["47875933361434"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][6][0] = res["47875648128026"]?res["47875648128026"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][6][1] = res["47875648148506"]?res["47875648148506"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][6][2] = res["47875648148762"]?res["47875648148762"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][6][0] = res["47875950117914"]?res["47875950117914"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][6][1] = res["47875950138394"]?res["47875950138394"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][6][2] = res["47875950138650"]?res["47875950138650"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][7][0] = res["47875664905242"]?res["47875664905242"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][7][1] = res["47875664925722"]?res["47875664925722"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][7][2] = res["47875664925978"]?res["47875664925978"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][7][0] = res["47875966895130"]?res["47875966895130"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][7][1] = res["47875966915610"]?res["47875966915610"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][7][2] = res["47875966915866"]?res["47875966915866"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][0][0] = res["47875547464730"]?res["47875547464730"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][0][1] = res["47875547485210"]?res["47875547485210"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][0][2] = res["47875547485466"]?res["47875547485466"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][0][0] = res["47875849454618"]?res["47875849454618"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][0][1] = res["47875849475098"]?res["47875849475098"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][0][2] = res["47875849475354"]?res["47875849475354"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][1][0] = res["47875564241946"]?res["47875564241946"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][1][1] = res["47875564262426"]?res["47875564262426"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][1][2] = res["47875564262682"]?res["47875564262682"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][1][0] = res["47875866231834"]?res["47875866231834"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][1][1] = res["47875866252314"]?res["47875866252314"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][1][2] = res["47875866252570"]?res["47875866252570"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][2][0] = res["47875581019162"]?res["47875581019162"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][2][1] = res["47875581039642"]?res["47875581039642"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][2][2] = res["47875581039898"]?res["47875581039898"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][2][0] = res["47875883009050"]?res["47875883009050"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][2][1] = res["47875883029530"]?res["47875883029530"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][2][2] = res["47875883029786"]?res["47875883029786"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][3][0] = res["47875597796378"]?res["47875597796378"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][3][1] = res["47875597816858"]?res["47875597816858"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[0][3][2] = res["47875597817114"]?res["47875597817114"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][3][0] = res["47875899786266"]?res["47875899786266"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][3][1] = res["47875899806746"]?res["47875899806746"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack6[2][3][2] = res["47875899807002"]?res["47875899807002"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][0][0] = res["47873685193754"]?res["47873685193754"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][0][1] = res["47873685214234"]?res["47873685214234"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][0][2] = res["47873685214490"]?res["47873685214490"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][0][0] = res["47873987183642"]?res["47873987183642"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][0][1] = res["47873987204122"]?res["47873987204122"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][0][2] = res["47873987204378"]?res["47873987204378"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][1][0] = res["47873701970970"]?res["47873701970970"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][1][1] = res["47873701991450"]?res["47873701991450"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][1][2] = res["47873701991706"]?res["47873701991706"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][1][0] = res["47874003960858"]?res["47874003960858"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][1][1] = res["47874003981338"]?res["47874003981338"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][1][2] = res["47874003981594"]?res["47874003981594"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][2][0] = res["47873718748186"]?res["47873718748186"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][2][1] = res["47873718768666"]?res["47873718768666"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][2][2] = res["47873718768922"]?res["47873718768922"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][2][0] = res["47874020738074"]?res["47874020738074"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][2][1] = res["47874020758554"]?res["47874020758554"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][2][2] = res["47874020758810"]?res["47874020758810"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][3][0] = res["47873735525402"]?res["47873735525402"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][3][1] = res["47873735545882"]?res["47873735545882"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[1][3][2] = res["47873735546138"]?res["47873735546138"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][3][0] = res["47874037515290"]?res["47874037515290"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][3][1] = res["47874037535770"]?res["47874037535770"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[3][3][2] = res["47874037536026"]?res["47874037536026"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][4][0] = res["47873601307674"]?res["47873601307674"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][4][1] = res["47873601328154"]?res["47873601328154"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][4][2] = res["47873601328410"]?res["47873601328410"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][4][0] = res["47873903297562"]?res["47873903297562"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][4][1] = res["47873903318042"]?res["47873903318042"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][4][2] = res["47873903318298"]?res["47873903318298"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][5][0] = res["47873618084890"]?res["47873618084890"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][5][1] = res["47873618105370"]?res["47873618105370"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][5][2] = res["47873618105626"]?res["47873618105626"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][5][0] = res["47873920074778"]?res["47873920074778"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][5][1] = res["47873920095258"]?res["47873920095258"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][5][2] = res["47873920095514"]?res["47873920095514"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][6][0] = res["47873634862106"]?res["47873634862106"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][6][1] = res["47873634882586"]?res["47873634882586"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][6][2] = res["47873634882842"]?res["47873634882842"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][6][0] = res["47873936851994"]?res["47873936851994"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][6][1] = res["47873936872474"]?res["47873936872474"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][6][2] = res["47873936872730"]?res["47873936872730"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][7][0] = res["47873651639322"]?res["47873651639322"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][7][1] = res["47873651659802"]?res["47873651659802"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][7][2] = res["47873651660058"]?res["47873651660058"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][7][0] = res["47873953629210"]?res["47873953629210"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][7][1] = res["47873953649690"]?res["47873953649690"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][7][2] = res["47873953649946"]?res["47873953649946"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][0][0] = res["47873534198810"]?res["47873534198810"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][0][1] = res["47873534219290"]?res["47873534219290"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][0][2] = res["47873534219546"]?res["47873534219546"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][0][0] = res["47873836188698"]?res["47873836188698"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][0][1] = res["47873836209178"]?res["47873836209178"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][0][2] = res["47873836209434"]?res["47873836209434"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][1][0] = res["47873550976026"]?res["47873550976026"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][1][1] = res["47873550996506"]?res["47873550996506"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][1][2] = res["47873550996762"]?res["47873550996762"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][1][0] = res["47873852965914"]?res["47873852965914"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][1][1] = res["47873852986394"]?res["47873852986394"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][1][2] = res["47873852986650"]?res["47873852986650"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][2][0] = res["47873567753242"]?res["47873567753242"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][2][1] = res["47873567773722"]?res["47873567773722"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][2][2] = res["47873567773978"]?res["47873567773978"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][2][0] = res["47873869743130"]?res["47873869743130"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][2][1] = res["47873869763610"]?res["47873869763610"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][2][2] = res["47873869763866"]?res["47873869763866"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][3][0] = res["47873584530458"]?res["47873584530458"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][3][1] = res["47873584550938"]?res["47873584550938"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[0][3][2] = res["47873584551194"]?res["47873584551194"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][3][0] = res["47873886520346"]?res["47873886520346"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][3][1] = res["47873886540826"]?res["47873886540826"][0]:"N/A";
                    self.NP04_DCS_01_Wiener_MPODPD_Rack4[2][3][2] = res["47873886541082"]?res["47873886541082"][0]:"N/A";
                    self.NP04_MHT0100AI = res["47878785489690"]?res["47878785489690"][0]:"N/A";
                    self.NP04_TT0100AI = res["47878802266906"]?res["47878802266906"][0]:"N/A";
                    self.NP04_PT0106AI = res["47878819044122"]?res["47878819044122"][0]:"N/A";
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