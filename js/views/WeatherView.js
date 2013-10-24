var app = app || {};

app.WeatherView = Backbone.View.extend({

    el: $('#citySelection'),
	
	template: _.template( $('#weatherTemplate').html() ),
	
	events:{
		'click #search_button': 'showWeather',
		'change #selectedID': 'setID'
	},
	
    initialize: function() {
		console.log('weatherview initialized');
		//set ID to first select option for if the user hits #search button before selecting a city
		this.setID();
    },
	
    // render after model attributes have been fetched
    render: function() {
		console.log('rendering view');
		$('#weatherContainer').css({"border-color": "#000000", 
             "border-weight":"2px", 
             "border-style":"solid"});
		$('#weatherContainer').html( this.template( this.model.toJSON())); 
		return this;
	},

    showWeather: function () {
		console.log('showWeather called');
		$('#weatherContainer').html('<img src = \'loading.gif\' />');
		//set a variable to 'this' in order to refer to the view in the jquery complete() method
		//I used the complete method to ensure that the asynchronous fetch call had fully completed before rendering
		var self = this;
		this.model.fetch(
			{
				dataType: 'jsonp'
			},
			{
				success : function(data) {
				console.log('successfully fetched!');
				},
				error :  function(response) {
				console.log('ERROR!!!');	
				}
			}).complete(function(){
				self.render();
		});	
    },
	
	//sets the id when a new select option is chosen.
	setID: function () {
		this.model.set('id', $('#selectedID').val());
		console.log('the id value is set to '+ this.model.get('id'));
		},
	
	//search through the city options to see if the routed ID exists
	showRoutedWeather:function(routeID) {
		if($("#selectedID option[value='"+routeID+"']").length > 0){
			this.model.set('id', routeID);
			this.showWeather();
		}
		else{
				alert('The city ID you have entered in the url does not exist. \n Please select a city from the list.');
		}
	}
});

