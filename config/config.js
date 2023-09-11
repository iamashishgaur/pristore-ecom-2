const mongoose = require("mongoose");
require("colors");
mongoose.Promise = global.Promise;
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongodb Connected ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.error(`Error : ${error.message}`.red);
  }
};

module.exports = connectDb;
