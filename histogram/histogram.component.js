'use strict';
angular.module('histogram', []).component('histogram', {
    templateUrl: 'histogram/histogram.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function histogramController($routeParams, $scope, $window, $http, $interval) {
            this.elemId = $routeParams.elemId;
            if ($routeParams.days != null) {
                console.log(this.days);
                this.days = $routeParams.days;
            } else {
                this.days = 0.33;
            }
            this.pageTitle = this.elemId;
            this.natalie = 1;
            this.width = 90;
            this.respdata = [];
            var self = this;
            var fundays = this.days;
            var dd = 0;
            var start;
            var end;

            this.dayChanger = function (fundays) {
                $window.location.href = "#!/histogram/" + this.elemId + "/" + fundays;
            };

            this.range = function (start, end) {
                $window.location.href = "#!/histogramrange/" + this.elemId + "/" + start + "/" + end;
            }

            this.average = function () {
                $window.location.href = "#!/histogramaverage/" + this.elemId + "/" + fundays;
            }

            console.log(fundays);

            this.reload = function () {
                $interval.cancel;
                //$window.location.reload();
                //};
                var elemName = "";

                $http.get("php-db-conn/getname.php?elemId=" + self.elemId).then(function onSuccess(response) {
                    elemName = response;
                })

                $http.get("php-db-conn/histogram.conn.php?elemId=" + self.elemId + "&days=" + fundays).then(function onSuccess(response) {
                    //if (response != undefined && typeof response == "object") {
                    console.log(elemName.data);
                    var title = elemName.data;
                    console.log("interval occured");

                    console.log(response.data.records);

                    //self.PlotData.push(self.values);
                    //self.PlotCat.push(self.labels);

                    if (self.elemId === "47894757376282" || self.elemId === "48002299330842" || self.elemId === "48001913454874") {
                        Highcharts.chart('container', {

                            chart: {
                                zoomType: 'xy'
                            },

                            time: {
                                useUTC: false
                            },

                            boost: {
                                useGPUTranslations: true
                            },

                            title: {
                                text: elemName.data
                            },

                            tooltip: {
                                valueDecimals: 5
                            },

                            xAxis: {
                                type: 'datetime',
                                ordinal: false
                            },

                            series: [{
                                data: response.data.records,
                                type: 'line',
                                lineWidth: 1.0,
                                tooltip: {
                                    valueDecimals: 5
                                },
                                name: 'Values',
                                color: '#ff0000'
                            }]

                        });
                    } else {
                        Highcharts.stockChart('container', {

                            chart: {
                                zoomType: 'xy'
                            },

                            rangeSelector: false,

                            time: {
                                useUTC: false
                            },

                            boost: {
                                useGPUTranslations: true
                            },

                            title: {
                                text: elemName.data
                            },

                            scrollbar: {
                                enabled: false
                            },

                            navigator: {
                                enabled: false
                            },

                            xAxis: {
                                type: 'datetime',
                                ordinal: false
                            },

                            series: [{
                                type: 'line',
                                data: response.data.records,
                                lineWidth: 1.0,
                                tooltip: {
                                    valueDecimals: 5
                                },
                                name: 'Values',
                                color: '#ff0000'
                            }]

                        });
                    }

                    //self.respdata = response.data.records;
                    //for (var i = 0; i < self.respdata.length; i++) {
                    //self.respdata[i][0] = moment.unix(self.respdata[i][0]/1000).format('DD/MM/YYYY HH:mm:ss');
                    //}


                    //} else {
                    //self.dayChanger(3);
                    //}
                }).catch(function onError(data) {
                    console.log(data);
                });
            };

            this.promise;

            this.reload();

            $scope.start = function() {
                $scope.stop();
                if (self.days < 2) {
                    self.promise = $interval(self.reload, 60000);
                } else {
                    self.promise = $interval(self.reload, 300000);
                }
            };

            $scope.stop = function() {
                $interval.cancel(self.promise);
            };
            $scope.start();

            $scope.$on('$destroy', function() {
                $scope.stop();
            });
        }
    ]
});