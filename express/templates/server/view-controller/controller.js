'use strict';

module.exports = function(req, res, next) {
	res.scope.title = 'pd-project:express'
	next();
};
