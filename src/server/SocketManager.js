const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('../Events');

const { createUser, createMessage, createChat } = require('../Factories');

const io = require('./index.js').io;


// hold connected users, { username: {id: 'x2s', name: username},  }
const connectedUser = {};

module.exports = function(socket) {
  console.log("Socket ID " + socket.id);

  // Verify username
  socket.on(VERIFY_USER, (nickname, callback) => {
    if(isUser(connectedUser, nickname)) {
      callback({ isUser: true, user:null });
    } else {
      callback({ isUser: false, user: createUser({name: nickname}) })
    }
  })
  // User connects with username

  // User disconnects

  // User logouts


}

// TODO: addChat

/*
* Adds user to the passed in object
* @param userList {Object} list of users
* @param username {String} name of the new user
* @return userList {Object} list for new user
*/
function addUser(userList, user) {
  let newList = Object.assign({}, userList);
  newList[user.name] = user;
  return newList;
}

/*
* Removes user from pased in object
* @param userList {Object} list of users
* @param username {String} name of user to be removed
* @return userList {Object} new list of users
*/
function removeUser(userList, username) {
  let newList = Object.assign({}, userList);
  delete newList[username];
  return newList;
}

/*
* Function that checks if provided nickname already exists in
* passed in object
* @param userList {Object} list of users
* @param username {String} name of user to be checked
* @return true/false {boolean}
*/
function isUser(userList, username) {
  return username in userList;
}