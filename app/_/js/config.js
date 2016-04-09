require.config({
    paths: {
        "backbone": "/_/bower_components/backbone/backbone",
        "jquery": "/_/bower_components/jquery/jquery",
        "underscore": "/_/bower_components/underscore/underscore",
        "handlebars": "/_/bower_components/handlebars/handlebars"
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
