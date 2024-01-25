'use strict';
angular.module('gaugehist', []).component('gaugehist', {
    templateUrl: 'gaugehist/gaugehist.template.html',
    controller: ['$routeParams', '$window', '$http', '$interval',
        function gaugehistController($routeParams, $window, $http, $interval) {
            this.elemId = $routeParams.elemId;
            if ($routeParams.days != null) {
                console.log(this.days);
                this.days = $routeParams.days;
            } else {
                this.days = 86400000;
            }
            this.pageTitle = this.elemId;
            this.natalie = 1;
            this.width = 90;
            let self = this;
            let fundays = this.days;

            this.dayChanger = function (funcdays) {
                $window.location.href = "#!/gaugehist/" + this.elemId + "/" + funcdays;
            };

            console.log(fundays);
            this.reload = function () {
                $window.location.reload();
            };
            $http.get("php-db-conn/straingauges.histogram.conn.php?elemId=" + self.elemId + "&days=" + fundays).then(function onSuccess(response) {
                //if (response != undefined && typeof response == "object") {
                let title = self.elemId;

                console.log(response.data.records);

                Highcharts.chart('container', {

                    chart: {
                        zoomType: 'x'
                    },

                    time: {
                        useUTC: false
                    },

                    title: {
                        text: self.elemId
                    },

                    subtitle: {
                        text: 'Using the Boost module'
                    },

                    tooltip: {
                        valueDecimals: 2
                    },

                    xAxis: {
                        type: 'datetime'
                    },

                    series: [{
                        data: response.data.records,
                        lineWidth: 1.0,
                        name: 'Values',
                        color: '#ff0000'
                    }]

                });





                //} else {
                //self.dayChanger(3);
                //}
            }).catch(function onError(data) {
                console.log(data);
                self.dayChanger(259200000);
            });
            if (this.days < 2) {
                $interval(this.reload, 60000);
            } else {
                $interval(this.reload, 300000);
            }
        }
    ]
});