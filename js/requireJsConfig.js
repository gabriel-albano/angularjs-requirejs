"use strict";
require.config({
    baseUrl: '/js/',
    paths: {
        Bootstrap               : 'libs/bootstrap/bootstrap',
        JQuery                  : 'libs/jquery/jquery-1.10.2',
        Angular                 : 'libs/angular/angular.min',
        AngularRoute            : 'libs/angular/angular.route',
        AngularResource         : 'libs/angular/angular-resource',
        AngularDirective        : 'albano/ui/AngularDirective',
        SocketIO                : 'https://cdn.socket.io/socket.io-1.3.6', //https://<server>/socket.io/socket.io',
        //CryptoJS                : 'https://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/hmac-sha256',
        //CryptoJS_Base64         : 'https://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/enc-base64-min',
        App                     : 'albano/app'
    },
    shim: {
        'Angular': {
            exports: 'Angular'
        },
        AngularRoute    : ['Angular'],
        AngularResource : ['Angular'],
        AngularDirective: ['Angular'],
        JQuery          : {
            exports: '$'
        },
        Bootstrap       : ['JQuery'],
        //BootstrapColorPicker : ['Bootstrap', 'Angular'] ,
        SocketIO        : {
            exports: '{io}'
        }/*,
        CryptoJS : {
          exports : 'CryptoJS'
        },
        CryptoJS_Base64 : {
            deps: ['CryptoJS']
        }*/
    }
});