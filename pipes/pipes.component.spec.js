describe('pipes', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('pipes')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("pipes", {$scope: $scope});

        });
        describe('pipesController', function() {

            it('should create a `pipes` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('pipes');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});