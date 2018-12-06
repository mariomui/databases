var models = require('../models');
var dbConnection = require('../db/index'); //mario
var app = require('../app').app; //mario

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get('SELECT * FROM messages;',(err, data) => {
        if (err) {
          console.log('err', err);
          return;
        }
        console.log(data, 'i am data in controollers');
        res.end('kdfjdkfj');
      });
    }, 
    
    // a function which handles a get request for all messages
    post: function (req, res) {
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
      console.log(req.body, 'akjdfkj');
      res.end(';llj;');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },

    post: function (req, res) {
      app.post('/users', (request, response) => {
        models.messages.post(`INSERT INTO messages (text) VALUES('hellooooooo')`, 'hi', (err, data) => {
          if (err) {
            console.log('err in post');
            return;
          }
          console.log(data);
        });
      });
    }
  }
};

