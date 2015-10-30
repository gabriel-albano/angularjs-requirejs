this.albano = this.albano || {} ;
this.albano.ui = this.albano.ui || {} ;
define ([
    'Angular'
],function (){

    function AngularDirective () {
        throw ("don't create this class is just an utility" ) ;
    }

    AngularDirective.Compile = function ($compile) {
        return function (scope, element, attrs) {
            scope.$watch(
                function (scope) {
                    return scope.$eval(attrs.compile);
                },
                function (value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                });
        };
    };

    return albano.ui.AngularDirective = AngularDirective ;
});
