describe('homectrl', function() {
    beforeEach(module('acApp'));

    var HomeCtrl, $scope, enqueued;

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        HomeCtrl = $controller('HomeCtrl', {
            $scope: $scope,
            AircraftQueueService: {
                clear: function() {},
                dequeueAircraft: function() { return enqueued ? {type: 'cargo', size: 'small'} : undefined },
                enqueueAircraft: function() { enqueued = true },
                peekAllAircraftInOrder: function() {},
                peekNextAircraft: function() {}
            }
        });
        enqueued = false;
    }));

    describe('on boot', function() {
        it('should not show modal', function() {
            expect($scope.showAddModal).toEqual(false);
        });
    });

    describe('on add aircraft', function() {
        it('should show add modal', function() {
            $scope.showAdd();
            expect($scope.showAddModal).toEqual(true);
        });

        it('should hide add modal', function() {
            $scope.cancelAdd();
            expect($scope.showAddModal).toEqual(false);
        });
    });

    describe('on add aircraft', function() {
        it('should disable Add button when no size/type', function() {
            $scope.showAdd();
            expect($scope.canAdd()).toBeFalsy();
        });
    });

    describe('on add aircraft', function() {
        it('should disable Add button when only one of size or type', function() {
            $scope.showAdd();
            $scope.addType = 'cargo';
            expect($scope.canAdd()).toBeFalsy();

            $scope.addType = null;
            $scope.addSize = 'large';
            expect($scope.canAdd()).toBeFalsy();
        });
    });

    describe('on add aircraft', function() {
        it('should enable Add button when both options are selected', function() {
            $scope.showAdd();
            $scope.addType = 'cargo';
            $scope.addSize = 'large';
            expect($scope.canAdd()).toBeTruthy();
        });
    });

    describe('on add aircraft', function() {
        it('should guard against incomplete add', function() {
            $scope.showAdd();
            $scope.add();
            expect(enqueued).toEqual(false);
        });
    });

    describe('on add aircraft', function() {
        it('should enqueue aircraft when both options are provided', function() {
            $scope.showAdd();
            $scope.addType = 'cargo';
            $scope.addSize = 'large';
            $scope.add();
            expect(enqueued).toEqual(true);
        });
    });

    describe('on dequeue aircraft', function() {
        it('should dequeue and get nothing if nothing is queued', function() {
            $scope.dequeue();
            expect($scope.dequeuedAircraft.length).toEqual(0);
        });
    });

    describe('on dequeue aircraft', function() {
        it('should dequeue and get aircraft after one is queued', function() {
            $scope.showAdd();
            $scope.addType = 'cargo';
            $scope.addSize = 'large';
            $scope.add();
            $scope.dequeue();
            expect($scope.dequeuedAircraft.length).toEqual(1);
            expect($scope.dequeuedAircraft[0]).toEqual({type: 'cargo', size: 'small'});
        });
    })
});