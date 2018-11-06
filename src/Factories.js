const uuidv4 = require('uuid/v4');

/* Creating User object 
*  @prop id {string}
*  @prop name {string}
*  @param {object}
*     name {string}
*/
const createUser = ({name = ""} = {}) => (
  {
    id: uuidv4(),
    name
  }
)

/* Creating message object 
*  @prop id {string}
*  @prop time {Date} 24h format -> 17:38
*  @prop message {string{
*  @prop sender {string} name of message sender
*  @param {object}
*     message {string}
*     sender {string}
*/
const createMessage = ({message = "", sender = ""} = {}) => (
  {
    id: uuidv4(),
    time: getTime(new Date(Date.now())),
    message,
    sender
  }
)

/* Creating chat object
*  @prop id {string}
*  @prop name {string}
*  @prop messages {Array.string} 
*  @prop users {Array.string}
*  @prop typingUsers {Array.string}
*  @param {object}
*     messages {Array.Message}
*     name {string}
*     users {Array.string}
*/
const createChat = ({messages = [], name = "Community", users = []} = {}) => (
  {
    id: uuidv4(),
    name,
    messages,
    users,
    typingUsers: []
    
  }
) 


/* format time */
const getTime = (date) => {
  return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`;
} 


module.exports = {
  createChat,
  createUser,
  createMessage
}

