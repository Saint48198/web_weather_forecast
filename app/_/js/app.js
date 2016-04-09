// global for storing view templates
window.templateStore = {};

(function (require) {
    "use strict";

    require(["jquery", "underscore", "backbone", "_/js/router"], function($, _, Backbone, router) {
        router.initialize();
    });

})(require);
