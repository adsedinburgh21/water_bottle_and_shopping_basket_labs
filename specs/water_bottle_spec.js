var assert = require('chai').assert;
var bottle = require('../water_bottle.js')

describe('Water Bottle', function(){
  it('should be empty at start', function(){
    bottle.volume = 0
    assert.equal(0, bottle.volume);
  });

  it('should be full with a value of 100', function(){
    bottle.volume = 0;
    bottle.fill();
    assert.equal( 100, bottle.volume);
  });

  it('should reduce volume by 10 when drank', function(){
    bottle.volume = 100;
    bottle.drink();
    assert.equal( 90, bottle.volume);
  });

  it('volume should be 0 when emptied', function(){
    bottle.volume = 100;
    bottle.empty()
    assert.equal( 0, bottle.volume);
  })

  it('volume should not go below 0', function(){
    bottle.volume = 5;
    bottle.drink()
    assert.equal( 0, bottle.volume);
  })
});


