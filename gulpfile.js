'use strict';

global.utils = require('./gulp/utils');

global.config = {
	__dirname: __dirname,

	js: {
		src: './src/js',
		dest: './dist/js'
	},

	css: {
		src: './src/scss',
		dest: './dist/css'
	},

	gfx: {
		src: './src/gfx',
		dest: './dist/gfx'
	}
};


require('gulp-task-loader')('gulp/tasks');
