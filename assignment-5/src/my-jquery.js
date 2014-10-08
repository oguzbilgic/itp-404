var jQuery = function(selector) {
	if(this instanceof jQuery) {
		this.elements = document.querySelectorAll(selector);
	} else {
		return new jQuery(selector);
	}
};

window.$ = jQuery;

jQuery.prototype.html = function(html) {
	if (arguments.length == 0) {
		return this.attr('innerHTML');
	} else {
		return this.attr('innerHTML', html);
	}
};

jQuery.prototype.css = function() {
	if (arguments.length == 1) {
		for(var style in arguments[0]) { 
			this.css(style, arguments[0][style]);
		}
	} else {
		for(var i = 0; i < this.elements.length; i++) {
			this.elements[i].style[arguments[0]] = arguments[1];
		}
	}
	return this;
};

jQuery.prototype.attr = function() {
	if (arguments.length == 1) {
		return this.elements[0][arguments[0]];
	} else {
		for(var i = 0; i < this.elements.length; i++) {
			this.elements[i][arguments[0]] = arguments[1];
		}
		return this;
	}
};

jQuery.each = function(objects, callback) {
	if (objects instanceof Array) {
		for(var i = 0; i < objects.length; i++) {
			callback.call(this, i, objects[i])
		}
	} else { 
		for(var key in objects) {
			callback.call(objects[key], key, objects[key]);
		}
	}
};
