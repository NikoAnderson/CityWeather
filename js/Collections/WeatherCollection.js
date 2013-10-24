var app = app || {};

app.WeatherCollection = Backbone.Collection.extend({
    model: app.CityWeather,
	url: function () {
		//Set the id when the model is created using seleted option value. 'type=json' is unnecessary but I wanted to try every possibility
        return 'api.openweathermap.org/data/2.5/forecast?id=4560349&type=json';
      },

});
