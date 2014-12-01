describe('The Angular App', function() {
	beforeEach(module('itp'));

	describe('clientId', function() {
		it('should be defined', inject(function(clientId){ 
			expect(clientId).toNotEqual("");
		}))
	});

	describe('MediaApi', function() {
		it('should be defined', inject(function(mediaApi){ 
			expect(mediaApi).toNotEqual(null);
		}))

		it('should have get function', inject(function(mediaApi){ 
			expect(mediaApi.get).toNotEqual(null);
		}))

		it('should have findAllByTag function', inject(function(mediaApi){ 
			expect(mediaApi.findAllByTag).toNotEqual(null);
		}))
	});

	describe('UserApi', function() {
		it('should be defined', inject(function(userApi){ 
			expect(userApi).toNotEqual(null);
		}))

		it('should have search function', inject(function(userApi){ 
			expect(userApi.search).toNotEqual(null);
		}))

		it('should have get function', inject(function(userApi){ 
			expect(userApi.search).toNotEqual(null);
		}))
	});
});
