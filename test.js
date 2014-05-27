var ips = require ('./');

describe ('Bitbucket whitelist', function(){
  it('should get the ips', function(done){
    ips (function(err, obj) {
      if (err) return done(err);
      obj.outbounds.length.should.above(0); 
      obj.outbounds.length.should.above(0); 
      done(); 
    });
  });
});