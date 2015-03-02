'use strict';

var path = require('path');

module.exports = function() {

	var config = this.config = require(path.join(__dirname, '..', 'config'));

	this.use(config.middleware);

};
