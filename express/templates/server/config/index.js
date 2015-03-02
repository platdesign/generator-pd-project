'use strict';

var path = require('path');
var extend = require('extend');

var env = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

var config = {};
var glob = require( path.join(__dirname, 'global.js'));

extend(true, config, glob, require(path.join(__dirname, env+'.js')));


config.middleware = function(req, res, next) {
	req.config = config;
	next();
};


module.exports = config;
