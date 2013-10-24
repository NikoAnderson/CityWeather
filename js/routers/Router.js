var app = app || {};

app.Router = Backbone.Router.extend ({

    routes: {
		'*path' : 'findpath',
		'': 'default'
    },

	findpath: function (id) {
		
		if ( id !== null){weatherview.showRoutedWeather(id);}
	}
		
	
});