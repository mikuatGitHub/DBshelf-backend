// REST処理
import { Skill } from "../models/skill.mjs";
import { validationResult } from "express-validator";

// getAll
export const getAllSkills = async function (req, res) {
  const skills = await Skill.find().sort({ updatedAt: -1 });
  res.json(skills);
};
// getOne
export const getSkillById = async function (req, res) {
  const skill = await Skill.findById(req.params.id);
  res.json(skill);
};

// post
export const registerSkill = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array();
    return res.status(400).json(errors.array()[0]).send("post-validator-err");
  }

  const skill = new Skill(req.body);
  await skill.save();
  res.status(201).json(skill);
};

// delete
export const deleteSkill = async function (req, res) {
  const _id = req.params.id;
  const result = await Skill.findByIdAndDelete(_id);

  if (result === null) return res.status(404).send("delete-err");
  res.json({msg: "delete-succeed"});
};

// update
export const updateSkill = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());

  const _id = req.params.id;
  const newSkill = await Skill.findByIdAndUpdate(_id, req.body, { new: true });
  if (newSkill === null) return res.status(404);
  res.json(newSkill);
};
