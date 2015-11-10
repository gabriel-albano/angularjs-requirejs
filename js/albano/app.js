'use strict';
define([
  'Angular',
  'AngularRoute',
  'AngularDirective'
], function(Angular, AngularRoute) {
  // Declare app level module which depends on views, and components
  return angular.module('mainApp', ['ngRoute'], function($compileProvider) {
    $compileProvider.directive('compile', albano.ui.AngularDirective.Compile);
  });
});
