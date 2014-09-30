function init() {
	var success_handler = function(position) {
		var element = document.getElementById('map-canvas');

		var map = new google.maps.Map(element, {
			center: { 
				lat: position.coords.latitude, 
				lng: position.coords.longitude 
			},
			zoom: 12
		});

		var marker = new google.maps.Marker({
			map: map,
			icon: 'http://enxame.in/wp-content/themes/invert/images/pin.png',
			position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			animation: google.maps.Animation.DROP,
		});

		var infowindow = new google.maps.InfoWindow({
			content: "asdf",
			position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		});

		var geocoder = new google.maps.Geocoder().geocode({ 
			location: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		}, function(results) {
			infowindow.content = results[0].formatted_address;
		});

		google.maps.event.addListener(marker, 'click', function(event) {
			infowindow.open(map);
		});
	};

	var error_handler = function(err) {
		alert("error");
	};

	var options = {};

	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(success_handler, error_handler, options);
	}
}
