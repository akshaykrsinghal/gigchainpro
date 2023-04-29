const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const mongoDB = process.env.MONGODB_URI_KEY;

module.exports = async function mongodbconnect() {
    await mongoose.connect(mongoDB);
  }