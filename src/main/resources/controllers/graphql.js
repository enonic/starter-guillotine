//──────────────────────────────────────────────────────────────────────────────
// Imports
//──────────────────────────────────────────────────────────────────────────────
var guillotineLib = require('/lib/guillotine');
var graphQlLib = require('/lib/graphql');


//──────────────────────────────────────────────────────────────────────────────
// Imported functions
//──────────────────────────────────────────────────────────────────────────────
var execute = graphQlLib.execute;


//──────────────────────────────────────────────────────────────────────────────
// Constants
//──────────────────────────────────────────────────────────────────────────────
var CORS_HEADERS = {
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Origin': *
};

var SCHEMA = guillotineLib.createSchema();


//──────────────────────────────────────────────────────────────────────────────
// Public functions
//──────────────────────────────────────────────────────────────────────────────
exports.options = function () {
	return {
		contentType: 'text/plain;charset=utf-8',
		headers: CORS_HEADERS
	};
};


exports.post = function (req) {
	var body = JSON.parse(req.body);
	return {
		contentType: 'application/json',
		body: execute(SCHEMA, body.query, body.variables),
		headers: CORS_HEADERS
	};
};
