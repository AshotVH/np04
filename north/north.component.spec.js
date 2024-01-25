describe('north', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('north')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("north", {$scope: $scope});

        });
        describe('northController', function() {

            it('should create a `north` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('north');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});