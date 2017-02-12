describe('Angular Test : ', function(){
    beforeEach(function(){
		module('myApp');
		module('AuthService');
		module('SearchService');		
		module('LoginCtrl');
	});
	
	var authService, $httpBackend;

    beforeEach(inject(function(_AuthService_){
        authService = _AuthService_;
    }));
	
	it('AuthService should be defined',function(){
		expect(authService).to.not.equal(undefined);
	});
		
	it('AuthService should not have user information', function(){
		expect(authService.isLoggedIn()).to.be.false;
	});
	
	

	describe ('AuthService : Login Test - ', function(){
		// beforeEach(function(){
		// 	$httpBackend
        //     	.expectPOST('/user/login',{usrname:'test',password:'test'})
        //     	.respond(200, {message: 'OK'});
		// 	authService.login('test','test');
		// 	$httpBackend.flush();
		// });

		// authService.login('test','test')
		// 	.then(function(){
		// 		console.log('asdfasdfasdf');
		// 		//console.log('adasdas');
		// 		expect(authService.isLoggedIn()).to.be.false;
		// 	});
		beforeEach(inject(function($injector){
			$httpBackend = $injector.get('$httpBackend');
			$httpBackend.when('POST','/user/login')
				.respond(200,{status: true});
		}));

		afterEach(function(){
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});
		
		it('should success in login with test account', function(){
			var result = authService.login('test','test');
			$httpBackend.expectPOST('/user/login');
			$httpBackend.flush();
		});
	});
});