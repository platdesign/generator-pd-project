'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');


module.exports = class PdProjectGenerator extends Generator {

	constructor(args, opts) {
		super(...arguments);
	}

	initializing() {
		this.appname = this.appname.replace(/\s+/g, '-');
		this.spawnCommandSync('git', ['init', '--quiet']);
	}

	prompting() {

		// Have Yeoman greet the user.
		this.log(yosay('Platdesign project'));

		let prompts = [
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

		return this.prompt(prompts)
		// To access props later use this.props.someAnswer;
		.then(props => this.props = props);
	}

	configuring() {

	}

	writing() {

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

		this.fs.copy(
			this.templatePath('_editorconfig'),
			this.destinationPath('.editorconfig')
		);

		this.fs.copy(
			this.templatePath('_jshintrc'),
			this.destinationPath('.jshintrc')
		);

		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore')
		);

	}

	install() {
	}

	end() {
	}

};
