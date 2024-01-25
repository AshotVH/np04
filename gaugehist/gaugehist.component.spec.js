describe('gaugehist', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('gaugehist')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("gaugehist", {$scope: $scope});

        });
        describe('gaugehistController', function() {

            it('should create a `gaugehist` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('gaugehist');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});