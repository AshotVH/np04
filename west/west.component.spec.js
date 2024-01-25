describe('west', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('west')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("west", {$scope: $scope});

        });
        describe('westController', function() {

            it('should create a `west` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('west');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});