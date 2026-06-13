import mongoose, { Schema, models } from "mongoose";

const CaseStudySchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    summary: { type: String, required: true },
    image: { type: String, required: true },
    outcome: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.CaseStudy || mongoose.model("CaseStudy", CaseStudySchema);