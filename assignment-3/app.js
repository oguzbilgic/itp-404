var ReviewsReport = function(name, reviews) {
	this.name = name;
	this.reviews = reviews;
};

ReviewsReport.prototype.getAverageRating = function() {
	var sum = 0;
	this.reviews.forEach(function(review) {
		sum += review.stars;
	});
	return sum/this.reviews.length;
};

ReviewsReport.prototype.getAverageCost = function() {
	var sum = 0;
	this.reviews.forEach(function(review) {
		sum += review.cost;
	});
	return sum/this.reviews.length;
};

ReviewsReport.prototype.convertCostToDollarSign = function(cost) {
	if (cost < 1.5) {
		return "$";
	} else if (cost < 2.5) {
		return "$$";
	} else if (cost < 3.5) {
		return "$$$";
	} else {
		return "$$$$";
	}
};

ReviewsReport.prototype.summarize = function() {
	return {
		name: this.name,
		averageStarRating: this.getAverageRating(),
		totalReviews: this.reviews.length,
		averageCost: {
			numeric: this.getAverageCost(),
			symbol: this.convertCostToDollarSign(this.getAverageCost())
		}
	};
};

var reportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
console.log(reportA.getAverageRating()); 
console.log(reportA.getAverageCost()); 
console.log(reportA.convertCostToDollarSign(2.1666666666666665));
console.log(reportA.summarize());

var reportB = new ReviewsReport('Restaurant B 2014', reviews.restaurantB);
console.log(reportB.getAverageRating()); 
console.log(reportB.getAverageCost()); 
console.log(reportB.convertCostToDollarSign(3.857142857142857));
console.log(reportB.summarize());
