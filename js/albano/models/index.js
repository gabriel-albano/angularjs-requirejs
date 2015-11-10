define([
    'App',
    'JQuery',
    'Angular',
    'AngularRoute',
    'SocketIO'
], function (app) {

    app.controller('ngIndexCtrler', function ($scope, $http) {

        function main() {
            console.debug('Main function on ngIndexCtrler');
        }
        main();

    });

    angular.bootstrap(document.getElementsByTagName("html")[0], ['mainApp']);
});
