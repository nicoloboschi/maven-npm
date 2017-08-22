/* jshint browser: true */
const $ = require("jquery");
const DOMCreator = require('./DOMCreator.js');

$(document).ready(function () {
    let dom = new DOMCreator();
    dom.createSimpleList([{First: 'Milk'}, {Second: 'Cheerios'}], 'root');
});



