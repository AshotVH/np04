'use strict';
angular.module('groundplanes', []).component('groundplanes', {
    templateUrl: 'groundplanes/groundplanes.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function groundplanesController($routeParams, $scope, $window, $http, $interval) {
        this.pageTitle = "NP04 Heinzinger High Voltage";
        this.natalie = 1;
        let self = this;

        if ($routeParams.days != null) {
            console.log(this.days);
            this.days = $routeParams.days;
        } else {
            this.days = 0.33;
        }

        var fundays = this.days;

        this.dayChanger = function (fundays) {
            $window.location.href = "#!/groundplanes/" + fundays;
        };

        this.elements = [
            [[47894757376282,'NP04_DCS_01:Heinz_I.']],
            [[48002299330842,'NP04_DCS_01:Heinz_V_Cathode.']]];

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=groundplanes")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);

                    self.NP04_MHT0100AI = res["47878785489690"][0];
                    self.NP04_TT0100AI = res["47878802266906"][0];
                    self.NP04_PT0106AI = res["47878819044122"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch01 = res["47895663345946"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch02 = res["47895680123162"][0];
                    self.NP04_DCS_01_Heinz_I = res["47894757376282"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch03 = res["47895696900378"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch04 = res["47895713677594"][0];
                    self.NP04_DCS_01_Heinz_Limit = res["48000437059866"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch05 = res["47895730454810"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch06 = res["47895747232026"][0];
                    self.NP04_DCS_01_Heinz_V_Cathode = res["48002299330842"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch07 = res["47895764009242"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch08 = res["47895780786458"][0];
                    self.NP04_DCS_01_Heinz_V_Raw = res["48001913454874"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch09 = res["47895797563674"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch10 = res["47895814340890"][0];
                    self.NP04_DCS_01_Heinz_V_Cathode_97MOhms = res["48002852978970"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch11 = res["47895831118106"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch12 = res["47895864672538"][0];
                    self.NP04_DCS_01_GroundPlanes_Ch14 = res["47895881449754"][0];
                    self.NP04_DCS_01_Heinz_OnOff_Sts = res["48001980563738"][0];

                });


            console.log("interval occured");

            function getData (chart, days) {
                var counter = 0;
                var arr = [];
                console.log("days = " + days);

                var len = self.elements[chart].length;
                for (var j = 0; j < self.elements[chart].length; j++) {
                    var dt = [];
                    $http.get("php-db-conn/histogram.conn.php?elemId=" + self.elements[chart][j][0] + "&days=" + days).then(function onSuccess(response) {
                        dt.push(response.data.records);
                        counter+=1;
                        if (counter === len) {
                            createSeriesOptions(chart, dt);
                        }
                        return response.data.records;
                    }).catch(function onError(data) {
                        counter+=1;
                        dt.push(moment(moment()) + ",0");
                    });
                }
            }


            function createSeriesOptions (chart, data) {
                var series = [];
                var counter = 0;
                var nm = [];
                for (var j = 0; j < self.elements[chart].length; j++) {
                    nm.push(self.elements[chart][j][1]);
                }
                angular.forEach(nm, function () {
                    series[counter] = {
                        name: nm[counter],
                        type: 'line',
                        data: data[counter],
                        lineWidth: 1.0
                    };
                    counter += 1;

                    if (counter === nm.length) {
                        createChart(series, 'container'+chart);
                        return series;
                    }
                });
            };

            function createChart(seriesOptions, divID) {
                var options = seriesOptions;
                var ch = Highcharts.stockChart(divID, {

                    chart: {
                        zoomType: 'xy'
                    },

                    legend: {
                        enabled: true,
                        align: 'center',
                        verticalAlign: 'top',
                        itemStyle: {
                            fontSize: '0.5vw'
                        }
                    },

                    time: {
                        useUTC: false
                    },

                    scrollbar: {
                        enabled: false
                    },

                    navigator: {
                        enabled: false
                    },

                    rangeSelector: {
                        enabled: false
                    },

                    tooltip: {
                        valueDecimals: 5
                    },

                    xAxis: {
                        type: 'datetime',
                        ordinal: false
                    },

                    yAxis: {
                        useHTML: true,
                    },

                    series: options

                });

            }

            for (var i = 0; i<self.elements.length; i++) {
                getData(i, fundays);
            }

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