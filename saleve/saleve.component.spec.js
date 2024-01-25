describe('saleve', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('saleve')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("saleve", {$scope: $scope});

        });
        describe('saleveController', function() {

            it('should create a `saleve` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('saleve');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});