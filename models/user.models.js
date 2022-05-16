const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "shariful islam",
    email: "sharif@gmail.com",
  },
  {
    id: uuidv4(),
    username: "ariful islam",
    email: "arif@gmail.com",
  },
];
module.exports = users;
