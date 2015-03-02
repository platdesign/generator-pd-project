'use strict';

var express 		= require('express'),
	path 			= require('path'),
	fs				= require('fs')
;


var app = module.exports = express();

// Load boot-scripts
var bootPath = path.join(__dirname, 'boot');
fs.readdirSync( bootPath ).forEach(function(item) {
	var itemPath = path.join(bootPath, item);
	var stat = fs.statSync(itemPath);

	if(stat.isFile() && item.substr(0,1) !== '.') {
		var m = require( itemPath );
		m.call(app);
	}
});


var server = app.listen(app.config.port, function() {
  console.log('Server listening on port ' + server.address().port);
});
