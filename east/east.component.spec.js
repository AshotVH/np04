describe('east', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('east')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("east", {$scope: $scope});

        });
        describe('eastController', function() {

            it('should create a `east` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('east');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});