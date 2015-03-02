'use strict';

var express 		= require('express'),
	path 			= require('path')
;

module.exports = function() {

	//serve pd-project:assets
	this.use('/assets', express.static( path.join(__dirname, '..', '..', 'assets', 'build') ));

};
