angular.module('acApp').factory('AircraftQueueService', (
    StorageResource
) => {

    const queues = {
        passenger: {
            large: [],
            small: []
        },
        cargo: {
            large: [],
            small: []
        }
    }

    function hasAny(type) {
        return queues[type].large.length || queues[type].small.length
    }

    function getNext(type) {
        const size = getNextSize(type)
        return queues[type][size].shift()
    }

    function getNextType() {
        return hasAny('passenger') ? 'passenger' : 'cargo'
    }

    function getNextSize(type) {
        return queues[type].large.length ? 'large' : 'small'
    }

    function enqueueAircraft(aircraft) {
        aircraft.queuedWhen = new Date()
        queues[aircraft.type][aircraft.size] = aircraft
    }

    function dequeueAircraft() {
        const type = getNextType()
        return getNext(type)
    }

    function peekNextAircraft() {
        const type = getNextType()
        const size = getNextSize(type)
        return _.first(queues[type][size])
    }

    function peekAllAircraftInOrder() {
        return _.flatten([queues.passenger.large, queues.passenger.small, queues.cargo.large, queues.cargo.small])
    }

    return {
        dequeueAircraft,
        enqueueAircraft,
        peekAllAircraftInOrder,
        peekNextAircraft
    }
})
