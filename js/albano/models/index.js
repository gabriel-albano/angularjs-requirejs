define([
    'App',
    'JQuery',
    'Angular',
    'SocketIO'
], function (app) {

    this.name = 'ngIndexCtrler';
    app.controller(this.name, function ($scope, $http) {

        function main() {
            console.debug("Main function on " + this.name);
        }
        main();

    });

    angular.bootstrap(document.getElementsByTagName("html")[0], ['mainApp']);
});
