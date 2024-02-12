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
            this.width = 90;"use strict";
            angular.module("histogram", []).component("histogram", {
              templateUrl: "histogram/histogram.template.html",
              controller: [
                "$routeParams",
                "$scope",
                "$window",
                "$http",
                "$interval",
                function histogramController(
                  $routeParams,
                  $scope,
                  $window,
                  $http,
                  $interval
                )  {
                  const self = this;
                  this.natalie = 1;
                  this.pageTitle = "Histogram";
                  this.elemId = $routeParams.elemId;
                  this.daysAndHours = '0-6';
                  this.daysAndHoursToUTCDateRange = function (daysAndHours) {
                    const [days, hours] = [parseInt(daysAndHours.split('-')[0]), parseInt(daysAndHours.split('-')[1])];
                    const endDate = new Date();
                    const startDate = new Date();
                    startDate.setTime(endDate.getTime() - days * 86400000 - hours * 3600000);
                    const endDateStr = endDate.toISOString().slice(0, 19);
                    const startDateStr = startDate.toISOString().slice(0, 19);
                    return [startDateStr, endDateStr];
                  };
                  this.toggleDataTable = function () {
                    const highchartsDataTable = document.getElementsByClassName(
                        "highcharts-data-table"
                    )[0];
                    highchartsDataTable.classList.toggle("hidden");
                  };
                  this.drawChart = function (containerId, chartData) {
                    Highcharts.chart(containerId, {
                      chart: {
                        zoomType: "xy",
                      },
                      title: {
                        text: ''
                      },
                      time: {
                        useUTC: false,
                      },
                      credits: {
                        enabled: false
                      },
                      boost: {
                        useGPUTranslations: true,
                      },
                      xAxis: {
                        type: "datetime",
                        ordinal: false,
            
                      },
                      yAxis: {
                        title: {
                          text: " "
                        }
                      },
                      legend: {
                        enabled: false
                      },
                      exporting: {
                        // showTable: true,
                        csv: {
                          columnHeaderFormatter: function (item, key) {
                            if (!item || item instanceof Highcharts.Axis) {
                              return "Timestamps";
                            } else {
                              return item.name;
                            }
                          },
                        },
                      },
                      series: [
                        {
                          data: chartData,
                          type: "line",
                          lineWidth: 1.0,
                          tooltip: {
                            valueDecimals: 5,
                            xDateFormat: '%Y-%b-%e, %H:%M:%S'
                          },
                          name: "Values",
                          color: "#ff0000",
                        },
                      ],
                    });
                  }
                  this.range = function (start, end) {
                    if (!start || !end) {
                      console.log("no start or end");
                      return false;
                    }
                    const startDate = new Date(start);
                    const endDate = new Date(end);
                    const startDateStr = startDate.toISOString().slice(0, 19);
                    const endDateStr = endDate.toISOString().slice(0, 19);
                    $interval.cancel;
                    $http.get("php-db-conn/np02histogram.php?elemid=" + self.elemId + "&startdate=" + startDateStr + "&enddate=" + endDateStr)
                        .then(function onSuccess(response) {
                          const chartData = Object.entries(response.data).map(([key, value]) => {
                            return [parseInt(key), value];
                          });
                          self.drawChart("container", chartData);
                        });
                    return false;
                  };
                  this.reload = function () {
                    $interval.cancel;
                    const [startDateStr, endDateStr] = self.daysAndHoursToUTCDateRange(self.daysAndHours);
                    $http.get("php-db-conn/np02histogram.php?elemid=" + self.elemId + "&startdate=" + startDateStr + "&enddate=" + endDateStr)
                        .then(function onSuccess(response) {
                          const chartData = Object.entries(response.data).map(([key, value]) => {
                            return [parseInt(key), value];
                          });
                          self.drawChart("container", chartData);
                        });
                  };
                  this.dayChanger = function (daysAndHours) {
                    self.daysAndHours = daysAndHours;
                    self.reload();
                  };
                  this.setDays = function () {
                    if (!this.dd || this.dd < 1) return false;
                    this.dd = Math.round(this.dd);
                    self.daysAndHours = self.dd + '-' + '0';
                    self.reload();
                  };
                  this.promise;
                  this.reload();
                  $scope.start = function () {
                    $scope.stop();
                    self.promise = $interval(self.reload, 300000);
                  };
                  $scope.stop = function () {
                    $interval.cancel(self.promise);
                  };
                  $scope.start();
                  $scope.$on("$destroy", function () {
                    $scope.stop();
                  });
                },
              ],
            });
            
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