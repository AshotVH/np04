describe('zmonito', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('beamplug')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("beamplug", {$scope: $scope});

        });
        describe('zmonitoController', function() {

            it('should create a `beamplug` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('inside');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});