angular.module('acApp').factory('AircraftQueueService', (
    StorageResource
) => {

    // Data:

    const queues = StorageResource.get('queues') || {
        passenger: {
            large: [],
            small: []
        },
        cargo: {
            large: [],
            small: []
        }
    }

    // Private Methods:

    function getNext(type) {
        const size = getNextSize(type)
        return queues[type][size].shift()
    }

    function hasAny(type) {
        return queues[type].large.length || queues[type].small.length
    }

    function getNextSize(type) {
        return queues[type].large.length ? 'large' : 'small'
    }

    function getNextType() {
        return hasAny('passenger') ? 'passenger' : 'cargo'
    }

    function persistQueues() {
        StorageResource.set('queues', queues)
    }

    // Public Methods:

    function dequeueAircraft() {
        const type = getNextType()
        const ac = getNext(type)
        persistQueues()
        return ac
    }

    function enqueueAircraft(aircraft) {
        aircraft.queuedWhen = new Date()
        queues[aircraft.type][aircraft.size].push(aircraft);
        persistQueues()
    }

    function peekAllAircraftInOrder() {
        return _.flatten([queues.passenger.large, queues.passenger.small, queues.cargo.large, queues.cargo.small])
    }

    function peekNextAircraft() {
        const type = getNextType()
        const size = getNextSize(type)
        return _.first(queues[type][size])
    }

    return {
        dequeueAircraft,
        enqueueAircraft,
        peekAllAircraftInOrder,
        peekNextAircraft
    }
})
