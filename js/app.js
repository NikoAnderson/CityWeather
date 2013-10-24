var app = app || {};

//since there is only one model at a time, I load a new view with a new model at the start
var weatherview = new app.WeatherView({model:new app.CityWeather()});
router = new app.Router;
Backbone.history.start();