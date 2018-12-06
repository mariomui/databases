var db = require('../db');



module.exports = {
  messages: {
    get: function (queryString, qarg,callback) {
      // db.query(queryString, callback);
      

    }, // a function which produces all the messages
    post: function (queryObj,callback) {
      var jack = JSON.stringify(queryObj.message);
      // var messageo = queryObj.message;
      // console.log(messageo.replace('\\',''),'jdkfjdkfj');
      // var jack = messageo.replace('\\','');
      var parsedMessage = jack.replace('\'',"\'").split("\"")[1].replace('\'','\\\'');
      // 
      console.log(parsedMessage, 'parsedMessage');
      var query = "INSERT INTO messages (text) VALUES('" + parsedMessage + "');";
      console.log(query, 'qfix');  
      db.query(query, callback);
      // db.end();      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (queryString, callback) {
      var queryFix = "INSERT INTO users (name) VALUES('" + queryString + "');";
      db.query(queryFix,callback);
      // db.end();
    }  
  }
};

//  dbConnection.query(queryString, queryArgs, function(err, results) {
//           // Should have one result:
//           if (err) {
//             console.log(err);
//             return;
//           } 

