angular.module('acApp').controller('AppCtrl', (
    $rootScope
) => {
    $rootScope.booted = false

    $rootScope.boot = () => {
        $rootScope.booted = true
    }
})
