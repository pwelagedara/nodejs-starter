'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

// CORS
require('./middleware/cross_origin_middleware')(app);

// Application Config
require('./config/application_config')(app);

var config = {
  appRoot: __dirname, // required config

  // Security Handlers
  swaggerSecurityHandlers: {
    apiKeyAuth: function(req, authOrSecDef, scopesOrApiKey, cb) {
        var apiKey = req.headers['x-api-key']; // Values get simplified here.
        console.log(req.headers);
        console.log(apiKey);
        if (apiKey) {
            if(apiKey == app.get("API_KEY")) {
                cb();
            } else{
                cb(new Error('authentication failed'));
            }
        } else {
            cb(new Error('authentication failed'));
        }
    }
  }
};

module.exports = {
  app: app,
  db: require('nano')(app.get("DATABASE_CONNECTION")).use(app.get("DATABASE"))
}; 

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
    console.log('pass X-Api-Key in headers')
  }
});
