var models = require('../models');
// var dbConnection = require('../db/index'); //mario
// const app = require('../app'); //mario
var express = require('express');
var app = express();
module.exports = {
  messages: {
    get: function (req, res) {
      // models.messages.get('SELECT * FROM messages;',(err, data) => {
      //   if (err) {
      //     console.log('err', err);
      //     return;
      //   }
      //   console.log(data, 'i am data in controollers');
      // });
      
   
    }, 
    
    // a function which handles a get request for all messages
    post: function (req, res) {

      console.log(req.body, 'testing ');
      models.messages.post(req.body, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data, 'datadata');
        res.end('asdfasfd');
      });
      // let body = '';
      // const {json, url} = req;
      // req.on('data', (error, chunk) => {
      //   body += chunk;
      // }).on('end', () => {
      //   const queryArgs = JSON.parse(body);
      //   var valueArr = Object.values(queryArgs);
      //   models.messages.post(`INSERT INTO messages (text) VALUES(${valueArr.join(', ')})`, (err, data) => {
      //     if (err) {
      //       console.log('err in post');
      //       return;
      //     }
      //     console.log(data);
      //   });
      // // });
      // console.log(req.body, 'get req body request get');
      // res.end(';llj;');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },

    post: function (req, res) {
      var queryName = req.body.username;
      console.log(queryName,'This is my queryname');
      models.users.post(queryName, (error, results, fields) => {
        if (error) {
          console.log(error, 'i am a error');
          throw error;
          return;
        }
        console.log(results);
        console.log(fields, "fields"); //unnecessary
        // console.log(req.body);
       res.end('ending the func')
      });
        // models.messages.post(`INSERT INTO messages (text) VALUES('hellooooooo')`, 'hi', (err, data) => {

      // app.post('/users', (request, response) => {
      //   console.log('aqui');
      //     if (err) {
      //       console.log('err in post');
      //       return;
      //     }
      //     console.log(data, 'i am in the post data');
      //   });
      //   res.end('mariooooooooo');
      // });
    }
  }
};

