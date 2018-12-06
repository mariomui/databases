-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userId INT(5) AUTO_INCREMENT NOT NULL,
  name VARCHAR(25) DEFAULT NULL,
  PRIMARY KEY(userId)
);

CREATE TABLE rooms (
  roomId INT(5) AUTO_INCREMENT NOT NULL,
  roomName VARCHAR(25) DEFAULT NULL,
  PRIMARY KEY(roomId)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messageId INTEGER(5) AUTO_INCREMENT NOT NULL,
  text VARCHAR(120) DEFAULT NULL,
  _roomId INT(5) NOT NULL REFERENCES rooms(roomId),
  _userId INT(5) NOT NULL REFERENCES users(userId),
  PRIMARY KEY(messageId)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

