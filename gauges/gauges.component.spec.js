describe('gauges', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('gauges')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("gauges", {$scope: $scope});

        });
        describe('gaugesController', function() {

            it('should create a `gauges` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('gauges');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});