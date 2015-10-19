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
                controller: 'HomeCtrl',
                templateUrl: 'assets/views/home.html'
            })
    }
)
