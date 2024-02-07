angular.
module('ng04SlowControlApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/', {
            template: '<home></home>'
        }).
        when('/cryostat', {
            template: '<cryostat></cryostat>'
        }).
        when('/inside', {
            template: '<inside></inside>'
        }).
        when('/histogram/:elemId/:days?', {
            template: '<histogram></histogram>'
        }).
        when('/zmonitor', {
            template: '<zmonitor></zmonitor>'
        }).
        when('/crate/:crateId', {
            template: '<crate></crate>'
        }).
        when('/wib/:crateId/:wibId', {
            template: '<wib></wib>'
        }).
        when('/mpodpd', {
            template: '<mpodpd></mpodpd>'
        }).
        when('/bellegarde', {
            template: '<bellegarde></bellegarde>'
        }).
        when('/jura', {
            template: '<jura></jura>'
        }).
        when('/lausanne', {
            template: '<lausanne></lausanne>'
        }).
        when('/saleve', {
            template: '<saleve></saleve>'
        }).
        when('/gauges', {
            template: '<gauges></gauges>'
        }).
        when('/top', {
            template: '<top></top>'
        }).
        when('/purity', {
            template: '<purity></purity>'
        }).
        when('/pl506', {
            template: '<pl506></pl506>'
        }).
        when('/tinternal', {
            template: '<tinternal></tinternal>'
        }).
        when('/north', {
            template: '<north></north>'
        }).
        when('/east', {
            template: '<east></east>'
        }).
        when('/west', {
            template: '<west></west>'
        }).
        when('/bottom', {
            template: '<bottom></bottom>'
        }).
        when('/south', {
            template: '<south></south>'
        }).
        when('/floor', {
            template: '<floor></floor>'
        }).
        when('/comissioning', {
            template: '<comissioning></comissioning>'
        }).
        when('/spbottom', {
            template: '<spbottom></spbottom>'
        }).
        when('/multiplexer/', {
            template: '<multiplexer></multiplexer>'
        }).
        when('/spgradient', {
            template: '<spgradient></spgradient>'
        }).
        when('/splevel2', {
            template: '<splevel2></splevel2>'
        }).
        when('/spwall', {
            template: '<spwall></spwall>'
        }).
        when('/mpodpdras', {
            template: '<mpodpdras></mpodpdras>'
        }).
        when('/mpodpddas', {
            template: '<mpodpddas></mpodpddas>'
        }).
        when('/mpodcehv', {
            template: '<mpodcehv></mpodcehv>'
        }).
        when('/mpodcehvras', {
            template: '<mpodcehvras></mpodcehvras>'
        }).
        when('/mpodcehvdas', {
            template: '<mpodcehvdas></mpodcehvdas>'
        }).
        when('/pipes', {
            template: '<pipes></pipes>'
        }).
        when('/beamplug', {
            template: '<beamplug></beamplug>'
        }).
        when('/gaugehist/:elemId/:days?', {
            template: '<gaugehist></gaugehist>'
        }).
        when('/groundplanes/:days?', {
            template: '<groundplanes></groundplanes>'
        }).
        when('/cachedhist/:elemId', {
            template: '<cachedhist></cachedhist>'
        }).
        when('/cryohenics', {
            template: '<cryogenics></cryogenics>'
        }).
        when('/histogramaverage/:elemId/:days?', {
            template: '<histogramaverage></histogramaverage>'
        }).
        when('/histogramrange/:elemId/:start/:end', {
            template: '<histogramrange></histogramrange>'
        }).
        when('/coldbox', {
            template: '<coldbox></coldbox>'
        }).
        when('/xenon', {
            template: '<xenon></xenon>'
        }).
        when('/cameras', {
            template: '<cameras></cameras>'
        }).
        otherwise('/');
    }
]);