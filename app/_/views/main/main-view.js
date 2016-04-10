define(
    [ "jquery", "underscore", "backbone", "handlebars", "_/js/collections/forecast-collection"],
    function ($, _, Backbone, Handlebars, ForecastCollection) {
    "use strict";
    var MainView = Backbone.View.extend({
        el: $("#page"),

        url: function () {
            return "_/views/main/main-template.handlebars"
        },

        events: {
            "submit form": "handleForecastSubmission"
        },

        messages: {
            empty: "Error: please enter a location",
            syntax: "Error: please enter a valid location. Example: Detroit, MI; London, UK; or Toronto, Canada"
        },

        initialization: function (router) {
            this.router = router;
        },

        render: function (actions) {
            // if template url and it has not been downloaded
            if (this.url() !== "" && window.templateStore[this.url()] === undefined) {
                this.getTemplate(actions);
                return false;
            }

            // load base template
            this.replaceUsingTemplate("template-main", this.el, { copyYear: new Date().getFullYear()});
            this.resultsContainer = document.getElementById("container-results");

            // load form in the default state
            this.displayForm({});
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
            this.replaceUsingTemplate("template-serviceError", this.el, {});
        },

        replaceUsingTemplate: function (templateID, container, context) {
            var source;
            var template;
            var html;

            // get template and render html
            source = document.getElementById(templateID).innerHTML;
            template = Handlebars.compile(source);
            html = template(context);
            container.innerHTML = html;
        },

        handleForecastSubmission: function (e) {
            e.preventDefault();

            var query = e.target.place.value;
            var error = this.validation(query);

            this.displayForm({ error : error, query: query, isWorking: !error });
            this.replaceUsingTemplate("template-loading", this.resultsContainer, {});
            if (!error) {
                this.requestForecast(this.formatQuery(query));
            } else {
                this.resultsContainer.innerHTML = "";
            }
        },

        validation: function (value) {
            var error = "";
            var locationData = value.split(",");

            if (value) {
                if (locationData.length < 2 || locationData.length > 3) {
                    error = this.messages.syntax;
                }

            } else {
                error = this.messages.empty;
            }


            return error;
        },

        displayForm: function (context) {
            this.replaceUsingTemplate("template-form", document.getElementById("container-form"), context);
        },

        requestForecast: function (data) {
            var forecast = new ForecastCollection(data);

            forecast.fetch({
                success: function (collection, resp) {
                    this.displayForecast(collection, resp, data.city.split("_").join(" ") + ", " + data.state.split("_").join(" "));
                }.bind(this),
                error: this.displayForecastServiceError.bind(this)
            });
        },

        formatQuery: function (query) {
            var data = {
                state: "",
                city: ""
            };

            var queryStringArray = query.split(",");

            data.city = queryStringArray[0].trim().split(" ").join("_");
            data.state = queryStringArray[1].trim().split(" ").join("_");

            return data;
        },

        displayForecast: function (collection, resp, query) {
            this.displayForm({ query: query });
            this.replaceUsingTemplate("template-forecastResults", this.resultsContainer, { day: collection.toJSON() });
        },

        displayForecastServiceError: function () {
            this.replaceUsingTemplate("template-serviceError", this.resultsContainer, {});
        }
    });

    return MainView;
});
