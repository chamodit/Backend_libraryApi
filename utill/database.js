const mongoose = require("mongoose");
const config = require("../config/database.json");

//const username = config.username;
const password = config.password;
const url = config.url;

const connect = () => mongoose.connect(url.replace("<password>", password));

module.exports = {
  connect,
};
