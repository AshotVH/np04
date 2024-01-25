'use strict';
angular.module('home', []).component('home', {
    templateUrl: 'home/home.template.html',
    controller: function homeController($http, $q, $interval) {
        this.pageTitle = "NP04 Slow Control app";
        this.natalie = 1;
        let self = this;
    }
});