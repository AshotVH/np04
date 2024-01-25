describe('histogramrange', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('histogramrange')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("histogramrange", {$scope: $scope});

        });
        describe('histogramrangeController', function() {

            it('should create a `histogramrange` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('histogramrange');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});