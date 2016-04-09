define([
    "jquery",
    "underscore",
    "backbone",
    "../_/views/main/main-view"
], function ($, _, Backbone, MainView) {
    "use strict";
    
    var renderView = function (View, name) {
        return function (actions) {
            // check to see if the view already exists in cache (prevents events from being attached more then once)
            if (!this[name]) {
                this[name] = new View(this);
            }
            
            this[name].render(actions);
        }
    };
    
    var AppRouter = Backbone.Router.extend({
       "*actions": renderView(MainView, "default") 
    });
    
    var initialize = function () {
        var router = new AppRouter();
        Backbone.history.start({pushState: true});
    };
    
    return {
        initialize: initialize
    };
});
