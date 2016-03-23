var assert = require('chai').assert;
var athlete = require('../athlete.js');
var bottle = require('../water_bottle.js')


describe('Rodger Federer', function(){

  it('hydration should start at 100', function(){
    assert.equal( 100, athlete.hydration);
  });

  it('distance covered should start at 0', function(){
    assert.equal( 0, athlete.distanceCovered);
  });

  it('when run reduce hydration by 10 and increase distanceCovered by 10', function(){
    athlete.run();
    assert.equal( 90, athlete.hydration );
    assert.equal( 10, athlete.distanceCovered );
  });

  it('when run the athlete should move until hydration reaches 0, then should stop', function(){
    athlete.hydration = 3;
    athlete.distanceCovered = 0;
    athlete.run();
    assert.equal( 0, athlete.hydration);
    assert.equal( 3, athlete.distanceCovered);
  });

  it('athlete hydration should increse by 10 when drink from water bottle and also water bottle volume should decrease by 10.', function(){
    athlete.hydration = 50;
    bottle.volume = 50;
    athlete.drink();
    assert.equal( 60, athlete.hydration);
    assert.equal( 40, bottle.volume);
  })

});