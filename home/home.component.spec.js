describe('home', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('home');
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("home", {$scope: $scope});

        });
        describe('homeController', function() {

            it('should create a `home` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('home');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });

});