describe('spbottom', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('spbottom')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("spbottom", {$scope: $scope});

        });
        describe('spbottomController', function() {

            it('should create a `spbottom` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('spbottom');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});