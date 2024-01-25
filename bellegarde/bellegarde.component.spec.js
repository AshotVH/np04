describe('bellegarde', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('bellegarde')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("bellegarde", {$scope: $scope});

        });
        describe('bellegardeController', function() {

            it('should create a `bellegarde` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('bellegarde');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});