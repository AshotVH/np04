describe('lausanne', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('lausanne')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("lausanne", {$scope: $scope});

        });
        describe('lausanneController', function() {

            it('should create a `lausanne` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('lausanne');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});