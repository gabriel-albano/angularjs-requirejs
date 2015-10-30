define([
    'App',
    'albano/models/header',
    'albano/models/footer'
], function (app) {

    this.name = 'ngHomeControler';
    app.controller(this.name, function ($scope, $http) {

        function main() {
            console.debug("Main function on " + this.name);
        }
        main();

    });

    angular.bootstrap(document.getElementsByTagName("html")[0], ['mainApp']);
});
