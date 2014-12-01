describe('Review report', function() {
	describe('.getAverateRating()', function() {
		it('should get the average rating', function() {
			var restaurantReviewsA = new ReviewsReport('Restaurant A', reviews.restaurantA);
			var restaurantReviewsB = new ReviewsReport('Restaurant A', reviews.restaurantB);

			expect(restaurantReviewsA.getAverageRating()).toEqual(23/6);
			expect(restaurantReviewsB.getAverageRating()).toEqual(29/7);
		});
	});

	describe('.getAverateCost()', function() {
		it('should get the average cost', function() {
			var restaurantReviewsA = new ReviewsReport('Restaurant A', reviews.restaurantA);
			var restaurantReviewsB = new ReviewsReport('Restaurant A', reviews.restaurantB);

			expect(restaurantReviewsA.getAverageCost()).toEqual(13/6);
			expect(restaurantReviewsB.getAverageCost()).toEqual(27/7);
		});
	});

	describe('.convertCostToDollarSign()', function() {
		it('should convert cost to dollar sign', function() {
			var restaurantReviewsA = new ReviewsReport('Restaurant A', reviews.restaurantA);

			expect(restaurantReviewsA.convertCostToDollarSign(1.4)).toEqual('$');
			expect(restaurantReviewsA.convertCostToDollarSign(1.5)).toEqual('$$');
			expect(restaurantReviewsA.convertCostToDollarSign(2)).toEqual('$$');
			expect(restaurantReviewsA.convertCostToDollarSign(3)).toEqual('$$$');
			expect(restaurantReviewsA.convertCostToDollarSign(3.6)).toEqual('$$$$');
		});
	});

	describe('.summarize()', function() {
		it('should summarize', function() {
			var restaurantReviewsA = new ReviewsReport('Restaurant A', reviews.restaurantA);
			var averageCost = restaurantReviewsA.getAverageCost()
			var averageCostSymbol = restaurantReviewsA.convertCostToDollarSign(averageCost);

			summary = {
				name: 'Restaurant A',
				averageStarRating: restaurantReviewsA.getAverageRating(),
				totalReviews: restaurantReviewsA.data.length,
				averageCost: {
					numeric: averageCost,
					symbol: averageCostSymbol
				}
			};

			expect(restaurantReviewsA.convertCostToDollarSign(1.4)).toEqual('$');
		});
	});
});
