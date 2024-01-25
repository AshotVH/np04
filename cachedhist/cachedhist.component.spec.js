describe('cachedhist', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('cachedhist')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("cachedhist", {$scope: $scope});

        });
        describe('cachedhistController', function() {

            it('should create a `cachedhist` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('cachedhist');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});