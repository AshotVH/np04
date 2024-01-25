describe('inside', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('inside')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("isnide", {$scope: $scope});

        });
        describe('isnideController', function() {

            it('should create a `inside` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('inside');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});