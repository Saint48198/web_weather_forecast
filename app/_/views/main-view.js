define([ "jquery", "underscore", "backbone", "handlebars"], function ($, _, Backbone, Handlebars) {
    "use strict";
    var MainView = Backbone.View.extend({
        el: $("main"),
        url: function () {
            return "_/views/main/main-template.handlebars"
        },
        render: function (actions) {
            if (this.url() !== "" && !window.templateStore[this.url()]) {
                this.getTemplate(actions);
                return false;
            }

            this.onRender(actions);
        },

        onRender: function (actions) {

        },

        getTemplate: function (actions) {
            $.ajax({
                url:  this.url(),
                dataType: "html",
                success: this.render.bind(this),
                error: this.displayError.bind(this)
            });
        },

        displayError: function (xhr, status, error) {

        }
    })
});
