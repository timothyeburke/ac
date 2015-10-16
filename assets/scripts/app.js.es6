angular.module('acApp', [
    'LocalStorageModule',
    'ngRoute'
]).config(
    (
        $routeProvider,
        localStorageServiceProvider
    ) => {

        localStorageServiceProvider.setPrefix('ac')

        $routeProvider
            .when('/', {

            })
    }
)
