'use strict';

var request = require('request');
var mainApp = require('./../../../app');

module.exports = {
    getCustomers: getCustomers
};

function getCustomers() {

  return new Promise(function (resolve, reject) {

    var options = { 
            method: 'GET',
            url: mainApp.app.get('URL_W3SCHOOL_CUSTOMERS'),
            headers: { 'cache-control': 'no-cache' } 
        };
        
        request(options, function (error, response, body) {
            if (error) {
                return reject( {status: "error"});
            } else{
                return resolve(JSON.parse(body));
            }
        });
  }); 
}