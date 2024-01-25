describe('multiplexer', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('multiplexer')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("multiplexer", {$scope: $scope});

        });
        describe('multiplexerController', function() {

            it('should create a `multiplexer` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('multiplexer');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});