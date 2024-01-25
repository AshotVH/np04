describe('histogramaverage', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('histogramaverage')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("histogramaverage", {$scope: $scope});

        });
        describe('histogramaverageController', function() {

            it('should create a `histogramaverage` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('histogramaverage');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});