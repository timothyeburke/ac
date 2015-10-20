angular.module('acApp').controller('HomeCtrl', (
    $scope,
    $timeout,
    AircraftQueueService
) => {

    $scope.typeOptions = ['passenger', 'cargo']
    $scope.sizeOptions = ['large', 'small']
    $scope.dequeuedAircraft = []
    $scope.showAddModal = false
    $scope.showQueue = false

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
        const lastAircraftDequeued = AircraftQueueService.dequeueAircraft()
        if (lastAircraftDequeued) {
            $scope.dequeuedAircraft.push(lastAircraftDequeued)
            $timeout(() => {
                $scope.dequeuedAircraft.shift()
            }, 6000)
        }
    }

    $scope.toggleQueue = () => {
        $scope.showQueue = !$scope.showQueue
    }

    $scope.getQueue = () => AircraftQueueService.peekAllAircraftInOrder()
})
