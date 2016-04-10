//e05b0e416c7217b5
define([ "jquery", "underscore", "backbone"], function () {
    "use strict";

    var ForecastCollection = Backbone.Collection.extend({
        url: "/_/src/ba-simple-proxy.php?",
        initialize: function (settings) {
            var api = "http://api.wunderground.com/api/e05b0e416c7217b5/forecast10day/q/" + settings.state + "/" + settings.city + ".json"
            this.url = this.url.split("?")[0] + "?url=" + encodeURIComponent(api) + "&full_headers=1&full_status=1";
        },
        parse: function (resp) {
            var forecast = resp.contents.forecast ? resp.contents.forecast.simpleforecast.forecastday : [];
            return forecast;
        }
    });

    return ForecastCollection;
});
