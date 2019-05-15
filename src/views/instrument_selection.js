const PubSub = require('../helpers/pub_sub.js')


const InstrumentSelection = function(element) {
  this.element = element;
};


InstrumentSelection.prototype.bindEvents = function () {
  PubSub.subscribe("All-Instrumnets:all-instrument-data-ready", (event) => {
    const allInstrumentFamilies = event.detail;
    console.log("all instrumnets:", allInstrumentFamilies);
    this.renderSelectors(allInstrumentFamilies)
  });

    this.element.addEventListener('change', (event)=>{
      const selection = event.target.value
      PubSub.publish("Instrument Selction: single Instrument Selected", selection)
    })

};


InstrumentSelection.prototype.renderSelectors = function (instrumentFamilyData) {

  instrumentFamilyData.forEach((familiy, index) => {
    const option = document.createElement('option')
    option.textContent = event.name;
    option.value = index;
    this.element.appendChild(option);
  });
};
module.exports = InstrumentSelection
