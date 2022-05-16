const users = require("../models/user.models");
const { v4: uuidv4 } = require("uuid");

//get user
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

//post user
const createUsers = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json(users);
};

//put user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });

  res.status(201).json(users);
};

//delete user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  //   const { username, email } = req.body;
  //   users
  //     .filter((user) => user.id !== userId)
  //     .map((selectedUser) => {
  //       selectedUser.username = username;
  //       selectedUser.email = email;
  //     });

  const users = users.filter((user) => user.id !== userId);

  res.status(200).json(users);
};

module.exports = { getAllUsers, createUsers, updateUser, deleteUser };
