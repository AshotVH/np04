describe('tinternal', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('tinternal')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("tinternal", {$scope: $scope});

        });
        describe('tinternalController', function() {

            it('should create a `tinternal` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('tinternal');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});