'use strict';

var logger 			= require('morgan'),
	cookieParser 	= require('cookie-parser'),
	bodyParser 		= require('body-parser')
;

module.exports = function() {

	this.use(logger('dev'));
	this.use(bodyParser.json());
	this.use(bodyParser.urlencoded({ extended: false }));
	this.use(cookieParser());

};
