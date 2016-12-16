requirejs.config({
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'tmpl': {
            exports: 'tmpl'
        }
    }
});
require(
    [
        'model',
        'view',
        'controller'
    ],
    function(Model, View, Controller) {

        $(function() {
            var firstData = [],
                model = new Model(firstData),
                view = new View(model),
                controller = new Controller(model, view);

        });
    }
);