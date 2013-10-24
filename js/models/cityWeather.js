var app = app || {};

app.CityWeather = Backbone.Model.extend({

    defaults: {
        id: '',
        city: '',
        country: '',
        main: '',
        details: '',
		temp: '',
		icon:''
    },
	
	
	url: function () {
        return 'http://api.openweathermap.org/data/2.5/weather?id='+this.get('id')+'&type=json';
      },
	  
	  //parse the jquery attribute names to the correct model attribute. 
	  parse: function (original) {
        return {
            city: original.name,
            country: original.sys.country,
            main: original.weather[0].main,
            details: original.weather[0].description,
			//convert temp from K to F
			temp: parseInt((((original.main.temp - 273.15)*1.8)+32)),
			icon: original.weather[0].icon
        };
      }
	  
});
