'use strict';
angular.module('histogramrange', []).component('histogramrange', {
    templateUrl: 'histogramrange/histogramrange.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function histogramrangeController($routeParams, $scope, $window, $http, $interval) {
            this.elemId = $routeParams.elemId;
            this.s = $routeParams.start;
            console.log($routeParams);
            this.e = $routeParams.end;
            this.pageTitle = this.elemId;
            this.natalie = 1;
            this.width = 90;
            this.respdata = [];
            var self = this;
            var fundays = this.days;
            var dd = 0;
            var start = this.s;
            var end = this.e;

            this.dayChanger = function (fundays) {
                $window.location.href = "#!/histogram/" + this.elemId + "/" + fundays;
            };

            this.range = function (start, end) {
                $window.location.href = "#!/histogramrange/" + this.elemId + "/" + start + "/" + end;
            };

            this.reload = function () {
                $interval.cancel;
                //$window.location.reload();
                //};

                var elemName = "";

                $http.get("php-db-conn/getname.php?elemId=" + self.elemId).then(function onSuccess(response) {
                    elemName = response;
                })

                $http.get("php-db-conn/histogramrange.conn.php?elemId=" + self.elemId + "&start=" + start + "&end=" + end).then(function onSuccess(response) {
                    //if (response != undefined && typeof response == "object") {
                    var title = elemName.data;
                    console.log("interval occured");

                    console.log(response.data.records);

                    //self.PlotData.push(self.values);
                    //self.PlotCat.push(self.labels);

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
            }

            // this.promise;

            this.reload();

            /*$scope.start = function() {
                $scope.stop();
                self.promise = $interval(self.reload, 300000);
            };

            $scope.stop = function() {
                $interval.cancel(self.promise);
            };
            $scope.start();

            $scope.$on('$destroy', function() {
                $scope.stop();
            });*/
        }
    ]
});