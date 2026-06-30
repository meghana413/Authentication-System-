require("dotenv").config({ path: "./.env" });
console.log("MONGO_URI =", process.env.MONGO_URL);
const express = require("express");

const app = express();

const authRouter = require("./routes/userroutes");
const connectDB = require("./config/database");

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/users", authRouter);

connectDB();

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
