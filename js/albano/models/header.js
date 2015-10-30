define([
    'App',
    'JQuery',
    'Angular',
    'SocketIO'
], function (app) {

    this.name = 'ngHeaderControler';
    app.controller(this.name, function ($scope, $http) {

        function main() {
            console.debug("Main function on " + this.name);
        }
        main();

    });

});
