angular.module('acApp').factory('StorageResource', (
    localStorageService
) => {

    // Normally, this is where I would want to communicate with
    // an API to persist data or for the API to do business logic.
    // Just storing the data in local storage in the browser
    // for this exercise... that's also why there are no tests
    // for this.

    function get(key) {
        return localStorageService.get(key)
    }

    function set(key, value) {
        localStorageService.set(key, value)
    }

    return {
        get,
        set
    }
})
