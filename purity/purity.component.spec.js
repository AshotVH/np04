describe('purity', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('purity')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("purity", {$scope: $scope});

        });
        describe('purityController', function() {

            it('should create a `purity` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('purity');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});