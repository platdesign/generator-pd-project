'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var sys = require('sys');
var spawn = require('child_process').spawn;


var PdProjectGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('Creating assets folder');

    var done = this.async();
    this.spawnCommand('git', ['clone', 'https://github.com/platdesign/pd-project-assets.git', 'assets'], done);


  },
  writing: function () {

  }
});

module.exports = PdProjectGenerator;
