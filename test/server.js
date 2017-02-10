var chai = require('chai'),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3000');

var loggedInUser,suggestLocation;

describe('Forecast Backend', function(){
    describe('Checking Server Status',function(){
        it('should return http 200 status ', function(done){
            api.get('/')
                .expect(200)
                .end(function(err,res){
                    if(err){
                        done(error);
                    } else {
                        expect(res.body.token).to.not.equal(null);
                        done();
                    }                
                });
            });
        });

    describe('Checking User Login/Register',function(){
        it('should fail to register existing username(test) and password (test)', function(done){
            api.post('/user/register')
                .set('Accept','application/x-www-form-urlencoded')
                .send({username: 'test',password:'test'})
                .expect('Content-type','application/json; charset=utf-8')
                .expect(500)
                .end(function(err,res){
                    if(err){
                        done(err);
                    } else {
                        expect(res.body.err).to.not.equal(null);
                        done();
                    }                
                });
            });
        it('should fail to login with existing username(test) and wrong password (test1)', function(done){
            api.post('/user/login')
                .set('Accept','application/x-www-form-urlencoded')
                .send({username: 'test', password:'test1'})
                .expect('Content-type','application/json; charset=utf-8')
                .expect(401)
                .end(function(err,res){
                    if(err){
                        done(err);
                    } else {
                        expect(res.body.err).to.not.equal(null);
                        done();
                    }
                });
            });
        it('should success to login with existing username(test) and password (test)', function(done){
            api.post('/user/login')
                .set('Accept','application/x-www-form-urlencoded')
                .send({username: 'test', password:'test'})
                .expect('Content-type','application/json; charset=utf-8')
                .expect(200)
                .end(function(err,res){
                    if(err){
                        done(err);
                    } else {
                        expect(res.body.status).to.equal('Login successful!');
                        loggedInUser= res.header['set-cookie'][0].split(';')[0];
                        done();
                    }
                });
            });
        // it('should able to logout', function(done){
        //     api.get('/user/logout')
        //         .expect(200)
        //         .end(function(err,res){
        //             if(err){
        //                 done(err);
        //             } else {
        //                 expect(res.body.status).to.equal('Bye!');
        //                 done();
        //             }
        //         });
        //     });
        });
    
    
    describe('Checking User Actions',function(){
        it('should be able to get user past searches', function(done){
            api.get('/user/pastSearches')
                .set("Cookie",loggedInUser)
                .expect('Content-type','application/json; charset=utf-8')
                .expect(200)
                .end(function(err,res){
                    if(err){
                        done(err);
                    } else {
                        expect(res.username).to.not.equal(null);
                        done();
                    }                
                });
            });
    });
    describe('Checking Weather Functionality',function(){
        it('should be able to show suggestion list from {washi}', function(done){
            api.post('/placeData')
                .set("Cookie",loggedInUser)
                .send({place: 'washi'})
                .expect('Content-type','application/json; charset=utf-8')
                .expect(200)
                .end(function(err,res){
                    if(err){
                        done(err);
                    } else {
                        expect(res.body).to.not.equal(null);
                        suggestLocation = res.body[0];
                        done();
                    }                
                });
            });

        it('should be able to get {Washington} weather', function(done){
            api.post('/weather/currently')
                .set("Cookie",loggedInUser)
                .send({place: suggestLocation})
                .expect('Content-type','application/json; charset=utf-8')
                .expect(200)
                .end(function(err,res){
                    if(err){
                        done(err);
                    } else {
                        expect(res.body).to.not.equal(null);
                        //console.log(res.body);
                        done();
                    }                
                });
            });
        });

    describe('Checking User Logout',function(){
        it('should able to logout', function(done){
            api.get('/user/logout')
                .expect(200)
                .end(function(err,res){
                    if(err){
                        done(err);
                    } else {
                        expect(res.body.status).to.equal('Bye!');
                        done();
                    }
                });
            });
        });
});