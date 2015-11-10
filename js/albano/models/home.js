define([
    'App',
    'albano/models/header',
    'albano/models/footer'
], function (app) {

    this.name = 'ngHomeControler';
    app.controller('ngHomeControler', function ($scope, $http) {

        function main() {
            console.debug('Main function on ngHomeControler');
        }
        main();

    });

    angular.bootstrap(document.getElementsByTagName('html')[0], ['mainApp']);
});
