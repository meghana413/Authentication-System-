const mongoose = require("mongoose");

const connectdatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB Connected");
  } catch (error) {
    console.log(error);
    process.exit("Connection Failed");
  }
};

module.exports = connectdatabase;
