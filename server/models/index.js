var db = require('../db');



module.exports = {
  messages: {
    get: function (queryString, qarg,callback) {
      // db.query(queryString, callback);
      

    }, // a function which produces all the messages
    post: function (queryString,callback) {
      var queryFix = "INSERT INTO users (name) VALUES('" + queryString + "');";
      db.query(queryFix,callback);
      db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

//  dbConnection.query(queryString, queryArgs, function(err, results) {
//           // Should have one result:
//           if (err) {
//             console.log(err);
//             return;
//           } 

