'use strict';
angular.module('cachedhist', []).component('cachedhist', {
    templateUrl: 'cachedhist/cachedhist.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function cachedhistController($routeParams, $scope, $window, $http, $interval) {
            this.elemId = $routeParams.elemId;
            this.pageTitle = this.elemId;
            this.natalie = 1;
            this.width = 90;
            this.respdata = [];
            let self = this;

            this.dayChanger = function (funcdays) {
                $window.location.href = "#!/cachedhist/" + this.elemId;
            };
            this.reload = function () {
                $interval.cancel;
                //$window.location.reload();
                //};

                $http.get("php-db-conn/cachehist.conn.php?elemId=" + self.elemId).then(function onSuccess(response) {
                    //if (response != undefined && typeof response == "object") {
                    let title = self.elemId;
                    console.log("interval occured");

                    console.log(response.data);

                    //self.PlotData.push(self.values);
                    //self.PlotCat.push(self.labels);

                    let finaldata = [];
                    let k = 0;
                    console.log(response.data[0].length);
                    for (let i = 0; i < response.data.length; i++) {
                        for (let j = 0; j < response.data[i].length; j++) {
                            //console.log(i);
                            finaldata.push(response.data[i][j]);
                        }
                    }
                    console.log(finaldata);
                    /*$http.get("php-db-conn/histogram.conn.php?elemId=" + self.elemId + "&days=1.08").then(function onSuccess(resp) {
                        for (let i = 0; i < resp.data.length; i++) {
                            finaldata.push(resp.data[i]);
                        }*/
                        Highcharts.stockChart('container', {


                            chart: {
                                zoomType: 'xy'
                            },

                            rangeSelector: {
                                allButtonsEnabled: true,
                                buttons: [{
                                    count: 1,
                                    type: 'hour',
                                    text: '1 hour'
                                }, {
                                    count: 6,
                                    type: 'hour',
                                    text: '6 hours'
                                }, {
                                    count: 12,
                                    type: 'hour',
                                    text: '12 hours'
                                }, {
                                    count: 1,
                                    type: 'day',
                                    text: '1 day'
                                }, {
                                    count: 3,
                                    type: 'day',
                                    text: '3 days'
                                }, {
                                    count: 7,
                                    type: 'day',
                                    text: '7 days'
                                }],
                                buttonTheme: {
                                    width: 60
                                },
                                selected: 3
                            },

                            time: {
                                useUTC: false
                            },

                            title: {
                                text: self.elemId
                            },

                            scrollbar: {
                                enabled: false
                            },

                            navigator: {
                                enabled: false
                            },

                            tooltip: {
                                valueDecimals: 5
                            },

                            xAxis: {
                                type: 'datetime',
                                ordinal: false
                            },

                            series: [{
                                data: finaldata,
                                lineWidth: 1.0,
                                name: 'Values',
                                color: '#ff0000'
                            }]

                        });
                    }).catch(function onError(d) {
                        console.log(d);
                    });
                    //self.respdata = response.data.records;
                    //for (let i = 0; i < self.respdata.length; i++) {
                    //self.respdata[i][0] = moment.unix(self.respdata[i][0]/1000).format('DD/MM/YYYY HH:mm:ss');
                    //}


                    //} else {
                    //self.dayChanger(3);
                    //}
                /*}).catch(function onError(data) {
                    console.log(data);
                });*/
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