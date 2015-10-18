describe('boot page', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Aircraft Queue');
    });

    it('should not be booted', function() {
        var boot = element(by.css('.boot'));
        expect(boot.isDisplayed()).toBe(true);
    });

    it('should boot when boot is clicked', function() {
        var bootButton = element(by.css('.boot .inner button'));
        bootButton.click();

        var boot = element(by.css('.boot'));
        expect(boot.isDisplayed()).toBe(false);
    });
});