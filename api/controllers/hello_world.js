'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var couchdbDatabaseService = require('./../services/database/couchdb_database_service');
var w3schoolApiService = require('./../services/api/w3school_api_service');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  hello: hello
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // // Insert Document
  // couchdbDatabaseService.insert()
  //       .then(function (json){
  //         console.log('success');
  //   }).catch(function (err){
  //       console.log('error');
  //   }); 

  // // Update Document
  // couchdbDatabaseService.update("a8944c0611c058d63e1b13e89902f37b")
  //     .then(function (json){
  //       console.log('success');
  //       console.log(json);
  //   }).catch(function (err){
  //     console.log('error');
  //   });

  // // Delete Revision
  // couchdbDatabaseService.deleteRevision("a8944c0611c058d63e1b13e89902d110", "1-97b2da4c0ee202fd2c554ca88cb130d1")
  //     .then(function (json){
  //       console.log('success');
  //       console.log(json);
  //   }).catch(function (err){
  //     console.log('error');
  //   });
  
  // // Find All
  // couchdbDatabaseService.findAll()
  //     .then(function (json){
  //       console.log('success');
  //       console.log(json);
  //   }).catch(function (err){
  //     console.log('error');
  //   });

  // // Find One
  // couchdbDatabaseService.findOne("a8944c0611c058d63e1b13e89902f37b")
  //     .then(function (json){
  //       console.log('success');
  //       console.log(json);
  //   }).catch(function (err){
  //     console.log('error');
  //   });

  // // Find by Collection( Database View)
  // couchdbDatabaseService.getDocumentByCollection("unknown")
  //     .then(function (json){
  //       console.log('success');
  //       console.log(json);
  //   }).catch(function (err){
  //     console.log('error');
  //   });

  // // API Service
  // w3schoolApiService.getCustomers()
  //     .then(function (json){
  //       console.log('success');
  //       console.log(json);
  //   }).catch(function (err){
  //     console.log('error');
  //   });
  
  // // Promise All
	// Promise.all([
  //   w3schoolApiService.getCustomers(),
  //   couchdbDatabaseService.findAll()
  // ]).then(function(values){
  //   console.log('success');
  //   console.log(values[0]);
  //   console.log(values[1]);
  // }).catch(function (err) {
  //   console.log('error');
  // });

  // this sends back a JSON response which is a single string
  // res.json(hello);
  res.status(200).json({ message: hello});
}
