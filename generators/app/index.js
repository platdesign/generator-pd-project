'use strict';
var Base = require('yeoman-generator').Base;
var yosay = require('yosay');


module.exports = Base.extend({
	init: function () {
		this.appname = this.appname.replace(/\s+/g, '-');
	},

	prompting: function () {

		// Have Yeoman greet the user.
		this.log(yosay('Platdesign project'));

		var prompts = [
			{
				type: 'input',
				name: 'appname',
				message: 'Your project name',
				default: this.appname
			},
			{
				type: 'input',
				name: 'appdesc',
				message: 'Describe your project',
				default: 'A project by platdesign.de'
			},
			{
				type: 'input',
				name: 'appauthor',
				message: 'Who is the author?',
				default: 'Christian Blaschke <mail@platdesign.de>'
			}
		];

		return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
	},

	writing: function () {

		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			this.props
		);

		this.fs.copyTpl(
			this.templatePath('_README.md'),
			this.destinationPath('README.md'),
			this.props
		);

	},

	projectfiles: function () {
		this.copy('./_editorconfig', '.editorconfig');
		this.copy('./_jshintrc', '.jshintrc');
		this.copy('./_gitignore', '.gitignore');
		this.copy('./_gitattributes', '.gitattributes');
	}
});
