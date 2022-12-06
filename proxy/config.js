require('dotenv').config();
var convict = require('convict');

convict.addFormat(require('convict-format-with-validator').ipaddress);
convict.addFormat(require('convict-format-with-validator').url);

//Define a schema
var config = convict({
	env: {
		doc: 'The application environment.',
		format: ['production', 'development', 'test'],
		default: 'development',
		env: 'NODE_ENV'
	},
	ip: {
		doc: 'The IP address to bind.',
		format: 'ipaddress',
		default: '127.0.0.1',
		env: 'IP_ADDRESS',
	},
	port: {
		doc: 'The port to bind.',
		format: 'port',
		default: 3001,
		env: 'PORT',
		arg: 'port'
	},
	url: {
		doc: 'The redirect route to the api app',
		format: 'url',
		default: 'http://localhost:3000',
		env: 'URL'
	}
});

console.log(config.get('port') + config.get('url'));
//Perform validation
config.validate({allowed: 'strict'});

module.exports = config;