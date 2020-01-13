var guillotineLib = require('/lib/guillotine');
var graphqlPlaygroundLib = require('/lib/graphql-playground');
var graphQlLib = require('/lib/graphql');



//──────────────────────────────────────────────────────────────────────────────
// Constants
//──────────────────────────────────────────────────────────────────────────────
var CORS_HEADERS = {
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Origin': '*'
};

var SCHEMA = guillotineLib.createSchema();


//──────────────────────────────────────────────────────────────────────────────
// Error handling
//──────────────────────────────────────────────────────────────────────────────
function createNotFoundError() {
    return {
        status: 404,
        body: {
            "errors": [
                {
                    "errorType": "404",
                    "message": "Not found"
                }
            ]
        }
    }
}

function createForbiddenError() {
    return {
        status: 403,
        body: {
            "errors": [
                {
                    "errorType": "403",
                    "message": "Forbidden"
                }
            ]
        }
    }
}


//──────────────────────────────────────────────────────────────────────────────
// Methods
//──────────────────────────────────────────────────────────────────────────────
exports.options = function () {
	return {
		contentType: 'text/plain;charset=utf-8',
		headers: CORS_HEADERS
	};
};

exports.get = function (req) {
    var body = graphqlPlaygroundLib.render();
    return {
        contentType: 'text/html; charset=utf-8',
        body: body
    };
};

exports.post = function (req) {
    var body = JSON.parse(req.body);
    return {
        contentType: 'application/json',
		headers: CORS_HEADERS,
        body: graphQlLib.execute(SCHEMA, body.query, body.variables)
    };
};

