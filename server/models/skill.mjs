// mongooseのmodel「Skill」を露出
import { Schema, model } from "mongoose";

const skillSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

// model(model名, schema)
const Skill= model("Skill", skillSchema)
export default Skill;
