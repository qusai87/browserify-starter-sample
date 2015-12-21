jQuery = $ = require('jquery');

//var foundation = require('foundation');
//$(document).foundation();

var _ = require('underscore'),
    names = require('./heroes.js'),
    findSuperman = require('./superman.js')


if (findSuperman(names())) {
  document.write('We found Superman :D');
} else {
  document.write('No Superman...');
}

