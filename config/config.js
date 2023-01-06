const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    // const url = "mongodb://127.0.0.1:27017/mern-pizza";
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
     
          
    });
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;