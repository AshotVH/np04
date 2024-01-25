describe('splevel2', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('splevel2')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("splevel2", {$scope: $scope});

        });
        describe('splevel2Controller', function() {

            it('should create a `splevel2` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('splevel2');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});