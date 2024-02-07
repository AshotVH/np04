describe('cameras', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('cameras')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("cameras", {$scope: $scope});

        });
        describe('camerasController', function() {

            it('should create a `cameras` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('cameras');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});