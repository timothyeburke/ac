describe('aircraftqueue', function() {
    beforeEach(module('acApp'));

    var AircraftQueueService;

    beforeEach(inject(function(_AircraftQueueService_) {
        AircraftQueueService = _AircraftQueueService_;
    }));

    afterEach(function() {
        AircraftQueueService.clear();
    });

    describe('basic tests', function() {
        it('AircraftQueueService should be an interface', function() {
            expect(typeof AircraftQueueService.dequeueAircraft).toEqual('function');
            expect(typeof AircraftQueueService.enqueueAircraft).toEqual('function');
            expect(typeof AircraftQueueService.peekAllAircraftInOrder).toEqual('function');
            expect(typeof AircraftQueueService.peekNextAircraft).toEqual('function');
        });

        it('Should get undefined from an empty queue', function() {
            expect(AircraftQueueService.dequeueAircraft()).toEqual(undefined);
        });
    });

    describe('enqueue', function() {
        it('Should enqueue one aircraft and retreive it', function() {
            var aircraft = {type: 'passenger', size: 'large'};
            AircraftQueueService.enqueueAircraft(aircraft);

            var dequeuedAircraft = AircraftQueueService.dequeueAircraft();
            expect(typeof dequeuedAircraft).toEqual('object');
            expect(dequeuedAircraft.type).toEqual(aircraft.type);
            expect(dequeuedAircraft.size).toEqual(aircraft.size);
        });
    });

    describe('enqueue', function() {
        it('Should enqueue one aircraft and peek but not remove it', function() {
            var aircraft = {type: 'passenger', size: 'small'};
            AircraftQueueService.enqueueAircraft(aircraft);

            var peekAircraft = AircraftQueueService.peekNextAircraft();
            expect(typeof peekAircraft).toEqual('object');
            expect(peekAircraft.type).toEqual(aircraft.type);
            expect(peekAircraft.size).toEqual(aircraft.size);

            var peekAll = AircraftQueueService.peekAllAircraftInOrder();

            expect(Array.isArray(peekAll)).toEqual(true);
            expect(peekAll.length).toEqual(1);
        });
    });

    describe('dequeue', function() {
        it('Should dequeue two of the same type and size aircraft in the correct order', function() {
            var aircraft1 = {type: 'passenger', size: 'large', order: 1};
            var aircraft2 = {type: 'passenger', size: 'large', order: 2};

            AircraftQueueService.enqueueAircraft(aircraft1);
            AircraftQueueService.enqueueAircraft(aircraft2);

            var first = AircraftQueueService.dequeueAircraft();
            var second = AircraftQueueService.dequeueAircraft();

            expect(typeof first).toEqual('object');
            expect(typeof second).toEqual('object');

            expect(first.order).toEqual(1);
            expect(second.order).toEqual(2);
        });
    });

    describe('dequeue', function() {
        it('Should enqueue and dequeue all 4 types in the correct order', function() {
            var aircraft1 = {type: 'cargo', size: 'small'};
            var aircraft2 = {type: 'cargo', size: 'large'};
            var aircraft3 = {type: 'passenger', size: 'small'};
            var aircraft4 = {type: 'passenger', size: 'large'};

            AircraftQueueService.enqueueAircraft(aircraft1);
            AircraftQueueService.enqueueAircraft(aircraft2);
            AircraftQueueService.enqueueAircraft(aircraft3);
            AircraftQueueService.enqueueAircraft(aircraft4);

            var dequeuedAircraft1 = AircraftQueueService.dequeueAircraft();
            var dequeuedAircraft2 = AircraftQueueService.dequeueAircraft();
            var dequeuedAircraft3 = AircraftQueueService.dequeueAircraft();
            var dequeuedAircraft4 = AircraftQueueService.dequeueAircraft();

            expect(dequeuedAircraft1.type).toEqual('passenger');
            expect(dequeuedAircraft1.size).toEqual('large');

            expect(dequeuedAircraft2.type).toEqual('passenger');
            expect(dequeuedAircraft2.size).toEqual('small');

            expect(dequeuedAircraft3.type).toEqual('cargo');
            expect(dequeuedAircraft3.size).toEqual('large');

            expect(dequeuedAircraft4.type).toEqual('cargo');
            expect(dequeuedAircraft4.size).toEqual('small');
        });
    });
});