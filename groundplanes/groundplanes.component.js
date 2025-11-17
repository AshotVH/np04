'use strict';
angular.module('groundplanes', []).component('groundplanes', {
    templateUrl: 'groundplanes/groundplanes.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function groundplanesController($routeParams, $scope, $window, $http, $interval) {
            this.pageTitle = "NP04 Heinzinger High Voltage";
            this.natalie = 1;
            const self = this;
                     
            this.elements = [
            [47894757376282,'NP04_DCS_01:Heinz_I.'],
            [48002299330842,'NP04_DCS_01:Heinz_V_Cathode.']];
                
            this.daysAndHours = '0-6';
            self.activeDayBtn = 1;
            $scope.buttonIsActive = [false, false, false, false, false, false, false];
            $scope.buttonIsActive[self.activeDayBtn] = true;
            $scope.buttonIsLodaing = [false, false, false, false, false, false, false];
            $scope.setDaysBtnLoading = false;
            $scope.rangeBtnLoading = false;
            $scope.requestsList = new Array(9).fill(false);
            $scope.requestsList[1] = true;    
            this.daysAndHoursToBtnNum = function (daysAndHours){
                switch(daysAndHours){
                  case '0-1': 
                    return 0;
                  case '0-6':
                    return 1;
                  case '0-12':
                   return 2;
                  case '1-0':
                    return 3;
                  case '3-0':
                    return 4;
                  case '7-0':
                    return 5;
                  case '10-0':
                    return 6;
                }
              }    
            this.daysAndHoursToUTCDateRange = function (daysAndHours) {
                const [days, hours] = [parseInt(daysAndHours.split('-')[0]), parseInt(daysAndHours.split('-')[1])];
                const endDate = new Date();
                const startDate = new Date();
                startDate.setTime(endDate.getTime() - days * 86400000 - hours * 3600000);
                const endDateStr = endDate.toISOString().slice(0, 19);
                const startDateStr = startDate.toISOString().slice(0, 19);
                return [startDateStr, endDateStr];
            };
            this.drawChart = function (containerId, chartData, charttitle) {
                Highcharts.chart(containerId, {
                  chart: {
                    zoomType: "xy",
                  },
                  title: {
                    text: charttitle,
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
            this.range = function (event, start, end) {
                event.preventDefault();
                if (!start || !end) {
                //   console.log("no start or end");
                  return false;
                }
                if(start>=end){
                //   console.log("incorrect range");
                  return false;
                }
                const startDate = new Date(start);
                const endDate = new Date(end);
                const startDateStr = startDate.toISOString().slice(0, 19);
                const endDateStr = endDate.toISOString().slice(0, 19);
                $interval.cancel;
                $scope.rangeBtnLoading = true;
          
                $http.get("https://np04-data-api-slow-control.app.cern.ch/np04histogram/" + self.elements[0][0] + "/" + startDateStr + "/" + endDateStr)
                    .then(function onSuccess(response) {
                     
                      const chartData = Object.entries(response.data).map(([key, value]) => {
                        return [parseInt(key), value];
                      });
                      self.drawChart("container0", chartData, self.elements[0][1]);
                      $scope.rangeBtnLoading = false;
                      $scope.requestsList.fill(false);
                      $scope.requestsList[8] = true;
        
                    });
                $http.get("https://np04-data-api-slow-control.app.cern.ch/np04histogram/" + self.elements[1][0] + "/" + startDateStr + "/" + endDateStr)
                    .then(function onSuccess(response) {
                    
                      const chartData = Object.entries(response.data).map(([key, value]) => {
                        return [parseInt(key), value];
                      });
                      self.drawChart("container1", chartData, self.elements[1][1]);
                      $scope.rangeBtnLoading = false;
                      $scope.requestsList.fill(false);
                      $scope.requestsList[8] = true;
        
                    });
                return false;
              };
            this.reload = function (setDaysBtnPressed = false) {
                self.timestamp = new Date();
                $http
                    .get("https://np04-data-api-slow-control.app.cern.ch/np04cachedvals?elemname=groundplanes")
                    .then(function (result) {
                        const res = result.data;
                        // console.log(res);
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
               
                $interval.cancel;
                // console.log($scope.setDaysBtnLoading);
               
                const [startDateStr, endDateStr] = self.daysAndHoursToUTCDateRange(self.daysAndHours);
               
                $http.get("https://np04-data-api-slow-control.app.cern.ch/np04histogram/" + self.elements[0][0] + "/" + startDateStr + "/" + endDateStr)
                    .then(function onSuccess(response) {
                      
                      const chartData = Object.entries(response.data).map(([key, value]) => {
                        return [parseInt(key), value];
                      });
                    //   console.log(chartData);
                      self.drawChart("container0", chartData, self.elements[0][1]);
                    });
                $http.get("https://np04-data-api-slow-control.app.cern.ch/np04histogram/" + self.elements[1][0] + "/" + startDateStr + "/" + endDateStr)
                    .then(function onSuccess(response) {
                      
                      const chartData = Object.entries(response.data).map(([key, value]) => {
                        return [parseInt(key), value];
                      });
                      self.drawChart("container1", chartData, self.elements[1][1]);
                      const loadingBtnNum = self.daysAndHoursToBtnNum(self.daysAndHours);
                      $scope.buttonIsLodaing[loadingBtnNum] = false;
                         
                      if(setDaysBtnPressed){
                      $scope.requestsList.fill(false);
                      $scope.requestsList[7] = true;
                      $scope.setDaysBtnLoading = false;
                      } else {
                      $scope.requestsList.fill(false);
                      $scope.requestsList[self.daysAndHoursToBtnNum(self.daysAndHours)] = true;
                    //   console.log($scope.requestsList); 
                      }
                    });
            
            
                
            };
            this.dayChanger = function (daysAndHours, btnNum) {
        
                self.loadingDayBtn = btnNum;
                $scope.buttonIsLodaing[self.loadingDayBtn] = true;
                self.activeDayBtn = btnNum;
                for (let i = 0; i < $scope.buttonIsActive.length; i++){
                  if (i == self.activeDayBtn){
                    $scope.buttonIsActive[i] = true;
                    
                  } else {
                    $scope.buttonIsActive[i] = false;
                   
                  }
                }
        
                // console.log(self.loadingDayBtn);
           
                
                self.daysAndHours = daysAndHours;
                self.reload();
            };
            this.setDays = function (event) {
                event.preventDefault();
                if (!self.dd || self.dd < 1) return false;
                self.dd = Math.round(self.dd);
                self.daysAndHours = self.dd + '-' + '0';
                $scope.setDaysBtnLoading = true;
                // console.log($scope.setDaysBtnLoading);
                self.reload(true);
                
              };

            
            

            this.promise;
            this.reload();

            $scope.start = function () {
                $scope.stop();

                self.promise = $interval(self.reload, 60000);
            };

            $scope.stop = function () {
                $interval.cancel(self.promise);
            };
            $scope.start();

            $scope.$on('$destroy', function () {
                $scope.stop();
            });
        }
    ]
});