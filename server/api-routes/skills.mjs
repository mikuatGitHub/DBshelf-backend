// /api/skills
import express from "express";
import Skill from "../models/skill.mjs"

const router = express.Router();

router.get("/", async function (req, res) {
  // res.send("Hello World! from /api/skills");

  // mongooseのmodelからdb一覧取得
  const skills = await Skill.find();
  res.json(skills)
  
});

export default router;
