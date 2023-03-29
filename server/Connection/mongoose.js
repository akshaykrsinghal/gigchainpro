const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const mongoDB = "mongodb+srv://themybooklet:Mongodb123@cluster0.j164z.mongodb.net/gigchain";

module.exports = async function mongodbconnect() {
    await mongoose.connect(mongoDB);
  }