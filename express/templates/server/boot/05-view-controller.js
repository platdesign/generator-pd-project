'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');


function registerViewCtrl(dir) {

	var router = express.Router();


	// Walk directory recursivley
	fs.readdirSync(dir).forEach(function(item) {
		var itemPath = path.join(dir, item);
		var stat = fs.statSync(itemPath);
		if( stat.isDirectory() ) {
			router.use('/'+item, registerViewCtrl(itemPath));
		}
	});


	function createHandler(method) {
		var viewFile = (method) ? method + '.view.jade' : 'view.jade';
		var ctrlFile = (method) ? method + '.controller.js' : 'controller.js';

		method = method || 'all';

		var viewFilePath = path.join(dir, viewFile);
		var ctrlFilePath = path.join(dir, ctrlFile);

		if( fs.existsSync(ctrlFilePath) ) {
			router[method]('/', require(ctrlFilePath));
		}

		if( fs.existsSync(viewFilePath) ) {
			router[method]('/', function(req, res) {
				res.render(viewFilePath, res.scope);
			});
		}

	}

	createHandler('get');
	createHandler('post');
	createHandler('put');
	createHandler('delete');
	createHandler();

	return router;

}




var router = registerViewCtrl(path.join(__dirname, '..', 'view-controller'));


module.exports = function() {
	this.set('view engine', 'jade');
	this.locals.basedir = path.resolve(__dirname, '..');

	this.use(function(req, res, next) {
		res.scope = {};
		next();
	});
	this.use(router);
};
