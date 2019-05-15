const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentDisplay = require('./views/instrument_display.js');
const InstrumentSelection = require('./views/instrument_selection.js');
const instrumentData = require('./data/instrument_family_data.js');



document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector("select#instrument-families");
  const instrumentDataModel = new InstrumentSelection(selectElement)
  instrumentDataModel.bindEvents();

  const familyContainer = document.querySelector("#instrument-families")
  const instrumentSelection = new InstrumentSelection(familyContainer);
  instrumentSelection.bindEvents()


  // const InstrumentDisplay = new InstrumentDisplay
  // InstrumentDisplay.bindEvents()


});
