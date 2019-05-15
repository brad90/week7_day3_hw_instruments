const PubSub = require('../helpers/pub_sub.js')


const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function(){
  const allData = this.data;
  PubSub.publish("All-Instrumnets:all-instrument-data-ready", allData)
  console.log("all instrument info");


  InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
    const selectedFamily = this.data[selectedIndex];
    PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
  };
}


module.exports = InstrumentFamilies;
