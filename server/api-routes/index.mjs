// /api
import express from "express";
import skillsRouter from "./skills.mjs";

const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello World! from /api");
});

router.use('/skills', skillsRouter)

export default router;
