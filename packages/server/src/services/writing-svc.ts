import { Schema, model } from "mongoose";
import { Writing } from "../models/writing";

const WritingSchema = new Schema<Writing>(
  {
    category: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    href: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String },
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

function get(slug: string): Promise<Writing> {
  return WritingModel.findOne({ slug }).then((writing) => {
    if (!writing) throw `${slug} Not Found`;
    return writing;
  });
}

function getBySeries(seriesName: string): Promise<Writing[]> {
  return WritingModel.find({ "series.name": seriesName });
}

function create(json: Writing): Promise<Writing> {
  const w = new WritingModel(json);
  return w.save();
}

function update(slug: string, writing: Writing): Promise<Writing> {
  return WritingModel.findOneAndUpdate({ slug }, writing, {
    new: true,
  }).then((updated) => {
    if (!updated) throw `${slug} not updated`;
    else return updated as Writing;
  });
}

function remove(slug: string): Promise<void> {
  return WritingModel.findOneAndDelete({ slug }).then((deleted) => {
    if (!deleted) throw `${slug} not deleted`;
  });
}

export default { index, get, getBySeries, create, update, remove };
