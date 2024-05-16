import mongoose from "mongoose";

const postModels = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    home: { type: String, required: true, trim: true }
})

const Post = mongoose.models.Post || mongoose.model('Post', postModels);

export default Post;