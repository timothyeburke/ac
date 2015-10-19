describe('home page', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000');

        var bootButton = element(by.css('.overlay .boot button'));
        bootButton.click();
    });

    describe('buttons', function() {
        it('should have 3', function() {
            var buttons = element.all(by.css('footer button'))
            expect(buttons.count()).toEqual(3);
        });

        it('last button should say `Show Queue`', function() {
            var button = element.all(by.css('footer button')).last();
            expect(button.getText()).toEqual('Show Queue');
        });

        it('last button should say `Hide Queue` after click', function() {
            var button = element.all(by.css('footer button')).last();
            button.click();
            expect(button.getText()).toEqual('Hide Queue');
        });
    });

    describe('Add Aircraft', function() {
        it('Add Aircraft button should open dialog', function() {
            var button = element.all(by.css('footer button')).first();
            var dialog = element(by.css('.addModal'));
            button.click();
            expect(dialog.isDisplayed()).toBeTruthy();
        });

        it('Cancel button should dismiss dialog', function() {
            var addBtn = element.all(by.css('footer button')).first();
            var cancelBtn = element(by.css('.addModal button.secondary'));
            addBtn.click();
            expect(cancelBtn.isDisplayed()).toBeTruthy();
            cancelBtn.click();
            expect(cancelBtn.isDisplayed()).toBeFalsy();
        });

        it('Add to Queue button should be disabled', function() {
            var addBtn = element.all(by.css('footer button')).first();
            var greenAddBtn = element(by.css('.addModal button.add'));
            addBtn.click();
            expect(greenAddBtn.getAttribute('disabled')).toBeTruthy();
        });

        it('Add to Queue button should be enabled after selection', function() {
            var addBtn = element.all(by.css('footer button')).first();
            var greenAddBtn = element(by.css('.addModal button.add'));
            var toggleBtns = element.all(by.css('.toggle'));
            addBtn.click();
            toggleBtns.get(1).click();
            toggleBtns.get(3).click();
            expect(greenAddBtn.getAttribute('disabled')).toBeFalsy();
        });

        it('Add to Queue button should dismiss dialog', function() {
            var addBtn = element.all(by.css('footer button')).first();
            var dequeueBtn = element.all(by.css('footer button')).get(1);
            var greenAddBtn = element(by.css('.addModal button.add'));
            var toggleBtns = element.all(by.css('.toggle'));
            var dialog = element(by.css('.addModal'));
            addBtn.click();
            toggleBtns.get(0).click();
            toggleBtns.get(2).click();
            greenAddBtn.click();
            expect(dialog.isDisplayed()).toBeFalsy();
            dequeueBtn.click();
        });
    });

    describe('queue', function() {
        it('Show/Hide queue button should show/hide queue', function() {
            var queue = element(by.css('.queue'));
            var button = element.all(by.css('footer button')).last();
            expect(queue.isDisplayed()).toBeFalsy();
            button.click();
            expect(queue.isDisplayed()).toBeTruthy();
            button.click();
            expect(queue.isDisplayed()).toBeFalsy();
        });

        it('Queue should have one entry after adding aircraft', function() {
            var addBtn = element.all(by.css('footer button')).first();
            var dequeueBtn = element.all(by.css('footer button')).get(1);
            var greenAddBtn = element(by.css('.addModal button.add'));
            var toggleBtns = element.all(by.css('.toggle'));
            var showQueue = element.all(by.css('footer button')).last();
            var queuedAircraft = element.all(by.css('.queue .aircraft'));
            showQueue.click();
            addBtn.click();
            toggleBtns.get(1).click();
            toggleBtns.get(3).click();
            greenAddBtn.click();
            expect(queuedAircraft.count()).toEqual(1);
            dequeueBtn.click();
        });

        it('Queue should have zero entries after dequeue', function() {
            var addBtn = element.all(by.css('footer button')).first();
            var dequeueBtn = element.all(by.css('footer button')).get(1);
            var greenAddBtn = element(by.css('.addModal button.add'));
            var toggleBtns = element.all(by.css('.toggle'));
            var showQueue = element.all(by.css('footer button')).last();
            var queuedAircraft = element.all(by.css('.queue .aircraft'));
            showQueue.click();
            addBtn.click();
            toggleBtns.get(1).click();
            toggleBtns.get(3).click();
            greenAddBtn.click();
            dequeueBtn.click();
            expect(queuedAircraft.count()).toEqual(0);
        });
    });

    // It does not want to select a moving target. Tried a bunch of ways. Sadness.
    // describe('dequeue', function() {
    //     it('Should display plane taking off when dequeue', function() {
    //         var addBtn = element.all(by.css('footer button')).first();
    //         var dequeueBtn = element.all(by.css('footer button')).get(1);
    //         var greenAddBtn = element(by.css('.addModal button.add'));
    //         var toggleBtns = element.all(by.css('.toggle'));
    //         var showQueue = element.all(by.css('footer button')).last();
    //         var queuedAircraft = element.all(by.css('.queue .aircraft'));
    //         var aircraft = element.all(by.repeater('(key, aircraft) in dequeuedAircraft'));
    //         showQueue.click();
    //         addBtn.click();
    //         toggleBtns.get(1).click();
    //         toggleBtns.get(3).click();
    //         greenAddBtn.click();
    //         dequeueBtn.click();
    //         expect(aircraft.count()).toEqual(1);
    //     });
    // });
});