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
    query = query.sort({ date: -1 });
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

function create(json: Writing): Promise<Writing> {
  const w = new WritingModel(json);
  return w.save();
}

function update(title: string, writing: Writing): Promise<Writing> {
  return WritingModel.findOneAndUpdate({ title }, writing, {
    new: true,
  }).then((updated) => {
    if (!updated) throw `${title} not updated`;
    else return updated as Writing;
  });
}

function remove(title: string): Promise<void> {
  return WritingModel.findOneAndDelete({ title }).then((deleted) => {
    if (!deleted) throw `${title} not deleted`;
  });
}

export default { index, get, getBySeries, create, update, remove };
