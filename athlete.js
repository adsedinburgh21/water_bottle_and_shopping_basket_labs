var bottle = require('./water_bottle.js')


var rodgerFederer = {
  hydration: 100,
  distanceCovered: 0,
  run: function(){
    if( this.hydration >= 10){
      this.hydration -= 10;
      this.distanceCovered += 10;
    } else {
        this.distanceCovered += this.hydration;
        this.hydration = 0;
      };
  },
  drink: function(){
    if( this.hydration < 100){
      var beforeDrink = bottle.volume;
      bottle.drink();
      var amountHydrated = beforeDrink - bottle.volume;
      this.hydration += amountHydrated;
    };
  }
};


module.exports = rodgerFederer;
