describe('top', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('top')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("top", {$scope: $scope});

        });
        describe('topController', function() {

            it('should create a `top` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('top');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});