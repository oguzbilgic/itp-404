var EventMap = {
	init: function() {
		EventMap.element = document.getElementById('map-canvas');
		EventMap.object = new google.maps.Map(EventMap.element, {
			center: { 
				lat: 36.05178307933835, 
				lng: 42.49737373046878 
			},
			zoom:2 
		});
	},
	
	mark: function(lat, lng) {
		var marker = new google.maps.Marker({
			map: EventMap.object,
			position: new google.maps.LatLng(lat, lng),
			animation: google.maps.Animation.DROP,
		});
	},

	markAll: function(events) {
		events.forEach(function(event) {
			EventMap.mark(event.latitude, event.longitude);
		});
	}
}

var EventList = {
	render: function(events) {
		events.forEach(function(event) {
			var html = EventList.template(event);
			$("#list").append(html);
		});
	},

	template: function(event) {
		var source = $("#event-template").html();
		var template = Handlebars.compile(source);
		return template(event);
	}
}

function processJSONP(result) {
	EventMap.markAll(result.events.event);
	EventList.render(result.events.event);
}

jQuery(function(){
	EventMap.init()

	var app_key = "98knCQwHKjqrJK6h";
	var script = document.createElement('script');
	script.src = "http://api.eventful.com/json/events/search?c=music&app_key="+app_key+"&page_number=1&date=Future&keywords=limp+bizkit&callback=processJSONP";
	document.getElementsByTagName('head')[0].appendChild(script);
});
