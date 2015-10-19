describe('appctrl', function() {
	beforeEach(module('acApp'));

	var AppCtrl, $scope;

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		AppCtrl = $controller('AppCtrl', {
			$scope: $scope
		});
	}));

	describe('on startup', function() {
		it('should not be booted', function() {
			expect($scope.booted).toEqual(false);
		});
	});

	describe('on startup', function() {
		it('should boot', function() {
			$scope.boot();
			expect($scope.booted).toEqual(true);
		});
	});
});