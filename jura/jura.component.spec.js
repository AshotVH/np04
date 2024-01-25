describe('jura', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('jura')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("jura", {$scope: $scope});

        });
        describe('juraController', function() {

            it('should create a `jura` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('jura');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});