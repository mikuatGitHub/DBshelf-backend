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
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

// model(model名, schema)
export const Skill= model("Skill", skillSchema)
