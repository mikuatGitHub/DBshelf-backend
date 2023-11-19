// /api/skills
import express from "express";
import {
  getAllSkills,
  getSkillById,
  registerSkill,
  deleteSkill,
  updateSkill,
} from "../controllers/skills.mjs"
import { requestErrorHandler } from "../helpers/helper.mjs";


const router = express.Router();
// getAll
router.get("/",
  // res.send("Hello World! from /api/skills");

  // // mongooseのmodelからdb一覧取得、controllerへ移動
  // const skills = await Skill.find()
  // res.json(skills)
  requestErrorHandler(getAllSkills));
// getOne
router.get("/:id", requestErrorHandler(getSkillById));
// post
router.post("/",  requestErrorHandler(registerSkill));
// delete
router.delete("/:id", requestErrorHandler(deleteSkill));
// update
router.patch("/:id", requestErrorHandler(updateSkill));

export default router;
