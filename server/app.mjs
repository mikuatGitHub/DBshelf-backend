// root
import express from "express";
import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  // res.send("Hello World! from root");

});

app.use(function (req, res) {
  res.status(404).send("Page Not Found");
});
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({ msg: "予期せぬエラーが発生しました。" });
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
