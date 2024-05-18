import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  home: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;