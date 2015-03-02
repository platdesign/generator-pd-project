'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var sys = require('sys');
var spawn = require('child_process').spawn;


var PdProjectGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('Creating express-server');

    var done = this.async();
    this.npmInstall([
    	'express',
    	'morgan',
    	'cookie-parser',
    	'body-parser',
    	'extend',
      'jade',
      'platdesign/jadeit'
    ], {
    	'save': true
    }, done);

  },
  projectfiles: function () {
    this.directory('./server', './server');
  }
});

module.exports = PdProjectGenerator;
