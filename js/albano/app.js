define([
    'Angular',
    'AngularDirective'
], function(){
   'use strict';
    var appName = 'mainApp';
    var app = angular.module(appName, function ($compileProvider) {
        $compileProvider.directive('compile',albano.ui.AngularDirective.Compile);
    });   
    return app;
}.bind(document));