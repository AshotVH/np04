describe('zmonito', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('mpodcehv')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("mpodcehv", {$scope: $scope});

        });
        describe('zmonitoController', function() {

            it('should create a `mpodcehv` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('inside');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});