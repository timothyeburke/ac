angular.module('acApp').factory('StorageResource', (
    localStorageService
) => {

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
