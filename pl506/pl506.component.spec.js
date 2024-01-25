describe('zmonito', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('pl506')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("pl506", {$scope: $scope});

        });
        describe('zmonitoController', function() {

            it('should create a `pl506` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('inside');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});