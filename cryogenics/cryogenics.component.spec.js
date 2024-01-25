describe('cryogenics', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('cryogenics')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("cryogenics", {$scope: $scope});

        });
        describe('cryogenicsController', function() {

            it('should create a `cryogenics` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('cryogenics');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});