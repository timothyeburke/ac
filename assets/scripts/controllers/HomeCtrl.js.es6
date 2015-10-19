angular.module('acApp').controller('HomeCtrl', (
    $scope,
    AircraftQueueService
) => {

    $scope.typeOptions = ['passenger', 'cargo']
    $scope.sizeOptions = ['large', 'small']
    $scope.showAddModal = false

    $scope.showAdd = () => {
        $scope.showAddModal = true
    }

    $scope.cancelAdd = () => {
        $scope.showAddModal = false
        $scope.addType = null
        $scope.addSize = null
    }

    $scope.canAdd = () => $scope.addType && $scope.addSize

    $scope.add = () => {
        if (!$scope.canAdd()) {
            return
        }

        AircraftQueueService.enqueueAircraft({
            type: $scope.addType,
            size: $scope.addSize
        });

        $scope.cancelAdd()
    }

    $scope.dequeue = () => {
        $scope.lastAircraftDequeued = AircraftQueueService.dequeueAircraft()

        if (!$scope.lastAircraftDequeued) {
            // show some message that queue is empty
        }
    }
})