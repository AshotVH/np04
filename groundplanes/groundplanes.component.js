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

            $http.get("php-db-conn/cachedVals.conn.php?elemId=groundplanes").then(function (resultArr) {
                let rArr = [];
                let resjson = angular.toJson(resultArr.data);
                let res = JSON.parse(resjson);
                for (let i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }


                self.NP04_MHT0100AI = rArr[0];
                self.NP04_TT0100AI = rArr[1];
                self.NP04_PT0106AI = rArr[2];


                self.NP04_DCS_01_Heinz_I = rArr[3];
                self.NP04_DCS_01_GroundPlanes_Ch01 = rArr[4];
                self.NP04_DCS_01_GroundPlanes_Ch02 = rArr[5];
                self.NP04_DCS_01_GroundPlanes_Ch03 = rArr[6];
                self.NP04_DCS_01_GroundPlanes_Ch04 = rArr[7];
                self.NP04_DCS_01_GroundPlanes_Ch05 = rArr[8];
                self.NP04_DCS_01_GroundPlanes_Ch06 = rArr[9];
                self.NP04_DCS_01_GroundPlanes_Ch07 = rArr[10];
                self.NP04_DCS_01_GroundPlanes_Ch08 = rArr[11];
                self.NP04_DCS_01_GroundPlanes_Ch09 = rArr[12];
                self.NP04_DCS_01_GroundPlanes_Ch10 = rArr[13];
                self.NP04_DCS_01_GroundPlanes_Ch11 = rArr[14];
                self.NP04_DCS_01_GroundPlanes_Ch12 = rArr[15];
                self.NP04_DCS_01_GroundPlanes_Ch14 = rArr[16];
                self.NP04_DCS_01_Heinz_Limit = rArr[17];
                self.NP04_DCS_01_Heinz_V_Raw = rArr[18];
                self.NP04_DCS_01_Heinz_OnOff_Sts = rArr[19];
                self.NP04_DCS_01_Heinz_V_Cathode = rArr[20];
                self.NP04_DCS_01_Heinz_V_Cathode_97MOhms = rArr[21];
                self.NP04_DCS_01_Emergency_Stop = 'NaN';
                self.NP04_DCS_01_Op_Mode = 'NaN';
                self.NP04_DCS_01_V_SetPoint = rArr[23];


                self.timestamp = rArr[rArr.length-1] * 1000;
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

            self.promise = $interval(self.reload, 60000);
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