describe('bottom', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('bottom')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("bottom", {$scope: $scope});

        });
        describe('bottomController', function() {

            it('should create a `bottom` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('bottom');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});