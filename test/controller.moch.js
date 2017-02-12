describe('Login Controller', function(){
	beforeEach(function(){
        //module('AuthService');
        module('LoginCtrl');
    });
    
    var authService;
    beforeEach(inject(function(_AuthService_){
        authService = _AuthService_;
    }));

	describe('Logging In', function(){
		it('should login success with test user', inject(function($controller){
            var scope = {};

			var myController = $controller('loginController', {
                    $scope:scope,
                    AuthService : authService
                });
            scope.loginForm = {};
            scope.loginForm.username = 'test';
            scope.loginForm.password = 'test';
            scope.error = true;
            
            scope.login();
            
            // assert.equal(scope.loginForm.username, undefined);
			
		}));
	});
});