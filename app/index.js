'use strict';
//var util = require('util');
//var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
//var chalk = require('chalk');


var Generator = yeoman.generators.Base.extend({
	init: function () {
		this.appname = this.appname.replace(/\s+/g, '-');
	},

	askFor: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay('Platdesign project'));

		var prompts = [
			{
				type: 'input',
				name: 'projectName',
				message: 'Your project name',
				default: this.appname
			},
			{
				type: 'input',
				name: 'projectDescription',
				message: 'Describe your project',
				default: 'A project by platdesign.de'
			},
			{
				type: 'input',
				name: 'author',
				message: 'Who is the author?',
				default: 'Christian Blaschke <mail@platdesign.de>'
			}
		];

		this.prompt(prompts, function (props) {
			this.appname = props.projectName;
			this.appdesc = props.projectDescription;
			this.appauthor = props.author;

			done();
		}.bind(this));
	},

	app: function () {
		this.template('_package.json', 'package.json');
		this.template('_bower.json', 'bower.json');
		this.template('_README.md', 'README.md');
	},

	projectfiles: function () {
		this.copy('./.editorconfig', '.editorconfig');
		this.copy('./.jshintrc', '.jshintrc');
		this.copy('./.bowerrc', '.bowerrc');
		this.copy('./.gitignore', '.gitignore');
		this.copy('./.gitattributes', '.gitattributes');
	}
});

module.exports = Generator;
