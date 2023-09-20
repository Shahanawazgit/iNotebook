const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config().parsed;

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
