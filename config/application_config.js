'use strict';

module.exports = function(app) {

	// API Key
	app.set('API_KEY', '123e4567-e89b-12d3-a456-426655440000');
	
	// Database
	app.set('DATABASE', 'db_name');
	app.set('DATABASE_CONNECTION', 'http://admin:password@apifest-backend-db-v2.eastus2.cloudapp.azure.com:5984');

	// URLs
	app.set('URL_W3SCHOOL_CUSTOMERS', 'https://www.w3schools.com/angular/customers.php');

	// Example Configuration Parameter from Environment
	// app.set('ENDPOINT_RELAY', process.env.ENDPOINT_RELAY || 'https://b51730ef.ngrok.io/relay');

};
