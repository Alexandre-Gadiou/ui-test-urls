var viewports = [
   {
      "name": "phone_vertical",
      "width": 320,
      "height": 480
    },{
      "name": "phone_horizontal",
      "width": 480,
      "height": 320
    }, {
      "name": "tablet_vertical",
      "width": 768,
      "height": 1024
    }, {
      "name": "tablet_horizontal",
      "width": 1024,
      "height": 768
    }, {
      "name": "desktop_medium",
      "width": 1280,
      "height": 800
    }, {
      "name": "desktop_large",
      "width": 1920,
      "height": 1080
    }
];

var config = require("./test-config.json");



// Hide any selectors you don't need
var hideSelectors = ["iframe"];
// Take out any selectors
var removeSelectors = [];
// Just get look at these selectors
var selectors = ["document"];
var scenariosArray = [];


// Loop through all urls
var urls = config.urls;
urls.forEach(function(file, i) {
  console.log(file);
  var filename = file;
  scenariosArray.push({
    "label": filename,
    "url": filename,
    "hideSelectors": hideSelectors,
    "removeSelectors": removeSelectors,
    "selectors": selectors,
    "delay": 500
  });
});


module.exports = {
  "id": config.name,
  "viewports": viewports,
  "scenarios": scenariosArray,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "casper_scripts": "backstop_data/casper_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "casperFlags": [],
  "engine": "phantomjs",
  "report": ["CLI"],
  "cliExitOnFail": true,
  "debug": false
}
