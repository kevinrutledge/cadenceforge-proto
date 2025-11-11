import { Schema, model } from "mongoose";
import { Writing } from "../models/writing";

const WritingSchema = new Schema<Writing>(
  {
    category: { type: String, required: true },
    href: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String },
    categories: { type: String },
    series: {
      name: String,
      href: String,
      part: String,
    },
  },
  { collection: "cf_writing" }
);

const WritingModel = model<Writing>("Writing", WritingSchema);

interface QueryOptions {
  limit?: number;
  sortByDate?: boolean;
}

function index(options?: QueryOptions): Promise<Writing[]> {
  let query = WritingModel.find();

  if (options?.sortByDate) {
    query = query.sort({ date: -1 }); // descending (newest first)
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  return query;
}

function get(title: string): Promise<Writing> {
  return WritingModel.find({ title })
    .then((list) => list[0])
    .catch((err) => {
      throw `${title} Not Found`;
    });
}

function getBySeries(seriesName: string): Promise<Writing[]> {
  return WritingModel.find({ "series.name": seriesName });
}

export default { index, get, getBySeries };
