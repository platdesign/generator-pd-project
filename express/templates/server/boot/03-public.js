'use strict';

var express 		= require('express'),
	path 			= require('path')
;

module.exports = function() {

	//serve public files (favicon, etc)
	this.use(express.static( path.join(__dirname, '..', 'public') ));

};
