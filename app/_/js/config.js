require.config({
    paths: {
        "backbone": "../bower_components/backbone/backbone",
        "jquery": "../bower_components/jquery/jquery",
        "underscore": "../bower_components/underscore/underscore.js",
        "handlebars": "../handlebars/handlebars"
    },
    shim: {
        "jquery": {
            "exports": "$"
        },
        "backbone": {
            "deps": ["underscore", "jquery", "handlebars"],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
