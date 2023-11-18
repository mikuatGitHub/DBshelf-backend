// mongodbへ接続
import mongoose from "mongoose";
import env from "dotenv";
env.config();

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.once("error", function (err) {
  console.error("db-connect-error", err);
});
db.once("open", function () {
  console.log("db-connect-success");
});
