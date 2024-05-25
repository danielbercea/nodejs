import mongoose from "mongoose";

const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
  tags: [String], // Un array de etichete
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
