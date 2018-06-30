'use strict';

var mainApp = require('./../../../app');
var db = mainApp.db;

module.exports = {
    insert: insert,
    update: update,
    deleteRevision: deleteRevision,
    findAll: findAll,
    findOne: findOne,
    getDocumentByCollection: getDocumentByCollection
}

function insert() {
    return new Promise(function (resolve, reject) {
        db.insert({collection : "message", message: "some message"}, function(err, body, header) {
            if (err) {
                return reject( {status: "error"});
            }else{
                return resolve(body);
            }
        });
    });
}

function update(id) {
    return new Promise(function (resolve, reject) {
        db.get(id, {revs_info: true}, function(err, body) {
            if (err){
                return reject( {status: "error"});
            }else{
                body.message = "updated message";
                db.insert(body, function(err, body) {
                    if (!err){
                        return resolve(body);
                    }else{
                        return reject( {status: "error"});
                    }
                });
            }
        });
    });
}

function deleteRevision(id, rev) {
    return new Promise(function (resolve, reject) {
        db.destroy(id, rev, function(err, body) {
            if (err){
                return reject( {status: "error"});
            }else{
                return resolve(body);
            }
        });
    });
}

function findAll() {
    return new Promise(function (resolve, reject) {
        db.list({include_docs : true}, function(err, body) {
            if (err) {
                return reject( {status: "error"});
            }else{
                var jsonData = [];
                var arrayLength = body.rows.length;
                for(var i = body.rows.length - 1; i >= 0; i--) {

                    if(body.rows[i].doc.collection == "message") {
                       jsonData.push(body.rows[i].doc);
                    }
                }
                return resolve(jsonData);
            }
        }); 
    });   
}

function findOne(id) {
    return new Promise(function (resolve, reject) {
        db.get(id, {revs_info: true}, function(err, body) {
            if (err){
                return reject( {status: "error"});
            }else{
                return resolve(body);
            }
        });
    });
}

function getDocumentByCollection(collection) {
    return new Promise(function (resolve, reject) {
        db.view('viewByCollection', 'new-view', { keys:[collection]}, function(err, body) {
          if (err) {
            return reject( {status: "error"});
          } else{
            return resolve(body.rows);
          }
        });
    });
}


