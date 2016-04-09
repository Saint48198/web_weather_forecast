define(
    [ "jquery", "underscore", "backbone", "handlebars", "_/js/collections/forecast-collection"],
    function ($, _, Backbone, Handlebars, ForecastCollection) {
    "use strict";
    var MainView = Backbone.View.extend({
        el: $("#page"),
        url: function () {
            return "_/views/main/main-template.handlebars"
        },
        render: function (actions) {
            var source;
            var template;
            var html;

            // if template url and it has not been downloaded
            if (this.url() !== "" && window.templateStore[this.url()] === undefined) {
                this.getTemplate(actions);
                return false;
            }

            // get template and render html
            source = document.getElementById("template-main").innerHTML;
            template = Handlebars.compile(source);
            html = template({ copyYear: new Date().getFullYear()});
            this.el.innerHTML = html;

            var forecast = new ForecastCollection({ state: "MI", city: "Ann_Arbor"});
            console.log(forecast.url);
            forecast.fetch({
               success: function () {
                   console.log("success");
               },
                error: function () {
                    console.log("error");
                }
            });
        },

        getTemplate: function (actions) {
            $.ajax({
                url:  this.url(),
                dataType: "html",
                success: function (resp) {
                    // save template in template store
                    window.templateStore[this.url()] = resp;
                    // append template to the body
                    $("body").append(resp);
                    // call render function again
                    this.render(actions);
                }.bind(this),
                error: this.displayError.bind(this)
            });
        },

        displayError: function (xhr, status, error) {

        }
    });

    return MainView;
});
